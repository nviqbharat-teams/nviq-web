import type { MetadataRoute } from "next";

const DISALLOW = [
  "/rto-partner/invite",
  "/rto-partner/invite/*",
  "/api/",
  "/*?*isApp=*",
  "/*?*isapp=*",
  "/*?*token=*",
];

// AI assistants and AI search crawlers, allowed by name so the site can be
// read, cited and recommended in ChatGPT, Claude, Perplexity, Gemini, Copilot,
// Meta AI and Apple Intelligence answers. A named group replaces "*" for that
// bot, so each one repeats the same disallow list.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.naviqbharat.com";

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
