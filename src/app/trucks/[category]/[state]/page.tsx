import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTruckCategoryBySlug,
  getAllStateTruckCategoryParams,
  RAJASTHAN_TRUCK_CITIES,
} from "@/data/rajasthan-trucks-master";
import TruckHero from "@/components/trucks/truck-hero";
import TruckComplianceBox from "@/components/trucks/truck-compliance-box";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { ChevronRight, ArrowRight, MapPin, Truck, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{
    category: string;
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllStateTruckCategoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    return {
      title: "Commercial Truck GPS Fitment | NViQ",
      description: "State-approved AIS 140 VLTD fitment for commercial vehicles.",
    };
  }

  const cat = getTruckCategoryBySlug(resolved.category);
  if (!cat) {
    return {
      title: "Rajasthan Truck AIS 140 GPS | NViQ",
      description: "Govt-approved AIS 140 GPS fitment across Rajasthan.",
    };
  }

  const title = `Rajasthan ${cat.title} AIS 140 VLTD GPS | DMG Khanij e-Ravanna Approved | NViQ`;
  const description = `Govt-certified AIS 140 GPS installation for ${cat.title} across Rajasthan. 1-hour Vahan 4.0 certificate, Rajasthan DMG Khanij portal whitelist for e-Ravanna, and doorstep fitment at major Transport Nagars.`;

  return {
    title,
    description,
    keywords: [
      `rajasthan ${cat.slug} gps passing`,
      `rajasthan ${cat.slug} ais 140 fitment`,
      `${cat.slug} dmg khanij tracker`,
      `e-ravanna ${cat.slug} rajasthan`,
      ...cat.keywords.map((k) => `${k} rajasthan`),
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}`,
    },
  };
}

export default async function StateTruckCategoryPage({ params }: Props) {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    notFound();
  }

  const cat = getTruckCategoryBySlug(resolved.category);
  if (!cat) {
    notFound();
  }

  const dominantCities = RAJASTHAN_TRUCK_CITIES.filter((c) =>
    c.dominantCategories.includes(cat.slug)
  );

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Categories", item: "https://www.naviqbharat.com/trucks" },
    { name: cat.title, item: `https://www.naviqbharat.com/trucks/${resolved.category}` },
    { name: "Rajasthan", item: `https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}` },
  ];

  const stateCatFaqs = [
    {
      q: `Why is AIS 140 mandatory for ${cat.title} in Rajasthan?`,
      a: `Under Rajasthan Department of Mines & Geology (DMG) and MoRTH orders, all ${cat.title} vehicles must have ARAI-approved AIS 140 devices with panic buttons to generate e-Ravanna transit passes and pass annual RTO fitness.`,
    },
    {
      q: `Can I get doorstep fitment for ${cat.title} at mining pits or sawmills?`,
      a: `Yes. Our mobile technicians visit marble sawmills, sand river basins, quarry weighbridges, and transport yards across Rajasthan within 1 to 2 hours.`,
    },
    {
      q: `How do I avoid illegal mining fines for my ${cat.title}?`,
      a: `Installing an NViQ certified device guarantees immediate integration with the Rajasthan Khanij Online Portal (mines.rajasthan.gov.in), protecting you from ₹25,000+ fines.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle={`Rajasthan ${cat.title} AIS 140 VLTD GPS Fitment`}
        description={`Govt-approved AIS 140 GPS fitment for ${cat.title} across Rajasthan.`}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}`}
        locationName="Rajasthan"
        faqs={stateCatFaqs}
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
          <span className="text-gray-900 font-medium">Rajasthan</span>
        </div>
      </nav>

      {/* Hero */}
      <TruckHero
        badge="Rajasthan Fleet Passing"
        title={`Rajasthan ${cat.title} GPS Fitment`}
        subtitle={`Doorstep AIS 140 VLTD fitment for ${cat.title} across Rajasthan. Pre-whitelisted for DMG Khanij e-Ravanna and 60-minute Vahan 4.0 certificate.`}
        highlights={[
          `Whitelisted for Rajasthan DMG Khanij e-Ravanna transit passes`,
          `Dual SOS emergency panic buttons with zero battery drain`,
          `Guaranteed 60-minute Vahan 4.0 certificate synchronization`,
        ]}
        locationTag="Rajasthan"
        truckTypeTag={cat.title}
        whatsappMessage={`Hi NViQ, I need AIS 140 fitment for ${cat.title} in Rajasthan. Please share quotation.`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Box */}
        <TruckComplianceBox locationOrCategoryName={`Rajasthan ${cat.title}`} />

        {/* City-Specific Hubs for this Category */}
        <div className="my-10">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Top Rajasthan City Hubs for {cat.title} Passing
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Select your city to view local Transport Nagars, certified fitment centers, and RTO codes
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dominantCities.map((city) => (
              <Link
                key={city.slug}
                href={`/trucks/${cat.slug}/${resolved.state}/${city.slug}`}
                className="p-4 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all text-left flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-base text-gray-900">
                    {city.name} {cat.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {city.areas.map((a) => a.rtoCode).join(", ")} Passing Hubs
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-emerald-600" />
              </Link>
            ))}
          </div>
        </div>

        {/* Other Truck Categories */}
        <TruckCategoryGrid currentCategorySlug={cat.slug} />

        {/* Wholesale Partner Banner */}
        <RtoConsultantBanner locationName={`Rajasthan ${cat.title} Fleet`} />

        {/* FAQs */}
        <div className="my-12">
          <VltdFaqAccordion faqs={stateCatFaqs} locationName={`Rajasthan ${cat.title}`} />
        </div>
      </div>
    </main>
  );
}
