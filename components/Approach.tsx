import Reveal from "@/components/Reveal";

const principles = [
  {
    title: "Developer-First",
    description:
      "Direct access to the engineers shipping the product. No inflated retainers, no process theater, no stacked agency layers.",
  },
  {
    title: "Systems, Not Just Sites",
    description:
      "Every build includes automation hooks, workflow logic, and data integrations that can scale beyond the landing page.",
  },
  {
    title: "Rapid Deployment",
    description:
      "Component-driven architecture and disciplined execution reduce time-to-market without sacrificing maintainability.",
  },
];

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="border-t border-border py-24">
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Why NerveStack</p>
        <h2
          id="approach-heading"
          className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
        >
          Execution that feels like a senior product team, not a bloated vendor stack.
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {principles.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 80}
            className="rounded-2xl border border-border bg-card/80 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
          >
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-accent">
              0{index + 1}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
