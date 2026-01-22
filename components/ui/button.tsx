'use client';

import Link from "next/link";
import { ComponentProps } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    baseStyles +
    " bg-primary text-white shadow-[0_10px_30px_rgba(155,207,155,0.35)] hover:translate-y-[-1px] hover:shadow-[0_12px_32px_rgba(155,207,155,0.45)] active:translate-y-0",
  secondary:
    baseStyles +
    " border border-ink/10 bg-white text-ink shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-primary hover:bg-primary/10",
  ghost:
    baseStyles +
    " border border-transparent bg-transparent text-ink hover:bg-white/60",
};

type Variant = keyof typeof variants;

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${variants[variant]} ${className}`} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <Link className={`${variants[variant]} ${className}`} {...props} />;
}
