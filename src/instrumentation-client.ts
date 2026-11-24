// Runs before hydration on every page (Next.js instrumentation-client convention).
// 1. Captures first-touch attribution (landing page, referrer, UTM, gclid).
// 2. Tracks every call (tel:) and WhatsApp (wa.me / api.whatsapp.com) click site-wide,
//    tagged with state / RTO / priority tier, and appends a "Ref:" code to the
//    WhatsApp prefill so each chat can be traced back to the page it came from.
import { captureFirstTouch, getRefCode, trackLead } from "./lib/lead-attribution";

try {
  captureFirstTouch();
} catch {
  // best-effort
}

function isWhatsApp(href: string): boolean {
  return /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href);
}

function addRefToWhatsApp(anchor: HTMLAnchorElement): void {
  try {
    const url = new URL(anchor.href);
    const text = url.searchParams.get("text") || "";
    if (/\(Ref: [A-Z0-9_-]+\)/.test(text)) return;
    url.searchParams.set("text", `${text}${text ? "\n\n" : ""}(Ref: ${getRefCode()})`);
    anchor.href = url.toString();
  } catch {
    // leave the link untouched
  }
}

document.addEventListener(
  "click",
  (e) => {
    try {
      const anchor = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const label = (anchor.dataset.track || anchor.textContent || "").trim().replace(/\s+/g, " ");

      // The ref code must be added synchronously (before navigation); tracking waits
      // one tick so clicks cancelled by the page (e.g. "Get Price" scrolling to a form) are skipped.
      if (href.startsWith("tel:")) {
        setTimeout(() => !e.defaultPrevented && trackLead("call_click", `${href.slice(4)} ${label}`), 0);
      } else if (isWhatsApp(anchor.href)) {
        addRefToWhatsApp(anchor);
        setTimeout(() => !e.defaultPrevented && trackLead("whatsapp_click", label), 0);
      }
    } catch {
      // never block the click
    }
  },
  { capture: true },
);
