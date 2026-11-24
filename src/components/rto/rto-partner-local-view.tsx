// Kit-styled body shared by the RTO partner state, city and RTO-office pages.
// Same visual language as /rto-partner and the VLTD pages.
import Link from "next/link";
import { Check } from "lucide-react";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Steps,
  TickList,
  LinkRows,
  ChipLinks,
  FaqSection,
  FinalCta,
  AnchorButton,
  WhatsAppButton,
  DirectoryBand,
  textLink,
  type Crumb,
} from "@/components/landing/kit";

type LinkItem = { href: string; name: string; tag?: string; strong?: boolean; text?: string; current?: boolean };

const VEHICLES = [
  "Mining tippers & dumpers",
  "Petroleum & chemical tankers",
  "School & commercial buses",
  "Tempo travellers & maxi cabs",
  "Multi-axle cargo trucks",
  "Transit mixers & cranes",
];

/** Hindi block: what the agent and the vehicle owner get in the apps. */
export function RtoPartnerAppsSection() {
  const apps = [
    {
      tag: "1 घंटे में अप्रूवल",
      title: "1 घंटे में सर्टिफिकेट (Online Delivery)",
      text: "वाहन 4.0 पोर्टल पर तुरंत अपडेट। सर्टिफिकेट सीधा आपके फोन और WhatsApp पर मिलेगा।",
      points: ["फिटमेंट → सर्वर चेक → अप्रूव्ड (< 1 घंटा)", "सरकारी सर्टिफिकेट PDF डाउनलोड", "कागजी झंझट खत्म"],
    },
    {
      tag: "RTO एजेंट व कंसल्टेंट के लिए",
      title: "कमाई व पासिंग रिक्वेस्ट का हिसाब",
      text: "रोज के कलेक्शन और कमीशन का हिसाब रखें, और हर गाड़ी का पासिंग स्टेटस लाइव ट्रैक करें।",
      points: ["लाइव कमाई का बहीखाता", "फिटमेंट चालू ➔ सर्टिफिकेट तैयार", "सिर्फ RC नंबर से टेक्नीशियन बुकिंग"],
      featured: true,
    },
    {
      tag: "गाड़ी मालिक के लिए",
      title: "सारे पेपर्स और लाइव लोकेशन ऐप",
      text: "गाड़ी में GPS लगते ही मोबाइल पर लाइव लोकेशन दिखेगी और सारे पेपर्स ऐप में सुरक्षित रहेंगे।",
      points: ["डिजिटल डॉक्यूमेंट लॉकर: फिटनेस सर्टिफिकेट, कैलिब्रेशन व बिल", "फिटमेंट के तुरंत बाद लाइव GPS", "सालाना पासिंग अलर्ट"],
    },
  ];
  return (
    <Section labelledBy="apps-title">
      <div lang="hi">
        <p className="text-sm font-semibold text-[#1D5BD8]">100% डिजिटल व पेपरलेस सुविधा</p>
        <div className="mt-3">
          <SectionHead
            id="apps-title"
            title="1 घंटे में पासिंग सर्टिफिकेट और दोनों के लिए मोबाइल ऐप"
            sub="RTO एजेंट के लिए कलेक्शन और काम का लाइव हिसाब, और गाड़ी मालिक के लिए सारे सरकारी पेपर्स व लाइव GPS लोकेशन।"
          />
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {apps.map((a) => (
            <li key={a.title} className={`border-t-4 pt-5 ${a.featured ? "border-[#1D5BD8]" : "border-[#18202E]"}`}>
              <p className={`text-xs font-bold ${a.featured ? "text-[#1D5BD8]" : "text-slate-500"}`}>{a.tag}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{a.text}</p>
              <ul className="mt-4 space-y-2 text-[15px]">
                {a.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0F8A4B]" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-slate-600">
          <strong className="text-[#18202E]">कोई मिनिमम आर्डर नहीं (0 MOQ)</strong> · 1 गाड़ी हो या 100 गाड़ियां — सबके लिए एक जैसी तेज व पक्की सुविधा
        </p>
      </div>
    </Section>
  );
}

/** Truck category + Rajasthan hub link rows. */
export function TruckDirectorySection({
  title = "Truck passing and fleet compliance",
  sub = "AIS 140 fitment specs by vehicle category, and the main Rajasthan transport nagars.",
  showRajasthanHubs = true,
  tone = "grey",
}: {
  title?: string;
  sub?: string;
  showRajasthanHubs?: boolean;
  tone?: "white" | "grey";
}) {
  return (
    <Section tone={tone} labelledBy="trucks-title">
      <SectionHead id="trucks-title" title={title} sub={sub} />
      <div className="mt-10">
        <LinkRows
          cols={4}
          items={TRUCK_CATEGORIES.map((c) => ({ href: `/trucks/${c.slug}`, name: c.title, text: c.shortDesc, tag: c.wheelAxle }))}
        />
      </div>
      {showRajasthanHubs && (
        <>
          <h3 className="mt-14 font-display text-2xl font-semibold">Rajasthan trucking and RTO hubs</h3>
          <div className="mt-5">
            <LinkRows
              cols={4}
              items={RAJASTHAN_TRUCK_CITIES.map((c) => ({
                href: `/truck-passing/${c.stateSlug}/${c.slug}`,
                name: c.name,
                tag: Array.from(new Set(c.areas.map((a) => a.rtoCode))).join(", "),
              }))}
            />
          </div>
        </>
      )}
    </Section>
  );
}

export function RtoPartnerLocalView({
  jsonLd,
  crumbs,
  eyebrow,
  title,
  highlight,
  intro,
  points,
  place,
  stateName,
  waMessage,
  track,
  form,
  office,
  rtoSection,
  faqs,
  faqTitle,
  directoryTitle,
  directoryItems,
  directoryChips,
  showRajasthanHubs,
  customerHref,
}: {
  /** Where vehicle owners who landed here by mistake should go (/rto-agent/...). */
  customerHref?: string;
  jsonLd: object;
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  points: string[];
  /** Short place label used in copy, e.g. "Kota" or "Kota (RJ-20)" */
  place: string;
  stateName: string;
  waMessage: string;
  track: string;
  form: { defaultLocationName?: string; defaultRtoCode?: string };
  /** Optional office facts shown under the hero (RTO page). */
  office?: { title: string; text: string; facts: { label: string; value: string }[]; codeHref?: string; codeLabel?: string };
  rtoSection?: { title: string; sub?: string; items: LinkItem[]; cols?: 2 | 3 | 4; moreHref?: string; moreLabel?: string };
  faqs: { q: string; a: string }[];
  faqTitle: string;
  directoryTitle: string;
  directoryItems?: LinkItem[];
  directoryChips?: { href: string; name: string; current?: boolean }[];
  showRajasthanHubs: boolean;
}) {
  const advantages = [
    {
      title: "Mobile fitment certificate portal",
      text: "Generate and download certified fitment certificates from your phone or laptop once installation is done and telemetry is verified.",
    },
    {
      title: "Guaranteed Vahan 4.0 whitelisting",
      text: `Zero rejections on fitness test lanes in ${place}. Every NViQ VLTD is ARAI & ICAT certified.`,
    },
    {
      title: "AITP & mining compliant",
      text: "Pre-approved for All India Tourist Permit and state mining portals (e-Ravanna, Khanij Online, i-Khanij).",
    },
    {
      title: "Zero minimum inventory",
      text: `Never tie up working capital in unsold stock. Request devices as jobs arrive, with express dispatch to ${place}.`,
    },
    {
      title: "Doorstep mobile technicians",
      text: `Our certified technician wires the panic buttons and tests the device at your client's yard in ${place}.`,
    },
    {
      title: "Automated annual renewals",
      text: "Vehicles return every year for fitness. You get renewal tracking and reminders for every client you register.",
    },
  ];

  const portals: [string, string, string][] = [
    ["MoRTH national portal", "Parivahan Sewa & Vahan 4.0", "Direct parivahan.gov.in backend sync for commercial vehicle fitness test clearance."],
    ["State transport", `${stateName} Transport Dept`, "Pre-whitelisted for state fitness inspection lanes and RTO passing desks."],
    ["Tourist permit", "AITP national permit", "Instant vehicle mapping for luxury buses, maxi-cabs and tourist coaches."],
    ["Mining transit", "State mining portals", "Whitelisted for e-Ravanna and electronic mining transit permits."],
  ];

  const onboarding = [
    { title: "Submit details", text: `Fill the partner form or send your ${place} RTO agency details to our team on WhatsApp.` },
    { title: "Get portal access", text: "Receive authorised dealer credentials for the mobile certificate issuance app." },
    { title: "Order devices", text: "Receive AIS 140 VLTD units with express delivery and zero inventory lock-in." },
    { title: "Issue verified certificates", text: "Complete fitment, verify telemetry in the app, and download the Vahan passing certificate." },
  ];

  return (
    <KitPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        notice={
          customerHref && (
            <Link
              href={customerHref}
              data-track={`${track}_customer_switch`}
              className="group flex flex-col gap-1 border-l-4 border-[#0F8A4B] bg-white/[0.07] px-4 py-3 text-sm hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="text-slate-200">Need RTO work done for your vehicle? This page is for agents joining NViQ.</span>
              <span className="font-bold text-white underline underline-offset-4">Get an RTO agent in {place} →</span>
            </Link>
          )
        }
        crumbs={crumbs}
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        intro={intro}
        points={points}
        actions={<WhatsAppButton label="WhatsApp RTO desk" message={waMessage} track={`${track}_hero_whatsapp`} />}
        formId="apply"
      >
        <RtoPartnerForm variant="kit" {...form} />
      </PageHero>

      {office && (
        <section className="border-b border-[#D9DEE6] bg-[#F2F4F7] py-10" aria-labelledby="office-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="border-l-4 border-[#1D5BD8] pl-5">
                <p className="text-xs font-semibold text-[#0F8A4B]">Fitness passing active</p>
                <h2 id="office-title" className="mt-1 font-display text-2xl font-semibold">
                  {office.title}
                </h2>
                <p className="mt-1 text-slate-600">{office.text}</p>
                {office.codeHref && (
                  <p className="mt-2">
                    <Link href={office.codeHref} className={textLink}>
                      {office.codeLabel ?? "RTO code details"}
                    </Link>
                  </p>
                )}
              </div>
              <dl className="grid grid-cols-3 gap-6">
                {office.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs text-slate-500">{f.label}</dt>
                    <dd className="mt-1 font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {rtoSection && (
        <Section labelledBy="rtos-title">
          <SectionHead id="rtos-title" title={rtoSection.title} sub={rtoSection.sub} />
          <div className="mt-10">
            <LinkRows cols={rtoSection.cols ?? 3} items={rtoSection.items} />
          </div>
          {rtoSection.moreHref && (
            <p className="mt-8">
              <Link href={rtoSection.moreHref} className={textLink}>
                {rtoSection.moreLabel ?? "See all"}
              </Link>
            </p>
          )}
        </Section>
      )}

      <RtoPartnerAppsSection />

      <Section tone="grey" labelledBy="adv-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHead
            id="adv-title"
            title={`Built for how an RTO desk in ${place} works`}
            sub="No delays, zero certification rejections, and no working capital lock-in."
          />
          <TickList items={advantages} />
        </div>
      </Section>

      <Section labelledBy="portals-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHead
              id="portals-title"
              title="Every vehicle your clients bring, every portal they need"
              sub={`A national-permit truck, a school bus or 20 mining tippers in ${place}: NViQ covers the compliance end to end.`}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {VEHICLES.map((v) => (
                <li key={v} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1D5BD8]" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/vltd" className={textLink}>
                Explore the state mining portals hub
              </Link>
            </p>
          </div>
          <dl className="grid content-start border-t-2 border-[#18202E] sm:grid-cols-2 sm:gap-x-10">
            {portals.map(([region, name, text]) => (
              <div key={name} className="border-b border-[#D9DEE6] py-5">
                <p className="text-xs font-semibold text-[#1D5BD8]">{region}</p>
                <dt className="mt-1 font-display text-lg font-semibold">{name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-600">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="grey" labelledBy="onboard-title">
        <SectionHead id="onboard-title" title="Start issuing in 4 steps" sub={`Your ${place} dealership set up in less than 2 hours, without complex paperwork.`} />
        <Steps steps={onboarding} />
      </Section>

      <TruckDirectorySection tone="white" showRajasthanHubs={showRajasthanHubs} />

      <FaqSection faqs={faqs} title={faqTitle} track={`${track}_faq_call`} />

      <FinalCta
        title={`Ready to grow your RTO passing business in ${place}?`}
        sub="Dealer rates, priority certificate approvals and doorstep technicians for every commercial vehicle."
        whatsappMessage={waMessage}
        track={`${track}_final`}
        primary={<AnchorButton href="#apply">Apply for partner dealership</AnchorButton>}
      />

      <DirectoryBand title={directoryTitle}>
        {directoryItems && <LinkRows cols={4} items={directoryItems} />}
        {directoryChips && (
          <div className={directoryItems ? "mt-10" : ""}>
            {directoryItems && <h3 className="mb-4 font-semibold">Other states</h3>}
            <ChipLinks items={directoryChips} />
          </div>
        )}
      </DirectoryBand>
    </KitPage>
  );
}
