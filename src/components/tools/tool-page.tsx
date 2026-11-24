import Link from "next/link";
import { getAllStates, hasMiningIntegration } from "@/data/vltd-india";
import { BASE_URL, Breadcrumbs, FaqJsonLd, FaqList } from "@/components/landing/landing-shared";
import type { ToolState } from "./vltd-tools";

/** All states, priority order (RJ first), trimmed to what the client tools need. */
export function toolStates(): ToolState[] {
  return getAllStates().map((s) => ({ slug: s.slug, name: s.name, hasMining: hasMiningIntegration(s) }));
}

export const TOOLS = [
  { href: "/tools/ais-140-checker", name: "Does my vehicle need AIS 140 VLTD?", text: "Pick vehicle, state and permit. Get a clear yes / no / depends with the reason." },
  { href: "/tools/fitness-checklist", name: "Fitness document checklist", text: "Every document and fitting your vehicle needs before the fitness inspection." },
  { href: "/tools/vltd-price", name: "VLTD price for your fleet", text: "Choose how many vehicles and unlock today's all-inclusive price on WhatsApp." },
];

export default function ToolPage({
  path,
  name,
  h1,
  intro,
  faqs,
  children,
}: {
  path: string;
  name: string;
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Free Tools", href: "/tools" },
    { name },
  ];
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd faqs={faqs} breadcrumbs={crumbs.map((c) => ({ name: c.name, item: `${BASE_URL}${c.href ?? path}` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: h1,
            url: `${BASE_URL}${path}`,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          }),
        }}
      />
      <Breadcrumbs items={crumbs} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          Free tool · No sign-up
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">{h1}</h1>
        <p className="mt-3 text-gray-700">{intro}</p>
        <div id="quick-lead" className="mt-8 scroll-mt-24">
          {children}
        </div>
        <FaqList faqs={faqs} />
        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">More free tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TOOLS.filter((t) => t.href !== path).map((t) => (
              <Link key={t.href} href={t.href} className="rounded-xl border border-gray-200 p-4 hover:border-blue-400">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="mt-1 text-xs text-gray-600">{t.text}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
