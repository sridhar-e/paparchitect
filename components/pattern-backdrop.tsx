import { cn } from "@/lib/utils";

/**
 * Texture layer for the dark bands. The artwork is white marks on a
 * transparent ground, so it sits over the section colour without replacing it.
 */
export function PatternBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[url('/images/pattern.png')] bg-cover bg-center bg-no-repeat opacity-10",
        className
      )}
    />
  );
}
