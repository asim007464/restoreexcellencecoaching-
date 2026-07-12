"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { type ButtonHTMLAttributes, type MouseEvent, type ReactNode, useEffect, useState } from "react";

const MotionLink = motion.create(Link);

function useClientReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}

export type PremiumButtonVariant = "primary" | "secondary" | "ghost";
export type PremiumButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: PremiumButtonVariant;
  size?: PremiumButtonSize;
  className?: string;
  shimmer?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
};

type LinkProps = BaseProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonProps = BaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  form?: string;
  name?: string;
  value?: string;
};

export type PremiumButtonProps = LinkProps | ButtonProps;

const sizeClass: Record<PremiumButtonSize, string> = {
  sm: "premium-btn-sm",
  md: "premium-btn-md",
  lg: "premium-btn-lg",
};

const variantClass: Record<PremiumButtonVariant, string> = {
  primary: "premium-btn-primary",
  secondary: "premium-btn-secondary",
  ghost: "premium-btn-ghost",
};

function buildClassName({
  variant,
  size,
  shimmer,
  disabled,
  className,
}: {
  variant: PremiumButtonVariant;
  size: PremiumButtonSize;
  shimmer: boolean;
  disabled?: boolean;
  className?: string;
}) {
  return [
    "premium-btn",
    variantClass[variant],
    sizeClass[size],
    shimmer && variant === "primary" ? "premium-btn-shimmer" : "",
    disabled ? "premium-btn-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function PremiumButton(props: PremiumButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    shimmer = true,
    ariaLabel,
    disabled = false,
  } = props;

  const reduceMotion = useReducedMotion();
  const ready = useClientReady();
  const classes = buildClassName({ variant, size, shimmer, disabled, className });

  const tapAnimation = reduceMotion || disabled ? undefined : { scale: 0.98 };
  const tapTransition = { duration: 0.12, ease: "easeOut" as const };
  const useMotion = ready && !reduceMotion;

  const label = (
    <span className="premium-btn-label" aria-hidden={Boolean(ariaLabel)}>
      {children}
    </span>
  );

  if ("href" in props && props.href) {
    const linkProps = {
      href: props.href,
      "aria-label": ariaLabel,
      "aria-disabled": disabled || undefined,
      className: classes,
      onClick: disabled ? (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault() : undefined,
    };

    if (!useMotion) {
      return <Link {...linkProps}>{label}</Link>;
    }

    return (
      <MotionLink {...linkProps} whileTap={tapAnimation} transition={tapTransition}>
        {label}
      </MotionLink>
    );
  }

  const {
    type = "button",
    onClick,
    form,
    name,
    value,
  } = props as ButtonProps;

  if (!useMotion) {
    return (
      <button
        type={type}
        form={form}
        name={name}
        value={value}
        aria-label={ariaLabel}
        disabled={disabled}
        className={classes}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      form={form}
      name={name}
      value={value}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
      whileTap={tapAnimation}
      transition={tapTransition}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}

export function premiumButtonClass(
  variant: PremiumButtonVariant = "primary",
  size: PremiumButtonSize = "md",
  options?: { shimmer?: boolean; className?: string },
) {
  return buildClassName({
    variant,
    size,
    shimmer: options?.shimmer ?? true,
    className: options?.className,
  });
}
