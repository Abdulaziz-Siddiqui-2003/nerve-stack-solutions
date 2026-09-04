"use client";

import { ChevronDown, Menu, Plus, Sparkles, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/industries-data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#work" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimer();
    setIndustriesOpen(true);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!industriesOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndustriesOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [industriesOpen]);

  useEffect(() => clearCloseTimer, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl transition-all"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-90"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card/60 transition-colors group-hover:border-accent/40"
          >
            <Logo />
          </motion.div>
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-colors group-hover:text-accent">
            NerveStack
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-medium text-muted lg:flex">
          {/* Desktop Industries Mega Menu */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              onClick={() => setIndustriesOpen((value) => !value)}
              className={cn(
                "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 transition-all hover:bg-card/60 hover:text-foreground",
                industriesOpen && "bg-card/80 text-foreground"
              )}
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  industriesOpen && "rotate-180 text-accent"
                )}
                aria-hidden="true"
              />
            </button>

            {/* Animated Desktop Dropdown */}
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-[calc(100%+8px)] w-72 rounded-2xl border border-border/80 bg-card/95 p-2.5 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="mb-2 flex items-center justify-between border-b border-border/40 px-3 py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                     
                    </span>
                    
                  </div>
                  <div className="space-y-1">
                    {industries.map((industry, i) => (
                      <motion.div
                        key={industry.slug}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.2 }}
                      >
                        <Link
                          href={`/industries/${industry.slug}`}
                          onClick={() => setIndustriesOpen(false)}
                          className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-muted transition-all hover:bg-accent/10 hover:text-accent"
                        >
                          <span>{industry.title}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 transition-colors hover:bg-card/60 hover:text-foreground"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "sm",
                className: "hidden gap-2 rounded-full px-5 shadow-sm lg:inline-flex",
              })}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-background/20">
                <Plus className="h-3 w-3" aria-hidden="true" />
              </span>
              <span>Let&apos;s Talk</span>
            </Link>
          </motion.div>

          {/* Mobile & Tablet Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border/80 bg-card/50 text-foreground transition-all hover:border-accent/40 hover:bg-card lg:hidden"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-50 flex flex-col justify-between overflow-y-auto border-t border-border/70 bg-background/95 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-subtle">
                  Navigation
                </span>
                <ul className="mt-2 space-y-1">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-foreground transition-colors hover:bg-card/70 hover:text-accent"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Mobile Industries Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
                className="rounded-2xl border border-border/70 bg-card/40 p-3"
              >
                <button
                  type="button"
                  onClick={() => setMobileIndustriesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between px-2 py-1 text-left font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent"
                >
                  <span>Explore Industries</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 text-accent",
                      mobileIndustriesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="mt-3 grid gap-1 border-t border-border/40 pt-2 overflow-hidden sm:grid-cols-2"
                    >
                      {industries.map((industry, i) => (
                        <motion.li
                          key={industry.slug}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <Link
                            href={`/industries/${industry.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                          >
                            <span>{industry.title}</span>
                            <ArrowUpRight className="h-3 w-3 text-muted" />
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Mobile Footer Action */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="pt-6 pb-2"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={buttonVariants({
                  size: "lg",
                  className: "w-full gap-2 rounded-full shadow-lg shadow-accent/10 text-sm font-semibold",
                })}
              >
                <Plus className="h-4 w-4" />
                <span>Let&apos;s Build Together</span>
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}