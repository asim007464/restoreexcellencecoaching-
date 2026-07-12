import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionItem, MotionStagger } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Courses",
  description: "Premium self-paced Restore courses for recovery, mobility, and performance.",
};

const courses = [
  {
    title: "Recovery Reset",
    price: "£149",
    text: "An 8-week framework for gym-based recovery, energy, and sustainable high performance.",
    image: images.recoveryFloor,
  },
  {
    title: "Mobility Mastery",
    price: "£119",
    text: "Practical protocols for joint health, injury prevention, and resilient movement.",
    image: images.mobility,
  },
  {
    title: "Strength Foundations",
    price: "£129",
    text: "Build strength that supports longevity, confidence, and everyday performance.",
    image: images.athleteLift,
  },
  {
    title: "Performance Blueprint",
    price: "£159",
    text: "For executives integrating training, recovery, and focus into demanding schedules.",
    image: images.outdoorAthlete,
  },
  {
    title: "Leadership Through Health",
    price: "£149",
    text: "How high performers use health as a strategic advantage in business and life.",
    image: images.executive,
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Courses"
        title="Self-paced mastery for ambitious people."
        description="Structured programs for clients who want gym-ready transformation with flexibility — built from the same philosophy as live mentorship."
        image={images.mobility}
        ctaHref="/contact"
        ctaLabel="Ask Which Course Fits You"
      />

      <section className="bg-offwhite py-24">
        <div className="container-site">
          <MotionStagger className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <MotionItem key={course.title}>
                <article className="lux-card-light overflow-hidden h-full flex flex-col card-hover card-hover-gold">
                  <div className="img-zoom-wrap h-56 relative">
                    <SiteImage
                      src={course.image}
                      alt={course.title}
                      fill
                      showSkeleton={false}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="heading-lux-light text-3xl mb-2">{course.title}</h2>
                    <p className="font-serif text-[var(--gold)] text-xl mb-3">{course.price}</p>
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-6 flex-1">
                      {course.text}
                    </p>
                    <Button href="/contact" variant="navy">
                      Register Interest
                    </Button>
                  </div>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
