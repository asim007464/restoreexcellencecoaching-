"use client";

import { Button, buttonClass } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { MotionReveal } from "@/components/Motion";
import { images } from "@/lib/images";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Apply / Consult"
        title="Begin with a private consultation."
        description="Tell us where you are and what you want to transform. We will recommend mentorship, a course, or a book — with clarity and no pressure."
        image={images.runner}
      />

      <section className="bg-offwhite py-24">
        <div className="container-site grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <MotionReveal>
            <h2 className="heading-lux-light text-4xl mb-5">What happens next</h2>
            <ul className="space-y-4 mb-8">
              {[
                "We review your goals and current obstacles",
                "A coach outlines your best starting program",
                "Most clients begin with a 3-month mentorship plan",
                "Follow-up continues via WhatsApp, email, and progress reviews",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/75">
                  <span className="text-[var(--gold)] mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="lux-card-light border border-[var(--gold)]/30 bg-offwhite-soft p-6">
              <p className="font-serif text-2xl heading-lux-light mb-2">Prefer direct contact?</p>
              <p className="text-sm text-charcoal/70 mb-1">hello@restoreexcellence.com</p>
              <p className="text-sm text-charcoal/70">+44 20 1234 5678</p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <form onSubmit={onSubmit} className="lux-card-light p-8 space-y-5">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="font-serif text-3xl heading-lux-light mb-3">Thank you.</p>
                  <p className="text-charcoal/70 mb-6">
                    Your consultation request has been received. We will respond within 24 hours.
                  </p>
                  <Button href="/programs" variant="navy">
                    Explore Programs
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-3xl heading-lux-light mb-2">Consultation form</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Phone" name="phone" />
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      I am primarily interested in
                    </label>
                    <select
                      name="interest"
                      className="w-full border border-black/15 bg-offwhite rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
                      defaultValue="mentorship"
                    >
                      <option value="mentorship">Live Personalised Mentorship</option>
                      <option value="courses">Online Courses</option>
                      <option value="books">Books</option>
                      <option value="corporate">Corporate / Team (Coming Soon)</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      What do you want to transform?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-black/15 bg-offwhite rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)] resize-y"
                      placeholder="Injury, focus, health, mindset, success, quality of life..."
                    />
                  </div>
                  <button type="submit" className={`w-full ${buttonClass("gold")}`}>
                    Submit Consultation Request
                  </button>
                </>
              )}
            </form>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-black/15 bg-offwhite rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
      />
    </div>
  );
}
