"use client";

import { useId, useState } from "react";
import { ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  budgetRange: "",
  timeline: "",
  message: "",
};

const serviceOptions = [
  "Web Development",
  "App Development",
  "n8n Automation",
  "SEO",
  "Not sure yet",
];

const budgetOptions = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
  "Not sure yet",
];

const timelineOptions = ["ASAP", "Within 1-3 months", "3-6 months", "Flexible / just exploring"];

const selectClassName =
  "flex h-11 w-full appearance-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function ContactForm({ className }: { className?: string }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const statusId = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof typeof initialState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs uppercase tracking-[0.18em] text-muted">
            Phone (optional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+1 555 000 0000"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs uppercase tracking-[0.18em] text-muted">
            Company (optional)
          </label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Your company"
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="serviceInterest" className="text-xs uppercase tracking-[0.18em] text-muted">
            Service needed
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={form.serviceInterest}
            onChange={(event) => updateField("serviceInterest", event.target.value)}
            className={cn(selectClassName, !form.serviceInterest && "text-subtle")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budgetRange" className="text-xs uppercase tracking-[0.18em] text-muted">
            Budget range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={(event) => updateField("budgetRange", event.target.value)}
            className={cn(selectClassName, !form.budgetRange && "text-subtle")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option} className="text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="timeline" className="text-xs uppercase tracking-[0.18em] text-muted">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className={cn(selectClassName, !form.timeline && "text-subtle")}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option} className="text-foreground">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          placeholder="Share the business problem, current blockers, and desired outcomes."
          required
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="gap-2">
          {status === "submitting" ? "Sending..." : "Initialize Project"}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>

        <div aria-live="polite" id={statusId}>
          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
              Received. We&apos;ll reply shortly.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-danger">
              <CircleAlert className="h-4 w-4" aria-hidden="true" />
              Submission failed. Please try again.
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
