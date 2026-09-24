import Link from "next/link";
import Image from "next/image";
import {
  Trophy,
  Factory,
  FlaskConical,
  Plane,
  Home,
  Building,
  GraduationCap,
  Briefcase,
  Store,
  Palette,
  Landmark,
  Mic2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projectSectors } from "@/lib/data/services";
import { categoryImage, type ProjectCategory } from "@/lib/data/projects";

const icons: LucideIcon[] = [
  Trophy,
  Factory,
  FlaskConical,
  Plane,
  Home,
  Building,
  GraduationCap,
  Briefcase,
  Store,
  Palette,
  Landmark,
  Mic2,
];

// Sectors that use a specific project photo instead of the generic category image.
const sectorThumbnail: Partial<Record<(typeof projectSectors)[number], string>> = {
  Auditorium: "/images/NIOT-Auditorium-1.webp",
  Interiors: "/images/YAZAKI-2.webp",
  "Commercial & IT buildings": "/images/Tidel-Neo-Villupuram-1.webp",
  Institutions: "/images/IIT-Indore-Admin-Block-1.webp",
  Industrial: "/images/OMFED-1.webp",
  Residential: "/images/Appasamy-Bloomingdale-Pammal.webp",
};

// Sectors kept out of the home page grid; they remain filterable on /projects.
const hiddenSectors: readonly string[] = [
  "Sports",
  "Process Plants",
  "Transportation",
  "Private Residences",
];

// Pair each sector with its icon before filtering so the icons stay aligned.
const tiles = projectSectors
  .map((sector, i) => ({ sector, Icon: icons[i] }))
  .filter(({ sector }) => !hiddenSectors.includes(sector));

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function SectorTiles() {
  return (
    <section className="relative overflow-hidden bg-brand-sky py-16 sm:py-20 lg:py-24">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Where We Build" title="Project Sectors" align="center" light />
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map(({ sector, Icon }, i) => {
            return (
              <Reveal key={sector} delay={(i % 4) * 60}>
                {/* Thin gold offset behind each tile, the same device the
                    Who We Are photo uses. The wider grid gap keeps one tile's
                    offset clear of its neighbour. */}
                <div style={{ position: "relative" }}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-8px",
                      bottom: "-8px",
                      width: "100%",
                      height: "100%",
                      background: "var(--brand-gold-deep)",
                    }}
                  />
                <Link
                  href={`/projects?category=${slugify(sector)}`}
                  className="group relative isolate flex aspect-[4/3] items-end overflow-hidden border-2 border-brand-deep/20 bg-brand-sky p-7 transition-colors duration-300 hover:border-brand-gold-deep"
                >
                  <Image
                    src={sectorThumbnail[sector] ?? categoryImage[sector as ProjectCategory]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-95"
                  />
                  {/* Solid white bar across the tile foot keeps the name readable over any photo. */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 18px",
                      background: "#ffffff",
                      borderTop: "3px solid var(--brand-sky)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexShrink: 0,
                        width: "36px",
                        height: "36px",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--brand-sky)",
                        color: "var(--brand-deep)",
                      }}
                    >
                      <Icon style={{ width: "20px", height: "20px" }} />
                    </span>
                    <span
                      style={{
                        color: "var(--brand-deep)",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        textAlign: "left",
                      }}
                    >
                      {sector}
                    </span>
                  </div>
                </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
