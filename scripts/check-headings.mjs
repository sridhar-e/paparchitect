// Usage: node scripts/check-headings.mjs http://localhost:4101 [paths...]
// Exactly one h1 per page, and no skipped levels (an h2 may not be followed by an h4, etc.).
import { chromium } from 'playwright';
import { routes } from './routes.mjs';

const base = process.argv[2] || 'http://localhost:4101';
const paths = await routes(base, process.argv.slice(3));

const browser = await chromium.launch();
const page = await browser.newPage();
let failures = 0;
for (const path of paths) {
  await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
  const heads = await page.$$eval('h1,h2,h3,h4,h5,h6', (els) => els
    .filter((e) => !e.closest('[hidden], [aria-hidden="true"]'))
    .map((e) => ({ level: Number(e.tagName[1]), text: e.textContent.trim().replace(/\s+/g, ' ').slice(0, 60) })));
  const problems = [];
  const h1s = heads.filter((h) => h.level === 1).length;
  if (h1s !== 1) problems.push(`${h1s} h1 elements (need exactly 1)`);
  let prev = 0;
  for (const h of heads) {
    if (h.level > prev + 1) problems.push(`skipped level: h${prev || '-'} → h${h.level} "${h.text}"`);
    prev = h.level;
  }
  failures += problems.length;
  console.log(`${problems.length ? 'FAIL' : 'ok  '}  ${path}`);
  for (const p of problems) console.log(`      ${p}`);
}
await browser.close();
console.log(failures ? `\n${failures} heading problem(s)` : '\nall headings pass');
process.exit(failures ? 1 : 0);
