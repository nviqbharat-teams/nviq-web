// Lead attribution: first-touch source capture, page geo (state / city / RTO)
// and a single trackLead() that reports to both GA4 and the NViQ backend.
// Used by src/instrumentation-client.ts (global call/WhatsApp click tracking)
// and src/lib/api.ts (form submissions).

const FIRST_TOUCH_KEY = "nviq_first_touch";

// State slug (as used in /vltd, /rto-partner, /truck-passing, /trucks URLs) → vehicle registration code
const STATE_CODES: Record<string, string> = {
  "andhra-pradesh": "AP", "arunachal-pradesh": "AR", assam: "AS", bihar: "BR", chhattisgarh: "CG",
  goa: "GA", gujarat: "GJ", haryana: "HR", "himachal-pradesh": "HP", jharkhand: "JH", karnataka: "KA",
  kerala: "KL", "madhya-pradesh": "MP", maharashtra: "MH", manipur: "MN", meghalaya: "ML", mizoram: "MZ",
  nagaland: "NL", odisha: "OD", punjab: "PB", rajasthan: "RJ", sikkim: "SK", "tamil-nadu": "TN",
  telangana: "TS", tripura: "TR", "uttar-pradesh": "UP", uttarakhand: "UK", "west-bengal": "WB",
  "andaman-and-nicobar-islands": "AN", chandigarh: "CH", "dadra-and-nagar-haveli-and-daman-and-diu": "DD",
  delhi: "DL", "jammu-and-kashmir": "JK", ladakh: "LA", lakshadweep: "LD", puducherry: "PY",
};

// Market priority: Rajasthan is the main market; these are the focus states.
const MAIN_STATES = new Set(["RJ"]);
const FOCUS_STATES = new Set(["UP", "GJ", "DL", "HR", "PB", "BR"]);

export type PriorityTier = "main" | "focus" | "other";

export interface PageGeo {
  pageType: string; // vltd | rto_partner | truck_passing | trucks | home | contact | ...
  state: string; // slug, e.g. "rajasthan"
  stateCode: string; // e.g. "RJ"
  city: string; // slug
  rtoCode: string; // e.g. "RJ-14"
  priorityTier: PriorityTier;
}

export interface FirstTouch {
  landingPage: string;
  referrer: string;
  utm: { source: string; medium: string; campaign: string; term: string; content: string };
  gclid: string;
  firstSeenAt: string;
}

export interface LeadAttribution extends PageGeo {
  sourcePage: string;
  firstTouch: FirstTouch | null;
}

const RTO_SLUG = /^([a-z]{2})-(\d{1,3})$/;

export function getPageGeo(pathname: string): PageGeo {
  const seg = pathname.split("/").filter(Boolean).map((s) => decodeURIComponent(s).toLowerCase());
  const root = seg[0] || "home";

  let state = "";
  let city = "";
  if (["vltd", "rto-partner", "truck-passing"].includes(root)) {
    state = seg[1] || "";
    city = seg[2] || "";
  } else if (root === "gps-tracking" || root === "rto-services") {
    // /gps-tracking/[segment]/[state], /rto-services/[service]/[state]
    state = seg[2] || "";
  } else if (root === "trucks") {
    // /trucks/[category]/[state]/[city]
    state = seg[2] || "";
    city = seg[3] || "";
  }
  if (!STATE_CODES[state]) state = state && !RTO_SLUG.test(state) ? state : "";

  const rtoSeg = seg.find((s) => RTO_SLUG.test(s)) || "";
  const rtoCode = rtoSeg ? rtoSeg.toUpperCase() : "";
  const stateCode = STATE_CODES[state] || (rtoCode ? rtoCode.slice(0, 2) : "");

  const priorityTier: PriorityTier = MAIN_STATES.has(stateCode)
    ? "main"
    : FOCUS_STATES.has(stateCode)
      ? "focus"
      : "other";

  return {
    pageType: root.replace(/-/g, "_"),
    state,
    stateCode,
    city: RTO_SLUG.test(city) ? "" : city,
    rtoCode,
    priorityTier,
  };
}

/** Store the first landing page + source once per browser (90-day window). */
export function captureFirstTouch(): void {
  if (typeof window === "undefined") return;
  try {
    const existing = localStorage.getItem(FIRST_TOUCH_KEY);
    if (existing) {
      const parsed = JSON.parse(existing) as FirstTouch;
      const ageDays = (Date.now() - new Date(parsed.firstSeenAt).getTime()) / 864e5;
      const params = new URLSearchParams(window.location.search);
      // Keep first touch unless it expired or a new paid/campaign click arrives.
      if (ageDays < 90 && !params.get("utm_source") && !params.get("gclid")) return;
    }
    const params = new URLSearchParams(window.location.search);
    const touch: FirstTouch = {
      landingPage: window.location.pathname + window.location.search,
      referrer: document.referrer || "",
      utm: {
        source: params.get("utm_source") || "",
        medium: params.get("utm_medium") || "",
        campaign: params.get("utm_campaign") || "",
        term: params.get("utm_term") || "",
        content: params.get("utm_content") || "",
      },
      gclid: params.get("gclid") || "",
      firstSeenAt: new Date().toISOString(),
    };
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
  } catch {
    // storage blocked (private mode) — attribution is best-effort
  }
}

export function getFirstTouch(): FirstTouch | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null;
  }
}

export function getLeadAttribution(): LeadAttribution {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  return { ...getPageGeo(path), sourcePage: path, firstTouch: getFirstTouch() };
}

/** Short code appended to WhatsApp messages so each chat maps back to a page, e.g. "VLTD-RJ-14". */
export function getRefCode(geo: PageGeo = getPageGeo(window.location.pathname)): string {
  const where = geo.rtoCode || geo.stateCode || "IN";
  return `${geo.pageType.toUpperCase()}-${where}`;
}

export type LeadEvent = "call_click" | "whatsapp_click" | "quote_submit" | "partner_lead_submit";

// Same as the gtag() defined in layout.tsx: it only pushes the `arguments` object onto
// dataLayer, so this works even before the GA script (afterInteractive) has loaded.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtagSafe(_command: string, _name: string, _params: Record<string, unknown>): void {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.naviqbharat.com/api";

/** Report a lead action to GA4 (key event) and the backend session log. Never throws. */
export function trackLead(event: LeadEvent, label = ""): void {
  if (typeof window === "undefined") return;
  try {
    const geo = getPageGeo(window.location.pathname);
    const touch = getFirstTouch();
    gtagSafe("event", event, {
      page_path: window.location.pathname,
      page_type: geo.pageType,
      lead_state: geo.stateCode || "NA",
      lead_rto: geo.rtoCode || "NA",
      priority_tier: geo.priorityTier,
      lead_label: label.slice(0, 100),
      first_source: touch?.utm.source || (touch?.referrer ? safeHost(touch.referrer) : "direct"),
    });

    const sessionId = localStorage.getItem("nviq_session_id");
    if (!sessionId) return;
    // keepalive so the request survives tel:/wa.me navigation
    fetch(`${BASE_URL}/web/analytics/event`, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        eventType: event === "call_click" || event === "whatsapp_click" ? "click" : "form_submit",
        elementId: event,
        elementText: [geo.priorityTier, geo.stateCode, geo.rtoCode, label].filter(Boolean).join("|").slice(0, 250),
        pagePath: window.location.pathname,
      }),
    }).catch(() => {});
  } catch {
    // tracking must never break the CTA
  }
}

function safeHost(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "referral";
  }
}
