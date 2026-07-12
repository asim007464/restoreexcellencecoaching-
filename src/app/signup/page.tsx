"use client";

import Link from "next/link";
import { Button, buttonClass } from "@/components/Button";
import { MotionReveal } from "@/components/Motion";
import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-dark min-h-[calc(100vh-5rem)] flex items-center py-24 md:py-28">
      <div className="container-site w-full">
        <div className="mx-auto max-w-md">
          <MotionReveal>
            <p className="eyebrow mb-4 text-center">Join Restore</p>
            <h1 className="heading-lux text-[clamp(2.2rem,5vw,3rem)] text-center mb-3">
              Create your account
            </h1>
            <p className="text-on-dark text-center mb-8 text-sm sm:text-base">
              Start your journey with elite performance coaching and personalised support.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <form onSubmit={onSubmit} className="lux-card glass p-7 sm:p-8 space-y-5">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="font-serif text-2xl heading-lux mb-3">Account created</p>
                  <p className="text-on-dark text-sm mb-6">
                    Your signup was received. We will connect authentication when your backend is ready.
                  </p>
                  <Button href="/login">Sign In</Button>
                </div>
              ) : (
                <>
                  <AuthField label="Full name" name="name" required />
                  <AuthField label="Email" name="email" type="email" required />
                  <AuthField label="Password" name="password" type="password" required />
                  <AuthField label="Confirm password" name="confirmPassword" type="password" required />
                  <p className="text-xs text-on-dark leading-relaxed">
                    By creating an account, you agree to Restore&apos;s coaching terms and privacy policy.
                  </p>
                  <button type="submit" className={`w-full ${buttonClass("gold")}`}>
                    Create Account
                  </button>
                  <p className="text-center text-sm text-on-dark pt-1">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[var(--gold)] hover:text-[var(--gold-light)]">
                      Sign in
                    </Link>
                  </p>
                </>
              )}
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function AuthField({
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
      <label className="block text-sm font-medium text-on-dark mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-white/15 bg-white/5 rounded-xl px-4 py-3 text-sm text-[var(--offwhite)] outline-none focus:border-[var(--gold)] placeholder:text-on-dark/50"
        placeholder={label}
      />
    </div>
  );
}
