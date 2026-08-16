import {
  BrainCircuit,
  Globe,
  Search,
  Smartphone,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const services = [
  {
    icon: Globe,
    title: "High-Performance Web Development",
    description:
      "Next.js, MERN stack, and server-side rendering systems designed to move faster and convert better.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "React Native and Flutter architecture for products that ship across platforms without losing performance.",
  },
  {
    icon: Workflow,
    title: "n8n Automations & Workflows",
    description:
      "Custom flows that sync CRM, operations, and API data into a dependable business engine.",
  },
  {
    icon: BrainCircuit,
    title: "AI Model Training & Integration",
    description:
      "Python-powered AI integrations and model workflows built around Google Gemini, OpenAI, and your real data.",
  },
  {
    icon: Search,
    title: "Technical SEO & Growth",
    description:
      "Core Web Vitals, semantic structure, and technical architecture built to rank and retain users.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24">
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Capabilities</p>
        <h2
          id="services-heading"
          className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
        >
          Systems built for velocity, clarity, and measurable growth.
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 60} className="h-full">
            <Card className="group flex h-full flex-col hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="font-heading text-xl leading-snug text-foreground">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between pt-0">
                <p className="text-sm leading-7 text-muted">{description}</p>
                <a
                  href="#contact"
                  className="-mb-2 mt-4 inline-flex w-fit items-center gap-2 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                >
                  Discuss this
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
