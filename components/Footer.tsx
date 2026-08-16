"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import { services } from "@/components/Services";
import { siteConfig } from "@/lib/meta";

const exploreLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our stack", href: "/#stack" },
  { label: "Process", href: "/#process" },
  { label: "Why NerveStack", href: "/#approach" },
  { label: "Selected work", href: "/#work" },
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer aria-label="Site footer" className="border-t border-border">
      {!isContactPage && (
        <section id="contact" aria-labelledby="contact-heading" className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Project intake</p>
              <h2
                id="contact-heading"
                className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
              >
                Tell us what you need built.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                Whether you need a high-converting platform, a custom workflow engine, or a productized AI layer, the right next step is a focused technical conversation.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-foreground">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.7)]" aria-hidden="true" />
                Currently accepting new projects.
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {siteConfig.email}
              </a>
            </div>

            <ContactForm className="glass rounded-2xl p-5 sm:p-6" />
          </div>
        </section>
      )}

      <div className={isContactPage ? "py-16" : "border-t border-border py-16"}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-foreground">
              <Logo />
              <span className="font-heading text-sm font-semibold tracking-[0.24em] uppercase">
                NerveStack
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              A software house engineering high-performance web apps, mobile apps, AI integrations, and n8n automation pipelines for growing businesses.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Explore">
            <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-subtle">Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Capabilities">
            <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-subtle">Capabilities</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href="/#services" className="text-sm text-muted transition-colors hover:text-foreground">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.18em] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
