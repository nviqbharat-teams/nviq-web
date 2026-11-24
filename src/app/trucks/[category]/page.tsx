import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTruckCategoryBySlug, getAllTruckCategoryParams, RAJASTHAN_TRUCK_CITIES, TRUCK_CATEGORIES } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection } from "@/components/trucks/truck-kit";

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

  const title = `${cat.title} AIS 140 VLTD GPS Fitment | 1-Hour Passing Certificate`;
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

  const waMessage = `Hi NViQ, I need AIS 140 VLTD fitment & certificate for ${cat.title}. Please share quotation.`;

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${cat.title} AIS 140 VLTD GPS Fitment`}
        description={cat.shortDesc}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}`}
        locationName="India & Rajasthan Corridors"
        faqs={catFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Truck Categories", href: "/trucks" },
          { name: cat.title },
        ]}
        eyebrow={cat.wheelAxle}
        title={`${cat.title} GPS fitment & passing`}
        highlight={cat.title}
        intro={cat.shortDesc}
        points={cat.compliancePoints.slice(0, 4)}
        waMessage={waMessage}
        topic={`AIS 140 VLTD fitment for ${cat.title}`}
        source={`trucks_category_${cat.slug}`}
        track="trucks_category"
      />

      <TruckComplianceSection name={cat.title} />

      <Section tone="grey" labelledBy="specs-title">
        <SectionHead id="specs-title" title={`${cat.title}: models and routes we cover`} />
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="font-display text-xl font-semibold">Supported models and chassis</h3>
            <p className="mt-2 text-slate-600">Pre-tested wiring harness with a zero battery drain guarantee for major commercial brands.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cat.commonBrands.map((brand) => (
                <li key={brand} className="border border-[#C9D0DB] bg-white px-3.5 py-1.5 text-sm font-semibold">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Typical freight routes</h3>
            <p className="mt-2 text-slate-600">Continuous 4G dual-SIM tracking coverage across key inter-state highways.</p>
            <ul className="mt-5 border-t border-[#D9DEE6]">
              {cat.typicalRoutes.map((route) => (
                <li key={route} className="border-b border-[#D9DEE6] py-3 font-medium">
                  {route}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {dominantCities.length > 0 && (
        <Section labelledBy="cities-title">
          <SectionHead
            id="cities-title"
            title={`Top Rajasthan cities for ${cat.title} fitment`}
            sub="Doorstep fitment and RTO passing details in each high-density hub."
          />
          <div className="mt-10">
            <LinkRows
              cols={3}
              items={dominantCities.map((city) => ({
                href: `/trucks/${cat.slug}/rajasthan/${city.slug}`,
                name: `${city.name} ${cat.title}`,
                tag: `${city.areas.length} yards`,
              }))}
            />
          </div>
        </Section>
      )}

      <VltdPartnerSection locationName="Rajasthan" />

      <FaqSection faqs={catFaqs} title={`${cat.title} questions`} track="trucks_category_faq_call" />

      <FinalCta
        title={`Get your ${cat.title} passed`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="trucks_category_final"
      />

      <DirectoryBand title="Other truck categories">
        <LinkRows
          cols={4}
          items={TRUCK_CATEGORIES.map((c) => ({ href: `/trucks/${c.slug}`, name: c.title, tag: c.wheelAxle, current: c.slug === cat.slug }))}
        />
      </DirectoryBand>
    </KitPage>
  );
}
