"use client";

import { useEffect, useRef, useState } from "react";
import type { Allocation } from "@/data/content";

type Props = {
  data: Allocation[];
  size?: number;
  stroke?: number;
};

/**
 * Dependency-free SVG donut chart. Each segment is a circle whose
 * stroke-dasharray encodes its share; the whole ring "draws" itself in
 * on first scroll into view.
 */
export default function DonutChart({ data, size = 260, stroke = 34 }: Props) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let cumulative = 0;

  const activeItem = active !== null ? data[active] : null;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-label="Token distribution donut chart"
      >
        {/* track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        {data.map((seg, i) => {
          const length = (seg.percent / 100) * circumference;
          const offset = (cumulative / 100) * circumference;
          cumulative += seg.percent;
          const isActive = active === i;
          return (
            <circle
              key={seg.label}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={isActive ? stroke + 6 : stroke}
              strokeDasharray={`${drawn ? length : 0} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                transition:
                  "stroke-dasharray 1s cubic-bezier(0.16,1,0.3,1), stroke-width 0.2s ease",
                transitionDelay: `${i * 120}ms`,
                cursor: "pointer",
                filter: isActive
                  ? `drop-shadow(0 0 10px ${seg.color})`
                  : "none",
              }}
            />
          );
        })}
      </svg>

      {/* center label */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
        {activeItem ? (
          <div>
            <div className="text-3xl font-bold text-white">
              {activeItem.percent}%
            </div>
            <div className="mt-1 max-w-[9rem] text-xs text-slate-400">
              {activeItem.label}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Total Supply
            </div>
            <div className="text-2xl font-bold text-white">1B</div>
            <div className="text-xs text-neon-cyan">AETH</div>
          </div>
        )}
      </div>
    </div>
  );
}
