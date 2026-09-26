import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | NViQ AIS 140 VLTD & Mines GPS Support India",
  description:
    "Get in touch with NViQ Technologies for AIS 140 VLTD GPS fitment, Mines portal whitelisting, RTO consultant partnerships, or commercial fleet tracking support across India.",
  keywords: [
    "contact nviq",
    "ais 140 vltd customer support",
    "rto consultant support number",
    "mines gps contact alwar rajasthan",
    "nviq phone number",
    "vahan gps customer service",
    "gps tracker fitment contact",
    "fleet gps contact india",
  ],
  openGraph: {
    title: "Contact Us | NViQ AIS 140 VLTD & Mines GPS Support India",
    description:
      "Get in touch with NViQ Technologies for AIS 140 VLTD GPS fitment, Mines portal whitelisting, or dealer inquiries.",
    url: "https://naviqbharat.com/contact",
    siteName: "NViQ Bharat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Contact NViQ Bharat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | NViQ AIS 140 VLTD & Mines GPS Support India",
    description:
      "Get in touch with NViQ Technologies for AIS 140 VLTD GPS fitment, Mines portal whitelisting, or dealer inquiries.",
    images: ["/logo.jpeg"],
  },
  alternates: {
    canonical: "https://naviqbharat.com/contact",
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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://naviqbharat.com/contact#breadcrumb",
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
            name: "Contact Us",
            item: "https://naviqbharat.com/contact",
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://naviqbharat.com/contact#webpage",
        url: "https://naviqbharat.com/contact",
        name: "Contact Us | NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
        description:
          "Official contact page for NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED AIS 140 VLTD GPS & Mines tracking systems.",
        breadcrumb: {
          "@id": "https://naviqbharat.com/contact#breadcrumb",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://naviqbharat.com/#website",
          name: "NViQ Bharat",
          url: "https://naviqbharat.com",
        },
        mainEntity: {
          "@id": "https://naviqbharat.com/#organization",
        },
      },
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://naviqbharat.com/#organization",
        name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
        alternateName: "NViQ Bharat",
        url: "https://naviqbharat.com",
        logo: "https://naviqbharat.com/logo.jpeg",
        telephone: "+919694551326",
        email: "naviqbharat@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "320, 3rd floor, Wonder Mall, Company Bagh Road, Katla, Sector 7",
          addressLocality: "Alwar",
          addressRegion: "Rajasthan",
          postalCode: "301001",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
