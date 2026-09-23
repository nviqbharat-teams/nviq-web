import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://naviqbharat.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/rto-partner/invite",
          "/rto-partner/invite/*",
          "/api/",
          "/*?*isApp=*",
          "/*?*isapp=*",
          "/*?*token=*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
