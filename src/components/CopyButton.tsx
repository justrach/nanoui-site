"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className="ml-auto rounded px-2 py-0.5 text-code-fg/60 transition hover:bg-white/10 hover:text-code-fg"
      aria-label="Copy code"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}
