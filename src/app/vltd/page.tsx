import { Metadata } from "next";
import Link from "next/link";
import { getAllStates } from "@/data/vltd-locations";
import VltdHero from "@/components/vltd/vltd-hero";
import RtoConsultantBanner from "@/components/vltd/rto-consultant-banner";
import VltdComplianceTable from "@/components/vltd/vltd-compliance-table";
import VltdFaqAccordion from "@/components/vltd/vltd-faq-accordion";
import JsonLdSchema from "@/components/vltd/json-ld-schema";
import { StateGrid } from "@/components/vltd/vltd-nav-grids";
import { ShieldCheck, MapPin, Building2, CheckCircle2, ArrowRight, Zap, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "AIS 140 & Mines VLTD GPS Tracker India | 1-Hour Certificate & RTO Fitment",
  description: "Govt-approved AIS 140 VLTD devices with emergency panic buttons. Same-day doorstep installation across Rajasthan, MP, Gujarat, Haryana & India. Whitelisted on Vahan 4.0 & State Mining Portals.",
  keywords: [
    "AIS 140 VLTD GPS India",
    "Mines VLTD GPS tracker",
    "Khanij portal GPS fitment",
    "RTO fitness passing certificate",
    "RTO consultant VLTD dealer",
    "Rajasthan DMG approved GPS",
    "MP Khanij approved VLTD",
  ],
  openGraph: {
    title: "AIS 140 & Mines VLTD GPS Tracker India | NViQ",
    description: "Govt-certified AIS 140 GPS with 1-hour certificate issuance and doorstep fitment.",
    url: "https://naviqbharat.com/vltd",
    siteName: "NViQ",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://naviqbharat.com/vltd",
  },
};

export default function VltdIndexPage() {
  const states = getAllStates();

  const generalFaqs = [
    {
      q: "What is an AIS 140 VLTD device, and why is it mandatory?",
      a: "AIS 140 (Automotive Industry Standard 140) is mandated by the Ministry of Road Transport and Highways (MoRTH) for all commercial transport vehicles, mining dumpers, tankers, and passenger buses. It requires real-time GPS tracking, emergency SOS buttons, and dual-SIM transmission to government emergency monitoring servers.",
    },
    {
      q: "How fast will I receive the fitment certificate for RTO fitness passing?",
      a: "Our fitment certificates are generated and synced to the Vahan 4.0 national portal within 60 minutes of installation, guaranteeing zero rejection during your vehicle passing or fitness inspection.",
    },
    {
      q: "Is NViQ GPS whitelisted on state mining portals like Rajasthan DMG, MP Khanij, and Haryana e-Ravanna?",
      a: "Yes. NViQ is pre-integrated and whitelisted on major state mining portals including Rajasthan DMG Khanij, MP Khanij Nigam Track, Gujarat i-Khanij, and Haryana Mines. Your vehicle will be immediately approved for e-Transit Pass / e-Ravanna generation.",
    },
    {
      q: "What are the benefits for RTO consultants partnering with NViQ?",
      a: "RTO agents receive confidential wholesale dealer pricing, strong profit margins per vehicle, a mobile certificate issuance portal, and priority technical assistance for their clients.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://naviqbharat.com" },
    { name: "VLTD & Mining Hub", item: "https://naviqbharat.com/vltd" },
  ];

  const whatsappUrl = `https://wa.me/919694551326?text=${encodeURIComponent(
    "Hi NViQ, I need AIS 140 & Mines VLTD fitment for my fleet. Please send details."
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLdSchema
        pageTitle="AIS 140 & Mines VLTD GPS Tracker India"
        description="Government-certified AIS 140 VLTD devices with 1-hour certificate & doorstep fitment."
        url="https://naviqbharat.com/vltd"
        locationName="India"
        faqs={generalFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <VltdHero
        title="Govt-Approved AIS 140 & Mines VLTD GPS Trackers"
        badge="ARAI & ICAT Certified • Vahan 4.0 Whitelisted"
        description="Fastest doorstep VLTD installation across Rajasthan, Madhya Pradesh, Gujarat, Haryana & Pan-India. Guaranteed 1-hour fitment certificate sync to Vahan & State Mining Portals for hassle-free vehicle passing."
        locationName="India"
        stateName="India"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* State Grid Navigation */}
        <StateGrid />

        {/* Action Callout */}
        <div className="my-10 p-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              National Fitment Network
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
              Need Instant 1-Hour Passing Certificate?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Get certified AIS 140 GPS with dual emergency buttons installed at your depot or yard. Instant Vahan 4.0 upload with zero rejection guarantee.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md text-sm transition-all"
            >
              <Zap className="h-4 w-4" />
              <span>Get WhatsApp Quote</span>
            </a>
            <a
              href="tel:+919694551326"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 text-sm transition-all"
            >
              <PhoneCall className="h-4 w-4 text-blue-600" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

        {/* RTO Consultant Partner Banner */}
        <RtoConsultantBanner
          locationName="Your State / RTO"
        />

        {/* Compliance Comparison Table */}
        <VltdComplianceTable
          locationName="All RTOs"
        />

        {/* FAQ Accordion */}
        <VltdFaqAccordion
          faqs={generalFaqs}
          locationName="India"
        />

        {/* Detailed Directory of States & RTO Hubs */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50/70 p-8 shadow-sm">
          <h3 className="text-xl font-black text-gray-900 mb-6">
            All State & RTO Fitment Centers Directory
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {states.map((state) => (
              <div key={state.slug} className="space-y-3">
                <Link
                  href={`/vltd/${state.slug}`}
                  className="font-bold text-base text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>{state.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {state.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/vltd/${state.slug}/${city.slug}`}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {city.name} (
                        {city.rtos.map((r) => r.code).join(", ")})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
