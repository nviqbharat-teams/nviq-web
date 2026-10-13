import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCityBySlug,
  getRtoFullSlug,
  getRtoRegionName,
  ALL_INDIA_STATES,
} from "@/data/india-rto-master";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import RtoPartnerPrivileges from "@/components/rto/rto-partner-privileges";
import { TruckCategoryGrid, RajasthanTruckCitiesGrid } from "@/components/trucks/truck-nav-grids";
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
  Coins,
  FileCheck2,
  Laptop,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

export const dynamicParams = true;
export const revalidate = 604800;

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export async function generateStaticParams() {
  const priorityStateCodes = ["DL", "KA", "TN", "MH", "UP", "RJ", "GJ", "HR", "MP", "PB"];
  const params: { state: string; city: string }[] = [];

  for (const s of ALL_INDIA_STATES) {
    if (priorityStateCodes.includes(s.code)) {
      for (const c of s.cities.slice(0, 5)) {
        params.push({
          state: s.slug,
          city: c.slug,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    return {
      title: "RTO Partner Network City Hub | NViQ",
      description: "Authorized AIS 140 VLTD dealers and RTO agent network across Indian cities.",
    };
  }

  const { state, city } = match;
  const rtoCoverageText = city.rtos
    .map((r) => `${getRtoRegionName(r.name, city.name)} (${r.code})`)
    .join(", ");
  const title = `RTO Agent & AIS 140 VLTD Partner in ${city.name}, ${state.name} | Parivahan Sewa Certified`;
  const description = `Join the authorized NViQ RTO Partner Network in ${city.name}, ${state.name}. Covering ${rtoCoverageText}. Instant Parivahan Sewa fitment certificates, doorstep installation, and high wholesale commissions for vehicle passing consultants.`;

  const keywords = [
    `rto agent near me ${city.name.toLowerCase()}`,
    `rto consultant near me ${city.name.toLowerCase()}`,
    `rto services near me ${city.name.toLowerCase()}`,
    `nearest rto office near me ${city.name.toLowerCase()}`,
    `rto office ${city.name.toLowerCase()}`,
    ...city.rtos.map((r) => `${getRtoRegionName(r.name, city.name).toLowerCase()} rto office`),
    ...city.rtos.map((r) => `${getRtoRegionName(r.name, city.name).toLowerCase()} ${r.code.toLowerCase()} rto office`),
    ...city.rtos.map((r) => `${r.code.toLowerCase()} rto office`),
    `parivahan seva ${city.name.toLowerCase()}`,
    `vltd certificate ${city.name.toLowerCase()}`,
    `vltd device price ${city.name.toLowerCase()}`,
    `commercial vehicle fitness passing ${city.name.toLowerCase()}`,
    `aitp permit gps ${city.name.toLowerCase()}`,
  ];

  const isSingleRto = city.rtos.length === 1;
  const canonicalUrl = isSingleRto
    ? `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${getRtoFullSlug(city.rtos[0], city.name)}`
    : `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}`;

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
          alt: `RTO Partner Program in ${city.name}`,
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

export default async function RtoCityPartnerPage({ params }: Props) {
  const resolved = await params;
  const match = getCityBySlug(resolved.state, resolved.city);

  if (!match) {
    notFound();
  }

  const { state, city } = match;

  const whatsappMessage = encodeURIComponent(
    `Hi NViQ Team, I am an RTO Agent/Consultant in ${city.name}, ${state.name}. I want to partner with NViQ for commercial vehicle fitness passing and instant VLTD certificates.`
  );
  const whatsappUrl = `https://wa.me/919694551326?text=${whatsappMessage}`;

  const cityFaqs = [
    {
      q: `Where are the authorized NViQ fitment and certificate partner centers in ${city.name}?`,
      a: `NViQ operates doorstep fitment and partner desks across ${city.name}, serving ${city.rtos.map((r) => `${getRtoRegionName(r.name, city.name)} (${r.code})`).join(", ")}. Technicians dispatch directly to your client's yard, garage, or Transport Nagar.`,
    },
    {
      q: `Can RTO agents in ${city.name} generate instant certificates for All India Tourist Permit (AITP) vehicles?`,
      a: `Yes. All NViQ devices are ARAI and ICAT certified AIS 140 VLTDs with dual-carrier eSIM and emergency SOS panic buttons, fully whitelisted for AITP national permits and commercial passing clearance across ${city.name}.`,
    },
    {
      q: `How fast can doorstep GPS fitment technicians reach my client's yard in ${city.name}?`,
      a: `Doorstep technician response in ${city.name} is typically 2 to 4 hours. Complete concealed wiring, emergency panic button wiring, and live Vahan 4.0 packet verification are finished on-site.`,
    },
    {
      q: `What documents are required for an RTO consultant in ${city.name} to get dealer portal access?`,
      a: `Registration takes under 30 minutes. Submit your consultant name, phone number, and operating RTO jurisdiction (${city.rtos.map((r) => r.code).join(", ")}) to receive instant portal credentials and dealer wholesale pricing.`,
    },
    {
      q: `What is the wholesale dealer pricing and commission structure for RTO agents in ${city.name}?`,
      a: `Authorized RTO partners in ${city.name} receive direct factory-wholesale pricing on AIS 140 units (starting ₹2,699–₹3,299 per unit depending on order volume), zero upfront inventory lock-in, and 100% recurring annual commission on software and eSIM renewals.`,
    },
    {
      q: `Does NViQ provide emergency panic button wiring and calibration for commercial fitness testing?`,
      a: `Yes. Every device kit includes ARAI-certified SOS emergency buttons. Certified technicians handle concealed wiring, ignition sensing, and tamper-proof calibration required by ${city.name} fitness inspection lanes.`,
    },
    {
      q: `Which commercial vehicles in ${city.name} require mandatory AIS 140 VLTD certificate upload on Vahan 4.0?`,
      a: `Under MoRTH mandate, commercial trucks (tippers, dumpers, trailers, multi-axle cargo), school buses, petroleum/hazardous chemical tankers, and passenger vehicles operating on state or AITP permits in ${city.name} must have active VLTD fitment certificates for fitness passing.`,
    },
    {
      q: `How does annual fitness passing renewal and eSIM recharge work for fleet operators in ${city.name}?`,
      a: `NViQ provides automated renewal reminders 30 days before annual fitness expiry. Agents can re-validate telemetry packets, recharge the dual-network eSIM, and re-download certified passing certificates in under 5 minutes through the partner portal.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}#breadcrumb`,
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
            name: "RTO Partner Network",
            item: "https://www.naviqbharat.com/rto-partner",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: state.name,
            item: `https://www.naviqbharat.com/rto-partner/${state.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: city.name,
            item: `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}#service`,
        name: `NViQ RTO Partner Network — ${city.name}, ${state.name}`,
        description: `Official AIS 140 VLTD fitment and certificate generation network for RTO offices in ${city.name}, ${state.name}.`,
        url: `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}`,
        telephone: "+919694551326",
        email: "naviqbharat@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: state.name,
          addressCountry: "IN",
        },
        provider: {
          "@type": "Organization",
          name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
          url: "https://www.naviqbharat.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}#faq`,
        mainEntity: cityFaqs.map((faq) => ({
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
              <Link href={`/rto-partner/${state.slug}`} className="hover:text-gray-900 transition-colors">{state.name}</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" /></li>
            <li>
              <span className="text-gray-900 font-bold" aria-current="page">{city.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Govt Approved AIS 140 VLTD • Parivahan Sewa Ready</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08]">
                Authorized AIS 140 GPS Partner in{" "}
                <span className="text-blue-600">
                  {city.name}, {state.name}
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Get instant commercial vehicle passing certificates, direct wholesale dealer rates, and fast doorstep technician fitting across {city.name}.
              </p>

              {/* 4 Simple, Clear Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">15-Min Sync</span>
                  <span className="text-[11px] text-gray-500 font-medium">Fast Parivahan Certificate</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Wholesale Rates</span>
                  <span className="text-[11px] text-gray-500 font-medium">Best Agent Margins</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Doorstep Fitment</span>
                  <span className="text-[11px] text-gray-500 font-medium">Fitting at {city.name} Yards</span>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-3 text-center">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Zero Rejections</span>
                  <span className="text-[11px] text-gray-500 font-medium">100% Passing Guarantee</span>
                </div>
              </div>

              {/* RTO Offices in this city */}
              <div className="mt-8">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
                  Select Your Specific RTO Office in {city.name}:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {city.rtos.map((rto) => {
                    const regionName = getRtoRegionName(rto.name, city.name);
                    const fullSlug = getRtoFullSlug(rto, city.name);
                    return (
                      <Link
                        key={rto.slug}
                        href={`/rto-partner/${state.slug}/${city.slug}/${fullSlug}`}
                        className="p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                              {regionName}
                            </span>
                            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                              {rto.code}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5 block">
                            {rto.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Apply for {city.name} Dealership</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm shadow-xs"
                >
                  <Smartphone className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp {city.name} Desk</span>
                </a>
              </div>
            </div>

            <div id="apply" className="lg:col-span-5 scroll-mt-24">
              <RtoPartnerForm defaultLocationName={city.name} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 1-HOUR CERTIFICATES & DUAL MOBILE APPS ECOSYSTEM ───── */}
      <RtoPartnerPrivileges locationName={`${city.name}, ${state.name}`} />

      {/* ── THE 6 ADVANTAGES ──────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Why Partner With NViQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Built for Seamless RTO Operations in {city.name}
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
                Zero rejections on fitness test lanes across all {city.name} RTO offices ({city.rtos.map((r) => `${getRtoRegionName(r.name, city.name)} — ${r.code}`).join(", ")}).
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">AITP &amp; Commercial Permits</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Pre-approved for All India Tourist Permit (AITP), passenger carriers, and commercial trucks operating out of {city.name}.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Zero Minimum Inventory Lock-in</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Never tie up working capital in unsold stock. Request devices as fitness passing orders arrive, with express dispatch to {city.name}.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Doorstep Mobile Technicians</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Request our certified fitment technicians to complete panic button wiring and device testing at your client&apos;s yard in {city.name}.
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
                Supported Vehicles &amp; Portals in {city.name}
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Whether your client is passing a commercial truck, school bus, or tourist taxi, NViQ provides complete end-to-end compliance across {city.name}, {state.name}.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Commercial Tippers &amp; Dumpers</span>
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
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Tourist Permit</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">AITP National Permit</h3>
                <p className="text-xs text-gray-500 mt-1">Dual-carrier eSIM with panic button integration for tourist carriers in {city.name}.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">State Transport</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">{state.name} Transport</h3>
                <p className="text-xs text-gray-500 mt-1">Pre-whitelisted for state fitness inspection lanes and RTO passing desks.</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Self-Service</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">Mobile Certificate App</h3>
                <p className="text-xs text-gray-500 mt-1">Generate and download certified fitment certificates right from your phone.</p>
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
              Get your {city.name} RTO partner dealership setup in less than 2 hours without complex paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <span className="text-2xl font-bold text-blue-600">01</span>
              <h3 className="text-sm font-bold text-gray-900 mt-2">Submit Details</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Fill the partner form or send your {city.name} RTO agency details via WhatsApp to our team.
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

      {/* ── COMMERCIAL FLEET & TRUCK PASSING INTERNAL LINKING ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
              Commercial Vehicles &amp; Fleet Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Commercial Truck Passing &amp; Fleet Directory for {city.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore AIS 140 VLTD fitment specifications for heavy commercial vehicles, mining tippers, and tankers across {city.name}, {state.name}.
            </p>
          </div>

          <TruckCategoryGrid />
          {state.slug === "rajasthan" && <RajasthanTruckCitiesGrid currentCitySlug={city.slug} />}
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
              RTO Agent FAQs for {city.name}, {state.name}
            </h2>
          </div>

          <div className="space-y-3.5">
            {cityFaqs.map((faq, idx) => (
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

      {/* ── OTHER CITIES IN STATE ─────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                State Coverage
              </span>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight mt-1">
                Other Transport Hubs in {state.name}
              </h2>
            </div>
            <Link
              href={`/rto-partner/${state.slug}`}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              All {state.name} Hubs →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {state.cities.map((c) => (
              <Link
                key={c.slug}
                href={`/rto-partner/${state.slug}/${c.slug}`}
                className={`p-3 rounded-xl border text-xs transition-all ${c.slug === city.slug
                  ? "bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-xs"
                  : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-2xs"
                  }`}
              >
                <span className="block font-semibold text-sm mb-0.5">{c.name}</span>
                <span className="text-gray-500 text-[11px]">
                  {c.rtos.map((r) => r.code).join(", ")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ─────────────────────────────── */}
      <section className="py-16 bg-gray-50/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Ready to Expand Your RTO Passing Business in {city.name}?
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              Join leading RTO agents across {city.name} who trust NViQ for zero-rejection AIS 140 VLTD fitments.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm cursor-pointer"
              >
                <span>Apply for {city.name} Dealership</span>
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
