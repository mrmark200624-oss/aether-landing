import Reveal from "@/components/Reveal";
import { features } from "@/data/content";

const icons: Record<string, JSX.Element> = {
  orbit: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12 2.3 2.3L15.5 9.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">About the protocol</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for the <span className="neon-text">multi-chain</span> future
          </h2>
          <p className="mt-4 text-slate-300">
            Three principles guide everything we ship — interoperability, speed,
            and true community ownership.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="group glass h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon-cyan/40 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 text-neon-cyan ring-1 ring-white/10 [&_svg]:h-6 [&_svg]:w-6">
                  {icons[f.icon]}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {f.body}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-neon-cyan/40 via-neon-violet/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
