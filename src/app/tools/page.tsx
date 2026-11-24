import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOOLS } from "@/components/tools/tool-page";
import { BASE_URL, Breadcrumbs } from "@/components/landing/landing-shared";

const title = "Free VLTD & RTO Tools for Vehicle Owners";
const description = "Free tools: check if your vehicle needs AIS 140 VLTD, get a fitness document checklist, and unlock the VLTD price for your fleet.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BASE_URL}/tools` },
  openGraph: { title, description, url: `${BASE_URL}/tools`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

export default function ToolsHub() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Free Tools" }]} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Free tools for vehicle owners & RTO agents</h1>
        <p className="mt-3 text-gray-700">No sign-up. Answers in seconds.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="rounded-2xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition-all">
              <h2 className="font-black text-gray-900">{t.name}</h2>
              <p className="mt-2 text-sm text-gray-600">{t.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                Open tool <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
