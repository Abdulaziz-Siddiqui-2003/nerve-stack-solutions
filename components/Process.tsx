import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";

const steps = [
  {
    title: "Discover",
    duration: "Week 1",
    description:
      "Scope the problem, map integrations, and define what success looks like before a single line of code ships.",
  },
  {
    title: "Design",
    duration: "Week 1-2",
    description:
      "Architecture, data flow, and interface decisions locked down with you, with no surprises mid-build.",
  },
  {
    title: "Build",
    duration: "Ongoing sprints",
    description:
      "Component-driven development with weekly demos, so you're reviewing working software, not slide decks.",
  },
  {
    title: "Launch & Automate",
    duration: "Continuous",
    description:
      "Ship to production, wire up monitoring, and layer in the automations that keep the system running itself.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-28">
      <SectionDivider />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Sticky Left Header */}
        <aside className="lg:col-span-5">
          <div className="sticky top-28 space-y-4">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
                How we work
              </p>
              <h2
                id="process-heading"
                className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
              >
                A straight line from kickoff to a system that runs itself.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                A focused end-to-end engineering pipeline designed for zero ambiguity, fast iterations, and long-term maintainability.
              </p>
            </Reveal>
          </div>
        </aside>

        {/* Vertical Timeline List */}
        <div className="relative lg:col-span-7">
          {/* Continuous vertical line */}
          <div 
            aria-hidden="true" 
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" 
          />

          <ol className="space-y-8">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 100}
                className="group relative flex items-start gap-6 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/5 sm:p-8"
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background font-mono text-sm font-semibold text-accent shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-accent/50">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-xl font-medium text-foreground transition-colors group-hover:text-accent">
                      {step.title}
                    </h3>
                    <span className="rounded-full border border-border/80 bg-background/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}