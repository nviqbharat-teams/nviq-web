import React from "react";

interface JsonLdSchemaProps {
  pageTitle: string;
  description: string;
  url: string;
  locationName: string;
  faqs?: { q: string; a: string }[];
  breadcrumbs: { name: string; item: string }[];
}

export default function JsonLdSchema({
  pageTitle,
  description,
  url,
  locationName,
  faqs,
  breadcrumbs,
}: JsonLdSchemaProps) {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  // Product & Service Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `NViQ AIS 140 VLTD GPS Tracker - ${locationName}`,
    image: "https://naviqbharat.com/logo.jpeg",
    description,
    brand: {
      "@type": "Brand",
      name: "NViQ",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "2699",
      highPrice: "3799",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NViQ Bharat",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "480",
    },
  };

  // LocalBusiness / Automotive Service Schema
  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `NViQ AIS 140 VLTD & Mines Fitment Center - ${locationName}`,
    image: "https://naviqbharat.com/logo.jpeg",
    "@id": url,
    url,
    telephone: "+919694551326",
    priceRange: "₹2,699 - ₹3,799",
    address: {
      "@type": "PostalAddress",
      addressLocality: locationName,
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: locationName,
    },
  };

  // FAQPage Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
