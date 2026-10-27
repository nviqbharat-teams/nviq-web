// Public live-location share — talks to nviqbackend:
//   REST    GET  {API}/public/share/:token          first paint / fallback
//   Socket  {ORIGIN}/share  auth: { token }          share_snapshot, share_location, share_ended

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.naviqbharat.com/api";
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || API_URL.replace(/\/api\/?$/, "");
export const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export interface ShareLocation {
  lat: number | null;
  lng: number | null;
  speed: number;
  heading: number;
  isOnline: boolean;
  status: string | null;
  ignition: boolean;
  address: string | null;
  gpsTime: string | null;
}

export interface ShareInfo {
  expiresAt: string;
  durationMinutes: number;
  active: boolean;
  revoked: boolean;
}

export interface ShareSnapshot {
  share: ShareInfo;
  vehicle: { registrationNumber: string | null; type: string | null };
  location: ShareLocation;
}

export type ShareEndReason = "expired" | "revoked" | "invalid";

export async function fetchShare(
  token: string
): Promise<{ ok: true; data: ShareSnapshot } | { ok: false; code: ShareEndReason | "network" }> {
  try {
    const res = await fetch(`${API_URL}/public/share/${encodeURIComponent(token)}`, { cache: "no-store" });
    const body = await res.json();
    if (res.ok && body.success) return { ok: true, data: body.data };
    return { ok: false, code: body.code || "invalid" };
  } catch {
    return { ok: false, code: "network" };
  }
}

export function googleMapsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function googleDirectionsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

// Loads the Maps JS API once per page; resolves with window.google.maps.
let mapsPromise: Promise<typeof google.maps> | null = null;
export function loadGoogleMaps(): Promise<typeof google.maps> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.google?.maps?.Map) return Promise.resolve(window.google.maps);
  if (mapsPromise) return mapsPromise;
  mapsPromise = new Promise((resolve, reject) => {
    const cb = "__nviqMapsReady";
    (window as unknown as Record<string, () => void>)[cb] = () => resolve(window.google.maps);
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=weekly&loading=async&callback=${cb}`;
    s.async = true;
    s.onerror = () => {
      mapsPromise = null;
      reject(new Error("Google Maps failed to load"));
    };
    document.head.appendChild(s);
  });
  return mapsPromise;
}
