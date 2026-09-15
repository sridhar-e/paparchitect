import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhoWeAre } from "@/components/home/who-we-are";
import { StatsStrip } from "@/components/home/stats-strip";
import { ServicesGrid } from "@/components/home/services-grid";
import { SectorTiles } from "@/components/home/sector-tiles";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ClientsTeaser } from "@/components/home/clients-teaser";
import { WhyPnp } from "@/components/home/why-pnp";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  keywords: [
    "architects in Chennai",
    "structural engineers India",
    "public health engineering consultants",
    "fire fighting and security system design",
    "green building design India",
    "industrial architecture firm",
    "institutional building design Chennai",
    "best architecture firm Tamil Nadu",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhoWeAre />
      <ServicesGrid />
      <SectorTiles />
      <FeaturedProjects />
      <ClientsTeaser />
      <WhyPnp />
      <CtaBand />
    </>
  );
}
