import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuickLeadForm from "@/components/quick-lead-form";
import { BASE_URL, Breadcrumbs } from "@/components/landing/landing-shared";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import { getSegment } from "@/data/segments";
import { getStateBySlug } from "@/data/vltd-india";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  const description = `${c.problem} ${c.result}`.slice(0, 160);
  return { title: c.title, description, alternates: { canonical: `${BASE_URL}/case-studies/${c.slug}` } };
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const seg = getSegment(c.segment);
  const state = getStateBySlug(c.stateSlug);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            datePublished: c.date,
            author: { "@type": "Organization", name: "NViQ" },
            about: `AIS 140 VLTD fitment for ${c.vehicles} vehicles in ${c.city}`,
          }),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }, { name: c.city }]} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-sm font-bold text-blue-700">
          {c.customer} · {c.city}{c.rtoCode ? ` (${c.rtoCode})` : ""} · {c.vehicles} vehicles
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">{c.title}</h1>
        {c.photo && (
          <Image src={c.photo} alt={c.title} width={1200} height={675} className="mt-6 rounded-2xl border border-gray-200" />
        )}
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">Vehicles</dt><dd className="text-xl font-black">{c.vehicles}</dd></div>
          <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">City</dt><dd className="text-xl font-black">{c.city}</dd></div>
          <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">Certificate</dt><dd className="text-xl font-black">{c.timeToCertificate || "—"}</dd></div>
          <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">Done</dt><dd className="text-xl font-black">{new Date(c.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</dd></div>
        </dl>
        <h2 className="mt-10 text-xl font-black">The problem</h2>
        <p className="mt-2 text-gray-700">{c.problem}</p>
        <h2 className="mt-8 text-xl font-black">What we did</h2>
        <p className="mt-2 text-gray-700">{c.solution}</p>
        <h2 className="mt-8 text-xl font-black">Result</h2>
        <p className="mt-2 text-gray-700">{c.result}</p>
        {c.quote && (
          <blockquote className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50/60 p-5 text-gray-800">
            “{c.quote.text}”<footer className="mt-2 text-sm font-semibold text-gray-600">— {c.quote.by}, {c.customer}</footer>
          </blockquote>
        )}
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          {seg && <Link href={`/gps-tracking/${seg.slug}${state ? `/${state.slug}` : ""}`} className="font-bold text-blue-700 hover:underline">{seg.name} VLTD{state ? ` in ${state.name}` : ""} →</Link>}
          {state && <Link href={`/vltd/${state.slug}`} className="font-bold text-blue-700 hover:underline">All {state.name} RTOs →</Link>}
        </div>
        <div className="mt-10">
          <QuickLeadForm topic={`Same as case study: ${c.title}`} source={`case_study_${c.slug}`} heading="Want the same for your vehicles?" />
        </div>
      </article>
    </main>
  );
}
