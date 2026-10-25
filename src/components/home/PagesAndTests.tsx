import { Code } from "@/components/Code";
import { Section } from "@/components/ui";
import { pageCode, pageJs, testCode } from "@/content/site";

export function WebPages() {
  return (
    <Section
      id="web-pages"
      kicker="02 · Web pages"
      title="Or a page in the system webview, calling Zig with types."
      lead={
        <>
          The frontend calls Zig through a JavaScript client generated from your Zig types, with TypeScript declarations from{" "}
          <code className="font-mono text-base text-ink">zig build gen</code>. Methods may return error unions: an error rejects the page's promise with
          its name. WKWebView, on macOS for now.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <Code code={pageCode} lang="zig" title="main.zig" />
        <div className="space-y-8">
          <Code code={pageJs} lang="js" title="app.js" />
          <Code code={"export declare const Greeter: { greet(name: string): Promise<string> };"} lang="ts" title="nanoui.d.ts · generated" />
        </div>
      </div>
    </Section>
  );
}

export function Testing() {
  return (
    <Section
      id="testing"
      kicker="03 · Testing"
      title="Every view tests without a window."
      lead="ui.Tester clicks, types and takes screenshots offscreen, rendered by the real renderer. The real apps run headless too, so a coding agent can check the look and the behavior without ever showing a window."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <Code code={testCode} lang="zig" title="counter_test.zig" />
        <Code
          code={`zig-out/bin/gallery --nanoui-snapshot=shot.png \\
  --nanoui-script="click:Tasks;type:Hi;key:enter"

zig-out/bin/hello --nanoui-eval='nanoui.call("Greeter.greet","Ada")
  .then(v => { nanoui.log(v); nanoui.window.close() })'`}
          lang="sh"
          title="terminal"
        />
      </div>
    </Section>
  );
}
