"use client";

import { useMemo, useState } from "react";
import type { Shot } from "@/content/gallery";
import { ShotImage, type Mode } from "./ShotImage";
import { Lightbox } from "./Lightbox";

type Filter = "all" | Shot["kind"];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "widgets", label: "Widgets" },
  { id: "platforms", label: "Phones" },
  { id: "apps", label: "Apps" },
];

export function Gallery({ shots }: { shots: Shot[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  // Auto: the reader's appearance, chosen by the browser before any script runs.
  const [mode, setMode] = useState<Mode>("auto");
  const [open, setOpen] = useState<number | null>(null);
  const shown = useMemo(() => shots.filter((s) => filter === "all" || s.kind === filter), [shots, filter]);

  return (
    <>
      <div className="sticky top-14 z-30 -mx-5 mt-10 flex flex-wrap items-center gap-3 border-y border-rule bg-paper/90 px-5 py-3 backdrop-blur-md">
        <div role="tablist" aria-label="What to show" className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${filter === f.id ? "border-ink bg-ink text-paper" : "border-rule bg-card text-ink-2 hover:border-ink hover:text-ink"}`}
            >
              {f.label}
              <span className="ml-1.5 font-mono text-[11px] opacity-60">{shots.filter((s) => f.id === "all" || s.kind === f.id).length}</span>
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <span className="hidden text-ink-3 sm:inline">Gallery pages in</span>
          <div className="flex rounded-full border border-ink p-0.5" role="radiogroup" aria-label="Appearance of the gallery pages">
            {(["auto", "light", "dark"] as const).map((m) => (
              <button
                key={m}
                role="radio"
                aria-checked={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-full px-3 py-1 capitalize transition ${mode === m ? "bg-cobalt text-cobalt-ink" : "text-ink-2 hover:text-ink"}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* A grid, not CSS columns: Chrome may never load lazy images in a column past the first. */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s, i) => (
          <li key={s.id}>
            <button
              onClick={() => setOpen(i)}
              className="group block h-full w-full overflow-hidden rounded-2xl border border-ink/80 bg-card text-left print-shadow-sm transition hover:-translate-y-1 hover:print-shadow"
            >
              <div className="relative aspect-[45/32] overflow-hidden border-b border-ink/80 bg-paper-2">
                <ShotImage
                  shot={s}
                  mode={mode}
                  small
                  className={`h-full w-full transition duration-500 group-hover:scale-[1.025] ${s.tall ? "object-contain p-3" : "object-cover object-top"}`}
                />
                {s.video && (
                  <span className="absolute bottom-3 right-3 rounded-full border border-ink bg-card px-2.5 py-1 font-mono text-[11px] print-shadow-sm">▶ video</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-lg font-bold tracking-tight">{s.title}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">{s.kind}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.caption}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && <Lightbox shots={shown} index={open} mode={mode} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
