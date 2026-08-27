"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import CaseStudyThumbnail from "@/components/CaseStudyThumbnail";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { caseStudies } from "@/lib/projects-data";

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="work" aria-labelledby="work-heading" className="relative py-28">
      <SectionDivider />

      {/* Header */}
      <Reveal className="mb-14 mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-accent backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            <span>Curated Portfolio</span>
          </div>
          <h2
            id="work-heading"
            className="mt-4 font-heading text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Selected case studies.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Digital products and robust architectures engineered for measurable operational impact.
        </p>
      </Reveal>

      {/* Horizontal Expandable Accordion Showcase */}
      <div className="flex flex-col gap-4 lg:h-[580px] lg:flex-row lg:gap-3">
        {caseStudies.map((project, index) => {
          const isExpanded = activeIdx === index;

          return (
            <motion.div
              key={project.slug}
              layout
              onMouseEnter={() => setActiveIdx(index)}
              transition={{
                layout: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{
                flex: isExpanded ? 3.5 : 0.9,
              }}
              className={`group relative overflow-hidden rounded-3xl border transition-colors duration-500 backdrop-blur-md ${
                isExpanded
                  ? "border-accent/40 bg-card/80 shadow-2xl shadow-accent/5"
                  : "border-border/80 bg-card/40 hover:border-border"
              }`}
            >
              <Link href={`/work/${project.slug}`} className="flex h-full w-full flex-col lg:flex-row">
                {/* Visual Thumbnail Area */}
                <motion.div
                  layout
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative min-h-[240px] w-full overflow-hidden bg-background/50 lg:min-h-full ${
                    isExpanded ? "lg:w-3/5" : "lg:w-full"
                  }`}
                >
                  {project.images?.[0] ? (
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <CaseStudyThumbnail
                      slug={project.slug}
                      accent={project.accent}
                      className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/60" />

                  {/* Collapsed State Minimal Overlay Indicator */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-6 left-6 z-10 hidden lg:block"
                      >
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          0{index + 1}
                        </span>
                        <h4 className="mt-1 font-heading text-lg font-medium text-foreground line-clamp-1">
                          {project.title}
                        </h4>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Expanded Detailed Content Panel */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      key={`content-${project.slug}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex flex-col justify-between p-6 sm:p-8 lg:w-2/5"
                    >
                      <div>
                        {/* Header Details */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            0{index + 1} / Case Study
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-background"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.div>
                        </div>

                        <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      {/* Tags and CTA */}
                      <div className="mt-6 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag, tagIdx) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.25 + tagIdx * 0.05,
                                duration: 0.3,
                              }}
                              className="rounded-md border border-border/70 bg-background/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-200 group-hover:text-accent">
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}