import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  getRtoDetail,
  getPriorityRtoParams,
  getRtoFullSlug,
  getRtoRegionName,
} from "@/data/india-rto-master";
import { RtoPartnerLocalView } from "@/components/rto/rto-partner-local-view";

export const dynamicParams = true;
export const revalidate = 604800;

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

  const { state, city, rto, canonicalSlug, regionName } = detail;
  const title = `${rto.code} ${regionName} RTO Partner Program: Dealer Rates for RTO Agents & Consultants`;
  const description = `For RTO agents and consultants: join NViQ RTO Partner Network near ${regionName} (${rto.code} - ${rto.name}) in ${city.name}, ${state.name}. Guaranteed 15-min Parivahan Sewa / Vahan 4.0 VLTD fitment certificates, AITP tourist permit fitness passing, doorstep installation & highest agent commissions.`;

  const keywords = [
    `${regionName.toLowerCase()} ${rto.code.toLowerCase()} rto office`,
    `${regionName.toLowerCase()} rto consultant`,
    `${regionName.toLowerCase()} vltd certificate`,
    `${regionName.toLowerCase()} (${rto.code.toLowerCase()})`,
    `${rto.code.toLowerCase()} rto office`,
    `${rto.code.toUpperCase()} rto office`,
    `${rto.name.toLowerCase()}`,
    `near rto office ${city.name.toLowerCase()}`,
    `parivahan seva ${regionName.toLowerCase()}`,
    `parivahan seva ${rto.code.toLowerCase()}`,
    `parivahan sewa rto ${rto.code.toLowerCase()}`,
    `vahan login ${rto.code.toLowerCase()}`,
    `vltd certificate ${rto.code.toLowerCase()}`,
    `vltd device price ${city.name.toLowerCase()}`,
    `aitp vltd certificate ${city.name.toLowerCase()}`,
    `ais 140 gps ${rto.code.toLowerCase()}`,
    `commercial vehicle fitness passing ${regionName.toLowerCase()}`,
    `commercial vehicle fitness passing ${city.name.toLowerCase()}`,
  ];

  const canonicalUrl = `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}`;

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
          alt: `${regionName} (${rto.code}) RTO Partner Program in ${city.name}`,
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

  const { state, city, rto, canonicalSlug, regionName } = detail;

  // 301 Permanent Redirect old/alternate slugs (e.g. raw code "an-02" or "rj-32") to authoritative canonical SEO slug
  if (resolved["rto-code"] !== canonicalSlug) {
    permanentRedirect(`/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}`);
  }

  const waMessage = `Hi NViQ Team, I am an RTO Agent/Consultant at ${regionName} (${rto.code} - ${rto.name}), ${city.name}. I want to partner with NViQ for instant Parivahan Sewa VLTD certificates and fitness passing.`;

  const faqs = [
    {
      q: `How quickly can an RTO agent at ${regionName} (${rto.code}) generate VLTD fitment certificates?`,
      a: `Fitment certificates sync to Parivahan Sewa (parivahan.gov.in / Vahan 4.0) in under 15 minutes right from your mobile phone or laptop. You can download and submit the certified copy instantly on the ${regionName} (${rto.code}) fitness passing inspection lane without delay.`,
    },
    {
      q: `Are NViQ devices compliant for All India Tourist Permit (AITP) passing at ${regionName} (${rto.code})?`,
      a: `Yes. All NViQ devices are ARAI and ICAT certified AIS 140 VLTDs with dual-carrier eSIMs and emergency SOS panic buttons, fully approved for National and All India Tourist Permit (AITP) issuance, commercial fitness passing, and school buses at ${regionName} (${rto.code} - ${rto.name}).`,
    },
    {
      q: `Can I get doorstep technician fitment in ${regionName} and ${city.name} for my client's commercial vehicles?`,
      a: `Yes. NViQ provides verified doorstep technician support across ${regionName}, ${city.name}, and surrounding transport yards. Technicians arrive directly at your depot, garage, or RTO yard to handle device wiring, panic button installation, and live calibration.`,
    },
    {
      q: `What is the wholesale dealer pricing and commission for RTO consultants near ${regionName} (${rto.code})?`,
      a: `Registered RTO agents receive exclusive bulk dealer pricing (slab-based, depending on volume, shared after partner verification), with 100% recurring annual software renewal commissions and zero minimum upfront order requirements.`,
    },
    {
      q: `Where is ${regionName} (${rto.code}) located and who can apply for dealership?`,
      a: `${rto.name} (${rto.code}) is the designated transport registration office serving ${regionName} and ${city.name}, ${state.name}. Any active RTO consultant, vehicle fitness passing broker, auto electrical shop owner, or fleet service provider operating near ${regionName} can register as an official NViQ partner.`,
    },
    {
      q: `Does NViQ guarantee 100% test lane passing at ${regionName} (${rto.code}) without Vahan sync rejections?`,
      a: `Yes. Every device undergoes automated packet verification on our testing server before certificate issuance. Once verified, telemetry data syncs with Parivahan Sewa / Vahan 4.0, guaranteeing zero rejections on the ${regionName} (${rto.code}) inspection lane.`,
    },
    {
      q: `Which commercial vehicle categories in ${regionName} require mandatory AIS 140 VLTD trackers?`,
      a: `Under MoRTH mandate, commercial trucks (tippers, multi-axle trailers, cargo haulers), petroleum and chemical tankers, educational institution buses, tempo travellers, and all commercial passenger vehicles registered under ${regionName} (${rto.code}) must have active AIS 140 VLTDs for passing.`,
    },
    {
      q: `How does renewal and transfer work if a vehicle's fitness expires or is sold in ${regionName} (${rto.code})?`,
      a: `Annual renewals take under 5 minutes on the partner portal. RTO agents can renew the cellular data plan, run a live telemetry health check, and generate a new fitness passing certificate without removing or replacing the device.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 5,
            name: `${regionName} (${rto.code})`,
            item: `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}#service`,
        name: `NViQ RTO Partner Network — ${regionName} (${rto.code})`,
        description: `Official AIS 140 VLTD fitment and certificate generation hub for ${regionName} (${rto.code} - ${rto.name}) in ${city.name}, ${state.name}. Certified Parivahan Sewa and Vahan 4.0 sync.`,
        url: `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}`,
        telephone: "+91 92570 38711",
        email: "team@naviqbharat.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: regionName || city.name,
          addressRegion: state.name,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${regionName} (${rto.code}), ${city.name}`,
        },
        provider: {
          "@type": "Organization",
          name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
          url: "https://www.naviqbharat.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.naviqbharat.com/rto-partner/${state.slug}/${city.slug}/${canonicalSlug}#faq`,
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
    <RtoPartnerLocalView
      jsonLd={jsonLd}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "RTO Partner Network", href: "/rto-partner" },
        { name: state.name, href: `/rto-partner/${state.slug}` },
        { name: city.name, href: `/rto-partner/${state.slug}/${city.slug}` },
        { name: `${regionName} (${rto.code})` },
      ]}
      eyebrow={`Govt approved AIS 140 VLTD · ${rto.code} Parivahan Sewa ready`}
      title={`Authorised AIS 140 GPS partner at ${regionName} (${rto.code})`}
      highlight={`${regionName} (${rto.code})`}
      intro={`Get commercial vehicle passing certificates fast, direct wholesale dealer rates, and doorstep technician fitting near ${regionName} (${rto.code} - ${rto.name}) across ${city.name}.`}
      points={["15-min Parivahan certificate sync", "Wholesale rates, best agent margins", `Fitting at ${regionName} yards`, "Zero rejections on fitness lanes"]}
      place={`${regionName} (${rto.code})`}
      stateName={state.name}
      waMessage={waMessage}
      track="rto_office"
      form={{ defaultLocationName: `${city.name}, ${state.name}`, defaultRtoCode: `${regionName} (${rto.code})` }}
      office={{
        title: `${regionName} — ${rto.code} (${rto.name})`,
        text: `Jurisdiction: ${regionName}, ${city.name} district, ${state.name}.`,
        codeHref: `/rto-code/${rto.code.toLowerCase()}`,
        codeLabel: `${rto.code.replace("-", " ")}: which district and other codes`,
        facts: [
          { label: "Certificate sync", value: "Under 15 minutes" },
          { label: "Doorstep fitment", value: `${regionName} yards` },
          { label: "Permit ready", value: "AITP + commercial" },
        ],
      }}
      rtoSection={
        city.rtos.length > 1
          ? {
              title: `Other RTO offices in ${city.name}`,
              cols: city.rtos.length > 4 ? 3 : 2,
              items: city.rtos.map((n) => ({
                href: `/rto-partner/${state.slug}/${city.slug}/${getRtoFullSlug(n, city.name)}`,
                name: getRtoRegionName(n.name, city.name),
                tag: n.code,
                strong: true,
                text: n.name,
                current: n.slug === rto.slug,
              })),
              moreHref: `/rto-partner/${state.slug}`,
              moreLabel: `View all ${state.name} RTOs`,
            }
          : undefined
      }
      faqs={faqs}
      faqTitle={`Questions from RTO agents near ${regionName} (${rto.code})`}
      directoryTitle={`More RTO partner pages in ${state.name}`}
      directoryItems={state.cities.map((c) => ({
        href:
          c.rtos.length === 1
            ? `/rto-partner/${state.slug}/${c.slug}/${getRtoFullSlug(c.rtos[0], c.name)}`
            : `/rto-partner/${state.slug}/${c.slug}`,
        name: c.name,
        tag: c.rtos.map((r) => r.code).join(", "),
        current: c.slug === city.slug,
      }))}
      showRajasthanHubs={state.slug === "rajasthan"}
      customerHref={`/rto-agent/${state.slug}/${city.slug}`}
    />
  );
}
