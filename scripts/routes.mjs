// Shared by the check-* scripts: explicit paths from argv, otherwise every URL in the served /sitemap.xml.
export async function routes(base, argv) {
  if (argv.length) return argv;
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}
