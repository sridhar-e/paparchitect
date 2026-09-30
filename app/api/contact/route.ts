import { NextResponse } from "next/server";
import { z } from "zod";
import { appendRow } from "@/lib/google-sheets";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20),
  projectType: z.enum([
    "Residential",
    "Commercial",
    "Industrial",
    "Institutional",
    "Interiors",
    "Other",
  ]),
  location: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  // full URL of the page the form was submitted from
  sourcePage: z.string().trim().max(500).optional().or(z.literal("")),
  // honeypot field — real users never fill this
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company) {
    // honeypot tripped — silently accept without processing
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, projectType, location, message } = parsed.data;
  // Fall back to the Referer header if the client didn't send the page.
  const sourcePage = parsed.data.sourcePage || request.headers.get("referer") || "";

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "medium",
  });

  // Column order must match the header row in the sheet.
  try {
    await appendRow([submittedAt, name, email, phone, projectType, location ?? "", message, sourcePage]);
  } catch (error) {
    console.error("Failed to store enquiry in Google Sheets:", error);
    return NextResponse.json({ error: "Could not submit enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
