import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTruckAreaBySlug, getAllTruckPassingAreaParams } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection, TruckCategoryRows } from "@/components/trucks/truck-kit";

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
  const title = `${area.name} (${area.rtoCode}) Truck Passing & AIS 140 Fitment Center`;
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

  const waMessage = `Hi NViQ, I need doorstep AIS 140 GPS fitment at ${area.name}, ${city.name} for ${area.rtoCode} passing.`;

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${area.name} (${area.rtoCode}) Truck Passing & AIS 140 Fitment Center`}
        description={`Doorstep AIS 140 fitment at ${area.name}, ${city.name} under ${area.rtoCode} jurisdiction.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}`}
        locationName={`${area.name}, ${city.name}`}
        faqs={areaFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Rajasthan", href: `/truck-passing/${resolved.state}` },
          { name: city.name, href: `/truck-passing/${resolved.state}/${resolved.city}` },
          { name: area.name },
        ]}
        eyebrow={`${area.rtoCode} · ${area.name}`}
        title={`${area.name} truck passing & GPS fitment`}
        highlight={area.name}
        intro={`Doorstep AIS 140 VLTD fitment at ${area.name}, ${city.name}. Vahan 4.0 certificate in about an hour and Rajasthan DMG Khanij e-Ravanna whitelisted.`}
        points={[`Technician in ${area.doorstepFitmentTime}`, `Synced to ${area.rtoCode} records`, "2 emergency panic buttons", "Zero battery drain"]}
        waMessage={waMessage}
        topic={`Truck AIS 140 fitment (${area.name}, ${city.name})`}
        source={`truck_passing_${city.slug}_${area.slug}`}
        track="truck_passing_area"
      />

      <Section labelledBy="area-title">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#1D5BD8]">RTO office: {area.rtoCode}</p>
            <div className="mt-2">
              <SectionHead id="area-title" title={`Fitment details for ${area.name}`} sub={area.address} />
            </div>
          </div>
          <Link
            href={`/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${area.rtoSlug}`}
            className="flex h-14 shrink-0 items-center justify-center bg-[#18202E] px-7 text-base font-bold text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
          >
            {area.rtoCode} passing steps
          </Link>
        </div>
        <dl className="mt-10 grid border-t-2 border-[#18202E] md:grid-cols-3 md:gap-x-10">
          <div className="border-b border-[#D9DEE6] py-6">
            <dt className="text-sm font-semibold text-slate-500">Truck yards and staging points</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 font-medium">
                {area.truckYards.map((yard) => (
                  <li key={yard}>{yard}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="border-b border-[#D9DEE6] py-6">
            <dt className="text-sm font-semibold text-slate-500">Main fleets in the area</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 font-medium">
                {area.dominantFleets.map((fleet) => (
                  <li key={fleet}>{fleet}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="border-b border-[#D9DEE6] py-6">
            <dt className="text-sm font-semibold text-slate-500">Fitment and passing turnaround</dt>
            <dd className="mt-3 font-display text-3xl font-bold text-[#0F8A4B]">{area.doorstepFitmentTime}</dd>
            <dd className="mt-2 text-sm leading-relaxed text-slate-600">{area.passingDetails}</dd>
          </div>
        </dl>
      </Section>

      <TruckComplianceSection name={area.name} rtoCode={area.rtoCode} tone="grey" />

      <TruckCategoryRows />

      <VltdPartnerSection locationName={area.name} />

      <FaqSection faqs={areaFaqs} title={`${area.name} questions`} track="truck_passing_area_faq_call" />

      <FinalCta
        title={`Need fitment at ${area.name}?`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="truck_passing_area_final"
      />

      <DirectoryBand title={`Other areas in ${city.name}`}>
        <LinkRows
          cols={4}
          items={city.areas.map((a) => ({
            href: `/truck-passing/${resolved.state}/${resolved.city}/${a.slug}`,
            name: a.name,
            tag: a.rtoCode,
            current: a.slug === area.slug,
          }))}
        />
      </DirectoryBand>
    </KitPage>
  );
}
