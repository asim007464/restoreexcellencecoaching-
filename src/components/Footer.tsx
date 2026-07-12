import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/programs", label: "Programs" },
      { href: "/coaching", label: "Live Mentorship" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/courses", label: "Online Courses" },
      { href: "/books", label: "Premium Books" },
      { href: "/contact", label: "Book a Consultation" },
    ],
  },
  {
    title: "For",
    links: [
      { href: "/#audience", label: "Executives" },
      { href: "/#audience", label: "Athletes" },
      { href: "/#audience", label: "High Performers" },
      { href: "/about", label: "Corporate (Coming Soon)" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-dark-deep border-t border-[var(--gold)]/15">
      <div className="container-site py-20 grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-10 w-10 items-center justify-center border border-[var(--gold)] text-[var(--gold)] font-serif rounded-lg">
              ✦
            </span>
            <span className="font-serif text-2xl tracking-[0.1em] text-[var(--offwhite)]">
              RESTORE
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-on-dark mb-6">
            Elite physiotherapy, performance coaching, and life optimization for ambitious
            people who treat their health as their greatest investment.
          </p>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--gold)]">
            Prestige without arrogance
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-[var(--gold)] mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-dark hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-site border-t border-white/8 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs tracking-wide text-on-dark">
        <span>© {new Date().getFullYear()} Restore. All rights reserved.</span>
        <span>Performance coaching for people who invest in excellence.</span>
      </div>
    </footer>
  );
}
