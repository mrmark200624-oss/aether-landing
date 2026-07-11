import Reveal from "@/components/Reveal";
import { token, stats } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Animated glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 animate-float rounded-full bg-neon-cyan/20 blur-3xl" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 animate-pulse-slow rounded-full bg-neon-violet/20 blur-3xl" />
        <div className="absolute bottom-[8%] left-[40%] h-64 w-64 animate-float rounded-full bg-neon-magenta/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(60% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-eyebrow mx-auto">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
              Live on Mainnet · ${token.symbol}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-4 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="neon-text">{token.name}</span>
              <br />
              {token.tagline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-slate-300 sm:text-lg">
              {token.description}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#tokenomics" className="btn-primary w-full sm:w-auto">
                Buy ${token.symbol}
                <Arrow />
              </a>
              <a href="#about" className="btn-ghost w-full sm:w-auto">
                Read the litepaper
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 text-xs text-slate-500">
              Contract{" "}
              <span className="font-mono text-slate-400">{token.contract}</span>{" "}
              · {token.chain}
            </p>
          </Reveal>
        </div>

        {/* Stat bar */}
        <Reveal delay={380}>
          <div className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.02] px-6 py-6 text-center"
              >
                <div className="text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
