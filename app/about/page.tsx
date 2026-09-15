import type { Metadata } from "next";
import { Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Timeline } from "@/components/timeline";
import { TeamCard } from "@/components/team-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { TestimonialsGrid } from "@/components/testimonials-grid";
import { PatternBackdrop } from "@/components/pattern-backdrop";
import { ArchSketchTower, ArchSketchCampus } from "@/components/arch-sketch";
import { purposeVisionGoal, leadership, departments } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A century of architecture and engineering practice, from Jackson and Baker (1919) to Pithavadian And Partners today.",
  keywords: [
    "about Pithavadian And Partners",
    "architecture firm history Chennai",
    "century old engineering firm India",
    "Jackson and Baker architects",
    "architecture firm leadership team",
    "in-house architecture engineering departments",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Pithavadian And Partners",
    description:
      "A century of architecture and engineering practice, from Jackson and Baker (1919) to Pithavadian And Partners today.",
    images: [{ url: "/images/who-we-are.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/who-we-are.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Pithavadian And Partners"
              nowrap
              description="A firm of architects, planners and engineers, trusted over 100 years."
            />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pithavadian And Partners is a firm of architects, planners and
              engineers with offices in Chennai, Bengaluru, Chandigarh and
              Kochi. The firm offers comprehensive services including
              architecture, interiors, planning, engineering and project
              management for all types of buildings, sites and services
              projects. After more than a century of innovative practice, the
              firm&rsquo;s portfolio of over 3,000 built works spans every
              sector, size and complexity. We believe our focus on service is
              the benchmark of the firm&rsquo;s growth, reflected in the
              long-standing relationships we hold with many of our existing
              clients.
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full bg-brand-gold-deep sm:-bottom-6 sm:-left-6"
            />
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card">
              <video
                className="size-full object-cover"
                src="/videos/about-studio.mp4"
                poster="/images/who-we-are.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-navy-dark/10">
                <div className="flex size-14 items-center justify-center border border-white/40 bg-brand-navy-dark/60">
                  <Play className="size-5 fill-white text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* History — faint pattern texture behind the timeline */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <PatternBackdrop tone="dark" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="History" title="Company Timeline" />
          <div className="mt-10 max-w-2xl md:max-w-none">
            <Timeline />
          </div>
        </div>
      </section>

      <Section className="bg-brand-cream">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
          {purposeVisionGoal.map((item) => (
            <div key={item.title} className="bg-card p-7">
              <div className="h-1 w-10 bg-brand-gold-deep" />
              <h3 className="mt-5 font-heading text-lg font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach — faint elevation sketch filling the empty right side */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <ArchSketchTower className="absolute -right-16 bottom-0 h-[420px] w-auto text-brand-navy opacity-[0.06] lg:h-[520px]" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Approach"
            title="A Forward-Thinking Turnkey Design Provider"
            description="PNP is a forward-thinking turnkey design service provider, delivering creative and dynamic architectural and engineering design for comfortable, efficient living and working environments. The backbone of the firm is our team of architects and engineers. Our scope spans preliminary conceptualisation through to the handover of finished infrastructure and facilities. Customer satisfaction is our primary goal, and the bulk of our projects are repeat orders."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {departments.map((dept) => (
              <span
                key={dept}
                className="border border-brand-navy/25 bg-background px-5 py-2 text-sm font-semibold text-brand-navy"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — faint campus sketch for depth on the solid navy background */}
      <section className="relative overflow-hidden bg-brand-navy-dark pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <ArchSketchCampus className="absolute -right-10 top-0 h-[220px] w-auto text-white opacity-[0.08] lg:h-[280px]" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Management Team" light align="center" />
          <div className="mt-12 grid gap-2.5 sm:grid-cols-3">
            {leadership.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
        <div className="mx-auto mt-8 max-w-3xl border border-border bg-card px-6 sm:px-8">
          <FaqAccordion />
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say" align="center" />
        <div className="mt-10">
          <TestimonialsGrid />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
