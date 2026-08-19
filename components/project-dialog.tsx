"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowRight, ChevronLeft, ChevronRight, XIcon } from "lucide-react";
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

  const details = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Site Area", value: project.siteArea },
    { label: "Built-up Area", value: project.builtUpArea },
    { label: "Scale", value: project.siteArea || project.builtUpArea ? undefined : project.size },
    { label: "Status", value: project.status },
    { label: "Year", value: project.year },
  ].filter((d) => Boolean(d.value));

  const subtitle = [project.location, project.size].filter(Boolean).join(" · ");
  const go = (next: number) => setIndex((next + images.length) % images.length);

  return (
    <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* Left: main image with thumbnails below */}
      <div className="group/gallery bg-brand-cream p-4 sm:p-5">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy/5">
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
                  sizes="(max-width: 1024px) 100vw, 600px"
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

          <span className="absolute left-0 top-0 border border-white/20 bg-brand-navy-dark/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {project.category}
          </span>
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
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right: project details */}
      <div className="flex flex-col p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
          Project
        </span>
        <Dialog.Title className="mt-3 font-heading text-2xl font-semibold leading-tight text-brand-navy">
          {project.title}
        </Dialog.Title>
        {subtitle && (
          <Dialog.Description className="mt-2 text-sm text-muted-foreground">
            {subtitle}
          </Dialog.Description>
        )}

        <div className="mt-6 h-px w-full bg-border" />

        {project.description && (
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}

        <dl className="mt-6 space-y-4">
          {details.map((d) => (
            <div key={d.label} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {d.label}
              </dt>
              <dd className="text-sm font-medium text-foreground">{d.value}</dd>
            </div>
          ))}
        </dl>

        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          className="mt-8 h-11 gap-2 rounded-lg bg-brand-navy px-6 font-semibold text-white hover:bg-brand-navy-light sm:self-start"
        >
          Enquire About This Project
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
