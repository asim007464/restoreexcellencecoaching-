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

const authLinks = [
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
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
      <div className="container-nav flex items-center justify-between gap-3 lg:gap-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink-0">
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

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 justify-center min-w-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-[0.62rem] xl:text-[0.68rem] font-medium tracking-[0.14em] xl:tracking-[0.16em] uppercase whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-[0.62rem] xl:text-[0.65rem] font-medium tracking-[0.12em] uppercase whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="outline-gold" className="!py-2 !px-3.5 xl:!px-4 !text-[0.6rem] xl:!text-[0.62rem]">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-white text-2xl shrink-0 ml-auto"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 border-t border-white/10 bg-[var(--navy-deep)] px-4 py-5">
          <nav className="flex flex-col gap-3.5">
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
            <div className="border-t border-white/10 pt-3 mt-1 flex flex-col gap-3">
              {authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-sm tracking-[0.14em] uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button href="/contact" variant="outline-gold" className="mt-2 w-full">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
