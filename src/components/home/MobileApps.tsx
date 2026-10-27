import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { repo } from "@/content/site";

export function MobileApps() {
  return (
    <Section id="mobile" kicker="02 · iOS & Android" title="And ready for your pocket." lead="Follow a flight on iPhone, or explore the same Zig UI toolkit on Android. Touch, scrolling and small screens are part of the story.">
      <Reveal stagger className="grid gap-6 md:grid-cols-2">
        <a href="https://github.com/justrach/nanofly" className="motion-card group overflow-hidden rounded-2xl border border-ink/80 bg-card print-shadow">
          <div className="flex h-[360px] items-center justify-center border-b border-ink/80 bg-cobalt/10 p-5 sm:h-[440px]">
            <img
              src="/apps/nanofly.webp"
              alt="nanofly on iPhone: a flight over the Pacific, with live weather and a glass flight card"
              width={860}
              height={1800}
              loading="lazy"
              decoding="async"
              className="h-full w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">iOS · Flight tracker</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">nanofly <span className="motion-arrow inline-block text-cobalt">→</span></h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">Live flights, weather radar and a map drawn by nanoui, with a flight card in Liquid Glass. Built for iPhone and Mac.</p>
          </div>
        </a>

        <a href={`${repo}/blob/main/docs/android.md`} className="motion-card group overflow-hidden rounded-2xl border border-ink/80 bg-card print-shadow">
          <div className="flex h-[360px] items-center justify-center border-b border-ink/80 bg-marigold/10 p-4 sm:h-[440px]">
            <img
              src="/apps/android-gallery.webp"
              alt="The nanoui Android demo app: navigation, a task list with the software keyboard, and a scrolling list in dark mode"
              width={1600}
              height={1135}
              loading="lazy"
              decoding="async"
              className="max-h-full w-full object-contain"
            />
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">Android · Demo app</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">nanoui on Android <span className="motion-arrow inline-block text-cobalt">→</span></h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">Navigation, touch scrolling, keyboard input and light or dark screens. A working demo app, drawn with OpenGL ES or the CPU.</p>
          </div>
        </a>
      </Reveal>
      <p className="mt-8 text-sm leading-relaxed text-ink-2">
        See the toolkit running on iPhone too. <a href="/gallery#ios" className="font-semibold text-cobalt underline underline-offset-4">Watch the iOS app tour →</a>
      </p>
    </Section>
  );
}
