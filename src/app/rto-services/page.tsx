import { Metadata } from "next";
import { X } from "lucide-react";
import QuickLeadForm from "@/components/quick-lead-form";
import { BASE_URL, getPriorityStates } from "@/components/landing/landing-shared";
import { KitPage, PageHero, Section, SectionHead, Steps, LinkRows, ChipLinks, FinalCta } from "@/components/landing/kit";
import { RTO_SERVICES } from "@/data/rto-services";

const title = "RTO Services for Commercial Vehicles | Fitness, Permit, Transfer";
const description =
  "Fitness certificate, national permit, tourist permit, taxi and bus permits, new registration, RC transfer and NOC for trucks, buses and taxis. VLTD fitted in the same visit when needed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/rto-services` },
  openGraph: { title, description, url: `${BASE_URL}/rto-services`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const STEPS = [
  { title: "Send your vehicle number", text: "On WhatsApp, a call or the form above. Tell us what the RTO is asking for." },
  { title: "We check Vahan", text: "You get the list of pending documents and the total cost before anything starts." },
  { title: "VLTD fitted if needed", text: "When the work needs a tracker, our technician fits it in the same visit and updates Vahan." },
  { title: "Work filed for you", text: "Our RTO partner network handles the filing while your vehicle stays on the road." },
];

const NOT_NEEDED = [
  "Stand in RTO queues to find out what is pending",
  "Find one person for the tracker and another for the paperwork",
  "Discover a missing document after the fee is paid",
];

export default function RtoServicesHub() {
  return (
    <KitPage>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO services" }]}
        eyebrow="Commercial vehicle RTO work"
        title="RTO work for trucks, buses & taxis, done without running around"
        highlight="done without running around"
        intro="Fitness, permits, registration and transfers. Send your vehicle number, we check Vahan, tell you what is pending and the total cost, and fit the AIS 140 VLTD in the same visit when the work needs it."
        points={["Vahan checked before you pay", "Exact cost upfront", "VLTD in the same visit", "Across every RTO in the state"]}
      >
        <QuickLeadForm
          variant="kit"
          topic="RTO work (services hub)"
          source="rto_service_hub"
          productOfInterest="general"
          heading="Tell us your RTO work"
          subheading="Share your number and vehicle. We check Vahan and send the exact cost and pending documents on WhatsApp."
        />
      </PageHero>

      {/* SERVICES */}
      <Section labelledBy="services-title">
        <SectionHead
          id="services-title"
          title="What do you need done?"
          sub="Pick the work. Each page lists the documents, the steps and whether VLTD is needed."
        />
        <div className="mt-10">
          <LinkRows
            items={RTO_SERVICES.map((s) => ({
              href: `/rto-services/${s.slug}`,
              name: s.name,
              text: s.intro,
              tag: s.vltdNeeded ? "VLTD included" : undefined,
              strong: s.vltdNeeded,
            }))}
          />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="grey" labelledBy="steps-title">
        <SectionHead id="steps-title" title="How it works" sub="You know the cost and the pending papers before anything is filed." />
        <Steps steps={STEPS} />
        <div className="mt-14 max-w-xl border-l-4 border-[#1D5BD8] bg-white p-6">
          <h3 className="font-display text-lg font-semibold">What you won&apos;t have to do</h3>
          <ul className="mt-3 space-y-2.5">
            {NOT_NEEDED.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-slate-700">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* STATES */}
      <Section labelledBy="states-title">
        <SectionHead id="states-title" title="Commercial vehicle fitness by state" sub="Fees, documents and RTO coverage for your state." />
        <div className="mt-10">
          <ChipLinks items={getPriorityStates().map((s) => ({ href: `/rto-services/fitness-certificate/${s.slug}`, name: s.name }))} />
        </div>
      </Section>

      <FinalCta
        title="Fitness or permit due? Send the number, we'll tell you what's pending."
        sub="Exact cost and document list on WhatsApp, usually within minutes."
        whatsappMessage="Hi NViQ, I need help with RTO work. My vehicle number is: "
        track="rto_services_final"
      />
    </KitPage>
  );
}
