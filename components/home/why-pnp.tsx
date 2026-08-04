import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { whyPnp } from "@/lib/data/services";
import { ShieldCheck, Building2, Repeat, MapPinned } from "lucide-react";

const icons = [ShieldCheck, Building2, Repeat, MapPinned];

export function WhyPnp() {
  return (
    <Section>
      <SectionHeading eyebrow="Why PNP" title="Built on a century of trust" align="center" />
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {whyPnp.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full bg-card p-7 text-center">
                <div className="mx-auto flex size-12 items-center justify-center border border-brand-navy text-brand-navy">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
