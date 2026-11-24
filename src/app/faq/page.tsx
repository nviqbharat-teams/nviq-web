import { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, Breadcrumbs, FaqJsonLd, FaqList } from "@/components/landing/landing-shared";
import { HOME_FAQS } from "@/data/faqs";
import { SEGMENTS } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";

// Every question the site answers, on one crawlable page. Written for the way
// people ask Google and AI assistants ("is VLTD compulsory for taxi?"), so one
// page can be cited for the whole topic. Content comes from the page data.

const title = "AIS 140 VLTD, GPS Tracker & RTO Questions Answered";
const description =
  "Plain answers on AIS 140 VLTD rules, Vahan certificate time, mining portal approval, GPS tracking and RTO fitness, permit, RC transfer and NOC work for commercial vehicles in India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: { title, description, url: `${BASE_URL}/faq`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

type Faq = { q: string; a: string };
type Group = { id: string; title: string; href: string; faqs: Faq[] };

function buildGroups(): Group[] {
  const seen = new Set<string>();
  const unique = (faqs: Faq[]) =>
    faqs.filter((f) => {
      const key = f.q.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  const groups: Group[] = [{ id: "general", title: "General", href: "/", faqs: unique(HOME_FAQS) }];
  for (const s of SEGMENTS) groups.push({ id: s.slug, title: s.name, href: `/gps-tracking/${s.slug}`, faqs: unique(s.faqs) });
  for (const s of RTO_SERVICES) groups.push({ id: s.slug, title: s.name, href: `/rto-services/${s.slug}`, faqs: unique(s.faqs) });
  return groups.filter((g) => g.faqs.length > 0);
}

export default function FaqPage() {
  const groups = buildGroups();
  const all = groups.flatMap((g) => g.faqs);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd
        faqs={all}
        breadcrumbs={[
          { name: "Home", item: `${BASE_URL}/` },
          { name: "FAQ", item: `${BASE_URL}/faq` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-gray-700">
          {all.length} questions vehicle owners, schools, transporters and RTO agents ask us most. Need an answer for your vehicle? Use the{" "}
          <Link href="/tools/ais-140-checker" className="font-bold text-blue-700 underline underline-offset-4">
            free VLTD checker
          </Link>
          .
        </p>

        <nav aria-label="Topics" className="mt-6 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:border-blue-400">
              {g.title}
            </a>
          ))}
        </nav>

        {groups.map((g) => (
          <div key={g.id} id={g.id} className="scroll-mt-24">
            <FaqList faqs={g.faqs} title={g.title} />
            <Link href={g.href} className="mt-3 inline-block text-sm font-bold text-blue-700">
              More on {g.title} →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
