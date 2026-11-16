import Link from "next/link";
import { SITE } from "@/lib/constants";

const BARS = [8, 20, 30, 16, 24, 10];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-md" aria-label={`${SITE.name} home`}>
      <svg width="28" height="32" viewBox="0 0 28 32" aria-hidden="true" className="text-blue-600">
        {BARS.map((h, i) => (
          <rect key={i} x={i * 5 + 1} y={(32 - h) / 2} width="3" height={h} rx="1.5" fill="currentColor" />
        ))}
      </svg>
      <span className="text-xl font-bold tracking-tight text-slate-900">{SITE.name}</span>
    </Link>
  );
}
