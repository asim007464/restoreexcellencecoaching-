import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Mentorship",
  description:
    "Personalised Restore coaching with weekly sessions, follow-ups, WhatsApp support, and AI progress tracking.",
};

const process = [
  {
    title: "Understand the client",
    text: "Goals, pain, lifestyle, and what success means to you.",
  },
  {
    title: "Identify the true obstacle",
    text: "Physical limits, mental patterns, habits, and lifestyle — not just symptoms.",
  },
  {
    title: "Create the roadmap",
    text: "Exercises, recovery, mindset, and accountability tailored to your week.",
  },
  {
    title: "Stay in contact",
    text: "WhatsApp, email, wearables, and AI charts keep progress visible.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Mentorship"
        title="Personalised coaching for high performers."
        description="One live session each week. Two follow-ups. Continuous support. A 3-month starter program for people who want results worthy of their investment."
        image={images.sportsCoach}
        ctaHref="/contact"
        ctaLabel="Book Your Consultation"
      />

      <section className="bg-offwhite py-24">
        <div className="container-site grid lg:grid-cols-2 gap-14 items-center">
          <MotionReveal>
            <p className="eyebrow mb-4">Flagship Path</p>
            <h2 className="heading-lux-light text-4xl mb-5">
              Why ambitious clients start here
            </h2>
            <p className="text-charcoal/75 mb-5 leading-relaxed">
              Transformation rarely happens from content alone. Live coaching gives you diagnosis,
              direction, and disciplined follow-through — with a coach who helps you see that
              investing in your health is investing in your life.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="lux-card-light p-5">
                <p className="font-serif text-3xl text-[var(--gold)] mb-1">1×</p>
                <p className="text-sm text-charcoal/70">Live session weekly</p>
              </div>
              <div className="lux-card-light p-5">
                <p className="font-serif text-3xl text-[var(--gold)] mb-1">2×</p>
                <p className="text-sm text-charcoal/70">Follow-ups weekly</p>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden h-[480px] img-zoom-wrap">
              <SiteImage
                src={images.strength}
                alt="Strength and performance coaching"
                fill
                showSkeleton={false}
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Method</p>
            <h2 className="heading-lux text-4xl">How your coach works with you</h2>
          </MotionReveal>
          <MotionStagger className="grid gap-5 md:grid-cols-2">
            {process.map((item, i) => (
              <MotionItem key={item.title}>
                <div className="lux-card glass p-8">
                  <p className="font-serif text-[var(--gold)] text-2xl mb-3">0{i + 1}</p>
                  <h3 className="heading-lux text-2xl mb-3">{item.title}</h3>
                  <p className="text-sm text-on-dark leading-relaxed">{item.text}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-offwhite-soft py-24">
        <div className="container-site grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <MotionReveal>
            <p className="eyebrow mb-4">Progress System</p>
            <h2 className="heading-lux-light text-4xl mb-5">
              Wearables. WhatsApp. Intelligent charts.
            </h2>
            <p className="text-charcoal/75 mb-8 leading-relaxed">
              Share watch screenshots. We review sleep, heart rate, activity, mobility, recovery,
              and consistency — with AI-assisted charts that make improvement visible.
            </p>
            <Button href="/contact" variant="navy">
              Begin Your 3-Month Program
            </Button>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="section-dark lux-card p-8 lg:p-10 border border-[var(--gold)]/25">
              <h3 className="heading-lux text-3xl mb-6">Included in mentorship</h3>
              <ul className="space-y-3 text-on-dark">
                {[
                  "Personalised plan for injury, focus, health, mindset & success",
                  "Weekly live coaching session",
                  "Two follow-ups each week",
                  "WhatsApp & email communication",
                  "AI-assisted progress visualisation",
                  "3-month starter framework",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--gold)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
