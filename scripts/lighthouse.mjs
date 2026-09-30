// Usage: node scripts/lighthouse.mjs http://localhost:4101 /
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:4101';
const path = process.argv[3] || '/';
const dir = mkdtempSync(join(tmpdir(), 'lh-'));
const out = join(dir, 'report.json');
execFileSync('npx', ['-y', 'lighthouse', `${base}${path}`, '--output=json', `--output-path=${out}`,
  '--chrome-flags=--headless=new --no-sandbox', '--quiet'],
  { stdio: ['ignore', 'ignore', 'inherit'], shell: true, env: { ...process.env, CHROME_PATH: chromium.executablePath() } });
const report = JSON.parse(readFileSync(out, 'utf8'));
console.log(`\n${path}`);
for (const c of Object.values(report.categories)) console.log(`  ${c.title.padEnd(17)} ${String(Math.round(c.score * 100)).padStart(3)}`);
console.log('  ---');
for (const id of ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'])
  console.log(`  ${id.padEnd(26)} ${report.audits[id].displayValue}`);
const failed = [];
for (const c of Object.values(report.categories)) for (const ref of c.auditRefs) {
  const a = report.audits[ref.id];
  if (a.score !== null && a.score < 1) failed.push(`  [${c.title[0]}] ${a.id} — ${a.displayValue || a.title}`);
}
console.log(failed.length ? `\n  not passing:\n${failed.join('\n')}` : '\n  every audit passes');
rmSync(dir, { recursive: true, force: true });
