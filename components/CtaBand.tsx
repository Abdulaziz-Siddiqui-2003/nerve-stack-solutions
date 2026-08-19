import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="relative py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full overflow-hidden"
        style={{
          background: "radial-gradient(circle 480px at 50% 42%, rgba(220,38,38,0.22), transparent 65%)",
        }}
      />

      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Get started</p>
        <h2
          id="cta-heading"
          className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-medium tracking-[-0.02em] sm:text-5xl"
        >
          Your next big move <span className="text-gradient italic">starts here.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Have an ambitious idea? Let&apos;s turn it into a digital product built to perform.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "gap-2 rounded-full px-7" })}>
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center px-4 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Explore our work
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
