// Design kit for the product landing pages (VLTD, GPS tracking, RTO services,
// RTO partner). Same visual language as the home page: navy hero, road-sign
// display face, square edges, ruled lists instead of card grids, one blue band
// for the final call to action. Server components only.
import Link from "next/link";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Check, ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, whatsappHref } from "@/lib/contact";
import { HeroEyebrow, HeroHeadline, HeroIntro, HeroPoints } from "@/components/hero/hero-text";

export const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
});

export const wrap = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
export const textLink =
  "font-semibold text-[#1D5BD8] underline decoration-[#1D5BD8]/30 underline-offset-4 hover:decoration-[#1D5BD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]";

/** Root wrapper: loads the display face and sets the base colours. */
export function KitPage({ children }: { children: React.ReactNode }) {
  return <main className={`${display.variable} min-h-screen bg-white text-[#18202E]`}>{children}</main>;
}

export function SectionHead({ title, sub, dark = false, id }: { title: string; sub?: string; dark?: boolean; id?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className={`font-display text-3xl font-semibold leading-[1.1] sm:text-[40px] ${dark ? "text-white" : "text-[#18202E]"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-3 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}

const TONES = {
  white: "bg-white",
  grey: "bg-[#F2F4F7]",
  dark: "bg-[#18202E] text-white",
} as const;

export function Section({
  tone = "white",
  id,
  children,
  className = "",
  labelledBy,
}: {
  tone?: keyof typeof TONES;
  id?: string;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <div className={wrap}>{children}</div>
    </section>
  );
}

export type Crumb = { name: string; href?: string };

function HeroCrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-xs text-slate-400">
        {items.map((b, i) => (
          <li key={b.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />}
            {b.href ? (
              <Link href={b.href} className="hover:text-white hover:underline hover:underline-offset-4">
                {b.name}
              </Link>
            ) : (
              <span className="font-semibold text-slate-200" aria-current="page">
                {b.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Navy hero: plain promise on the left, the lead form on the right. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  highlight,
  intro,
  points,
  actions,
  children,
  formId = "quick-lead",
  notice,
}: {
  /** Optional strip above the breadcrumbs, e.g. "Looking for X instead?" */
  notice?: React.ReactNode;
  crumbs?: Crumb[];
  eyebrow: string;
  title: string;
  /** Phrase of the title to colour; auto-picked when omitted */
  highlight?: string;
  intro: string;
  points?: string[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
  formId?: string;
}) {
  return (
    <section className="bg-[#18202E] pt-16 text-white">
      <div className={`${wrap} pb-10 pt-5 sm:pb-16 sm:pt-6 lg:pb-20`}>
        {notice && <div className="mb-5">{notice}</div>}
        {crumbs && <HeroCrumbs items={crumbs} />}
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-8 sm:mt-8 sm:gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <HeroEyebrow>{eyebrow}</HeroEyebrow>
            <HeroHeadline
              title={title}
              highlight={highlight}
              className="mt-4 font-display text-[32px] font-bold leading-[1.06] sm:text-5xl sm:leading-[1.04] lg:text-[58px]"
            />
            <HeroIntro className="mt-4 sm:mt-5">{intro}</HeroIntro>
            {points && points.length > 0 && <HeroPoints points={points} className="mt-6 sm:mt-8" />}
            {actions && <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
          </div>
          {children && (
            <div id={formId} className="scroll-mt-24">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Square buttons used in heroes and the final band. */
export function WhatsAppButton({ message, label = "WhatsApp us", track }: { message: string; label?: string; track?: string }) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-track={track}
      className="flex h-14 items-center justify-center gap-2 bg-[#0F8A4B] px-7 text-base font-bold text-white hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}

export function CallButton({ track, label, onDark = true }: { track?: string; label?: string; onDark?: boolean }) {
  return (
    <a
      href={SALES_TEL_HREF}
      data-track={track}
      className={`flex h-14 items-center justify-center gap-2 px-7 text-base font-bold focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 ${
        onDark
          ? "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white"
          : "bg-[#18202E] text-white hover:bg-black focus-visible:outline-[#18202E]"
      }`}
    >
      <PhoneCall className="h-5 w-5" aria-hidden="true" />
      {label ?? `Call ${SALES_PHONE_DISPLAY}`}
    </a>
  );
}

export function AnchorButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex h-14 items-center justify-center gap-2 bg-[#1D5BD8] px-7 text-base font-bold text-white hover:bg-[#164BB5] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}

/** Numbered sequence with dashed connectors, as on the home page. */
export function Steps({ steps }: { steps: { title: string; text?: string }[] }) {
  const cols = steps.length >= 4 ? "lg:grid-cols-4" : steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <ol className={`mt-12 grid gap-10 sm:grid-cols-2 ${cols} lg:gap-8`}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#18202E] font-display text-xl font-bold text-[#60A5FA]">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span
                className="hidden h-[3px] flex-1 bg-[repeating-linear-gradient(90deg,#18202E_0_14px,transparent_14px_24px)] lg:block"
                aria-hidden="true"
              />
            )}
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
          {s.text && <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>}
        </li>
      ))}
    </ol>
  );
}

/** Two-column ruled list of ticked items with a short explanation each. */
export function TickList({ items, cols = 2 }: { items: { title: string; text: string }[]; cols?: 1 | 2 }) {
  return (
    <dl className={`grid content-start border-t border-[#D9DEE6] ${cols === 2 ? "sm:grid-cols-2 sm:gap-x-10" : ""}`}>
      {items.map((it) => (
        <div key={it.title} className="border-b border-[#D9DEE6] py-6">
          <dt className="flex items-start gap-2.5 font-semibold">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0F8A4B]" aria-hidden="true" />
            {it.title}
          </dt>
          <dd className="mt-1.5 pl-[30px] leading-relaxed text-slate-600">{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Left-ruled callout box, e.g. "Is VLTD mandatory?". */
export function Callout({ title, children, tone = "blue" }: { title: string; children: React.ReactNode; tone?: "blue" | "green" }) {
  return (
    <div className={`border-l-4 bg-[#F2F4F7] p-6 ${tone === "blue" ? "border-[#1D5BD8]" : "border-[#0F8A4B]"}`}>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <div className="mt-2 leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

/** Ruled list of links with an optional tag on the right (vehicle types, services, states). */
export function LinkRows({
  items,
  cols = 3,
}: {
  items: { href: string; name: string; tag?: string; strong?: boolean; text?: string; current?: boolean }[];
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid border-t border-[#D9DEE6] sm:gap-x-10 ${grid}`}>
      {items.map((it) =>
        it.text ? (
          <li key={it.href} className="flex border-b border-[#D9DEE6]">
            <Link
              href={it.href}
              aria-current={it.current ? "page" : undefined}
              className={`group flex w-full flex-col gap-2 py-5 ${focusRing}`}
            >
              {it.tag && (
                <span
                  className={`self-start px-2 py-0.5 text-xs font-semibold leading-snug ${
                    it.strong ? "bg-[#1D5BD8] text-white" : "bg-[#F2F4F7] text-slate-600"
                  }`}
                >
                  {it.tag}
                </span>
              )}
              <span
                className={`font-semibold leading-snug group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4 ${
                  it.current ? "text-[#1D5BD8]" : ""
                }`}
              >
                {it.name}
              </span>
              <span className="text-sm leading-relaxed text-slate-600 line-clamp-3">{it.text}</span>
            </Link>
          </li>
        ) : (
        <li key={it.href} className="border-b border-[#D9DEE6]">
          <Link
            href={it.href}
            aria-current={it.current ? "page" : undefined}
            className={`group flex items-start justify-between gap-4 py-4 ${focusRing}`}
          >
            <span className="min-w-0">
              <span
                className={`font-semibold group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4 ${
                  it.current ? "text-[#1D5BD8]" : ""
                }`}
              >
                {it.name}
              </span>
              {it.text && <span className="mt-1 block text-sm leading-relaxed text-slate-600 line-clamp-2">{it.text}</span>}
            </span>
            {it.tag && (
              <span
                className={`mt-0.5 shrink-0 px-2 py-0.5 text-xs font-semibold ${
                  it.strong ? "bg-[#1D5BD8] text-white" : "bg-[#F2F4F7] text-slate-600"
                }`}
              >
                {it.tag}
              </span>
            )}
          </Link>
        </li>
        ),
      )}
    </ul>
  );
}

/** Inline row of square chips (states, related pages). */
export function ChipLinks({ items }: { items: { href: string; name: string; current?: boolean }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            aria-current={it.current ? "page" : undefined}
            className={`inline-block border px-3.5 py-1.5 text-sm font-semibold transition-colors ${focusRing} ${
              it.current
                ? "border-[#18202E] bg-[#18202E] text-white"
                : "border-[#C9D0DB] bg-white text-[#18202E] hover:border-[#1D5BD8] hover:text-[#1D5BD8]"
            }`}
          >
            {it.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Big numbers / facts on navy. */
export function FactGrid({ facts }: { facts: { value: string; text: string; big?: boolean }[] }) {
  return (
    <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      {facts.map((f) => (
        <div key={f.value}>
          <dt className={f.big === false ? "font-display text-xl font-semibold" : "font-display text-4xl font-bold text-[#60A5FA]"}>{f.value}</dt>
          <dd className="mt-2 leading-relaxed text-slate-300">{f.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FaqSection({
  faqs,
  title = "Questions people ask us",
  track = "faq_call",
  tone = "grey",
}: {
  faqs: { q: string; a: string }[];
  title?: string;
  track?: string;
  tone?: "white" | "grey";
}) {
  return (
    <Section tone={tone} id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <SectionHead id="faq-title" title={title} />
          <p className="mt-4 leading-relaxed text-slate-600">
            Still unsure? Call{" "}
            <a href={SALES_TEL_HREF} data-track={track} className={textLink}>
              {SALES_PHONE_DISPLAY}
            </a>
            , Monday to Saturday, 9 am to 7 pm.
          </p>
        </div>
        <div className="border-t border-[#C9D0DB]">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-[#C9D0DB]">
              <summary
                className={`flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-semibold text-[#18202E] ${focusRing} [&::-webkit-details-marker]:hidden`}
              >
                <span className="text-[17px] leading-snug">{f.q}</span>
                <span
                  className="mt-0.5 font-display text-2xl leading-none text-[#1D5BD8] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Blue band with one clear next step. */
export function FinalCta({
  title,
  sub,
  whatsappMessage,
  track = "final",
  primary,
}: {
  title: string;
  sub: string;
  whatsappMessage: string;
  track?: string;
  /** Optional replacement for the WhatsApp button, e.g. an "Apply" anchor. */
  primary?: React.ReactNode;
}) {
  return (
    <section className="bg-[#1D5BD8] py-14 sm:py-20">
      <div className={`${wrap} flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between`}>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-[44px]">{title}</h2>
          <p className="mt-3 text-lg text-white/85">{sub}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          {primary ?? <WhatsAppButton message={whatsappMessage} track={`${track}_whatsapp`} />}
          <CallButton track={`${track}_call`} onDark={false} />
        </div>
      </div>
    </section>
  );
}

/** Small "Find us near you" directory band at the very bottom. */
export function DirectoryBand({ title, sub, children }: { title: string; sub?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#D9DEE6] py-14" aria-labelledby="directory-title">
      <div className={wrap}>
        <h2 id="directory-title" className="font-display text-2xl font-semibold">
          {title}
        </h2>
        {sub && <p className="mt-1 text-slate-600">{sub}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
