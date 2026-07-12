import Link from "next/link";

type Variant = "gold" | "outline-gold" | "navy" | "ghost";

const variants: Record<Variant, string> = {
  gold: "btn-lux btn-lux-gold",
  "outline-gold": "btn-lux btn-lux-outline",
  navy: "btn-lux btn-lux-navy",
  ghost: "btn-lux btn-lux-ghost",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({ href, children, variant = "gold", className = "" }: Props) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`.trim()}>
      <span className="btn-lux-label">{children}</span>
    </Link>
  );
}

export function buttonClass(variant: Variant = "gold") {
  return variants[variant];
}
