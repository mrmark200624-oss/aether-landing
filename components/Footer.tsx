import { socials, navLinks, token } from "@/data/content";

const socialIcons: Record<string, JSX.Element> = {
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
    </svg>
  ),
  discord: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4.4A19 19 0 0 0 15.4 3l-.2.4a14 14 0 0 1 4.1 2 13.5 13.5 0 0 0-11.6 0 14 14 0 0 1 4.1-2L11.6 3A19 19 0 0 0 7 4.4C4 8.9 3.2 13.3 3.6 17.6a19 19 0 0 0 5.7 2.9l.4-.6-.3-.2a8 8 0 0 1-2-.9l.5-.3a13.6 13.6 0 0 0 11.6 0l.5.3a8 8 0 0 1-2 .9l-.3.2.4.6a19 19 0 0 0 5.7-2.9c.5-5-.8-9.3-3.5-13.2ZM9.7 15c-.9 0-1.7-.8-1.7-1.9s.8-1.9 1.7-1.9 1.7.9 1.7 1.9-.8 1.9-1.7 1.9Zm4.6 0c-.9 0-1.7-.8-1.7-1.9s.8-1.9 1.7-1.9 1.7.9 1.7 1.9-.8 1.9-1.7 1.9Z" />
    </svg>
  ),
  telegram: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3 18.7 19.6c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 9-8.1c.4-.3-.1-.5-.6-.2L6.2 13.5l-4.8-1.5c-1-.3-1-.9.2-1.4l18.6-7.2c.9-.3 1.6.2 1.7 1Z" />
    </svg>
  ),
  github: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .3.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-strong relative overflow-hidden p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-neon-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-neon-violet/20 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the <span className="neon-text">Aether</span> economy
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-slate-300">
            Grab ${token.symbol}, provide liquidity, and help govern the
            protocol from day one.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#tokenomics" className="btn-primary w-full sm:w-auto">
              Buy ${token.symbol}
            </a>
            <a href="#" className="btn-ghost w-full sm:w-auto">
              Join Discord
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#top" className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet text-base-900">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 3 20h18L12 2Zm0 5.6L16.2 16H7.8L12 7.6Z" />
                </svg>
              </span>
              <span className="text-lg font-semibold text-white">Aether</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Liquidity for the on-chain economy. Permissionless, fast and
              community-owned.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-white hover:shadow-glow"
              >
                {socialIcons[s.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Aether Protocol. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <span className="text-slate-600">
              Placeholder content · not financial advice
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
