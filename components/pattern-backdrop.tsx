import { cn } from "@/lib/utils";

/**
 * Texture layer drawn over a section's own colour. The artwork is white marks
 * on a transparent ground, so `tone="dark"` inverts it to read on pale grounds.
 */
export function PatternBackdrop({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[url('/images/pattern.png')] bg-cover bg-center bg-no-repeat",
        tone === "dark" ? "opacity-[0.07] invert" : "opacity-10",
        className
      )}
    />
  );
}
