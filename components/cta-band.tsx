import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand({
  heading = "Have a project in mind?",
  text = "From a single residence to a multi-million-square-foot township, we'd be glad to discuss it.",
  buttonLabel = "Contact Us",
  href = "/contact",
}: {
  heading?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t-2 border-brand-gold-deep bg-brand-sky">
      <div className="container relative flex flex-col items-center gap-7 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:py-20 lg:text-left lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand-deep sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2.5 text-brand-deep">{text}</p>
        </div>
        <Button
          render={<Link href={href} />}
          nativeButton={false}
          className="h-12 shrink-0 gap-2 rounded-none bg-white px-8 text-base font-semibold text-brand-deep hover:bg-brand-cream"
        >
          {buttonLabel}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
