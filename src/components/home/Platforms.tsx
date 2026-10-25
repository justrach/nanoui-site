import { Section } from "@/components/ui";
import { perf, platforms, repo } from "@/content/site";

export function Platforms() {
  return (
    <Section
      id="platforms"
      kicker="04 · Platforms"
      title="One Zig view on five platforms, built from any machine."
      lead="nanoui loads what each platform has instead of linking it, so every platform builds from any machine. Where there's no Metal, nanoui reads TrueType itself and its CPU renderer matches Metal pixel for pixel; a test compares them."
    >
      <div className="overflow-x-auto rounded-2xl border border-ink/80 bg-card print-shadow">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <thead className="border-b border-ink/80 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            <tr>
              <th className="px-5 py-3.5 font-normal">Platform</th>
              <th className="px-5 py-3.5 font-normal">Windows &amp; input</th>
              <th className="px-5 py-3.5 font-normal">Text</th>
              <th className="px-5 py-3.5 font-normal">Rendering</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((p, i) => (
              <tr key={p.name} className={i > 0 ? "border-t border-rule" : ""}>
                <td className="px-5 py-4 font-display text-lg font-bold">{p.name}</td>
                <td className="px-5 py-4 text-ink-2">{p.ui}</td>
                <td className="px-5 py-4 text-ink-2">{p.text}</td>
                <td className="px-5 py-4 text-ink-2">{p.render}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Performance() {
  const max = Math.max(...perf.map((p) => p.mygo));
  return (
    <Section
      id="performance"
      kicker="05 · Performance"
      title="Frames in fractions of a millisecond."
      lead={
        <>
          Measured headless with{" "}
          <a className="underline decoration-marigold decoration-2 underline-offset-4" href={`${repo}/blob/main/hillclimb/README.md`}>
            hillclimb
          </a>
          : the same scenes through each framework's own frames and offscreen Metal renderer, on an Apple M3 Ultra. Median CPU time per frame, lower
          is better.
        </>
      }
    >
      <div className="space-y-5">
        {perf.map((p) => (
          <div key={p.scene} className="grid items-center gap-3 sm:grid-cols-[180px_1fr]">
            <div>
              <div className="font-display text-lg font-bold">{p.scene}</div>
              <div className="text-sm text-ink-3">{p.detail}</div>
            </div>
            <div className="space-y-1.5">
              <Bar label="nanoui" ms={p.nanoui} max={max} className="bg-cobalt" />
              <Bar label="mygo" ms={p.mygo} max={max} className="bg-ink/25" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-3">
        Release binaries are about 0.7 MB for nanoui and 11.8 MB for mygo, which nanoui began as a port of.
      </p>
    </Section>
  );
}

function Bar({ label, ms, max, className }: { label: string; ms: number; max: number; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 font-mono text-[11px] text-ink-3">{label}</span>
      <div className="h-5 flex-1 overflow-hidden rounded-full bg-paper-2">
        <div className={`h-full rounded-full ${className}`} style={{ width: `${Math.max(1.5, (ms / max) * 100)}%` }} />
      </div>
      <span className="w-16 text-right font-mono text-sm tabular-nums">{ms.toFixed(3)}</span>
    </div>
  );
}
