import { Code } from "@/components/Code";
import { ButtonLink, Section } from "@/components/ui";
import { apps, nuiCode, repo } from "@/content/site";

const desktopApps = apps.filter((app) => app.name === "nanomon" || app.name === "nanoterm");

export function Apps() {
  return (
    <Section id="apps" kicker="01 · Desktop" title="At home on your desktop." lead="Live system graphs in nanomon. A terminal, coding agent and native visuals in nanoterm.">
      <div className="grid gap-6 md:grid-cols-2">
        {desktopApps.map((app) => (
          <a
            key={app.name}
            href={app.href}
            className="group overflow-hidden rounded-2xl border border-ink/80 bg-card print-shadow transition hover:-translate-y-1"
          >
            <div className="aspect-[16/11] overflow-hidden border-b border-ink/80 bg-paper-2">
              <img
                src={app.image}
                alt={app.alt}
                width={1600}
                height={app.name === "nanomon" ? 1106 : 1245}
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                {app.name} <span className="inline-block text-cobalt transition group-hover:translate-x-1">→</span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{app.body}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-ink-2">
        There&apos;s more: <a href="https://github.com/justrach/nanostudio" className="font-semibold text-ink underline decoration-cobalt underline-offset-4">nanostudio</a> is
        a screen recorder and editor built on the same toolkit. <a href="/gallery" className="font-semibold text-cobalt underline underline-offset-4">See the full showcase →</a>
      </p>
    </Section>
  );
}

export function GetStarted() {
  return (
    <Section id="get-started" kicker="03 · Your turn" title="Now build your own." lead="Start with a small Zig app. Take it to the screen you have in mind.">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="text-lg leading-relaxed text-ink-2">
            Install <code className="font-mono text-ink">nui</code> from the latest release and use Zig 0.17. The CLI creates a project,
            tests it without opening a window, and captures a screenshot when you need one.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            iOS builds need Xcode&apos;s SDK; Android builds need the Android SDK and NDK. The setup guide covers each platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`${repo}/releases`}>Get nui</ButtonLink>
            <ButtonLink href={`${repo}#readme`} variant="outline">Read the setup guide</ButtonLink>
          </div>
        </div>
        <div className="min-w-0">
          <Code code={nuiCode} lang="sh" title="a new app with nui" />
        </div>
      </div>
    </Section>
  );
}
