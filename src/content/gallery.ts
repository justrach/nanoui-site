// The gallery: the gallery example's pages, snapshotted offscreen in light
// and dark (zig-out/bin/gallery --nanoui-snapshot … --nanoui-script=click:PAGE),
// nanoui on phones, and the apps built on it.

export type Shot = {
  id: string;
  title: string;
  caption: string;
  kind: "widgets" | "platforms" | "apps";
  // Pages drawn in both appearances have /gallery/<id>-<mode>.webp. A tall
  // shot (a phone) is shown whole in its card, not cropped.
  themed?: boolean;
  src?: string;
  video?: string;
  tall?: boolean;
};

export const shots: Shot[] = [
  { id: "gallery-controls", kind: "widgets", themed: true, title: "Controls", caption: "Buttons, toggles, sliders and a text field." },
  { id: "gallery-kit", kind: "widgets", themed: true, title: "Kit", caption: "Buttons in every variant and size, tags, avatars, alerts, progress." },
  { id: "gallery-glass", kind: "widgets", themed: true, title: "Liquid Glass", caption: "A toolbar of glass over cards, a tinted button and a pane of clear glass." },
  { id: "gallery-motion", kind: "widgets", themed: true, title: "Motion", caption: "Springs, a staggered list, easings and a toast that comes and goes." },
  { id: "gallery-tasks", kind: "widgets", themed: true, title: "Tasks", caption: "A task list: type, add, check off and remove, with what's left counted." },
  { id: "gallery-list", kind: "widgets", themed: true, title: "List", caption: "10 000 rows filtered as you type; a virtual list builds only those in view." },
  { id: "gallery-typography", kind: "widgets", themed: true, title: "Typography", caption: "Titles, body, monospace, Unicode, and text that wraps to its box." },
  { id: "ios", kind: "platforms", video: "/apps/ios-gallery.mp4", src: "/apps/ios-gallery-poster.webp", tall: true, title: "iOS", caption: "The same Zig view on an iPhone, pushing its pages from a list. The app played this itself with --nanoui-play." },
  { id: "android", kind: "platforms", src: "/apps/android-gallery.webp", title: "Android", caption: "The gallery on an Android phone: its pages, the task list with the keyboard up, and dark mode." },
  { id: "nanomon", kind: "apps", src: "/apps/nanomon-window.webp", title: "nanomon", caption: "An activity monitor in Codegraff Light, with cell graphs of CPU, memory, GPU, disk and network." },
  { id: "nanoterm", kind: "apps", src: "/apps/nanoterm-light.webp", title: "nanoterm", caption: "A terminal of blocks with a coding agent and native visuals." },
  { id: "nanostudio", kind: "apps", src: "/apps/nanostudio-dark.webp", title: "nanostudio", caption: "A screen recorder and editor; every frame is a nanoui view." },
  { id: "nanofly", kind: "apps", src: "/apps/nanofly.webp", tall: true, title: "nanofly", caption: "Live flights on a map drawn by ui.canvas, under a sheet of Liquid Glass." },
];

export function shotSrc(s: Shot, mode: "light" | "dark", small = false): string {
  if (s.themed) return `/gallery/${s.id}-${mode}${small ? "-sm" : ""}.webp`;
  return s.src ?? "";
}
