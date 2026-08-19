import { AlertTriangle, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { buttonVariants } from "@/components/ui/button";
import { getIndustry, industries } from "@/lib/industries-data";
import { createMetadata, siteConfig } from "@/lib/meta";
import { caseStudies } from "@/lib/projects-data";
import { getService } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return createMetadata({ title: "Industry not found", path: `/industries/${slug}` });
  }

  return createMetadata({
    title: `${industry.title} Software Development`,
    description: industry.summary,
    keywords: [industry.title, "software development", "NerveStack Solutions"],
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((project) => industry.relatedCaseStudySlugs?.includes(project.slug));
  const relatedServices = industry.relevantServices.map((serviceSlug) => getService(serviceSlug)).filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteConfig.url}/industries/${industry.slug}` },
      { "@type": "ListItem", position: 3, name: industry.title, item: `${siteConfig.url}/industries/${industry.slug}` },
    ],
  };

  return (
    <article className="py-16">
      <StructuredData data={breadcrumbSchema} />

      <Link
        href="/"
        className="-ml-2 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back home
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Industries</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
          {industry.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{industry.tagline}</p>
      </header>

      <Reveal className="mt-12 max-w-3xl">
        <p className="text-base leading-7 text-muted">{industry.summary}</p>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <h2 className="font-heading text-2xl font-medium text-foreground">What we hear from {industry.title.toLowerCase()} teams</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {industry.challenges.map((challenge, index) => (
            <Reveal
              key={challenge}
              delay={index * 60}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <AlertTriangle className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-muted">{challenge}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <h2 className="font-heading text-2xl font-medium text-foreground">How we help</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {industry.howWeHelp.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 60}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
            >
              <h3 className="font-heading text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {relatedServices.length > 0 && (
        <Reveal className="mt-16">
          <h2 className="font-heading text-2xl font-medium text-foreground">Relevant services</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service!.slug}
                href={`/services/${service!.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {service!.title}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      {relatedCaseStudies.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <h2 className="font-heading text-2xl font-medium text-foreground">Related work</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedCaseStudies.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
                >
                  <h3 className="font-heading text-xl font-medium text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted">{project.summary}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card/60 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-xl font-medium text-foreground">Building for {industry.title.toLowerCase()}?</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Tell us what you&apos;re working on. We&apos;ll tell you if we&apos;re the right fit.</p>
        </div>
        <Link href="/contact" className={buttonVariants({ size: "lg", className: "shrink-0 gap-2 rounded-full" })}>
          Start a conversation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>

      <CtaBand />
    </article>
  );
}
