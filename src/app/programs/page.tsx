import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Live mentorship, online courses, and premium books from Restore.",
};

const programs = [
  {
    title: "Live Personalised Mentorship",
    badge: "Recommended",
    text: "Weekly live coaching, twice-weekly follow-ups, WhatsApp support, wearable tracking, and AI progress charts. Best for transformation.",
    href: "/coaching",
  },
  {
    title: "Online Courses",
    badge: "Self-Paced",
    text: "Premium education for recovery, mobility, strength, and performance — designed for busy high performers.",
    href: "/courses",
  },
  {
    title: "Premium Books",
    badge: "Reference",
    text: "Luxury guides on recovery, longevity, mindset, and habits that reinforce your personalised plan.",
    href: "/books",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three ways to invest in excellence."
        description="Start with live mentorship if you want the deepest change. Extend your progress with courses and books built for serious performers."
        image={images.hero}
      />

      <section className="bg-offwhite py-24">
        <div className="container-site">
          <MotionStagger className="grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <MotionItem key={program.title}>
                <article className="lux-card-light p-8 h-full flex flex-col card-hover card-hover-gold">
                  <span className="eyebrow mb-4">{program.badge}</span>
                  <h2 className="heading-lux-light text-3xl mb-4">{program.title}</h2>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-8 flex-1">
                    {program.text}
                  </p>
                  <Button href={program.href} variant="navy">
                    Learn More
                  </Button>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section id="audience" className="section-dark py-24">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <MotionReveal>
            <p className="eyebrow mb-4">Ideal Clients</p>
            <h2 className="heading-lux text-4xl mb-5">
              Designed for people ready to invest.
            </h2>
            <p className="text-on-dark mb-6 leading-relaxed">
              CEOs, entrepreneurs, athletes, and active professionals aged 40–60 who want better
              energy, stronger movement, clearer focus, and a higher quality of life.
            </p>
            <Button href="/contact">Apply for Mentorship</Button>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden h-[420px] img-zoom-wrap">
              <SiteImage
                src={images.athleteLift}
                alt="High performance training"
                fill
                showSkeleton={false}
              />
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
