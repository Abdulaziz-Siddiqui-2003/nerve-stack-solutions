import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CaseStudyThumbnail from "@/components/CaseStudyThumbnail";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { caseStudies } from "@/lib/projects-data";

export default function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24">
      <SectionDivider />
      <Reveal className="mb-14 mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Work</p>
          <h2
            id="work-heading"
            className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            Selected case studies.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted">
          Digital products engineered for measurable operational impact.
        </p>
      </Reveal>

      <div className="grid gap-6">
        {caseStudies.map((project, index) => (
          <Reveal key={project.slug} delay={index * 60}>
            <Link
              href={`/work/${project.slug}`}
              className={`group grid gap-0 overflow-hidden rounded-3xl border border-border bg-card/50 transition-colors duration-300 hover:border-accent/50 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {project.images?.[0] ? (
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <CaseStudyThumbnail slug={project.slug} accent={project.accent} className="h-64 lg:h-full" />
              )}

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  Case study {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-medium text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex w-fit items-center gap-2 border-t border-border pt-5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
                  View case study
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
