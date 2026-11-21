import { cn } from "./ui/utils";

/** ROVÉNAIRE wordmark — elegant all-caps with a red accent on the É */
export function Wordmark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display tracking-[0.28em] select-none leading-none",
        invert ? "text-brand-ivory" : "text-brand-charcoal",
        className,
      )}
      style={{ fontWeight: 500 }}
    >
      ROV<span className="text-brand-red">É</span>NAIRE
    </span>
  );
}

/** Small uppercase editorial eyebrow label */
export function Eyebrow({
  children,
  className,
  withMark = true,
}: {
  children: React.ReactNode;
  className?: string;
  withMark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand-muted",
        className,
      )}
    >
      {withMark && <span className="h-px w-6 bg-brand-red" />}
      {children}
    </span>
  );
}

/** Editorial section heading in the display serif */
export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-[34px] leading-[1.05] tracking-[-0.01em] text-brand-charcoal md:text-[44px]",
        className,
      )}
      style={{ fontWeight: 400 }}
    >
      {children}
    </h2>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost" | "light" | "red" | "outlineLight";
  size?: "sm" | "md";
};

/** Brand button with luxury styling */
export function Button({
  children,
  className,
  variant = "solid",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizes = {
    sm: "text-[11px] px-5 py-2.5",
    md: "text-[12px] px-7 py-3.5",
  };
  const variants = {
    solid:
      "bg-brand-charcoal text-brand-ivory hover:bg-brand-red",
    outline:
      "border border-brand-charcoal/30 text-brand-charcoal hover:border-brand-red hover:text-brand-red",
    ghost: "text-brand-charcoal hover:text-brand-red",
    light:
      "bg-brand-ivory/95 text-brand-charcoal hover:bg-white",
    red: "bg-brand-red text-white hover:bg-brand-burgundy",
    outlineLight:
      "border border-brand-ivory/40 text-brand-ivory hover:border-brand-ivory hover:bg-brand-ivory/10",
  };
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
