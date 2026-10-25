import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <img src="/brand/nano.webp" alt="Nano, holding a window with nothing in it" width={880} height={880} className="w-48 -rotate-3" />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">404</p>
      <h1 className="misprint mt-2 font-display text-5xl font-extrabold tracking-tight">Nothing drawn here.</h1>
      <p className="mt-4 text-lg text-ink-2">Nano looked everywhere. This page isn&apos;t one of nanoui&apos;s.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to the start</ButtonLink>
      </div>
    </div>
  );
}
