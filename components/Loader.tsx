"use client";

import { useEffect, useState } from "react";

import Logo from "@/components/Logo";

export default function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("out"), 1450);
    const doneTimer = setTimeout(() => setPhase("done"), 2050);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`loader-overlay ${phase === "out" ? "loader-overlay--out" : ""}`}
    >
      <div className="loader-brand">
        <Logo className="loader-mark" />
        <span className="loader-wordmark">NerveStack</span>
      </div>
      <div className="loader-bar">
        <span className="loader-bar-fill" />
      </div>
    </div>
  );
}
