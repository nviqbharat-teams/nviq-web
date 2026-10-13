import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckCategoryBySlug,
  getAllTruckCategoryParams,
  RAJASTHAN_TRUCK_CITIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, Shield, Truck, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckCategoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const cat = getTruckCategoryBySlug(resolved.category);

  if (!cat) {
    return {
      title: "Commercial Truck AIS 140 GPS | NViQ",
      description: "Government-approved AIS 140 GPS fitment for commercial vehicles.",
    };
  }

  const title = `${cat.title} AIS 140 VLTD GPS Fitment | 1-Hour Passing Certificate | NViQ`;
  const description = `${cat.shortDesc} Guaranteed 1-hour Vahan 4.0 certificate, dual panic buttons, and state mining e-Ravanna authorization.`;

  return {
    title,
    description,
    keywords: cat.keywords,
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/trucks/${resolved.category}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/trucks/${resolved.category}`,
    },
  };
}

export default async function TruckCategoryDetailPage({ params }: Props) {
  const resolved = await params;
  const cat = getTruckCategoryBySlug(resolved.category);

  if (!cat) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Categories", item: "https://www.naviqbharat.com/trucks" },
    { name: cat.title, item: `https://www.naviqbharat.com/trucks/${resolved.category}` },
  ];

  const catFaqs = [
    {
      q: `Is AIS 140 VLTD compulsory for ${cat.title}?`,
      a: `Yes. Under MoRTH guidelines and state transport rules, every ${cat.title} must have an active AIS 140 tracker with emergency panic buttons installed to renew annual fitness and operate on national highways.`,
    },
    {
      q: `Can ${cat.title} owners get fitment certificates uploaded to Vahan on the same day?`,
      a: `Yes. NViQ certified technicians carry pre-configured ARAI-approved devices. Once wiring and panic tests are verified, the certificate is pushed to Vahan 4.0 within 60 minutes.`,
    },
    {
      q: `Are NViQ devices whitelisted for mining e-Ravanna on ${cat.title}?`,
      a: `Yes. All our units are fully pre-integrated with Rajasthan DMG Khanij Online, MP Khanij Nigam, and Haryana e-Ravanna for uninterrupted transit pass generation.`,
    },
  ];

  // Cities where this category is dominant
  const dominantCities = RAJASTHAN_TRUCK_CITIES.filter((c) =>
    c.dominantCategories.includes(cat.slug)
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`${cat.title} AIS 140 VLTD GPS Fitment`}
        description={cat.shortDesc}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}`}
        locationName="India & Rajasthan Corridors"
        faqs={catFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <Link href="/rto-partner" className="hover:text-gray-900 transition-colors">RTO Partner Network</Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{cat.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge={cat.wheelAxle}
        title={`${cat.title} GPS Fitment & Passing`}
        subtitle={cat.shortDesc}
        highlights={cat.compliancePoints.slice(0, 3)}
        locationTag={cat.wheelAxle}
        truckTypeTag={cat.title}
        whatsappMessage={`Hi NViQ, I need AIS 140 VLTD fitment & certificate for ${cat.title}. Please share quotation.`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={cat.title} />

        {/* Technical Specs & Common Models */}
        <div className="my-10 bg-gray-50/70 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Supported Vehicle Models & Chassis</h3>
              <p className="text-xs text-gray-500 mb-4">
                Pre-tested wiring harness with zero battery drain guarantee for major commercial brands:
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.commonBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Typical High-Volume Freight Routes</h3>
              <p className="text-xs text-gray-500 mb-4">
                Continuous 4G dual-SIM tracking coverage across key inter-state highways:
              </p>
              <ul className="text-xs text-gray-700 space-y-1.5 font-medium">
                {cat.typicalRoutes.map((route, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* City-Specific Landing Pages for This Truck Category */}
        {dominantCities.length > 0 && (
          <div className="my-10">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Top Rajasthan Cities for {cat.title} Fitment
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Explore doorstep fitment centers and RTO passing guidelines in each high-density mining hub
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dominantCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/trucks/${cat.slug}/rajasthan/${city.slug}`}
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all text-left flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">
                      {city.name} {cat.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {city.areas.length} Transport Nagars & Yards
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other Truck Categories */}
        <TruckCategoryGrid currentCategorySlug={cat.slug} />

        {/* Wholesale Partner Banner */}
        <RtoConsultantBanner locationName={`Rajasthan ${cat.title} Corridors`} />

        {/* Category FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={catFaqs} locationName={cat.title} />
        </div>
      </div>
    </main>
  );
}
