import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden pb-16 pt-20"
    >
      {/* Dynamic Background: Radial Gradients + Modern Grid Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Glow Spheres */}
        <div
          className="absolute inset-x-0 -top-24 h-[42rem] overflow-hidden"
          style={{
            background:
              "radial-gradient(circle 380px at 45% 10%, rgba(220,38,38,0.28), transparent 70%), radial-gradient(circle 300px at 75% 15%, rgba(127,29,29,0.2), transparent 65%)",
          }}
        />

        {/* Subtle Engineering Grid with Radial Fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Modern Live Pill / Status Badge */}
        {/*<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 backdrop-blur-md transition-colors hover:border-accent/40">
          {/* <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            {/* <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /> 
          </span> */}
          {/* <span className="font-mono text-xs font-medium tracking-wide text-foreground/90">
            Available for Q3/Q4 Projects
          </span> */}
          {/* <Sparkles className="h-3.5 w-3.5 text-accent" /> */}
        {/* </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-5xl -mt-24 text-balance font-heading text-5xl font-medium tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          We build what <span className="text-gradient italic">others imagine.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
          Strategy, design, and engineering for businesses that refuse to be ordinary.
          Web platforms, mobile apps, AI automation, and technical SEO—we make it real.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className:
                "group relative gap-2 rounded-full px-8 shadow-lg shadow-accent/10 transition-all hover:shadow-accent/20",
            })}
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href="#work"
            className="group inline-flex h-12 items-center justify-center rounded-full border border-border/60 bg-background/40 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-card/60 hover:text-accent"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-subtle transition-colors hover:text-accent sm:flex"
      >
        <span>Scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border/80 p-1 transition-colors group-hover:border-accent/50">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" aria-hidden="true" />
        </div>
      </a>
    </section>
  );
}