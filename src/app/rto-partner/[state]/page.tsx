import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStateBySlug,
  getAllStateParams,
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
  const title = `Become an RTO Partner in ${state.name}: AIS 140 Dealer Rates for RTO Agents & Consultants`;
  const description = `For RTO agents and consultants: join NViQ authorized RTO consultant and dealer network across ${state.name}. Covering ${state.cities.length} cities and ${totalRtos} RTO offices. Instant 15-minute Parivahan Sewa / Vahan 4.0 certificates, doorstep fitment, and wholesale agent margins.`;

  const keywords = [
    `rto office in ${state.name.toLowerCase()}`,
    `parivahan seva ${state.name.toLowerCase()}`,
    `vltd certificate ${state.name.toLowerCase()}`,
    `vltd device price ${state.name.toLowerCase()}`,
    `commercial vehicle fitness passing ${state.name.toLowerCase()}`,
    `aitp permit gps ${state.name.toLowerCase()}`,
    ...state.cities.slice(0, 8).map((c) => `rto agent in ${c.name.toLowerCase()}`),
  ];

  const canonicalUrl = `https://www.naviqbharat.com/rto-partner/${state.slug}`;

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

  const waMessage = `Hi NViQ Team, I am an RTO Agent/Consultant in ${state.name}. I want to partner with NViQ for vehicle fitness passing and instant VLTD certificates across ${state.name}.`;

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
    {
      q: `What is the wholesale dealer pricing and margin for RTO agents across ${state.name}?`,
      a: `Registered RTO agents receive exclusive bulk dealer pricing (slab-based, depending on monthly volume, shared after partner verification), zero upfront inventory lock-in, and recurring annual renewal commissions.`,
    },
    {
      q: `Are NViQ devices approved for state mining portals and e-transit passes in ${state.name}?`,
      a: `Yes. In addition to Parivahan Sewa and Vahan 4.0, NViQ devices integrate with state mineral transport portals (such as e-Ravanna, Khanij Online, i-Khanij) for automated transit pass generation and mining clearance.`,
    },
    {
      q: `How do commercial fleet operators in ${state.name} complete annual fitness renewals?`,
      a: `Renewal takes under 5 minutes on the mobile partner app. Agents re-validate live telemetry, recharge cellular data, and generate an updated certified passing certificate on the spot.`,
    },
    {
      q: `Does NViQ provide emergency panic button wiring and calibration assistance in ${state.name}?`,
      a: `Yes. Every device kit includes ARAI-certified SOS buttons. Our certified technicians handle concealed wiring, ignition cut-off, and tamper-proof calibration required by ${state.name} fitness test lanes.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}#breadcrumb`,
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
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}#service`,
        name: `NViQ RTO Partner Network — ${state.name}`,
        description: `Official AIS 140 VLTD fitment and certificate generation network across ${state.name}, covering ${state.cities.length} cities and ${totalRtos} RTO offices.`,
        url: `https://www.naviqbharat.com/rto-partner/${state.slug}`,
        telephone: "+91 92570 38711",
        email: "team@naviqbharat.com",
        address: {
          "@type": "PostalAddress",
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
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}#faq`,
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
    <RtoPartnerLocalView
      jsonLd={jsonLd}
      crumbs={[{ name: "Home", href: "/" }, { name: "RTO Partner Network", href: "/rto-partner" }, { name: state.name }]}
      eyebrow="Govt approved AIS 140 VLTD · Parivahan Sewa ready"
      title={`Authorised AIS 140 GPS partner in ${state.name}`}
      highlight={state.name}
      intro={`Get commercial vehicle passing certificates fast, direct wholesale dealer rates, and doorstep technician fitting across all ${state.cities.length} cities in ${state.name}.`}
      points={["15-min Parivahan certificate sync", "Wholesale rates, best agent margins", "Fitting at your client's yard", `${totalRtos} RTO offices covered`]}
      place={state.name}
      stateName={state.name}
      waMessage={waMessage}
      track="rto_state"
      form={{ defaultLocationName: state.name }}
      rtoSection={{
        title: `All cities and RTO passing lanes in ${state.name}`,
        sub: "Pick your city to see the RTO offices, doorstep fitting coverage and local passing lanes.",
        cols: 3,
        items: state.cities.map((city) => ({
          href:
            city.rtos.length === 1
              ? `/rto-partner/${state.slug}/${city.slug}/${getRtoFullSlug(city.rtos[0], city.name)}`
              : `/rto-partner/${state.slug}/${city.slug}`,
          name: city.name,
          tag: `${city.rtos.length} ${city.rtos.length > 1 ? "RTOs" : "RTO"}`,
          text: city.rtos.map((r) => `${getRtoRegionName(r.name, city.name)} (${r.code})`).join(", "),
        })),
      }}
      faqs={stateFaqs}
      faqTitle={`RTO agent questions in ${state.name}`}
      directoryTitle="RTO partner networks in other states"
      directoryChips={ALL_INDIA_STATES.map((st) => ({ href: `/rto-partner/${st.slug}`, name: st.name, current: st.slug === state.slug }))}
      showRajasthanHubs={state.slug === "rajasthan"}
      customerHref={`/rto-agent#${state.slug}`}
    />
  );
}
