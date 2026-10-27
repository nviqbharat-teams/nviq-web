"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { io, Socket } from "socket.io-client";
import "leaflet/dist/leaflet.css";
import logoImg from "@/app/logo.jpeg";
import {
  SOCKET_URL,
  fetchShare,
  googleMapsUrl,
  googleDirectionsUrl,
  type ShareLocation,
  type ShareSnapshot,
  type ShareEndReason,
} from "@/lib/live-share";
import { createLiveMap, movement, styleFor, type LiveMap } from "./live-map";

type ConnState = "connecting" | "live" | "reconnecting";

const END_CODES: ShareEndReason[] = ["expired", "revoked", "invalid"];
const ANIMATE_MS = 1000;

const hasCoords = (l: ShareLocation | null): l is ShareLocation & { lat: number; lng: number } =>
  !!l && l.lat != null && l.lng != null;

function formatRemaining(ms: number) {
  if (ms <= 0) return "0m";
  const totalMin = Math.ceil(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h >= 24) return `${Math.floor(h / 24)}d ${h % 24}h`;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function formatAgo(iso: string | null, now: number) {
  if (!iso) return "—";
  const s = Math.max(0, Math.round((now - new Date(iso).getTime()) / 1000));
  if (s < 10) return "just now";
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export default function LiveView({ token }: { token: string }) {
  const [snapshot, setSnapshot] = useState<Omit<ShareSnapshot, "location"> | null>(null);
  const [location, setLocation] = useState<ShareLocation | null>(null);
  const [ended, setEnded] = useState<ShareEndReason | null>(null);
  const [conn, setConn] = useState<ConnState>("connecting");
  const [loadError, setLoadError] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [follow, setFollow] = useState(true);
  const [now, setNow] = useState(() => Date.now());

  const mapDiv = useRef<HTMLDivElement>(null);
  const map = useRef<LiveMap | null>(null);
  const anim = useRef<number | null>(null);
  const followRef = useRef(follow);
  useEffect(() => {
    followRef.current = follow;
  }, [follow]);

  const applySnapshot = useCallback((s: ShareSnapshot) => {
    setSnapshot({ share: s.share, vehicle: s.vehicle });
    setLocation(s.location);
  }, []);

  // Keep the last good coordinates when a tick arrives without a fix.
  const applyLocation = useCallback((l: ShareLocation) => {
    setLocation((prev) => (hasCoords(l) || !prev ? l : { ...l, lat: prev.lat, lng: prev.lng }));
  }, []);

  // ── Data: REST for first paint, then the /share socket for live ticks ─────
  useEffect(() => {
    let cancelled = false;
    fetchShare(token).then((r) => {
      if (cancelled) return;
      if (r.ok) applySnapshot(r.data);
      else if (r.code === "network") setLoadError(true);
      else setEnded(r.code);
    });

    const socket: Socket = io(`${SOCKET_URL}/share`, {
      transports: ["websocket"],
      auth: { token },
      reconnectionDelayMax: 10000,
    });

    socket.on("connect", () => {
      setConn("live");
      setLoadError(false);
    });
    socket.on("disconnect", () => setConn("reconnecting"));
    socket.on("connect_error", (err) => {
      if ((END_CODES as string[]).includes(err.message)) {
        setEnded(err.message as ShareEndReason);
        socket.disconnect();
      } else {
        setConn("reconnecting");
      }
    });
    socket.on("share_snapshot", applySnapshot);
    socket.on("share_location", applyLocation);
    socket.on("share_ended", ({ reason }: { reason: ShareEndReason }) => {
      setEnded(reason);
      socket.disconnect();
    });

    return () => {
      cancelled = true;
      socket.disconnect();
    };
  }, [token, applySnapshot, applyLocation]);

  // Clock for countdown / "updated Xs ago".
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // The server also closes the socket at expiry; this just doesn't wait for it.
  const expiresAtMs = snapshot ? new Date(snapshot.share.expiresAt).getTime() : null;
  const endReason: ShareEndReason | null = ended ?? (expiresAtMs && now >= expiresAtMs ? "expired" : null);

  // ── Map: create once we have a first fix ──────────────────────────────────
  const firstFix = hasCoords(location);
  useEffect(() => {
    if (!firstFix || map.current || !mapDiv.current || !location || !hasCoords(location)) return;
    const abort = new AbortController();
    let created: LiveMap | null = null;
    createLiveMap(mapDiv.current, { lat: location.lat, lng: location.lng }, styleFor(location), abort.signal)
      .then((m) => {
        if (!m) return;
        created = m;
        map.current = m;
        m.onUserDrag(() => setFollow(false));
      })
      .catch(() => setMapError(true));
    return () => {
      abort.abort();
      created?.destroy();
      map.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- create once, on the first fix
  }, [firstFix]);

  // ── Map: glide the marker to each new fix ─────────────────────────────────
  useEffect(() => {
    const m = map.current;
    if (!m || !hasCoords(location)) return;
    m.setStyle(location);

    const from = m.getPosition();
    const to = { lat: location.lat, lng: location.lng };
    if (from.lat === to.lat && from.lng === to.lng) return;
    m.addTrailPoint(to);

    if (anim.current) cancelAnimationFrame(anim.current);
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / ANIMATE_MS);
      const p = { lat: from.lat + (to.lat - from.lat) * k, lng: from.lng + (to.lng - from.lng) * k };
      m.setPosition(p);
      if (followRef.current) m.panTo(p);
      if (k < 1) anim.current = requestAnimationFrame(step);
    };
    anim.current = requestAnimationFrame(step);
  }, [location]);

  useEffect(() => () => {
    if (anim.current) cancelAnimationFrame(anim.current);
  }, []);

  const recenter = () => {
    setFollow(true);
    const m = map.current;
    if (m) m.panTo(m.getPosition());
  };

  // ── Render ────────────────────────────────────────────────────────────────
  if (endReason) return <EndedScreen reason={endReason} reg={snapshot?.vehicle.registrationNumber ?? null} />;

  const state = movement(location);
  const reg = snapshot?.vehicle.registrationNumber;

  return (
    <div className="fixed inset-0 bg-gray-100 text-gray-900">
      {/* Map */}
      {/* z-0 = own stacking context, so Leaflet's z-index 400+ panes stay under the cards */}
      <div ref={mapDiv} className="absolute inset-0 z-0" />

      {(!firstFix || mapError) && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {loadError ? (
            <p className="text-sm text-gray-600">Couldn&apos;t reach the server. Retrying…</p>
          ) : !snapshot ? (
            <Spinner label="Loading live location…" />
          ) : !firstFix ? (
            <p className="text-sm text-gray-600 text-center">Waiting for the vehicle&apos;s GPS position…</p>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Map unavailable</p>
              <p className="font-mono text-sm">
                {location!.lat!.toFixed(5)}, {location!.lng!.toFixed(5)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Header card */}
      <div className="absolute top-0 inset-x-0 p-3 sm:p-4 pointer-events-none">
        <div className="mx-auto max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-3.5 pointer-events-auto">
          <div className="flex items-center gap-3">
            <Image src={logoImg} alt="NViQ" width={36} height={36} className="rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight truncate">{reg || "Vehicle"}</span>
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: state.color }}
                >
                  {state.label}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">
                {location?.address || "Live location shared via NViQ"}
              </p>
            </div>
            <ConnDot conn={conn} />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <Stat label="Speed" value={`${location?.speed ?? 0} km/h`} />
            <Stat label="Updated" value={formatAgo(location?.gpsTime ?? null, now)} />
            <Stat label="Sharing ends" value={expiresAtMs ? formatRemaining(expiresAtMs - now) : "—"} />
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none">
        <div className="mx-auto max-w-md flex flex-col gap-2 pointer-events-auto">
          {!follow && firstFix && !mapError && (
            <button
              onClick={recenter}
              className="self-end bg-white shadow-md border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-blue-700"
            >
              Re-center
            </button>
          )}
          {hasCoords(location) && (
            <div className="grid grid-cols-2 gap-2">
              <a
                href={googleMapsUrl(location.lat, location.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 shadow-md rounded-xl py-3 text-center text-sm font-semibold text-gray-900"
              >
                Open in Google Maps
              </a>
              <a
                href={googleDirectionsUrl(location.lat, location.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 shadow-md rounded-xl py-3 text-center text-sm font-semibold text-white"
              >
                Get directions
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg py-1.5">
      <div className="text-[10px] uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-sm font-semibold tabular-nums">{value}</div>
    </div>
  );
}

function ConnDot({ conn }: { conn: ConnState }) {
  const live = conn === "live";
  return (
    <div className="flex flex-col items-center gap-0.5" title={live ? "Live" : "Reconnecting"}>
      <span className="relative flex h-2.5 w-2.5">
        {live && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${live ? "bg-green-500" : "bg-gray-400"}`} />
      </span>
      <span className="text-[9px] font-semibold uppercase text-gray-500">{live ? "Live" : "…"}</span>
    </div>
  );
}

function Spinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}

function EndedScreen({ reason, reg }: { reason: ShareEndReason; reg: string | null }) {
  const copy = {
    expired: { title: "Live sharing has ended", body: "The time limit for this live location link is over." },
    revoked: { title: "Sharing was stopped", body: "The owner stopped sharing this vehicle's live location." },
    invalid: { title: "Link not found", body: "This live location link is invalid. Ask the sender for a new one." },
  }[reason];

  return (
    <main className="min-h-[100dvh] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-xs">
        <Image src={logoImg} alt="NViQ" width={44} height={44} className="rounded-xl object-cover mx-auto mb-4" />
        {reg && <p className="text-xs font-semibold text-gray-500 mb-1">{reg}</p>}
        <h1 className="text-lg font-bold text-gray-900 mb-1">{copy.title}</h1>
        <p className="text-sm text-gray-600">{copy.body}</p>
      </div>
    </main>
  );
}
