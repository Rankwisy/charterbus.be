import Link from "next/link";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-secondary text-white hover:bg-accent hover:text-primary shadow-lg shadow-secondary/25",
  secondary:
    "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
  ghost: "bg-white/10 text-white border border-white/40 hover:bg-white hover:text-primary",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & ComponentProps<typeof Link> & { href: string };
type ButtonAsButton = BaseProps & ComponentProps<"button"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link {...(rest as ComponentProps<typeof Link>)} href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ComponentProps<"button">)} className={classes}>
      {children}
    </button>
  );
}
