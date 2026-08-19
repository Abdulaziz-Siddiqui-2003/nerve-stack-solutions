"use client";

import { ChevronDown, Menu, Plus, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    closeTimer.current = setTimeout(() => setIndustriesOpen(false), 220);
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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <Logo />
          <span className="font-heading text-sm font-semibold tracking-[0.24em] uppercase">
            NerveStack
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-muted md:flex">
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
              className="flex cursor-pointer items-center gap-1.5 py-3 transition-colors hover:text-foreground"
            >
              Industries
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", industriesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            <div
              className={cn(
                "glass absolute left-0 top-full w-56 rounded-2xl p-2 transition-[opacity,transform] duration-200 ease-out",
                industriesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0",
              )}
            >
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  onClick={() => setIndustriesOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                  tabIndex={industriesOpen ? 0 : -1}
                >
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={buttonVariants({ className: "hidden gap-2 rounded-full pl-3 md:inline-flex" })}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-foreground/15">
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-border-strong hover:bg-card md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-6 pt-2 md:hidden"
        >
          <p className="pt-4 text-xs font-medium uppercase tracking-[0.2em] text-subtle">Industries</p>
          <ul className="mt-1 flex flex-col divide-y divide-border">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center text-base text-foreground"
                >
                  {industry.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-col divide-y divide-border border-t border-border">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center text-base text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={buttonVariants({ className: "mt-4 w-full gap-2 rounded-full" })}
          >
            Let&apos;s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}
