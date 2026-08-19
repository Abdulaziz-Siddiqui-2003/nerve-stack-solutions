import { ArrowRight, Cpu, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { buttonVariants } from "@/components/ui/button";
import { createMetadata, siteConfig } from "@/lib/meta";

export const metadata = createMetadata({
  title: "About",
  description:
    "NerveStack Solutions is an engineering-led software house, with direct access to the people building your product, not an account-management layer.",
  keywords: ["about NerveStack", "software house", "engineering team", "product engineering partner"],
  path: "/about",
});

const values = [
  {
    icon: Gauge,
    title: "Ship, then iterate",
    description: "Working software in weeks, not a discovery deck. Every engagement produces something you can click through, early.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership, not lock-in",
    description: "You get documented, maintainable code and full IP ownership. Never a black box you can't hand off.",
  },
  {
    icon: Cpu,
    title: "Systems that run themselves",
    description: "Automation and integration are built in from day one, not bolted on after launch as an afterthought.",
  },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About NerveStack Solutions",
  url: `${siteConfig.url}/about`,
  about: { "@id": `${siteConfig.url}#organization` },
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <StructuredData data={aboutPageSchema} />

      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">About</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
          Engineering-led, not sales-led.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          NerveStack Solutions exists because most software engagements add layers: account managers, project coordinators, a rotating cast of junior developers, between you and the person actually writing the code. We cut that out.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="max-w-2xl space-y-5 text-base leading-7 text-muted">
          <p>
            Every build that ships under the NerveStack name is architected and delivered by the same engineers who scope it with you at kickoff: full-stack web platforms, cross-platform mobile apps, AI integrations, IoT pipelines that pull sensor data out of physical hardware, n8n automation that connects the systems a business already runs on, and the technical SEO foundations that let a platform actually get found.
          </p>
          <p>
            That&apos;s deliberate. Role-based access systems, real-time device monitoring, purchase-order workflows with atomic stock updates: the kind of detail that separates a working internal tool from a demo, only comes from a team that has actually built and shipped systems like it before, not from a process template.
          </p>
          <p>
            The projects in our <Link href="/#work" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">selected work</Link> section are real systems built for real operational teams: an inventory platform that replaced spreadsheets for an electronics engineering office, and an IoT pipeline connecting solar-powered field sensors to a live mobile dashboard. Both shipped in three-week engagements, end to end.
          </p>
        </Reveal>

        <Reveal className="rounded-2xl border border-border bg-card/60 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">Direct access</p>
          <p className="mt-3 font-heading text-2xl font-medium text-foreground">One point of contact.</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Every question, update, and decision goes straight to the engineer building your project, not through an account manager or a rotating support queue.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", className: "mt-6 w-full gap-2" })}
          >
            Start a project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-20 border-t border-border pt-16">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">How we operate</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
            Three things that don&apos;t change from project to project.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 80}
              className="rounded-2xl border border-border bg-card/80 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-card-hover"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-accent">
                <value.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand />
    </div>
  );
}
