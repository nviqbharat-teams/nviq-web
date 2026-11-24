import Link from "next/link";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Check, MessageCircle, PhoneCall, X } from "lucide-react";
import TravelHero from "@/components/home/travel-hero";
import AppPreview from "@/components/home/app-preview";
import { SEGMENTS } from "@/data/segments";
import { TOOLS } from "@/components/tools/tool-page";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, whatsappHref } from "@/lib/contact";
import { HOME_FAQS as FAQS } from "@/data/faqs";

// Home page. Written for a vehicle owner reading on a phone: say what we do in
// plain words, let them find their own problem, show exactly what they get and
// what happens after, answer the doubts, and keep one next step in reach.
// Only claims already made elsewhere on the site; no prices (unlocked on WhatsApp).

const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
});

const WA_GENERAL = whatsappHref("Hi NViQ, I need AIS 140 VLTD / GPS for my vehicle. Please share today's price.");

// What a visitor came for, in their own words.
const NEEDS = [
  {
    problem: "The RTO is asking for a VLTD certificate for fitness or permit.",
    answer: "We fit a government-approved AIS 140 tracker with panic buttons at your place and update Vahan in about an hour.",
    link: "AIS 140 VLTD fitment",
    href: "/vltd",
  },
  {
    problem: "I want to see where my vehicles are and stop fuel theft.",
    answer: "Watch every vehicle live on your phone, see where it went, and get an alert the moment a driver overspeeds or leaves the route.",
    link: "GPS tracking for fleets",
    href: "/gps-tracking",
  },
  {
    problem: "I need fitness, permit, RC transfer or NOC done.",
    answer: "Tell us what the RTO wants. We check your papers, fit the tracker if needed, and handle the filing while you stay on the road.",
    link: "RTO services",
    href: "/rto-services",
  },
  {
    problem: "I'm an RTO agent and want better rates for my customers.",
    answer: "Get wholesale prices, issue certificates from the partner app, and keep your margin. Our technician does the fitting.",
    link: "RTO Partner Program",
    href: "/rto-partner",
  },
];

// The real order of events, so the numbers mean something.
const STEPS = [
  { title: "Send your vehicle number", text: "On WhatsApp, a call, or the form above. We reply with today's price and a time that suits you." },
  { title: "Technician comes to you", text: "At your home, yard, school or transport nagar. Fitting takes about 30–45 minutes." },
  { title: "Vahan is updated", text: "We activate the device and push it to Vahan. Your certificate is ready in about an hour." },
  { title: "Track from your phone", text: "Log in to the NViQ app the same day and see your vehicle live." },
];

const INCLUDED = [
  ["ARAI / ICAT certified AIS 140 device", "The tracker the RTO accepts, with 2 emergency panic buttons."],
  ["Fitting at your place", "A trained technician comes to you. No trip to a workshop."],
  ["Vahan activation and certificate", "Linked to Vahan, and to state mining portals where your vehicle needs it."],
  ["The NViQ tracking app", "Live location, route history, alerts and reports on your phone."],
  ["Lifetime replacement warranty", "If the device stops working, we replace it."],
  ["One number for help", `Call or WhatsApp ${SALES_PHONE_DISPLAY} for anything, before or after fitting.`],
];

const NOT_NEEDED = [
  "Stand in RTO queues to get the certificate updated",
  "Find a dealer, then a mechanic, then someone for Vahan",
  "Buy a new device when the old one fails",
];

const APP_FEATURES = [
  ["See it live", "Location refreshes every 5 seconds, even on highways and in mines."],
  ["Know where it went", "Full route history with every stop, halt and idle time."],
  ["Get told when something's wrong", "Alerts for overspeed, leaving a set area, and ignition on at night."],
  ["Stop theft", "Cut the engine from your phone if the vehicle is taken."],
  ["Share a live link", "Send your customer, a parent or the family a link that shows the vehicle moving."],
  ["Trip and km reports", "Daily distance and trip reports for billing and fuel checks."],
];

const DIRECTORY = [
  {
    title: "Top transport states",
    links: [
      ["Rajasthan", "/rto-partner/rajasthan"],
      ["Gujarat", "/vltd/gujarat"],
      ["Maharashtra", "/rto-partner/maharashtra"],
      ["Delhi NCR", "/rto-partner/delhi"],
      ["Haryana", "/vltd/haryana"],
      ["Madhya Pradesh", "/vltd/madhya-pradesh"],
      ["Uttar Pradesh", "/rto-partner/uttar-pradesh"],
      ["Punjab", "/rto-partner/punjab"],
      ["Karnataka", "/rto-partner/karnataka"],
      ["Tamil Nadu", "/rto-partner/tamil-nadu"],
    ],
  },
  {
    title: "Industrial and mining hubs",
    links: [
      ["Jaipur (RJ-14 / RJ-45)", "/truck-passing/rajasthan/jaipur"],
      ["Kishangarh marble (RJ-42)", "/truck-passing/rajasthan/kishangarh"],
      ["Chittorgarh cement (RJ-09)", "/truck-passing/rajasthan/chittorgarh"],
      ["Bhilwara mining (RJ-06)", "/truck-passing/rajasthan/bhilwara"],
      ["Jodhpur stone (RJ-19)", "/truck-passing/rajasthan/jodhpur"],
      ["Kota freight (RJ-20)", "/truck-passing/rajasthan/kota"],
      ["Alwar transport (RJ-02)", "/truck-passing/rajasthan/alwar"],
      ["Ahmedabad (GJ-01)", "/vltd/gujarat/ahmedabad"],
      ["Morbi ceramic (GJ-36)", "/vltd/gujarat/morbi/gj-36"],
      ["Gurugram (HR-26)", "/vltd/haryana/gurugram/hr-26"],
    ],
  },
  {
    title: "Truck fitment",
    links: [
      ["Marble trolla passing", "/trucks/marble-trolla"],
      ["Mining dumper GPS", "/trucks/mining-dumper"],
      ["Bajri tipper fitment", "/trucks/bajri-truck"],
      ["Cement bulker AIS 140", "/trucks/cement-bulker"],
      ["Rajasthan truck passing", "/truck-passing/rajasthan"],
    ],
  },
];

const VLTD_LABEL: Record<string, string> = {
  mandatory: "VLTD required",
  depends: "Depends on permit",
  recommended: "Recommended",
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.naviqbharat.com/#website",
      url: "https://www.naviqbharat.com",
      name: "NViQ Bharat",
      description: "AIS 140 VLTD & Mines GPS Tracker Platform India",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.naviqbharat.com/vltd?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.naviqbharat.com/#organization",
      name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
      alternateName: "NViQ Bharat",
      url: "https://www.naviqbharat.com",
      logo: "https://www.naviqbharat.com/logo.jpeg",
      telephone: SALES_PHONE_DISPLAY,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SALES_PHONE_DISPLAY,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "Hindi"],
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://www.naviqbharat.com/#vltd-product",
      name: "NViQ AIS 140 VLTD & Mines GPS Tracker",
      image: "https://www.naviqbharat.com/logo.jpeg",
      description:
        "Government-approved AIS 140 GPS tracker for commercial vehicles, mining tippers, and dumpers with emergency panic buttons and Vahan 4.0 sync.",
      brand: { "@type": "Brand", name: "NViQ" },
    },
    {
      "@type": "Service",
      "@id": "https://www.naviqbharat.com/#vltd-service",
      name: "AIS 140 VLTD Fitment & Mining Portal Whitelist Certification",
      serviceType: "Automotive GPS Tracking & Compliance Certification",
      provider: { "@id": "https://www.naviqbharat.com/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      description:
        "Doorstep installation of ARAI/ICAT certified AIS 140 devices with certificate upload to Vahan 4.0 and state mining portals (Rajasthan DMG, MP Khanij, Gujarat i-Khanij, Haryana e-Ravanna) in about 1 hour.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.naviqbharat.com/#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function SectionHead({ title, sub, dark = false }: { title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`font-display text-3xl font-semibold leading-[1.1] sm:text-[40px] ${dark ? "text-white" : "text-[#18202E]"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}

const wrap = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const link = "font-semibold text-[#1D5BD8] underline decoration-[#1D5BD8]/30 underline-offset-4 hover:decoration-[#1D5BD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]";

export default function Home() {
  return (
    <div className={`${display.variable} bg-white text-[#18202E]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />

      {/* HERO: travel-style banner with one search-style bar to start */}
      <TravelHero />

      {/* SELF-SELECTION: find your own problem in one glance */}
      <section className="py-16 sm:py-24" aria-labelledby="needs-title">
        <div className={wrap}>
          <div id="needs-title">
            <SectionHead title="What do you need help with?" sub="Pick the line that sounds like you. Each one leads to the full details and a price for your case." />
          </div>
          <ul className="mt-10 border-t-2 border-[#18202E]">
            {NEEDS.map((n) => (
              <li key={n.href} className="grid gap-3 border-b border-[#D9DEE6] py-7 md:grid-cols-[1fr_1.1fr_13rem] md:items-baseline md:gap-10">
                <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">&ldquo;{n.problem}&rdquo;</p>
                <p className="leading-relaxed text-slate-600">{n.answer}</p>
                <Link href={n.href} className={`${link} md:justify-self-end`}>
                  {n.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS: a real sequence, so numbered */}
      <section className="bg-[#F2F4F7] py-16 sm:py-24" aria-labelledby="steps-title">
        <div className={wrap}>
          <div id="steps-title">
            <SectionHead title="How it works" sub="Four steps, usually done the same day. You don't have to visit the RTO for the tracker." />
          </div>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#18202E] font-display text-xl font-bold text-[#60A5FA]">
                    {i + 1}
                  </span>
                  {i < STEPS.length - 1 && <span className="hidden h-[3px] flex-1 bg-[repeating-linear-gradient(90deg,#18202E_0_14px,transparent_14px_24px)] lg:block" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT'S INCLUDED: remove doubt about hidden costs and extra work */}
      <section className="py-16 sm:py-24" aria-labelledby="included-title">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
          <div>
            <div id="included-title">
              <SectionHead title="One price covers all of it" sub="No separate bills for the device, the fitting and the Vahan work. Here is everything you get." />
            </div>
            <div className="mt-10 border-l-4 border-[#1D5BD8] bg-[#F2F4F7] p-6">
              <h3 className="font-display text-lg font-semibold">What you won&apos;t have to do</h3>
              <ul className="mt-3 space-y-2.5">
                {NOT_NEEDED.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-slate-700">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <dl className="grid content-start border-t border-[#D9DEE6] sm:grid-cols-2 sm:gap-x-10">
            {INCLUDED.map(([title, text]) => (
              <div key={title} className="border-b border-[#D9DEE6] py-6">
                <dt className="flex items-start gap-2.5 font-semibold">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0F8A4B]" aria-hidden="true" />
                  {title}
                </dt>
                <dd className="mt-1.5 pl-[30px] leading-relaxed text-slate-600">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* AFTER FITMENT: why the tracker keeps paying back (retention) */}
      <section className="bg-[#F2F4F7] py-16 sm:py-24" aria-labelledby="app-title">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center`}>
          <div>
            <div id="app-title">
              <SectionHead
                title="After fitting, the tracker keeps working for you"
                sub="The certificate is only the start. The same device shows you, every day, where your vehicles are and how they are driven."
              />
            </div>
            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {APP_FEATURES.map(([title, text]) => (
                <div key={title}>
                  <dt className="font-display text-lg font-semibold">{title}</dt>
                  <dd className="mt-1 leading-relaxed text-slate-600">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <AppPreview />
        </div>
      </section>

      {/* WHO IT'S FOR: let each buyer see their vehicle named */}
      <section className="py-16 sm:py-24" aria-labelledby="segments-title">
        <div className={wrap}>
          <div id="segments-title">
            <SectionHead title="Made for your kind of vehicle" sub="See what the rules say for your vehicle and what tracking does for your business." />
          </div>
          <ul className="mt-10 grid border-t border-[#D9DEE6] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {SEGMENTS.map((s) => (
              <li key={s.slug} className="border-b border-[#D9DEE6]">
                <Link
                  href={`/gps-tracking/${s.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1D5BD8]"
                >
                  <span className="font-semibold group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4">{s.name}</span>
                  <span
                    className={`shrink-0 px-2 py-0.5 text-xs font-semibold ${
                      s.needsVltd === "mandatory" ? "bg-[#1D5BD8] text-white" : "bg-[#F2F4F7] text-slate-600"
                    }`}
                  >
                    {VLTD_LABEL[s.needsVltd]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST: specific facts, not adjectives */}
      <section className="bg-[#18202E] py-16 text-white sm:py-24" aria-labelledby="trust-title">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20`}>
          <div id="trust-title">
            <SectionHead dark title="Why owners stay with NViQ" sub="You fit a tracker once, but you'll need help for years. We built the service around that." />
          </div>
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            <div>
              <dt className="font-display text-4xl font-bold text-[#60A5FA]">10,000+</dt>
              <dd className="mt-2 leading-relaxed text-slate-300">vehicles across India already run on NViQ trackers.</dd>
            </div>
            <div>
              <dt className="font-display text-4xl font-bold text-[#60A5FA]">~1 hour</dt>
              <dd className="mt-2 leading-relaxed text-slate-300">from fitting to certificate on Vahan, so you lose a morning, not a week.</dd>
            </div>
            <div>
              <dt className="font-display text-xl font-semibold">Approved where it matters</dt>
              <dd className="mt-2 leading-relaxed text-slate-300">Vahan 4.0, Rajasthan DMG, MP Khanij, Gujarat i-Khanij and Haryana e-Ravanna.</dd>
            </div>
            <div>
              <dt className="font-display text-xl font-semibold">A device that&apos;s covered for life</dt>
              <dd className="mt-2 leading-relaxed text-slate-300">If it stops working, we replace it. One number to call, in Hindi or English.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FREE TOOLS: help before the sale builds trust */}
      <section className="py-16 sm:py-24" aria-labelledby="tools-title">
        <div className={wrap}>
          <div id="tools-title">
            <SectionHead title="Check before you spend" sub="Free tools, no sign-up. Get a clear answer in under a minute." />
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {TOOLS.map((t) => (
              <li key={t.href} className="border-t-2 border-[#18202E] pt-5">
                <Link href={t.href} className={`${link} font-display text-xl`}>
                  {t.name}
                </Link>
                <p className="mt-2 leading-relaxed text-slate-600">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ: answer the doubts that stop people from calling */}
      <section id="faq" className="bg-[#F2F4F7] py-16 sm:py-24" aria-labelledby="faq-title">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20`}>
          <div>
            <div id="faq-title">
              <SectionHead title="Questions people ask us" />
            </div>
            <p className="mt-4 leading-relaxed text-slate-600">
              Still unsure? Call{" "}
              <a href={SALES_TEL_HREF} data-track="home_faq_call" className={link}>
                {SALES_PHONE_DISPLAY}
              </a>
              , Monday to Saturday, 9 am to 7 pm.
            </p>
          </div>
          <div className="border-t border-[#C9D0DB]">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-[#C9D0DB]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-semibold text-[#18202E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1D5BD8] [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] leading-snug">{f.q}</span>
                  <span className="mt-0.5 font-display text-2xl leading-none text-[#1D5BD8] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL NUDGE: one clear next step */}
      <section className="bg-[#1D5BD8] py-14 sm:py-20">
        <div className={`${wrap} flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-[44px]">Fitness or permit due soon? Don&apos;t wait for the last day.</h2>
            <p className="mt-3 text-lg text-white/85">Send your vehicle number now and get a fitting slot that suits you.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="home_final_whatsapp"
              className="flex h-14 items-center justify-center gap-2 bg-[#0F8A4B] px-7 text-base font-bold text-white hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#18202E]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp us
            </a>
            <a
              href={SALES_TEL_HREF}
              data-track="home_final_call"
              className="flex h-14 items-center justify-center gap-2 bg-[#18202E] px-7 text-base font-bold text-white hover:bg-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#18202E]"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Call {SALES_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* DIRECTORY: local pages for people and crawlers */}
      <section className="border-t border-[#D9DEE6] py-14" aria-labelledby="directory-title">
        <div className={wrap}>
          <h2 id="directory-title" className="font-display text-2xl font-semibold">
            Find NViQ near your RTO
          </h2>
          <p className="mt-1 text-slate-600">
            Fitment and RTO help across all 36 states and UTs.{" "}
            <Link href="/rto-partner" className={link}>
              See every state
            </Link>
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {DIRECTORY.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold">{col.title}</h3>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {col.links.map(([name, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-slate-600 underline-offset-4 hover:text-[#1D5BD8] hover:underline">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
