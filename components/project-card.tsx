import Image from "next/image";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-brand-navy">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-brand-navy-dark/0 to-transparent" />
        <span className="absolute left-0 top-0 border border-white/20 bg-brand-navy-dark/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 font-heading font-semibold text-brand-navy leading-snug">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-sm text-muted-foreground">
          {[project.location, project.size].filter(Boolean).join(" · ")}
        </p>
      </div>
    </div>
  );
}
