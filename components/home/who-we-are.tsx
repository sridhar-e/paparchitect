import Image from "next/image";
import { Section } from "@/components/section";

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative lg:order-2">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full bg-brand-gold-deep sm:-bottom-6 sm:-left-6"
          />
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card">
            <Image
              src="/images/Info-Park-Kochi-1.png"
              alt="Infopark Kochi — riverfront IT office building by Pithavadian And Partners"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:order-1">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold-text">
            <span className="h-px w-8 bg-brand-gold-deep" />
            Who We Are
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight leading-[1.1] text-brand-navy sm:text-4xl">
            A forward-thinking turnkey design service provider
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pithavadian And Partners is a forward-thinking turnkey design
            service provider, delivering creative and dynamic architectural and
            engineering design for comfortable and efficient living and
            working environments. The backbone of the firm is our team of
            architects and engineers. Our scope spans preliminary
            conceptualisation through to the handover of finished
            infrastructure and facilities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Customer satisfaction is our primary goal — and through our
            process of delivery, we establish lasting relationships with our
            clients. In fact, the bulk of our projects are repeat orders.
          </p>
        </div>
      </div>
    </Section>
  );
}
