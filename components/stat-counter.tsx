"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const match = useMemo(() => value.match(/^(\D*)(\d[\d,]*)(\+?)(\D*)$/), [value]);
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const ref = useRef<HTMLSpanElement>(null);

  const [display, setDisplay] = useState(() => {
    if (!match) return value;
    return prefersReducedMotion() ? target.toLocaleString("en-IN") : "0";
  });

  useEffect(() => {
    if (!match || !ref.current || prefersReducedMotion()) return;
    const el = ref.current;
    let started = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            setDisplay(current.toLocaleString("en-IN"));
            if (progress < 1) rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [match, target]);

  if (!match) return <>{value}</>;
  return (
    <span ref={ref}>
      {match[1]}
      {display}
      {match[3]}
      {match[4]}
    </span>
  );
}

export function StatCounters({
  stats,
  icons,
  light,
}: {
  stats: readonly { value: string; label: string }[];
  icons?: LucideIcon[];
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x",
        light ? "sm:divide-white/15" : "sm:divide-border"
      )}
    >
      {stats.map((stat, i) => {
        const Icon = icons?.[i];
        return (
          <div key={stat.label} className="flex flex-col items-center gap-2 px-2 text-center sm:px-6">
            {Icon && (
              <div
                className={cn(
                  "mb-2 flex size-10 items-center justify-center border",
                  light ? "border-brand-gold-light/40 text-brand-gold-light" : "border-brand-navy/20 text-brand-navy"
                )}
              >
                <Icon className="size-5" />
              </div>
            )}
            <div
              className={cn(
                "font-heading text-4xl font-bold sm:text-5xl",
                light ? "text-white" : "text-brand-navy"
              )}
            >
              <AnimatedNumber value={stat.value} />
            </div>
            <p className={cn("text-sm", light ? "text-white/60" : "text-muted-foreground")}>
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
