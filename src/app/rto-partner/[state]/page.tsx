import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getStateBySlug,
  getAllStateParams,
  ALL_INDIA_STATES,
} from "@/data/india-rto-master";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import {
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Building2,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Check,
  HelpCircle,
  Clock,
  Laptop,
  Award,
  Users,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

export const dynamicParams = true;

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export async function generateStaticParams() {
  return getAllStateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    return {
      title: "State RTO Partner Network | NViQ",
      description: "State-level authorized AIS 140 VLTD dealers and RTO agent network across India.",
    };
  }

  const totalRtos = state.cities.reduce((acc, c) => acc + c.rtos.length, 0);
  const title = `RTO Agent & AIS 140 VLTD Partner Network in ${state.name} (${totalRtos} RTO Hubs) | NViQ`;
  const description = `Join NViQ authorized RTO consultant and dealer network across ${state.name}. Covering ${state.cities.length} cities and ${totalRtos} RTO offices. Instant 15-minute Parivahan Sewa / Vahan 4.0 certificates, doorstep fitment, and wholesale agent margins.`;

  const keywords = [
    `rto agent near me ${state.name.toLowerCase()}`,
    `rto consultant near me ${state.name.toLowerCase()}`,
    `rto office in ${state.name.toLowerCase()}`,
    `nearest rto office near me ${state.name.toLowerCase()}`,
    `parivahan seva ${state.name.toLowerCase()}`,
    `vltd certificate ${state.name.toLowerCase()}`,
    `vltd device price ${state.name.toLowerCase()}`,
    `commercial vehicle fitness passing ${state.name.toLowerCase()}`,
    `aitp permit gps ${state.name.toLowerCase()}`,
    ...state.cities.slice(0, 8).map((c) => `rto agent in ${c.name.toLowerCase()}`),
  ];

  const canonicalUrl = `https://naviqbharat.com/rto-partner/${state.slug}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED" }],
    creator: "NViQ Bharat",
    publisher: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "NViQ Bharat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/rto-partner-banner-4k.png",
          width: 1200,
          height: 630,
          alt: `RTO Partner Program in ${state.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/rto-partner-banner-4k.png"],
    },
    alternates: {
      canonical: canonicalUrl,
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
  };
}

export default async function RtoStatePartnerPage({ params }: Props) {
  const resolved = await params;
  const state = getStateBySlug(resolved.state);

  if (!state) {
    notFound();
  }

  const totalRtos = state.cities.reduce((acc, c) => acc + c.rtos.length, 0);

  const whatsappMessage = encodeURIComponent(
    `Hi NViQ Team, I am an RTO Agent/Consultant in ${state.name}. I want to partner with NViQ for vehicle fitness passing and instant VLTD certificates across ${state.name}.`
  );
  const whatsappUrl = `https://wa.me/918529245390?text=${whatsappMessage}`;

  const stateFaqs = [
    {
      q: `How can RTO consultants and fitness passing agents in ${state.name} join the NViQ partner network?`,
      a: `Any vehicle fitness broker, auto consultant, or transport service desk in ${state.name} can register instantly by filling out the partner form or contacting our WhatsApp desk. Portal login credentials and wholesale dealer access are activated in under 30 minutes.`,
    },
    {
      q: `How long does it take to sync VLTD fitment certificates with Parivahan Sewa in ${state.name}?`,
      a: `Fitment certificates sync directly to the Ministry of Road Transport and Highways (MoRTH) Parivahan Sewa and Vahan 4.0 database in under 15 minutes. Agents can print or email certified copies immediately for fitness test lane clearance.`,
    },
    {
      q: `Which commercial vehicles in ${state.name} require AIS 140 VLTD devices?`,
      a: `All national permit commercial trucks, multi-axle trailers, tippers, petroleum/chemical tankers, private and government school buses, tempo travellers, and All India Tourist Permit (AITP) passenger carriers across ${state.name} are legally mandated to have AIS 140 VLTD trackers with panic buttons.`,
    },
    {
      q: `Does NViQ provide doorstep technician support across ${state.name}'s transport hubs?`,
      a: `Yes. NViQ operates mobile technician support covering major transport nagars, industrial areas, and depot yards in ${state.cities.slice(0, 5).map((c) => c.name).join(", ")}, and surrounding districts.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}#breadcrumb`,
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
            name: "RTO Partner Network",
            item: "https://naviqbharat.com/rto-partner",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: state.name,
            item: `https://naviqbharat.com/rto-partner/${state.slug}`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}#service`,
        name: `NViQ RTO Partner Network — ${state.name}`,
        description: `Official AIS 140 VLTD fitment and certificate generation network across ${state.name}, covering ${state.cities.length} cities and ${totalRtos} RTO offices.`,
        url: `https://naviqbharat.com/rto-partner/${state.slug}`,
        telephone: "+918529245390",
        email: "naviqbharat@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressRegion: state.name,
          addressCountry: "IN",
        },
        provider: {
          "@type": "Organization",
          name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
          url: "https://naviqbharat.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}#faq`,
        mainEntity: stateFaqs.map((faq) => ({
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
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white pt-20 pb-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" /></li>
            <li>
              <Link href="/rto-partner" className="hover:text-gray-900 transition-colors">RTO Partner Network</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" /></li>
            <li>
              <span className="text-gray-900 font-bold" aria-current="page">{state.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-5">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>{totalRtos} RTO Offices in {state.name} • Parivahan Sewa Whitelisted</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08]">
                RTO Consultant &amp; AIS 140 VLTD Partner Network in{" "}
                <span className="text-blue-600">
                  {state.name}
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Join India&apos;s leading AIS 140 VLTD partner network across {state.name}. 
                Equipping RTO agents and commercial vehicle consultants in {state.cities.length} cities with instant Parivahan Sewa certificate generation, doorstep yard fitment, and wholesale profit margins.
              </p>

              {/* Minimal Operational Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">ARAI &amp; ICAT</span>
                  <span className="text-[11px] text-gray-500 font-medium">Govt Certified</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">&lt; 15 Mins</span>
                  <span className="text-[11px] text-gray-500 font-medium">Vahan 4.0 Sync</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">0 Rejection</span>
                  <span className="text-[11px] text-gray-500 font-medium">Passing Guarantee</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-base font-bold text-gray-900">{state.capital}</span>
                  <span className="text-[11px] text-gray-500 font-medium">HQ &amp; Regional Desks</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Apply for {state.name} Dealership</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm shadow-xs"
                >
                  <Smartphone className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp {state.name} Desk</span>
                </a>
              </div>
            </div>

            <div id="apply" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <div className="mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 mb-1 block">
                    Fast Onboarding
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Apply for {state.name} Dealership
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Receive your broker portal credentials within 30 minutes.
                  </p>
                </div>

                <RtoPartnerForm defaultLocationName={state.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER TIERS & BENEFITS ─────────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Agency Tiers in {state.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Partner Privileges &amp; Growth Tiers
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Structured operational benefits designed to support your agency whether you pass 5 vehicles or manage large transport fleets across {state.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tier 1</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Starter Consultant</h3>
                <p className="text-xs text-gray-500 mt-1">Ideal for individual agents handling routine vehicle passing in {state.name}.</p>

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
                    <span>Priority Dispatch &amp; Hub Stock Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Doorstep Technician Fitment in {state.capital}</span>
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
                <p className="text-xs text-gray-500 mt-1">Established consultancies managing commercial trucks &amp; buses across {state.name}.</p>

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
                    <span>Dedicated Regional Account Manager for {state.name}</span>
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
                    <span>Priority Doorstep Technician Scheduling</span>
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
                <p className="text-xs text-gray-500 mt-1">High-volume contractors, mining consultants, and transport fleet hubs.</p>

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
                    <span>{state.name} Regional Territory Referral Priority</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Dedicated Camps for Fleet Yards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Bulk CSV &amp; API Vehicle Uploads</span>
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
              Built for Seamless RTO Operations in {state.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No delays, zero certification rejections on inspection lanes, and no working capital lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Mobile Fitment Certificate Portal</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Generate and download certified fitment certificates directly from your mobile phone or laptop once vehicle installation is completed.
              </p>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>Generated upon fitment &amp; telemetry validation</span>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Guaranteed Vahan 4.0 Whitelisting</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Zero rejections on fitness test lanes across all {totalRtos} RTO offices in {state.name}. ARAI &amp; ICAT certified AIS 140 devices.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">AITP &amp; Mining Compliant</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Pre-approved for All India Tourist Permit (AITP) and state mining portals (e-Ravanna, Khanij Online, i-Khanij).
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Zero Minimum Inventory Lock-in</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Never tie up working capital in unsold stock. Request devices as fitness passing orders arrive, with express dispatch to {state.name}.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Doorstep Mobile Technicians</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Request our certified fitment technicians to complete panic button wiring and device testing at your client&apos;s yard across {state.name}.
              </p>
            </div>

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
                Supported Vehicles &amp; Portals in {state.name}
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Whether your client is passing a national permit commercial truck, a private school bus, or 20 mining tippers, NViQ provides complete end-to-end compliance across {state.name}.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Mining Tippers &amp; Dumpers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Petroleum &amp; Chemical Tankers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>School &amp; Commercial Buses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Tempo Travellers &amp; Maxi Cabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Multi-Axle Cargo Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Transit Mixers &amp; Cranes</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">MoRTH National Portal</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">Parivahan Sewa &amp; Vahan 4.0</h3>
                <p className="text-xs text-gray-500 mt-1">Direct parivahan.gov.in backend sync for commercial vehicle fitness test clearance.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">State Transport</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">{state.name} Transport Dept</h3>
                <p className="text-xs text-gray-500 mt-1">Full compliance with state motor vehicle rules across all {state.cities.length} districts.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Tourist Permit</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">AITP National Permit</h3>
                <p className="text-xs text-gray-500 mt-1">Instant vehicle mapping for luxury buses, maxi-cabs, and tourist coaches.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Mining Transit</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">State Mining Portals</h3>
                <p className="text-xs text-gray-500 mt-1">Whitelisted for e-Ravanna and electronic mining transit permits.</p>
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
              Get your {state.name} RTO partner dealership setup in less than 2 hours without complex paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">01</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Submit Details</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Fill the partner form or send your {state.name} RTO agency details via WhatsApp to our team.
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

      {/* ── CITIES & RTO DIRECTORY ───────────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              District Jurisdiction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              All Cities &amp; RTO Passing Lanes in {state.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Select your city to view exact RTO office locations, doorstep fitting coverage, and local passing lanes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {state.cities.map((city) => (
              <div
                key={city.slug}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Link
                      href={`/rto-partner/${state.slug}/${city.slug}`}
                      className="font-bold text-base text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {city.name}
                    </Link>
                    <span className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      {city.rtos.length} {city.rtos.length > 1 ? "RTOs" : "RTO"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {city.rtos.map((rto) => (
                      <Link
                        key={rto.slug}
                        href={`/rto-partner/${state.slug}/${city.slug}/${rto.slug}`}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 hover:bg-blue-600 text-xs font-mono text-gray-700 hover:text-white transition-colors border border-gray-200 hover:border-blue-600"
                      >
                        {rto.code}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/rto-partner/${state.slug}/${city.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    <span>Explore {city.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Partner FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              RTO Consultant &amp; Agent FAQs in {state.name}
            </h2>
          </div>

          <div className="space-y-3.5">
            {stateFaqs.map((faq, idx) => (
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

      {/* ── OTHER STATES IN INDIA ─────────────────────────────── */}
      <section className="py-16 bg-gray-50/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                National Network
              </span>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight mt-1">
                Explore RTO Partner Networks in Other States
              </h2>
            </div>
            <Link
              href="/rto-partner"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              All India Overview →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ALL_INDIA_STATES.slice(0, 18).map((st) => (
              <Link
                key={st.slug}
                href={`/rto-partner/${st.slug}`}
                className={`p-3.5 rounded-xl border text-xs transition-all ${
                  st.slug === state.slug
                    ? "bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-xs"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-2xs"
                }`}
              >
                <span className="block font-semibold text-sm mb-0.5">{st.name}</span>
                <span className="text-gray-500 text-[11px] font-mono">{st.code}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ─────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Ready to Expand Your RTO Passing Business in {state.name}?
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              Join leading RTO agents across {state.cities.length} cities who trust NViQ for zero-rejection AIS 140 VLTD fitments.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm cursor-pointer"
              >
                <span>Apply for {state.name} Dealership</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+918529245390"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm cursor-pointer"
              >
                <PhoneCall className="h-4 w-4 text-blue-600" />
                <span>Call Desk: +91 85292 45390</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
