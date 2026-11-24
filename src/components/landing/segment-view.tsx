import Link from "next/link";
import QuickLeadForm from "@/components/quick-lead-form";
import CaseStudyStrip from "@/components/case-studies/case-study-strip";
import { SEGMENTS, type Segment } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";
import { hasMiningIntegration, type StateData } from "@/data/vltd-india";
import { BASE_URL, FaqJsonLd, StateRtoLinks, getPriorityStates } from "./landing-shared";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Callout,
  TickList,
  ChipLinks,
  FaqSection,
  FinalCta,
  wrap,
  textLink,
} from "./kit";
import { X } from "lucide-react";

export function segmentUrl(segment: string, state?: string) {
  return `/gps-tracking/${segment}${state ? `/${state}` : ""}`;
}

export function segmentFaqs(seg: Segment, state?: StateData) {
  if (!state) return seg.faqs;
  return [
    ...seg.faqs,
    {
      q: `Do you cover all RTOs in ${state.name} for ${seg.name.toLowerCase()}?`,
      a: `Yes. We fit AIS 140 VLTD for ${seg.name.toLowerCase()} across all ${state.cities.reduce((n, c) => n + c.rtos.length, 0)} RTOs in ${state.name} and update the certificate on Vahan. Call or WhatsApp with your vehicle number and city.`,
    },
  ];
}

export default function SegmentView({ seg, state }: { seg: Segment; state?: StateData }) {
  const where = state ? ` in ${state.name}` : "";
  const title = `${seg.h1}${where}`;
  const faqs = segmentFaqs(seg, state);
  const relatedServices = RTO_SERVICES.filter((s) => s.relatedSegments.includes(seg.slug));
  const showMiningNote = seg.slug === "mining-tipper" && state && !hasMiningIntegration(state);
  const waMessage = `Hi NViQ, I need AIS 140 VLTD / GPS for ${seg.name.toLowerCase()}${where}. Please share today's price.`;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "GPS & VLTD by Vehicle", href: "/gps-tracking" },
    ...(state
      ? [{ name: seg.name, href: segmentUrl(seg.slug) }, { name: state.name }]
      : [{ name: seg.name }]),
  ];

  return (
    <KitPage>
      <FaqJsonLd
        faqs={faqs}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, item: `${BASE_URL}${c.href ?? segmentUrl(seg.slug, state?.slug)}` }))}
      />

      <PageHero
        crumbs={crumbs}
        eyebrow={state ? `${seg.name} · ${state.name}` : `For ${seg.buyer}`}
        title={title}
        intro={seg.intro}
        points={seg.features.slice(0, 4).map((f) => f.title)}
      >
        <QuickLeadForm
          variant="kit"
          topic={`${seg.name} VLTD / GPS${where}`}
          source={`segment_${seg.slug}${state ? `_${state.slug}` : ""}`}
          productOfInterest={seg.slug === "school-bus" || seg.slug === "college-bus" || seg.slug === "staff-transport" ? "gps_fleet_tracking" : "ais_140_vltd"}
        />
      </PageHero>

      {/* IS IT MANDATORY + PAINS */}
      <Section labelledBy="need-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <Callout
              title={
                seg.needsVltd === "mandatory"
                  ? `Is VLTD mandatory for ${seg.name.toLowerCase()}? Yes.`
                  : `Do ${seg.name.toLowerCase()} need VLTD? It depends.`
              }
            >
              <p>{seg.needsVltdNote}</p>
              {showMiningNote && (
                <p className="mt-2">For {state!.name}, share your vehicle number and we confirm what the state mining department needs.</p>
              )}
            </Callout>
            <p className="mt-6 text-slate-600">
              Not sure about your vehicle?{" "}
              <Link href="/tools/ais-140-checker" className={textLink}>
                Free checker, answer in 10 seconds
              </Link>
            </p>
          </div>
          <div>
            <h2 id="need-title" className="font-display text-2xl font-semibold sm:text-3xl">
              Problems we solve for {seg.buyer}
            </h2>
            <ul className="mt-6 border-t border-[#D9DEE6]">
              {seg.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 border-b border-[#D9DEE6] py-4 leading-relaxed text-slate-700">
                  <X className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section tone="grey" labelledBy="features-title">
        <SectionHead id="features-title" title="What you get with NViQ" sub="One price covers the device, the fitting, the Vahan work and the app." />
        <div className="mt-10">
          <TickList items={seg.features} />
        </div>
      </Section>

      {/* RELATED RTO WORK + LOCAL */}
      {(relatedServices.length > 0 || state) && (
        <Section labelledBy="rto-title">
          {relatedServices.length > 0 && (
            <>
              <SectionHead id="rto-title" title="RTO work we help with" sub="VLTD is fitted in the same visit when the RTO work needs it." />
              <div className="mt-8">
                <ChipLinks
                  items={relatedServices.map((s) => ({
                    href: `/rto-services/${s.slug}${state ? `/${state.slug}` : ""}`,
                    name: `${s.short}${where}`,
                  }))}
                />
              </div>
            </>
          )}
          <CaseStudyStrip segment={seg.slug} stateSlug={state?.slug} />
          {state && <StateRtoLinks state={state} />}
        </Section>
      )}

      <FaqSection faqs={faqs} track={`segment_${seg.slug}_faq_call`} />

      <FinalCta
        title={`Get your ${seg.name.toLowerCase()} tracked${where}.`}
        sub="Send your vehicle count and we reply with today's all-inclusive price, usually within minutes."
        whatsappMessage={waMessage}
        track={`segment_${seg.slug}_final`}
      />

      {/* MORE */}
      <section className="border-t border-[#D9DEE6] py-14">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="font-display text-2xl font-semibold">{seg.name} VLTD / GPS by state</h2>
            <div className="mt-5">
              <ChipLinks
                items={getPriorityStates().map((s) => ({ href: segmentUrl(seg.slug, s.slug), name: s.name, current: s.slug === state?.slug }))}
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Other vehicle types</h2>
            <div className="mt-5">
              <ChipLinks
                items={SEGMENTS.filter((s) => s.slug !== seg.slug).map((s) => ({ href: segmentUrl(s.slug, state?.slug), name: s.name }))}
              />
            </div>
          </div>
        </div>
      </section>
    </KitPage>
  );
}
