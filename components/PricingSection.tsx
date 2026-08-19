"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const seoPlans = [
  {
    name: "Foundation",
    scope: "Sites establishing their technical SEO baseline",
    monthly: 450,
    yearly: 4320,
    features: ["Technical SEO audit & fixes", "Core Web Vitals monitoring", "Structured data & schema", "Monthly reporting"],
    highlight: false,
  },
  {
    name: "Growth",
    scope: "Ongoing content and ranking work for active growth",
    monthly: 950,
    yearly: 9120,
    features: [
      "Everything in Foundation",
      "Ongoing content strategy",
      "Keyword & competitor tracking",
      "Quarterly strategy review",
      "Priority turnaround",
    ],
    highlight: true,
  },
  {
    name: "Authority",
    scope: "Multi-site or high-competition verticals",
    monthly: null,
    yearly: null,
    features: [
      "Everything in Growth",
      "Multi-site / multi-market SEO",
      "Dedicated technical SEO engineer",
      "Custom reporting & integrations",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative">
      <SectionDivider />
      <div className="py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Pricing</p>
          <h2
            id="pricing-heading"
            className="mt-3 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            Engagement &amp; pricing.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Web, mobile, and automation work is scoped and quoted per project. SEO runs as an ongoing monthly or yearly retainer.
          </p>
        </Reveal>

        <Reveal className="glass mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-heading text-lg font-medium text-foreground">Project-based work</h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              Web platforms, mobile apps, and n8n automation are quoted after a short scoping conversation. Every project is different.
            </p>
          </div>
          <Link href="/contact" className={buttonVariants({ className: "shrink-0 gap-2 rounded-full" })}>
            Get a quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-20">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">SEO retainers</p>
            <h3 className="mt-3 font-heading text-2xl font-medium text-foreground sm:text-3xl">
              Flexible plans, built around your growth pace.
            </h3>
          </Reveal>

          <Reveal className="mt-8 flex justify-center">
            <div className="glass inline-flex items-center gap-1 rounded-full p-1">
              <button
                type="button"
                onClick={() => setCycle("monthly")}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  cycle === "monthly" ? "bg-accent text-accent-foreground" : "text-muted hover:text-foreground",
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setCycle("yearly")}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  cycle === "yearly" ? "bg-accent text-accent-foreground" : "text-muted hover:text-foreground",
                )}
              >
                Yearly
                <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-success">
                  Save 20%
                </span>
              </button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {seoPlans.map((plan, index) => (
              <Reveal
                key={plan.name}
                delay={index * 80}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7",
                  plan.highlight ? "border-accent bg-card" : "border-border bg-card/60",
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                    Most popular
                  </span>
                )}
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">{plan.scope}</p>
                <h4 className="mt-2 font-heading text-xl font-medium text-foreground">{plan.name}</h4>

                <div className="mt-5">
                  {plan.monthly ? (
                    <p className="flex items-baseline gap-1">
                      <span className="font-heading text-4xl font-medium text-foreground">
                        ${cycle === "monthly" ? plan.monthly.toLocaleString() : Math.round(plan.yearly! / 12).toLocaleString()}
                      </span>
                      <span className="text-sm text-muted">/mo</span>
                    </p>
                  ) : (
                    <p className="font-heading text-4xl font-medium text-foreground">Custom</p>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={buttonVariants({
                    variant: plan.highlight ? "default" : "outline",
                    className: "mt-7 w-full rounded-full",
                  })}
                >
                  {plan.monthly ? "Start this plan" : "Let's talk"}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
