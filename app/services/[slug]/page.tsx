import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { buttonVariants } from "@/components/ui/button";
import { createMetadata, siteConfig } from "@/lib/meta";
import { getService, services } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({ title: "Service not found", path: `/services/${slug}` });
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    keywords: [service.title, service.category, ...service.techStack, "NerveStack Solutions"],
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: { "@id": `${siteConfig.url}#organization` },
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  return (
    <article className="py-16">
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Link
        href="/#services"
        className="-ml-2 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to services
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">{service.category}</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">{service.tagline}</p>
      </header>

      <Reveal className="mt-12 max-w-3xl">
        <p className="text-base leading-7 text-muted">{service.overview}</p>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <h2 className="font-heading text-2xl font-medium text-foreground">What&apos;s included</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {service.capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 60}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                <Check className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-foreground">{capability.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{capability.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16">
        <h2 className="font-heading text-2xl font-medium text-foreground">Tech stack</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <h2 className="font-heading text-2xl font-medium text-foreground">Frequently asked questions</h2>
        </Reveal>
        <div className="mt-6 grid gap-5">
          {service.faq.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 60}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <h3 className="font-heading text-lg font-medium text-foreground">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card/60 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-xl font-medium text-foreground">Ready to scope your {service.title.toLowerCase()} project?</h2>
          <p className="mt-2 text-sm leading-6 text-muted">One focused call is usually enough to tell whether we&apos;re the right fit.</p>
        </div>
        <Link href="/contact" className={buttonVariants({ size: "lg", className: "shrink-0 gap-2 rounded-full" })}>
          Get a quote
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="mt-16 border-t border-border pt-10">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Explore all services
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <CtaBand />
    </article>
  );
}
