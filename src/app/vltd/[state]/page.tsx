import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getStateBySlug,
  getAllStateParams,
  hasMiningIntegration,
} from "@/data/vltd-india";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";
import QuickLeadForm from "@/components/quick-lead-form";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { VltdCompareSection, VltdPartnerSection, VltdStateChips } from "@/components/vltd/vltd-kit-sections";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  TickList,
  LinkRows,
  ChipLinks,
  Callout,
  FaqSection,
  FinalCta,
  DirectoryBand,
  textLink,
} from "@/components/landing/kit";

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllStateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    return {
      title: "State AIS 140 VLTD Portals | NViQ",
      description: "State-approved AIS 140 GPS fitment with instant certificate.",
    };
  }

  const mining = hasMiningIntegration(state);
  const rtoCount = state.cities.reduce((n, c) => n + c.rtos.length, 0);
  const title = mining
    ? `${state.name} AIS 140 & Mines VLTD GPS | ${state.miningPortal.name} Approved`
    : `${state.name} AIS 140 VLTD GPS Fitment | All ${rtoCount} RTOs`;
  const description = mining
    ? `Govt-certified AIS 140 VLTD fitment across ${state.name}. Whitelisted for ${state.miningPortal.name} & Vahan 4.0. Guaranteed 1-hour certificate, doorstep fitment, and wholesale RTO consultant partnership.`
    : `AIS 140 VLTD with panic buttons for fitness, permit & registration at all ${rtoCount} RTOs in ${state.name}. Vahan 4.0 certificate in about 1 hour. Fleet & RTO agent rates. Call +91 92570 38711 for today's price.`;

  return {
    title,
    description,
    keywords: [
      `${state.name} VLTD GPS tracker`,
      `AIS 140 fitment ${state.name}`,
      mining ? `${state.miningPortal.name} approved GPS` : `${state.name} VLTD fitness certificate`,
      mining ? `${state.name} mining dumper GPS` : `${state.name} school bus GPS AIS 140`,
      `${state.name} RTO passing GPS certificate`,
      `RTO consultant partner ${state.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://www.naviqbharat.com/vltd/${state.slug}`,
      siteName: "NViQ",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.naviqbharat.com/vltd/${state.slug}`,
    },
  };
}

export default async function StateDetailPage({ params }: Props) {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    notFound();
  }

  const mining = hasMiningIntegration(state);

  const breadcrumbs = [
    { name: "Home", item: "https://www.naviqbharat.com" },
    { name: "VLTD Hub", item: "https://www.naviqbharat.com/vltd" },
    { name: state.name, item: `https://www.naviqbharat.com/vltd/${state.slug}` },
  ];

  const rtoCount = state.cities.reduce((n, c) => n + c.rtos.length, 0);
  const cityHref = (c: (typeof state.cities)[number]) =>
    c.rtos.length === 1 ? `/vltd/${state.slug}/${c.slug}/${c.rtos[0].slug}` : `/vltd/${state.slug}/${c.slug}`;
  const waMessage = mining
    ? `Hi NViQ, I need AIS 140 & Mines VLTD fitment in ${state.name} (${state.miningPortal.name}). Please share quotation.`
    : `Hi NViQ, I need AIS 140 VLTD fitment in ${state.name}. Please share quotation.`;

  const pillars = [
    {
      title: mining ? `Whitelisted on ${state.miningPortal.name}` : "Vahan 4.0 certificate in ~1 hour",
      text: mining
        ? `${state.miningPortal.description} Your vehicle is approved for e-Transit Pass generation right after fitment.`
        : `Fitment certificate synced to Vahan 4.0 within about 60 minutes, so fitness, permit or registration at any ${state.name} RTO goes ahead.`,
    },
    {
      title: `Accepted by ${state.transportDepartment}`,
      text: "ARAI / ICAT certified AIS 140 device with 2 emergency panic buttons and dual-SIM failover.",
    },
    {
      title: "Technician comes to you",
      text: `Doorstep fitment across all ${state.cities.length} cities in ${state.name}: transport nagars, depots, yards and mine pits.`,
    },
    {
      title: "Fleet and RTO agent rates",
      text: "One all-inclusive package. The more vehicles you fit, the lower the slab. Ask for today's price on WhatsApp.",
    },
  ];

  return (
    <KitPage>
      <JsonLdSchema
        pageTitle={`${state.name} AIS 140 ${mining ? "& Mines " : ""}VLTD GPS`}
        description={
          mining
            ? `Government-approved AIS 140 GPS fitment across ${state.name}. Whitelisted for ${state.miningPortal.name}.`
            : `AIS 140 VLTD fitment with Vahan 4.0 certificate across ${state.name}.`
        }
        url={`https://www.naviqbharat.com/vltd/${state.slug}`}
        locationName={state.name}
        faqs={state.stateFaqs}
        breadcrumbs={breadcrumbs}
      />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "AIS 140 VLTD", href: "/vltd" }, { name: state.name }]}
        eyebrow={mining ? `Whitelisted on ${state.miningPortal.name} · Vahan 4.0` : `Vahan 4.0 certificate · All ${rtoCount} ${state.name} RTOs`}
        title={`AIS 140 ${mining ? "& mines " : ""}VLTD fitment in ${state.name}`}
        intro={
          mining
            ? `ARAI-certified AIS 140 devices with panic buttons, fitted at your yard or mine pit anywhere in ${state.name}. Certificate synced to Vahan 4.0 and ${state.miningPortal.name} in about an hour.`
            : `ARAI-certified AIS 140 devices with panic buttons for buses, school vehicles, taxis and goods vehicles across ${state.name}. Fitment certificate updated on Vahan 4.0 in about an hour.`
        }
        points={["2 emergency panic buttons", "Technician comes to you", "Certificate in ~1 hour", mining ? "Mining portal whitelisted" : `${rtoCount} RTOs covered`]}
      >
        <QuickLeadForm
          variant="kit"
          topic={`AIS 140 VLTD fitment (${state.name})`}
          source={`vltd_state_${state.slug}`}
          productOfInterest="ais_140_vltd"
        />
      </PageHero>

      {/* STATE COMPLIANCE */}
      <Section labelledBy="compliance-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHead
              id="compliance-title"
              title={`What ${state.name} checks`}
              sub={`Fitment is checked by ${state.transportDepartment}${mining ? ` and ${state.miningPortal.name}` : ""}. We handle both in one visit.`}
            />
            <div className="mt-8">
              <Callout title={state.miningPortal.name}>{state.miningPortal.description}</Callout>
            </div>
            {state.commonVehicleTypes.length > 0 && (
              <>
                <h3 className="mt-10 font-semibold">Vehicles we fit most in {state.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {state.commonVehicleTypes.map((t) => (
                    <li key={t} className="bg-[#F2F4F7] px-3 py-1.5 text-sm font-semibold text-slate-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            )}
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

      {/* CITIES */}
      <Section tone="grey" labelledBy="cities-title">
        <SectionHead
          id="cities-title"
          title={`Pick your city in ${state.name}`}
          sub={`All ${state.cities.length} cities and ${rtoCount} RTOs. Doorstep fitment at every one.`}
        />
        <div className="mt-10">
          <LinkRows
            cols={state.cities.length > 12 ? 4 : 3}
            items={state.cities.map((c) => ({
              href: cityHref(c),
              name: c.name,
              tag: c.rtos.length > 3 ? `${c.rtos.slice(0, 3).map((r) => r.code).join(", ")} +${c.rtos.length - 3}` : c.rtos.map((r) => r.code).join(", "),
            }))}
          />
        </div>
      </Section>

      <VltdCompareSection locationName={state.name} miningPortalName={state.miningPortal.name} hasMining={mining} />

      {/* TRUCKS */}
      <Section tone="grey" labelledBy="trucks-title">
        <SectionHead
          id="trucks-title"
          title="Fitment for your kind of truck"
          sub="AIS 140 fitment specs by vehicle category."
        />
        <div className="mt-10">
          <LinkRows
            cols={4}
            items={TRUCK_CATEGORIES.map((c) => ({ href: `/trucks/${c.slug}`, name: c.title, text: c.shortDesc, tag: c.wheelAxle }))}
          />
        </div>
        {state.slug === "rajasthan" && (
          <>
            <h3 className="mt-14 font-display text-2xl font-semibold">Rajasthan trucking and RTO hubs</h3>
            <div className="mt-5">
              <ChipLinks
                items={RAJASTHAN_TRUCK_CITIES.map((c) => ({ href: `/truck-passing/${c.stateSlug}/${c.slug}`, name: c.name }))}
              />
            </div>
          </>
        )}
      </Section>

      <VltdPartnerSection locationName={state.name} />

      <FaqSection faqs={state.stateFaqs} title={`${state.name} VLTD questions`} track="vltd_state_faq_call" />

      <FinalCta
        title={`Fitness or permit due in ${state.name}? Get the certificate in an hour.`}
        sub="Certified AIS 140 with dual panic buttons, fitted at your depot or yard. Vahan 4.0 upload the same day."
        whatsappMessage={waMessage}
        track="vltd_state_final"
      />

      <DirectoryBand title="VLTD fitment in other states">
        <VltdStateChips currentStateSlug={state.slug} />
      </DirectoryBand>
    </KitPage>
  );
}
