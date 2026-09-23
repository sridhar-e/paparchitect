import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ClientBadge } from "@/components/client-badge";
import { ArchSketchColonnade } from "@/components/arch-sketch";
import { clientGroups, heritageClients } from "@/lib/data/clients";

export const metadata: Metadata = {
  title: "Our Clientele",
  description:
    "Trusted by leading industries, institutions and government bodies across India for over a century.",
  keywords: [
    "Pithavadian And Partners clients",
    "architecture firm clients India",
    "industrial clients engineering firm",
    "institutional clients IIT NIT",
    "government projects architects Chennai",
    "bank branch interior design clients",
  ],
  alternates: { canonical: "/clients" },
  openGraph: {
    title: "Our Clientele | Pithavadian And Partners",
    description:
      "Trusted by leading industries, institutions and government bodies across India for over a century.",
    images: [{ url: "/images/bank.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/bank.jpg"],
  },
};

export default function ClientsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <ArchSketchColonnade className="absolute -left-14 bottom-0 h-[220px] w-auto text-brand-navy opacity-[0.06] lg:h-[280px]" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clientele"
            title="Our Clientele"
            description="Over a century of practice has earned us the trust of India's leading industries, institutions, government bodies and corporates. Many remain repeat clients to this day."
          />
        </div>
      </section>

      <Section>
        <div className="space-y-14">
          {clientGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold-deep" />
                  <h3 className="font-heading text-xl font-semibold text-brand-navy">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap border-t border-l border-border">
                  {group.clients.map((client) => (
                    <ClientBadge
                      key={client}
                      name={client}
                      className="w-1/2 border-r border-b border-border sm:w-1/3 md:w-1/4"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sky">
        <SectionHeading
          eyebrow="Heritage"
          title="Landmark Clients"
          description="Across our history we have delivered landmark works for institutions that shaped modern India."
          light
        />
        {/* White ground on the box itself, with the rules drawn by each cell,
            so a part-filled last row stays white rather than showing through. */}
        <div className="mt-10 overflow-hidden border border-brand-deep/15 bg-white">
          <div className="-mr-px -mb-px grid sm:grid-cols-2 lg:grid-cols-3">
            {heritageClients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-3 border-r border-b border-brand-deep/15 px-4 py-3.5 text-sm text-brand-deep"
              >
                <Landmark className="size-4 shrink-0 text-brand-deep" />
                {client}
              </div>
            ))}
            {/* Blank cells that square off the last row: one from two columns
                up, a second from three. The list is 13 long, so both counts
                come out even. */}
            <div
              aria-hidden="true"
              className="hidden border-r border-b border-brand-deep/15 px-4 py-3.5 text-sm sm:block"
            >
              &nbsp;
            </div>
            <div
              aria-hidden="true"
              className="hidden border-r border-b border-brand-deep/15 px-4 py-3.5 text-sm lg:block"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
