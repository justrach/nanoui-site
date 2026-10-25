import { Code } from "@/components/Code";
import { ButtonLink, Section } from "@/components/ui";
import { apps, getStarted, nuiCode } from "@/content/site";

export function Apps() {
  return (
    <Section id="apps" kicker="06 · Apps" title="Built on nanoui." lead="Real apps, each in its own repository and each a single binary.">
      <div className="grid gap-6 sm:grid-cols-2">
        {apps.map((a, i) => (
          <a
            key={a.name}
            href={a.href}
            className={`group overflow-hidden rounded-2xl border border-ink/80 bg-card print-shadow transition hover:-translate-y-1 ${i % 2 ? "sm:translate-y-8 sm:hover:translate-y-7" : ""}`}
          >
            <div className="aspect-[16/10] overflow-hidden border-b border-ink/80 bg-paper-2">
              <img
                src={a.image}
                alt={a.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${a.name === "nanofly" ? "object-contain p-3" : "object-cover object-top"}`}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                {a.name} <span className="inline-block text-cobalt transition group-hover:translate-x-1">→</span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{a.body}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function GetStarted() {
  return (
    <Section
      id="get-started"
      kicker="07 · Get started"
      title="Clone it, and the tour is one command."
      lead="You need Zig 0.17.0, plus the macOS SDK on a Mac. Linux apps need GTK 3 at run time and nothing at build time."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Code code={getStarted} lang="sh" title="terminal" />
        </div>
        <div>
          <Code code={nuiCode} lang="sh" title="a new app with nui" />
          <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
            <code className="font-mono text-ink">nui</code> makes an app that builds, and checks it without opening a window, for people and coding
            agents alike. It never asks anything, and every command takes <code className="font-mono text-ink">--json</code>.
          </p>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-ink/80 bg-cobalt px-6 py-14 text-center text-cobalt-ink print-shadow">
        <img src="/brand/nano.webp" alt="" width={880} height={880} className="w-32 -rotate-6" />
        <p className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">See every widget drawn by nanoui.</p>
        <div className="[&_a]:border-white">
          <ButtonLink href="/gallery" variant="outline">
            Open the gallery
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
