"use client";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://nviq-backend.onrender.com/api";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  source?: string;
  fleetSize?: number;
  businessName?: string;
  numberOfVehicles?: number;
  inquiryType: "fleet_inquiry" | "contact_us" | "product_inquiry";
  productOfInterest?: string;
}

// Helper to get or create session ID
export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let savedId = localStorage.getItem("nviq_session_id");
  if (!savedId) {
    savedId = "sess_" + Math.random().toString(36).substring(2, 15) + "_" + Date.now().toString(36);
    localStorage.setItem("nviq_session_id", savedId);
  }
  return savedId;
}

// Helper to parse UTM params
function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    term: params.get("utm_term") || "",
    content: params.get("utm_content") || ""
  };
}

// Helper to detect device info
function getDeviceInfo(): { browser: string; os: string; deviceType: string } {
  if (typeof window === "undefined") {
    return { browser: "Unknown", os: "Unknown", deviceType: "desktop" };
  }

  const ua = navigator.userAgent;
  let browser = "Unknown";
  let os = "Unknown";
  let deviceType = "desktop";

  // Browser detection
  if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  else if (ua.includes("Edge")) browser = "Edge";

  // OS detection
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Macintosh")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

  // Device type
  if (/Mobi|Android|iPhone/i.test(ua)) {
    deviceType = "mobile";
  } else if (/Tablet|iPad/i.test(ua)) {
    deviceType = "tablet";
  }

  return { browser, os, deviceType };
}

// Initialize session on backend
export async function initSession(): Promise<void> {
  if (typeof window === "undefined") return;

  const sessionId = getSessionId();
  // Check if session has already been registered in this browsing context to avoid spamming
  const registered = sessionStorage.getItem("nviq_session_registered");
  if (registered === "true") return;

  const initialReferrer = document.referrer || "Direct";
  const utm = getUtmParams();
  const deviceInfo = getDeviceInfo();

  try {
    const response = await fetch(`${BASE_URL}/web/analytics/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        initialReferrer,
        utm,
        deviceInfo,
      }),
    });
    if (response.ok) {
      sessionStorage.setItem("nviq_session_registered", "true");
      console.log("📊 Session registered successfully:", sessionId);
    } else {
      console.error("❌ Failed to register session:", await response.text());
    }
  } catch (err) {
    console.error("❌ Error registering session:", err);
  }
}

// Track event on backend
export async function trackEvent(
  eventType: "click" | "page_view" | "form_view" | "form_submit",
  elementId?: string,
  elementText?: string
): Promise<void> {
  if (typeof window === "undefined") return;

  const sessionId = getSessionId();
  const pagePath = window.location.pathname;

  try {
    await fetch(`${BASE_URL}/web/analytics/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        eventType,
        elementId: elementId || "",
        elementText: elementText || "",
        pagePath,
      }),
    });
    console.log(`📈 Event logged [${eventType}]: ${elementId || pagePath}`);
  } catch (err) {
    console.error("❌ Error logging session event:", err);
  }
}

// Submit Inquiry (Lead/Contact)
export async function submitInquiry(payload: {
  inquiryType: "fleet_inquiry" | "contact_us" | "product_inquiry";
  fullName: string;
  email: string;
  phoneNumber: string;
  message?: string;
  businessName?: string;
  numberOfVehicles?: number;
  fleetSize?: number;
  productOfInterest?: string;
  sourceElement?: string;
}): Promise<{ success: boolean; message: string; inquiryId?: string }> {
  const sessionId = getSessionId();
  const sourcePage = typeof window !== "undefined" ? window.location.pathname : "";

  const body = {
    ...payload,
    sessionId,
    sourcePage,
    productOfInterest: payload.productOfInterest || "gps_fleet_tracking",
  };

  try {
    const response = await fetch(`${BASE_URL}/web/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || "Inquiry recorded successfully.",
        inquiryId: data.inquiryId,
      };
    } else {
      return {
        success: false,
        message: data.message || "Failed to submit inquiry. Please check details and try again.",
      };
    }
  } catch (err) {
    console.error("❌ Error submitting inquiry:", err);
    return {
      success: false,
      message: "Network error. Please try again later.",
    };
  }
}

// Subscribe Newsletter
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  const sessionId = getSessionId();

  try {
    const response = await fetch(`${BASE_URL}/web/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        sessionId,
      }),
    });

    const data = await response.json();
    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || "Subscribed successfully.",
      };
    } else {
      return {
        success: false,
        message: data.message || "Failed to subscribe. Please try again.",
      };
    }
  } catch (err) {
    console.error("❌ Error subscribing to newsletter:", err);
    return {
      success: false,
      message: "Network error. Please try again later.",
    };
  }
}
