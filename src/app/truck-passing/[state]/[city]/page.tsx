import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckCityBySlug,
  getAllTruckPassingCityParams,
  TRUCK_CATEGORIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { AreaPassingGrid, TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, Shield, MapPin, Truck, CheckCircle2, PhoneCall } from "lucide-react";

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckPassingCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const city = getTruckCityBySlug(resolved.state, resolved.city);

  if (!city) {
    return {
      title: "Commercial Truck Passing Hub | NViQ",
      description: "Doorstep AIS 140 GPS fitment for commercial trucks.",
    };
  }

  const rtoCodesStr = Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ");
  const title = `${city.name} (${rtoCodesStr}) Truck Passing & AIS 140 VLTD Fitment | NViQ`;
  const description = `Govt-approved AIS 140 GPS installation across ${city.name} (${rtoCodesStr}). Doorstep fitment across ${city.areas.map((a) => a.name).join(", ")}. Instant 1-hour Vahan & DMG Khanij e-Ravanna certificate.`;

  return {
    title,
    description,
    keywords: [
      `${city.name.toLowerCase()} truck passing gps`,
      `${city.name.toLowerCase()} ais 140 fitment center`,
      ...city.areas.map((a) => `${a.name.toLowerCase()} gps fitment`),
      ...city.areas.map((a) => `${a.rtoCode.toLowerCase()} fitness passing certificate`),
      `e-ravanna mining tracker ${city.name.toLowerCase()}`,
      `rto consultant wholesale gps ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}`,
    },
  };
}

export default async function TruckPassingCityPage({ params }: Props) {
  const resolved = await params;
  const city = getTruckCityBySlug(resolved.state, resolved.city);

  if (!city) {
    notFound();
  }

  const rtoCodesStr = Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ");
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: city.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}` },
  ];

  const cityCategories = TRUCK_CATEGORIES.filter((c) => city.dominantCategories.includes(c.slug));

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${city.name} (${rtoCodesStr}) Truck Passing & AIS 140 VLTD Fitment`}
        description={`Doorstep AIS 140 fitment across ${city.name} (${rtoCodesStr}) for commercial trucks, trailers, and dumpers.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}`}
        locationName={`${city.name}, Rajasthan`}
        faqs={city.cityFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href={`/truck-passing/${resolved.state}`} className="hover:text-gray-900 transition-colors">Rajasthan</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{city.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge={rtoCodesStr}
        title={`${city.name} Truck Passing & GPS Fitment`}
        subtitle={city.citySummary}
        highlights={[
          `Doorstep visit across ${city.areas.length} transport yards in ${city.name}`,
          `60-minute Parivahan Vahan 4.0 certificate upload`,
          `Whitelisted for Rajasthan DMG Khanij e-Ravanna transit passes`,
        ]}
        locationTag={`${city.name} • ${rtoCodesStr}`}
        truckTypeTag="Commercial Fleets"
        whatsappMessage={`Hi NViQ, I need truck AIS 140 GPS fitment & fitness certificate in ${city.name} (${rtoCodesStr}).`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={city.name} rtoCode={rtoCodesStr} />

        {/* Transport Areas Grid */}
        <AreaPassingGrid city={city} />

        {/* Dominant Truck Categories in this City */}
        <div className="my-10 bg-gray-50/70 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              High-Density Fleets Operating in {city.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Vehicle-specific AIS 140 configuration and panic button installation protocols
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/trucks/${cat.slug}/${resolved.state}/${resolved.city}`}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {cat.wheelAxle}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mt-2">{cat.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{cat.shortDesc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                  <span>View {city.name} Passing Specs</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Wholesale Banner */}
        <RtoConsultantBanner locationName={`${city.name}, Rajasthan`} rtoCode={rtoCodesStr} />

        {/* Other Cities in Rajasthan */}
        <RajasthanTruckCitiesGrid currentCitySlug={city.slug} />

        {/* City FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={city.cityFaqs} locationName={`${city.name}, Rajasthan`} />
        </div>
      </div>
    </main>
  );
}
