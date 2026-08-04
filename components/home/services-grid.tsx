import Link from "next/link";
import {
  Building2,
  HardHat,
  Zap,
  Droplets,
  FlameKindling,
  Sofa,
  Workflow,
  ClipboardCheck,
  Users,
  Construction,
  Gauge,
  FileSearch,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { specialisations } from "@/lib/data/services";

const icons: LucideIcon[] = [
  Building2,
  HardHat,
  Zap,
  Droplets,
  FlameKindling,
  Sofa,
  Workflow,
  ClipboardCheck,
  Users,
  Construction,
  Gauge,
  FileSearch,
];

export function ServicesGrid() {
  return (
    <Section className="bg-brand-cream">
      <SectionHeading
        eyebrow="What We Do"
        title="A complete, in-house capability"
        description="From concept to commissioning."
        align="center"
      />
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {specialisations.map((service, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={service.title} delay={(i % 3) * 70}>
              <div className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center border border-brand-navy bg-brand-navy text-white transition-colors duration-300 group-hover:border-brand-gold-deep group-hover:bg-brand-gold-deep group-hover:text-brand-navy">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-heading text-xs font-bold text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-heading font-semibold text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
        <Reveal delay={(specialisations.length % 3) * 70} className="sm:col-span-2 lg:col-span-3">
          <Link
            href="/contact"
            className="group flex h-full flex-col justify-center gap-3 bg-brand-navy p-7 transition-colors duration-300 hover:bg-brand-navy-light sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="font-heading font-semibold text-white">
                Need a capability not listed here?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Talk to us about your project — we handle every discipline in-house.
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-gold-light transition-transform duration-300 group-hover:translate-x-1">
              Get in Touch
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
