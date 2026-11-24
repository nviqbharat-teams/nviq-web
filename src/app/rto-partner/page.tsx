import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import RtoSearchSelector from "@/components/rto/rto-search-selector";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  Steps,
  TickList,
  LinkRows,
  FaqSection,
  FinalCta,
  AnchorButton,
  WhatsAppButton,
  textLink,
} from "@/components/landing/kit";

export const metadata: Metadata = {
  title: "RTO Partner Program | AIS 140 VLTD for RTO Consultants & Agents | Parivahan Vahan 4.0",
  description:
    "Join the NViQ RTO Partner Program for RTO consultants, agents, and RTO services near every RTO office in India. Instant Parivahan Sewa & Vahan 4.0 fitness passing certificate generation via mobile app, zero rejections, and doorstep fitment support.",
  keywords: [
    "rto consultant near me",
    "rto agent near me",
    "nearest rto office near me",
    "rto services near me",
    "rto agents near me",
    "rto office near me",
    "parivahan seva",
    "parivahan portal",
    "vahan parivahan",
    "vahan seva",
    "sarathi parivahan",
    "parivahan.gov.in VLTD certificate",
    "RTO partner program",
    "RTO consultant GPS dealer",
    "AIS 140 VLTD GPS dealer",
    "Vahan 4.0 VLTD certificate portal",
    "commercial vehicle fitness passing rto agent",
    "AIS 140 GPS dealer near me",
  ],
  openGraph: {
    title: "RTO Partner Program | AIS 140 VLTD for RTO Consultants & Agents",
    description:
      "Empowering RTO agents and consultants near every RTO office with verified AIS 140 devices, instant Parivahan Sewa & Vahan 4.0 certificates, and doorstep fitment.",
    url: "https://www.naviqbharat.com/rto-partner",
    siteName: "NViQ Bharat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "NViQ RTO Partner Dealership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTO Partner Program | AIS 140 VLTD for RTO Consultants & Agents",
    description:
      "Join 500+ RTO consultants near RTO offices across India with instant Parivahan Sewa & Vahan 4.0 fitness certificates.",
    images: ["/logo.jpeg"],
  },
  alternates: {
    canonical: "https://www.naviqbharat.com/rto-partner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED" }],
  creator: "NViQ Bharat",
  publisher: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
};

const RTO_FAQS = [
  {
    q: "How does NViQ help an RTO agent or RTO consultant near me with vehicle fitness passing?",
    a: "NViQ connects directly with RTO consultants, agents, and RTO service desks near every RTO office across India. You get priority doorstep technician fitment at your client's yard or transport depot, and fast fitment certificate sync directly to Parivahan Sewa and Vahan 4.0.",
  },
  {
    q: "Are NViQ certificates instantly approved on the Parivahan Sewa (parivahan.gov.in) and Vahan portal?",
    a: "Yes. All NViQ AIS 140 VLTD devices are ARAI and ICAT certified and pre-whitelisted on the central Ministry of Road Transport and Highways (MoRTH) Parivahan portal (parivahan.gov.in / Vahan 4.0). Fitment certificates sync within 1 hour, guaranteeing 100% approval on RTO fitness passing inspection lanes.",
  },
  {
    q: "Can I generate fitment certificates from my mobile phone, and what are the conditions?",
    a: "Yes, authorized NViQ RTO partners can generate and download certified fitment certificates directly through their mobile phone or laptop. To ensure 100% compliance with MoRTH and Vahan 4.0 regulations, generation is completed once specific verification conditions are met: (1) physical device fitment with emergency panic buttons is completed, and (2) live GPS and SOS telemetry are successfully validated on the central server. Once verified, the certificate is generated and synced to the Vahan portal within 1 hour.",
  },
  {
    q: "Can local RTO service providers and driving school consultants near me join the program?",
    a: "Yes. Whether you are an independent RTO agent operating near your local RTO office, a commercial vehicle fitness consultant, an auto consultant, or an established RTO service center, you can join the NViQ RTO Partner Program with zero minimum order lock-in.",
  },
  {
    q: "Do I need to buy large quantities of GPS devices upfront?",
    a: "No. Unlike other manufacturers who demand high minimum order quantities, NViQ allows RTO consultants to start with zero inventory pressure. You can order as few units as you need or draw from our local hub stock on demand.",
  },
  {
    q: "Are NViQ devices whitelisted for State Mining Portals (e-Ravanna / e-Transit Pass)?",
    a: "Yes. Our devices are pre-integrated and whitelisted on major state mining systems including Rajasthan DMG Khanij Online, MP Khanij Nigam Track, Gujarat i-Khanij, and Haryana e-Ravanna. Mining dumpers and tippers fitted with NViQ are instantly eligible for e-transit passes.",
  },
  {
    q: "How does NViQ ensure zero rejections during RTO vehicle fitness passing?",
    a: "Every NViQ device is ARAI and ICAT certified under AIS 140 specifications with dual-cellular connectivity and emergency SOS panic buttons. Device telemetry is pre-synchronized to central Parivahan Vahan 4.0 servers, ensuring your fitment certificates are accepted immediately during vehicle fitness lane inspections.",
  },
  {
    q: "Who handles physical fitment in the vehicle?",
    a: "You have both options. If your agency has its own auto-electrician or fitment staff, we provide instant activation via the dealer app. Alternatively, NViQ provides our on-ground mobile technician network to perform doorstep installations at your client's yard or RTO premises at no extra hassle.",
  },
  {
    q: "How does client renewal support work in subsequent years?",
    a: "Every vehicle you onboard remains tied to your partner dealer code for life. When commercial vehicles return for their annual fitness inspection, our portal provides automated renewal reminders and priority certificate re-issuance support.",
  },
];

const WA_DESK = "Hi NViQ Team, I am an RTO Consultant interested in partnering for VLTD fitments.";

const ADVANTAGES = [
  {
    title: "Mobile fitment certificate portal",
    text: "Generate and download certified fitment certificates from your phone or laptop once installation is done and device telemetry is verified.",
  },
  {
    title: "Guaranteed Vahan 4.0 whitelisting",
    text: "Zero rejections on fitness test lanes. Every NViQ VLTD is ARAI & ICAT certified with backend servers mapped to Parivahan.",
  },
  {
    title: "Mines portal whitelisting",
    text: "Pre-approved for e-Ravanna and e-Transit Pass across Rajasthan DMG, MP Khanij, Gujarat i-Khanij and Haryana Mines.",
  },
  {
    title: "Zero minimum inventory",
    text: "Never tie up working capital in unsold stock. Request devices as fitness jobs arrive, with express dispatch.",
  },
  {
    title: "Doorstep mobile technicians",
    text: "No in-house electrician? Our certified technician wires the panic buttons and tests the device at your client's yard.",
  },
  {
    title: "Automated annual renewals",
    text: "Vehicles return every year for fitness. You get renewal tracking and reminders for every client you register.",
  },
];

// Hindi block kept from the original page: what each side gets in the apps.
const APPS = [
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

const VEHICLES = [
  "Mining tippers & dumpers",
  "Petroleum & chemical tankers",
  "School & commercial buses",
  "Tempo travellers & maxi cabs",
  "Multi-axle cargo trucks",
  "Transit mixers & cranes",
];

const PORTALS = [
  ["MoRTH national portal", "Parivahan Sewa & Vahan 4.0", "Direct parivahan.gov.in backend sync for commercial vehicle fitness test clearance."],
  ["Rajasthan", "DMG Khanij Online", "Bajri, marble, granite and limestone tipper transit pass approval."],
  ["Madhya Pradesh", "MP Khanij Track", "Instant vehicle mapping for sand, stone and mineral transit permits."],
  ["Gujarat & Haryana", "i-Khanij & e-Ravanna", "Fast-track whitelisting for mining lease transit compliance."],
];

const ONBOARDING = [
  { title: "Submit details", text: "Fill the partner form or send your RTO agency details to our team on WhatsApp." },
  { title: "Get portal access", text: "Receive authorised dealer credentials for the mobile certificate issuance app." },
  { title: "Order devices", text: "Receive AIS 140 VLTD units with express delivery and zero inventory lock-in." },
  { title: "Issue verified certificates", text: "Complete fitment, verify telemetry in the app, and download the Vahan passing certificate." },
];

export default function RtoPartnerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.naviqbharat.com/rto-partner#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.naviqbharat.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "RTO Consultant Partnership",
            item: "https://www.naviqbharat.com/rto-partner",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.naviqbharat.com/rto-partner#webpage",
        url: "https://www.naviqbharat.com/rto-partner",
        name: "RTO Partner Program | AIS 140 VLTD for RTO Consultants & Agents",
        description:
          "Join the NViQ RTO Partner Program for RTO consultants, agents, and RTO services near every RTO office in India. Instant Parivahan Sewa & Vahan 4.0 fitness passing certificate generation via mobile app, zero rejections, and doorstep fitment support.",
        breadcrumb: {
          "@id": "https://www.naviqbharat.com/rto-partner#breadcrumb",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.naviqbharat.com/#website",
          name: "NViQ Bharat",
          url: "https://www.naviqbharat.com",
        },
        about: {
          "@id": "https://www.naviqbharat.com/rto-partner#service",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.naviqbharat.com/#organization",
        name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
        alternateName: "NViQ Bharat",
        url: "https://www.naviqbharat.com",
        logo: "https://www.naviqbharat.com/logo.jpeg",
        telephone: "+91 92570 38711",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91 92570 38711",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "Hindi"],
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.naviqbharat.com/rto-partner#service",
        name: "NViQ RTO Partner Certificate & Compliance Network",
        serviceType: "Automotive Telematics Dealership & Vahan Compliance Certification",
        provider: {
          "@id": "https://www.naviqbharat.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "RTO Consultants, Auto Consultants, Commercial Fleet Dealers, Vehicle Fitness Passing Agents",
        },
        serviceOutput: "MoRTH Vahan 4.0 AIS 140 VLTD Fitment Certificate",
        description:
          "Official partner program for RTO agents and consultants in India providing government-approved AIS 140 VLTD devices, instant Vahan 4.0 certificate generation, and state mining portal whitelisting.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.naviqbharat.com/rto-partner#faq",
        mainEntity: RTO_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <KitPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <PageHero
        notice={
          <Link
            href="/rto-agent"
            data-track="rto_partner_customer_switch"
            className="group flex flex-col gap-1 border-l-4 border-[#0F8A4B] bg-white/[0.07] px-4 py-3 text-sm hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex-row sm:items-center sm:gap-3"
          >
            <span className="text-slate-200">Need RTO work done for your vehicle? This page is for agents joining NViQ.</span>
            <span className="font-bold text-white underline underline-offset-4">Find an RTO agent in your city →</span>
          </Link>
        }
        crumbs={[{ name: "Home", href: "/" }, { name: "RTO Consultant Partnership" }]}
        eyebrow="Govt approved AIS 140 VLTD · Parivahan Sewa ready"
        title="Authorised AIS 140 GPS partner for RTO agents & consultants"
        highlight="for RTO agents & consultants"
        intro="Get commercial vehicle passing certificates fast, direct wholesale dealer rates, and doorstep technician fitting across India."
        points={["15-min Parivahan certificate sync", "Wholesale rates, best agent margins", "Fitting at your client's yard", "Zero rejections on fitness lanes"]}
        actions={<WhatsAppButton label="WhatsApp RTO desk" message={WA_DESK} track="rto_partner_hero_whatsapp" />}
        formId="apply"
      >
        <RtoPartnerForm variant="kit" />
      </PageHero>

      {/* APPS (Hindi) */}
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
            {APPS.map((a) => (
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

      {/* ADVANTAGES */}
      <Section tone="grey" labelledBy="adv-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHead
            id="adv-title"
            title="Built for how an RTO desk actually works"
            sub="No delays, zero certification rejections, and no working capital lock-in."
          />
          <TickList items={ADVANTAGES} />
        </div>
      </Section>

      {/* VEHICLES & PORTALS */}
      <Section labelledBy="portals-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHead
              id="portals-title"
              title="Every vehicle your clients bring, every portal they need"
              sub="A national-permit truck, a private school bus or 20 mining tippers: NViQ covers the compliance end to end."
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
            {PORTALS.map(([region, name, text]) => (
              <div key={name} className="border-b border-[#D9DEE6] py-5">
                <p className="text-xs font-semibold text-[#1D5BD8]">{region}</p>
                <dt className="mt-1 font-display text-lg font-semibold">{name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-600">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ONBOARDING */}
      <Section tone="grey" labelledBy="onboard-title">
        <SectionHead id="onboard-title" title="Start issuing in 4 steps" sub="Dealership set up in less than 2 hours, without complex paperwork." />
        <Steps steps={ONBOARDING} />
      </Section>

      {/* RTO DIRECTORY */}
      <Section id="rto-directory" labelledBy="dir-title">
        <SectionHead
          id="dir-title"
          title="Find your RTO office and local partner desk"
          sub="Search by RTO code or city, or browse your state. 1,200+ RTO offices covered across India."
        />
        <div className="mt-10">
          <RtoSearchSelector />
        </div>
      </Section>

      {/* TRUCKS */}
      <Section tone="grey" labelledBy="trucks-title">
        <SectionHead
          id="trucks-title"
          title="Truck passing and fleet compliance"
          sub="AIS 140 fitment specs by vehicle category, and the main Rajasthan transport nagars."
        />
        <div className="mt-10">
          <LinkRows
            cols={4}
            items={TRUCK_CATEGORIES.map((c) => ({ href: `/trucks/${c.slug}`, name: c.title, text: c.shortDesc, tag: c.wheelAxle }))}
          />
        </div>
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
      </Section>

      <FaqSection faqs={RTO_FAQS} title="Partner questions" track="rto_partner_faq_call" tone="white" />

      <FinalCta
        title="Ready to grow your RTO passing business?"
        sub="Join RTO agents across India who use NViQ for zero-rejection AIS 140 VLTD fitments."
        whatsappMessage={WA_DESK}
        track="rto_partner_final"
        primary={<AnchorButton href="#apply">Apply for partner dealership</AnchorButton>}
      />
    </KitPage>
  );
}
