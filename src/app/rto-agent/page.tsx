import { Metadata } from "next";
import { ALL_INDIA_STATES } from "@/data/india-rto-master";
import { SALES_PHONE_DISPLAY } from "@/lib/contact";
import { rtoAgentHref } from "@/lib/rto-agent";
import { KitPage, PageHero, Section, ChipLinks, CallButton, WhatsAppButton } from "@/components/landing/kit";

const BASE = "https://www.naviqbharat.com";

export const metadata: Metadata = {
  title: "RTO Agent Near Me: Contact Number for Every City",
  description: `Find an RTO agent in your city for fitness, permit, RC transfer, NOC and loan removal. Call ${SALES_PHONE_DISPLAY} or WhatsApp. Total cost told before any work starts.`,
  alternates: { canonical: `${BASE}/rto-agent` },
};

export default function RtoAgentIndexPage() {
  const states = [...ALL_INDIA_STATES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <KitPage>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO Agent" }]}
        eyebrow="RTO agent near you"
        title="Find an RTO agent in your city"
        highlight="RTO agent"
        intro="Fitness, permit, RC transfer, NOC or loan removal. Pick your city, or just call: we tell you the total cost and documents before anything starts."
        actions={
          <>
            <CallButton label={`Call ${SALES_PHONE_DISPLAY}`} track="rto_agent_index_call" />
            <WhatsAppButton message="Hi NViQ, I need an RTO agent. My city and work: " track="rto_agent_index_whatsapp" />
          </>
        }
      />
      <Section>
        <div className="space-y-12">
          {states.map((st) => (
            <div key={st.slug} id={st.slug} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold">{st.name}</h2>
              <div className="mt-4">
                <ChipLinks items={st.cities.map((c) => ({ href: rtoAgentHref(st.slug, c.slug), name: c.name }))} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </KitPage>
  );
}
