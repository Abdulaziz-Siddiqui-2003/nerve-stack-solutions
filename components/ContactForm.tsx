"use client";

import { useId, useState } from "react";
import { ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState = {
  name: "",
  email: "",
  projectType: "",
  budgetScope: "",
  message: "",
};

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
          <label htmlFor="projectType" className="text-xs uppercase tracking-[0.18em] text-muted">
            Project Type
          </label>
          <Input
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            placeholder="Web app, app, automation..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="budgetScope" className="text-xs uppercase tracking-[0.18em] text-muted">
            Budget / Scope
          </label>
          <Input
            id="budgetScope"
            name="budgetScope"
            value={form.budgetScope}
            onChange={(event) => updateField("budgetScope", event.target.value)}
            placeholder="Discovery, MVP, scale-up"
          />
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
              Received — we&apos;ll reply shortly.
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
