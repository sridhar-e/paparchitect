import { cn } from "@/lib/utils";

export function BlueprintGrid({
  className,
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "white";
}) {
  const lineColor = tone === "white" ? "rgba(255,255,255,0.16)" : "rgba(32,56,108,0.16)";
  const brickW = 72;
  const brickH = 36;
  const tileH = brickH * 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${brickW}" height="${tileH}" viewBox="0 0 ${brickW} ${tileH}"><line x1="0" y1="0" x2="${brickW}" y2="0" stroke="${lineColor}" stroke-width="1"/><line x1="0" y1="${brickH}" x2="${brickW}" y2="${brickH}" stroke="${lineColor}" stroke-width="1"/><line x1="0" y1="0" x2="0" y2="${brickH}" stroke="${lineColor}" stroke-width="1"/><line x1="${brickW / 2}" y1="${brickH}" x2="${brickW / 2}" y2="${tileH}" stroke="${lineColor}" stroke-width="1"/></svg>`;
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundSize: `${brickW}px ${tileH}px`,
      }}
    />
  );
}
