import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { ClientBadge } from "@/components/client-badge";
import { clientLogosSample } from "@/lib/data/clients";
import { ArrowRight } from "lucide-react";

const half = Math.ceil(clientLogosSample.length / 2);
const row1 = clientLogosSample.slice(0, half);
const row2 = clientLogosSample.slice(half);

function MarqueeRow({
  clients,
  direction,
}: {
  clients: readonly string[];
  direction: "left" | "right";
}) {
  const itemClass =
    "!h-28 !w-52 shrink-0 !bg-transparent border border-border hover:!bg-transparent hover:!border-brand-navy/40 sm:!h-32 sm:!w-64";
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 ${direction === "left" ? "animate-[marquee-left_32s_linear_infinite]" : "animate-[marquee-right_32s_linear_infinite]"}`}
      >
        {clients.map((client) => (
          <ClientBadge key={client} name={client} hideLabel className={itemClass} />
        ))}
        <div aria-hidden="true" className="flex gap-4">
          {clients.map((client, i) => (
            <ClientBadge key={`dup-${client}-${i}`} name={client} hideLabel className={itemClass} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsTeaser() {
  return (
    <Section className="bg-brand-cream">
      <SectionHeading
        eyebrow="Clientele"
        title="Trusted by leading institutions, industries and government bodies across India."
        align="center"
      />
      <div
        className="mt-14 flex flex-col gap-4 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <MarqueeRow clients={row1} direction="left" />
        <MarqueeRow clients={row2} direction="right" />
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/clients"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-gold-text transition-colors"
        >
          See All Clients
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
