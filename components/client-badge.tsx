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
  aavin: "/images/Industries-logo-3.png",
  adani: "/images/Industries-logo-4.jpg",
  "amann group": "/images/Industries-logo-1.png",
  "ashley alteams": "/images/Industries-logo-5.jpg",
  "ashok leyland": "/images/Industries-logo-6.png",
  bosch: "/images/Industries-logo-7.png",
  csd: "/images/Industries-logo-8.jpg",
  freudenberg: "/images/Industries-logo-9.png",
  "hsmi hwaseung": "/images/Industries-logo-10.jpg",
  "klueber lubrication": "/images/Industries-logo-11.png",
  kmf: "/images/Industries-logo-12.png",
  milma: "/images/Industries-logo-13.png",
  "mother dairy": "/images/Industries-logo-14.png",
  "nddb dairy services": "/images/Industries-logo-15.jpg",
  "nok-freudenberg": "/images/Industries-logo-16.png",
  nsure: "/images/Industries-logo-17.png",
  rieter: "/images/Industries-logo-19.png",
  siemens: "/images/Industries-logo-20.png",
  sipcot: "/images/Industries-logo-21.png",
  temico: "/images/Industries-logo-22.jpg",
  vibracoustic: "/images/Industries-logo-23.png",
  yapp: "/images/Industries-logo-24.jpg",
  yazaki: "/images/Industries-logo-2.png",
  "zf wind power": "/images/Industries-logo-25.png",

  // Institutions
  "university of madras": "/images/Institutions-logo-1.png",
  "institute of chartered accountants of india": "/images/Institutions-logo-2.png",
  "indian institute of astrophysics": "/images/Institutions-logo-3.png",
  "indian institute of banking & finance": "/images/Institutions-logo-4.png",
  "iit madras": "/images/Institutions-logo-5.png",
  "institute of life sciences bhubaneswar": "/images/Institutions-logo-6.png",
  "iit indore": "/images/Institutions-logo-7.png",
  "kodaikanal international school": "/images/Institutions-logo-8.png",
  "niot chennai": "/images/Institutions-logo-9.jpg",
  "nit tiruchirappalli": "/images/Institutions-logo-10.png",
  "nit calicut": "/images/Institutions-logo-12.png",

  // Residential
  "appaswamy real estates": "/images/Residential-logo-1.png",
  "chhattisgarh housing board": "/images/Residential-logo-2.png",
  "karnataka housing board": "/images/Residential-logo-3.jpg",
  rgrhcl: "/images/Residential-logo-4.jpg",
  "tamil nadu housing board": "/images/Residential-logo-5.png",

  // Commercial
  "bank of baroda": "/images/Commercial-logo-1.png",
  "canara bank": "/images/Commercial-logo-2.png",
  cyberpark: "/images/Commercial-logo-3.png",
  "dhanlaxmi bank": "/images/Commercial-logo-4.png",
  "indian overseas bank": "/images/Commercial-logo-5.png",
  gar: "/images/Commercial-logo-6.jpg",
  "indian bank": "/images/Commercial-logo-7.png",
  "infopark kochi": "/images/Commercial-logo-8.png",
  infopark: "/images/Commercial-logo-8.png",
  sbi: "/images/Commercial-logo-9.png",
  "technopark kerala": "/images/Commercial-logo-10.png",
  technopark: "/images/Commercial-logo-10.png",
  "tidel park": "/images/Commercial-logo-11.png",
  "union bank of india": "/images/Commercial-logo-12.png",
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
      {localLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={localLogo}
          alt={hideLabel ? name : ""}
          aria-hidden={hideLabel ? undefined : true}
          className="h-7 w-auto max-w-full object-contain sm:h-9"
        />
      ) : logoSlug ? (
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
