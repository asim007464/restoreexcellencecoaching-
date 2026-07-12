import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionItem, MotionStagger } from "@/components/Motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Premium Restore books on recovery, longevity, performance, and mindset.",
};

const books = [
  {
    title: "The Athlete Recovery Standard",
    price: "£24.99",
    text: "A foundational guide to recovery, discipline, and daily performance habits.",
  },
  {
    title: "Longevity for High Performers",
    price: "£22.99",
    text: "Health optimization protocols written for ambitious professionals who train seriously.",
  },
  {
    title: "Clarity Under Pressure",
    price: "£19.99",
    text: "Mindset frameworks to think clearly, decide well, and protect your training energy.",
  },
];

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Books"
        title="Reference material for a higher standard."
        description="Keep expert guidance at hand. Our books complement live mentorship and courses — practical, refined, and built for serious performers."
        ctaHref="/contact"
        ctaLabel="Request a Recommendation"
      />

      <section className="bg-offwhite py-24">
        <div className="container-site">
          <MotionStagger className="grid gap-6 lg:grid-cols-3">
            {books.map((book) => (
              <MotionItem key={book.title}>
                <article className="lux-card-light p-8 h-full flex flex-col card-hover card-hover-gold">
                  <div className="mb-6 h-48 section-dark rounded-xl flex items-center justify-center border border-[var(--gold)]/20">
                    <span className="font-serif text-[var(--gold)] text-4xl">✦</span>
                  </div>
                  <h2 className="heading-lux-light text-3xl mb-2">{book.title}</h2>
                  <p className="font-serif text-[var(--gold)] text-xl mb-3">{book.price}</p>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-8 flex-1">{book.text}</p>
                  <Button href="/contact" variant="navy">
                    Register Interest
                  </Button>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
