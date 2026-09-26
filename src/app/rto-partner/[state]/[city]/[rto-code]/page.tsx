import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getRtoDetail,
  getPriorityRtoParams,
} from "@/data/india-rto-master";
import RtoPartnerForm from "@/components/rto/rto-partner-form";
import {
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Building2,
  ChevronRight,
  ArrowRight,
  DownloadCloud,
  FileCheck2,
  Clock,
  Coins,
  Smartphone,
  Check,
  HelpCircle,
  Laptop,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

export const dynamicParams = true;

type Props = {
  params: Promise<{
    state: string;
    city: string;
    "rto-code": string;
  }>;
};

export async function generateStaticParams() {
  return getPriorityRtoParams(120);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const detail = getRtoDetail(resolved.state, resolved.city, resolved["rto-code"]);

  if (!detail) {
    return {
      title: "RTO Office AIS 140 VLTD Partner Network | NViQ",
      description: "Govt-approved AIS 140 VLTD fitment and RTO agent partner network across India.",
    };
  }

  const { state, city, rto } = detail;
  const title = `${rto.code} RTO Office (${rto.name}) — RTO Agent & AIS 140 VLTD Partner | NViQ`;
  const description = `Join NViQ RTO Partner Network near ${rto.name} (${rto.code}) in ${city.name}, ${state.name}. Guaranteed 15-min Parivahan Sewa / Vahan 4.0 VLTD fitment certificates, AITP tourist permit fitness passing, doorstep installation & highest agent commissions.`;

  const keywords = [
    `${rto.code.toLowerCase()} rto office`,
    `${rto.code.toUpperCase()} rto office`,
    `${rto.name.toLowerCase()}`,
    `near rto office ${city.name.toLowerCase()}`,
    `nearest rto office near me`,
    `rto office near me`,
    `rto agent near me ${city.name.toLowerCase()}`,
    `rto agents near me`,
    `rto consultant near me ${city.name.toLowerCase()}`,
    `rto services near me ${city.name.toLowerCase()}`,
    `parivahan seva ${rto.code.toLowerCase()}`,
    `parivahan sewa rto ${rto.code.toLowerCase()}`,
    `vahan login ${rto.code.toLowerCase()}`,
    `vltd certificate ${rto.code.toLowerCase()}`,
    `vltd device price ${city.name.toLowerCase()}`,
    `aitp vltd certificate ${city.name.toLowerCase()}`,
    `ais 140 gps ${rto.code.toLowerCase()}`,
    `commercial vehicle fitness passing ${city.name.toLowerCase()}`,
  ];

  const canonicalUrl = `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}`;

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
          alt: `${rto.name} (${rto.code}) RTO Partner Program`,
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

export default async function RtoCodePartnerPage({ params }: Props) {
  const resolved = await params;
  const detail = getRtoDetail(resolved.state, resolved.city, resolved["rto-code"]);

  if (!detail) {
    notFound();
  }

  const { state, city, rto } = detail;

  const whatsappMessage = encodeURIComponent(
    `Hi NViQ Team, I am an RTO Agent/Consultant at ${rto.name} (${rto.code}), ${city.name}. I want to partner with NViQ for instant Parivahan Sewa VLTD certificates and fitness passing.`
  );
  const whatsappUrl = `https://wa.me/919694551326?text=${whatsappMessage}`;

  const faqs = [
    {
      q: `How quickly can an RTO agent at ${rto.name} (${rto.code}) generate VLTD fitment certificates?`,
      a: `Fitment certificates sync to Parivahan Sewa (parivahan.gov.in / Vahan 4.0) in under 15 minutes right from your mobile phone or laptop. You can download and submit the certified copy instantly on the ${rto.code} fitness passing inspection lane without delay.`,
    },
    {
      q: `Are NViQ devices compliant for All India Tourist Permit (AITP) passing at ${rto.code}?`,
      a: `Yes. All NViQ devices are ARAI and ICAT certified AIS 140 VLTDs with dual-carrier eSIMs and emergency SOS panic buttons, fully approved for National and All India Tourist Permit (AITP) issuance, commercial fitness passing, and school buses at ${rto.name}.`,
    },
    {
      q: `Can I get doorstep technician fitment in ${city.name} for my client's commercial vehicles?`,
      a: `Yes. NViQ provides verified doorstep technician support across ${city.name} and surrounding transport yards. Technicians arrive directly at your depot, garage, or RTO yard to handle device wiring, panic button installation, and calibration.`,
    },
    {
      q: `What is the wholesale dealer pricing and commission for RTO consultants in ${state.name}?`,
      a: `Registered RTO agents receive exclusive bulk dealer pricing starting at ₹2,699–₹3,299 per unit (depending on volume), with recurring annual software renewal commissions and zero minimum upfront order requirements.`,
    },
    {
      q: `Where is ${rto.name} (${rto.code}) located and who can apply for dealership?`,
      a: `${rto.name} is the designated transport registration office for ${city.name}, ${state.name}. Any active RTO consultant, vehicle fitness passing broker, auto electrical shop owner, or fleet service provider operating near ${rto.code} can register as an official NViQ partner.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 4,
            name: city.name,
            item: `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: `${rto.code} - ${rto.name}`,
            item: `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}#service`,
        name: `NViQ RTO Partner Network — ${rto.name} (${rto.code})`,
        description: `Official AIS 140 VLTD fitment and certificate generation hub for ${rto.name} (${rto.code}) in ${city.name}, ${state.name}. Certified Parivahan Sewa and Vahan 4.0 sync.`,
        url: `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}`,
        telephone: "+919694551326",
        email: "naviqbharat@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: state.name,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${city.name} (${rto.code})`,
        },
        provider: {
          "@type": "Organization",
          name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
          url: "https://naviqbharat.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${rto.slug}#faq`,
        mainEntity: faqs.map((faq) => ({
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
      {/* Schema Injection */}
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
              <Link href={`/rto-partner/${state.slug}/${city.slug}`} className="hover:text-gray-900 transition-colors">{city.name}</Link>
            </li>
            <li><ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" /></li>
            <li>
              <span className="text-gray-900 font-bold" aria-current="page">{rto.code}</span>
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
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>Parivahan Sewa &amp; Vahan 4.0 Whitelisted • {rto.code} Passing Lane</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08]">
                {rto.code} RTO Office —{" "}
                <span className="text-blue-600">
                  Authorized AIS 140 VLTD Partner Network
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Partner with NViQ near <strong className="text-gray-900">{rto.name}</strong> ({city.name}).
                Instant certified fitment certificates for commercial vehicle fitness passing, All India Tourist Permit (AITP), priority doorstep technician dispatch, and highest broker commissions.
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
                  <span className="block text-base font-bold text-gray-900">{city.name}</span>
                  <span className="text-[11px] text-gray-500 font-medium">Doorstep Fitting</span>
                </div>
              </div>

              {/* Hyper-Local RTO Office Card */}
              <div className="rounded-xl bg-gray-50/70 border border-gray-200 p-5 mt-7">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        {rto.name} • {rto.code}
                      </h2>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Fitness Passing Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Jurisdiction: {city.name} District, {state.name} | Nearest RTO Office Hub
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-200/60 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[11px]">Certificate Sync</span>
                        <span className="text-gray-900 font-semibold">Under 15 Mins</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Doorstep Fitment</span>
                        <span className="text-gray-900 font-semibold">{city.name} Yards</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Permit Ready</span>
                        <span className="text-gray-900 font-semibold">AITP + Commercial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Apply for Dealership ({rto.code})</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={whatsappUrl}
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
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <div className="mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 mb-1 block">
                    Local Dealership Application
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Join NViQ Partner Desk ({rto.code})
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct broker wholesale access, same-day delivery, and instant certificates.
                  </p>
                </div>

                <RtoPartnerForm
                  defaultRtoCode={rto.code}
                  defaultLocationName={`${rto.name}, ${city.name}`}
                />
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
              Agency Tiers ({rto.code})
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Partner Privileges &amp; Growth Tiers
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Structured operational benefits designed to support your agency whether you pass 5 vehicles or manage large transport fleets near {rto.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tier 1</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Starter Consultant</h3>
                <p className="text-xs text-gray-500 mt-1">Ideal for individual agents handling routine vehicle passing at {rto.code}.</p>

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
                    <span>Doorstep Technician Fitment in {city.name}</span>
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
                <p className="text-xs text-gray-500 mt-1">Established consultancies managing commercial trucks &amp; buses at {rto.code}.</p>

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
                    <span>{rto.code} Territory Referral Priority</span>
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
              Built for Seamless RTO Operations near {rto.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No delays, zero certification rejections on {rto.code} inspection lanes, and no working capital lock-in.
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
                Zero rejections on fitness test lanes at {rto.name} ({rto.code}). ARAI &amp; ICAT certified AIS 140 devices.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-xs hover:border-blue-300 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">AITP &amp; Mining Compliant</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Pre-approved for All India Tourist Permit (AITP), commercial transport carriers, tippers, and tankers.
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

      {/* ── SUPPORTED VEHICLES & COMPLIANCE ───────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Compliance Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                Everything RTO Agents Need for Vehicle Fitness Passing
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Whether passing a commercial tipper or renewing fitness for a fleet of 50 trucks in {city.name}, NViQ provides hardware, pre-configured eSIM, panic buttons, and automated certificates.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Commercial Tippers &amp; Dumpers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>AITP Luxury Buses &amp; Travellers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Petroleum &amp; Chemical Tankers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>School &amp; Institutional Buses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Multi-Axle Cargo Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Doorstep Yard Wiring Support</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">MoRTH National Portal</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">Parivahan Sewa &amp; Vahan 4.0</h3>
                <p className="text-xs text-gray-500 mt-1">Direct parivahan.gov.in backend sync for commercial vehicle fitness test clearance.</p>
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">Tourist Permit</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">AITP National Approval</h3>
                <p className="text-xs text-gray-500 mt-1">Dual-carrier eSIM with panic button integration for tourist carriers.</p>
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 shadow-xs">
                <span className="text-[11px] font-semibold text-blue-600 uppercase">State Transport</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1">{state.name} Transport</h3>
                <p className="text-xs text-gray-500 mt-1">Pre-whitelisted for state fitness inspection lanes and RTO passing desks.</p>
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 shadow-xs">
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
              Start Issuing in 4 Simple Steps at {rto.code}
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
                Fill the partner form or send your {rto.code} RTO agency details via WhatsApp to our team.
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

      {/* ── NEIGHBORING RTO OFFICES ────────────────────────────── */}
      <section className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Jurisdiction Directory
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
                Neighboring RTO Offices in {state.name}
              </h2>
            </div>
            <Link
              href={`/rto-partner/${state.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>View All {state.name} RTOs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {city.rtos.map((neighbor) => (
              <Link
                key={neighbor.slug}
                href={`/rto-partner/${state.slug}/${city.slug}/${neighbor.slug}`}
                className={`p-3.5 rounded-xl border text-xs transition-all ${neighbor.slug === rto.slug
                    ? "bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-xs"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-2xs"
                  }`}
              >
                <span className="block font-mono text-sm text-blue-600 mb-0.5 font-bold">{neighbor.code}</span>
                <span className="line-clamp-1">{neighbor.name}</span>
              </Link>
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
              Common Questions from RTO Agents near {rto.name}
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
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
      <section className="py-16 bg-gray-50/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
            Start Earning in {city.name}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Become an Authorized NViQ Partner at {rto.code}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Gain immediate access to dealer wholesale rates, priority certificate approvals, and 24/7 technical assistance for all commercial vehicles.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm"
            >
              <Building2 className="h-4 w-4" />
              <span>Apply for Dealership ({rto.code})</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm shadow-xs"
            >
              <Smartphone className="h-4 w-4 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
