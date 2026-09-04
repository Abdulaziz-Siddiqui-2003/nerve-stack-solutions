"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
        <Image src="/logo.jpeg" alt="" width={40} height={40} priority className="loader-mark" />
        <span className="loader-wordmark">NerveStack</span>
      </div>
      <div className="loader-bar">
        <span className="loader-bar-fill" />
      </div>
    </div>
  );
}
