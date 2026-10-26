// Real desktop apps and mobile apps/examples, grouped by the screen shown.
export type Shot = {
  id: string;
  title: string;
  caption: string;
  kind: "desktop" | "ios" | "android";
  src: string;
  video?: string;
  // Portrait screens are shown whole in their cards, not cropped.
  tall?: boolean;
};

export const shots: Shot[] = [
  { id: "nanomon", kind: "desktop", src: "/apps/nanomon-dark.webp", title: "nanomon", caption: "An activity monitor with live cell graphs of CPU, memory, GPU, disk and network, and a graff assistant that suggests what to quit." },
  { id: "nanoterm", kind: "desktop", src: "/apps/nanoterm-light.webp", title: "nanoterm", caption: "A terminal of blocks with a coding agent and native visuals." },
  { id: "nanofly", kind: "ios", src: "/apps/nanofly.webp", tall: true, title: "nanofly", caption: "An iPhone flight tracker with live flights, weather radar and a map under a sheet of Liquid Glass. Also available on Mac." },
  { id: "ios", kind: "ios", video: "/apps/ios-gallery.mp4", src: "/apps/ios-gallery-poster.webp", tall: true, title: "iOS app tour", caption: "The nanoui demo app on iPhone: touch navigation and the same Zig views on a small screen. Play the video to take a tour." },
  { id: "android", kind: "android", src: "/apps/android-gallery.webp", title: "Android demo", caption: "The nanoui demo app on Android: navigation, a task list with the software keyboard, and a scrolling list in dark mode." },
  { id: "nanostudio", kind: "desktop", src: "/apps/nanostudio-dark.webp", title: "nanostudio", caption: "A screen recorder and editor; every frame is a nanoui view." },
];
