import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/about";

export function TestimonialsGrid() {
  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
      {testimonials.map((t) => (
        <div key={t.author} className="bg-card p-7">
          <Quote className="size-6 text-brand-gold-text" />
          <p className="mt-4 text-sm leading-relaxed text-foreground">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-navy">
            — {t.author}
          </p>
        </div>
      ))}
    </div>
  );
}
