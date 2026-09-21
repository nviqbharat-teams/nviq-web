import { MetadataRoute } from "next";
import { getAllStates } from "@/data/vltd-locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://naviqbharat.com";
  const now = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vltd`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rto-partner/invite`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const states = getAllStates();
  const vltdPages: MetadataRoute.Sitemap = [];

  for (const state of states) {
    // State page
    vltdPages.push({
      url: `${baseUrl}/vltd/${state.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    });

    for (const city of state.cities) {
      // City page
      vltdPages.push({
        url: `${baseUrl}/vltd/${state.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });

      for (const rto of city.rtos) {
        // RTO Code page
        vltdPages.push({
          url: `${baseUrl}/vltd/${state.slug}/${city.slug}/${rto.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.85,
        });
      }
    }
  }

  return [...staticPages, ...vltdPages];
}
