import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

type Variant = "primary" | "outline";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-medium transition-colors";
const VARIANTS: Record<Variant, string> = {
  primary: "bg-blue-700 text-white hover:bg-blue-800",
  outline: "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
};

interface Props {
  href: string;
  variant?: Variant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", external, arrow, className = "", children }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ExternalLink size={16} aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
