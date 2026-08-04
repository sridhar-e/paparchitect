import { cn } from "@/lib/utils";

/**
 * Decorative, abstract architectural line drawings. None depict any real
 * building — generic sketch motifs to give empty backgrounds an "architect's
 * drafting table" feel without relying on photography.
 */

function base(className?: string) {
  return cn("pointer-events-none", className);
}

// Stepped tower with a setback upper block.
export function ArchSketchTower({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 500" fill="none" className={base(className)}>
      <line x1="20" y1="460" x2="380" y2="460" stroke="currentColor" strokeWidth="1.5" />
      <rect x="70" y="200" width="190" height="260" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h-${i}`} x1="70" y1={230 + i * 30} x2="260" y2={230 + i * 30} stroke="currentColor" strokeWidth="1" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`v-${i}`} x1={100 + i * 32} y1="200" x2={100 + i * 32} y2="460" stroke="currentColor" strokeWidth="1" />
      ))}
      <rect x="150" y="60" width="90" height="140" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`t-${i}`} x1="150" y1={85 + i * 28} x2="240" y2={85 + i * 28} stroke="currentColor" strokeWidth="1" />
      ))}
      <line x1="150" y1="60" x2="195" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="195" y1="30" x2="240" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="130" y1="400" x2="130" y2="460" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="400" x2="200" y2="460" stroke="currentColor" strokeWidth="1.5" />
      <line x1="122" y1="400" x2="208" y2="400" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Wide, arched-roof hangar / long-span industrial shed.
export function ArchSketchHangar({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 600 320" fill="none" className={base(className)}>
      <line x1="20" y1="280" x2="580" y2="280" stroke="currentColor" strokeWidth="1.5" />
      <path d="M60 280 C 60 120 540 120 540 280" stroke="currentColor" strokeWidth="1.5" />
      <line x1="150" y1="280" x2="150" y2="152" stroke="currentColor" strokeWidth="1" />
      <line x1="300" y1="280" x2="300" y2="122" stroke="currentColor" strokeWidth="1" />
      <line x1="450" y1="280" x2="450" y2="152" stroke="currentColor" strokeWidth="1" />
      <rect x="255" y="190" width="90" height="90" stroke="currentColor" strokeWidth="1.5" />
      <line x1="285" y1="190" x2="285" y2="280" stroke="currentColor" strokeWidth="1" />
      <line x1="315" y1="190" x2="315" y2="280" stroke="currentColor" strokeWidth="1" />
      <line x1="255" y1="235" x2="345" y2="235" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Institutional facade with a colonnade, pediment and entry steps.
export function ArchSketchColonnade({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" className={base(className)}>
      <path d="M60 140 L200 80 L340 140" stroke="currentColor" strokeWidth="1.5" />
      <line x1="60" y1="140" x2="340" y2="140" stroke="currentColor" strokeWidth="1.5" />
      {[80, 140, 200, 260, 320].map((x) => (
        <g key={x}>
          <line x1={x - 8} y1="145" x2={x + 8} y2="145" stroke="currentColor" strokeWidth="1" />
          <line x1={x} y1="145" x2={x} y2="335" stroke="currentColor" strokeWidth="1.5" />
          <line x1={x - 8} y1="335" x2={x + 8} y2="335" stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      <line x1="40" y1="345" x2="360" y2="345" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="357" x2="380" y2="357" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Low-rise multi-block campus / office cluster skyline.
export function ArchSketchCampus({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 500 260" fill="none" className={base(className)}>
      <line x1="20" y1="230" x2="480" y2="230" stroke="currentColor" strokeWidth="1.5" />
      <rect x="40" y="140" width="110" height="90" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="170" x2="150" y2="170" stroke="currentColor" strokeWidth="1" />
      <line x1="40" y1="200" x2="150" y2="200" stroke="currentColor" strokeWidth="1" />
      <rect x="170" y="100" width="90" height="130" stroke="currentColor" strokeWidth="1.5" />
      <line x1="170" y1="130" x2="260" y2="130" stroke="currentColor" strokeWidth="1" />
      <line x1="170" y1="160" x2="260" y2="160" stroke="currentColor" strokeWidth="1" />
      <line x1="170" y1="190" x2="260" y2="190" stroke="currentColor" strokeWidth="1" />
      <rect x="280" y="160" width="160" height="70" stroke="currentColor" strokeWidth="1.5" />
      <line x1="280" y1="190" x2="440" y2="190" stroke="currentColor" strokeWidth="1" />
      <line x1="320" y1="160" x2="320" y2="230" stroke="currentColor" strokeWidth="1" />
      <line x1="400" y1="160" x2="400" y2="230" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
