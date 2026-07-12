"use client";

import { Button } from "@/components/Button";
import { MotionHero, MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";
import { images } from "@/lib/images";
import { useState } from "react";

const pillars = [
  {
    title: "Recovery",
    text: "Heal properly, return stronger, and build resilience that lasts beyond a single injury.",
    icon: "◈",
  },
  {
    title: "Performance",
    text: "Strength, mobility, and training designed for people who expect more from their body.",
    icon: "◎",
  },
  {
    title: "Accountability",
    text: "Weekly coaching, follow-ups, and progress tracking so results stay consistent.",
    icon: "◇",
  },
  {
    title: "Balance",
    text: "Align training, recovery, mindset, and life so progress feels sustainable.",
    icon: "✦",
  },
];

const audiences = [
  {
    title: "CEOs & Executives",
    text: "Leaders who need energy, clarity, and longevity to match the demands of their role.",
  },
  {
    title: "Entrepreneurs",
    text: "Builders who treat their body like a business asset — not an afterthought.",
  },
  {
    title: "Athletes",
    text: "Competitive and recreational athletes who want elite recovery and performance support.",
  },
  {
    title: "Active Professionals",
    text: "Ambitious adults aged 40–60 who want better health, mobility, and quality of life.",
  },
];

const services = [
  {
    priority: true,
    label: "Flagship",
    title: "Live Personalised Mentorship",
    price: "From £75 / session",
    summary:
      "One-to-one coaching that finds the real problem, builds a personal roadmap, and keeps you accountable every week.",
    points: [
      "1 live online session each week",
      "2 follow-up sessions each week",
      "WhatsApp & email support",
      "AI progress tracking",
      "Wearable integration",
      "Mindset & goal accountability",
    ],
    href: "/coaching",
    cta: "Start Mentorship",
  },
  {
    priority: false,
    label: "Self-Paced",
    title: "Online Courses",
    price: "From £79",
    summary:
      "Premium education for recovery, mobility, strength, and performance — designed by your coaches.",
    points: [
      "Recovery Reset",
      "Mobility Mastery",
      "Strength Foundations",
      "Performance Blueprint",
      "Leadership Through Health",
      "Lifetime access",
    ],
    href: "/courses",
    cta: "Browse Courses",
  },
  {
    priority: false,
    label: "Reference",
    title: "Premium Books",
    price: "From £18.99",
    summary:
      "Luxury digital and printed guides on recovery, longevity, mindset, and high performance habits.",
    points: [
      "Recovery & longevity",
      "Health optimization",
      "Performance habits",
      "Mindset frameworks",
      "Print & digital options",
      "Pairs with live coaching",
    ],
    href: "/books",
    cta: "Explore Books",
  },
];

const process = [
  {
    num: "01",
    title: "Understand the client",
    text: "Goals, pain, lifestyle, and what success actually means to you.",
  },
  {
    num: "02",
    title: "Find the true obstacle",
    text: "Physical limits, habits, mindset, and lifestyle patterns — not just symptoms.",
  },
  {
    num: "03",
    title: "Build your roadmap",
    text: "A personalised plan for recovery, performance, and long-term balance.",
  },
  {
    num: "04",
    title: "Weekly coaching",
    text: "One live session. Two follow-ups. Continuous support and progress reviews.",
  },
];

const focusAreas = [
  "Injury Recovery",
  "Performance",
  "Mobility",
  "Mental Health",
  "Focus",
  "Success",
  "Stress & Burnout",
  "Quality of Life",
  "Longevity",
  "Strength",
  "Confidence",
  "Discipline",
];

const testimonials = [
  {
    quote:
      "I stopped treating physio like an appointment and started treating my body like the foundation of my business. Restore made that shift feel natural.",
    name: "James R.",
    role: "CEO, Private Equity",
  },
  {
    quote:
      "The weekly structure, WhatsApp check-ins, and watch data reviews kept me honest. Three months changed how I train and recover.",
    name: "Sarah K.",
    role: "Founder & Endurance Athlete",
  },
  {
    quote:
      "Premium without the fluff. Clear plan, real accountability, and coaches who understand people who perform under pressure.",
    name: "Michael T.",
    role: "Executive & Former Athlete",
  },
];

const faqs = [
  {
    q: "Is this medical treatment or coaching?",
    a: "Restore is elite physiotherapy and performance coaching — not a hospital or clinic experience. We focus on recovery, performance, mindset, and long-term quality of life.",
  },
  {
    q: "Who is Restore for?",
    a: "Ambitious adults, typically 40–60, including executives, entrepreneurs, athletes, and professionals who are ready to invest in their health.",
  },
  {
    q: "How does the coaching schedule work?",
    a: "You get one live online session each week and two follow-ups. Support continues through WhatsApp, email, and progress tracking.",
  },
  {
    q: "Why start with three months?",
    a: "Three months is enough time to build meaningful habits, track progress properly, and see real change in recovery and performance.",
  },
  {
    q: "Do you work with companies or teams?",
    a: "Individual coaching is available now. Corporate wellness, executive team coaching, and sports team programs are coming next.",
  },
];

const stats = [
  { value: "3", label: "Month starter program" },
  { value: "1×", label: "Live session weekly" },
  { value: "2×", label: "Follow-ups weekly" },
  { value: "24/7", label: "WhatsApp & email access" },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[78vh] md:min-h-screen flex items-end lg:items-center overflow-hidden section-dark">
        <div className="absolute inset-0 hero-header-image hidden md:block">
          <SiteImage
            src={images.header}
            alt="Restore performance coaching"
            fill
            priority
            showSkeleton={false}
          />
        </div>
        <div className="absolute inset-0 md:hidden bg-gradient-to-br from-navy via-navy-soft to-navy-deep" />

        <div className="container-site relative z-10 pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-24 md:pt-40 lg:py-40 w-full">
          <div className="max-w-3xl">
            <MotionHero>
              <p className="eyebrow mb-5 md:mb-7">Elite Performance Coaching</p>
            </MotionHero>
            <MotionHero delay={0.12}>
              <h1 className="heading-lux text-[clamp(2.35rem,8vw,5.8rem)] leading-[0.95] mb-5 md:mb-7">
                Become your highest standard.
              </h1>
            </MotionHero>
            <MotionHero delay={0.24}>
              <p className="max-w-xl text-base sm:text-lg lg:text-xl text-on-dark font-light mb-8 md:mb-11 leading-relaxed">
                Premium physiotherapy and life optimization for ambitious people who invest in
                health, performance, and longevity — not short-term fixes.
              </p>
            </MotionHero>
            <MotionHero delay={0.36}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button href="/contact" className="w-full sm:w-auto">Book Consultation</Button>
                <Button href="/programs" variant="ghost" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </div>
            </MotionHero>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section-dark-deep border-y border-white/5 py-14 lg:py-16">
        <MotionStagger className="container-site grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <MotionItem
              key={stat.label}
              className="text-center lg:text-left px-2 sm:px-4 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <p className="font-serif font-semibold text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.9] text-[var(--gold)] mb-3">
                {stat.value}
              </p>
              <p className="text-[0.68rem] sm:text-xs tracking-[0.22em] uppercase text-on-dark font-medium leading-relaxed max-w-[16ch] mx-auto lg:mx-0">
                {stat.label}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </section>

      {/* MISSION */}
      <section className="grid lg:grid-cols-2 min-h-[620px]">
        <MotionReveal className="relative min-h-[320px] img-zoom-wrap">
          <SiteImage
            src={images.luxuryGym}
            alt="Modern luxury fitness studio"
            fill
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-navy/30" />
        </MotionReveal>
        <div className="bg-offwhite px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center">
          <MotionReveal>
            <p className="eyebrow mb-4">Our Mission</p>
            <h2 className="heading-lux-light text-[clamp(2.1rem,4vw,3.4rem)] mb-6">
              We do not simply fix pain. We transform lives.
            </h2>
            <p className="text-charcoal/75 mb-5 leading-relaxed text-lg">
              Restore helps ambitious people perform better physically and mentally. We create
              balance, improve confidence, and raise quality of life through elite coaching —
              never a clinical appointment.
            </p>
            <p className="text-charcoal/75 mb-9 leading-relaxed">
              Our coaches uncover the real problem first: physical obstacles, habits, lifestyle,
              and mindset. Only then do we build your personalised roadmap.
            </p>
            <Button href="/about" variant="navy">
              Discover Our Philosophy
            </Button>
          </MotionReveal>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-offwhite-soft py-24 border-y border-black/5">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Four Pillars</p>
            <h2 className="heading-lux-light text-[clamp(2.1rem,4vw,3.3rem)]">
              The standard behind every program.
            </h2>
          </MotionReveal>
          <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <MotionItem key={item.title}>
                <div className="lux-card-light p-7 h-full card-hover card-hover-gold">
                  <div className="mb-5 text-2xl text-[var(--gold)]">{item.icon}</div>
                  <h3 className="heading-lux-light text-2xl mb-3">{item.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{item.text}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="audience" className="section-dark py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Who We Help</p>
            <h2 className="heading-lux text-[clamp(2.1rem,4vw,3.3rem)] mb-5">
              Built for people ready to invest in themselves.
            </h2>
            <p className="text-on-dark">
              Our clients are not price shoppers. They value expertise. They believe their health
              is their greatest investment.
            </p>
          </MotionReveal>
          <MotionStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {audiences.map((item) => (
              <MotionItem key={item.title}>
                <div className="lux-card glass p-6 h-full card-hover">
                  <h3 className="heading-lux text-2xl mb-3">{item.title}</h3>
                  <p className="text-sm text-on-dark leading-relaxed">{item.text}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
          <MotionReveal>
            <div className="lux-card border border-[var(--gold)]/25 bg-navy-soft/60 p-8 lg:p-10">
              <p className="eyebrow mb-4">Personalised Plan Focus</p>
              <h3 className="heading-lux text-3xl mb-7">What we help you transform</h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[var(--offwhite)]/90 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-offwhite py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Premium Services</p>
            <h2 className="heading-lux-light text-[clamp(2.2rem,4vw,3.4rem)] mb-4">
              Three levels. One standard of excellence.
            </h2>
            <p className="text-charcoal/70">
              Live mentorship is our flagship path. Courses and books extend the same philosophy
              for self-paced growth.
            </p>
          </MotionReveal>
          <MotionStagger className="grid gap-6 lg:grid-cols-3">
            {services.map((offer) => (
              <MotionItem key={offer.title}>
                <article
                  className={`lux-card h-full flex flex-col p-8 card-hover ${
                    offer.priority
                      ? "bg-navy section-dark border-[var(--gold)]/50"
                      : "lux-card-light"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[var(--gold)]">
                      {offer.label}
                    </span>
                    {offer.priority && (
                      <span className="text-[0.6rem] tracking-[0.12em] uppercase bg-[var(--gold)] text-navy px-2.5 py-1 font-semibold rounded-md">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-3xl mb-3 ${offer.priority ? "heading-lux" : "heading-lux-light"}`}
                  >
                    {offer.title}
                  </h3>
                  <p className="font-serif text-[var(--gold)] text-xl mb-4">{offer.price}</p>
                  <p
                    className={`text-sm mb-6 leading-relaxed ${offer.priority ? "text-on-dark" : "text-charcoal/70"}`}
                  >
                    {offer.summary}
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {offer.points.map((point) => (
                      <li
                        key={point}
                        className={`text-sm flex gap-2 ${offer.priority ? "text-on-dark" : "text-charcoal/70"}`}
                      >
                        <span className="text-[var(--gold)]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={offer.href}
                    variant={offer.priority ? "outline-gold" : "navy"}
                    className="w-full"
                  >
                    {offer.cta}
                  </Button>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* COACHING PROCESS */}
      <section id="process" className="section-dark-deep py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Coaching Process</p>
            <h2 className="heading-lux text-[clamp(2.1rem,4vw,3.3rem)] mb-4">
              From first conversation to lasting change.
            </h2>
            <p className="text-on-dark">
              Every client begins with understanding. We never rush past the real problem.
            </p>
          </MotionReveal>
          <MotionStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <MotionItem key={step.num}>
                <div className="lux-card glass p-7 h-full card-hover">
                  <p className="font-serif text-4xl text-[var(--gold)] mb-5">{step.num}</p>
                  <h3 className="heading-lux text-2xl mb-3">{step.title}</h3>
                  <p className="text-sm text-on-dark leading-relaxed">{step.text}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* TECHNOLOGY & WEARABLES */}
      <section id="technology" className="bg-offwhite py-24">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <MotionReveal>
            <p className="eyebrow mb-4">Technology & AI</p>
            <h2 className="heading-lux-light text-[clamp(2.1rem,4vw,3.3rem)] mb-6">
              Wearable data. Human coaching. Clear charts.
            </h2>
            <p className="text-charcoal/75 mb-5 leading-relaxed text-lg">
              Clients wear smart watches and share screenshots on WhatsApp. AI helps convert
              progress into clear charts. Your coach reviews sleep, heart rate, activity,
              mobility, recovery, and consistency — then gives weekly feedback.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                "WhatsApp progress sharing",
                "Email coaching support",
                "AI-assisted progress charts",
                "Weekly recovery & consistency review",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/75">
                  <span className="text-[var(--gold)]">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/coaching" variant="navy">
              See Live Mentorship
            </Button>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] img-zoom-wrap">
              <SiteImage
                src={images.athleteLift}
                alt="Athlete training with performance focus"
                fill
                showSkeleton={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass rounded-xl p-6">
                  <p className="font-serif text-5xl text-[var(--gold)] mb-1">3</p>
                  <p className="text-xs tracking-[0.18em] uppercase text-on-dark mb-2">
                    Month starter program
                  </p>
                  <p className="text-sm text-[var(--offwhite)]/85">
                    Enough time to create meaningful, measurable change.
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-dark py-24">
        <div className="container-site">
          <MotionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Client Voices</p>
            <h2 className="heading-lux text-[clamp(2.1rem,4vw,3.3rem)]">
              Trusted by people who expect excellence.
            </h2>
          </MotionReveal>
          <MotionStagger className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <MotionItem key={item.name}>
                <blockquote className="lux-card glass p-8 h-full flex flex-col">
                  <p className="text-[var(--gold)] text-3xl mb-4 font-serif">“</p>
                  <p className="text-on-dark leading-relaxed mb-8 flex-1 italic">
                    {item.quote}
                  </p>
                  <footer>
                    <p className="text-[var(--offwhite)] font-medium">{item.name}</p>
                    <p className="text-sm text-on-dark">{item.role}</p>
                  </footer>
                </blockquote>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* PRICING SUMMARY */}
      <section id="pricing" className="bg-offwhite-soft py-24 border-y border-black/5">
        <div className="container-site">
          <MotionReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Investment</p>
            <h2 className="heading-lux-light text-[clamp(2.1rem,4vw,3.3rem)] mb-4">
              Clear pricing. Premium outcomes.
            </h2>
            <p className="text-charcoal/70">
              Choose the intensity that matches your ambition. Mentorship remains the highest
              priority path for transformation.
            </p>
          </MotionReveal>
          <MotionStagger className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { name: "Mentorship", price: "£75", unit: "/ session", note: "Flagship · Recommended" },
              { name: "Courses", price: "£79", unit: " from", note: "Self-paced mastery" },
              { name: "Books", price: "£18.99", unit: " from", note: "Luxury references" },
            ].map((tier) => (
              <MotionItem key={tier.name}>
                <div className="lux-card-light p-8 text-center card-hover card-hover-gold h-full">
                  <p className="eyebrow mb-4">{tier.note}</p>
                  <h3 className="heading-lux-light text-2xl mb-4">{tier.name}</h3>
                  <p className="font-serif text-5xl text-[var(--gold)] mb-1">{tier.price}</p>
                  <p className="text-sm text-charcoal/60 mb-8">{tier.unit}</p>
                  <Button href="/contact" variant="navy" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-offwhite py-24">
        <div className="container-site max-w-3xl">
          <MotionReveal className="mb-12 text-center">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="heading-lux-light text-[clamp(2.1rem,4vw,3.2rem)]">
              Questions worth answering clearly.
            </h2>
          </MotionReveal>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <MotionReveal key={item.q} delay={i * 0.05}>
                <div className="lux-card-light overflow-hidden">
                  <button
                    type="button"
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-serif text-xl heading-lux-light">{item.q}</span>
                    <span className="text-[var(--gold)] text-xl shrink-0">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-charcoal/70 leading-relaxed border-t border-black/5 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 md:py-28 section-dark min-h-[320px] md:min-h-[380px]">
        <div className="absolute inset-0 hidden md:block">
          <SiteImage
            src={images.sportsCoach}
            alt="Performance coaching session"
            fill
            className="opacity-30"
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/75" />
        </div>
        <div className="container-site relative z-10 text-center max-w-3xl">
          <MotionReveal>
            <p className="eyebrow mb-5">Begin</p>
            <h2 className="heading-lux text-[clamp(2.4rem,5vw,4rem)] mb-6">
              Start your transformation.
            </h2>
            <p className="text-on-dark mb-10 text-lg font-light leading-relaxed">
              Book a private consultation. Meet your coach. Build a better life with a premium
              program designed for people who refuse average outcomes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button href="/contact" className="w-full sm:w-auto">Book Consultation</Button>
              <Button href="/coaching" variant="ghost" className="w-full sm:w-auto">
                Become Your Best Self
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
