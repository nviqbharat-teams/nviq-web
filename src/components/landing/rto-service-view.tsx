import { Check } from "lucide-react";
import QuickLeadForm from "@/components/quick-lead-form";
import { RTO_SERVICES, type RtoService } from "@/data/rto-services";
import { SEGMENTS } from "@/data/segments";
import type { StateData } from "@/data/vltd-india";
import { BASE_URL, FaqJsonLd, StateRtoLinks, getPriorityStates } from "./landing-shared";
import { KitPage, PageHero, Section, SectionHead, Callout, Steps, ChipLinks, FaqSection, FinalCta, wrap } from "./kit";

export function serviceUrl(service: string, state?: string) {
  return `/rto-services/${service}${state ? `/${state}` : ""}`;
}

export function serviceFaqs(svc: RtoService, state?: StateData) {
  const base = [
    ...svc.faqs,
    {
      q: `How do I start my ${svc.short.toLowerCase()} work with NViQ?`,
      a: `Send your vehicle number on WhatsApp or call us. We check the vehicle on Vahan, tell you exactly which documents are pending and the total cost, and handle the work${svc.vltdNeeded ? " with VLTD fitment in the same visit" : ""}.`,
    },
  ];
  if (!state) return base;
  return [
    ...base,
    {
      q: `Do you handle ${svc.short.toLowerCase()} at every RTO in ${state.name}?`,
      a: `Yes. We work across all ${state.cities.reduce((n, c) => n + c.rtos.length, 0)} RTOs in ${state.name} through our RTO partner network. Share your vehicle number and RTO and we confirm the timeline.`,
    },
  ];
}

export default function RtoServiceView({ svc, state }: { svc: RtoService; state?: StateData }) {
  const where = state ? ` in ${state.name}` : "";
  const faqs = serviceFaqs(svc, state);
  const segments = SEGMENTS.filter((s) => svc.relatedSegments.includes(s.slug));
  const waMessage = `Hi NViQ, I need help with ${svc.short}${where}. My vehicle number is: `;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "RTO Services", href: "/rto-services" },
    ...(state ? [{ name: svc.short, href: serviceUrl(svc.slug) }, { name: state.name }] : [{ name: svc.short }]),
  ];

  const steps = svc.steps.map((st) => ({ title: st }));

  return (
    <KitPage>
      <FaqJsonLd
        faqs={faqs}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, item: `${BASE_URL}${c.href ?? serviceUrl(svc.slug, state?.slug)}` }))}
      />

      <PageHero
        crumbs={crumbs}
        eyebrow={svc.vltdNeeded ? "VLTD fitment included when needed" : "Commercial vehicle RTO work"}
        title={`${svc.name}${where}`}
        intro={svc.intro}
        points={["Vahan checked before you pay", "Exact cost upfront", ...(svc.vltdNeeded ? ["VLTD fitted in the same visit"] : []), "Handled by our RTO partner network"]}
      >
        <QuickLeadForm
          variant="kit"
          topic={`${svc.short}${where}`}
          source={`rto_service_${svc.slug}${state ? `_${state.slug}` : ""}`}
          productOfInterest={svc.vltdNeeded ? "ais_140_vltd" : "general"}
          heading={`Get ${svc.short} done${where}`}
          subheading="Share your number and vehicle. We check Vahan and send the exact cost and pending documents on WhatsApp."
        />
      </PageHero>

      {/* VLTD NOTE + DOCUMENTS */}
      <Section labelledBy="docs-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <Callout title={svc.vltdNeeded ? "VLTD is required for this work" : "Do I need VLTD for this?"}>
              <p>{svc.vltdNote}</p>
            </Callout>
            <h3 className="mt-10 font-display text-xl font-semibold">Who needs it</h3>
            <ul className="mt-4 space-y-2.5">
              {svc.whoNeeds.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1D5BD8]" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
            {segments.length > 0 && (
              <div className="mt-6">
                <ChipLinks
                  items={segments.map((s) => ({
                    href: `/gps-tracking/${s.slug}${state ? `/${state.slug}` : ""}`,
                    name: `VLTD / GPS for ${s.name}${where}`,
                  }))}
                />
              </div>
            )}
          </div>
          <div>
            <h2 id="docs-title" className="font-display text-2xl font-semibold sm:text-3xl">
              Documents needed
            </h2>
            <ul className="mt-6 border-t border-[#D9DEE6]">
              {svc.documents.map((d) => (
                <li key={d} className="flex items-start gap-3 border-b border-[#D9DEE6] py-4 leading-relaxed">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#0F8A4B]" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">Exact list and fees vary by state and vehicle. We confirm after checking Vahan.</p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="grey" labelledBy="steps-title">
        <SectionHead id="steps-title" title="How it works" sub="You know the cost and the pending papers before anything is filed." />
        <Steps steps={steps} />
      </Section>

      {state && (
        <Section>
          <StateRtoLinks state={state} />
        </Section>
      )}

      <FaqSection faqs={faqs} track={`rto_service_${svc.slug}_faq_call`} tone={state ? "grey" : "white"} />

      <FinalCta
        title={`Get your ${svc.short.toLowerCase()} done${where}.`}
        sub="Send the vehicle number. Exact cost and document list on WhatsApp, usually within minutes."
        whatsappMessage={waMessage}
        track={`rto_service_${svc.slug}_final`}
      />

      {/* MORE */}
      <section className="border-t border-[#D9DEE6] py-14">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2`}>
          <div>
            <h2 className="font-display text-2xl font-semibold">{svc.short} by state</h2>
            <div className="mt-5">
              <ChipLinks
                items={getPriorityStates().map((s) => ({ href: serviceUrl(svc.slug, s.slug), name: s.name, current: s.slug === state?.slug }))}
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Other RTO services</h2>
            <div className="mt-5">
              <ChipLinks
                items={RTO_SERVICES.filter((s) => s.slug !== svc.slug).map((s) => ({ href: serviceUrl(s.slug, state?.slug), name: s.short }))}
              />
            </div>
          </div>
        </div>
      </section>
    </KitPage>
  );
}
