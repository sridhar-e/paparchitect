import { cn } from "@/lib/utils";

export function Section({
  className,
  containerClassName,
  children,
  id,
  noBottomPadding,
  noTopPadding,
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  noBottomPadding?: boolean;
  noTopPadding?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        !noTopPadding && "pt-16 sm:pt-20 lg:pt-24",
        !noBottomPadding && "pb-16 sm:pb-20 lg:pb-24",
        className
      )}
    >
      <div className={cn("container px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light,
  nowrap,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  nowrap?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] mb-4",
            light ? "text-brand-gold-light" : "text-brand-gold-text",
            align === "center" && "justify-center"
          )}
        >
          <span className={cn("h-px w-8", light ? "bg-brand-gold-light" : "bg-brand-gold-deep")} />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading font-bold tracking-tight leading-[1.1]",
          nowrap
            ? "whitespace-nowrap text-[clamp(1.25rem,6vw,2.75rem)]"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base sm:text-lg leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
