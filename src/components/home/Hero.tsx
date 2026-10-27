import { ButtonLink } from "@/components/ui";
import { GitHubMark } from "@/components/Header";
import { repo } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute -right-40 -top-32 size-[520px] rounded-full bg-marigold/25 blur-3xl dark:bg-marigold/10" />
      <div aria-hidden className="absolute -left-40 top-40 size-[420px] rounded-full bg-cobalt/15 blur-3xl dark:bg-cobalt/20" />

      <div className="relative mx-auto max-w-6xl px-5 pb-4 pt-14 text-center sm:pt-20">
        <div className="hero-enter">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/70 bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="size-1.5 rounded-full bg-vermilion" />
            Zig 0.17 · MIT · One UI toolkit
          </p>
          <h1 className="misprint mt-6 font-display text-[clamp(2.75rem,7.5vw,6.2rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Apps in Zig.
            <br />
            <span className="text-cobalt">Desktop to pocket.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            A system monitor. A terminal with a coding agent. A flight tracker on your phone. See what people are building with nanoui,
            then make something of your own.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#apps">Explore the apps</ButtonLink>
            <ButtonLink href="#get-started" variant="outline">Build your own</ButtonLink>
            <ButtonLink href={repo} variant="outline"><GitHubMark /> GitHub</ButtonLink>
          </div>
          <ul aria-label="Supported platforms" className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
            {["macOS", "Windows", "Linux", "iOS", "Android"].map((platform) => <li key={platform}>{platform}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
