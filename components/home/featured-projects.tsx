import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A sample from over 3,000 built works."
        />
        <Button
          render={<Link href="/projects" />}
          nativeButton={false}
          variant="outline"
          className="h-11 gap-2 rounded-lg border-brand-navy px-6 font-semibold text-brand-navy hover:bg-brand-navy hover:text-white"
        >
          View All Projects
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
