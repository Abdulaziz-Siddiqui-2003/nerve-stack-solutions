import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/projects-data";
import { createMetadata, siteConfig } from "@/lib/meta";

type Props = {
  params: Promise<{ slug: string }>;
};

const accentClasses: Record<CaseStudy["accent"], { text: string; border: string; chip: string; glow: string }> = {
  amber: {
    text: "text-accent",
    border: "border-accent/40",
    chip: "border-accent/30 bg-accent/10 text-accent",
    glow: "rgba(245,158,11,0.4)",
  },
  violet: {
    text: "text-violet",
    border: "border-violet/40",
    chip: "border-violet/30 bg-violet/10 text-violet",
    glow: "rgba(129,140,248,0.4)",
  },
  teal: {
    text: "text-teal-400",
    border: "border-teal-400/40",
    chip: "border-teal-400/30 bg-teal-400/10 text-teal-400",
    glow: "rgba(45,212,191,0.4)",
  },
  green: {
    text: "text-success",
    border: "border-success/40",
    chip: "border-success/30 bg-success/10 text-success",
    glow: "rgba(34,197,94,0.4)",
  },
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return createMetadata({ title: "Case study not found", path: `/work/${slug}` });
  }

  return createMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    keywords: [project.title, ...project.tags, ...project.techStack, "case study", "NerveStack Solutions"],
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const accent = accentClasses[project.accent];

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/work/${project.slug}`,
    creator: { "@id": `${siteConfig.url}#organization` },
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.tags.join(", "),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteConfig.url}/work/${project.slug}` },
    ],
  };

  return (
    <article className="py-16">
      <StructuredData data={creativeWorkSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Link
        href="/#work"
        className="-ml-2 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to work
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className={`text-xs font-medium uppercase tracking-[0.24em] ${accent.text}`}>Case study</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${accent.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 border-y border-border py-6 sm:grid-cols-3">
        <div>
          <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-subtle">Client</dt>
          <dd className="mt-1 text-sm text-foreground">{project.client}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-subtle">Duration</dt>
          <dd className="mt-1 text-sm text-foreground">{project.duration}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-subtle">Role</dt>
          <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
        </div>
      </dl>

      {project.images?.[0] ? (
        <div className={`relative mt-12 h-64 overflow-hidden rounded-3xl border sm:h-[28rem] ${accent.border}`}>
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className={`relative mt-12 h-56 overflow-hidden rounded-3xl border sm:h-72 ${accent.border}`}
          style={{
            background: `radial-gradient(60% 80% at 20% 20%, ${accent.glow}, transparent 70%), radial-gradient(50% 60% at 85% 80%, ${accent.glow}, transparent 70%), var(--card)`,
          }}
        />
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Overview</h2>
          <p className="mt-4 text-base leading-7 text-muted">{project.overview}</p>
        </Reveal>

        <div className="grid gap-8">
          <Reveal>
            <h2 className="font-heading text-xl font-semibold text-foreground">The problem</h2>
            <p className="mt-3 text-base leading-7 text-muted">{project.problem}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-xl font-semibold text-foreground">The solution</h2>
            <p className="mt-3 text-base leading-7 text-muted">{project.solution}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground">What we built</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {project.features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 60}
              className="rounded-2xl border border-border bg-card/60 p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {project.images && project.images.length > 1 && (
        <div className="mt-16">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Screens</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.images.slice(1).map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 60}
                className={`relative h-64 overflow-hidden rounded-2xl border sm:h-80 ${accent.border}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <Reveal className="mt-16">
        <h2 className="font-heading text-2xl font-semibold text-foreground">Tech stack</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="font-heading text-2xl font-semibold text-foreground">Key outcomes</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3 text-sm leading-7 text-muted">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} aria-hidden="true" />
              {outcome}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-16 border-t border-border pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          More case studies
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <CtaBand />
    </article>
  );
}
