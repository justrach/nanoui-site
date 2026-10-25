// A small highlighter for the site's snippets (Zig, shell, JavaScript): good
// enough for short, known code, and nothing to ship or load.

export type Lang = "zig" | "sh" | "js" | "ts";
export type Token = { text: string; cls?: string };

const keywords: Record<Lang, string[]> = {
  zig: ["const", "var", "fn", "pub", "return", "if", "else", "try", "defer", "struct", "void", "while", "for", "switch", "orelse", "catch", "error", "true", "false", "null", "undefined"],
  sh: ["cd", "git", "zig", "nui", "bun"],
  js: ["import", "from", "export", "const", "let", "await", "async", "function", "return", "new", "declare"],
  ts: ["import", "from", "export", "const", "let", "await", "async", "function", "return", "declare", "type", "interface"],
};

const rules: { re: RegExp; cls: string | ((m: string, lang: Lang) => string | undefined) }[] = [
  { re: /^(\/\/[^\n]*|#[^\n]*)/, cls: "tok-com" },
  { re: /^("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`[^`]*`)/, cls: "tok-str" },
  { re: /^@[A-Za-z_]\w*/, cls: "tok-builtin" },
  { re: /^\.[a-z_]\w*/, cls: "tok-field" },
  { re: /^\d[\d_.]*/, cls: "tok-num" },
  { re: /^[A-Za-z_]\w*(?=\()/, cls: (m, lang) => (keywords[lang].includes(m) ? "tok-kw" : "tok-fn") },
  { re: /^[A-Za-z_][\w-]*/, cls: (m, lang) => (keywords[lang].includes(m) ? "tok-kw" : /^[A-Z]/.test(m) || /^(i64|u8|u16|u32|usize|f32|bool)$/.test(m) ? "tok-type" : undefined) },
];

export function highlight(code: string, lang: Lang): Token[] {
  const out: Token[] = [];
  let i = 0;
  let plain = "";
  const flush = () => {
    if (plain) out.push({ text: plain });
    plain = "";
  };
  while (i < code.length) {
    const rest = code.slice(i);
    const atWordStart = i === 0 || /\s/.test(code[i - 1]);
    let matched = false;
    for (const r of rules) {
      // A comment starts a word: "//" inside a URL, or "#" mid-word, is not one.
      if (r.cls === "tok-com" && (!atWordStart || (rest[0] === "#" && lang !== "sh"))) continue;
      const m = r.re.exec(rest);
      if (!m) continue;
      const cls = typeof r.cls === "string" ? r.cls : r.cls(m[0], lang);
      flush();
      out.push({ text: m[0], cls });
      i += m[0].length;
      matched = true;
      break;
    }
    if (!matched) {
      plain += code[i];
      i += 1;
    }
  }
  flush();
  return out;
}
