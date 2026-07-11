import Reveal from "@/components/Reveal";
import { team } from "@/data/content";

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">The team</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Backed by <span className="neon-text">proven builders</span>
          </h2>
          <p className="mt-4 text-slate-300">
            Veterans from leading L1s, exchanges and zero-knowledge research
            labs, shipping in the open.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group glass h-full p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-neon-violet/40 hover:shadow-glow-violet">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 text-xl font-bold text-white ring-1 ring-white/10">
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-neon-cyan">{m.role}</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <SocialBtn href={m.socials.x ?? "#"} label="X profile">
                    <XIcon />
                  </SocialBtn>
                  <SocialBtn href={m.socials.in ?? "#"} label="LinkedIn profile">
                    <InIcon />
                  </SocialBtn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-neon-cyan/40 hover:text-white"
    >
      {children}
    </a>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
    </svg>
  );
}

function InIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.4h3.28V22H3.3V8.4Zm5.3 0h3.14v1.86h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5V22h-3.27v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V22H8.6V8.4Z" />
    </svg>
  );
}
