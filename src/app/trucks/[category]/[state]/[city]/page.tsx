import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTruckCityBySlug, getTruckCategoryBySlug, getAllCityTruckCategoryParams, TRUCK_CATEGORIES } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection, rajasthanCityItems } from "@/components/trucks/truck-kit";

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
  const title = `${city.name} ${cat.title} AIS 140 VLTD Fitment (${rtoCodesStr})`;
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

  const waMessage = `Hi NViQ, I need AIS 140 fitment for ${cat.title} in ${city.name} (${rtoCodesStr}).`;
  const otherCats = TRUCK_CATEGORIES.filter((tc) => tc.slug !== cat.slug && city.dominantCategories.includes(tc.slug));

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${city.name} ${cat.title} AIS 140 VLTD Fitment (${rtoCodesStr})`}
        description={`Doorstep AIS 140 fitment for ${cat.title} in ${city.name} (${rtoCodesStr}).`}
        url={`https://www.naviqbharat.com/trucks/${resolved.category}/${resolved.state}/${resolved.city}`}
        locationName={`${city.name}, Rajasthan`}
        faqs={cityCatFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Truck Categories", href: "/trucks" },
          { name: cat.title, href: `/trucks/${resolved.category}` },
          { name: "Rajasthan", href: `/trucks/${resolved.category}/${resolved.state}` },
          { name: city.name },
        ]}
        eyebrow={`Serving ${rtoCodesStr}`}
        title={`${city.name} ${cat.title} GPS fitment`}
        highlight={city.name}
        intro={`Doorstep AIS 140 VLTD fitment for ${cat.title} in ${city.name}. Vahan 4.0 certificate in about an hour and Rajasthan DMG Khanij e-Ravanna whitelisted.`}
        points={[`Fitment at ${city.name} yards`, "Certificate in ~60 minutes", "DMG Khanij e-Ravanna ready", "2 emergency panic buttons"]}
        waMessage={waMessage}
        topic={`AIS 140 VLTD fitment for ${cat.title} (${city.name})`}
        source={`trucks_${cat.slug}_${city.slug}`}
        track="trucks_city"
      />

      <TruckComplianceSection name={`${city.name} ${cat.title}`} rtoCode={rtoCodesStr} />

      <Section tone="grey" labelledBy="areas-title">
        <SectionHead
          id="areas-title"
          title={`Where we fit ${cat.title} in ${city.name}`}
          sub="Our technician reaches your parking yard, loading point or dhaba in these areas."
        />
        <div className="mt-10">
          <LinkRows
            cols={3}
            items={city.areas.map((area) => ({
              href: `/truck-passing/${resolved.state}/${resolved.city}/${area.slug}`,
              name: area.name,
              tag: `${area.rtoCode} · ${area.doorstepFitmentTime}`,
              strong: true,
              text: `${area.landmark}. Yards: ${area.truckYards.slice(0, 2).join(", ")}`,
            }))}
          />
        </div>
      </Section>

      {otherCats.length > 0 && (
        <Section labelledBy="other-title">
          <SectionHead id="other-title" title={`Other fleets in ${city.name}`} sub={`Compliance for other vehicle types under ${rtoCodesStr}.`} />
          <div className="mt-10">
            <LinkRows
              cols={3}
              items={otherCats.map((c) => ({ href: `/trucks/${c.slug}/${resolved.state}/${resolved.city}`, name: c.title, tag: c.wheelAxle }))}
            />
          </div>
        </Section>
      )}

      <VltdPartnerSection locationName={city.name} />

      <FaqSection faqs={cityCatFaqs} title={`${city.name} ${cat.title} questions`} track="trucks_city_faq_call" />

      <FinalCta
        title={`Need same-day fitment in ${city.name}?`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="trucks_city_final"
      />

      <DirectoryBand title="Other Rajasthan trucking hubs">
        <LinkRows cols={4} items={rajasthanCityItems(city.slug)} />
      </DirectoryBand>
    </KitPage>
  );
}
