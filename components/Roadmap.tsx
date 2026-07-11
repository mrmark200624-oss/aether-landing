import Reveal from "@/components/Reveal";
import { roadmap } from "@/data/content";

const statusStyles = {
  done: {
    ring: "ring-neon-cyan/60",
    dot: "bg-neon-cyan shadow-glow",
    badge: "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30",
    label: "Shipped",
  },
  active: {
    ring: "ring-neon-violet/60",
    dot: "bg-neon-violet shadow-glow-violet animate-pulse",
    badge: "bg-neon-violet/15 text-neon-magenta border-neon-violet/30",
    label: "In progress",
  },
  upcoming: {
    ring: "ring-white/10",
    dot: "bg-slate-600",
    badge: "bg-white/5 text-slate-400 border-white/10",
    label: "Planned",
  },
} as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Roadmap</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The road to <span className="neon-text">full sovereignty</span>
          </h2>
          <p className="mt-4 text-slate-300">
            Four quarters, one mission: hand the protocol entirely to its users.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-neon-cyan/40 via-neon-violet/40 to-white/5 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {roadmap.map((r, i) => {
              const s = statusStyles[r.status];
              return (
                <Reveal key={r.quarter} delay={i * 120}>
                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3 lg:block">
                      <span
                        className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-base-800 ring-2 ${s.ring}`}
                      >
                        <span className={`h-3 w-3 rounded-full ${s.dot}`} />
                      </span>
                    </div>
                    <article className="glass h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-400">
                          {r.quarter}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${s.badge}`}
                        >
                          {s.label}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {r.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {r.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2.5 text-sm text-slate-300"
                          >
                            <Check className="mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 text-neon-cyan ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
