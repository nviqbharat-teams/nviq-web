import Link from "next/link";
import { rtoLabel } from "@/lib/rto-label";
import { ChevronRight, PhoneCall, MessageCircle } from "lucide-react";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, whatsappHref } from "@/lib/contact";
import {
  getAllStates,
  getStateCode,
  MAIN_STATE_CODES,
  FOCUS_STATE_CODES,
  type StateData,
} from "@/data/vltd-india";
import { HeroEyebrow, HeroHeadline, HeroIntro } from "@/components/hero/hero-text";

export const BASE_URL = "https://www.naviqbharat.com";

/** Rajasthan first, then UP, GJ, DL, HR, PB, BR. */
export function getPriorityStates(): StateData[] {
  const order = [...MAIN_STATE_CODES, ...FOCUS_STATE_CODES];
  return order
    .map((code) => getAllStates().find((s) => getStateCode(s.slug) === code))
    .filter((s): s is StateData => Boolean(s));
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <div className="border-b border-gray-100 bg-gray-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
        {items.map((b, i) => (
          <span key={b.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
            {b.href ? (
              <Link href={b.href} className="hover:text-gray-900 transition-colors">
                {b.name}
              </Link>
            ) : (
              <span className="text-blue-600 font-bold">{b.name}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LandingHero({
  badge,
  title,
  intro,
  whatsappMessage,
  children,
  callLabel,
  whatsappLabel,
}: {
  badge: string;
  title: string;
  intro: string;
  whatsappMessage: string;
  children?: React.ReactNode;
  /** Button labels, e.g. Hindi on /hi pages */
  callLabel?: string;
  whatsappLabel?: string;
}) {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50/60 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 sm:py-10 md:py-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          <HeroEyebrow tone="light">{badge}</HeroEyebrow>
          <HeroHeadline
            tone="light"
            title={title}
            className="mt-4 text-[28px] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl sm:font-black"
          />
          <HeroIntro tone="light" className="mt-3 sm:mt-4 sm:text-base!">{intro}</HeroIntro>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
            <a
              href={SALES_TEL_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 sm:px-5"
            >
              <PhoneCall className="h-4 w-4" /> {callLabel ?? "Call"} {SALES_PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 sm:px-5"
            >
              <MessageCircle className="h-4 w-4" /> {whatsappLabel ?? "WhatsApp for Price"}
            </a>
          </div>
        </div>
        <div id="quick-lead" className="lg:col-span-2 scroll-mt-24">
          {children}
        </div>
      </div>
    </section>
  );
}

export function StateLinks({
  title,
  hrefFor,
  currentSlug,
}: {
  title: string;
  hrefFor: (stateSlug: string) => string;
  currentSlug?: string;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-black text-gray-900 mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {getPriorityStates().map((s) => (
          <Link
            key={s.slug}
            href={hrefFor(s.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              s.slug === currentSlug
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"
            }`}
          >
            {s.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Up to `limit` RTO links in a state (internal links into the /vltd RTO pages). */
export function StateRtoLinks({ state, limit = 16 }: { state: StateData; limit?: number }) {
  const rtos = state.cities.flatMap((c) => c.rtos.map((r) => ({ c, r }))).slice(0, limit);
  const total = state.cities.reduce((n, c) => n + c.rtos.length, 0);
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold text-[#18202E] sm:text-3xl">VLTD fitment at RTOs in {state.name}</h2>
      <p className="mt-2 mb-6 text-slate-600">
        We cover all {total} RTOs in {state.name}.{" "}
        <Link href={`/vltd/${state.slug}`} className="font-semibold text-[#1D5BD8] underline decoration-[#1D5BD8]/30 underline-offset-4 hover:decoration-[#1D5BD8]">
          See all {state.name} RTOs →
        </Link>
      </p>
      <div className="grid grid-cols-2 border-l border-t border-[#D9DEE6] sm:grid-cols-4 lg:grid-cols-8">
        {rtos.map(({ c, r }) => (
          <Link
            key={r.code}
            href={`/vltd/${state.slug}/${c.slug}/${r.slug}`}
            className="border-b border-r border-[#D9DEE6] bg-white px-3 py-2.5 hover:bg-[#F2F4F7]"
          >
            <div className="font-display text-base font-bold text-[#1D5BD8]">{r.code}</div>
            <div className="truncate text-xs font-semibold text-[#18202E]">{rtoLabel(r, c.name)}</div>
            {!rtoLabel(r, c.name).includes(c.name) && (
              <div className="truncate text-xs text-slate-500">{c.name}</div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-black text-gray-900 mb-4">{title}</h2>
      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none font-bold text-gray-900 flex justify-between gap-4">
              {f.q}
              <span className="text-blue-600 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FaqJsonLd({
  faqs,
  breadcrumbs,
}: {
  faqs: { q: string; a: string }[];
  breadcrumbs: { name: string; item: string }[];
}) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: b.item })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
