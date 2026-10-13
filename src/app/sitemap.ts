import { MetadataRoute } from "next";
import { getAllStates } from "@/data/vltd-locations";
import { ALL_INDIA_STATES, getRtoFullSlug } from "@/data/india-rto-master";
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

  const states = getAllStates();
  const vltdPages: MetadataRoute.Sitemap = [];

  for (const state of states) {
    // State page
    vltdPages.push({
      url: `${baseUrl}/vltd/${state.slug}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
    });

    for (const city of state.cities) {
      // Only include city hub in sitemap if it contains multiple RTO offices (e.g. Ahmedabad).
      // Single-RTO towns only index the specific RTO fitment page, eliminating 100% duplicate sibling URLs.
      if (city.rtos.length > 1) {
        vltdPages.push({
          url: `${baseUrl}/vltd/${state.slug}/${city.slug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: 0.85,
        });
      }

      for (const rto of city.rtos) {
        // RTO Code page (primary fitment center URL)
        vltdPages.push({
          url: `${baseUrl}/vltd/${state.slug}/${city.slug}/${rto.slug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: 0.85,
        });
      }
    }
  }

  // Pan-India RTO Partner Program pages (States, Multi-RTO Cities & RTO Offices)
  const rtoPartnerPages: MetadataRoute.Sitemap = [];

  for (const st of ALL_INDIA_STATES) {
    const isPriorityState = PRIORITY_COMMERCIAL_STATE_CODES.has(st.code);

    rtoPartnerPages.push({
      url: `${baseUrl}/rto-partner/${st.slug}`,
      lastModified: masterDataLastUpdated,
      changeFrequency: "weekly",
      priority: isPriorityState ? 0.9 : 0.75,
    });

    for (const ct of st.cities) {
      // If city has multiple RTOs (e.g., Delhi, Bengaluru, Jaipur), keep the aggregate hub.
      // If city has only 1 RTO, only index the authoritative RTO code page to prevent duplicate queue bloat.
      if (ct.rtos.length > 1) {
        rtoPartnerPages.push({
          url: `${baseUrl}/rto-partner/${st.slug}/${ct.slug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: isPriorityState ? 0.85 : 0.7,
        });
      }

      for (const rto of ct.rtos) {
        const fullSlug = getRtoFullSlug(rto, ct.name);
        rtoPartnerPages.push({
          url: `${baseUrl}/rto-partner/${st.slug}/${ct.slug}/${fullSlug}`,
          lastModified: masterDataLastUpdated,
          changeFrequency: "weekly",
          priority: isPriorityState ? 0.85 : 0.7,
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

  return [...staticPages, ...vltdPages, ...rtoPartnerPages, ...truckPages];
}

