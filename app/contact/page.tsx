import { Clock, Mail, MessageSquare } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { createMetadata, siteConfig } from "@/lib/meta";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell NerveStack Solutions about your project: web platforms, mobile apps, AI integrations, or n8n automation. We reply within one to two business days.",
  keywords: ["contact NerveStack", "hire software house", "start a project", "get a quote"],
  path: "/contact",
});

const expectations = [
  {
    icon: Clock,
    title: "1–2 business day reply",
    description: "Every project brief gets a direct reply from the engineer who would actually build it, not a sales queue.",
  },
  {
    icon: MessageSquare,
    title: "One focused call",
    description: "If it's a fit, the next step is a short technical conversation to scope the work, not a multi-round sales process.",
  },
  {
    icon: Mail,
    title: "Straight answers",
    description: "If NerveStack isn't the right fit for your project, we'll say so and point you in a useful direction.",
  },
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NerveStack Solutions",
  url: `${siteConfig.url}/contact`,
  about: { "@id": `${siteConfig.url}#organization` },
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <StructuredData data={contactPageSchema} />

      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Contact</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
          Let&apos;s talk about what you&apos;re building.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Share the business problem, the current blockers, and what a good outcome looks like. That&apos;s enough for us to tell you whether we&apos;re the right team for it.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="grid gap-6">
            {expectations.map((item) => (
              <Reveal key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-medium text-foreground">{item.title}</h2>
                  <p className="mt-1 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-2xl border border-border bg-card/60 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">Prefer email?</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block text-lg font-medium text-foreground transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </Reveal>
        </div>

        <Reveal className="glass rounded-2xl p-5 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
