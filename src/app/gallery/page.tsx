import type { Metadata } from "next";
import { Gallery } from "@/components/gallery/Gallery";
import { shots } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore desktop apps built with nanoui, nanofly on iPhone, and working iOS and Android demo apps. One Zig UI toolkit, across screens.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">Gallery</p>
      <h1 className="misprint mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
        Different screens. All nanoui.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
        nanomon and nanoterm on the desktop. nanofly on iPhone. Working demo apps on iOS and Android. Pick a screen, open an app,
        and see what&apos;s possible with Zig.
      </p>
      <Gallery shots={shots} />
    </div>
  );
}
