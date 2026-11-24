import { Metadata } from "next";
import Link from "next/link";
import PartnerBadgeBuilder, { type BadgeRto } from "@/components/tools/partner-badge-builder";
import { BASE_URL, Breadcrumbs } from "@/components/landing/landing-shared";
import { getAllStates } from "@/data/vltd-india";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF } from "@/lib/contact";

const title = "NViQ Partner Badge for RTO Agents, Dealers & Schools";
const description = "Authorised NViQ partners: add the AIS 140 VLTD partner badge to your website so customers can verify you and book fitment for your RTO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/partner-badge` },
};

function badgeRtos(): BadgeRto[] {
  return getAllStates().flatMap((s) =>
    s.cities.flatMap((c) => c.rtos.map((r) => ({ s: s.slug, sn: s.name, c: c.slug, cn: c.name, r: r.slug, code: r.code })))
  );
}

export default function PartnerBadgePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "RTO Partner", href: "/rto-partner" }, { name: "Partner Badge" }]} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Show customers you are an NViQ partner</h1>
        <p className="mt-3 text-gray-700">
          RTO agents, dealers, schools and transporters working with NViQ can add this badge to their website or Google Business Profile
          website. Customers see you are authorised for AIS 140 VLTD, and can book fitment for your RTO in one click.
        </p>
        <ol className="mt-6 space-y-1 text-sm text-gray-700 list-decimal pl-5">
          <li>Choose your state and RTO.</li>
          <li>Copy the code.</li>
          <li>Paste it in your website footer or contact page (or send it to your web developer).</li>
        </ol>
        <div className="mt-8">
          <PartnerBadgeBuilder rtos={badgeRtos()} />
        </div>
        <p className="mt-8 text-sm text-gray-600">
          Not a partner yet?{" "}
          <Link href="/rto-partner" className="font-semibold text-blue-700 hover:underline">Join the RTO Partner Program</Link>{" "}
          or call <a href={SALES_TEL_HREF} className="font-semibold text-blue-700">{SALES_PHONE_DISPLAY}</a>.
        </p>
      </div>
    </main>
  );
}
