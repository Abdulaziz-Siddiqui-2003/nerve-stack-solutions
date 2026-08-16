import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import { caseStudies, otherProjects } from "@/lib/projects-data";

const accentGlow: Record<string, string> = {
  amber: "rgba(245,158,11,0.28)",
  violet: "rgba(129,140,248,0.26)",
  teal: "rgba(45,212,191,0.26)",
  green: "rgba(34,197,94,0.26)",
};

export default function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-border py-24">
      <Reveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Selected work</p>
          <h2
            id="work-heading"
            className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
          >
            Product and automation systems designed to compound output.
          </h2>
        </div>
        <a
          href="/contact"
          className="-my-2 inline-block py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Start your project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80} className="h-full">
            <Link
              href={`/work/${project.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card/90 p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-card-hover"
            >
              {project.images?.[0] ? (
                <div className="relative mb-5 h-48 overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="mb-5 h-48 rounded-xl border border-border"
                  style={{
                    background: `radial-gradient(circle at top, ${accentGlow[project.accent]}, transparent 60%), linear-gradient(135deg,#111114,#0a0a0b)`,
                  }}
                />
              )}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-muted">{project.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
                View case study
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        ))}

        {otherProjects.map((project, index) => (
          <Reveal key={project.title} delay={(caseStudies.length + index) * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card/90 p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-card-hover">
              <div
                aria-hidden="true"
                className="mb-5 h-48 rounded-xl border border-border bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),transparent_30%),linear-gradient(135deg,#111114,#0a0a0b)]"
              />
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
