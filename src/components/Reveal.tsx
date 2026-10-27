"use client";

import { type ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
  stagger?: boolean;
  replayKey?: string;
};

/** Progressive enhancement: content is visible without JS, and never waits on an observer. */
export function Reveal({ children, className, as: Tag = "div", stagger = false, replayKey }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window) || !("animate" in el)) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = stagger ? Array.from(el.children) : [el];
    const seen = new Set<Element>();
    const animations = new Map<Element, Animation>();
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const watch = () => {
      stop();
      if (motion.matches) return;
      observer = new IntersectionObserver((entries) => {
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          const target = entry.target;
          seen.add(target);
          observer?.unobserve(target);
          // Keyboard navigation must never land on a fading, moving control.
          if (target.contains(document.activeElement)) continue;
          const animation = target.animate(
            [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }],
            { duration: 600, delay: Math.min(order++, 3) * 80, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
          );
          animations.set(target, animation);
          const finished = () => animations.delete(target);
          animation.finished.then(finished, finished);
        }
        if (seen.size === targets.length) observer?.disconnect();
      }, { threshold: 0.08 });
      targets.forEach((target) => {
        if (!seen.has(target)) observer?.observe(target);
      });
    };
    const focus = (event: FocusEvent) => {
      for (const target of targets) {
        if (event.target instanceof Node && target.contains(event.target)) {
          seen.add(target);
          observer?.unobserve(target);
          animations.get(target)?.cancel();
          animations.delete(target);
        }
      }
    };

    watch();
    motion.addEventListener("change", watch);
    el.addEventListener("focusin", focus);
    return () => {
      stop();
      motion.removeEventListener("change", watch);
      el.removeEventListener("focusin", focus);
    };
  }, [stagger, replayKey]);

  return <Tag ref={(node: HTMLElement | null) => { root.current = node; }} className={className}>{children}</Tag>;
}
