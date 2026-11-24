// Shared hero text pieces. Mobile-first: on a phone the hero must be read in a
// glance, so the label is a pill, the headline has one coloured phrase, the intro
// is held to three lines, and the benefits become a 2x2 grid of tiles instead of
// a long checklist. From `sm` up these fall back to the roomier desktop layout.
import { Check } from "lucide-react";

export type HeroTone = "dark" | "light";

export function HeroEyebrow({
  children,
  tone = "dark",
  square = tone === "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: HeroTone;
  square?: boolean;
  className?: string;
}) {
  const colours =
    tone === "dark"
      ? "bg-white/[0.08] text-[#93C5FD] ring-white/15"
      : "bg-blue-50 text-blue-700 ring-blue-200";
  return (
    <p
      className={`inline-flex max-w-full items-center gap-2 px-3 py-1.5 text-xs font-semibold ring-1 ring-inset sm:text-sm ${
        square ? "" : "rounded-full"
      } ${colours} ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="truncate">{children}</span>
    </p>
  );
}

/**
 * Splits a headline into plain + coloured parts. Uses `highlight` when it is in
 * the title; otherwise colours the second sentence, or the trailing
 * "in <place>" / "at <place>" phrase. Returns the title unchanged if none fit.
 */
export function splitHeadline(title: string, highlight?: string): [string, string, string] {
  if (highlight) {
    const i = title.indexOf(highlight);
    if (i >= 0) return [title.slice(0, i), highlight, title.slice(i + highlight.length)];
  }
  const dot = title.indexOf(". ");
  if (dot > 0 && dot < title.length - 3) return [title.slice(0, dot + 2), title.slice(dot + 2), ""];
  const m = /\s(in|at)\s(?!.*\s(?:in|at)\s)/.exec(title);
  if (m && title.length - m.index <= 40) return [title.slice(0, m.index + 1), title.slice(m.index + 1), ""];
  return [title, "", ""];
}

export function HeroHeadline({
  title,
  highlight,
  tone = "dark",
  className = "",
}: {
  title: string;
  highlight?: string;
  tone?: HeroTone;
  className?: string;
}) {
  const [before, hl, after] = splitHeadline(title, highlight);
  const accent = tone === "dark" ? "text-[#FFC83D]" : "text-blue-600";
  return (
    <h1 className={`text-balance ${className}`}>
      {before}
      {hl && <span className={accent}>{hl}</span>}
      {after}
    </h1>
  );
}

/** Intro paragraph: three lines on a phone, full text from `sm` up. */
export function HeroIntro({ children, tone = "dark", className = "" }: { children: React.ReactNode; tone?: HeroTone; className?: string }) {
  const colour = tone === "dark" ? "text-slate-300" : "text-gray-600";
  return (
    <p className={`line-clamp-3 max-w-xl text-[15px] leading-relaxed sm:line-clamp-none sm:text-lg ${colour} ${className}`}>
      {children}
    </p>
  );
}

/** Benefits: 2x2 tiles on a phone, a plain check list from `sm` up. */
export function HeroPoints({
  points,
  tone = "dark",
  square = tone === "dark",
  className = "",
}: {
  points: string[];
  tone?: HeroTone;
  square?: boolean;
  className?: string;
}) {
  const tile =
    tone === "dark"
      ? "bg-white/[0.06] ring-white/10 text-white"
      : "bg-white ring-gray-200 text-gray-800 shadow-sm";
  const icon = tone === "dark" ? "text-[#60A5FA]" : "text-blue-600";
  return (
    <ul className={`grid max-w-xl grid-cols-2 gap-2 sm:gap-3 ${className}`}>
      {points.map((t) => (
        <li
          key={t}
          className={`flex items-start gap-2 p-3 text-[13px] font-semibold leading-snug ring-1 ring-inset sm:bg-transparent sm:p-0 sm:text-[15px] sm:font-normal sm:shadow-none sm:ring-0 ${
            square ? "" : "rounded-xl"
          } ${tile}`}
        >
          <Check className={`mt-px h-4 w-4 shrink-0 sm:mt-0.5 sm:h-5 sm:w-5 ${icon}`} aria-hidden="true" />
          {t}
        </li>
      ))}
    </ul>
  );
}
