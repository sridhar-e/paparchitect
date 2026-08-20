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
import { BlueprintGrid } from "@/components/blueprint-grid";
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
  Auditorium: "/images/NIOT-Auditorium-1.png",
  Interiors: "/images/YAZAKI-2.jpg",
  "Commercial & IT buildings": "/images/Tidel-Neo-Villupuram-1.jpeg",
  Institutions: "/images/IIT-Indore-Admin-Block-1.jpeg",
  Industrial: "/images/OMFED-1.png",
  Residential: "/images/Appasamy-Bloomingdale-Pammal.jpg",
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
    <section className="relative overflow-hidden bg-brand-navy-dark py-16 sm:py-20 lg:py-24">
      <BlueprintGrid tone="white" />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Where We Build" title="Project Sectors" align="center" light />
        <div className="mt-14 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map(({ sector, Icon }, i) => {
            return (
              <Reveal key={sector} delay={(i % 4) * 60}>
                <Link
                  href={`/projects?category=${slugify(sector)}`}
                  className="group relative isolate flex aspect-[4/3] items-end overflow-hidden border-2 border-white/25 bg-brand-navy-dark p-7 transition-colors duration-300 hover:border-brand-gold-deep"
                >
                  <Image
                    src={sectorThumbnail[sector] ?? categoryImage[sector as ProjectCategory]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,37,71,0.92)_0%,rgba(21,37,71,0.55)_22%,rgba(21,37,71,0)_48%)]" />
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <div className="flex size-11 items-center justify-center border border-brand-gold-light/40 bg-brand-navy-dark/60 text-brand-gold-light transition-colors group-hover:border-brand-gold-light">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-left text-base font-medium leading-snug text-white/90">
                      {sector}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
