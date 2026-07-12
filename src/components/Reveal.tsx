"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** How far the block rises from (px) */
  distance?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 48,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      requestAnimationFrame(() => el.classList.add("is-visible"));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--reveal-y": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
