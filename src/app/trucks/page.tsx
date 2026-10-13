import { Metadata } from "next";
import Link from "next/link";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, Truck, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Truck GPS & AIS 140 VLTD Passing Centers | NViQ",
  description: "Govt-approved AIS 140 GPS fitment for marble trollas, mining dumpers, bajri tippers, cement bulkers, and oil tankers. 1-hour Vahan 4.0 certificate & doorstep installation.",
  keywords: [
    "truck gps passing",
    "ais 140 fitment commercial trucks",
    "marble trolla tracker",
    "mining dumper panic button gps",
    "bajri truck e ravanna tracker",
    "cement bulker vltd",
    "oil tanker ais 140",
    "container trailer gps rajasthan",
  ],
  openGraph: {
    title: "Commercial Truck GPS & AIS 140 VLTD Passing Centers | NViQ",
    description: "Doorstep AIS 140 fitment for heavy commercial trucks with instant Vahan 4.0 passing certificates.",
    url: "https://www.naviqbharat.com/trucks",
    siteName: "NViQ Bharat",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.naviqbharat.com/trucks",
  },
};

export default function TrucksIndexPage() {
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Trucks & Fleet Categories", item: "https://www.naviqbharat.com/trucks" },
  ];

  const faqs = [
    {
      q: "Which commercial truck types are required to install AIS 140 GPS in India?",
      a: "Under MoRTH Notification GSR 1095(E), all commercial vehicles carrying goods (including multi-axle trailers, dumpers, tippers, petroleum tankers, and container carriers) as well as passenger transport (buses, luxury coaches, school vans) must have AIS 140 VLTD installed with emergency panic buttons for fitness certification.",
    },
    {
      q: "What is the difference between ordinary GPS and AIS 140 VLTD for trucks?",
      a: "Ordinary GPS trackers only offer vehicle tracking for the owner. AIS 140 VLTD is an ARAI/ICAT certified government-compliant device with dual emergency SOS buttons, internal battery backup, tamper detection, and encrypted live telemetry feeds routed to Parivahan Vahan 4.0 and state emergency monitoring command centers.",
    },
    {
      q: "How fast is the certificate uploaded to Vahan 4.0?",
      a: "Our certified technicians conduct live panic button testing and generate the Vahan 4.0 certificate within 60 minutes of installation.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle="Commercial Truck GPS & AIS 140 VLTD Passing Centers"
        description="Govt-approved AIS 140 GPS fitment for heavy commercial trucks, trailers, and dumpers."
        url="https://www.naviqbharat.com/trucks"
        locationName="India & Rajasthan"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href="/rto-partner" className="hover:text-gray-900 transition-colors">RTO Partner Network</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">Truck Categories</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge="Commercial Fleet AIS 140"
        title="Commercial Truck AIS 140 GPS Fitment"
        subtitle="Specialized GPS fitment protocols for Marble Trollas, Dumpers, Bajri Trucks, Bulkers, and Tankers across India. 60-minute Parivahan Vahan 4.0 certificate upload."
        highlights={[
          "Dual emergency SOS panic buttons with instant alert",
          "Guaranteed 60-minute digital certificate upload to Vahan 4.0",
          "Whitelisted for state mining portals (Rajasthan DMG Khanij, MP, Haryana)",
        ]}
        locationTag="National Highway Corridors"
        truckTypeTag="All Heavy Commercial Vehicles"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Grid */}
        <TruckCategoryGrid />

        {/* High Volume Trucking Corridors */}
        <RajasthanTruckCitiesGrid />

        {/* Wholesale Partner Banner */}
        <RtoConsultantBanner locationName="Rajasthan & Pan-India Transport Corridors" />

        {/* FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={faqs} locationName="Commercial Fleets & Trucks" />
        </div>
      </div>
    </main>
  );
}
