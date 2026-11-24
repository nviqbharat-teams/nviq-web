import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  CheckCircle2,
  Clock,
  FileCheck2,
  Handshake,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Truck,
  Wrench,
} from "lucide-react";
import QuickLeadForm from "@/components/quick-lead-form";
import { BASE_URL, Breadcrumbs, FaqJsonLd, FaqList } from "@/components/landing/landing-shared";
import { SEGMENTS } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";
import { TOOLS } from "@/components/tools/tool-page";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, whatsappHref } from "@/lib/contact";
import { HeroEyebrow } from "@/components/hero/hero-text";

// One page that explains everything NViQ does, in plain words a vehicle owner,
// school, transporter or RTO agent understands at first read. Every section ends
// in one clear next step (form, call or WhatsApp) so no visitor leaves without a way
// to ask for a price. Claims here match the rest of the site; no invented numbers.

const title = "All NViQ Services: AIS 140 VLTD, GPS Tracking, RTO Work & Partner Program";
const description =
  "Everything NViQ does in one place: AIS 140 VLTD fitment with Vahan certificate in about 1 hour, GPS tracking for every commercial vehicle, fitness, permit and RC work, and wholesale rates for RTO agents. Call or WhatsApp for today's price.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: { title, description, url: `${BASE_URL}/services`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const TRUST = [
  { icon: ShieldCheck, label: "ARAI / ICAT certified", sub: "AIS 140 devices" },
  { icon: Clock, label: "About 1 hour", sub: "to your Vahan certificate" },
  { icon: Wrench, label: "Doorstep fitment", sub: "at your home, yard or school" },
  { icon: BadgeCheck, label: "10,000+ vehicles", sub: "already on NViQ" },
];

// The navbar headings, each explained in plain words.
const SERVICES = [
  {
    id: "vltd",
    icon: ShieldCheck,
    tag: "Most asked",
    name: "VLTD Fitment (AIS 140)",
    oneLine: "The government-approved tracker your RTO asks for, fitted and linked to Vahan the same day.",
    plain:
      "If your vehicle carries passengers or goods on a permit, the RTO will not pass fitness or issue a permit without an AIS 140 tracker and panic button. We bring the device, fit it at your place, and push it to Vahan. You get the certificate in about an hour, not in days.",
    who: ["Trucks & national-permit goods vehicles", "Buses, school vans & tourist coaches", "Taxis & cabs", "Ambulances & tankers"],
    gets: ["Certified AIS 140 device + panic buttons", "Fitting at your doorstep", "Vahan activation & certificate", "Lifetime replacement warranty"],
    href: "/vltd",
    cta: "See VLTD by state & RTO",
    wa: "Hi NViQ, I need AIS 140 VLTD fitment. Please share today's price.",
  },
  {
    id: "gps",
    icon: MapPin,
    tag: "Save fuel & stop theft",
    name: "GPS Tracking for Your Fleet",
    oneLine: "See every vehicle live on your phone, and know where your money goes on every trip.",
    plain:
      "Open the app and see where each vehicle is right now, where it went today, how fast it drove and how long it stood idle. Get an alert the moment a driver overspeeds, leaves the route or the engine starts at night. Share a live location link with your customer or a parent in one tap.",
    who: ["Transporters with 1 to 500+ trucks", "Schools & colleges", "Bus & cab operators", "Dealers, staff transport, mining tippers"],
    gets: ["Live location every 5 seconds", "Route history & trip reports", "Overspeed, geofence & ignition alerts", "Engine cut-off for theft"],
    href: "/gps-tracking",
    cta: "Pick your vehicle type",
    wa: "Hi NViQ, I want GPS tracking for my vehicles. Please share the price.",
  },
  {
    id: "rto",
    icon: FileCheck2,
    tag: "No RTO queues",
    name: "RTO Services",
    oneLine: "Fitness, permits, RC transfer and NOC, done for you, with no running between counters.",
    plain:
      "Tell us what the RTO wants from you. We check your papers, tell you what is missing, fit the VLTD if the work needs it, and handle the filing. You stay on the road; we handle the office work.",
    who: ["Owners renewing fitness", "Anyone needing a new permit", "Buyers & sellers transferring an RC", "Moving a vehicle to another state"],
    gets: ["Document check before you go", "VLTD fitted if the work needs it", "Vahan filing & follow-up", "One person to call for updates"],
    href: "/rto-services",
    cta: "See all RTO work",
    wa: "Hi NViQ, I need help with RTO work (fitness / permit / transfer).",
  },
  {
    id: "partner",
    icon: Handshake,
    tag: "Earn with us",
    name: "RTO Partner Program",
    oneLine: "For RTO agents and consultants: wholesale rates, fast fitment, and more profit on every vehicle.",
    plain:
      "Your customers already ask you for VLTD. Send them to us at wholesale price, keep your margin, and let our technician do the fitting while you keep the customer. No stock to hold and no rejections to fight.",
    who: ["RTO agents & consultants", "Vehicle dealers", "Insurance & finance agents", "Fleet service shops"],
    gets: ["Wholesale dealer rates", "Certificates issued from the mobile app", "Technician support near your RTO", "Your own partner badge for your shop"],
    href: "/rto-partner",
    cta: "Become a partner",
    wa: "Hi NViQ, I am an RTO agent. I want to join the partner program.",
  },
  {
    id: "tools",
    icon: Smartphone,
    tag: "Free, no sign-up",
    name: "Free Tools",
    oneLine: "Answers in seconds before you spend a rupee.",
    plain:
      "Not sure if your vehicle needs VLTD? Not sure which papers to carry for fitness? Use our free checkers. Pick your vehicle and state, and get a clear answer with the reason.",
    who: ["First-time vehicle owners", "Owners facing fitness soon", "Agents checking for customers", "Anyone comparing prices"],
    gets: TOOLS.map((t) => t.name),
    href: "/tools",
    cta: "Open free tools",
    wa: "Hi NViQ, I used your free tool and need help with my vehicle.",
  },
] as const;

const STEPS = [
  { n: "1", title: "Tell us your vehicle", text: "Share your number and vehicle count. Takes 20 seconds." },
  { n: "2", title: "Get your price on WhatsApp", text: "Your exact all-inclusive price within minutes. No hidden charges." },
  { n: "3", title: "We come to you", text: "Our technician fits the device at your place, at your time." },
  { n: "4", title: "Certificate in about 1 hour", text: "Vahan updated. Your vehicle is legal and back on the road." },
];

// Why customers stay after the first fitment.
const AFTER_SALE = [
  { icon: ShieldCheck, title: "Lifetime replacement warranty", text: "Device stops working from normal wear? We replace and refit it free." },
  { icon: Clock, title: "Lifetime plan, no renewals", text: "Pay once and keep tracking. No monthly bill to remember." },
  { icon: Bell, title: "Alerts that protect your money", text: "Overspeed, idling, night ignition and route alerts, straight to your phone." },
  { icon: MapPin, title: "Live location sharing", text: "Send a live link to your customer, school parents or your family in one tap." },
  { icon: PhoneCall, title: "Real people on call & WhatsApp", text: "One number for sales, fitment and support. No ticket queues." },
  { icon: Truck, title: "Grows with your fleet", text: "Add your next vehicle any time. One app for every vehicle you own." },
];

const FAQS = [
  {
    q: "Is VLTD really compulsory for my vehicle?",
    a: "Under CMVR Rule 125H, public service vehicles (buses, taxis, school vans) and national-permit goods vehicles need an AIS 140 VLTD with panic buttons. Without it, most RTOs will not pass fitness or issue a permit. Use our free AIS 140 checker to see the answer for your exact vehicle and state.",
  },
  {
    q: "How fast will I get the Vahan certificate?",
    a: "In most cases about 1 hour after fitting, because we activate the device on Vahan right away. You do not need to visit the RTO for this.",
  },
  {
    q: "Do I have to bring my vehicle to you?",
    a: "No. Our technician comes to your home, yard, school or depot. For fleets we fit many vehicles in one visit.",
  },
  {
    q: "Why don't you show the price on the website?",
    a: "The price depends on how many vehicles you have and which plan you choose. Share your number and we send your exact all-inclusive price on WhatsApp within minutes, with no obligation.",
  },
  {
    q: "What if the device stops working later?",
    a: "Every NViQ device has a lifetime replacement warranty. If it fails through normal wear and tear, we replace and refit it free of charge.",
  },
  {
    q: "I am an RTO agent. How do I earn with NViQ?",
    a: "Join the RTO Partner Program. You get wholesale rates, our technicians do the fitting, and you keep your margin and your customer.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", item: BASE_URL },
          { name: "Our Services", item: `${BASE_URL}/services` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Services" }]} />

      {/* Hero: what we do, in one breath, with the form above the fold */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 sm:py-10 md:py-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <HeroEyebrow tone="light">Everything your commercial vehicle needs, in one place</HeroEyebrow>
            <h1 className="mt-4 text-balance text-[28px] sm:text-5xl font-extrabold sm:font-black tracking-tight text-gray-900 leading-[1.15] sm:leading-[1.1]">
              Keep your vehicle legal, tracked and earning.{" "}
              <span className="text-blue-600">We handle the rest.</span>
            </h1>
            <p className="mt-3 sm:mt-5 line-clamp-3 sm:line-clamp-none text-[15px] sm:text-lg text-gray-700 leading-relaxed">
              AIS 140 VLTD fitted at your doorstep with the Vahan certificate in about 1 hour. GPS tracking that saves
              fuel and stops theft. RTO work done without the queues. One team and one phone number for all of it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SALES_TEL_HREF}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700"
              >
                <PhoneCall className="h-4 w-4" /> Call {SALES_PHONE_DISPLAY}
              </a>
              <a
                href={whatsappHref("Hi NViQ, I want to know about your services and today's price.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp for Price
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <li key={label} className="rounded-xl border border-gray-200 bg-white p-3">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <div className="mt-2 text-sm font-black text-gray-900">{label}</div>
                  <div className="text-[11px] text-gray-500">{sub}</div>
                </li>
              ))}
            </ul>
          </div>
          <div id="quick-lead" className="lg:col-span-2 scroll-mt-24">
            <QuickLeadForm topic="All services (services hub)" source="services_hub_hero" productOfInterest="general" />
          </div>
        </div>
      </section>

      {/* Jump links: one tap to the service the visitor came for */}
      <nav aria-label="Services" className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto whitespace-nowrap">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-700"
            >
              {s.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Each service: what it is, who it is for, what you get, next step */}
        <div className="py-12 space-y-10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <section
                key={s.id}
                id={s.id}
                className={`scroll-mt-32 rounded-3xl border p-6 sm:p-8 ${i % 2 === 0 ? "border-gray-200 bg-white" : "border-blue-100 bg-blue-50/40"}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">{s.tag}</span>
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight">{s.name}</h2>
                <p className="mt-2 text-lg font-semibold text-blue-700">{s.oneLine}</p>
                <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">{s.plain}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Who it is for</h3>
                    <ul className="mt-3 space-y-2">
                      {s.who.map((w) => (
                        <li key={w} className="flex gap-2 text-sm text-gray-800">
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">What you get</h3>
                    <ul className="mt-3 space-y-2">
                      {s.gets.map((g) => (
                        <li key={g} className="flex gap-2 text-sm text-gray-800">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {s.id === "gps" && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {SEGMENTS.map((seg) => (
                      <Link
                        key={seg.slug}
                        href={`/gps-tracking/${seg.slug}`}
                        className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-400"
                      >
                        {seg.name}
                      </Link>
                    ))}
                  </div>
                )}
                {s.id === "rto" && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {RTO_SERVICES.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/rto-services/${r.slug}`}
                        className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-400"
                      >
                        {r.short}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref(s.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                  </a>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:border-blue-500"
                  >
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        {/* How it works */}
        <section className="py-12 border-t border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">From first message to certificate, in 4 steps</h2>
          <p className="mt-2 text-gray-600">No RTO visit. No waiting for days. No paperwork you don&apos;t understand.</p>
          <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((st) => (
              <li key={st.n} className="rounded-2xl border border-gray-200 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">{st.n}</span>
                <h3 className="mt-4 font-black text-gray-900">{st.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{st.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* After the sale: why customers stay */}
        <section className="py-12 border-t border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">We don&apos;t disappear after the fitting</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            The fitting is day one. Here is what you keep getting for as long as the vehicle runs.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AFTER_SALE.map(({ icon: Icon, title: t, text }) => (
              <div key={t} className="rounded-2xl border border-gray-200 p-5">
                <Icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-3 font-black text-gray-900">{t}</h3>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
            <Link href="/case-studies" className="text-blue-700 hover:underline">Read real customer stories →</Link>
            <Link href="/about" className="text-blue-700 hover:underline">Who we are →</Link>
          </div>
        </section>

        <FaqList faqs={FAQS} title="Questions people ask before they call" />

        {/* Final CTA with a second form for visitors who scrolled to the end */}
        <section className="my-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center rounded-3xl bg-gray-900 p-6 sm:p-10 text-white">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Fitness due? Permit stuck? New vehicle?
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Send your number now. You get your exact price on WhatsApp in minutes, and we fix a fitment time that suits you.
            </p>
            <a
              href={SALES_TEL_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100"
            >
              <PhoneCall className="h-4 w-4" /> Call {SALES_PHONE_DISPLAY}
            </a>
          </div>
          <div className="lg:col-span-2 text-gray-900">
            <QuickLeadForm topic="All services (services hub, bottom)" source="services_hub_bottom" productOfInterest="general" />
          </div>
        </section>
      </div>
    </main>
  );
}
