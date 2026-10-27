// One small interface over two map engines: Google Maps JS API when
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set, otherwise Leaflet + OpenStreetMap
// (no key needed). The page only talks to LiveMap.

import { GOOGLE_MAPS_KEY, loadGoogleMaps, type ShareLocation } from "@/lib/live-share";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface LiveMap {
  getPosition(): LatLng;
  setPosition(p: LatLng): void;
  setStyle(l: ShareLocation): void;
  panTo(p: LatLng): void;
  addTrailPoint(p: LatLng): void;
  onUserDrag(cb: () => void): void;
  destroy(): void;
}

export interface MarkerStyle {
  color: string;
  moving: boolean;
  heading: number;
}

const MAX_TRAIL = 2000;
const TRAIL_COLOR = "#2563eb";

// Resolves null if `signal` aborted while the engine was loading (e.g. React
// StrictMode's mount → unmount → mount), so two maps never bind the same element.
export function createLiveMap(
  el: HTMLElement,
  start: LatLng,
  style: MarkerStyle,
  signal: AbortSignal
): Promise<LiveMap | null> {
  return GOOGLE_MAPS_KEY ? createGoogleMap(el, start, style, signal) : createLeafletMap(el, start, style, signal);
}

// ── Google Maps ─────────────────────────────────────────────────────────────
function googleIcon(s: MarkerStyle): google.maps.Symbol {
  return {
    path: s.moving ? google.maps.SymbolPath.FORWARD_CLOSED_ARROW : google.maps.SymbolPath.CIRCLE,
    scale: s.moving ? 6 : 9,
    rotation: s.heading || 0,
    fillColor: s.color,
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 3,
  };
}

async function createGoogleMap(
  el: HTMLElement,
  start: LatLng,
  style: MarkerStyle,
  signal: AbortSignal
): Promise<LiveMap | null> {
  const maps = await loadGoogleMaps();
  if (signal.aborted) return null;
  const map = new maps.Map(el, {
    center: start,
    zoom: 16,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: "greedy",
    clickableIcons: false,
  });
  const trail = new maps.Polyline({ map, path: [start], strokeColor: TRAIL_COLOR, strokeOpacity: 0.8, strokeWeight: 4 });
  const marker = new maps.Marker({ map, position: start, icon: googleIcon(style), zIndex: 10 });

  return {
    getPosition: () => {
      const p = marker.getPosition();
      return p ? { lat: p.lat(), lng: p.lng() } : start;
    },
    setPosition: (p) => marker.setPosition(p),
    setStyle: (l) => marker.setIcon(googleIcon(styleFor(l))),
    panTo: (p) => map.panTo(p),
    addTrailPoint: (p) => {
      const path = trail.getPath();
      path.push(new maps.LatLng(p.lat, p.lng));
      if (path.getLength() > MAX_TRAIL) path.removeAt(0);
    },
    onUserDrag: (cb) => map.addListener("dragstart", cb),
    destroy: () => {
      marker.setMap(null);
      trail.setMap(null);
    },
  };
}

// ── Leaflet + OpenStreetMap ─────────────────────────────────────────────────
function leafletIconHtml(s: MarkerStyle) {
  const shape = s.moving
    ? `<path d="M12 2 L20 21 L12 16 L4 21 Z" fill="${s.color}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>`
    : `<circle cx="12" cy="12" r="8" fill="${s.color}" stroke="#fff" stroke-width="3"/>`;
  return `<svg width="30" height="30" viewBox="0 0 24 24" style="transform:rotate(${s.moving ? s.heading || 0 : 0}deg);filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))">${shape}</svg>`;
}

async function createLeafletMap(
  el: HTMLElement,
  start: LatLng,
  style: MarkerStyle,
  signal: AbortSignal
): Promise<LiveMap | null> {
  const L = await import("leaflet");
  if (signal.aborted) return null;
  const map = L.map(el, { zoomControl: false, attributionControl: true }).setView(start, 16);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const icon = (s: MarkerStyle) =>
    L.divIcon({ html: leafletIconHtml(s), className: "", iconSize: [30, 30], iconAnchor: [15, 15] });
  const trail = L.polyline([start], { color: TRAIL_COLOR, weight: 4, opacity: 0.8 }).addTo(map);
  const marker = L.marker(start, { icon: icon(style), zIndexOffset: 1000, keyboard: false }).addTo(map);

  return {
    getPosition: () => marker.getLatLng(),
    setPosition: (p) => marker.setLatLng(p),
    setStyle: (l) => marker.setIcon(icon(styleFor(l))),
    panTo: (p) => map.panTo(p, { animate: false }),
    addTrailPoint: (p) => {
      trail.addLatLng(p);
      const pts = trail.getLatLngs() as L.LatLng[];
      if (pts.length > MAX_TRAIL) trail.setLatLngs(pts.slice(-MAX_TRAIL));
    },
    onUserDrag: (cb) => map.on("dragstart", cb),
    destroy: () => map.remove(),
  };
}

// ── Shared ──────────────────────────────────────────────────────────────────
export function movement(l: ShareLocation | null): { label: string; color: string } {
  if (!l || !l.isOnline) return { label: "Offline", color: "#6b7280" };
  if (l.speed > 2) return { label: "Moving", color: "#16a34a" };
  if (l.ignition) return { label: "Idle", color: "#d97706" };
  return { label: "Stopped", color: "#dc2626" };
}

export function styleFor(l: ShareLocation): MarkerStyle {
  return { color: movement(l).color, moving: l.isOnline && l.speed > 2, heading: l.heading || 0 };
}
