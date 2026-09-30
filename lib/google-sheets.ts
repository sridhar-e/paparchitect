import { createSign } from "node:crypto";

// Appends rows to a Google Sheet as a service account. Uses the REST API directly
// (JWT signed with node:crypto) so no googleapis dependency is needed.

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

let cachedToken: { value: string; expiresAt: number } | null = null;

function config() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  // .env files store the key on one line with literal "\n" sequences.
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME || "Website Submissions";
  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error(
      "Google Sheets is not configured: set GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY and GOOGLE_SHEET_ID"
    );
  }
  return { clientEmail, privateKey, sheetId, tabName };
}

const base64url = (input: string | Buffer) => Buffer.from(input).toString("base64url");

async function accessToken(clientEmail: string, privateKey: string) {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({ iss: clientEmail, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 })
  );
  const signature = createSign("RSA-SHA256").update(`${header}.${claims}`).sign(privateKey);
  const assertion = `${header}.${claims}.${base64url(signature)}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Google token request failed: ${res.status} ${await res.text()}`);
  const { access_token, expires_in } = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: access_token, expiresAt: Date.now() + expires_in * 1000 };
  return access_token;
}

export async function appendRow(values: string[]) {
  const { clientEmail, privateKey, sheetId, tabName } = config();
  const token = await accessToken(clientEmail, privateKey);
  const range = encodeURIComponent(`'${tabName.replace(/'/g, "''")}'!A1`);
  // RAW (not USER_ENTERED) so user input like "=HYPERLINK(...)" is stored as text, never run as a formula.
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [values] }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Google Sheets append failed: ${res.status} ${await res.text()}`);
}
