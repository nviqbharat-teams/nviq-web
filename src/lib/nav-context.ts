// Page-aware navbar context: language-twin URL, intent-matched CTA and a
// pre-filled WhatsApp message. Client-safe (no large data imports).
import { getPageGeo } from "@/lib/lead-attribution";
import { whatsappHref } from "@/lib/contact";

export function isHindiPath(pathname: string): boolean {
  return pathname === "/hi" || pathname.startsWith("/hi/");
}

/**
 * The same page in the other language, when it exists; else that language's home.
 * Hindi pages exist for: /hi, /hi/vltd/[state]/[city]/[rto] (main + focus states),
 * /hi/gps-tracking/[segment](/[state]) and /hi/rto-services/[service](/[state]).
 */
export function languageTwinHref(pathname: string): string {
  if (isHindiPath(pathname)) return pathname.replace(/^\/hi/, "") || "/";

  const seg = pathname.split("/").filter(Boolean);
  const geo = getPageGeo(pathname);
  const hindiState = geo.priorityTier !== "other";

  if (seg[0] === "vltd" && seg.length === 4 && geo.rtoCode && hindiState) return `/hi${pathname}`;
  if ((seg[0] === "gps-tracking" || seg[0] === "rto-services") && seg.length === 2) return `/hi${pathname}`;
  if ((seg[0] === "gps-tracking" || seg[0] === "rto-services") && seg.length === 3 && hindiState) return `/hi${pathname}`;
  return "/hi";
}

export type NavCta =
  | { kind: "lead"; label: string }
  | { kind: "link"; label: string; href: string };

/** Primary button text matched to what the visitor is looking at. */
export function pageCta(pathname: string, hindi: boolean): NavCta {
  const path = hindi ? pathname.replace(/^\/hi/, "") || "/" : pathname;
  const root = path.split("/").filter(Boolean)[0] || "";
  const { rtoCode } = getPageGeo(path);

  if (root === "rto-partner") {
    return { kind: "link", href: "#apply", label: hindi ? "पार्टनर बनें" : "Become a Partner" };
  }
  if (root === "vltd" && rtoCode) {
    return { kind: "lead", label: hindi ? `${rtoCode} का रेट पाएं` : `Get ${rtoCode} Price` };
  }
  if (root === "gps-tracking") {
    return { kind: "lead", label: hindi ? "GPS का रेट पाएं" : "Get GPS Quote" };
  }
  return { kind: "lead", label: hindi ? "आज का रेट पाएं" : "Get Today's Price" };
}

/** WhatsApp link with a message that already says what the visitor needs. */
export function pageWhatsappHref(pathname: string, hindi: boolean): string {
  const path = hindi ? pathname.replace(/^\/hi/, "") || "/" : pathname;
  const root = path.split("/").filter(Boolean)[0] || "";
  const { rtoCode } = getPageGeo(path);

  let need: string;
  if (root === "rto-partner") need = hindi ? "RTO पार्टनर (होलसेल रेट) के बारे में जानकारी चाहिए" : "I want to join as an RTO partner (wholesale rates)";
  else if (root === "vltd" && rtoCode) need = hindi ? `${rtoCode} में AIS 140 VLTD फिटमेंट चाहिए` : `I need AIS 140 VLTD fitment at ${rtoCode}`;
  else if (root === "gps-tracking") need = hindi ? "मेरी गाड़ी के लिए GPS ट्रैकर चाहिए" : "I need a GPS tracker for my vehicle";
  else if (root === "rto-services") need = hindi ? "RTO सर्विस में मदद चाहिए" : "I need help with an RTO service";
  else need = hindi ? "मुझे AIS 140 VLTD / GPS चाहिए" : "I need AIS 140 VLTD / GPS for my vehicle";

  return whatsappHref(hindi ? `नमस्ते NViQ, ${need}। आज का रेट भेजें।` : `Hi NViQ, ${need}. Please share today's price.`);
}
