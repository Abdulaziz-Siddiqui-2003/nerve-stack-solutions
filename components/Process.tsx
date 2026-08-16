import Reveal from "@/components/Reveal";

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
      "Architecture, data flow, and interface decisions locked down with you — no surprises mid-build.",
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
    <section id="process" aria-labelledby="process-heading" className="border-t border-border py-24">
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">How we work</p>
        <h2
          id="process-heading"
          className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
        >
          A straight line from kickoff to a system that runs itself.
        </h2>
      </Reveal>

      <ol className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 80}
            className="relative rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-accent">
                0{index + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                {step.duration}
              </span>
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
