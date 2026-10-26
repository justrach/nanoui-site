import type { Metadata } from "next";
import { Gallery } from "@/components/gallery/Gallery";
import { shots } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore nanomon, nanoterm and more real apps built with nanoui, alongside native widgets in light and dark and the same UI on iOS and Android.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">Gallery</p>
      <h1 className="misprint mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
        Real apps. Every pixel, nanoui.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
        Start with nanomon&apos;s live system graphs and nanoterm&apos;s terminal, coding agent and native visuals. Then explore more apps,
        the widgets they&apos;re built from, and nanoui on iOS and Android.
      </p>
      <Gallery shots={shots} />
    </div>
  );
}
