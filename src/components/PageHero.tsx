"use client";

import { Button } from "@/components/Button";
import { MotionHero } from "@/components/Motion";
import { SiteImage } from "@/components/SiteImage";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, ctaHref, ctaLabel, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pt-12 sm:pt-16 pb-16 sm:pb-20 md:pb-24 section-dark min-h-[44vh] md:min-h-[52vh] flex items-end">
      {image && (
        <div className="absolute inset-0 hidden md:block">
          <SiteImage
            src={image}
            alt=""
            fill
            className="opacity-40"
            priority
            showSkeleton={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
        </div>
      )}
      {!image && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(201,162,39,0.22), transparent 55%)",
          }}
        />
      )}
      <div className="container-site relative z-10 max-w-3xl">
        <MotionHero>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </MotionHero>
        <MotionHero delay={0.12}>
          <h1 className="heading-lux text-[clamp(2rem,7vw,4.2rem)] mb-5 md:mb-6">{title}</h1>
        </MotionHero>
        <MotionHero delay={0.22}>
          <p className="text-lg text-on-dark font-light mb-9 max-w-2xl leading-relaxed">
            {description}
          </p>
        </MotionHero>
        {ctaHref && ctaLabel && (
          <MotionHero delay={0.32}>
            <Button href={ctaHref}>{ctaLabel}</Button>
          </MotionHero>
        )}
      </div>
    </section>
  );
}
