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

// Supplied artwork, keyed by client name (lowercased). Aliases cover the
// shorter names used in the home page marquee.
const LOCAL_LOGOS: Record<string, string> = {
  // Industries
  aavin: "/images/Industries-logo-3.webp",
  adani: "/images/Industries-logo-4.webp",
  "amann group": "/images/Industries-logo-1.webp",
  "ashley alteams": "/images/Industries-logo-5.webp",
  "ashok leyland": "/images/Industries-logo-6.webp",
  bosch: "/images/Industries-logo-7.webp",
  csd: "/images/Industries-logo-8.webp",
  freudenberg: "/images/Industries-logo-9.webp",
  "hsmi hwaseung": "/images/Industries-logo-10.webp",
  "klueber lubrication": "/images/Industries-logo-11.webp",
  kmf: "/images/Industries-logo-12.webp",
  milma: "/images/Industries-logo-13.webp",
  "mother dairy": "/images/Industries-logo-14.webp",
  "nddb dairy services": "/images/Industries-logo-15.webp",
  "nok-freudenberg": "/images/Industries-logo-16.webp",
  nsure: "/images/Industries-logo-17.webp",
  rieter: "/images/Industries-logo-19.webp",
  siemens: "/images/Industries-logo-20.webp",
  sipcot: "/images/Industries-logo-21.webp",
  temico: "/images/Industries-logo-22.webp",
  vibracoustic: "/images/Industries-logo-23.webp",
  yapp: "/images/Industries-logo-24.webp",
  yazaki: "/images/Industries-logo-2.webp",
  "zf wind power": "/images/Industries-logo-25.webp",

  // Institutions
  "university of madras": "/images/Institutions-logo-1.webp",
  "institute of chartered accountants of india": "/images/Institutions-logo-2.webp",
  "indian institute of astrophysics": "/images/Institutions-logo-3.webp",
  "indian institute of banking & finance": "/images/Institutions-logo-4.webp",
  "iit madras": "/images/Institutions-logo-5.webp",
  "institute of life sciences bhubaneswar": "/images/Institutions-logo-6.webp",
  "iit indore": "/images/Institutions-logo-7.webp",
  "kodaikanal international school": "/images/Institutions-logo-8.webp",
  "niot chennai": "/images/Institutions-logo-9.webp",
  "nit tiruchirappalli": "/images/Institutions-logo-10.webp",
  "nit calicut": "/images/Institutions-logo-12.webp",

  // Residential
  "appaswamy real estates": "/images/Residential-logo-1.webp",
  "chhattisgarh housing board": "/images/Residential-logo-2.webp",
  "karnataka housing board": "/images/Residential-logo-3.webp",
  rgrhcl: "/images/Residential-logo-4.webp",
  "tamil nadu housing board": "/images/Residential-logo-5.webp",

  // Commercial
  "bank of baroda": "/images/Commercial-logo-1.webp",
  "canara bank": "/images/Commercial-logo-2.webp",
  cyberpark: "/images/Commercial-logo-3.webp",
  "dhanlaxmi bank": "/images/Commercial-logo-4.webp",
  "indian overseas bank": "/images/Commercial-logo-5.webp",
  gar: "/images/Commercial-logo-6.webp",
  "indian bank": "/images/Commercial-logo-7.webp",
  "infopark kochi": "/images/Commercial-logo-8.webp",
  infopark: "/images/Commercial-logo-8.webp",
  sbi: "/images/Commercial-logo-9.webp",
  "technopark kerala": "/images/Commercial-logo-10.webp",
  technopark: "/images/Commercial-logo-10.webp",
  "tidel park": "/images/Commercial-logo-11.webp",
  "union bank of india": "/images/Commercial-logo-12.webp",
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
  const key = name.trim().toLowerCase();
  const localLogo = LOCAL_LOGOS[key];
  const logoSlug = KNOWN_LOGOS[key];

  return (
    <div
      className={cn(
        "group flex h-full flex-col items-center justify-center gap-2.5 bg-card px-4 py-7 text-center transition-colors duration-300 hover:bg-brand-cream",
        className
      )}
    >
      {/* Every mark gets the same box; object-contain scales it to fit. */}
      <div className="flex h-10 w-full items-center justify-center sm:h-12">
        {localLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={localLogo}
            alt={hideLabel ? name : ""}
            aria-hidden={hideLabel ? undefined : true}
            className="max-h-full max-w-full object-contain"
          />
        ) : logoSlug ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${logoSlug}/20386c`}
            alt={hideLabel ? name : ""}
            aria-hidden={hideLabel ? undefined : true}
            className="max-h-full max-w-full object-contain"
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
      </div>
      {!hideLabel && (
        <span className="text-[11px] font-medium leading-snug text-muted-foreground/80">
          {name}
        </span>
      )}
    </div>
  );
}
