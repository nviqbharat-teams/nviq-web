import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTruckCityBySlug, getAllTruckPassingCityParams, TRUCK_CATEGORIES } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection, AreaRows, rajasthanCityItems } from "@/components/trucks/truck-kit";

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
  const title = `${city.name} (${rtoCodesStr}) Truck Passing & AIS 140 VLTD Fitment`;
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

  const waMessage = `Hi NViQ, I need truck AIS 140 GPS fitment & fitness certificate in ${city.name} (${rtoCodesStr}).`;

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${city.name} (${rtoCodesStr}) Truck Passing & AIS 140 VLTD Fitment`}
        description={`Doorstep AIS 140 fitment across ${city.name} (${rtoCodesStr}) for commercial trucks, trailers, and dumpers.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}`}
        locationName={`${city.name}, Rajasthan`}
        faqs={city.cityFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Rajasthan", href: `/truck-passing/${resolved.state}` },
          { name: city.name },
        ]}
        eyebrow={`Serving ${rtoCodesStr}`}
        title={`${city.name} truck passing & GPS fitment`}
        highlight={city.name}
        intro={city.citySummary}
        points={[`${city.areas.length} transport yards covered`, "Certificate in ~60 minutes", "DMG Khanij e-Ravanna ready", "2 emergency panic buttons"]}
        waMessage={waMessage}
        topic={`Truck passing & AIS 140 fitment (${city.name})`}
        source={`truck_passing_${city.slug}`}
        track="truck_passing_city"
      />

      <AreaRows city={city} tone="white" />

      <TruckComplianceSection name={city.name} rtoCode={rtoCodesStr} tone="grey" />

      {cityCategories.length > 0 && (
        <Section labelledBy="fleets-title">
          <SectionHead
            id="fleets-title"
            title={`Fleets we fit most in ${city.name}`}
            sub="Vehicle-specific AIS 140 setup and panic button installation."
          />
          <div className="mt-10">
            <LinkRows
              cols={3}
              items={cityCategories.map((cat) => ({
                href: `/trucks/${cat.slug}/${resolved.state}/${resolved.city}`,
                name: cat.title,
                tag: cat.wheelAxle,
                text: cat.shortDesc,
              }))}
            />
          </div>
        </Section>
      )}

      <VltdPartnerSection locationName={city.name} />

      <FaqSection faqs={city.cityFaqs} title={`${city.name} truck passing questions`} track="truck_passing_city_faq_call" />

      <FinalCta
        title={`Need same-day fitment in ${city.name}?`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="truck_passing_city_final"
      />

      <DirectoryBand title="Other Rajasthan trucking hubs">
        <LinkRows cols={4} items={rajasthanCityItems(city.slug)} />
      </DirectoryBand>
    </KitPage>
  );
}
