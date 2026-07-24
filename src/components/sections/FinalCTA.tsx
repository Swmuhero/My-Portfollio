"use client";

import { ArrowRight } from "@phosphor-icons/react";

export function FinalCTA() {
  return (
    <section className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="hud-tick pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-8 text-center">
        <h2 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tighter text-foreground md:text-6xl">
          Let's build the incredible
          <span className="text-accent"> next-gen website!</span>
        </h2>

        <p className="max-w-[56ch] font-sans text-sm leading-relaxed text-zinc-400 md:text-base">
          Available anytime to catch up with you. We're just one click away.
        </p>

        <a
          href="mailto:swapneel793@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.08] active:translate-y-[1px]"
        >
          Start a conversation
          <ArrowRight
            size={16}
            weight="bold"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
