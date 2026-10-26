"use client";

import { type ReactNode, useEffect, useRef } from "react";
import type { Shot } from "@/content/gallery";
import { ShotImage } from "./ShotImage";

type Props = { shots: Shot[]; index: number; onIndex: (i: number) => void; onClose: () => void };

/** One shot, large, over the page: arrows move through them, Escape closes. */
export function Lightbox({ shots, index, onIndex, onClose }: Props) {
  const s = shots[index];
  const dialog = useRef<HTMLDialogElement>(null);
  const go = (d: number) => onIndex((index + d + shots.length) % shots.length);

  useEffect(() => {
    const el = dialog.current;
    if (el && !el.open) el.showModal();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      className="m-auto max-h-[94vh] w-[min(1200px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-[#17140f]/80 backdrop:backdrop-blur-sm"
      aria-label={s.title}
    >
      <figure className="overflow-hidden rounded-2xl border border-ink bg-card text-ink">
        <div className="grid max-h-[78vh] place-items-center overflow-auto bg-paper-2">
          {s.video ? (
            <video key={s.id} src={s.video} poster={s.src} controls autoPlay muted loop playsInline className="max-h-[78vh] w-auto" />
          ) : (
            <ShotImage key={s.id} shot={s} eager className="max-h-[78vh] w-auto" />
          )}
        </div>
        <figcaption className="flex items-center gap-4 border-t border-ink/80 px-5 py-4">
          <div className="min-w-0">
            <h2 className="font-display text-xl font-bold tracking-tight">{s.title}</h2>
            <p className="text-sm text-ink-2">{s.caption}</p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <span className="hidden font-mono text-[11px] text-ink-3 sm:inline">
              {index + 1} / {shots.length}
            </span>
            <LbButton label="Previous" onClick={() => go(-1)}>←</LbButton>
            <LbButton label="Next" onClick={() => go(1)}>→</LbButton>
            <LbButton label="Close" onClick={() => dialog.current?.close()}>✕</LbButton>
          </div>
        </figcaption>
      </figure>
    </dialog>
  );
}

function LbButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-9 place-items-center rounded-full border border-ink bg-card text-ink transition hover:bg-ink hover:text-paper"
    >
      {children}
    </button>
  );
}
