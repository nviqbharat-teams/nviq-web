import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTruckAreaRtoDetail, getAllTruckPassingAreaRtoParams } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, Section, SectionHead, LinkRows, FaqSection, FinalCta, DirectoryBand, Steps } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection, TruckCategoryRows, rajasthanCityItems } from "@/components/trucks/truck-kit";

type Props = {
  params: Promise<{
    state: string;
    city: string;
    area: string;
    "rto-code": string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckPassingAreaRtoParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getTruckAreaRtoDetail(
    resolved.state,
    resolved.city,
    resolved.area,
    resolved["rto-code"]
  );

  if (!match) {
    return {
      title: "RTO Fitness Passing & AIS 140 VLTD | NViQ",
      description: "Doorstep AIS 140 GPS fitment for commercial trucks.",
    };
  }

  const { city, area } = match;
  const title = `${area.rtoCode} (${area.rtoName}) Truck Passing & AIS 140 VLTD Fitment | ${area.name}`;
  const description = `Get approved AIS 140 VLTD installation for ${area.rtoCode} vehicle fitness passing at ${area.name}, ${city.name}. 1-hour Vahan 4.0 certificate upload, Rajasthan DMG Khanij whitelist, & RTO agent wholesale margins.`;

  return {
    title,
    description,
    keywords: [
      `${area.rtoCode.toLowerCase()} truck passing gps`,
      `${area.rtoCode.toLowerCase()} fitness certificate ais 140`,
      `${area.rtoCode.toLowerCase()} rto office gps fitment`,
      `${area.name.toLowerCase()} ${area.rtoCode.toLowerCase()} gps`,
      `doorstep fitment ${area.rtoCode.toLowerCase()}`,
      `mining e-ravanna tracker ${area.rtoCode.toLowerCase()}`,
      `rto consultant wholesale ${area.rtoCode.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`,
    },
  };
}

export default async function TruckPassingAreaRtoPage({ params }: Props) {
  const resolved = await params;
  const match = getTruckAreaRtoDetail(
    resolved.state,
    resolved.city,
    resolved.area,
    resolved["rto-code"]
  );

  if (!match) {
    notFound();
  }

  const { city, area } = match;
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: city.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}` },
    { name: area.name, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}` },
    { name: area.rtoCode, item: `https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}` },
  ];

  const rtoFaqs = [
    {
      q: `What documents are needed to get the ${area.rtoCode} VLTD certificate?`,
      a: `Only your Vehicle Registration Certificate (RC) copy and chassis number. Our technician installs the device, runs the panic button live ping test, and generates the Parivahan Vahan 4.0 certificate within 60 minutes.`,
    },
    {
      q: `Will my vehicle pass inspection at ${area.rtoName} without GPS physically checked?`,
      a: `Once our digital certificate is uploaded, the Vahan 4.0 system marks the VLTD status as 'Verified & Active'. The RTO vehicle inspector verifies the online record and checks the physical device in the cabin during passing.`,
    },
    {
      q: `How can local RTO agents & passing brokers in ${area.name} buy at dealer prices?`,
      a: `Local RTO consultants in ${area.name} can sign up for the NViQ RTO Partner Program to unlock wholesale dealer pricing, self-issue certificates via mobile app, and get same-day technician dispatch.`,
    },
  ];

  const waMessage = `Hi NViQ, I need AIS 140 VLTD fitment certificate for ${area.rtoCode} passing at ${area.name}.`;

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${area.rtoCode} (${area.rtoName}) Truck Passing & AIS 140 VLTD Fitment`}
        description={`Approved AIS 140 fitment for ${area.rtoCode} commercial fitness passing at ${area.name}, ${city.name}.`}
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}/${resolved["rto-code"]}`}
        locationName={`${area.rtoName} (${area.rtoCode}), ${city.name}`}
        faqs={rtoFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Rajasthan", href: `/truck-passing/${resolved.state}` },
          { name: city.name, href: `/truck-passing/${resolved.state}/${resolved.city}` },
          { name: area.name, href: `/truck-passing/${resolved.state}/${resolved.city}/${resolved.area}` },
          { name: `${area.rtoCode} Passing` },
        ]}
        eyebrow={`${area.rtoCode} · ${area.name}`}
        title={`${area.rtoCode} (${area.rtoName}) truck passing & GPS fitment`}
        highlight={area.rtoCode}
        intro={`Doorstep AIS 140 VLTD fitment at ${area.name}. Vahan 4.0 certificate in about an hour and Rajasthan DMG Khanij e-Ravanna whitelisted.`}
        points={[`Technician in ${area.doorstepFitmentTime}`, "Certificate in ~60 minutes", "DMG Khanij e-Ravanna ready", "2 emergency panic buttons"]}
        waMessage={waMessage}
        topic={`${area.rtoCode} truck passing AIS 140 fitment (${area.name})`}
        source={`truck_passing_${city.slug}_${area.slug}_rto`}
        track="truck_passing_rto"
      />

      <Section labelledBy="steps-title">
        <SectionHead
          id="steps-title"
          title={`How ${area.rtoCode} fitness passing works`}
          sub={`How NViQ gets your vehicle passed at ${area.rtoName} without re-inspection delays.`}
        />
        <Steps
          steps={[
            { title: "Doorstep fitment", text: `Technician reaches your ${area.name} yard within ${area.doorstepFitmentTime} to wire the AIS 140 unit and 2 panic buttons.` },
            { title: "Live SOS ping test", text: "Panic buttons are triggered to verify alert delivery to police and transport emergency servers." },
            { title: "Vahan 4.0 sync in ~1 hour", text: `The fitment certificate is pushed to Parivahan Sewa under ${area.rtoCode}.` },
            { title: "Fitness clearance", text: `The ${area.rtoName} inspector sees the active certificate online and your passing goes ahead.` },
          ]}
        />
      </Section>

      <TruckComplianceSection name={`${area.rtoName} (${area.rtoCode})`} rtoCode={area.rtoCode} tone="grey" />

      <TruckCategoryRows />

      <VltdPartnerSection locationName={area.name} />

      <FaqSection faqs={rtoFaqs} title={`${area.rtoCode} passing questions`} track="truck_passing_rto_faq_call" />

      <FinalCta
        title={`Get your truck passed at ${area.rtoCode}`}
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="truck_passing_rto_final"
      />

      <DirectoryBand title="Other Rajasthan trucking hubs">
        <LinkRows cols={4} items={rajasthanCityItems(city.slug)} />
      </DirectoryBand>
    </KitPage>
  );
}
