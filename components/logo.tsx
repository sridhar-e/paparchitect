import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
      aria-label="Pithavadian And Partners, Home"
    >
      <span className={cn("inline-flex items-center", dark && "bg-white p-1.5")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/PAP-Logo.svg"
          alt="Pithavadian And Partners"
          className="h-16 w-auto sm:h-[4.25rem]"
        />
      </span>
    </Link>
  );
}
