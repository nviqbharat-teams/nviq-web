import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckCityBySlug,
  getTruckCategoryBySlug,
  getAllCityTruckCategoryParams,
  TRUCK_CATEGORIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, ArrowRight, MapPin, Truck, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";

type Props = {
  params: Promise<{
    category: string;
    state: string;
    city: string;
  }>;
};

export async function generateStaticParams() {
  return getAllCityTruckCategoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const city = getTruckCityBySlug(resolved.state, resolved.city);
  const cat = getTruckCategoryBySlug(resolved.category);

  if (!city || !cat) {
    return {
      title: "City Truck GPS Fitment | NViQ",
      description: "Approved AIS 140 VLTD fitment for commercial trucks.",
    };
  }

  const rtoCodesStr = Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ");
  const title = `${city.name} ${cat.title} AIS 140 VLTD Fitment (${rtoCodesStr}) | NViQ`;
  const description = `Govt-approved AIS 140 GPS fitment for ${cat.title} in ${city.name} (${rtoCodesStr}). Doorstep installation across ${city.areas.map((a) => a.name).join(", ")}. 1-hour Vahan & Rajasthan DMG Khanij e-Ravanna certificate.`;

  return {
    title,
    description,
    keywords: [
      `${city.name.toLowerCase()} ${cat.slug} gps`,
      `${city.name.toLowerCase()} ${cat.slug} ais 140`,
      `${cat.slug} fitness passing ${city.name.toLowerCase()}`,
      ...city.areas.map((a) => `${a.rtoCode.toLowerCase()} ${cat.slug} passing`),
      `e-ravanna ${cat.slug} ${city.name.toLowerCase()}`,
      `doorstep fitment ${cat.slug} ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}/${resolved.city}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}/${resolved.city}`,
    },
  };
}

export default async function CityTruckCategoryPage({ params }: Props) {
  const resolved = await params;
  const city = getTruckCityBySlug(resolved.state, resolved.city);
  const cat = getTruckCategoryBySlug(resolved.category);

  if (!city || !cat) {
    notFound();
  }

  const rtoCodesStr = Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ");
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Categories", item: "https://www.naviqbharat.com/trucks" },
    { name: `${cat.title}`, item: `https://www.naviqbharat.com/trucks/${resolved.category}` },
    { name: `Rajasthan`, item: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}` },
    { name: `${city.name}`, item: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}/${resolved.city}` },
  ];

  const cityCatFaqs = [
    {
      q: `Where in ${city.name} can I get my ${cat.title} fitted with AIS 140 GPS?`,
      a: `NViQ provides doorstep technician fitment across ${city.name} including ${city.areas.map((a) => a.name).join(", ")}. Technicians reach your parking yard within 1 to 2 hours.`,
    },
    {
      q: `Does NViQ guarantee DMG Khanij e-Ravanna whitelist for ${cat.title} in ${city.name}?`,
      a: `Yes. All NViQ devices are pre-configured with 2 emergency panic buttons and whitelisted on the Rajasthan DMG Khanij Online Portal, allowing immediate e-Ravanna generation without fines.`,
    },
    {
      q: `How does fitness passing work at ${city.name} RTO offices (${rtoCodesStr})?`,
      a: `Our technician performs on-site panic button testing and uploads the digital certificate directly to Vahan 4.0 within 60 minutes. Your RTO consultant or inspector can verify the active status instantly.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${city.name} ${cat.title} AIS 140 VLTD Fitment (${rtoCodesStr})`}
        description={`Doorstep AIS 140 fitment for ${cat.title} in ${city.name} (${rtoCodesStr}).`}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}/${resolved.city}`}
        locationName={`${city.name}, Rajasthan`}
        faqs={cityCatFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href="/rto-partner" className="hover:text-gray-900 transition-colors">RTO Partner Network</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href={`/trucks/${resolved.category}`} className="hover:text-gray-900 transition-colors">{cat.title}</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{city.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge={rtoCodesStr}
        title={`${city.name} ${cat.title} GPS Fitment`}
        subtitle={`Doorstep AIS 140 VLTD fitment for ${cat.title} in ${city.name} (${rtoCodesStr}). 60-minute Vahan 4.0 certificate and Rajasthan DMG Khanij e-Ravanna whitelist.`}
        highlights={[
          `Doorstep fitment across ${city.name} transport yards`,
          `Guaranteed 60-minute Vahan 4.0 certificate upload`,
          `Pre-whitelisted for Rajasthan DMG Khanij e-Transit pass`,
        ]}
        locationTag={`${city.name} • ${rtoCodesStr}`}
        truckTypeTag={cat.title}
        whatsappMessage={`Hi NViQ, I need AIS 140 fitment for ${cat.title} in ${city.name} (${rtoCodesStr}).`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={`${city.name} ${cat.title}`} rtoCode={rtoCodesStr} />

        {/* Local Areas in this City */}
        <div className="my-10 bg-gray-50/70 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Doorstep Fitment Locations in {city.name} for {cat.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            Our technicians reach your parking yard, loading point, or dhaba across these major areas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.areas.map((area) => (
              <div key={area.slug} className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    {area.rtoCode} Passing
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    {area.doorstepFitmentTime}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-gray-900">{area.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{area.landmark}</p>
                <div className="mt-3 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <span className="font-medium text-gray-900">Yards:</span> {area.truckYards.slice(0, 2).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Truck Categories in this City */}
        <div className="my-10">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Other High-Density Fleets in {city.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Explore compliance standards for other vehicle types operating under {rtoCodesStr}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.dominantCategories
              .filter((c) => c !== cat.slug)
              .map((catSlug) => {
                const otherCat = TRUCK_CATEGORIES.find((tc) => tc.slug === catSlug);
                if (!otherCat) return null;
                return (
                  <Link
                    key={otherCat.slug}
                    href={`/trucks/${otherCat.slug}/${resolved.state}/${resolved.city}`}
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all text-left flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{otherCat.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{otherCat.wheelAxle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Wholesale Partner Banner */}
        <RtoConsultantBanner locationName={`${city.name} (${cat.title})`} rtoCode={rtoCodesStr} />

        {/* FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={cityCatFaqs} locationName={`${city.name} ${cat.title}`} />
        </div>
      </div>
    </main>
  );
}
