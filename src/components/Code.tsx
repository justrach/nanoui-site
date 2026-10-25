import { highlight, type Lang } from "@/lib/highlight";
import { CopyButton } from "./CopyButton";

type Props = { code: string; lang: Lang; title?: string; className?: string };

/** A snippet on a dark plate, highlighted at build time, with a copy button. */
export function Code({ code, lang, title, className = "" }: Props) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-ink/80 bg-code-bg text-code-fg print-shadow ${className}`}>
      <figcaption className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 font-mono text-[11px] tracking-wide text-code-fg/60">
        <span className="size-2.5 rounded-full bg-vermilion" />
        <span className="size-2.5 rounded-full bg-marigold" />
        <span className="size-2.5 rounded-full bg-[#3fb56b]" />
        <span className="ml-2 uppercase">{title ?? lang}</span>
        <CopyButton text={code} />
      </figcaption>
      <pre className="overflow-x-auto p-4 text-[13px] leading-[1.65] sm:p-5">
        <code className="font-mono">
          {highlight(code, lang).map((t, i) =>
            t.cls ? (
              <span key={i} className={t.cls}>
                {t.text}
              </span>
            ) : (
              t.text
            ),
          )}
        </code>
      </pre>
    </figure>
  );
}
