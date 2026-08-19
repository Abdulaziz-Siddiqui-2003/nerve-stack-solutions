import { ArrowUpRight, Globe, Smartphone, TrendingUp, Workflow, type LucideIcon } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { services } from "@/lib/services-data";

const icons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "app-development": Smartphone,
  "n8n-automation": Workflow,
  seo: TrendingUp,
};

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24">
      <SectionDivider />
      <Reveal className="mb-12 mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Services</p>
          <h2
            id="services-heading"
            className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            What we build.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[service.slug];
          const isLeftColumn = index % 2 === 0;
          return (
            <Reveal
              key={service.slug}
              delay={Math.floor(index / 2) * 120}
              direction={isLeftColumn ? "left" : "right"}
              className="h-full"
            >
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-medium text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="-mb-2 mt-6 inline-flex w-fit items-center gap-2 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent transition-colors group-hover:text-accent-soft"
                >
                  Get started
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
