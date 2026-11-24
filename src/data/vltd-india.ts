// All-India VLTD location data for the /vltd buyer pages.
//
// Rich, hand-written records from vltd-locations.ts (Rajasthan, MP, Gujarat, Haryana) win;
// every other RTO in india-rto-master.ts (1,200+ offices, 36 states/UTs) is added with
// neutral, non-mining copy. Existing rich URLs are preserved exactly (e.g. RJ-42 stays
// under /kishangarh even though the master lists it under Ajmer) and an RTO code never
// gets two pages within a state.
//
// Same API as vltd-locations.ts so pages only need to swap the import.

import {
  VLTD_LOCATIONS,
  type StateData,
  type CityData,
  type RtoOffice,
} from "./vltd-locations";
import { ALL_INDIA_STATES, type MasterState, type MasterCity } from "./india-rto-master";

export type { StateData, CityData, RtoOffice };

// ── Market priority ──────────────────────────────────────────────────────────
// Rajasthan = main market; UP, Gujarat, Delhi, Haryana, Punjab, Bihar = focus states.
export const MAIN_STATE_CODES = ["RJ"];
export const FOCUS_STATE_CODES = ["UP", "GJ", "DL", "HR", "PB", "BR"];
const PRIORITY_ORDER = [...MAIN_STATE_CODES, ...FOCUS_STATE_CODES];

export type PriorityTier = "main" | "focus" | "other";

export function getPriorityTier(stateCode: string): PriorityTier {
  if (MAIN_STATE_CODES.includes(stateCode)) return "main";
  if (FOCUS_STATE_CODES.includes(stateCode)) return "focus";
  return "other";
}

// Generated copy shared by every non-rich location. Keep it factual: no state mining
// portal claims, no street addresses we have not verified.
export const DEFAULT_TURNAROUND = "Same / Next Day";

const GENERIC_VEHICLE_TYPES = [
  "Goods Trucks & Trailers",
  "Commercial & Tourist Buses",
  "School Buses & Vans",
  "Taxis & Cabs",
  "Tankers",
  "Ambulances",
];

function genericState(m: MasterState): StateData {
  const transportDepartment = `${m.name} Transport Department`;
  return {
    name: m.name,
    slug: m.slug,
    capital: m.capital,
    miningPortal: {
      // `integrated: false` tells pages to use Vahan / fitness copy instead of mining-portal claims.
      name: "Vahan 4.0",
      description: `AIS 140 VLTD with emergency panic buttons is required for public service vehicles and national-permit goods vehicles (CMVR Rule 125H). Fitment details are updated on Vahan 4.0 for fitness, permit and registration work across ${m.name}.`,
      integrated: false,
      portalUrlName: "vahan.parivahan.gov.in",
    },
    transportDepartment,
    vahanIntegrated: true,
    commonVehicleTypes: GENERIC_VEHICLE_TYPES,
    stateFaqs: [
      {
        q: `Which vehicles need AIS 140 VLTD in ${m.name}?`,
        a: `Public service vehicles (buses, school buses, taxis, cabs) and national-permit goods vehicles registered in ${m.name} need an AIS 140 VLTD with emergency panic buttons, as per CMVR Rule 125H. The device must be active before fitness, permit or registration work at the RTO.`,
      },
      {
        q: `How fast do I get the VLTD fitment certificate in ${m.name}?`,
        a: `After installation and panic-button testing, the fitment certificate is generated and updated on Vahan 4.0, usually within 60 minutes, so your fitness or permit work at any ${m.name} RTO can continue.`,
      },
      {
        q: `Can RTO agents in ${m.name} partner with NViQ?`,
        a: `Yes. RTO consultants and agents across ${m.name} can join the NViQ RTO Partner Program for wholesale pricing and certificate generation from the partner app.`,
      },
    ],
    cities: [],
  };
}

function genericCity(c: MasterCity, stateName: string): CityData {
  return {
    name: c.name,
    slug: c.slug,
    majorIndustries: [`${c.name} transport hubs`, "fleet depots", "bus & truck yards"],
    installationTurnaround: DEFAULT_TURNAROUND,
    rtos: c.rtos.map((r) => ({
      code: r.code,
      slug: r.slug,
      name: r.name,
      officeAddress: `${r.name}, ${c.name}, ${stateName}`,
      majorHubs: [],
      fitnessPassingFocus:
        "Goods vehicles, buses, school vehicles and taxis due for fitness, permit or registration",
    })),
  };
}

function buildAllIndia(): StateData[] {
  const richBySlug = new Map(VLTD_LOCATIONS.map((s) => [s.slug, s]));

  const states = ALL_INDIA_STATES.map((m): StateData => {
    const rich = richBySlug.get(m.slug);
    if (!rich) {
      const st = genericState(m);
      st.cities = m.cities.map((c) => genericCity(c, m.name));
      return st;
    }

    // Rich state: keep its cities as-is, then add master RTOs it does not cover yet.
    const cities: CityData[] = rich.cities.map((c) => ({ ...c, rtos: [...c.rtos] }));
    const covered = new Set(cities.flatMap((c) => c.rtos.map((r) => r.code)));

    for (const mc of m.cities) {
      const missing = mc.rtos.filter((r) => !covered.has(r.code));
      if (!missing.length) continue;
      const extra = genericCity({ ...mc, rtos: missing }, m.name);
      const existing = cities.find((c) => c.slug === mc.slug);
      if (existing) existing.rtos.push(...extra.rtos);
      else cities.push(extra);
      missing.forEach((r) => covered.add(r.code));
    }
    return { ...rich, cities };
  });

  // Rich states not present in the master (none today) are kept as well.
  for (const rich of VLTD_LOCATIONS) {
    if (!states.some((s) => s.slug === rich.slug)) states.push(rich);
  }

  // Main + focus states first: nav grids, hub page and sitemap follow this order.
  const codeOf = (slug: string) => ALL_INDIA_STATES.find((s) => s.slug === slug)?.code || "";
  const rank = (s: StateData) => {
    const i = PRIORITY_ORDER.indexOf(codeOf(s.slug));
    return i === -1 ? PRIORITY_ORDER.length + (richBySlug.has(s.slug) ? 0 : 1) : i;
  };
  return states
    .map((s, i) => ({ s, i }))
    .sort((a, b) => rank(a.s) - rank(b.s) || a.i - b.i)
    .map(({ s }) => s);
}

const VLTD_INDIA: StateData[] = buildAllIndia();

export function getStateCode(stateSlug: string): string {
  return ALL_INDIA_STATES.find((s) => s.slug === stateSlug)?.code || "";
}

/** True when the state has hand-written data with a verified mining portal integration. */
export function hasMiningIntegration(state: StateData): boolean {
  return state.miningPortal.integrated;
}

// ── Lookups (same signatures as vltd-locations.ts) ───────────────────────────

export function getAllStates(): StateData[] {
  return VLTD_INDIA;
}

export function getStateBySlug(stateSlug: string): StateData | undefined {
  const clean = stateSlug.toLowerCase();
  return VLTD_INDIA.find((s) => s.slug === clean);
}

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): { state: StateData; city: CityData } | undefined {
  const state = getStateBySlug(stateSlug);
  if (!state) return undefined;
  const city = state.cities.find((c) => c.slug === citySlug.toLowerCase());
  return city ? { state, city } : undefined;
}

export function getRtoByCode(
  stateSlug: string,
  citySlug: string,
  rtoCodeOrSlug: string
): { state: StateData; city: CityData; rto: RtoOffice } | undefined {
  const match = getCityBySlug(stateSlug, citySlug);
  if (!match) return undefined;
  const normalized = rtoCodeOrSlug.toLowerCase().replace(/_/g, "-");
  const rto = match.city.rtos.find(
    (r) => r.slug.toLowerCase() === normalized || r.code.toLowerCase() === normalized
  );
  return rto ? { ...match, rto } : undefined;
}

type RtoParam = { state: string; city: string; "rto-code": string };

function rtoParams(filter: (stateSlug: string) => boolean): RtoParam[] {
  const params: RtoParam[] = [];
  for (const state of VLTD_INDIA) {
    if (!filter(state.slug)) continue;
    for (const city of state.cities) {
      for (const rto of city.rtos) {
        params.push({ state: state.slug, city: city.slug, "rto-code": rto.slug });
      }
    }
  }
  return params;
}

/** Every RTO page in India (used by the sitemap). */
export function getAllRtoParams(): RtoParam[] {
  return rtoParams(() => true);
}

/**
 * RTO pages pre-rendered at build time: main + focus states and every rich state.
 * The rest are rendered on first request (dynamicParams) and cached via ISR.
 */
export function getPrebuiltRtoParams(): RtoParam[] {
  const richSlugs = new Set(VLTD_LOCATIONS.map((s) => s.slug));
  return rtoParams(
    (slug) => PRIORITY_ORDER.includes(getStateCode(slug)) || richSlugs.has(slug)
  );
}

export function getAllCityParams(): { state: string; city: string }[] {
  // Single-RTO cities redirect to their RTO page, so only multi-RTO hubs are pre-rendered.
  return VLTD_INDIA.flatMap((s) =>
    s.cities.filter((c) => c.rtos.length > 1).map((c) => ({ state: s.slug, city: c.slug }))
  );
}

export function getAllStateParams(): { state: string }[] {
  return VLTD_INDIA.map((s) => ({ state: s.slug }));
}

/** Up to `limit` other RTOs in the same state, for "nearby RTO" internal links. */
export function getSiblingRtos(
  state: StateData,
  currentCode: string,
  limit = 8
): { city: CityData; rto: RtoOffice }[] {
  const all = state.cities.flatMap((city) => city.rtos.map((rto) => ({ city, rto })));
  const i = all.findIndex((x) => x.rto.code === currentCode);
  if (i === -1) return all.slice(0, limit);
  // Neighbours in list order (master data is grouped by district), wrapping around.
  const out: { city: CityData; rto: RtoOffice }[] = [];
  for (let step = 1; out.length < limit && step < all.length; step++) {
    const fwd = all[(i + step) % all.length];
    if (fwd.rto.code !== currentCode && !out.includes(fwd)) out.push(fwd);
    if (out.length >= limit) break;
    const back = all[(i - step + all.length) % all.length];
    if (back.rto.code !== currentCode && !out.includes(back)) out.push(back);
  }
  return out;
}
