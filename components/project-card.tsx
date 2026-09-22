import Image from "next/image";
import type { Project } from "@/lib/data/projects";

// A few titles are stored shouting ("NIOT AUDITORIUM"); on the cards they read
// as "NIOT Auditorium". The popup still shows the title exactly as stored.
function cardTitle(title: string) {
  return title.replace(/\bAUDITORIUM\b/g, "Auditorium");
}

export function ProjectCard({ project }: { project: Project }) {
  // "Location · size" — same line for every card, skipped when neither is set.
  const meta = [project.location, project.size].filter(Boolean).join(" · ");

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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-sky/50 via-brand-sky/0 to-transparent" />
        <span className="absolute left-0 top-0 border border-brand-deep/20 bg-brand-sky/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-deep">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 font-heading font-semibold text-brand-navy leading-snug">
          {cardTitle(project.title)}
        </h3>
        {meta && (
          <p className="mt-1.5 line-clamp-1 text-sm text-muted-foreground">{meta}</p>
        )}
      </div>
    </div>
  );
}
