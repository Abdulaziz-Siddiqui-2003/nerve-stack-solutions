"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

import Reveal from "@/components/Reveal";
import { faqItems } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-border py-24">
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">FAQ</p>
        <h2
          id="faq-heading"
          className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
        >
          Questions we hear before kickoff.
        </h2>
      </Reveal>

      <Reveal className="glass mx-auto max-w-3xl divide-y divide-border rounded-2xl">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${baseId}-trigger-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <div key={item.question} className="px-5 sm:px-6">
              <h3>
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground"
                >
                  {item.question}
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-7 text-muted">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
