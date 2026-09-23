import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getStateBySlug,
  getAllStateParams,
} from "@/data/vltd-locations";
import VltdHero from "@/components/vltd/vltd-hero";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdComplianceTable from "@/components/vltd/vltd-compliance-table";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { CityGrid, StateGrid } from "@/components/vltd/vltd-nav-grids";
import { ChevronRight, ShieldCheck, CheckCircle2, Building2, Zap, PhoneCall } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllStateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    return {
      title: "State AIS 140 VLTD Portals | NViQ",
      description: "State-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const title = `${state.name} AIS 140 & Mines VLTD GPS | ${state.miningPortal.name} Approved | NViQ`;
  const description = `Govt-certified AIS 140 VLTD fitment across ${state.name}. Whitelisted for ${state.miningPortal.name} & Vahan 4.0. Guaranteed 1-hour certificate, doorstep fitment, and wholesale RTO consultant partnership.`;

  return {
    title,
    description,
    keywords: [
      `${state.name} VLTD GPS tracker`,
      `AIS 140 fitment ${state.name}`,
      `${state.miningPortal.name} approved GPS`,
      `${state.name} mining dumper GPS`,
      `${state.name} RTO passing GPS certificate`,
      `RTO consultant partner ${state.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://naviqbharat.com/vltd/${state.slug}`,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://naviqbharat.com/vltd/${state.slug}`,
    },
  };
}

export default async function StateDetailPage({ params }: Props) {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "https://naviqbharat.com" },
    { name: "VLTD Hub", item: "https://naviqbharat.com/vltd" },
    { name: state.name, item: `https://naviqbharat.com/vltd/${state.slug}` },
  ];

  const whatsappUrl = `https://wa.me/919313200700?text=${encodeURIComponent(
    `Hi NViQ, I need AIS 140 & Mines VLTD fitment in ${state.name} (${state.miningPortal.name}). Please share quotation.`
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${state.name} AIS 140 & Mines VLTD GPS`}
        description={`Government-approved AIS 140 GPS fitment across ${state.name}. Whitelisted for ${state.miningPortal.name}.`}
        url={`https://naviqbharat.com/vltd/${state.slug}`}
        locationName={state.name}
        faqs={state.stateFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-gray-100 bg-gray-50/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <Link href="/vltd" className="hover:text-gray-900 transition-colors">VLTD & Mining</Link>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-blue-600 font-bold">{state.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <VltdHero
        title={`${state.name} AIS 140 & Mines VLTD Tracking`}
        badge={`100% Whitelisted for ${state.miningPortal.name}`}
        description={`Full state compliance across ${state.name}. ARAI-certified AIS 140 devices with panic buttons, doorstep installation within 24-48 hours, and 1-hour Vahan 4.0 & mining transit pass certificate issuance.`}
        locationName={state.name}
        stateName={state.name}
        miningPortalName={state.miningPortal.name}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* State Mining & Transport Department Banner (Clean Light Gradient) */}
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-700" />
                State Portal Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                {state.miningPortal.name}
              </h2>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                {state.miningPortal.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium shadow-2xs">
                  Authority: {state.transportDepartment}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                  ✓ Vahan 4.0 Real-time Sync
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-3 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Primary Fleet Types in {state.name}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {state.commonVehicleTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 border border-gray-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{type}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cities Grid within State */}
        <CityGrid state={state} />

        {/* State Fitment Assistance Callout */}
        <div className="my-10 p-8 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50/60 via-green-50/20 to-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Across All {state.cities.length} Industrial Hubs
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
              Get Mines Approved GPS in {state.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Doorstep technician fitment for stone quarries, marble tippers, sand dumpers, and logistics containers. Guaranteed e-Transit pass approval.
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
            <Link
              href="/rto-partner"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-sm transition-all"
            >
              <Building2 className="h-4 w-4 text-amber-700" />
              <span>RTO Partner Portal</span>
            </Link>
          </div>
        </div>

        {/* RTO Consultant Banner */}
        <RtoConsultantBanner
          locationName={state.name}
        />

        {/* Compliance Table */}
        <VltdComplianceTable
          locationName={state.name}
          miningPortalName={state.miningPortal.name}
        />

        {/* FAQ Accordion */}
        <VltdFaqAccordion
          faqs={state.stateFaqs}
          locationName={state.name}
        />

        {/* Other States Navigation */}
        <div className="border-t border-gray-200 pt-10">
          <StateGrid currentStateSlug={state.slug} />
        </div>
      </div>
    </main>
  );
}
