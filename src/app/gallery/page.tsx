import type { Metadata } from "next";
import { Gallery } from "@/components/gallery/Gallery";
import { shots } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Every widget of nanoui's gallery in light and dark, nanoui on iOS and Android, and the apps built on it. All drawn by nanoui.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">Gallery</p>
      <h1 className="misprint mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
        Drawn by nanoui, every pixel.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
        The gallery example&apos;s pages are snapshotted offscreen by the real renderer, in light and dark, with{" "}
        <code className="font-mono text-base text-ink">zig-out/bin/gallery --nanoui-snapshot</code>. No window was opened to make them. Then
        nanoui on phones, and the apps built on it.
      </p>
      <Gallery shots={shots} />
    </div>
  );
}
