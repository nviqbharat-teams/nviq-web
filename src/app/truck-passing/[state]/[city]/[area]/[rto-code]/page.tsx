import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckAreaRtoDetail,
  getAllTruckPassingAreaRtoParams,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, ShieldCheck, MapPin, CheckCircle2, Clock, FileCheck2, Building2 } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
    city: string;
    area: string;
    "rto-code": string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckPassingAreaRtoParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getTruckAreaRtoDetail(
    resolved.state,
    resolved.city,
    resolved.area,
    resolved["rto-code"]
  );

  if (!match) {
    return {
      title: "RTO Fitness Passing & AIS 140 VLTD | NViQ",
      description: "Doorstep AIS 140 GPS fitment for commercial trucks.",
    };
  }

  const { city, area } = match;
  const title = `${area.rtoCode} (${area.rtoName}) Truck Passing & AIS 140 VLTD Fitment | ${area.name} | NViQ`;
  const description = `Get approved AIS 140 VLTD installation for ${area.rtoCode} vehicle fitness passing at ${area.name}, ${city.name}. 1-hour Vahan 4.0 certificate upload, Rajasthan DMG Khanij whitelist, & RTO agent wholesale margins.`;

  return {
    title,
    description,
    keywords: [
      `${area.rtoCode.toLowerCase()} truck passing gps`,
      `${area.rtoCode.toLowerCase()} fitness certificate ais 140`,
      `${area.rtoCode.toLowerCase()} rto office gps fitment`,
      `${area.name.toLowerCase()} ${area.rtoCode.toLowerCase()} gps`,
      `doorstep fitment ${area.rtoCode.toLowerCase()}`,
      `mining e-ravanna tracker ${area.rtoCode.toLowerCase()}`,
      `rto consultant wholesale ${area.rtoCode.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`,
    },
  };
}

export default async function TruckPassingAreaRtoPage({ params }: Props) {
  const resolved = await params;
  const match = getTruckAreaRtoDetail(
    resolved.state,
    resolved.city,
    resolved.area,
    resolved["rto-code"]
  );

  if (!match) {
    notFound();
  }

  const { city, area } = match;
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: city.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}` },
    { name: area.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}` },
    { name: area.rtoCode, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}` },
  ];

  const rtoFaqs = [
    {
      q: `What documents are needed to get the ${area.rtoCode} VLTD certificate?`,
      a: `Only your Vehicle Registration Certificate (RC) copy and chassis number. Our technician installs the device, runs the panic button live ping test, and generates the Parivahan Vahan 4.0 certificate within 60 minutes.`,
    },
    {
      q: `Will my vehicle pass inspection at ${area.rtoName} without GPS physically checked?`,
      a: `Once our digital certificate is uploaded, the Vahan 4.0 system marks the VLTD status as 'Verified & Active'. The RTO vehicle inspector verifies the online record and checks the physical device in the cabin during passing.`,
    },
    {
      q: `How can local RTO agents & passing brokers in ${area.name} buy at dealer prices?`,
      a: `Local RTO consultants in ${area.name} can sign up for the NViQ RTO Partner Program to unlock wholesale dealer pricing, self-issue certificates via mobile app, and get same-day technician dispatch.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${area.rtoCode} (${area.rtoName}) Truck Passing & AIS 140 VLTD Fitment`}
        description={`Approved AIS 140 fitment for ${area.rtoCode} commercial fitness passing at ${area.name}, ${city.name}.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`}
        locationName={`${area.rtoName} (${area.rtoCode}), ${city.name}`}
        faqs={rtoFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href={`/truck-passing/${resolved.state}`} className="hover:text-gray-900 transition-colors">Rajasthan</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href={`/truck-passing/${resolved.state}/${resolved.city}`} className="hover:text-gray-900 transition-colors">{city.name}</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href={`/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}`} className="hover:text-gray-900 transition-colors">{area.name}</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{area.rtoCode} Passing</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge={area.rtoCode}
        title={`${area.rtoCode} (${area.rtoName}) Truck Passing & GPS Fitment`}
        subtitle={`Doorstep AIS 140 VLTD fitment at ${area.name}. Fast 60-minute Parivahan Vahan 4.0 certificate sync and Rajasthan DMG Khanij e-Ravanna whitelist.`}
        highlights={[
          `Doorstep installation at ${area.name} within ${area.doorstepFitmentTime}`,
          `60-minute Parivahan Vahan 4.0 certificate upload`,
          `Whitelisted for Rajasthan DMG Khanij e-Ravanna transit passes`,
        ]}
        locationTag={`${area.rtoCode} • ${area.name}`}
        truckTypeTag={area.dominantFleets[0]}
        whatsappMessage={`Hi NViQ, I need AIS 140 VLTD fitment certificate for ${area.rtoCode} passing at ${area.name}.`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={`${area.rtoName} (${area.rtoCode})`} rtoCode={area.rtoCode} />

        {/* Passing Process Checklist */}
        <div className="my-10 bg-gray-50/70 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Step-by-Step {area.rtoCode} Commercial Vehicle Fitness Passing Protocol
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            How NViQ ensures seamless vehicle passing without physical re-inspection delays at {area.rtoName}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Step 1</span>
              <h4 className="font-bold text-sm text-gray-900 mt-2">Doorstep Fitment</h4>
              <p className="text-xs text-gray-500 mt-1">Technician reaches {area.name} yard within {area.doorstepFitmentTime} to wire the AIS 140 unit and 2 panic buttons.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Step 2</span>
              <h4 className="font-bold text-sm text-gray-900 mt-2">Live SOS Ping Test</h4>
              <p className="text-xs text-gray-500 mt-1">Panic buttons are triggered to verify immediate alert packet delivery to Rajasthan police and transport emergency servers.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Step 3</span>
              <h4 className="font-bold text-sm text-gray-900 mt-2">1-Hour Vahan 4.0 Sync</h4>
              <p className="text-xs text-gray-500 mt-1">Fitment certificate is automatically pushed to the Parivahan Sewa database under {area.rtoCode} jurisdiction.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Step 4</span>
              <h4 className="font-bold text-sm text-gray-900 mt-2">Fitness Clearance</h4>
              <p className="text-xs text-gray-500 mt-1">{area.rtoName} inspector verifies the active Vahan online certificate, and your fitness passing is stamped without delay.</p>
            </div>
          </div>
        </div>

        {/* Truck Categories Grid */}
        <TruckCategoryGrid />

        {/* Wholesale Banner */}
        <RtoConsultantBanner locationName={`${area.name}, ${city.name}`} rtoCode={area.rtoCode} />

        {/* Other Cities */}
        <RajasthanTruckCitiesGrid currentCitySlug={city.slug} />

        {/* FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={rtoFaqs} locationName={`${area.rtoCode} (${area.rtoName})`} />
        </div>
      </div>
    </main>
  );
}
