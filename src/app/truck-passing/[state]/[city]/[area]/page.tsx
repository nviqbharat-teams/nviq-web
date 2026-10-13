import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckAreaBySlug,
  getAllTruckPassingAreaParams,
  TRUCK_CATEGORIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, MapPin, Wrench, Shield, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
    city: string;
    area: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckPassingAreaParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getTruckAreaBySlug(resolved.state, resolved.city, resolved.area);

  if (!match) {
    return {
      title: "Transport Nagar Truck Passing Fitment Center | NViQ",
      description: "Doorstep AIS 140 GPS fitment for commercial trucks.",
    };
  }

  const { city, area } = match;
  const title = `${area.name} (${area.rtoCode}) Truck Passing & AIS 140 Fitment Center | NViQ`;
  const description = `Doorstep AIS 140 GPS fitment at ${area.name}, ${city.name} (${area.rtoCode}). Technicians at ${area.truckYards.join(", ")}. 1-hour Vahan 4.0 certificate upload for ${area.rtoName} fitness passing.`;

  return {
    title,
    description,
    keywords: [
      `${area.name.toLowerCase()} truck passing gps`,
      `${area.name.toLowerCase()} ais 140 fitment`,
      `${area.rtoCode.toLowerCase()} truck fitness passing certificate`,
      `${area.rtoCode.toLowerCase()} rto gps center`,
      `doorstep truck gps ${city.name.toLowerCase()}`,
      `mining e-ravanna tracker ${area.name.toLowerCase()}`,
      `rto agent wholesale gps ${area.rtoCode.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}`,
    },
  };
}

export default async function TruckPassingAreaPage({ params }: Props) {
  const resolved = await params;
  const match = getTruckAreaBySlug(resolved.state, resolved.city, resolved.area);

  if (!match) {
    notFound();
  }

  const { city, area } = match;
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: city.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}` },
    { name: area.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}` },
  ];

  const areaFaqs = [
    {
      q: `How fast can a technician reach my vehicle in ${area.name}?`,
      a: `Our certified field engineers operate directly out of ${area.name} and reach your parking yard, workshop, or dhaba within ${area.doorstepFitmentTime}.`,
    },
    {
      q: `Which RTO office oversees fitness passing for ${area.name}?`,
      a: `Commercial vehicles operating out of ${area.name} fall under ${area.rtoName} (${area.rtoCode}). Our fitment certificate is pushed to Vahan 4.0 within 60 minutes for immediate fitness inspection.`,
    },
    {
      q: `Can I get bulk fleet fitment done at ${area.name} parking yards?`,
      a: `Yes. We organize on-site fitment camps for 5 to 50+ vehicles directly in ${area.name} truck yards, including free wiring audits and emergency panic button testing.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${area.name} (${area.rtoCode}) Truck Passing & AIS 140 Fitment Center`}
        description={`Doorstep AIS 140 fitment at ${area.name}, ${city.name} under ${area.rtoCode} jurisdiction.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}`}
        locationName={`${area.name}, ${city.name}`}
        faqs={areaFaqs}
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
          <span className="text-gray-900 font-medium">{area.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge={area.rtoCode}
        title={`${area.name} Truck Passing & GPS Fitment`}
        subtitle={`Doorstep AIS 140 VLTD fitment at ${area.name}, ${city.name}. 60-minute Vahan 4.0 certificate sync and Rajasthan DMG Khanij e-Ravanna whitelist.`}
        highlights={[
          `Doorstep technician visit across ${area.name} within ${area.doorstepFitmentTime}`,
          `60-minute sync to ${area.rtoCode} Parivahan records`,
          `Dual SOS panic buttons with zero battery drain guarantee`,
        ]}
        locationTag={`${area.rtoCode} • ${area.name}`}
        truckTypeTag={area.dominantFleets[0]}
        whatsappMessage={`Hi NViQ, I need doorstep AIS 140 GPS fitment at ${area.name}, ${city.name} for ${area.rtoCode} passing.`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={area.name} rtoCode={area.rtoCode} />

        {/* Local Area Hub Details Card */}
        <div className="my-10 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                Official RTO Office: {area.rtoCode}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{area.name} Local Fitment Details</h3>
              <p className="text-sm text-gray-500 mt-1">{area.address}</p>
            </div>

            <Link
              href={`/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${area.rtoSlug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-xs shrink-0"
            >
              <span>View {area.rtoCode} Passing Specs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Serviced Truck Yards & Staging Points
              </div>
              <ul className="text-sm text-gray-800 space-y-1.5 font-medium">
                {area.truckYards.map((yard, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {yard}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Dominant Fleets In Area
              </div>
              <ul className="text-sm text-gray-800 space-y-1.5 font-medium">
                {area.dominantFleets.map((fleet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    {fleet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Fitment & Passing Turnaround
              </div>
              <div className="text-lg font-bold text-emerald-700">{area.doorstepFitmentTime}</div>
              <p className="text-xs text-gray-500 mt-1">{area.passingDetails}</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <TruckCategoryGrid />

        {/* Wholesale Banner */}
        <RtoConsultantBanner locationName={`${area.name}, ${city.name}`} rtoCode={area.rtoCode} />

        {/* Area FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={areaFaqs} locationName={`${area.name}, ${city.name}`} />
        </div>
      </div>
    </main>
  );
}
