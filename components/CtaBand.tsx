import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="py-24">
      <Reveal className="glass relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.2),transparent_60%)]"
        />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Let&apos;s build</p>
        <h2
          id="cta-heading"
          className="mx-auto mt-3 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
        >
          Have a <span className="text-gradient">system worth building right</span>? Let&apos;s scope it this week.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          One focused call is usually enough to tell you whether NerveStack is the right fit for what you&apos;re building.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg", className: "mt-8 gap-2" })}>
          Start a project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
