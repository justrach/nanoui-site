"use client";

import { useMemo, useState } from "react";
import type { Shot } from "@/content/gallery";
import { Reveal } from "@/components/Reveal";
import { ShotImage } from "./ShotImage";
import { Lightbox } from "./Lightbox";

type Filter = "all" | Shot["kind"];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "desktop", label: "Desktop" },
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
];

export function Gallery({ shots }: { shots: Shot[] }) {
  const [filter, setFilter] = useState<Filter>("all");
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
      </div>

      {/* A grid, not CSS columns: Chrome may never load lazy images in a column past the first. */}
      <Reveal as="ul" stagger replayKey={filter} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s, i) => (
          <li key={s.id} id={s.id} className="scroll-mt-40">
            <button
              onClick={() => setOpen(i)}
              className="motion-card group block h-full w-full overflow-hidden rounded-2xl border border-ink/80 bg-card text-left print-shadow-sm"
            >
              <div className="relative aspect-[45/32] overflow-hidden border-b border-ink/80 bg-paper-2">
                <ShotImage
                  shot={s}
                  className={`h-full w-full ${s.tall ? "object-contain p-3" : "object-cover object-top"}`}
                />
                {s.video && (
                  <span className="absolute bottom-3 right-3 rounded-full border border-ink bg-card px-2.5 py-1 font-mono text-[11px] print-shadow-sm">▶ video</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-lg font-bold tracking-tight">{s.title}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">{filters.find((f) => f.id === s.kind)?.label}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.caption}</p>
              </div>
            </button>
          </li>
        ))}
      </Reveal>

      {open !== null && <Lightbox shots={shown} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
