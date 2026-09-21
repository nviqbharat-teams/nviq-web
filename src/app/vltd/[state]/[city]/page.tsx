import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCityBySlug,
  getAllCityParams,
} from "@/data/vltd-locations";
import VltdHero from "@/components/vltd/vltd-hero";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdComplianceTable from "@/components/vltd/vltd-compliance-table";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { RtoGrid, CityGrid, StateGrid } from "@/components/vltd/vltd-nav-grids";
import { ChevronRight, Zap, Building2, PhoneCall } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export async function generateStaticParams() {
  return getAllCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    return {
      title: "AIS 140 VLTD Fitment Center | NViQ",
      description: "Government-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const { state, city } = match;
  const rtoCodesStr = city.rtos.map((r) => r.code).join(", ");
  const title = `AIS 140 & Mines VLTD Fitment Center in ${city.name} (${rtoCodesStr}) | NViQ`;
  const description = `Govt-approved AIS 140 GPS installation in ${city.name}. Same-day fitment across ${city.majorIndustries.join(", ")}, 1-hour Vahan & ${state.miningPortal.name} certificate. RTO Consultant wholesale rates.`;

  return {
    title,
    description,
    keywords: [
      `AIS 140 GPS in ${city.name}`,
      `VLTD fitment center ${city.name}`,
      `Mines GPS tracker ${city.name}`,
      `${city.name} RTO fitness passing`,
      ...city.rtos.map((r) => `${r.code} VLTD passing`),
      `RTO consultant GPS partner ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}`,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}`,
    },
  };
}

export default async function CityDetailPage({ params }: Props) {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    notFound();
  }

  const { state, city } = match;
  const rtoCodesStr = city.rtos.map((r) => r.code).join(", ");
  const locationLabel = `${city.name}, ${state.name}`;

  const faqs = [
    {
      q: `Where can I get AIS 140 VLTD fitted in ${city.name}?`,
      a: `NViQ provides doorstep technician fitment across ${city.name} including ${city.majorIndustries.join(", ")} and nearby transport yards within ${city.installationTurnaround}.`,
    },
    {
      q: `Which RTO offices in ${city.name} are covered for fitness passing?`,
      a: `We cover all RTO jurisdictions in ${city.name} (${rtoCodesStr}). Fitment certificates are pushed to the Vahan 4.0 database within 60 minutes for immediate fitness passing.`,
    },
    {
      q: `Is NViQ certified for ${state.miningPortal.name}?`,
      a: `Yes, all NViQ AIS 140 devices come pre-configured with emergency panic buttons and are fully whitelisted for e-Transit Pass generation under ${state.miningPortal.name}.`,
    },
    {
      q: `How can local RTO agents in ${city.name} get wholesale dealer margins?`,
      a: `RTO agents in ${city.name} can register for the NViQ RTO Partner Program to unlock wholesale rates from ₹2,699/unit, earn ₹1,500–₹3,000 per fitment, and issue certificates 24/7.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://naviqbharat.com" },
    { name: "VLTD Hub", item: "https://naviqbharat.com/vltd" },
    { name: state.name, item: `https://naviqbharat.com/vltd/${state.slug}` },
    { name: city.name, item: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}` },
  ];

  const whatsappUrl = `https://wa.me/919313200700?text=${encodeURIComponent(
    `Hi NViQ, I need AIS 140 & Mines VLTD fitment quotation for ${city.name} (${rtoCodesStr}). Please send quotation.`
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`AIS 140 & Mines VLTD Fitment in ${city.name} (${rtoCodesStr})`}
        description={`Government-approved AIS 140 GPS fitment in ${city.name}. 1-hour passing certificate & doorstep fitment.`}
        url={`https://naviqbharat.com/vltd/${state.slug}/${city.slug}`}
        locationName={locationLabel}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-gray-100 bg-gray-50/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <Link href="/vltd" className="hover:text-gray-900 transition-colors">VLTD & Mining</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <Link href={`/vltd/${state.slug}`} className="hover:text-gray-900 transition-colors">{state.name}</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-blue-600 font-bold">{city.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <VltdHero
        title={`AIS 140 & Mines VLTD Fitment in ${city.name}`}
        badge={`Serving ${rtoCodesStr} RTO Zones`}
        description={`Government-certified AIS 140 GPS tracker fitment across ${city.name}. Doorstep technician installation in ${city.installationTurnaround} with guaranteed 1-hour Vahan 4.0 & ${state.miningPortal.name} certificate sync.`}
        locationName={locationLabel}
        stateName={state.name}
        cityName={city.name}
        miningPortalName={state.miningPortal.name}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* RTO Code Picker Grid */}
        <RtoGrid state={state} city={city} />

        {/* Action Callout Card */}
        <div className="my-10 p-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/60 via-indigo-50/30 to-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full">
              Fast Doorstep Service in {city.name}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
              Need Same-Day Fitment in {city.name}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Our certified technicians are stationed near {city.majorIndustries.slice(0, 2).join(" and ")}. Get your fitment certificate ready for fitness inspection today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md text-sm transition-all"
            >
              <Zap className="h-4 w-4" />
              <span>Get WhatsApp Quote</span>
            </a>
            <a
              href="tel:+919313200700"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 text-sm transition-all"
            >
              <PhoneCall className="h-4 w-4 text-blue-600" />
              <span>Call Technician</span>
            </a>
          </div>
        </div>

        {/* RTO Consultant Banner */}
        <RtoConsultantBanner
          locationName={city.name}
        />

        {/* Compliance Comparison Table */}
        <VltdComplianceTable
          locationName={city.name}
          miningPortalName={state.miningPortal.name}
        />

        {/* FAQ Accordion */}
        <VltdFaqAccordion
          faqs={faqs}
          locationName={city.name}
        />

        {/* Other Cities in this State */}
        <div className="border-t border-gray-200 pt-10">
          <CityGrid state={state} currentCitySlug={city.slug} />
          <StateGrid currentStateSlug={state.slug} />
        </div>
      </div>
    </main>
  );
}
