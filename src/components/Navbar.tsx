"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/coaching", label: "Coaching" },
  { href: "/courses", label: "Courses" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ color: "#ffffff" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/30"
          : "bg-[var(--navy)]/95 md:bg-transparent py-4 md:py-5 border-b border-white/10 md:border-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center border border-[var(--gold)] text-[var(--gold)] text-base sm:text-lg font-serif rounded-lg group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors">
            ✦
          </span>
          <span className="leading-tight min-w-0">
            <span className="block font-serif text-lg sm:text-xl tracking-[0.1em] text-white">
              RESTORE
            </span>
            <span className="hidden sm:block text-[0.58rem] tracking-[0.32em] uppercase text-[var(--gold)]">
              Performance Coaching
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-[0.7rem] font-medium tracking-[0.18em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="outline-gold" className="!py-2.5 !px-5 !text-[0.65rem]">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 border-t border-white/10 bg-[var(--navy-deep)] px-6 py-6">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="nav-link text-sm tracking-[0.14em] uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="outline-gold" className="mt-2 w-full">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
