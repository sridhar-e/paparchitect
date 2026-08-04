import { cn } from "@/lib/utils";

const STOPWORDS = new Set(["of", "and", "the", "for", "&"]);

// Real, official logos only exist for a small handful of clients via Simple
// Icons (an open-source logo library). Everyone else gets the monogram mark
// below rather than a fabricated logo for a real, named organisation.
const KNOWN_LOGOS: Record<string, string> = {
  bosch: "bosch",
  siemens: "siemens",
  hsbc: "hsbc",
};

function clientMark(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  const acronym = words.find((w) => w.length >= 2 && w.length <= 6 && w === w.toUpperCase());
  if (acronym) return acronym;

  const significant = words.filter((w) => !STOPWORDS.has(w.toLowerCase()));
  const pool = significant.length ? significant : words;

  if (pool.length === 1) return pool[0].toUpperCase();
  return pool.slice(0, 4).map((w) => w[0].toUpperCase()).join("");
}

export function ClientBadge({
  name,
  className,
  hideLabel = false,
}: {
  name: string;
  className?: string;
  hideLabel?: boolean;
}) {
  const logoSlug = KNOWN_LOGOS[name.trim().toLowerCase()];

  return (
    <div
      className={cn(
        "group flex h-full flex-col items-center justify-center gap-2.5 bg-card px-4 py-7 text-center transition-colors duration-300 hover:bg-brand-cream",
        className
      )}
    >
      {logoSlug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${logoSlug}/20386c`}
          alt={hideLabel ? name : ""}
          aria-hidden={hideLabel ? undefined : true}
          className="h-7 w-auto max-w-full sm:h-9"
        />
      ) : (
        <span
          role={hideLabel ? "img" : undefined}
          aria-label={hideLabel ? name : undefined}
          aria-hidden={hideLabel ? undefined : true}
          className="font-heading text-lg font-bold tracking-wide text-brand-navy/85 transition-colors duration-300 group-hover:text-brand-gold-text sm:text-xl"
        >
          {clientMark(name)}
        </span>
      )}
      {!hideLabel && (
        <span className="text-[11px] font-medium leading-snug text-muted-foreground/80">
          {name}
        </span>
      )}
    </div>
  );
}
