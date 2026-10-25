import { type Shot, shotSrc } from "@/content/gallery";

export type Mode = "auto" | "light" | "dark";

/** A shot's image. A gallery page in "auto" is a <picture> the browser
 *  resolves to the reader's appearance, so nothing flips once scripts run. */
export function ShotImage({ shot, mode, small = false, eager = false, className }: { shot: Shot; mode: Mode; small?: boolean; eager?: boolean; className?: string }) {
  const alt = `${shot.title}: ${shot.caption}`;
  const loading = eager ? "eager" : "lazy";
  if (shot.themed && mode === "auto") {
    return (
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={shotSrc(shot, "dark", small)} />
        <img src={shotSrc(shot, "light", small)} alt={alt} loading={loading} decoding="async" className={className} />
      </picture>
    );
  }
  return <img src={shotSrc(shot, mode === "dark" ? "dark" : "light", small)} alt={alt} loading={loading} decoding="async" className={className} />;
}
