"use client";

import { useEffect, useRef, useState } from "react";

const STICKY_TOP = 176; // px below the fixed header where the block pins

const STATEMENT =
  "The places that bring people together should feel open and be safe. We help the people who run them prepare for a hard day, with a clear plan, trained staff, and steps that fit the budget they have.";

/**
 * Statement whose words change from muted to full color as the reader scrolls.
 * The section is taller than the viewport; the text is sticky, and scroll
 * progress through the section drives how many words are lit.
 */
export function ScrollStatement() {
  const ref = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const words = STATEMENT.split(" ");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const innerH = inner.current?.offsetHeight ?? 0;
      const start = vh * 0.6;                 // begin lighting when the section top is 60% down the screen
      const pinned = rect.height - innerH;    // how far the block stays stuck while the section scrolls past
      const total = pinned + (start - STICKY_TOP);
      const passed = start - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / total)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const lit = reduced ? words.length : Math.round(progress * words.length);

  return (
    <section ref={ref} className="relative bg-white" style={{ height: "140vh" }} aria-label="Our perspective">
      <div ref={inner} className="sticky py-16 sm:py-20" style={{ top: STICKY_TOP }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-600 font-serif">Our approach</p>
          <p className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            {words.map((w, i) => (
              <span
                key={i}
                className="transition-colors duration-300"
                style={{ color: i < lit ? "#0b1b33" : "rgba(11, 27, 51, 0.18)" }}
              >
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
