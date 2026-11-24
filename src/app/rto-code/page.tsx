import { Metadata } from "next";
import { ALL_INDIA_STATES, ALL_INDIA_RTOS } from "@/data/india-rto-master";
import Link from "next/link";
import { KitPage, PageHero, Section } from "@/components/landing/kit";
import { rtoCodeSlug, rtosInState, spokenCode } from "@/lib/rto-code";

const BASE = "https://www.naviqbharat.com";

export const metadata: Metadata = {
  title: "RTO Codes of India: Which District Is Each Number Plate From?",
  description: `Find the district and RTO office for any Indian number plate code. All ${ALL_INDIA_RTOS.length.toLocaleString("en-IN")} RTO codes, state by state, from AP 02 to WB 98.`,
  alternates: { canonical: `${BASE}/rto-code` },
  openGraph: {
    title: "RTO Codes of India: Which District Is Each Number Plate From?",
    description: "Find the district and RTO office for any Indian number plate code.",
    url: `${BASE}/rto-code`,
    siteName: "NViQ Bharat",
    locale: "en_IN",
    type: "website",
  },
};

export default function RtoCodeIndexPage() {
  const states = [...ALL_INDIA_STATES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <KitPage>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO Codes" }]}
        eyebrow="All India RTO codes"
        title="Which district is this number plate from?"
        highlight="which district"
        intro={`The first letters and digits of a number plate (like TN 57 or RJ 14) are the RTO code. Pick a code to see its district, state and RTO office. ${ALL_INDIA_RTOS.length.toLocaleString("en-IN")} codes listed.`}
      />
      <Section>
        <div className="space-y-14">
          {states.map((st) => {
            const rtos = rtosInState(st.slug);
            if (!rtos.length) return null;
            return (
              <div key={st.slug} id={st.slug} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-semibold">
                  {st.name} <span className="text-slate-500">({st.code})</span>
                </h2>
                <ul className="mt-5 grid border-t border-[#D9DEE6] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
                  {rtos.map((r) => (
                    <li key={r.code} className="border-b border-[#D9DEE6]">
                      <Link
                        href={`/rto-code/${rtoCodeSlug(r.code)}`}
                        className="group flex items-baseline gap-3 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
                      >
                        <span className="w-14 shrink-0 font-display text-lg font-bold">{spokenCode(r.code)}</span>
                        <span className="min-w-0">
                          <span className="block font-semibold leading-snug group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4">
                            {r.rtoName}
                          </span>
                          {!r.rtoName.toLowerCase().includes(r.cityName.toLowerCase()) && (
                            <span className="block text-sm text-slate-500">{r.cityName} district</span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </KitPage>
  );
}
