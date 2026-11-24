import { Metadata } from "next";
import Link from "next/link";
import QuickLeadForm from "@/components/quick-lead-form";
import AppPreview from "@/components/home/app-preview";
import { BASE_URL, getPriorityStates } from "@/components/landing/landing-shared";
import { KitPage, PageHero, Section, SectionHead, Steps, LinkRows, ChipLinks, FinalCta, textLink } from "@/components/landing/kit";
import { SEGMENTS } from "@/data/segments";

const title = "GPS Tracker & AIS 140 VLTD for Taxis, Buses, Schools & Fleets";
const description =
  "AIS 140 VLTD and GPS tracking for taxis, school and college buses, bus operators, trucks, vehicle dealers, ambulances and tankers. Vahan certificate in about 1 hour. Call or WhatsApp for today's price.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/gps-tracking` },
  openGraph: { title, description, url: `${BASE_URL}/gps-tracking`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const VLTD_LABEL: Record<string, string> = {
  mandatory: "VLTD required",
  depends: "Depends on permit",
  recommended: "Recommended",
};

const APP_FEATURES = [
  ["See it live", "Location refreshes every 5 seconds, even on highways and in mines."],
  ["Know where it went", "Full route history with every stop, halt and idle time."],
  ["Get told when something's wrong", "Alerts for overspeed, leaving a set area, and ignition on at night."],
  ["Stop theft", "Cut the engine from your phone if the vehicle is taken."],
  ["Share a live link", "Send your customer, a parent or the family a link that shows the vehicle moving."],
  ["Trip and km reports", "Daily distance and trip reports for billing and fuel checks."],
];

const STEPS = [
  { title: "Pick your vehicle type", text: "See what the RTO needs for it, then send your number for today's price." },
  { title: "Technician comes to you", text: "At your home, yard, school or depot. Fitting takes about 30–45 minutes." },
  { title: "Vahan is updated", text: "Where the vehicle needs VLTD, the certificate is on Vahan in about an hour." },
  { title: "Track from your phone", text: "Log in to the NViQ app the same day and see every vehicle live." },
];

export default function GpsTrackingHub() {
  return (
    <KitPage>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "GPS & VLTD by vehicle" }]}
        eyebrow="Choose your vehicle type"
        title="GPS & AIS 140 VLTD for every commercial vehicle"
        highlight="for every commercial vehicle"
        intro="Taxi, school bus, tourist coach, truck or ambulance: pick your vehicle to see what the RTO needs, how tracking helps your business, and get today's price on WhatsApp."
        points={["Live location every 5 seconds", "Technician comes to you", "Vahan certificate in ~1 hour", "Lifetime replacement warranty"]}
      >
        <QuickLeadForm variant="kit" topic="VLTD / GPS (vehicle type hub)" source="segment_hub" />
      </PageHero>

      {/* SEGMENTS: let each buyer find their vehicle */}
      <Section labelledBy="segments-title">
        <SectionHead
          id="segments-title"
          title="Made for your kind of vehicle"
          sub="Each page explains what the rules say for that vehicle and what tracking does for your business."
        />
        <div className="mt-10">
          <LinkRows
            items={SEGMENTS.map((s) => ({
              href: `/gps-tracking/${s.slug}`,
              name: s.name,
              text: s.intro,
              tag: VLTD_LABEL[s.needsVltd],
              strong: s.needsVltd === "mandatory",
            }))}
          />
        </div>
        <p className="mt-6 text-slate-600">
          Not sure if yours needs VLTD?{" "}
          <Link href="/tools/ais-140-checker" className={textLink}>
            Use the free checker
          </Link>
        </p>
      </Section>

      {/* APP */}
      <Section tone="grey" labelledBy="app-title">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <SectionHead
              id="app-title"
              title="What tracking does for you every day"
              sub="The same device that clears the RTO shows you where your vehicles are and how they are driven."
            />
            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {APP_FEATURES.map(([t, text]) => (
                <div key={t}>
                  <dt className="font-display text-lg font-semibold">{t}</dt>
                  <dd className="mt-1 leading-relaxed text-slate-600">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <AppPreview />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section labelledBy="steps-title">
        <SectionHead id="steps-title" title="How it works" sub="Usually done the same day, wherever your vehicles are parked." />
        <Steps steps={STEPS} />
      </Section>

      {/* STATES */}
      <Section tone="grey" labelledBy="states-title">
        <SectionHead id="states-title" title="VLTD by state" sub="Rules, portals and RTO coverage for your state." />
        <div className="mt-10">
          <ChipLinks items={getPriorityStates().map((s) => ({ href: `/vltd/${s.slug}`, name: s.name }))} />
        </div>
      </Section>

      <FinalCta
        title="One tracker. Every vehicle on your phone."
        sub="Send your vehicle count and we reply with today's all-inclusive price, usually within minutes."
        whatsappMessage="Hi NViQ, I need AIS 140 VLTD / GPS. Please share today's price."
        track="gps_hub_final"
      />
    </KitPage>
  );
}
