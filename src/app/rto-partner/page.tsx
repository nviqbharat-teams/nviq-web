import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  ShieldCheck,
  Award,
  PhoneCall,
  Laptop,
  Check,
  TrendingUp,
  Users,
  Smartphone,
  ChevronRight,
  HelpCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import RtoSearchSelector from "@/components/rto/rto-search-selector";

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
    url: "https://naviqbharat.com/rto-partner",
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
    canonical: "https://naviqbharat.com/rto-partner",
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
    a: "Yes. All NViQ AIS 140 VLTD devices are ARAI and ICAT certified and pre-whitelisted on the central Ministry of Road Transport and Highways (MoRTH) Parivahan portal (parivahan.gov.in / Vahan 4.0). Fitment certificates sync in under 15 minutes, guaranteeing zero rejection on RTO fitness passing inspection lanes.",
  },
  {
    q: "Can I generate fitment certificates from my mobile phone, and what are the conditions?",
    a: "Yes, authorized NViQ RTO partners can generate and download certified fitment certificates directly through their mobile phone or laptop. To ensure 100% compliance with MoRTH and Vahan 4.0 regulations, generation is completed once specific verification conditions are met: (1) physical device fitment with emergency panic buttons is completed, and (2) live GPS and SOS telemetry are successfully validated on the central server. Once verified, the certificate is generated and synced to the Vahan portal in 15 minutes.",
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

export default function RtoPartnerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://naviqbharat.com/rto-partner#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://naviqbharat.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "RTO Consultant Partnership",
            item: "https://naviqbharat.com/rto-partner",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://naviqbharat.com/rto-partner#webpage",
        url: "https://naviqbharat.com/rto-partner",
        name: "RTO Partner Program | AIS 140 VLTD for RTO Consultants & Agents",
        description:
          "Join the NViQ RTO Partner Program for RTO consultants, agents, and RTO services near every RTO office in India. Instant Parivahan Sewa & Vahan 4.0 fitness passing certificate generation via mobile app, zero rejections, and doorstep fitment support.",
        breadcrumb: {
          "@id": "https://naviqbharat.com/rto-partner#breadcrumb",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://naviqbharat.com/#website",
          name: "NViQ Bharat",
          url: "https://naviqbharat.com",
        },
        about: {
          "@id": "https://naviqbharat.com/rto-partner#service",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://naviqbharat.com/#organization",
        name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
        alternateName: "NViQ Bharat",
        url: "https://naviqbharat.com",
        logo: "https://naviqbharat.com/logo.jpeg",
        telephone: "+919694551326",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+919694551326",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "Hindi"],
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://naviqbharat.com/rto-partner#service",
        name: "NViQ RTO Partner Certificate & Compliance Network",
        serviceType: "Automotive Telematics Dealership & Vahan Compliance Certification",
        provider: {
          "@id": "https://naviqbharat.com/#organization",
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
        "@id": "https://naviqbharat.com/rto-partner#faq",
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
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5 text-gray-400" /></li>
            <li>
              <span className="text-gray-900 font-medium">RTO Consultant Partnership</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-5">
                <Award className="h-3.5 w-3.5 text-blue-600" />
                <span>Parivahan Sewa & Vahan 4.0 Whitelisted • Nearest RTO Office Fitment Network</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08]">
                AIS 140 VLTD Network for{" "}
                <span className="text-blue-600">
                  RTO Consultants & Agents
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Supporting RTO consultants, agents, and RTO services near every RTO office across India. Generate verified Parivahan Sewa & Vahan 4.0 passing certificates directly from your mobile app, backed by our 100% zero-rejection guarantee and priority doorstep technician fitment.
              </p>

              {/* Minimal Operational Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">ARAI & ICAT</span>
                  <span className="text-[11px] text-gray-500 font-medium">Govt Certified</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">15 Mins</span>
                  <span className="text-[11px] text-gray-500 font-medium">Vahan 4.0 Sync</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">0 Rejection</span>
                  <span className="text-[11px] text-gray-500 font-medium">Passing Guarantee</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">Mobile App</span>
                  <span className="text-[11px] text-gray-500 font-medium">Digital Issuance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Apply for Partner Dealership</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://wa.me/919313200700?text=Hi%20NViQ%20Team%2C%20I%20am%20an%20RTO%20Consultant%20interested%20in%20partnering%20for%20VLTD%20fitments."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm shadow-xs"
                >
                  <Smartphone className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp RTO Desk</span>
                </a>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div id="apply" className="lg:col-span-5 scroll-mt-24">
              <RtoPartnerForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNER TIERS & BENEFITS ─────────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Agency Tiers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Partner Privileges & Growth Tiers
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Structured operational benefits designed to support your agency whether you pass 5 vehicles or manage large transport fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tier 1</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Starter Consultant</h3>
                <p className="text-xs text-gray-500 mt-1">Ideal for individual agents handling routine vehicle passing.</p>

                <div className="my-5 space-y-2.5 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Mobile App Certificate Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>15-Minute Instant Vahan 4.0 Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Zero Minimum Order Quantity (0 MOQ)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Priority Dispatch & Hub Stock Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Standard Doorstep Technician Fitment</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">Volume:</span>
                <div className="text-sm font-bold text-gray-900 mt-0.5">1 – 10 Vehicles / month</div>
              </div>
            </div>

            {/* Tier 2 - Highlighted */}
            <div className="rounded-2xl bg-white border-2 border-blue-600 p-6 shadow-sm relative flex flex-col justify-between">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Tier 2</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Preferred Agency</h3>
                <p className="text-xs text-gray-500 mt-1">Established consultancies managing commercial trucks and buses.</p>

                <div className="my-5 space-y-2.5 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2 font-medium text-gray-900">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Everything in Tier 1 Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Dedicated Fast-Track Hardware Allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Dedicated Regional Key Account Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Co-branded Fitment Certificates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Automated Client Fleet Renewal Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Priority Technician Scheduling</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">Volume:</span>
                <div className="text-sm font-bold text-blue-600 mt-0.5">11 – 30 Vehicles / month</div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tier 3</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Super Distributor</h3>
                <p className="text-xs text-gray-500 mt-1">High-volume contractors, mining consultants, and fleet hubs.</p>

                <div className="my-5 space-y-2.5 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2 font-medium text-gray-900">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Everything in Tier 2 Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Direct Factory Supply Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Regional Territory Referral Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Dedicated Camps for Fleet Yards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Bulk CSV & API Vehicle Uploads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Dedicated VIP Support Line</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">Volume:</span>
                <div className="text-sm font-bold text-gray-900 mt-0.5">30+ Vehicles / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 6 ADVANTAGES ──────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Why Partner With NViQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Built for Seamless RTO Operations
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No delays, zero certification rejections, and no working capital lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Advantage 1 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Mobile Fitment Certificate Portal</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Generate and download certified fitment certificates directly from your mobile phone or laptop once vehicle installation is completed and device telemetry is verified.
              </p>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>Generated upon fitment & telemetry validation</span>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Guaranteed Vahan 4.0 Whitelisting</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Zero rejections on fitness test lanes. Every NViQ VLTD is ARAI & ICAT certified with pre-mapped backend servers connecting seamlessly to Parivahan.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Mines Portal Whitelisting</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Pre-approved for e-Ravanna and e-Transit Pass across Rajasthan DMG, MP Khanij, Gujarat i-Khanij, and Haryana Mines.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Zero Minimum Inventory Requirement</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Never tie up working capital in unsold stock. Request devices as fitness jobs arrive, with express dispatch to your office or doorstep.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Doorstep Mobile Technicians</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Don&apos;t have an in-house electrician? Request our certified fitment technician to complete panic button wiring and device testing at your client&apos;s yard.
              </p>
            </div>

            {/* Advantage 6 */}
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Automated Annual Fleet Management</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Vehicles return annually for fitness passing. We provide automated renewal tracking and alert management for all your registered clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VEHICLES & PORTALS ────────────────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Compliance Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                Supported Vehicles & Government Portals
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Whether your client is passing a national permit commercial truck, a private school bus, or 20 mining tippers, NViQ provides complete end-to-end compliance.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Mining Tippers & Dumpers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Petroleum & Chemical Tankers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>School & Commercial Buses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Tempo Travellers & Maxi Cabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Multi-Axle Cargo Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Transit Mixers & Cranes</span>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-gray-200">
                <Link
                  href="/vltd"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore State Mining Portals Hub</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Portal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">MoRTH National Portal</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">Parivahan Sewa & Vahan 4.0</h3>
                <p className="text-xs text-gray-500 mt-1">Direct parivahan.gov.in backend sync for commercial vehicle fitness test clearance.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Rajasthan</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">DMG Khanij Online</h3>
                <p className="text-xs text-gray-500 mt-1">Bajri, marble, granite, and limestone tipper transit pass approval.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Madhya Pradesh</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">MP Khanij Track</h3>
                <p className="text-xs text-gray-500 mt-1">Instant vehicle mapping for sand, stone, and mineral transit permits.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Gujarat & Haryana</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">i-Khanij & e-Ravanna</h3>
                <p className="text-xs text-gray-500 mt-1">Fast-track whitelisting for mining lease transit compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMPLE ONBOARDING STEPS ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Simple Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Start Issuing in 4 Simple Steps
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Get your dealership setup in less than 2 hours without complex paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">01</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Submit Details</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Fill the partner form or send your RTO agency details via WhatsApp to our team.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">02</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Get Portal Access</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Receive authorized dealer credentials for the mobile certificate issuance app.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">03</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Order Devices</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Receive AIS 140 VLTD units with express delivery and zero inventory lock-in.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">04</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Verified Certificate Issuance</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Complete fitment, verify telemetry via mobile app, and download certified Vahan passing certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAN-INDIA RTO DIRECTORY & SEARCH SECTION ─────────── */}
      <section id="rto-directory" className="py-20 bg-gray-50/70 text-gray-900 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
              Pan-India Coverage • 1,200+ RTO Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Find Your Nearest RTO Office &amp; Local Partner Desk
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Search by RTO code, city name, or browse your state below to explore local passing inspection hubs, instant Parivahan Sewa certificate generation, and doorstep technician dispatch.
            </p>
          </div>

          <RtoSearchSelector />
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Partner FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {RTO_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-gray-200 p-5 sm:p-6 shadow-xs"
              >
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-start gap-2.5">
                  <HelpCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Ready to Expand Your RTO Passing Business?
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              Join hundreds of RTO agents across India who trust NViQ for zero-rejection AIS 140 VLTD fitments.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm cursor-pointer"
              >
                <span>Apply for Partner Dealership</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+919694551326"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm cursor-pointer"
              >
                <PhoneCall className="h-4 w-4 text-blue-600" />
                <span>Call Desk: +91 9694551326</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
