import { Metadata } from "next";
import Link from "next/link";
import { rtoLabel } from "@/lib/rto-label";
import QuickLeadForm from "@/components/quick-lead-form";
import { Breadcrumbs, LandingHero, getPriorityStates } from "@/components/landing/landing-shared";
import { SEGMENTS } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";
import { SEGMENTS_HI } from "@/data/hi/segments-hi";
import { RTO_SERVICES_HI } from "@/data/hi/rto-services-hi";
import { stateHi } from "@/data/hi/places-hi";

const title = "AIS 140 VLTD और GPS ट्रैकर | टैक्सी, बस, स्कूल बस, ट्रक | RTO काम";
const description =
  "टैक्सी, स्कूल बस, बस ऑपरेटर, ट्रक और डीलरों के लिए पैनिक बटन वाला AIS 140 VLTD। लगभग 1 घंटे में Vahan सर्टिफिकेट। फिटनेस, परमिट, RC ट्रांसफर में मदद। राजस्थान, UP, दिल्ली, हरियाणा, पंजाब, गुजरात, बिहार।";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.naviqbharat.com/hi",
    languages: { "en-IN": "https://www.naviqbharat.com/", "hi-IN": "https://www.naviqbharat.com/hi" },
  },
  openGraph: { title, description, url: "https://www.naviqbharat.com/hi", siteName: "NViQ", locale: "hi_IN", type: "website" },
};

export default function HindiHome() {
  return (
    <main lang="hi" className="min-h-screen bg-white text-gray-900">
      <Breadcrumbs items={[{ name: "होम" }]} />
      <LandingHero
        badge="हिंदी में पूरी जानकारी"
        title="AIS 140 VLTD, GPS ट्रैकर और RTO का काम, एक ही जगह"
        intro="टैक्सी, स्कूल बस, बस ऑपरेटर, ट्रक ट्रांसपोर्टर और वाहन डीलर: पैनिक बटन वाला AIS 140 VLTD लगवाएं, लगभग 1 घंटे में Vahan सर्टिफिकेट पाएं और फिटनेस, परमिट व ट्रांसफर का काम बिना चक्कर के करवाएं।"
        whatsappMessage="नमस्ते NViQ, मुझे AIS 140 VLTD / GPS चाहिए। आज का रेट बताइए।"
        callLabel="कॉल करें"
        whatsappLabel="WhatsApp पर रेट पाएं"
      >
        <QuickLeadForm lang="hi" topic="VLTD / GPS (Hindi home)" source="hi_home" />
      </LandingHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section id="gps" className="scroll-mt-24">
          <h2 className="text-xl font-black mb-4">अपनी गाड़ी चुनें</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SEGMENTS.map((s) => (
              <Link key={s.slug} href={`/hi/gps-tracking/${s.slug}`} className="rounded-xl border border-gray-200 p-4 font-bold hover:border-blue-400">
                {SEGMENTS_HI[s.slug].name}
              </Link>
            ))}
          </div>
        </section>

        <section id="rto-services" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-black mb-4">RTO के काम</h2>
          <div className="flex flex-wrap gap-2">
            {RTO_SERVICES.map((s) => (
              <Link key={s.slug} href={`/hi/rto-services/${s.slug}`} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold hover:border-blue-400">
                {RTO_SERVICES_HI[s.slug].short}
              </Link>
            ))}
          </div>
        </section>

        {getPriorityStates().map((st) => (
          <section key={st.slug} id={st.slug} className="mt-12 scroll-mt-24">
            <h2 className="text-xl font-black mb-1">{stateHi(st.slug, st.name)} में VLTD फिटमेंट</h2>
            <p className="text-sm text-gray-600 mb-3">सभी {st.cities.reduce((n, c) => n + c.rtos.length, 0)} RTO</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10 gap-2">
              {st.cities.flatMap((c) =>
                c.rtos.map((r) => (
                  <Link key={r.code} href={`/hi/vltd/${st.slug}/${c.slug}/${r.slug}`} className="rounded-lg border border-gray-200 px-2 py-1.5 text-center hover:border-blue-400" title={`${r.name}, ${c.name}`}>
                    <span className="block text-xs font-black text-blue-700">{r.code}</span>
                    <span className="block text-[10px] text-gray-700 truncate">{rtoLabel(r, c.name, "hi")}</span>
                  </Link>
                ))
              )}
            </div>
          </section>
        ))}

        <p className="mt-12 text-sm text-gray-600">
          Read in English:{" "}
          <Link href="/" lang="en" className="font-semibold text-blue-700 hover:underline">
            English website →
          </Link>
        </p>
      </div>
    </main>
  );
}
