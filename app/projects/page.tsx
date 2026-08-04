import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { ArchSketchHangar } from "@/components/arch-sketch";
import { categories, type ProjectCategory } from "@/lib/data/projects";
import { projectClassification } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Over 3,000 built works across industries, institutions, housing, transportation, process plants and interiors.",
  keywords: [
    "architecture projects India",
    "industrial building projects",
    "institutional campus design",
    "township development projects",
    "completed construction projects Chennai",
    "aircraft hangar structural design",
    "process plant architecture",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Pithavadian And Partners",
    description:
      "Over 3,000 built works across industries, institutions, housing, transportation, process plants and interiors.",
    images: [{ url: "/images/commercial.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/commercial.jpg"],
  },
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const slugToCategory: Record<string, ProjectCategory> = Object.fromEntries(
  categories.map((c) => [slugify(c), c])
);

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = category ? slugToCategory[category] : undefined;

  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <ArchSketchHangar className="absolute -right-16 bottom-0 h-[260px] w-auto text-brand-navy opacity-[0.06] lg:h-[320px]" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Projects"
            description="A portfolio of over 3,000 built works spanning every sector, size and level of complexity, from stadiums and aircraft hangars to townships, process plants and corporate interiors."
          />
        </div>
      </section>

      <Section>
        <ProjectsExplorer initialCategory={initialCategory} />
      </Section>

      <Section className="bg-brand-cream">
        <SectionHeading eyebrow="Scope" title="Project Classification" />
        <div className="mt-8 flex flex-wrap gap-3">
          {projectClassification.map((item) => (
            <span
              key={item}
              className="border border-brand-navy/25 bg-card px-4 py-2 text-sm font-medium text-brand-navy"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
