import type { ReactNode } from "react";

/** A section of a page, with an anchor, a kicker and a heading. */
export function Section({ id, kicker, title, lead, children, className = "" }: { id?: string; kicker: string; title: ReactNode; lead?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-20 px-5 pt-24 ${className}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">{kicker}</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{lead}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

/** A screenshot in the light or dark appearance, as the reader's system is. */
export function ThemedShot({ light, dark, alt, className = "", width, height }: { light: string; dark: string; alt: string; className?: string; width?: number; height?: number }) {
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <img src={light} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={className} />
    </picture>
  );
}

/** A window's frame around a screenshot, so it reads as an app. */
export function WindowFrame({ children, title, className = "" }: { children: ReactNode; title?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/80 bg-card print-shadow ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-rule px-3 py-2">
        <span className="size-2.5 rounded-full bg-vermilion" />
        <span className="size-2.5 rounded-full bg-marigold" />
        <span className="size-2.5 rounded-full bg-[#3fb56b]" />
        {title && <span className="ml-2 font-mono text-[11px] text-ink-3">{title}</span>}
      </div>
      {children}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "outline" }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-x-[2px] active:translate-y-[2px]";
  const look =
    variant === "primary"
      ? "border border-ink bg-cobalt text-cobalt-ink print-shadow-sm hover:-translate-y-0.5"
      : "border border-ink bg-card text-ink print-shadow-sm hover:-translate-y-0.5";
  return (
    <a href={href} className={`${base} ${look}`}>
      {children}
    </a>
  );
}
