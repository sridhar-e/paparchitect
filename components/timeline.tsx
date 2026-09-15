import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { timeline } from "@/lib/data/about";

type Entry = (typeof timeline)[number];

function TimelineCard({ entry, align }: { entry: Entry; align: "left" | "right" }) {
  const current = entry.year === "Today";
  return (
    <div
      className={cn(
        "inline-block max-w-md border bg-card p-5",
        current ? "border-brand-gold-deep" : "border-border",
        align === "right" ? "text-right" : "text-left"
      )}
    >
      <span className="font-heading text-xl font-bold text-brand-navy">{entry.year}</span>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
    </div>
  );
}

function Marker({ current }: { current: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 flex size-4 items-center justify-center border-2 bg-background",
        current ? "border-brand-gold-deep" : "border-brand-navy"
      )}
    >
      <div className={cn("size-1.5", current ? "bg-brand-gold-deep" : "bg-brand-gold-light")} />
    </div>
  );
}

export function Timeline() {
  return (
    <div>
      {/* Mobile: simple left-rail list */}
      <div className="space-y-8 md:hidden">
        {timeline.map((entry) => (
          <div key={entry.year} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="flex size-9 shrink-0 items-center justify-center border border-brand-navy bg-brand-navy text-white">
                <div className="size-1.5 bg-brand-gold-light" />
              </div>
              <div className="mt-1 w-px flex-1 bg-border" />
            </div>
            <div className="pb-2">
              <span className="font-heading text-lg font-bold text-brand-navy">
                {entry.year}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {entry.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: alternating center-line timeline */}
      <div className="relative hidden md:block">
        <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-border" />
        <div className="space-y-4">
          {timeline.map((entry, i) => {
            const left = i % 2 === 0;
            const current = entry.year === "Today";
            return (
              <Reveal key={entry.year} delay={i * 70}>
                <div className="grid grid-cols-[1fr_2.5rem_1fr] items-center gap-6">
                  <div className="flex justify-end">
                    {left && <TimelineCard entry={entry} align="right" />}
                  </div>
                  <div className="flex justify-center">
                    <Marker current={current} />
                  </div>
                  <div className="flex justify-start">
                    {!left && <TimelineCard entry={entry} align="left" />}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
