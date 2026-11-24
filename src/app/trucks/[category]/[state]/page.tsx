import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTruckCategoryBySlug, getAllStateTruckCategoryParams, RAJASTHAN_TRUCK_CITIES, TRUCK_CATEGORIES } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection } from "@/components/trucks/truck-kit";

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

  const title = `Rajasthan ${cat.title} AIS 140 VLTD GPS | DMG Khanij e-Ravanna Approved`;
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

  const waMessage = `Hi NViQ, I need AIS 140 fitment for ${cat.title} in Rajasthan. Please share quotation.`;

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`Rajasthan ${cat.title} AIS 140 VLTD GPS Fitment`}
        description={`Govt-approved AIS 140 GPS fitment for ${cat.title} across Rajasthan.`}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}`}
        locationName="Rajasthan"
        faqs={stateCatFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Truck Categories", href: "/trucks" },
          { name: cat.title, href: `/trucks/${resolved.category}` },
          { name: "Rajasthan" },
        ]}
        eyebrow="Rajasthan fleet passing"
        title={`Rajasthan ${cat.title} GPS fitment`}
        highlight={cat.title}
        intro={`Doorstep AIS 140 VLTD fitment for ${cat.title} across Rajasthan. Pre-whitelisted for DMG Khanij e-Ravanna, with the Vahan 4.0 certificate in about an hour.`}
        points={["DMG Khanij e-Ravanna ready", "2 emergency panic buttons", "Certificate in ~60 minutes", "Technician comes to you"]}
        waMessage={waMessage}
        topic={`AIS 140 VLTD fitment for ${cat.title} (Rajasthan)`}
        source={`trucks_${cat.slug}_rajasthan`}
        track="trucks_state"
      />

      <TruckComplianceSection name={`Rajasthan ${cat.title}`} />

      <Section tone="grey" labelledBy="cities-title">
        <SectionHead
          id="cities-title"
          title={`Pick your city for ${cat.title} passing`}
          sub="Local transport nagars, fitment points and RTO codes for each city."
        />
        <div className="mt-10">
          <LinkRows
            cols={3}
            items={dominantCities.map((city) => ({
              href: `/trucks/${cat.slug}/${resolved.state}/${city.slug}`,
              name: `${city.name} ${cat.title}`,
              tag: Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", "),
            }))}
          />
        </div>
      </Section>

      <VltdPartnerSection locationName="Rajasthan" />

      <FaqSection faqs={stateCatFaqs} title={`Rajasthan ${cat.title} questions`} track="trucks_state_faq_call" />

      <FinalCta
        title={`Get your ${cat.title} passed in Rajasthan`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="trucks_state_final"
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
