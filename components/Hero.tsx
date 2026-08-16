import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import NodeTerminal from "@/components/NodeTerminal";

const stats = [
  { value: "2wk", label: "Avg. discovery-to-build" },
  { value: "<150ms", label: "Target response latency" },
  { value: "24/7", label: "Automation uptime target" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pb-20 pt-12 sm:pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[42rem] overflow-hidden"
        style={{
          background:
            "radial-gradient(50% 50% at 22% 20%, rgba(245,158,11,0.45), transparent 70%), radial-gradient(42% 42% at 88% 10%, rgba(129,140,248,0.32), transparent 72%), radial-gradient(48% 45% at 45% 95%, rgba(234,88,12,0.22), transparent 72%)",
          maskImage: "radial-gradient(120% 100% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Product engineering partner
          </div>

          <h1 className="max-w-xl text-balance font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            We engineer <span className="text-gradient">high-performance software</span> and autonomous business systems.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            NerveStack Solutions is a software house building full-stack web platforms, cross-platform mobile apps, AI integrations, and custom n8n automation pipelines for growing businesses.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "gap-2" })}>
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-card"
            >
              Explore capabilities
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-mono text-2xl font-semibold text-foreground">{stat.value}</dd>
                <dt className="mt-1 text-xs leading-4 text-subtle">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <NodeTerminal />
      </div>
    </section>
  );
}
