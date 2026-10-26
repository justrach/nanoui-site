// Everything the site says about nanoui, taken from its README. Keep it in
// step with https://github.com/justrach/nanoui/blob/main/README.md.

export const repo = "https://github.com/justrach/nanoui";

// Where the site is served, for absolute links in previews (Open Graph).
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanoui.dev";

export const stats = [
  { value: "~0.7 MB", label: "a release app" },
  { value: "1", label: "dependency, our own" },
  { value: "5", label: "platforms from one view" },
  { value: "0%", label: "CPU when idle" },
];

export const counterCode = `const Counter = struct {
    n: i64 = 0,

    fn view(s: *Counter, c: *ui.Context) void {
        const col = ui.div(c).column().sizeFull().center().gap(16);
        defer col.end();
        ui.textf(c, .{ .size = 56, .weight = .bold }, "{d}", .{s.n});
        if (ui.button(c, "Increment", .{ .variant = .primary }).clicked) s.n += 1;
    }
};

pub fn main(init: std.process.Init) !void {
    const app = try nanoui.App.create(init, .{ .name = "Counter" });
    defer app.destroy();
    var state: Counter = .{};
    _ = try app.newWindow(.{ .title = "Counter", .content = .{ .view = .init(&state, Counter.view) } });
    try app.run();
}`;

export const getStarted = `git clone --recursive https://github.com/justrach/nanoui
cd nanoui
zig build run-gallery    # the native UI tour
zig build run-hello      # the webview example
zig build test           # unit and widget tests`;

export const nuiCode = `nui start my-app    # an app, its test and an AGENTS.md
cd my-app
nui test            # its tests, rendered offscreen
nui snapshot --out shot.png --script "click:Increment"
nui run             # its window`;

export const testCode = `var t: ui.Tester = undefined;
try t.init(gpa, .init(&state, Counter.view), .{});
defer t.deinit();
try t.clickText("Increment");
try std.testing.expect(t.hasText("1"));
try t.screenshot("/tmp/counter.png"); // rendered offscreen`;

export const pageCode = `const Greeter = struct {
    pub const nanoui_params = .{ .greet = .{"name"} };

    pub fn greet(_: *Greeter, call: *nanoui.Call, name: []const u8) ![]const u8 {
        return std.fmt.allocPrint(call.arena, "Hello, {s}!", .{name});
    }
};`;

export const pageJs = `import { Greeter, onTick } from "/nanoui.js"; // generated from your Zig types

document.body.textContent = await Greeter.greet("Ada");
onTick(({ uptime }) => console.log(uptime));`;

export type Feature = { title: string; body: string; tag: string };

export const features: Feature[] = [
  { tag: "layout", title: "Flexbox, in Zig", body: "Rows, columns, cards and scroll views with grow, shrink, absolute placement and maximum sizes, styled by GPUI-style chains: ui.div(c).row().gap(8)." },
  { tag: "text", title: "Text in a glyph atlas", body: "Wrapping, monospace, weights and rich spans, selectable and copyable like a terminal's. Glyphs are rasterized once; layouts are cached across frames." },
  { tag: "glass", title: "Liquid Glass", body: "The material of macOS 26, drawn by nanoui itself: frosted, bent at its edges like the rim of a lens. The CPU renderer computes the same pixels on Linux and Windows." },
  { tag: "motion", title: "Motion", body: "Springs and tweens that can be interrupted, presence, gestures, staggered lists, layout animation and keyframes, after gpui-motion. Frames are drawn only while something moves." },
  { tag: "kit", title: "Kit", body: "Buttons, tags, avatars, alerts, tooltips, popovers, menus, dialogs, sheets, toasts, tabs and forms, after GPUI Kit, moved by ui.motion." },
  { tag: "test", title: "Tested without a window", body: "ui.Tester clicks, types and takes screenshots offscreen. Real apps run headless too, with --nanoui-snapshot and --nanoui-script." },
];

export const platforms = [
  { name: "macOS", ui: "AppKit", text: "CoreText", render: "Metal" },
  { name: "iOS", ui: "UIKit", text: "CoreText", render: "Metal" },
  { name: "Android", ui: "NativeActivity", text: "nanoui's TrueType", render: "OpenGL ES 3 · CPU" },
  { name: "Linux", ui: "GTK 4 · GTK 3", text: "nanoui's TrueType", render: "OpenGL 3.3 · CPU" },
  { name: "Windows", ui: "Win32", text: "nanoui's TrueType", render: "CPU via Direct3D 11" },
];

// Medians per frame in milliseconds on an Apple M3 Ultra; lower is better.
export const perf = [
  { scene: "boxes", detail: "600 shadowed boxes", nanoui: 0.061, mygo: 0.301 },
  { scene: "text", detail: "300 changing labels", nanoui: 0.108, mygo: 0.418 },
  { scene: "scroll", detail: "1000-row column", nanoui: 0.315, mygo: 2.076 },
  { scene: "list", detail: "100 000-row virtual list", nanoui: 0.06, mygo: 0.367 },
  { scene: "dashboard", detail: "12 cards", nanoui: 0.015, mygo: 0.087 },
];

export type App = { name: string; href: string; image: string; alt: string; body: string };

export const apps: App[] = [
  { name: "nanomon", href: "https://github.com/justrach/nanomon", image: "/apps/nanomon-dark.webp", alt: "nanomon: the overview with cell graphs", body: "An activity monitor with cell graphs of CPU, memory, GPU, disk and network, and a graff bubble that suggests what to quit." },
  { name: "nanoterm", href: "https://github.com/justrach/nanoterm", image: "/apps/nanoterm-light.webp", alt: "nanoterm: an agent's answer with a native visual", body: "A terminal of blocks, in the manner of Warp, with a coding agent over ACP, native visuals, a ⌘P launcher and SSH sessions." },
  { name: "nanostudio", href: "https://github.com/justrach/nanostudio", image: "/apps/nanostudio-dark.webp", alt: "nanostudio: the editor with a zoom on the timeline", body: "A screen recorder and editor that zooms where you clicked. Every frame, preview and export alike, is a nanoui view." },
  { name: "nanofly", href: "https://github.com/justrach/nanofly", image: "/apps/nanofly.webp", alt: "nanofly: a flight over the Pacific in a sheet of glass", body: "Flights, live, on a map, for iPhone and the Mac. Its map is drawn by ui.canvas; its card is a sheet of Liquid Glass." },
];

export const credits = [
  { name: "mygo", by: "egoist", href: "https://github.com/egoist/mygo", what: "nanoui began as a port of its core to Zig" },
  { name: "GPUI", by: "Zed Industries", href: "https://github.com/zed-industries/zed/tree/main/crates/gpui", what: "elements by method chains, uniform_list, shadows" },
  { name: "gpui-motion", by: "1keep", href: "https://github.com/1bye/gpui-motion", what: "ui.motion's model and API" },
  { name: "GPUI Kit", by: "Longbridge", href: "https://github.com/longbridge/gpui-component", what: "nanoui.kit's components and names" },
];
