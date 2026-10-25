import { Code } from "@/components/Code";
import { Section, ThemedShot, WindowFrame } from "@/components/ui";
import { counterCode, features } from "@/content/site";

const marks: Record<string, string> = {
  layout: "▦",
  text: "Aa",
  glass: "◐",
  motion: "↻",
  kit: "▣",
  test: "✓",
};

export function NativeUI() {
  return (
    <Section
      id="native-ui"
      kicker="01 · Native UI"
      title={
        <>
          Written in Zig alone. <span className="text-ink-3">No HTML, no JavaScript, no webview.</span>
        </>
      }
      lead="Views are immediate mode: a function of your state, run on every event. When an interaction changes state, the frame is built again before it's drawn, so the screen never lags the state. On macOS it draws with Metal and CoreText, in one instanced draw call per frame."
    >
      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
        <Code code={counterCode} lang="zig" title="counter.zig" />
        <div className="space-y-6 lg:pt-6">
          <WindowFrame title="Gallery">
            <ThemedShot
              light="/gallery/gallery-kit-light-sm.webp"
              dark="/gallery/gallery-kit-dark-sm.webp"
              alt="The gallery's Kit page: buttons in every variant and size, tags, avatars, alerts, progress"
              width={900}
              height={640}
              className="block h-auto w-full"
            />
          </WindowFrame>
          <p className="text-sm leading-relaxed text-ink-3">
            The gallery's Kit page, rendered offscreen by the Metal renderer with <code className="font-mono text-ink-2">--nanoui-snapshot</code>.
          </p>
        </div>
      </div>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/80 bg-ink/80 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li key={f.tag} className="group bg-card p-6 transition hover:bg-paper">
            <span className="grid size-10 place-items-center rounded-lg border border-ink bg-marigold font-display text-lg font-bold text-[#17140f] print-shadow-sm transition group-hover:-rotate-6">
              {marks[f.tag]}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
