import { Metadata } from "next";

import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { KitPage, FaqSection, FinalCta } from "@/components/landing/kit";
import { VltdPartnerSection } from "@/components/vltd/vltd-kit-sections";
import { TruckPageHero, TruckCategoryRows, RajasthanCityRows } from "@/components/trucks/truck-kit";

export const metadata: Metadata = {
  title: "Commercial Truck GPS & AIS 140 VLTD Passing Centers | NViQ",
  description: "Govt-approved AIS 140 GPS fitment for marble trollas, mining dumpers, bajri tippers, cement bulkers, and oil tankers. 1-hour Vahan 4.0 certificate & doorstep installation.",
  keywords: [
    "truck gps passing",
    "ais 140 fitment commercial trucks",
    "marble trolla tracker",
    "mining dumper panic button gps",
    "bajri truck e ravanna tracker",
    "cement bulker vltd",
    "oil tanker ais 140",
    "container trailer gps rajasthan",
  ],
  openGraph: {
    title: "Commercial Truck GPS & AIS 140 VLTD Passing Centers | NViQ",
    description: "Doorstep AIS 140 fitment for heavy commercial trucks with instant Vahan 4.0 passing certificates.",
    url: "https://www.naviqbharat.com/trucks",
    siteName: "NViQ Bharat",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.naviqbharat.com/trucks",
  },
};

export default function TrucksIndexPage() {
  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "Trucks & Fleet Categories", item: "https://www.naviqbharat.com/trucks" },
  ];

  const faqs = [
    {
      q: "Which commercial truck types are required to install AIS 140 GPS in India?",
      a: "Under MoRTH Notification GSR 1095(E), all commercial vehicles carrying goods (including multi-axle trailers, dumpers, tippers, petroleum tankers, and container carriers) as well as passenger transport (buses, luxury coaches, school vans) must have AIS 140 VLTD installed with emergency panic buttons for fitness certification.",
    },
    {
      q: "What is the difference between ordinary GPS and AIS 140 VLTD for trucks?",
      a: "Ordinary GPS trackers only offer vehicle tracking for the owner. AIS 140 VLTD is an ARAI/ICAT certified government-compliant device with dual emergency SOS buttons, internal battery backup, tamper detection, and encrypted live telemetry feeds routed to Parivahan Vahan 4.0 and state emergency monitoring command centers.",
    },
    {
      q: "How fast is the certificate uploaded to Vahan 4.0?",
      a: "Our certified technicians conduct live panic button testing and generate the Vahan 4.0 certificate within 60 minutes of installation.",
    },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle="Commercial Truck GPS & AIS 140 VLTD Passing Centers"
        description="Govt-approved AIS 140 GPS fitment for heavy commercial trucks, trailers, and dumpers."
        url="https://www.naviqbharat.com/trucks"
        locationName="India & Rajasthan"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <TruckPageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO Partner Network", href: "/rto-partner" }, { name: "Truck Categories" }]}
        eyebrow="Commercial fleet AIS 140"
        title="Commercial truck AIS 140 GPS fitment"
        highlight="AIS 140 GPS fitment"
        intro="Fitment for marble trollas, dumpers, bajri trucks, bulkers and tankers across India, with the certificate on Parivahan Vahan 4.0 in about an hour."
        points={["2 emergency panic buttons", "Certificate in ~60 minutes", "Mining portal whitelisted", "Technician comes to you"]}
        waMessage="Hi NViQ, I need AIS 140 VLTD fitment & certificate for my commercial truck. Please share quotation."
        topic="Commercial truck AIS 140 GPS fitment"
        source="trucks_hub"
        track="trucks_hub"
      />

      <TruckCategoryRows title="Pick your vehicle type" sub="Fitment specs, supported models and passing rules for each truck category." />

      <RajasthanCityRows />

      <VltdPartnerSection locationName="Rajasthan" />

      <FaqSection faqs={faqs} title="Truck GPS questions" track="trucks_hub_faq_call" />

      <FinalCta
        title="Need your truck passed this week?"
        sub="Send your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage="Hi NViQ, I need AIS 140 VLTD fitment & certificate for my commercial truck. Please share quotation."
        track="trucks_hub_final"
      />
    </KitPage>
  );
}
