import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  getCityBySlug,
  getRtoFullSlug,
  getRtoRegionName,
  ALL_INDIA_STATES,
} from "@/data/india-rto-master";
import { RtoPartnerLocalView } from "@/components/rto/rto-partner-local-view";

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
  const title = `Become an RTO Partner in ${city.name}: AIS 140 Dealer Rates for RTO Agents & Consultants`;
  const description = `For RTO agents and consultants: join the authorized NViQ RTO Partner Network in ${city.name}, ${state.name}. Covering ${rtoCoverageText}. Instant Parivahan Sewa fitment certificates, doorstep installation, and high wholesale commissions for vehicle passing consultants.`;

  const keywords = [
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

  // Single-RTO towns redirect directly to the authoritative RTO page to prevent duplicate sibling indexing
  if (city.rtos.length === 1) {
    const fullSlug = getRtoFullSlug(city.rtos[0], city.name);
    permanentRedirect(`/rto-partner/${state.slug}/${city.slug}/${fullSlug}`);
  }

  const waMessage = `Hi NViQ Team, I am an RTO Agent/Consultant in ${city.name}, ${state.name}. I want to partner with NViQ for commercial vehicle fitness passing and instant VLTD certificates.`;

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
      a: `Authorized RTO partners in ${city.name} receive direct factory-wholesale pricing on AIS 140 units (slab-based rates shared after partner verification), zero upfront inventory lock-in, and 100% recurring annual commission on software and eSIM renewals.`,
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
        telephone: "+91 92570 38711",
        email: "team@naviqbharat.com",
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
    <RtoPartnerLocalView
      jsonLd={jsonLd}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "RTO Partner Network", href: "/rto-partner" },
        { name: state.name, href: `/rto-partner/${state.slug}` },
        { name: city.name },
      ]}
      eyebrow="Govt approved AIS 140 VLTD · Parivahan Sewa ready"
      title={`Authorised AIS 140 GPS partner in ${city.name}, ${state.name}`}
      highlight={`${city.name}, ${state.name}`}
      intro={`Get commercial vehicle passing certificates fast, direct wholesale dealer rates, and doorstep technician fitting across ${city.name}.`}
      points={["15-min Parivahan certificate sync", "Wholesale rates, best agent margins", `Fitting at ${city.name} yards`, "Zero rejections on fitness lanes"]}
      place={city.name}
      stateName={state.name}
      waMessage={waMessage}
      track="rto_city"
      form={{ defaultLocationName: `${city.name}, ${state.name}` }}
      rtoSection={{
        title: `Pick your RTO office in ${city.name}`,
        sub: "Each office page has the local partner desk, passing lanes and certificate steps.",
        cols: city.rtos.length > 4 ? 3 : 2,
        items: city.rtos.map((rto) => ({
          href: `/rto-partner/${state.slug}/${city.slug}/${getRtoFullSlug(rto, city.name)}`,
          name: getRtoRegionName(rto.name, city.name),
          tag: rto.code,
          strong: true,
          text: rto.name,
        })),
      }}
      faqs={cityFaqs}
      faqTitle={`RTO agent questions in ${city.name}`}
      directoryTitle={`Other cities in ${state.name}`}
      directoryItems={state.cities.map((c) => ({
        href:
          c.rtos.length === 1
            ? `/rto-partner/${state.slug}/${c.slug}/${getRtoFullSlug(c.rtos[0], c.name)}`
            : `/rto-partner/${state.slug}/${c.slug}`,
        name: c.name,
        tag: c.rtos.map((r) => r.code).join(", "),
        current: c.slug === city.slug,
      }))}
      directoryChips={ALL_INDIA_STATES.map((st) => ({ href: `/rto-partner/${st.slug}`, name: st.name, current: st.slug === state.slug }))}
      showRajasthanHubs={state.slug === "rajasthan"}
      customerHref={`/rto-agent/${state.slug}/${city.slug}`}
    />
  );
}
