import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import {
  getCityBySlug,
  getAllCityParams,
  hasMiningIntegration,
} from "@/data/vltd-india";
import { rtoLabel } from "@/lib/rto-label";
import QuickLeadForm from "@/components/quick-lead-form";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { VltdCompareSection, VltdPartnerSection, VltdStateChips } from "@/components/vltd/vltd-kit-sections";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Steps,
  LinkRows,
  FaqSection,
  FinalCta,
  DirectoryBand,
  textLink,
} from "@/components/landing/kit";

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export const dynamicParams = true;
export const revalidate = 604800;

export async function generateStaticParams() {
  return getAllCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    return {
      title: "AIS 140 VLTD Fitment Center | NViQ",
      description: "Government-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const { state, city } = match;
  const mining = hasMiningIntegration(state);
  const rtoCodesStr = city.rtos.map((r) => r.code).join(", ");
  // Keep titles short: "HR-26, HR-55, HR-72 +4" instead of all 7 codes. Layout template appends "| NViQ".
  const titleCodes =
    city.rtos.length > 3
      ? `${city.rtos.slice(0, 3).map((r) => r.code).join(", ")} +${city.rtos.length - 3}`
      : rtoCodesStr;
  const title = `AIS 140 ${mining ? "& Mines " : ""}VLTD Fitment Center in ${city.name} (${titleCodes})`;
  const description = mining
    ? `Govt-approved AIS 140 GPS installation in ${city.name}. Same-day fitment across ${city.majorIndustries.join(", ")}, 1-hour Vahan & ${state.miningPortal.name} certificate. RTO Consultant wholesale rates.`
    : `AIS 140 VLTD fitment for all ${city.rtos.length} RTOs in ${city.name} (${rtoCodesStr}). Vahan 4.0 certificate in about 1 hour for fitness & permit. Fleet & RTO agent rates. Call +91 92570 38711 for today's price.`;

  const isSingleRto = city.rtos.length === 1;
  const canonicalUrl = isSingleRto
    ? `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}/${city.rtos[0].slug}`
    : `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `AIS 140 GPS in ${city.name}`,
      `VLTD fitment center ${city.name}`,
      `Mines GPS tracker ${city.name}`,
      `${city.name} RTO fitness passing`,
      ...city.rtos.map((r) => `${r.code} VLTD passing`),
      `RTO consultant GPS partner ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function CityDetailPage({ params }: Props) {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    notFound();
  }

  const { state, city } = match;
  const mining = hasMiningIntegration(state);

  // Single-RTO towns redirect directly to primary fitment page, eliminating duplicate sibling indexing
  if (city.rtos.length === 1) {
    permanentRedirect(`/vltd/${state.slug}/${city.slug}/${city.rtos[0].slug}`);
  }
  const rtoCodesStr = city.rtos.map((r) => r.code).join(", ");
  const locationLabel = `${city.name}, ${state.name}`;

  const faqs = [
    {
      q: `Where can I get AIS 140 VLTD fitted in ${city.name}?`,
      a: `NViQ provides doorstep technician fitment across ${city.name} including ${city.majorIndustries.join(", ")} and nearby transport yards within ${city.installationTurnaround}.`,
    },
    {
      q: `Which RTO offices in ${city.name} are covered for fitness passing?`,
      a: `We cover all RTO jurisdictions in ${city.name} (${rtoCodesStr}). Fitment certificates are pushed to the Vahan 4.0 database within 60 minutes for immediate fitness passing.`,
    },
    mining
      ? {
          q: `Is NViQ certified for ${state.miningPortal.name}?`,
          a: `Yes, all NViQ AIS 140 devices come pre-configured with emergency panic buttons and are fully whitelisted for e-Transit Pass generation under ${state.miningPortal.name}.`,
        }
      : {
          q: `Which vehicles in ${city.name} need an AIS 140 VLTD?`,
          a: `Public service vehicles (buses, school buses, taxis, cabs) and national-permit goods vehicles need an AIS 140 VLTD with emergency panic buttons under CMVR Rule 125H, active on Vahan 4.0 before fitness or permit work at any ${city.name} RTO.`,
        },
    {
      q: `How can local RTO agents in ${city.name} get wholesale dealer margins?`,
      a: `RTO agents in ${city.name} can register for the NViQ RTO Partner Program to unlock confidential wholesale dealer pricing, earn strong margins per fitment, and issue verified fitment certificates via mobile app.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "VLTD Hub", item: "https://www.naviqbharat.com/vltd" },
    { name: state.name, item: `https://www.naviqbharat.com/vltd/${state.slug}` },
    { name: city.name, item: `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}` },
  ];

  const waMessage = `Hi NViQ, I need AIS 140 ${mining ? "& Mines " : ""}VLTD fitment quotation for ${city.name} (${rtoCodesStr}). Please send quotation.`;
  const cityHref = (c: (typeof state.cities)[number]) =>
    c.rtos.length === 1 ? `/vltd/${state.slug}/${c.slug}/${c.rtos[0].slug}` : `/vltd/${state.slug}/${c.slug}`;

  const steps = [
    { title: "Send your vehicle number", text: `On WhatsApp, a call or the form above. We check Vahan and reply with today's price for ${city.name}.` },
    {
      title: "Technician comes to you",
      text: `At your yard or depot near ${city.majorIndustries.slice(0, 2).join(" or ") || city.name}, ${city.installationTurnaround.toLowerCase()}.`,
    },
    {
      title: "Certificate synced in ~1 hour",
      text: mining ? `Pushed to Vahan 4.0 and ${state.miningPortal.name}.` : "Pushed to Vahan 4.0, ready for the fitness lane.",
    },
    { title: "Passing goes ahead", text: `At any ${city.name} RTO: ${rtoCodesStr}.` },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`AIS 140 & Mines VLTD Fitment in ${city.name} (${rtoCodesStr})`}
        description={`Government-approved AIS 140 GPS fitment in ${city.name}. 1-hour passing certificate & doorstep fitment.`}
        url={`https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}`}
        locationName={locationLabel}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "AIS 140 VLTD", href: "/vltd" },
          { name: state.name, href: `/vltd/${state.slug}` },
          { name: city.name },
        ]}
        eyebrow={`Serving ${rtoCodesStr}`}
        title={`AIS 140 ${mining ? "& mines " : ""}VLTD fitment in ${city.name}`}
        intro={
          mining
            ? `Doorstep fitment across ${city.name} ${city.installationTurnaround.toLowerCase()}. Certificate synced to Vahan 4.0 and ${state.miningPortal.name} in about an hour.`
            : `Doorstep fitment across ${city.name} ${city.installationTurnaround.toLowerCase()}, with the fitment certificate updated on Vahan 4.0 in about an hour.`
        }
        points={["2 emergency panic buttons", "Technician comes to you", "Certificate in ~1 hour", `${city.rtos.length} RTOs covered`]}
      >
        <QuickLeadForm
          variant="kit"
          topic={`AIS 140 VLTD fitment (${city.name}, ${state.name})`}
          source={`vltd_city_${state.slug}_${city.slug}`}
          productOfInterest="ais_140_vltd"
        />
      </PageHero>

      {/* RTOS */}
      <Section labelledBy="rtos-title">
        <SectionHead
          id="rtos-title"
          title={`Pick your RTO in ${city.name}`}
          sub="Office address, passing focus and the certificate steps for each RTO code."
        />
        <div className="mt-10">
          <LinkRows
            cols={city.rtos.length > 4 ? 3 : 2}
            items={city.rtos.map((r) => ({
              href: `/vltd/${state.slug}/${city.slug}/${r.slug}`,
              name: rtoLabel(r, city.name),
              tag: r.code,
              strong: true,
              text: r.officeAddress,
            }))}
          />
        </div>
        <p className="mt-8 text-slate-600">
          Not sure your vehicle needs it?{" "}
          <Link href="/tools/ais-140-checker" className={textLink}>
            Check in 10 seconds
          </Link>
        </p>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="grey" labelledBy="steps-title">
        <SectionHead id="steps-title" title={`How fitment works in ${city.name}`} sub="Usually done the same day. You don't have to visit the RTO for the tracker." />
        <Steps steps={steps} />
      </Section>

      <VltdCompareSection locationName={city.name} miningPortalName={state.miningPortal.name} hasMining={mining} />

      <VltdPartnerSection locationName={city.name} />

      <FaqSection faqs={faqs} title={`${city.name} VLTD questions`} track="vltd_city_faq_call" />

      <FinalCta
        title={`Need same-day fitment in ${city.name}?`}
        sub="Share your vehicle number on WhatsApp and we confirm the slot and price right away."
        whatsappMessage={waMessage}
        track="vltd_city_final"
      />

      <DirectoryBand title={`Other cities in ${state.name}`}>
        <LinkRows
          cols={4}
          items={state.cities.map((c) => ({
            href: cityHref(c),
            name: c.name,
            current: c.slug === city.slug,
          }))}
        />
        <h3 className="mt-12 font-semibold">Other states</h3>
        <div className="mt-4">
          <VltdStateChips currentStateSlug={state.slug} />
        </div>
      </DirectoryBand>
    </KitPage>
  );
}
