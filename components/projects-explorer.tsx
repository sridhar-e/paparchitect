"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectDialog } from "@/components/project-dialog";
import { cn } from "@/lib/utils";
import { categories, projects, type Project, type ProjectCategory } from "@/lib/data/projects";

export function ProjectsExplorer({ initialCategory }: { initialCategory?: ProjectCategory }) {
  const [active, setActive] = useState<ProjectCategory | "All">(initialCategory ?? "All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "group relative cursor-pointer px-4 py-2 text-sm font-semibold transition-colors",
              active === cat ? "text-brand-navy" : "text-foreground/70 hover:text-brand-navy"
            )}
          >
            {cat}
            <span
              className={cn(
                "absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand-gold-deep transition-transform duration-300 origin-left",
                active === cat ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}
            />
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Showing {filtered.length} of {projects.length} projects
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setSelected(project)}
            aria-label={`View details for ${project.title}`}
            className="h-full cursor-pointer text-left outline-none focus-visible:ring-3 focus-visible:ring-brand-navy/40"
          >
            <ProjectCard project={project} />
          </button>
        ))}
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
