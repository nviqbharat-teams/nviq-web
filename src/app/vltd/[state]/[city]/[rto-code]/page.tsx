import { Metadata } from "next";
import { enAlternates, hasHindiState } from "@/lib/hreflang";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { rtoLabel } from "@/lib/rto-label";
import {
  getRtoByCode,
  getPrebuiltRtoParams,
  getSiblingRtos,
  hasMiningIntegration,
} from "@/data/vltd-india";
import QuickLeadForm from "@/components/quick-lead-form";
import VltdPricingCalculator from "@/components/vltd/vltd-pricing-calculator";
import CaseStudyStrip from "@/components/case-studies/case-study-strip";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { VltdCompareSection, VltdPartnerSection, VltdStateChips } from "@/components/vltd/vltd-kit-sections";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Steps,
  TickList,
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
    "rto-code": string;
  }>;
};

export const dynamicParams = true;
export const revalidate = 604800;

// Main + focus states (RJ, UP, GJ, DL, HR, PB, BR) and rich states are built ahead;
// every other RTO in India renders on first request and is cached (dynamicParams + ISR).
export async function generateStaticParams() {
  return getPrebuiltRtoParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getRtoByCode(resolved.state, resolved.city, resolved["rto-code"]);

  if (!match) {
    return {
      title: "AIS 140 VLTD Fitment Center | NViQ",
      description: "Government-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const { state, city, rto } = match;
  const mining = hasMiningIntegration(state);
  const title = mining
    ? `AIS 140 & Mines VLTD Fitment in ${rto.code} (${city.name}) | 1-Hour Certificate`
    : `AIS 140 VLTD GPS Fitment in ${rto.code} (${city.name}) | Vahan Certificate in 1 Hour`;
  const description = mining
    ? `Get approved AIS 140 VLTD fitment near ${rto.name} (${rto.code}). Same-day doorstep installation in ${city.name}, instant Vahan 4.0 certificate upload, & ${state.miningPortal.name} whitelist. RTO Consultant wholesale rates available.`
    : `AIS 140 VLTD with panic buttons for fitness, permit & registration at ${rto.name} (${rto.code}), ${state.name}. Fitment certificate on Vahan 4.0 in about 1 hour. Call +91 92570 38711 for today's price. Fleet & RTO agent rates.`;

  return {
    title,
    description,
    keywords: [
      `${rto.code} VLTD certificate`,
      `AIS 140 GPS in ${city.name}`,
      `${rto.code} fitness passing GPS`,
      mining ? `Mines VLTD ${city.name}` : `VLTD fitness certificate ${city.name}`,
      mining ? `${state.miningPortal.name} GPS tracker` : `AIS 140 panic button ${rto.code}`,
      `RTO consultant VLTD ${rto.code}`,
      `Doorstep GPS installation ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}`,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: enAlternates(`/vltd/${state.slug}/${city.slug}/${rto.slug}`, hasHindiState(state.slug)),
  };
}

export default async function RtoDetailPage({ params }: Props) {
  const resolved = await params;
  const match = getRtoByCode(resolved.state, resolved.city, resolved["rto-code"]);

  if (!match) {
    notFound();
  }

  const { state, city, rto } = match;
  const mining = hasMiningIntegration(state);
  const locationLabel = `${rto.code} (${city.name}, ${state.name})`;
  const nearbyRtos = getSiblingRtos(state, rto.code, 8);

  const faqs = [
    {
      q: `How quickly can I get the AIS 140 certificate for vehicle passing at ${rto.code} (${rto.name})?`,
      a: `Fitment certificates are generated and synced to the Vahan 4.0 portal within 60 minutes after our certified technician installs and tests the panic button and SOS telemetry. Your passing inspection can proceed immediately.`,
    },
    mining
      ? {
          q: `Is NViQ GPS whitelisted for ${state.miningPortal.name}?`,
          a: `Yes, NViQ devices are whitelisted and pre-integrated with ${state.miningPortal.name}. Once fitted, your vehicle is approved for e-Transit Pass (e-Ravanna) generation across all mining zones in ${state.name}.`,
        }
      : {
          q: `Which vehicles registered at ${rto.code} need an AIS 140 VLTD?`,
          a: `Public service vehicles (buses, school buses, taxis, cabs) and national-permit goods vehicles need an AIS 140 VLTD with emergency panic buttons under CMVR Rule 125H. It must be fitted and active on Vahan 4.0 before fitness, permit or registration work at ${rto.name}.`,
        },
    {
      q: `What is the price of AIS 140 VLTD fitment at ${rto.code}?`,
      a: `It is one all-inclusive package: device, 2 panic buttons, installation, 1-year SIM and the Vahan certificate. The price depends on how many vehicles you fit, and fleets and RTO agents get a lower slab. Select your vehicle count in the calculator on this page or call +91 92570 38711, and we send your exact price within minutes.`,
    },
    {
      q: `Can a technician come to my transport depot in ${city.name} for fitment?`,
      a: `Yes! We offer doorstep fitment across ${city.majorIndustries.join(", ")} and nearby transport yards within ${city.installationTurnaround}. No need to bring your truck to a distant workshop.`,
    },
    {
      q: `How can RTO consultants in ${rto.code} earn wholesale dealer margins?`,
      a: `RTO agents can register on our RTO Partner portal to access confidential wholesale dealer pricing, earn strong margins per client, and generate verified fitment certificates via mobile app.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "VLTD Hub", item: "https://www.naviqbharat.com/vltd" },
    { name: state.name, item: `https://www.naviqbharat.com/vltd/${state.slug}` },
    { name: city.name, item: `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}` },
    { name: rto.code, item: `https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}` },
  ];

  const waMessage = `Hi NViQ, I need AIS 140 ${mining ? "& Mines " : ""}VLTD fitment certificate for ${rto.code} (${city.name}). Please call me.`;

  const pillars = [
    {
      title: "Vahan 4.0 sync in about 60 minutes",
      text: `Official fitment certificate uploaded to the Parivahan database, so passing at ${rto.code} is not held up.`,
    },
    {
      title: `Doorstep fitment ${city.installationTurnaround.toLowerCase()}`,
      text: `Certified technician visits your yard across ${city.majorIndustries.slice(0, 3).join(", ") || city.name}.`,
    },
    mining
      ? {
          title: `Whitelisted on ${state.miningPortal.name}`,
          text: "e-Transit Pass and e-Ravanna generation approved right after fitment, for dumpers and tippers.",
        }
      : {
          title: "Fleet and RTO agent rates",
          text: "One all-inclusive package: device, 2 panic buttons, fitting, 1-year SIM and the certificate.",
        },
    {
      title: "ARAI / ICAT certified device",
      text: "AIS 140 VLTD with 2 emergency panic buttons and dual-SIM failover.",
    },
  ];

  const steps = [
    { title: "Send your vehicle number", text: "On WhatsApp, a call or the form above. We check Vahan and reply with today's price." },
    { title: "Technician comes to you", text: `Anywhere in the ${rto.code} area, ${city.installationTurnaround.toLowerCase()}.` },
    { title: "Certificate synced in ~1 hour", text: mining ? `Pushed to Vahan 4.0 and ${state.miningPortal.name}.` : "Pushed to Vahan 4.0." },
    { title: `Passing at ${rto.code}`, text: `Take the vehicle to ${rto.name} the same day.` },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`AIS 140 ${mining ? "& Mines " : ""}VLTD in ${rto.code} - ${city.name}`}
        description={`Government-approved AIS 140 VLTD fitment near ${rto.name}. Same-day fitment & 1-hour passing certificate.`}
        url={`https://www.naviqbharat.com/vltd/${state.slug}/${city.slug}/${rto.slug}`}
        locationName={`${rto.code}, ${city.name}, ${state.name}`}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "AIS 140 VLTD", href: "/vltd" },
          { name: state.name, href: `/vltd/${state.slug}` },
          ...(city.rtos.length > 1 ? [{ name: city.name, href: `/vltd/${state.slug}/${city.slug}` }] : []),
          { name: rto.code },
        ]}
        eyebrow={`Approved for ${rto.code} fitness passing`}
        title={`AIS 140 ${mining ? "& mines " : ""}VLTD fitment in ${rto.code} (${city.name})`}
        intro={
          mining
            ? `Fitness passing or mining transit pass due at ${rto.name}? Doorstep installation ${city.installationTurnaround.toLowerCase()}, certificate synced to Vahan 4.0 and ${state.miningPortal.name} in about an hour.`
            : `Fitness, permit or registration due at ${rto.name}? AIS 140 VLTD with panic buttons fitted ${city.installationTurnaround.toLowerCase()}, certificate updated on Vahan 4.0 in about an hour.`
        }
        points={["2 emergency panic buttons", "Technician comes to you", "Certificate in ~1 hour", mining ? "Mining portal whitelisted" : "Fleet & agent rates"]}
      >
        <QuickLeadForm
          variant="kit"
          topic={`AIS 140 VLTD fitment (${rto.code}, ${city.name})`}
          source={`vltd_rto_${rto.slug}`}
          productOfInterest="ais_140_vltd"
        />
      </PageHero>

      {/* RTO OFFICE */}
      <Section labelledBy="office-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="inline-block bg-[#18202E] px-2.5 py-1 font-display text-lg font-bold text-[#60A5FA]">{rto.code}</p>
            <h2 id="office-title" className="mt-4 font-display text-3xl font-semibold leading-[1.1] sm:text-[40px]">
              {rto.name}
            </h2>
            <p className="mt-5 flex items-start gap-2 leading-relaxed text-slate-700">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1D5BD8]" aria-hidden="true" />
              {rto.officeAddress}
            </p>
            <div className="mt-6 border-l-4 border-[#1D5BD8] bg-[#F2F4F7] p-5">
              <p className="text-sm font-semibold text-slate-500">Passing focus</p>
              <p className="mt-1 leading-relaxed text-slate-700">{rto.fitnessPassingFocus}</p>
            </div>
            <p className="mt-8 text-slate-600">
              Not sure your vehicle needs it?{" "}
              <Link href="/tools/ais-140-checker" className={textLink}>
                Check in 10 seconds
              </Link>
            </p>
          </div>
          <TickList items={pillars} />
        </div>
      </Section>

      {/* PRICE */}
      <Section tone="grey" id="price" labelledBy="price-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-20">
          <SectionHead
            id="price-title"
            title={`Your price at ${rto.code}`}
            sub="Pick how many vehicles you are fitting. Fleets and RTO agents get a lower slab."
          />
          <VltdPricingCalculator
            locationName={locationLabel}
            stateSlug={state.slug}
            cityName={city.name}
            rtoCode={rto.code}
            miningPortalName={mining ? state.miningPortal.name : "Vahan 4.0"}
          />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section labelledBy="steps-title">
        <SectionHead id="steps-title" title="How fitment works" sub="Usually done the same day. You don't have to visit the RTO for the tracker." />
        <Steps steps={steps} />
        <CaseStudyStrip stateSlug={state.slug} rtoCode={rto.code} title={`Success stories near ${rto.code}`} />
      </Section>

      <VltdCompareSection tone="grey" locationName={locationLabel} miningPortalName={state.miningPortal.name} hasMining={mining} />

      <VltdPartnerSection locationName={rto.code} />

      <FaqSection faqs={faqs} title={`${rto.code} VLTD questions`} track="vltd_rto_faq_call" />

      <FinalCta
        title={`Passing due at ${rto.code}? Get the certificate in an hour.`}
        sub="Certified AIS 140 with dual panic buttons, fitted at your depot or yard. Vahan 4.0 upload the same day."
        whatsappMessage={waMessage}
        track="vltd_rto_final"
      />

      <DirectoryBand title={`VLTD fitment at other RTOs in ${state.name}`}>
        {(city.rtos.length > 1 || nearbyRtos.length > 0) && (
          <LinkRows
            cols={4}
            items={[
              ...city.rtos
                .filter((r) => r.code !== rto.code)
                .map((r) => ({ c: city, r })),
              ...nearbyRtos.filter(({ city: c }) => c.slug !== city.slug).map(({ city: c, rto: r }) => ({ c, r })),
            ]
              .slice(0, 12)
              .map(({ c, r }) => ({
                href: `/vltd/${state.slug}/${c.slug}/${r.slug}`,
                name: rtoLabel(r, c.name).includes(c.name) ? rtoLabel(r, c.name) : `${rtoLabel(r, c.name)}, ${c.name}`,
                tag: r.code,
              }))}
          />
        )}
        <p className="mt-6">
          <Link href={`/vltd/${state.slug}`} className={textLink}>
            All cities in {state.name}
          </Link>
        </p>
        <h3 className="mt-12 font-semibold">Other states</h3>
        <div className="mt-4">
          <VltdStateChips currentStateSlug={state.slug} />
        </div>
      </DirectoryBand>
    </KitPage>
  );
}
