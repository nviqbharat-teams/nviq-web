import { Metadata } from "next";
import Link from "next/link";
import QuickLeadForm from "@/components/quick-lead-form";
import { BASE_URL, Breadcrumbs } from "@/components/landing/landing-shared";
import { CASE_STUDIES } from "@/data/case-studies";

const title = "Customer Case Studies | AIS 140 VLTD Fitment & RTO Work";
const description = "Real fleets, schools, bus operators and dealers who got AIS 140 VLTD fitted and RTO work done with NViQ: vehicles, city, time to certificate and results.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/case-studies` },
  // Keep the empty placeholder page out of Google until real stories are published.
  robots: CASE_STUDIES.length ? undefined : { index: false, follow: true },
};

export default function CaseStudiesHub() {
  const items = [...CASE_STUDIES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Case Studies" }]} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Customer case studies</h1>
        {items.length ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="rounded-2xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md">
                <div className="text-xs font-bold text-blue-700">{c.city} · {c.vehicles} vehicles</div>
                <h2 className="mt-1 font-black">{c.title}</h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{c.result}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-8 max-w-xl">
            <p className="text-gray-700">We are publishing our first customer stories soon. Got your fleet, school buses or taxis done with NViQ? Share your experience and we will feature your business.</p>
            <div className="mt-6">
              <QuickLeadForm
                topic="Case study: customer wants to share their story"
                source="case_study_submit"
                productOfInterest="general"
                heading="Share your NViQ story"
                subheading="Leave your number, our team will call you for a 5-minute chat."
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
