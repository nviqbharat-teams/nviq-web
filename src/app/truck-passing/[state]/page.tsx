import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTruckCities, getAllTruckStateParams } from "@/data/rajasthan-trucks-master";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, FaqSection, FinalCta } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckComplianceSection, TruckCategoryRows, RajasthanCityRows } from "@/components/trucks/truck-kit";

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTruckStateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    return {
      title: "Commercial Truck Passing & AIS 140 VLTD | NViQ",
      description: "Doorstep AIS 140 GPS fitment and RTO fitness passing for commercial trucks.",
    };
  }

  const title = "Rajasthan Truck Passing & AIS 140 VLTD Fitment | DMG Khanij e-Ravanna Approved | NViQ";
  const description = "Govt-approved AIS 140 GPS fitment for commercial trucks, marble trollas, bajri tippers, and cement bulkers across Rajasthan. Instant 1-hour Vahan 4.0 certificate & DMG Khanij Online whitelist.";

  return {
    title,
    description,
    keywords: [
      "rajasthan truck passing gps",
      "ais 140 fitment rajasthan",
      "dmg khanij e-ravanna gps tracker",
      "marble trolla gps passing",
      "bajri dumper fitness certificate",
      "transport nagar truck gps fitment",
      "rto passing certificate rajasthan",
      "commercial vehicle vltd rajasthan",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/truck-passing/${resolved.state}`,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/truck-passing/${resolved.state}`,
    },
  };
}

export default async function TruckPassingStatePage({ params }: Props) {
  const resolved = await params;
  if (resolved.state !== "rajasthan") {
    notFound();
  }

  const cities = getAllTruckCities();
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Truck Passing", item: "https://www.naviqbharat.com/truck-passing/rajasthan" },
    { name: "Rajasthan Hubs", item: `https://www.naviqbharat.com/truck-passing/${resolved.state}` },
  ];

  const stateFaqs = [
    {
      q: "Which truck categories in Rajasthan are legally required to install AIS 140 VLTD?",
      a: "Under MoRTH norms and Rajasthan Department of Mines & Geology (DMG) orders, all commercial goods vehicles including marble trollas, sand/bajri dumpers, cement bulkers, hazardous tankers, and passenger coaches must have an active AIS 140 device with 2 panic buttons to pass annual fitness.",
    },
    {
      q: "How does NViQ help truck owners avoid ₹25,000+ illegal mining fines in Rajasthan?",
      a: "Our devices are whitelisted on the Rajasthan DMG Khanij Online Portal (mines.rajasthan.gov.in). Once fitted, our system automatically verifies vehicle telemetry, allowing seamless generation of e-Ravanna transit passes.",
    },
    {
      q: "How quickly is the fitment certificate synced to Vahan 4.0?",
      a: "Our technician conducts panic button live tests upon installation. The digital test certificate is pushed to Vahan 4.0 within 60 minutes, enabling immediate fitness passing at your RTO.",
    },
    {
      q: "Do you provide on-site fitment at Transport Nagars and truck dhabas?",
      a: "Yes. Our mobile technician teams service all major Transport Nagars across Jaipur, Kishangarh Marble Mandi, Bhilwara Pur Road, Chittorgarh Nimbahera, Jodhpur Basni, and Bhiwadi within 1 to 2 hours.",
    },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle="Rajasthan Truck Passing & AIS 140 VLTD Fitment"
        description="Doorstep AIS 140 fitment for commercial trucks, marble trollas, bajri dumpers, and bulkers across Rajasthan."
        url={`https://www.naviqbharat.com/truck-passing/${resolved.state}`}
        locationName="Rajasthan"
        faqs={stateFaqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Truck Categories", href: "/trucks" }, { name: "Rajasthan Truck Passing" }]}
        eyebrow="Rajasthan fleet passing"
        title="Rajasthan truck passing & AIS 140 GPS fitment"
        highlight="truck passing"
        intro="Doorstep fitment for marble trollas, bajri tippers, bulkers and freight fleets across Rajasthan. Vahan 4.0 certificate in about an hour and DMG Khanij e-Ravanna whitelisted."
        points={["Fitment at transport nagars", "Certificate in ~60 minutes", "DMG Khanij e-Ravanna ready", `${cities.length} cities covered`]}
        waMessage="Hi NViQ, I need truck AIS 140 GPS fitment & fitness certificate in Rajasthan."
        topic="Truck passing & AIS 140 fitment (Rajasthan)"
        source="truck_passing_rajasthan"
        track="truck_passing_state"
      />

      <TruckComplianceSection name="Rajasthan" />

      <RajasthanCityRows title="Pick your city" sub="Transport nagars, RTO codes and doorstep fitment times for each Rajasthan hub." />

      <TruckCategoryRows />

      <VltdPartnerSection locationName="Rajasthan" />

      <FaqSection faqs={stateFaqs} title="Rajasthan truck passing questions" track="truck_passing_state_faq_call" />

      <FinalCta
        title="Need your truck passed this week?"
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage="Hi NViQ, I need truck AIS 140 GPS fitment & fitness certificate in Rajasthan."
        track="truck_passing_state_final"
      />
    </KitPage>
  );
}
