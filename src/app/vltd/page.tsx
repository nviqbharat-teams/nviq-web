import { Metadata } from "next";
import QuickLeadForm from "@/components/quick-lead-form";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { VltdCompareSection, VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { getAllStates } from "@/data/vltd-india";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Steps,
  TickList,
  LinkRows,
  ChipLinks,
  FaqSection,
  FinalCta,
  DirectoryBand,
  textLink,
} from "@/components/landing/kit";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIS 140 & Mines VLTD GPS Tracker India | 1-Hour Certificate & RTO Fitment",
  description: "Govt-approved AIS 140 VLTD devices with emergency panic buttons. Same-day doorstep installation across Rajasthan, MP, Gujarat, Haryana & India. Whitelisted on Vahan 4.0 & State Mining Portals.",
  keywords: [
    "AIS 140 VLTD GPS India",
    "Mines VLTD GPS tracker",
    "Khanij portal GPS fitment",
    "RTO fitness passing certificate",
    "RTO consultant VLTD dealer",
    "Rajasthan DMG approved GPS",
    "MP Khanij approved VLTD",
  ],
  openGraph: {
    title: "AIS 140 & Mines VLTD GPS Tracker India | NViQ",
    description: "Govt-certified AIS 140 GPS with 1-hour certificate issuance and doorstep fitment.",
    url: "https://www.naviqbharat.com/vltd",
    siteName: "NViQ",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.naviqbharat.com/vltd",
  },
};

const GENERAL_FAQS = [
  {
    q: "What is an AIS 140 VLTD device, and why is it mandatory?",
    a: "AIS 140 (Automotive Industry Standard 140) is mandated by the Ministry of Road Transport and Highways (MoRTH) for all commercial transport vehicles, mining dumpers, tankers, and passenger buses. It requires real-time GPS tracking, emergency SOS buttons, and dual-SIM transmission to government emergency monitoring servers.",
  },
  {
    q: "How fast will I receive the fitment certificate for RTO fitness passing?",
    a: "Our fitment certificates are generated and synced to the Vahan 4.0 national portal within 60 minutes of installation, guaranteeing zero rejection during your vehicle passing or fitness inspection.",
  },
  {
    q: "Is NViQ GPS whitelisted on state mining portals like Rajasthan DMG, MP Khanij, and Haryana e-Ravanna?",
    a: "Yes. NViQ is pre-integrated and whitelisted on major state mining portals including Rajasthan DMG Khanij, MP Khanij Nigam Track, Gujarat i-Khanij, and Haryana Mines. Your vehicle will be immediately approved for e-Transit Pass / e-Ravanna generation.",
  },
  {
    q: "What are the benefits for RTO consultants partnering with NViQ?",
    a: "RTO agents receive confidential wholesale dealer pricing, strong profit margins per vehicle, a mobile certificate issuance portal, and priority technical assistance for their clients.",
  },
];

const WA_MESSAGE = "Hi NViQ, I need AIS 140 & Mines VLTD fitment for my fleet. Please send details.";

const STEPS = [
  { title: "Send your vehicle number", text: "On WhatsApp, a call or the form above. We check Vahan and reply with today's price." },
  { title: "Technician comes to you", text: "At your yard, depot, mine pit or transport nagar. Panic buttons wired and tested on the spot." },
  { title: "Certificate synced in ~1 hour", text: "We push the fitment certificate to Vahan 4.0 and the state mining portal where your vehicle needs it." },
  { title: "Fitness or permit goes ahead", text: "Take the vehicle for passing the same day. Track it live in the NViQ app from day one." },
];

const PILLARS = [
  {
    title: "Certificate in about 1 hour",
    text: "Passing or fitness due today? We sync your fitment certificate to Vahan 4.0 and the state mining portal within 60 minutes of installation.",
  },
  {
    title: "Same-day doorstep fitment",
    text: "Certified auto-electricians come to your transport yard, mine pit or depot. Same-day dispatch with certified panic-button wiring.",
  },
  {
    title: "ARAI / ICAT certified device",
    text: "AIS 140 VLTD with 2 emergency panic buttons and dual-SIM failover, so it keeps reporting in remote mines.",
  },
  {
    title: "Whitelisted on mining portals",
    text: "Pre-integrated with Rajasthan DMG, MP Khanij, Gujarat i-Khanij and Haryana e-Ravanna for e-Transit Pass generation.",
  },
];

export default function VltdIndexPage() {
  const states = getAllStates();

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "VLTD & Mining Hub", item: "https://www.naviqbharat.com/vltd" },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle="AIS 140 & Mines VLTD GPS Tracker India"
        description="Government-certified AIS 140 VLTD devices with 1-hour certificate & doorstep fitment."
        url="https://www.naviqbharat.com/vltd"
        locationName="India"
        faqs={GENERAL_FAQS}
        breadcrumbs={breadcrumbs}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "AIS 140 VLTD fitment" }]}
        eyebrow="ARAI & ICAT certified · Vahan 4.0 whitelisted"
        title="Govt-approved AIS 140 & mines VLTD, fitted at your door"
        highlight="fitted at your door"
        intro="Doorstep VLTD installation across Rajasthan, Madhya Pradesh, Gujarat, Haryana and the rest of India. Your fitment certificate reaches Vahan and the state mining portal in about an hour, so passing goes ahead."
        points={["2 emergency panic buttons", "Technician comes to you", "Certificate in ~1 hour", "Mining portals whitelisted"]}
      >
        <QuickLeadForm variant="kit" topic="AIS 140 VLTD fitment (VLTD hub)" source="vltd_hub" productOfInterest="ais_140_vltd" />
      </PageHero>

      {/* WHAT YOU GET */}
      <Section labelledBy="pillars-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHead
              id="pillars-title"
              title="Everything the RTO checks, in one visit"
              sub="Device, fitting, Vahan sync and mining-portal whitelisting are handled together. No second trip."
            />
            <p className="mt-6 text-slate-600">
              Not sure your vehicle needs it?{" "}
              <Link href="/tools/ais-140-checker" className={textLink}>
                Check in 10 seconds
              </Link>
            </p>
          </div>
          <TickList items={PILLARS} />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="grey" labelledBy="steps-title">
        <SectionHead id="steps-title" title="How fitment works" sub="Usually done the same day. You don't have to visit the RTO for the tracker." />
        <Steps steps={STEPS} />
      </Section>

      <VltdCompareSection locationName="your city" />

      {/* STATES */}
      <Section tone="grey" labelledBy="states-title">
        <SectionHead
          id="states-title"
          title="Pick your state"
          sub="See approved portals, RTO passing rules and local technician hubs for your state."
        />
        <div className="mt-10">
          <ChipLinks items={states.map((s) => ({ href: `/vltd/${s.slug}`, name: s.name }))} />
        </div>
      </Section>

      {/* TRUCKS */}
      <Section labelledBy="trucks-title">
        <SectionHead
          id="trucks-title"
          title="Fitment for your kind of truck"
          sub="AIS 140 fitment specs by vehicle category, and the main Rajasthan transport nagars we serve."
        />
        <div className="mt-10">
          <LinkRows
            cols={4}
            items={TRUCK_CATEGORIES.map((c) => ({ href: `/trucks/${c.slug}`, name: c.title, text: c.shortDesc, tag: c.wheelAxle }))}
          />
        </div>
        <h3 className="mt-14 font-display text-2xl font-semibold">Rajasthan trucking and RTO hubs</h3>
        <div className="mt-5">
          <LinkRows
            cols={4}
            items={RAJASTHAN_TRUCK_CITIES.map((c) => ({
              href: `/truck-passing/${c.stateSlug}/${c.slug}`,
              name: c.name,
              tag: Array.from(new Set(c.areas.map((a) => a.rtoCode))).join(", "),
            }))}
          />
        </div>
        <p className="mt-6">
          <Link href="/truck-passing/rajasthan" className={textLink}>
            See all of Rajasthan
          </Link>
        </p>
      </Section>

      <VltdPartnerSection />

      <FaqSection faqs={GENERAL_FAQS} track="vltd_faq_call" />

      <FinalCta
        title="Fitness or permit due soon? Get the certificate in an hour."
        sub="Certified AIS 140 with dual panic buttons, fitted at your depot or yard. Vahan 4.0 upload the same day."
        whatsappMessage={WA_MESSAGE}
        track="vltd_final"
      />

      {/* DIRECTORY */}
      <DirectoryBand title="All state and RTO fitment centres" sub="Doorstep fitment at every RTO listed below.">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state) => (
            <div key={state.slug}>
              <Link href={`/vltd/${state.slug}`} className="font-semibold hover:text-[#1D5BD8] hover:underline hover:underline-offset-4">
                {state.name}
              </Link>
              <ul className="mt-3 space-y-1.5 text-sm">
                {state.cities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/vltd/${state.slug}/${city.slug}`} className="text-slate-600 underline-offset-4 hover:text-[#1D5BD8] hover:underline">
                      {city.name} ({city.rtos.map((r) => r.code).join(", ")})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DirectoryBand>
    </KitPage>
  );
}
