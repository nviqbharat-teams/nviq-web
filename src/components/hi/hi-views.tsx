// Hindi page views for /hi/*. Same structure and lead flow as the English pages,
// wrapped in lang="hi" so browsers and Google read the content as Hindi.
import Link from "next/link";
import { rtoLabel } from "@/lib/rto-label";
import { AlertTriangle, CheckCircle2, FileText, ListChecks, Info } from "lucide-react";
import QuickLeadForm from "@/components/quick-lead-form";
import { BASE_URL, Breadcrumbs, FaqJsonLd, FaqList, LandingHero, getPriorityStates } from "@/components/landing/landing-shared";
import { SEGMENTS, type Segment } from "@/data/segments";
import { RTO_SERVICES, type RtoService } from "@/data/rto-services";
import { SEGMENTS_HI } from "@/data/hi/segments-hi";
import { RTO_SERVICES_HI } from "@/data/hi/rto-services-hi";
import { stateHi } from "@/data/hi/places-hi";
import { getSiblingRtos, hasMiningIntegration, type StateData, type CityData, type RtoOffice } from "@/data/vltd-india";

const HERO_LABELS = { callLabel: "कॉल करें", whatsappLabel: "WhatsApp पर रेट पाएं" };

function rtoCount(state: StateData) {
  return state.cities.reduce((n, c) => n + c.rtos.length, 0);
}

function EnglishLink({ href }: { href: string }) {
  return (
    <p className="mt-10 text-sm text-gray-600">
      Read in English:{" "}
      <Link href={href} lang="en" className="font-semibold text-blue-700 hover:underline">
        English version →
      </Link>
    </p>
  );
}

function HiStateRtoLinks({ state, limit = 16 }: { state: StateData; limit?: number }) {
  const rtos = state.cities.flatMap((c) => c.rtos.map((r) => ({ c, r }))).slice(0, limit);
  return (
    <section className="mt-12">
      <h2 className="text-lg font-black text-gray-900 mb-1">{stateHi(state.slug, state.name)} के RTO में VLTD फिटमेंट</h2>
      <p className="text-sm text-gray-600 mb-4">
        हम {stateHi(state.slug, state.name)} के सभी {rtoCount(state)} RTO कवर करते हैं।
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {rtos.map(({ c, r }) => (
          <Link key={r.code} href={`/hi/vltd/${state.slug}/${c.slug}/${r.slug}`} className="rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-400">
            <div className="text-sm font-black text-blue-700">{r.code}</div>
            <div className="text-[11px] font-semibold text-gray-800 truncate">{rtoLabel(r, c.name, "hi")}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HiStateChips({ hrefFor, current }: { hrefFor: (s: string) => string; current?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {getPriorityStates().map((s) => (
        <Link
          key={s.slug}
          href={hrefFor(s.slug)}
          className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
            s.slug === current ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 text-gray-800 hover:border-blue-400"
          }`}
        >
          {stateHi(s.slug, s.name)}
        </Link>
      ))}
    </div>
  );
}

// ── Segment (vehicle type) ───────────────────────────────────────────────────

export function HiSegmentView({ seg, state }: { seg: Segment; state?: StateData }) {
  const t = SEGMENTS_HI[seg.slug];
  const stName = state ? stateHi(state.slug, state.name) : "";
  const where = state ? ` (${stName})` : "";
  const faqs = state
    ? [...t.faqs, { q: `क्या आप ${stName} के सभी RTO में ${t.name} के लिए VLTD लगाते हैं?`, a: `हाँ। हम ${stName} के सभी ${rtoCount(state)} RTO में ${t.name} के लिए AIS 140 VLTD लगाते हैं और Vahan पर सर्टिफिकेट अपडेट करते हैं। गाड़ी नंबर और शहर के साथ कॉल या WhatsApp करें।` }]
    : t.faqs;
  const path = `/hi/gps-tracking/${seg.slug}${state ? `/${state.slug}` : ""}`;
  const crumbs = [
    { name: "होम", href: "/hi" },
    { name: t.name, href: state ? `/hi/gps-tracking/${seg.slug}` : undefined },
    ...(state ? [{ name: stName }] : []),
  ];
  const services = RTO_SERVICES.filter((s) => s.relatedSegments.includes(seg.slug));

  return (
    <main lang="hi" className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd faqs={faqs} breadcrumbs={crumbs.map((c) => ({ name: c.name, item: `${BASE_URL}${c.href ?? path}` }))} />
      <Breadcrumbs items={crumbs} />
      <LandingHero
        badge={state ? `${t.name} · ${stName}` : t.name}
        title={`${t.h1}${where}`}
        intro={t.intro}
        whatsappMessage={`नमस्ते NViQ, मुझे ${t.name}${where} के लिए AIS 140 VLTD / GPS चाहिए। आज का रेट बताइए।`}
        {...HERO_LABELS}
      >
        <QuickLeadForm lang="hi" topic={`${seg.name} VLTD / GPS${state ? ` in ${state.name}` : ""} (Hindi page)`} source={`hi_segment_${seg.slug}${state ? `_${state.slug}` : ""}`} />
      </LandingHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section className={`rounded-2xl border p-6 ${seg.needsVltd === "mandatory" ? "border-blue-300 bg-blue-50/60" : "border-blue-200 bg-blue-50/50"}`}>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-black">
                {seg.needsVltd === "mandatory" ? `क्या ${t.name} में VLTD अनिवार्य है? हाँ।` : `क्या ${t.name} में VLTD चाहिए? यह निर्भर करता है।`}
              </h2>
              <p className="mt-1 text-sm text-gray-700">{t.needsNote}</p>
            </div>
          </div>
        </section>

        <Link href="/tools/ais-140-checker" className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 px-5 py-4 text-sm hover:border-emerald-400">
          <span><strong className="text-emerald-900">पक्का नहीं कि आपकी गाड़ी में VLTD चाहिए?</strong> <span className="text-gray-700">फ्री चेकर: 10 सेकंड में जवाब।</span></span>
          <span className="font-bold text-emerald-800 whitespace-nowrap">चेक करें →</span>
        </Link>

        <section className="mt-12">
          <h2 className="text-xl font-black mb-4">हम कौन सी परेशानियां हल करते हैं</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.pains.map((p) => (
              <li key={p} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm">{p}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-black mb-4">NViQ के साथ आपको क्या मिलता है</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <h3 className="mt-2 font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {services.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-black mb-3">RTO के काम जिनमें हम मदद करते हैं</h2>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <Link key={s.slug} href={`/hi/rto-services/${s.slug}${state ? `/${state.slug}` : ""}`} className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold hover:border-blue-400">
                  {RTO_SERVICES_HI[s.slug]?.short || s.short}{where}
                </Link>
              ))}
            </div>
          </section>
        )}

        {state && <HiStateRtoLinks state={state} />}
        <FaqList faqs={faqs} title="अक्सर पूछे जाने वाले सवाल" />

        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">राज्य के अनुसार {t.name} VLTD / GPS</h2>
          <HiStateChips hrefFor={(s) => `/hi/gps-tracking/${seg.slug}/${s}`} current={state?.slug} />
        </section>
        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">दूसरी गाड़ियां</h2>
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.filter((s) => s.slug !== seg.slug).map((s) => (
              <Link key={s.slug} href={`/hi/gps-tracking/${s.slug}${state ? `/${state.slug}` : ""}`} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-blue-400">
                {SEGMENTS_HI[s.slug]?.name || s.name}
              </Link>
            ))}
          </div>
        </section>
        <EnglishLink href={path.replace(/^\/hi/, "")} />
      </div>
    </main>
  );
}

// ── RTO service ──────────────────────────────────────────────────────────────

export function HiServiceView({ svc, state }: { svc: RtoService; state?: StateData }) {
  const t = RTO_SERVICES_HI[svc.slug];
  const stName = state ? stateHi(state.slug, state.name) : "";
  const where = state ? ` (${stName})` : "";
  const faqs = [
    ...t.faqs,
    { q: `NViQ के साथ ${t.short} का काम कैसे शुरू करें?`, a: `WhatsApp पर गाड़ी नंबर भेजें या कॉल करें। हम Vahan पर गाड़ी चेक करके बताते हैं कौन से कागज़ बाकी हैं और कुल खर्च कितना है${svc.vltdNeeded ? ", और ज़रूरत हो तो उसी विज़िट में VLTD लगाते हैं" : ""}।` },
  ];
  const path = `/hi/rto-services/${svc.slug}${state ? `/${state.slug}` : ""}`;
  const crumbs = [
    { name: "होम", href: "/hi" },
    { name: t.short, href: state ? `/hi/rto-services/${svc.slug}` : undefined },
    ...(state ? [{ name: stName }] : []),
  ];
  return (
    <main lang="hi" className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd faqs={faqs} breadcrumbs={crumbs.map((c) => ({ name: c.name, item: `${BASE_URL}${c.href ?? path}` }))} />
      <Breadcrumbs items={crumbs} />
      <LandingHero
        badge={svc.vltdNeeded ? "ज़रूरत हो तो VLTD फिटिंग शामिल" : "कमर्शियल गाड़ी का RTO काम"}
        title={`${t.name}${where}`}
        intro={t.intro}
        whatsappMessage={`नमस्ते NViQ, मुझे ${t.short}${where} में मदद चाहिए। मेरा गाड़ी नंबर है: `}
        {...HERO_LABELS}
      >
        <QuickLeadForm
          lang="hi"
          topic={`${svc.short}${state ? ` in ${state.name}` : ""} (Hindi page)`}
          source={`hi_rto_service_${svc.slug}${state ? `_${state.slug}` : ""}`}
          productOfInterest={svc.vltdNeeded ? "ais_140_vltd" : "general"}
          heading={`${t.short}${where} करवाएं`}
          subheading="अपना नंबर और गाड़ी बताएं। हम Vahan चेक करके WhatsApp पर सही खर्च और बाकी कागज़ों की लिस्ट भेजेंगे।"
        />
      </LandingHero>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section className={`rounded-2xl border p-6 ${svc.vltdNeeded ? "border-blue-300 bg-blue-50/60" : "border-blue-200 bg-blue-50/50"}`}>
          <div className="flex items-start gap-3">
            {svc.vltdNeeded ? <AlertTriangle className="h-5 w-5 text-blue-700 mt-0.5" /> : <Info className="h-5 w-5 text-blue-700 mt-0.5" />}
            <div>
              <h2 className="font-black">{svc.vltdNeeded ? "इस काम के लिए VLTD ज़रूरी है" : "क्या इसके लिए VLTD चाहिए?"}</h2>
              <p className="mt-1 text-sm text-gray-700">{t.vltdNote}</p>
            </div>
          </div>
        </section>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-black"><FileText className="h-5 w-5 text-blue-600" /> ज़रूरी कागज़</h2>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">{t.documents.map((d) => <li key={d}>{d}</li>)}</ul>
            <p className="mt-3 text-xs text-gray-500">सही लिस्ट और फीस राज्य व गाड़ी के हिसाब से बदलती है। Vahan चेक करके हम कन्फर्म करते हैं।</p>
          </section>
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-black"><ListChecks className="h-5 w-5 text-emerald-600" /> कैसे होता है</h2>
            <ol className="mt-3 space-y-2 text-sm list-decimal pl-5">{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </section>
        </div>
        {state && <HiStateRtoLinks state={state} />}
        <FaqList faqs={faqs} title="अक्सर पूछे जाने वाले सवाल" />
        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">राज्य के अनुसार {t.short}</h2>
          <HiStateChips hrefFor={(s) => `/hi/rto-services/${svc.slug}/${s}`} current={state?.slug} />
        </section>
        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">दूसरी RTO सेवाएं</h2>
          <div className="flex flex-wrap gap-2">
            {RTO_SERVICES.filter((s) => s.slug !== svc.slug).map((s) => (
              <Link key={s.slug} href={`/hi/rto-services/${s.slug}${state ? `/${state.slug}` : ""}`} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-blue-400">
                {RTO_SERVICES_HI[s.slug]?.short || s.short}
              </Link>
            ))}
          </div>
        </section>
        <EnglishLink href={path.replace(/^\/hi/, "")} />
      </div>
    </main>
  );
}

// ── RTO VLTD page ────────────────────────────────────────────────────────────

export function hiRtoCopy(state: StateData, city: CityData, rto: RtoOffice) {
  const mining = hasMiningIntegration(state);
  const stName = stateHi(state.slug, state.name);
  return {
    mining,
    stName,
    title: `${rto.code} (${city.name}) में AIS 140 VLTD फिटमेंट | 1 घंटे में Vahan सर्टिफिकेट`,
    description: `${rto.name} (${rto.code}), ${stName} में फिटनेस, परमिट और रजिस्ट्रेशन के लिए पैनिक बटन वाला AIS 140 VLTD। लगभग 1 घंटे में Vahan सर्टिफिकेट${mining ? ` और ${state.miningPortal.name} व्हाइटलिस्ट` : ""}। आज का रेट: +91 92570 38711`,
    h1: `${rto.code} (${city.name}) में AIS 140 ${mining ? "और माइनिंग " : ""}VLTD फिटमेंट`,
    intro: `${rto.name} में फिटनेस, परमिट या रजिस्ट्रेशन का काम है? पैनिक बटन वाला AIS 140 VLTD लगवाएं और लगभग 1 घंटे में फिटमेंट सर्टिफिकेट Vahan पर अपडेट पाएं${mining ? `, साथ में ${state.miningPortal.name} पर ट्रांजिट पास के लिए व्हाइटलिस्ट` : ""}।`,
    faqs: [
      { q: `${rto.code} में VLTD सर्टिफिकेट कितनी जल्दी मिलता है?`, a: "सर्टिफाइड टेक्नीशियन द्वारा डिवाइस और पैनिक बटन टेस्ट करने के बाद लगभग 60 मिनट में फिटमेंट सर्टिफिकेट Vahan पर अपडेट हो जाता है, ताकि आपकी जांच तुरंत हो सके।" },
      { q: `${rto.code} में किन गाड़ियों को AIS 140 VLTD चाहिए?`, a: `पब्लिक सर्विस व्हीकल (बस, स्कूल बस, टैक्सी, कैब) और नेशनल परमिट गुड्स व्हीकल में CMVR नियम 125H के तहत पैनिक बटन वाला AIS 140 VLTD ज़रूरी है। ${rto.name} में फिटनेस, परमिट या रजिस्ट्रेशन से पहले यह Vahan पर चालू होना चाहिए।` },
      { q: `${rto.code} में VLTD फिटमेंट का रेट क्या है?`, a: "यह एक ऑल-इन्क्लूसिव पैकेज है: डिवाइस, 2 पैनिक बटन, फिटिंग, 1 साल का SIM और Vahan सर्टिफिकेट। रेट गाड़ियों की संख्या पर निर्भर है; फ्लीट और RTO एजेंट को कम स्लैब मिलता है। अपना नंबर दें, कुछ मिनट में सही रेट WhatsApp पर भेजेंगे।" },
      { q: `${rto.code} के RTO एजेंट होलसेल रेट कैसे पाएं?`, a: "RTO एजेंट हमारे RTO पार्टनर प्रोग्राम में रजिस्टर करके होलसेल रेट, हर क्लाइंट पर मार्जिन और मोबाइल ऐप से सर्टिफिकेट बना सकते हैं।" },
    ],
  };
}

export function HiRtoView({ state, city, rto }: { state: StateData; city: CityData; rto: RtoOffice }) {
  const c = hiRtoCopy(state, city, rto);
  const path = `/hi/vltd/${state.slug}/${city.slug}/${rto.slug}`;
  const crumbs: { name: string; href?: string }[] = [
    { name: "होम", href: "/hi" },
    { name: `${c.stName} VLTD`, href: `/hi#${state.slug}` },
    { name: rto.code },
  ];
  const nearby = getSiblingRtos(state, rto.code, 8);
  return (
    <main lang="hi" className="min-h-screen bg-white text-gray-900">
      <FaqJsonLd faqs={c.faqs} breadcrumbs={crumbs.map((x) => ({ name: x.name, item: `${BASE_URL}${x.href ?? path}` }))} />
      <Breadcrumbs items={crumbs} />
      <LandingHero
        badge={`${rto.code} फिटनेस पासिंग के लिए`}
        title={c.h1}
        intro={c.intro}
        whatsappMessage={`नमस्ते NViQ, मुझे ${rto.code} (${city.name}) के लिए AIS 140 VLTD सर्टिफिकेट चाहिए। कृपया कॉल करें।`}
        {...HERO_LABELS}
      >
        <QuickLeadForm lang="hi" topic={`AIS 140 VLTD in ${rto.code} (${city.name}, ${state.name}) (Hindi page)`} source={`hi_vltd_${rto.slug}`} />
      </LandingHero>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-lg text-sm font-black bg-blue-100 text-blue-900 border border-blue-300">{rto.code}</span>
            <h2 className="text-xl font-black">{rto.name}</h2>
          </div>
          <p className="mt-2 text-sm text-gray-700">{rto.officeAddress}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50/40"><div className="text-2xl font-black text-blue-700">60 मिनट</div><div className="text-xs font-bold mt-1">Vahan 4.0 सिंक</div></div>
          <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40"><div className="text-2xl font-black text-emerald-700">2 पैनिक बटन</div><div className="text-xs font-bold mt-1">AIS 140 सर्टिफाइड</div></div>
          <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50/40"><div className="text-2xl font-black text-blue-800">रेट लॉक्ड</div><div className="text-xs font-bold mt-1">WhatsApp पर 30 सेकंड में पाएं</div></div>
        </div>
        <Link href="/tools/ais-140-checker" className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 px-5 py-4 text-sm hover:border-emerald-400">
          <span><strong className="text-emerald-900">पक्का नहीं कि VLTD चाहिए?</strong> <span className="text-gray-700">फ्री चेकर: 10 सेकंड में जवाब।</span></span>
          <span className="font-bold text-emerald-800">चेक करें →</span>
        </Link>
        <FaqList faqs={c.faqs} title="अक्सर पूछे जाने वाले सवाल" />
        {nearby.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-black mb-4">{c.stName} के दूसरे RTO में VLTD फिटमेंट</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearby.map(({ city: nc, rto: nr }) => (
                <Link key={nr.code} href={`/hi/vltd/${state.slug}/${nc.slug}/${nr.slug}`} className="rounded-xl border border-gray-200 px-4 py-3 hover:border-blue-400">
                  <div className="text-sm font-black text-blue-700">{nr.code}</div>
                  <div className="text-xs font-semibold text-gray-800 truncate">{rtoLabel(nr, nc.name, "hi")}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section className="mt-12">
          <h2 className="text-lg font-black mb-3">गाड़ी के अनुसार VLTD / GPS</h2>
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.map((s) => (
              <Link key={s.slug} href={`/hi/gps-tracking/${s.slug}/${state.slug}`} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-blue-400">
                {SEGMENTS_HI[s.slug]?.name || s.name}
              </Link>
            ))}
          </div>
        </section>
        <EnglishLink href={`/vltd/${state.slug}/${city.slug}/${rto.slug}`} />
      </div>
    </main>
  );
}
