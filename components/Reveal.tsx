"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealTag = "div" | "li" | "article";
type RevealDirection = "up" | "left" | "right";

export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      data-direction={direction !== "up" ? direction : undefined}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
