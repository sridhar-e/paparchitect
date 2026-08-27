"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Keep the last project rendered while the popup plays its closing animation.
  const [shown, setShown] = useState<Project | null>(project);
  if (project && project !== shown) setShown(project);

  return (
    <Dialog.Root
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      onOpenChangeComplete={(open) => {
        if (!open) setShown(null);
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-brand-navy-dark/60 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[min(1080px,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-card shadow-2xl transition duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          {shown && <ProjectDialogBody key={shown.slug} project={shown} />}
          <Dialog.Close
            render={
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-3 z-10 rounded-none bg-white/85 text-brand-navy hover:bg-white"
              />
            }
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ProjectDialogBody({ project }: { project: Project }) {
  const images = project.images?.length ? project.images : [project.image];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Category is the sheet's eyebrow now, so it is left out of the fact list.
  const details = [
    { label: "Location", value: project.location },
    { label: "Site Area", value: project.siteArea },
    { label: "Built-up Area", value: project.builtUpArea },
    { label: "Scale", value: project.siteArea || project.builtUpArea ? undefined : project.size },
    { label: "Status", value: project.status },
    { label: "Year", value: project.year },
  ].filter((d) => Boolean(d.value));

  const subtitle = [project.location, project.size].filter(Boolean).join(" · ");
  const go = (next: number) => setIndex((next + images.length) % images.length);

  // Auto-advance the gallery; pauses on hover and for reduced-motion users.
  useEffect(() => {
    if (images.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearTimeout(timer);
  }, [index, images.length, paused]);

  return (
    <div className="bg-white">
      <div className="px-5 pt-6 sm:px-10 lg:px-14">
        {/* Header: sector, label, project name */}
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand-navy">
          {project.category}
        </p>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-brand-navy">
          Project
        </p>
        <Dialog.Title className="mt-2 font-heading text-[25px] font-bold uppercase leading-tight text-brand-gold">
          {project.title}
        </Dialog.Title>
        {subtitle && <Dialog.Description className="sr-only">{subtitle}</Dialog.Description>}
      </div>

      {/* Gallery — same side padding as the text blocks, so every edge lines up. */}
      <div
        className="group/gallery mt-6 px-5 sm:px-10 lg:px-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Capped against the viewport so the sheet still fits on screen. */}
        <div className="relative aspect-[16/9] max-h-[52vh] w-full overflow-hidden bg-brand-navy/5">
          <div
            className="flex h-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={`${src}-${i}`} className="relative h-full w-full shrink-0">
                <Image
                  src={src}
                  alt={`${project.title} — image ${i + 1} of ${images.length}`}
                  fill
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white/85 p-2 text-brand-navy opacity-0 transition-opacity duration-300 hover:bg-white focus-visible:opacity-100 group-hover/gallery:opacity-100"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white/85 p-2 text-brand-navy opacity-0 transition-opacity duration-300 hover:bg-white focus-visible:opacity-100 group-hover/gallery:opacity-100"
              >
                <ChevronRight className="size-4" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {images.map((src, i) => (
              <button
                key={`thumb-${src}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "relative aspect-[4/3] w-20 shrink-0 cursor-pointer overflow-hidden border-2 transition-all duration-300 sm:w-24",
                  i === index
                    ? "border-brand-gold-deep opacity-100"
                    : "border-transparent opacity-65 hover:opacity-100"
                )}
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* About the project alongside the fact sheet */}
      <div className="mt-6 grid gap-8 px-5 pb-6 sm:px-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:px-14">
        <div>
          {project.description && (
            <>
              <h3 className="text-sm font-bold text-brand-gold">About the Project</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-navy">
                {project.description}
              </p>
            </>
          )}
        </div>

        <dl className="space-y-1.5 text-xs">
          {details.map((d) => (
            <div key={d.label}>
              <dt className="inline font-bold uppercase tracking-wide text-brand-gold">
                {d.label}:{" "}
              </dt>
              <dd className="inline font-semibold text-brand-navy">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
