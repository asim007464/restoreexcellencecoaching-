import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Restore philosophy: elite physiotherapy, performance coaching, and life optimization for ambitious people.",
};

const beliefs = [
  {
    title: "Prestige without arrogance",
    text: "We speak with authority and care. Excellence should feel inviting — never intimidating.",
  },
  {
    title: "Understand before you prescribe",
    text: "We uncover physical obstacles, habits, lifestyle, and mindset before building a plan.",
  },
  {
    title: "Health as investment",
    text: "Our clients value expertise. They know their health is the foundation of lasting success.",
  },
  {
    title: "Built for what comes next",
    text: "Today we serve individuals. Tomorrow we extend the same standard to teams and companies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Restore"
        title="Elite coaching for people who perform under pressure."
        description="We help ambitious adults — especially ages 40 to 60 — recover better, move better, think clearer, and raise their quality of life through disciplined, personalised coaching."
        image={images.executive}
        ctaHref="/contact"
        ctaLabel="Book Consultation"
      />

      <section className="bg-offwhite py-24">
        <div className="container-site grid lg:grid-cols-2 gap-14 items-center">
          <MotionReveal>
            <div className="relative rounded-2xl overflow-hidden h-[460px] img-zoom-wrap">
              <SiteImage
                src={images.gymTraining}
                alt="Luxury gym training"
                fill
                showSkeleton={false}
              />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <p className="eyebrow mb-4">Philosophy</p>
            <h2 className="heading-lux-light text-4xl mb-6">
              We create balance. We raise performance. We transform lives.
            </h2>
            <p className="text-charcoal/75 mb-5 leading-relaxed">
              Restore is not a hospital website experience. It is executive-grade physiotherapy
              and life optimization for people who refuse average outcomes.
            </p>
            <p className="text-charcoal/75 mb-9 leading-relaxed">
              We help clients achieve goals they once believed impossible — with clarity,
              accountability, and a roadmap built around their real life.
            </p>
            <Button href="/coaching" variant="navy">
              Discover Live Mentorship
            </Button>
          </MotionReveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What We Believe</p>
            <h2 className="heading-lux text-4xl">Standards that earn trust.</h2>
          </MotionReveal>
          <MotionStagger className="grid gap-6 md:grid-cols-2">
            {beliefs.map((item) => (
              <MotionItem key={item.title}>
                <div className="lux-card glass p-8 h-full">
                  <h3 className="heading-lux text-2xl mb-3">{item.title}</h3>
                  <p className="text-sm text-on-dark leading-relaxed">{item.text}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
