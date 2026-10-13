import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllTruckCities,
  getAllTruckStateParams,
  TRUCK_CATEGORIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, Shield, MapPin, Truck, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckStateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    return {
      title: "Commercial Truck Passing & AIS 140 VLTD | NViQ",
      description: "Doorstep AIS 140 GPS fitment and RTO fitness passing for commercial trucks.",
    };
  }

  const title = "Rajasthan Truck Passing & AIS 140 VLTD Fitment | DMG Khanij e-Ravanna Approved | NViQ";
  const description = "Govt-approved AIS 140 GPS fitment for commercial trucks, marble trollas, bajri tippers, and cement bulkers across Rajasthan. Instant 1-hour Vahan 4.0 certificate & DMG Khanij Online whitelist.";

  return {
    title,
    description,
    keywords: [
      "rajasthan truck passing gps",
      "ais 140 fitment rajasthan",
      "dmg khanij e-ravanna gps tracker",
      "marble trolla gps passing",
      "bajri dumper fitness certificate",
      "transport nagar truck gps fitment",
      "rto passing certificate rajasthan",
      "commercial vehicle vltd rajasthan",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}`,
    },
  };
}

export default async function TruckPassingStatePage({ params }: Props) {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    notFound();
  }

  const cities = getAllTruckCities();
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: "Rajasthan Hubs", item: `https://www.naviqbharat.com/truck-passing/${resolved.state}` },
  ];

  const stateFaqs = [
    {
      q: "Which truck categories in Rajasthan are legally required to install AIS 140 VLTD?",
      a: "Under MoRTH norms and Rajasthan Department of Mines & Geology (DMG) orders, all commercial goods vehicles including marble trollas, sand/bajri dumpers, cement bulkers, hazardous tankers, and passenger coaches must have an active AIS 140 device with 2 panic buttons to pass annual fitness.",
    },
    {
      q: "How does NViQ help truck owners avoid ₹25,000+ illegal mining fines in Rajasthan?",
      a: "Our devices are whitelisted on the Rajasthan DMG Khanij Online Portal (mines.rajasthan.gov.in). Once fitted, our system automatically verifies vehicle telemetry, allowing seamless generation of e-Ravanna transit passes.",
    },
    {
      q: "How quickly is the fitment certificate synced to Vahan 4.0?",
      a: "Our technician conducts panic button live tests upon installation. The digital test certificate is pushed to Vahan 4.0 within 60 minutes, enabling immediate fitness passing at your RTO.",
    },
    {
      q: "Do you provide on-site fitment at Transport Nagars and truck dhabas?",
      a: "Yes. Our mobile technician teams service all major Transport Nagars across Jaipur, Kishangarh Marble Mandi, Bhilwara Pur Road, Chittorgarh Nimbahera, Jodhpur Basni, and Bhiwadi within 1 to 2 hours.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle="Rajasthan Truck Passing & AIS 140 VLTD Fitment"
        description="Doorstep AIS 140 fitment for commercial trucks, marble trollas, bajri dumpers, and bulkers across Rajasthan."
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}`}
        locationName="Rajasthan"
        faqs={stateFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href="/rto-partner" className="hover:text-gray-900 transition-colors">RTO Partner Network</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">Rajasthan Truck Passing</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge="Rajasthan Fleet Passing"
        title="Rajasthan Truck Passing & AIS 140 GPS Fitment"
        subtitle="Doorstep fitment for Marble Trollas, Bajri Tippers, Bulkers & Freight Fleets across Rajasthan. 60-minute Vahan 4.0 certificate and DMG Khanij e-Ravanna whitelist."
        highlights={[
          "Doorstep technician service at Transport Nagars & parking yards",
          "Guaranteed 60-minute certificate sync to Vahan 4.0",
          "Whitelisted for Rajasthan DMG Khanij e-Ravanna transit passes",
        ]}
        locationTag="Rajasthan"
        truckTypeTag="Heavy Commercial Fleets"
      />

      {/* Body Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName="Rajasthan" />

        {/* Truck Cities Grid */}
        <RajasthanTruckCitiesGrid />

        {/* Truck Categories Grid */}
        <TruckCategoryGrid />

        {/* Wholesale Banner */}
        <div className="my-10">
          <RtoConsultantBanner locationName="Rajasthan Transport Corridors" />
        </div>

        {/* FAQ Accordion */}
        <div className="my-12">
          <VltdFaqAccordion faqs={stateFaqs} locationName="Rajasthan" />
        </div>
      </div>
    </main>
  );
}
