"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const minDelay = new Promise<void>((r) => setTimeout(r, 900));
    const loaded = new Promise<void>((r) => {
      if (document.readyState === "complete") r();
      else window.addEventListener("load", () => r(), { once: true });
    });

    Promise.all([minDelay, loaded]).then(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 550);
    });
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-navy transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="container-site h-full flex flex-col justify-center py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="skeleton-block h-10 w-10 rounded-none" />
          <div className="space-y-2">
            <div className="skeleton-block h-4 w-28" />
            <div className="skeleton-block h-2.5 w-36" />
          </div>
        </div>

        <div className="skeleton-block h-3 w-40 mb-6" />
        <div className="skeleton-block h-14 w-full max-w-xl mb-4" />
        <div className="skeleton-block h-14 w-full max-w-lg mb-8" />
        <div className="skeleton-block h-4 w-full max-w-md mb-10" />

        <div className="flex gap-4 mb-14">
          <div className="skeleton-block h-12 w-44" />
          <div className="skeleton-block h-12 w-44" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-block h-24" />
          ))}
        </div>

        <p className="mt-10 text-center text-[0.65rem] tracking-[0.28em] uppercase text-gold/70 animate-pulse-soft">
          Restore Physio
        </p>
      </div>
    </div>
  );
}
