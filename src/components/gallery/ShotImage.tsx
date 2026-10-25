import { type Shot, shotSrc } from "@/content/gallery";

export type Mode = "auto" | "light" | "dark";

/** A shot's image. A gallery page in "auto" follows the site's theme. */
export function ShotImage({ shot, mode, small = false, eager = false, className }: { shot: Shot; mode: Mode; small?: boolean; eager?: boolean; className?: string }) {
  const alt = `${shot.title}: ${shot.caption}`;
  const loading = eager ? "eager" : "lazy";
  if (shot.themed && mode === "auto") {
    // Both, one hidden by the site's theme (a hidden lazy image isn't fetched).
    return (
      <>
        <img src={shotSrc(shot, "light", small)} alt={alt} loading={loading} decoding="async" className={`${className} dark:hidden`} />
        <img src={shotSrc(shot, "dark", small)} alt={alt} loading={loading} decoding="async" className={`${className} hidden dark:block`} />
      </>
    );
  }
  return <img src={shotSrc(shot, mode === "dark" ? "dark" : "light", small)} alt={alt} loading={loading} decoding="async" className={className} />;
}
