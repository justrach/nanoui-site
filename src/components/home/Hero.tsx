import { ButtonLink, WindowFrame } from "@/components/ui";
import { GitHubMark } from "@/components/Header";
import { apps, repo, stats } from "@/content/site";

const featuredApps = apps.filter((app) => app.name === "nanomon" || app.name === "nanoterm");

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* The print's two color plates, off the page's edge. */}
      <div aria-hidden className="absolute -right-40 -top-32 size-[520px] rounded-full bg-marigold/25 blur-3xl dark:bg-marigold/10" />
      <div aria-hidden className="absolute -left-40 top-64 size-[420px] rounded-full bg-cobalt/15 blur-3xl dark:bg-cobalt/20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-16 md:grid-cols-[1.1fr_1fr] md:pt-24">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/70 bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="size-1.5 rounded-full bg-vermilion" />
            Zig 0.17 · MIT · macOS, iOS, Android, Linux, Windows
          </p>
          <h1 className="misprint mt-6 font-display text-[clamp(3rem,8vw,6.2rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            Desktop apps
            <br />
            in <span className="text-cobalt">Zig</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            From nanomon&apos;s live system graphs to nanoterm&apos;s terminal and coding agent. Real apps, with native UI drawn on the GPU
            or a web frontend that calls Zig through a typed client.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#get-started">Get started</ButtonLink>
            <ButtonLink href="#apps" variant="outline">
              Explore the apps
            </ButtonLink>
            <ButtonLink href={repo} variant="outline">
              <GitHubMark /> Star on GitHub
            </ButtonLink>
          </div>
        </div>

        <div className="relative fade-up [animation-delay:120ms]">
          {featuredApps.map((app, i) => (
            <a
              key={app.name}
              href={app.href}
              aria-label={`Explore ${app.name} on GitHub`}
              className={`relative block w-[90%] rounded-xl transition hover:z-10 hover:-translate-y-1 focus-visible:z-10 ${i === 0 ? "-rotate-2" : "-mt-16 ml-auto rotate-2"}`}
            >
              <WindowFrame title={app.name}>
                <img
                  src={app.image}
                  alt={app.alt}
                  width={1600}
                  height={app.name === "nanomon" ? 1106 : 1245}
                  loading="eager"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </WindowFrame>
            </a>
          ))}
          <p className="mt-6 text-right font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Real apps. Built on nanoui.</p>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y border-rule bg-rule px-0 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper px-5 py-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{s.label}</dt>
            <dd className="mt-1 font-display text-4xl font-extrabold tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
