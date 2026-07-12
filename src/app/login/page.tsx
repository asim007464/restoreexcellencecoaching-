"use client";

import Link from "next/link";
import { Button, buttonClass } from "@/components/Button";
import { MotionReveal } from "@/components/Motion";
import { FormEvent, useState } from "react";

export default function LoginPage() {
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
            <p className="eyebrow mb-4 text-center">Client Portal</p>
            <h1 className="heading-lux text-[clamp(2.2rem,5vw,3rem)] text-center mb-3">
              Welcome back
            </h1>
            <p className="text-on-dark text-center mb-8 text-sm sm:text-base">
              Sign in to access your coaching plan, sessions, and progress.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <form onSubmit={onSubmit} className="lux-card glass p-7 sm:p-8 space-y-5">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="font-serif text-2xl heading-lux mb-3">Signed in</p>
                  <p className="text-on-dark text-sm mb-6">
                    Your login was received. Connect your account backend when ready.
                  </p>
                  <Button href="/">Return Home</Button>
                </div>
              ) : (
                <>
                  <AuthField label="Email" name="email" type="email" required />
                  <AuthField label="Password" name="password" type="password" required />
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex items-center gap-2 text-on-dark cursor-pointer">
                      <input
                        type="checkbox"
                        name="remember"
                        className="accent-[var(--gold)]"
                      />
                      Remember me
                    </label>
                    <Link href="/contact" className="text-[var(--gold)] hover:text-[var(--gold-light)]">
                      Need help?
                    </Link>
                  </div>
                  <button type="submit" className={`w-full ${buttonClass("gold")}`}>
                    Sign In
                  </button>
                  <p className="text-center text-sm text-on-dark pt-1">
                    New to Restore?{" "}
                    <Link href="/signup" className="text-[var(--gold)] hover:text-[var(--gold-light)]">
                      Create an account
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
