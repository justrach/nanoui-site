import type { Shot } from "@/content/gallery";

/** An app screenshot keeps its captured appearance as the site changes theme. */
export function ShotImage({ shot, eager = false, className }: { shot: Shot; eager?: boolean; className?: string }) {
  return <img src={shot.src} alt={`${shot.title}: ${shot.caption}`} loading={eager ? "eager" : "lazy"} decoding="async" className={className} />;
}
