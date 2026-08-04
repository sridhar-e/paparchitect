"use client";

import { useState } from "react";
import Image from "next/image";

const COLLAPSED_COUNT = 3;

const PLACEHOLDER_IMAGES = ["/images/office.jpg", "/images/commercial.jpg", "/images/institution.jpg"];

function placeholderImage(name: string) {
  const hash = name.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return PLACEHOLDER_IMAGES[hash % PLACEHOLDER_IMAGES.length];
}

export function TeamCard({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: readonly string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = bio.length > COLLAPSED_COUNT;
  const visible = expanded ? bio : bio.slice(0, COLLAPSED_COUNT);

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy">
        <Image
          src={placeholderImage(name)}
          alt={`${name}, ${role} — placeholder image`}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-heading text-lg font-semibold text-brand-navy">
          {name}
        </h3>
        <p className="text-sm font-medium text-brand-gold-text">{role}</p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {visible.map((point, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 size-1 shrink-0 bg-brand-gold-deep" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 cursor-pointer text-left text-xs font-semibold uppercase tracking-wide text-brand-navy hover:text-brand-gold-text"
          >
            {expanded ? "Show less" : "+ More"}
          </button>
        )}
      </div>
    </div>
  );
}
