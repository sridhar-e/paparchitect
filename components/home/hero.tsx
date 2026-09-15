import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-white sm:min-h-[560px] lg:min-h-[620px]">
      <Image
        src="/images/hero.jpg"
        alt="Contemporary institutional architecture"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

      <div className="container relative px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <div className="inline-flex items-center gap-2.5">
            <Award className="size-4 text-brand-gold-text" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
              Since 1919 &middot; Architecture, Engineering &amp; Planning
            </span>
          </div>
          <h1 className="mt-7 font-[Tahoma] text-4xl font-bold leading-[1.1] text-brand-navy sm:text-5xl lg:text-6xl">
            Trusted over 100 years.
          </h1>
          <div className="mt-6 h-px w-16 bg-brand-gold-deep" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg">
            Architecture, engineering, planning, interiors and turnkey
            design solutions, delivered with the same commitment since 1919.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              render={<Link href="/projects" />}
              nativeButton={false}
              className="h-12 gap-2 rounded-none bg-brand-gold-deep px-8 text-base font-semibold text-brand-navy transition-colors duration-200 hover:bg-[#e0a800]"
            >
              View Our Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              className="h-12 rounded-none border-brand-navy/25 bg-transparent px-8 text-base font-semibold text-brand-navy hover:bg-brand-navy hover:text-white"
            >
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
