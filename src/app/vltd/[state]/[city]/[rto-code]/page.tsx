import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getRtoByCode,
  getAllRtoParams,
} from "@/data/vltd-locations";
import VltdHero from "@/components/vltd/vltd-hero";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdComplianceTable from "@/components/vltd/vltd-compliance-table";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { CityGrid, StateGrid } from "@/components/vltd/vltd-nav-grids";
import { MapPin, Shield, CheckCircle2, PhoneCall, Zap, Building2, ChevronRight, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
    city: string;
    "rto-code": string;
  }>;
};

export async function generateStaticParams() {
  return getAllRtoParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getRtoByCode(resolved.state, resolved.city, resolved["rto-code"]);

  if (!match) {
    return {
      title: "AIS 140 VLTD Fitment Center | NViQ",
      description: "Government-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const { state, city, rto } = match;
  const title = `AIS 140 & Mines VLTD Fitment in ${rto.code} (${city.name}) | 1-Hour Certificate`;
  const description = `Get approved AIS 140 VLTD fitment near ${rto.name} (${rto.code}). Same-day doorstep installation in ${city.name}, instant Vahan 4.0 certificate upload, & ${state.miningPortal.name} whitelist. RTO Consultant wholesale rates available.`;

  return {
    title,
    description,
    keywords: [
      `${rto.code} VLTD certificate`,
      `AIS 140 GPS in ${city.name}`,
      `${rto.code} fitness passing GPS`,
      `Mines VLTD ${city.name}`,
      `${state.miningPortal.name} GPS tracker`,
      `RTO consultant VLTD ${rto.code}`,
      `Doorstep GPS installation ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}`,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}`,
    },
  };
}

export default async function RtoDetailPage({ params }: Props) {
  const resolved = await params;
  const match = getRtoByCode(resolved.state, resolved.city, resolved["rto-code"]);

  if (!match) {
    notFound();
  }

  const { state, city, rto } = match;
  const locationLabel = `${rto.code} (${city.name}, ${state.name})`;

  const faqs = [
    {
      q: `How quickly can I get the AIS 140 certificate for vehicle passing at ${rto.code} (${rto.name})?`,
      a: `Fitment certificates are generated and synced to the Vahan 4.0 portal within 60 minutes after our certified technician installs and tests the panic button and SOS telemetry. Your passing inspection can proceed immediately.`,
    },
    {
      q: `Is NViQ GPS whitelisted for ${state.miningPortal.name}?`,
      a: `Yes, NViQ devices are whitelisted and pre-integrated with ${state.miningPortal.name}. Once fitted, your vehicle is approved for e-Transit Pass (e-Ravanna) generation across all mining zones in ${state.name}.`,
    },
    {
      q: `Can a technician come to my transport depot in ${city.name} for fitment?`,
      a: `Yes! We offer doorstep fitment across ${city.majorIndustries.join(", ")} and nearby transport yards within ${city.installationTurnaround}. No need to bring your truck to a distant workshop.`,
    },
    {
      q: `How can RTO consultants in ${rto.code} earn wholesale dealer margins?`,
      a: `RTO agents can register on our RTO Partner portal to access confidential wholesale dealer pricing, earn strong margins per client, and generate verified fitment certificates via mobile app.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://naviqbharat.com" },
    { name: "VLTD Hub", item: "https://naviqbharat.com/vltd" },
    { name: state.name, item: `https://naviqbharat.com/vltd/${state.slug}` },
    { name: city.name, item: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}` },
    { name: rto.code, item: `https://naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}` },
  ];

  const whatsappUrl = `https://wa.me/919313200700?text=${encodeURIComponent(
    `Hi NViQ, I need AIS 140 & Mines VLTD fitment certificate for ${rto.code} (${city.name}). Please call me.`
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`AIS 140 & Mines VLTD in ${rto.code} - ${city.name}`}
        description={`Government-approved AIS 140 VLTD fitment near ${rto.name}. Same-day fitment & 1-hour passing certificate.`}
        url={`https://naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}`}
        locationName={`${rto.code}, ${city.name}, ${state.name}`}
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
          <Link href={`/vltd/${state.slug}/${city.slug}`} className="hover:text-gray-900 transition-colors">{city.name}</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-blue-600 font-bold">{rto.code}</span>
        </div>
      </div>

      {/* Hero Section */}
      <VltdHero
        title={`AIS 140 & Mines VLTD Fitment in ${rto.code} (${city.name})`}
        badge={`Approved for ${rto.code} Fitness Passing`}
        description={`Need urgent fitness passing or mining transit pass clearance at ${rto.name}? Get doorstep installation in ${city.installationTurnaround} with guaranteed 1-hour Vahan 4.0 & ${state.miningPortal.name} certificate sync.`}
        locationName={locationLabel}
        stateName={state.name}
        cityName={city.name}
        rtoCode={rto.code}
        miningPortalName={state.miningPortal.name}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* RTO Office Info Card */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50 p-7 md:p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg text-sm font-black bg-amber-100 text-amber-900 border border-amber-300">
                  {rto.code}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">{rto.name}</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 flex items-start gap-1.5">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{rto.officeAddress}</span>
              </p>
              <p className="text-xs text-gray-600">
                <strong className="text-blue-700">Passing Focus:</strong> {rto.fitnessPassingFocus}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm shadow-md transition-all"
              >
                <Zap className="h-4 w-4" />
                <span>Book 1-Hour Passing Fitment</span>
              </a>
              <Link
                href="/rto-partner"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-xs sm:text-sm transition-all"
              >
                <Building2 className="h-4 w-4 text-amber-700" />
                <span>RTO Agent Wholesale Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Why NViQ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50/40">
            <div className="text-2xl font-black text-blue-700">60 Mins</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mt-1">Vahan 4.0 Sync</div>
            <p className="text-xs text-gray-600 mt-1">Official fitment certificate uploaded to parivahan database without passing delays.</p>
          </div>
          <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40">
            <div className="text-2xl font-black text-emerald-700">{city.installationTurnaround}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mt-1">Doorstep Fitment</div>
            <p className="text-xs text-gray-600 mt-1">Certified technician visits your yard across {city.majorIndustries[0] || city.name}.</p>
          </div>
          <div className="p-5 rounded-2xl border border-amber-100 bg-amber-50/40">
            <div className="text-2xl font-black text-amber-800">100% Whitelist</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mt-1">{state.miningPortal.name}</div>
            <p className="text-xs text-gray-600 mt-1">Instant transit pass & e-Ravanna generation approval for dumpers and tippers.</p>
          </div>
        </div>

        {/* RTO Consultant Dedicated Banner */}
        <RtoConsultantBanner
          locationName={locationLabel}
          rtoCode={rto.code}
        />

        {/* Compliance Comparison Table */}
        <VltdComplianceTable
          locationName={locationLabel}
          miningPortalName={state.miningPortal.name}
        />

        {/* FAQ Accordion */}
        <VltdFaqAccordion
          faqs={faqs}
          locationName={locationLabel}
        />

        {/* Navigation to other RTOs and Cities in State */}
        <div className="border-t border-gray-200 pt-10">
          <CityGrid state={state} currentCitySlug={city.slug} />
          <StateGrid currentStateSlug={state.slug} />
        </div>
      </div>
    </main>
  );
}
