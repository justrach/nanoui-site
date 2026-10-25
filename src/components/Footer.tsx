import Link from "next/link";
import { credits, repo } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-2/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/brand/icon-512.png" alt="" width={40} height={40} className="size-10" />
            <span className="font-display text-2xl font-extrabold tracking-tight">nanoui</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
            Desktop apps in Zig, with native UI drawn on the GPU or a web frontend. MIT licensed. Meet Nano, its field mouse
            craftsperson.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">Project</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-cobalt" href={repo}>Source on GitHub</a></li>
            <li><a className="hover:text-cobalt" href={`${repo}/releases`}>Releases</a></li>
            <li><a className="hover:text-cobalt" href={`${repo}/blob/main/AGENTS.md`}>AGENTS.md</a></li>
            <li><a className="hover:text-cobalt" href={`${repo}/blob/main/hillclimb/README.md`}>Benchmarks</a></li>
            <li><Link className="hover:text-cobalt" href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">On the shoulders of</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {credits.map((c) => (
              <li key={c.name}>
                <a className="hover:text-cobalt" href={c.href}>
                  {c.name}
                </a>
                <span className="text-ink-3"> by {c.by}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-[11px] text-ink-3">Built in Zig 0.17 · this site in Next.js on Cloudflare Workers</p>
      </div>
    </footer>
  );
}
