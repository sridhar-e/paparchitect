// Usage: node scripts/lh-detail.mjs http://localhost:4101 /
// Same Lighthouse run as lighthouse.mjs, but prints the detail tables of the audits that explain Performance/A11y.
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

const AUDITS = ['bootup-time', 'network-requests', 'unused-javascript', 'color-contrast', 'legacy-javascript',
  'third-party-summary', 'largest-contentful-paint-element', 'lcp-lazy-loaded', 'render-blocking-resources', 'uses-long-cache-ttl'];
const TOP = 12;

const fmt = (v) => {
  if (v == null) return '';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : v.toFixed(1);
  if (typeof v === 'string') return v.length > 90 ? `${v.slice(0, 87)}...` : v;
  if (v.type === 'node') return fmt(`${v.selector || ''} ${v.snippet || ''}`.trim());
  if (v.type === 'url') return fmt(v.value);
  if (v.type === 'source-location') return fmt(`${v.url}:${v.line}`);
  if ('value' in v) return fmt(v.value);
  return fmt(JSON.stringify(v));
};

// Some audits (e.g. LCP element) nest tables in a "list" detail.
const tables = (d) => !d ? [] : d.type === 'list' ? d.items.flatMap(tables) : d.items ? [d] : [];

console.log(`\n${base}${path}`);
for (const id of AUDITS) {
  const a = report.audits[id];
  if (!a) { console.log(`\n## ${id} — (not in this Lighthouse version)`); continue; }
  const score = a.score === null ? 'n/a' : Math.round(a.score * 100);
  console.log(`\n## ${id} — score ${score}${a.displayValue ? ` — ${a.displayValue}` : ''}`);
  for (const t of tables(a.details)) {
    const cols = (t.headings || []).filter((h) => h.key);
    if (!t.items.length) { console.log('  (no items)'); continue; }
    if (cols.length) console.log(`  ${cols.map((h) => (typeof h.label === 'string' ? h.label : h.key)).join(' | ')}`);
    for (const item of t.items.slice(0, TOP))
      console.log(`  ${cols.length ? cols.map((h) => fmt(item[h.key])).join(' | ') : fmt(item)}`);
    if (t.items.length > TOP) console.log(`  … ${t.items.length - TOP} more`);
  }
}
rmSync(dir, { recursive: true, force: true });
