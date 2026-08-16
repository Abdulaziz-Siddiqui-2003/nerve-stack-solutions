import Reveal from "@/components/Reveal";

const stack = [
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Expo"] },
  { group: "Automation", items: ["n8n", "Node.js", "REST & Webhooks"] },
  { group: "AI", items: ["OpenAI", "Google Gemini", "Python"] },
  { group: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Docker", "Vercel"] },
];

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="border-t border-border py-24">
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Our stack</p>
        <h2
          id="stack-heading"
          className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
        >
          Proven, boring-in-a-good-way technology. No science projects.
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {stack.map((column, index) => (
          <Reveal
            key={column.group}
            delay={index * 60}
            className="rounded-2xl border border-border bg-card/60 p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{column.group}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
