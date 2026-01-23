import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "brass";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles: Record<Variant, string> = {
    primary:
      "bg-ink-900 text-white hover:bg-ink-800 focus:ring-ink-900 shadow-soft",
    secondary:
      "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white focus:ring-ink-900",
    ghost: "text-ink-900 hover:bg-slate-100 focus:ring-slate-300",
    brass:
      "bg-brass-500 text-ink-900 border border-brass-500 hover:bg-brass-600 hover:border-brass-600 focus:ring-white/60 shadow-soft",
  };

  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
