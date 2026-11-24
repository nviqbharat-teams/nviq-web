import { MetadataRoute } from "next";
import { getAllStates, getPriorityTier, getStateCode, MAIN_STATE_CODES, FOCUS_STATE_CODES } from "@/data/vltd-india";
import { SEGMENTS } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";
import { CASE_STUDIES } from "@/data/case-studies";
import { ALL_INDIA_STATES, ALL_INDIA_RTOS, getRtoFullSlug } from "@/data/india-rto-master";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES } from "@/data/rajasthan-trucks-master";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.naviqbharat.com";
  // Stable date for dataset revisions so Googlebot trusts freshness
  const masterDataLastUpdated = new Date("2026-10-10T00:00:00.000Z");

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vltd`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rto-partner`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // High-priority commercial transport states with intensive fleet & passing demand
  const PRIORITY_COMMERCIAL_STATE_CODES = new Set([
    "RJ", "GJ", "MH", "DL", "HR", "UP", "MP", "PB", "KA", "TN", "AP", "TS", "WB", "OD", "CG", "JH", "UK", "HP"
  ]);

  // VLTD buyer pages now cover every RTO in India (data revision below).
  const vltdDataLastUpdated = new Date("2026-11-23T00:00:00.000Z");
  // Rajasthan = main market, UP/GJ/DL/HR/PB/BR = focus states, rest of India after.
  const VLTD_PRIORITY = { main: [1.0, 0.9, 0.9], focus: [0.9, 0.85, 0.85], other: [0.7, 0.6, 0.6] } as const;

  const states = getAllStates();
  const vltdPages: MetadataRoute.Sitemap = [];

  for (const state of states) {
    const [statePriority, cityPriority, rtoPriority] = VLTD_PRIORITY[getPriorityTier(getStateCode(state.slug))];

    // State page
    vltdPages.push({
      url: `${baseUrl}/vltd/${state.slug}`,
      lastModified: vltdDataLastUpdated,
      changeFrequency: "weekly",
      priority: statePriority,
    });

    for (const city of state.cities) {
      // Only include city hub in sitemap if it contains multiple RTO offices (e.g. Ahmedabad).
      // Single-RTO towns only index the specific RTO fitment page, eliminating 100% duplicate sibling URLs.
      if (city.rtos.length > 1) {
        vltdPages.push({
          url: `${baseUrl}/vltd/${state.slug}/${city.slug}`,
          lastModified: vltdDataLastUpdated,
          changeFrequency: "weekly",
          priority: cityPriority,
        });
      }

      for (const rto of city.rtos) {
        // RTO Code page (primary fitment center URL)
        vltdPages.push({
          url: `${baseUrl}/vltd/${state.slug}/${city.slug}/${rto.slug}`,
          lastModified: vltdDataLastUpdated,
          changeFrequency: "weekly",
          priority: rtoPriority,
        });
      }
    }
  }

  // Pan-India RTO Partner Program pages (States, Multi-RTO Cities & RTO Offices)
  const rtoPartnerPages: MetadataRoute.Sitemap = [];

  // Sort states so priority high-volume commercial transport states appear first in the sitemap for crawl efficiency
  const prioritizedStates = [...ALL_INDIA_STATES].sort((a, b) => {
    const aP = PRIORITY_COMMERCIAL_STATE_CODES.has(a.code) ? 1 : 0;
    const bP = PRIORITY_COMMERCIAL_STATE_CODES.has(b.code) ? 1 : 0;
    return bP - aP;
  });

  for (const st of prioritizedStates) {
    const isPriorityState = PRIORITY_COMMERCIAL_STATE_CODES.has(st.code);

    rtoPartnerPages.push({
      url: `${baseUrl}/rto-partner/${st.slug}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: isPriorityState ? 0.6 : 0.5,
    });

    for (const ct of st.cities) {
      // If city has multiple RTOs (e.g., Delhi, Bengaluru, Jaipur), keep the aggregate hub.
      // If city has only 1 RTO, only index the authoritative RTO code page to prevent duplicate queue bloat.
      if (ct.rtos.length > 1) {
        rtoPartnerPages.push({
          url: `${baseUrl}/rto-partner/${st.slug}/${ct.slug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: isPriorityState ? 0.5 : 0.4,
        });
      }

      for (const rto of ct.rtos) {
        const fullSlug = getRtoFullSlug(rto, ct.name);
        rtoPartnerPages.push({
          url: `${baseUrl}/rto-partner/${st.slug}/${ct.slug}/${fullSlug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: isPriorityState ? 0.5 : 0.4,
        });
      }
    }
  }

  // Commercial Truck Passing & Categories (Rajasthan Hubs, Areas & RTOs)
  const truckPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/trucks`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/truck-passing/rajasthan`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  for (const cat of TRUCK_CATEGORIES) {
    // National category page
    truckPages.push({
      url: `${baseUrl}/trucks/${cat.slug}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Rajasthan state category page
    truckPages.push({
      url: `${baseUrl}/trucks/${cat.slug}/rajasthan`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const c of RAJASTHAN_TRUCK_CITIES) {
    // City Truck Passing page
    truckPages.push({
      url: `${baseUrl}/truck-passing/${c.stateSlug}/${c.slug}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Dominant Category Pages for this City
    for (const catSlug of c.dominantCategories) {
      truckPages.push({
        url: `${baseUrl}/trucks/${catSlug}/${c.stateSlug}/${c.slug}`,
        lastModified: masterDataLastUpdated,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }

    // Areas & Transport Nagars
    for (const a of c.areas) {
      truckPages.push({
        url: `${baseUrl}/truck-passing/${c.stateSlug}/${c.slug}/${a.slug}`,
        lastModified: masterDataLastUpdated,
        changeFrequency: "weekly",
        priority: 0.85,
      });

      // Area RTO Code Page
      truckPages.push({
        url: `${baseUrl}/truck-passing/${c.stateSlug}/${c.slug}/${a.slug}/${a.rtoSlug}`,
        lastModified: masterDataLastUpdated,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  // Buyer-segment (taxi, school bus, dealers...) and RTO-work landing pages, with
  // state versions for the main + focus states only.
  const priorityStateSlugs = [...MAIN_STATE_CODES, ...FOCUS_STATE_CODES]
    .map((code) => states.find((s) => getStateCode(s.slug) === code)?.slug)
    .filter((s): s is string => Boolean(s));
  const landingPages: MetadataRoute.Sitemap = [];
  const pushLanding = (path: string, priority: number) =>
    landingPages.push({ url: `${baseUrl}${path}`, lastModified: vltdDataLastUpdated, changeFrequency: "weekly", priority });
  pushLanding("/gps-tracking", 0.95);
  pushLanding("/rto-services", 0.95);
  if (CASE_STUDIES.length) {
    pushLanding("/case-studies", 0.8);
    CASE_STUDIES.forEach((c) => pushLanding(`/case-studies/${c.slug}`, 0.8));
  }
  pushLanding("/services", 0.9);
  pushLanding("/tools", 0.9);
  pushLanding("/tools/ais-140-checker", 0.95);
  pushLanding("/tools/fitness-checklist", 0.95);
  pushLanding("/tools/vltd-price", 0.9);
  for (const seg of SEGMENTS) {
    pushLanding(`/gps-tracking/${seg.slug}`, 0.9);
    priorityStateSlugs.forEach((st, i) => pushLanding(`/gps-tracking/${seg.slug}/${st}`, i === 0 ? 0.9 : 0.85));
  }
  for (const svc of RTO_SERVICES) {
    pushLanding(`/rto-services/${svc.slug}`, 0.9);
    priorityStateSlugs.forEach((st, i) => pushLanding(`/rto-services/${svc.slug}/${st}`, i === 0 ? 0.9 : 0.85));
  }

  // Hindi twins (/hi): segment + RTO-service pages, and RTO pages for main + focus states
  const hindiPages: MetadataRoute.Sitemap = [];
  const pushHi = (path: string, priority: number) =>
    hindiPages.push({ url: `${baseUrl}/hi${path}`, lastModified: vltdDataLastUpdated, changeFrequency: "weekly", priority });
  pushHi("", 0.9);
  for (const seg of SEGMENTS) {
    pushHi(`/gps-tracking/${seg.slug}`, 0.85);
    priorityStateSlugs.forEach((st) => pushHi(`/gps-tracking/${seg.slug}/${st}`, 0.8));
  }
  for (const svc of RTO_SERVICES) {
    pushHi(`/rto-services/${svc.slug}`, 0.85);
    priorityStateSlugs.forEach((st) => pushHi(`/rto-services/${svc.slug}/${st}`, 0.8));
  }
  for (const state of states) {
    if (!priorityStateSlugs.includes(state.slug)) continue;
    for (const city of state.cities) for (const rto of city.rtos) pushHi(`/vltd/${state.slug}/${city.slug}/${rto.slug}`, 0.8);
  }

  // RTO code lookup pages ("TN 57 which district")
  const rtoCodePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/rto-code`, lastModified: masterDataLastUpdated, changeFrequency: "monthly", priority: 0.7 },
    ...ALL_INDIA_RTOS.map((r) => ({
      url: `${baseUrl}/rto-code/${r.code.toLowerCase()}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  // Customer-facing RTO agent pages ("<city> rto agent contact number")
  const rtoAgentPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/rto-agent`, lastModified: masterDataLastUpdated, changeFrequency: "monthly", priority: 0.8 },
    ...ALL_INDIA_STATES.flatMap((st) =>
      st.cities.map((ct) => ({
        url: `${baseUrl}/rto-agent/${st.slug}/${ct.slug}`,
        lastModified: masterDataLastUpdated,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    ),
  ];

  return [...staticPages, ...rtoAgentPages, ...landingPages, ...hindiPages, ...vltdPages, ...rtoPartnerPages, ...rtoCodePages, ...truckPages];
}

