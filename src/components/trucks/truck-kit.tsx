// Kit-styled sections for the /trucks and /truck-passing pages. Same visual
// language as the VLTD and RTO partner pages (navy hero, ruled lists, square edges).
import QuickLeadForm from "@/components/quick-lead-form";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES, type TruckingCity } from "@/data/rajasthan-trucks-master";
import {
  PageHero,
  Section,
  SectionHead,
  TickList,
  Callout,
  LinkRows,
  WhatsAppButton,
  type Crumb,
} from "@/components/landing/kit";

export function TruckPageHero({
  crumbs,
  eyebrow,
  title,
  highlight,
  intro,
  points,
  waMessage,
  topic,
  source,
  track,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  points: string[];
  waMessage: string;
  topic: string;
  source: string;
  track: string;
}) {
  return (
    <PageHero
      crumbs={crumbs}
      eyebrow={eyebrow}
      title={title}
      highlight={highlight}
      intro={intro}
      points={points}
      actions={<WhatsAppButton message={waMessage} track={`${track}_hero_whatsapp`} />}
    >
      <QuickLeadForm variant="kit" topic={topic} source={source} productOfInterest="ais_140_vltd" />
    </PageHero>
  );
}

/** The three compliance pillars every truck needs, plus the legal notice. */
export function TruckComplianceSection({
  name,
  rtoCode,
  tone = "white",
}: {
  name: string;
  rtoCode?: string;
  tone?: "white" | "grey";
}) {
  return (
    <Section tone={tone} labelledBy="compliance-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <SectionHead
            id="compliance-title"
            title="What your truck needs to pass"
            sub={`Mandatory for ${name}${rtoCode ? ` (${rtoCode})` : ""} fitness passing. NViQ covers all three in one visit.`}
          />
          <div className="mt-8">
            <Callout title="Is it mandatory?">
              Yes. AIS 140 VLTD fitment is required for commercial vehicle fitness renewals under Section 192A of the Motor
              Vehicles Act.
            </Callout>
          </div>
        </div>
        <TickList
          cols={1}
          items={[
            {
              title: "DMG Khanij e-Ravanna",
              text: "Whitelisted on the Rajasthan Mines portal. Instant e-transit pass (ई-रवाना) generation with zero penalty risk.",
            },
            {
              title: "60-minute Vahan 4.0 sync",
              text: "Digital fitment certificate uploaded to Parivahan Sewa within an hour, ready for the fitness lane.",
            },
            {
              title: "Two SOS panic buttons",
              text: "ARAI/ICAT certified, with 2 cabin panic buttons, internal battery backup and police command push.",
            },
          ]}
        />
      </div>
    </Section>
  );
}

/** All truck categories as ruled link rows. */
export function TruckCategoryRows({
  currentCategorySlug,
  title = "Truck and fleet categories",
  sub = "AIS 140 fitment specs for each vehicle type.",
  tone = "white",
}: {
  currentCategorySlug?: string;
  title?: string;
  sub?: string;
  tone?: "white" | "grey";
}) {
  return (
    <Section tone={tone} labelledBy="categories-title">
      <SectionHead id="categories-title" title={title} sub={sub} />
      <div className="mt-10">
        <LinkRows
          cols={4}
          items={TRUCK_CATEGORIES.map((c) => ({
            href: `/trucks/${c.slug}`,
            name: c.title,
            text: c.shortDesc,
            tag: c.wheelAxle,
            current: c.slug === currentCategorySlug,
          }))}
        />
      </div>
    </Section>
  );
}

export function rajasthanCityItems(currentCitySlug?: string) {
  return RAJASTHAN_TRUCK_CITIES.map((c) => ({
    href: `/truck-passing/${c.stateSlug}/${c.slug}`,
    name: c.name,
    tag: Array.from(new Set(c.areas.map((a) => a.rtoCode))).join(", "),
    current: c.slug === currentCitySlug,
  }));
}

/** Rajasthan trucking hubs as ruled link rows. */
export function RajasthanCityRows({
  currentCitySlug,
  title = "Rajasthan trucking and RTO hubs",
  sub = "Major transport corridors, mineral loading zones and RTO jurisdictions.",
  tone = "grey",
}: {
  currentCitySlug?: string;
  title?: string;
  sub?: string;
  tone?: "white" | "grey";
}) {
  return (
    <Section tone={tone} labelledBy="hubs-title">
      <SectionHead id="hubs-title" title={title} sub={sub} />
      <div className="mt-10">
        <LinkRows cols={4} items={rajasthanCityItems(currentCitySlug)} />
      </div>
    </Section>
  );
}

/** Transport nagars and yards inside one city. */
export function AreaRows({ city, tone = "grey" }: { city: TruckingCity; tone?: "white" | "grey" }) {
  return (
    <Section tone={tone} labelledBy="areas-title">
      <SectionHead
        id="areas-title"
        title={`Transport nagars and yards in ${city.name}`}
        sub={`Doorstep fitment and mechanic clusters across ${city.name}. Pick your area.`}
      />
      <div className="mt-10">
        <LinkRows
          cols={3}
          items={city.areas.map((area) => ({
            href: `/truck-passing/${city.stateSlug}/${city.slug}/${area.slug}`,
            name: area.name,
            tag: `${area.rtoCode} · ${area.doorstepFitmentTime}`,
            strong: true,
            text: `${area.landmark}. Fleets: ${area.dominantFleets.join(", ")}`,
          }))}
        />
      </div>
    </Section>
  );
}
