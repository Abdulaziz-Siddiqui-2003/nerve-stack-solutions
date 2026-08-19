import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col items-center justify-center pb-16 pt-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[38rem] overflow-hidden"
        style={{
          background:
            "radial-gradient(circle 320px at 38% 0%, rgba(220,38,38,0.32), transparent 62%), radial-gradient(circle 260px at 76% 0%, rgba(127,29,29,0.22), transparent 65%)",
        }}
      />

      <div className="text-center">
        <h1 className="mx-auto max-w-5xl text-balance font-heading text-5xl font-medium tracking-[-0.02em] sm:text-6xl lg:text-7xl">
          We build what <span className="text-gradient italic">others imagine.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Strategy, design, and engineering for businesses that refuse to be ordinary. Web platforms, mobile apps, AI automation, and technical SEO, we make it real.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "gap-2 rounded-full px-7" })}>
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center px-4 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-subtle transition-colors hover:text-accent sm:flex"
      >
        Scroll
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
