"use client";

import { type ReactNode, useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";

const key = "theme";

/** Run in <head> before the first paint: the reader's choice, else their
 *  system, as <html data-theme>, so the page never flashes the wrong one. */
export const themeScript = `(function(){try{var m=localStorage.getItem("${key}")||"system";var d=m==="dark"||(m==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);var e=document.documentElement;e.dataset.theme=d?"dark":"light";e.dataset.themeMode=m}catch(_){}})()`;

function apply(mode: ThemeMode) {
  const el = document.documentElement;
  const dark = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  el.classList.add("theme-switching");
  el.dataset.theme = dark ? "dark" : "light";
  el.dataset.themeMode = mode;
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("theme-switching")));
}

const options: { mode: ThemeMode; label: string; icon: ReactNode }[] = [
  {
    mode: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    mode: "system",
    label: "System",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    mode: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    ),
  },
];

/** Light, System or Dark: remembered, and System follows the OS as it changes. */
export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode | null>(null);

  useEffect(() => {
    setMode((document.documentElement.dataset.themeMode as ThemeMode) ?? "system");
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const follow = () => apply("system");
    mq.addEventListener("change", follow);
    return () => mq.removeEventListener("change", follow);
  }, [mode]);

  const choose = (m: ThemeMode) => {
    setMode(m);
    try {
      localStorage.setItem(key, m);
    } catch {}
    apply(m);
  };

  return (
    <div role="radiogroup" aria-label="Theme" className="flex items-center rounded-full border border-rule bg-card p-0.5">
      {options.map((o) => (
        <button
          key={o.mode}
          type="button"
          role="radio"
          aria-checked={mode === o.mode}
          aria-label={o.label}
          title={o.label}
          onClick={() => choose(o.mode)}
          className={`grid size-7 place-items-center rounded-full transition ${mode === o.mode ? "bg-ink text-paper" : "text-ink-3 hover:text-ink"}`}
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}
