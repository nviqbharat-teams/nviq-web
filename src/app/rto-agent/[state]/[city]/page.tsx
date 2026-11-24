import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RtoAgentLeadForm from "@/components/rto/rto-agent-lead-form";
import { RTO_SERVICES } from "@/data/rto-services";
import { getStateBySlug as getServiceState } from "@/data/vltd-india";
import { SALES_PHONE_DISPLAY } from "@/lib/contact";
import { allAgentCityParams, getAgentCity, rtoAgentHref } from "@/lib/rto-agent";
import { rtoCodeSlug, spokenCode } from "@/lib/rto-code";
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
  CallButton,
  WhatsAppButton,
  textLink,
} from "@/components/landing/kit";

const BASE = "https://www.naviqbharat.com";

type Props = { params: Promise<{ state: string; city: string }> };

export const dynamicParams = true;
export const revalidate = 604800;

export async function generateStaticParams() {
  // Pre-build the high-volume states; the rest render on first visit.
  const priority = new Set(["uttar-pradesh", "rajasthan", "madhya-pradesh", "bihar", "haryana", "gujarat", "maharashtra", "delhi"]);
  return allAgentCityParams().filter((p) => priority.has(p.state));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const match = getAgentCity(p.state, p.city);
  if (!match) return {};
  const { state, city } = match;
  const codes = city.rtos.map((r) => spokenCode(r.code)).join(", ");
  const title = `RTO Agent in ${city.name} (${codes}): Contact Number & WhatsApp`;
  const description = `Need an RTO agent in ${city.name}, ${state.name}? Call ${SALES_PHONE_DISPLAY} or WhatsApp for fitness, permit, RC transfer, NOC and loan removal at ${codes}. Total cost told before any work starts.`;
  const url = `${BASE}${rtoAgentHref(state.slug, city.slug)}`;
  return {
    title,
    description,
    keywords: [
      `rto agent in ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} rto agent contact number`,
      `rto agent ${city.name.toLowerCase()} mobile number`,
      `rto agent near me ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} rto office agent`,
      ...city.rtos.map((r) => `${spokenCode(r.code).toLowerCase()} rto agent`),
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "NViQ Bharat", locale: "en_IN", type: "website" },
  };
}

export default async function RtoAgentCityPage({ params }: Props) {
  const p = await params;
  const match = getAgentCity(p.state, p.city);
  if (!match) notFound();
  const { state, city } = match;

  const codes = city.rtos.map((r) => spokenCode(r.code)).join(", ");
  const offices = city.rtos.map((r) => r.name).join(", ");
  const place = `${city.name}, ${state.name}`;
  const source = `rto_agent_${state.slug}_${city.slug}`;
  const serviceState = getServiceState(state.slug);
  const waMessage = `Hi NViQ, I need an RTO agent in ${place} (${codes}). Work needed: `;
  const url = `${BASE}${rtoAgentHref(state.slug, city.slug)}`;

  const faqs = [
    {
      q: `What is the contact number of an RTO agent in ${city.name}?`,
      a: `Call or WhatsApp NViQ on ${SALES_PHONE_DISPLAY} (Monday to Saturday, 9 am to 7 pm). Tell us the work and your vehicle number, and our RTO partner for ${codes} takes it up.`,
    },
    {
      q: `How much does an RTO agent charge in ${city.name}?`,
      a: `It depends on the work and the government fee for your vehicle. We check your vehicle on Vahan first and tell you the total (government fee plus our service charge) before any work starts. No surprises later.`,
    },
    {
      q: `Which RTO work do you handle in ${city.name}?`,
      a: `Commercial vehicle work at ${offices}: fitness and passing, national, tourist and taxi permits, AIS 140 GPS (VLTD) for passing, RC transfer, NOC for another state, loan (hypothecation) removal and new commercial registration. For anything else, ask and we tell you straight if we can help.`,
    },
    {
      q: `Do I have to go to the ${city.name} RTO myself?`,
      a: `For most paperwork, no: you share documents on WhatsApp. Some work, like the fitness inspection, needs the vehicle at the RTO or testing station. We tell you exactly when and where.`,
    },
    {
      q: `Why is my fitness or permit stuck at ${codes}?`,
      a: `The most common reasons are a missing or inactive AIS 140 VLTD on Vahan, expired insurance or PUC, or pending tax. Share your vehicle number and we tell you exactly what is blocking it.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "RTO Agent", item: `${BASE}/rto-agent` },
          { "@type": "ListItem", position: 3, name: state.name, item: `${BASE}/rto-agent#${state.slug}` },
          { "@type": "ListItem", position: 4, name: city.name, item: url },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: `NViQ RTO Agent Services — ${city.name}`,
        url,
        telephone: "+91 92570 38711",
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: state.name } },
        address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: state.name, addressCountry: "IN" },
        openingHours: "Mo-Sa 09:00-19:00",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <KitPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO Agent", href: "/rto-agent" }, { name: state.name, href: `/rto-agent#${state.slug}` }, { name: city.name }]}
        eyebrow={`RTO agent · ${codes}`}
        title={`RTO agent in ${city.name}: call or WhatsApp`}
        highlight={`RTO agent in ${city.name}`}
        intro={`Fitness, permit, RC transfer or NOC stuck at ${offices}? Tell us the work. We check your vehicle on Vahan and tell you the total cost and documents before anything starts.`}
        points={["Total cost told upfront", "Vahan checked before you pay", "Updates on WhatsApp", `Work at ${codes}`]}
        actions={
          <>
            <CallButton label={`Call ${SALES_PHONE_DISPLAY}`} track={`${source}_hero_call`} />
            <WhatsAppButton message={waMessage} track={`${source}_hero_whatsapp`} />
          </>
        }
        formId="lead"
      >
        <RtoAgentLeadForm place={place} rtoCodes={city.rtos.map((r) => r.code).join(", ")} source={source} />
      </PageHero>

      <Section labelledBy="avoid-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHead
            id="avoid-title"
            title="Why people hand RTO work to an agent"
            sub={`One wrong document or a missing VLTD entry can mean another trip to ${city.name} RTO. We sort it out before you go.`}
          />
          <TickList
            items={[
              { title: "No repeat trips", text: "We check Vahan first, so you know what is pending before you visit." },
              { title: "No hidden charges", text: "Government fee and our charge, told as one total before work starts." },
              { title: "GPS problems fixed on the spot", text: "If passing is blocked on AIS 140 VLTD, we fit and update it in about an hour." },
              { title: "Know where your work is", text: "Status updates on WhatsApp until the work is done." },
            ]}
          />
        </div>
      </Section>

      <Section tone="grey" labelledBy="services-title">
        <SectionHead id="services-title" title={`RTO work we handle in ${city.name}`} sub="Pick your work to see documents and steps." />
        <div className="mt-10">
          <LinkRows
            cols={3}
            items={RTO_SERVICES.map((s) => ({
              href: `/rto-services/${s.slug}${serviceState ? `/${state.slug}` : ""}`,
              name: s.name,
              tag: s.vltdNeeded ? "VLTD needed" : undefined,
            }))}
          />
        </div>
      </Section>

      <Section labelledBy="steps-title">
        <SectionHead id="steps-title" title="How it works" sub="Usually a reply within minutes during working hours." />
        <Steps
          steps={[
            { title: "Tell us the work", text: "Use the form, call or WhatsApp. Add your vehicle number if you have it." },
            { title: "Vahan check and total cost", text: "We tell you what is pending, the documents and the total cost." },
            { title: "Share documents", text: "Send photos on WhatsApp. If GPS is needed, a technician comes to you." },
            { title: "Work done", text: `Filed at ${codes}, with updates on WhatsApp until it is complete.` },
          ]}
        />
      </Section>

      <Section tone="grey" labelledBy="offices-title">
        <SectionHead id="offices-title" title={`RTO offices in ${city.name}`} />
        <div className="mt-10">
          <LinkRows
            cols={city.rtos.length > 2 ? 3 : 2}
            items={city.rtos.map((r) => ({ href: `/rto-code/${rtoCodeSlug(r.code)}`, name: r.name, tag: spokenCode(r.code), strong: true }))}
          />
        </div>
      </Section>

      <FaqSection faqs={faqs} title={`RTO agent in ${city.name}: questions`} track={`${source}_faq_call`} tone="white" />

      <FinalCta
        title={`Get your ${city.name} RTO work moving today`}
        sub="Tell us the work on WhatsApp. You get the total cost before anything starts."
        whatsappMessage={waMessage}
        track={`${source}_final`}
      />

      <section className="border-t border-[#D9DEE6] bg-[#F2F4F7] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-700">
            Are you an RTO agent or consultant in {city.name}?{" "}
            <Link href="/rto-partner" className={textLink}>
              Join the NViQ partner network for dealer rates on AIS 140 GPS
            </Link>
          </p>
        </div>
      </section>

      <DirectoryBand title={`RTO agent in other cities of ${state.name}`}>
        <LinkRows
          cols={4}
          items={state.cities.map((c) => ({
            href: rtoAgentHref(state.slug, c.slug),
            name: c.name,
            tag: c.rtos.map((r) => spokenCode(r.code)).join(", "),
            current: c.slug === city.slug,
          }))}
        />
      </DirectoryBand>
    </KitPage>
  );
}
