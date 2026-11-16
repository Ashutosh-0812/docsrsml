"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

// Relative bar heights (0-1), purely decorative.
const BARS = [
  0.1, 0.12, 0.22, 0.14, 0.3, 0.2, 0.12, 0.5, 1, 0.55, 0.9, 0.4, 0.75, 0.3, 0.85, 0.5, 0.35, 0.7, 0.2, 0.15, 0.3,
  0.6, 0.2, 0.9, 0.35, 0.55, 0.25, 0.4, 0.8, 0.3, 0.15, 0.5, 0.2, 0.12, 0.08, 0.1, 0.12,
];

const DURATION = 8;

// Token start times in seconds; each token lasts until the next one starts.
const TOKENS = [
  { text: "I", start: 0 },
  { text: "um", start: 1, filler: true },
  { text: "think", start: 2 },
  { text: "we", start: 3.2 },
  { text: "should", start: 4.2 },
  { text: "uh", start: 5.6, filler: true },
  { text: "go", start: 6.8 },
];

const fmt = (t: number) => `0:${String(Math.floor(t)).padStart(2, "0")}`;

export function Waveform() {
  const [time, setTime] = useState(0);

  // Self-running loop, like an autoplaying video. No user controls.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setTime(((now - start) / 1000) % DURATION);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const progress = time / DURATION;
  const activeIndex = TOKENS.reduce((a, t, i) => (time >= t.start ? i : a), 0);

  return (
    <div className="relative mx-auto w-full max-w-xl select-none lg:max-w-none">
      <svg
        aria-hidden="true"
        viewBox="0 0 500 380"
        className="absolute -right-6 top-1/2 -z-10 h-[125%] w-[110%] -translate-y-1/2 text-indigo-50"
      >
        <path
          fill="currentColor"
          d="M120 40C200-10 330 10 400 70c70 60 120 150 70 230-50 80-170 90-270 60C100 330 20 280 30 190 40 110 60 70 120 40Z"
        />
      </svg>

      <figure
        role="img"
        aria-label="Animated example: a speech waveform with the transcript “I um think we should uh go”, with the fillers “um” and “uh” highlighted"
        className="pointer-events-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-5 sm:gap-4">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white sm:h-11 sm:w-11"
          >
            <Play size={16} fill="currentColor" />
          </div>
          <div className="flex h-11 min-w-0 flex-1 items-center justify-between" aria-hidden="true">
            {BARS.map((h, i) => (
              <span
                key={i}
                className={`wave-bar w-[2px] rounded-full transition-colors sm:w-[3px] ${
                  (i + 0.5) / BARS.length <= progress ? "bg-blue-600" : "bg-slate-800"
                }`}
                style={
                  {
                    height: `${Math.max(h * 100, 9)}%`,
                    "--amp": 0.25 + ((i * 37) % 10) / 20,
                    "--dur": `${0.45 + ((i * 13) % 7) / 20}s`,
                    "--delay": `${-((i * 0.137) % 1.5)}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <span aria-hidden="true" className="shrink-0 text-xs tabular-nums text-slate-500 sm:text-sm">
            {fmt(time)} / {fmt(DURATION)}
          </span>
        </div>

        <ul aria-hidden="true" className="mt-4 flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-50 p-2 sm:justify-between">
          {TOKENS.map((t, i) => (
            <li
              key={t.text}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-shadow sm:text-base ${
                t.filler ? "bg-violet-100 text-violet-900" : "text-slate-900"
              } ${i === activeIndex ? "ring-2 ring-blue-600" : ""}`}
            >
              {t.text}
            </li>
          ))}
        </ul>
      </figure>
    </div>
  );
}
