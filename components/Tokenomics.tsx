import Reveal from "@/components/Reveal";
import DonutChart from "@/components/DonutChart";
import { allocations, token } from "@/data/content";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Tokenomics</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A supply that <span className="neon-text">rewards builders</span>
          </h2>
          <p className="mt-4 text-slate-300">
            {token.totalSupply} ${token.symbol} minted at genesis. No hidden
            mint keys, no team unlocks before the community.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Chart + legend */}
          <Reveal className="glass-strong p-8">
            <DonutChart data={allocations} />
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {allocations.map((a) => (
                <li key={a.label} className="flex items-center gap-2.5 text-sm">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="text-slate-300">{a.label}</span>
                  <span className="ml-auto font-medium text-white">
                    {a.percent}%
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Distribution table */}
          <Reveal delay={120}>
            <div className="glass overflow-hidden">
              <div className="grid grid-cols-12 gap-2 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-wider text-slate-400">
                <div className="col-span-5">Allocation</div>
                <div className="col-span-2 text-right">Share</div>
                <div className="col-span-5 text-right">Vesting</div>
              </div>
              <ul>
                {allocations.map((a) => (
                  <li
                    key={a.label}
                    className="grid grid-cols-12 items-center gap-2 border-b border-white/5 px-6 py-4 transition-colors last:border-0 hover:bg-white/[0.03]"
                  >
                    <div className="col-span-5 flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: a.color }}
                      />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {a.label}
                        </div>
                        <div className="text-xs text-slate-500">{a.detail}</div>
                      </div>
                    </div>
                    <div className="col-span-2 text-right text-sm font-semibold text-white">
                      {a.percent}%
                    </div>
                    <div className="col-span-5 text-right text-xs text-slate-400">
                      {a.cliff}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { k: "Total supply", v: "1B" },
                { k: "Initial float", v: "42%" },
                { k: "Emissions", v: "None" },
              ].map((m) => (
                <div key={m.k} className="glass px-4 py-4 text-center">
                  <div className="text-lg font-bold text-white">{m.v}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wide text-slate-400">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
