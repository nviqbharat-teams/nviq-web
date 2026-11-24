// Helpers for the /rto-code pages ("TN 57 which district?" style searches).
import {
  ALL_INDIA_RTOS,
  ALL_INDIA_STATES,
  getRtoFullSlug,
  getRtoRegionName,
  type FlattenedRto,
} from "@/data/india-rto-master";

/** "TN-57" -> "tn-57" */
export const rtoCodeSlug = (code: string) => code.toLowerCase();

/** "TN-57" -> "TN 57" (how people type it) */
export const spokenCode = (code: string) => code.replace("-", " ");

/** Accepts "tn-57", "tn57", "TN 57", "tn-057" and returns the matching RTO. */
export function findRtoByCodeParam(param: string): FlattenedRto | undefined {
  const m = decodeURIComponent(param).toUpperCase().replace(/[^A-Z0-9]/g, "").match(/^([A-Z]{2})0*(\d{1,3}[A-Z]?)$/);
  if (!m) return undefined;
  const num = m[2].replace(/^(\d)([A-Z]?)$/, "0$1$2"); // 1 -> 01
  return ALL_INDIA_RTOS.find((r) => r.code === `${m[1]}-${num}`) ?? ALL_INDIA_RTOS.find((r) => r.code === `${m[1]}-${m[2]}`);
}

const codeNumber = (code: string) => parseInt(code.split("-")[1], 10);

export function rtosInState(stateSlug: string): FlattenedRto[] {
  return ALL_INDIA_RTOS.filter((r) => r.stateSlug === stateSlug).sort((a, b) => codeNumber(a.code) - codeNumber(b.code) || a.code.localeCompare(b.code));
}

export function rtosInDistrict(rto: FlattenedRto): FlattenedRto[] {
  return ALL_INDIA_RTOS.filter((r) => r.stateSlug === rto.stateSlug && r.citySlug === rto.citySlug);
}

/** The codes just before and after this one in the same state. */
export function neighbourCodes(rto: FlattenedRto, span = 3): FlattenedRto[] {
  const list = rtosInState(rto.stateSlug);
  const i = list.findIndex((r) => r.code === rto.code);
  return list.slice(Math.max(0, i - span), i).concat(list.slice(i + 1, i + 1 + span));
}

/** Link to the RTO partner page for the same office. */
export function partnerHref(rto: FlattenedRto): string {
  const state = ALL_INDIA_STATES.find((s) => s.slug === rto.stateSlug);
  const city = state?.cities.find((c) => c.slug === rto.citySlug);
  const office = city?.rtos.find((o) => o.code === rto.code);
  if (!state || !city || !office) return "/rto-partner";
  return `/rto-partner/${state.slug}/${city.slug}/${getRtoFullSlug(office, city.name)}`;
}

export const officeName = (rto: FlattenedRto) => getRtoRegionName(rto.rtoName, rto.cityName);

/**
 * Area people search by, for metro offices: "Chennai South East (Mandaveli) RTO"
 * -> "Mandaveli". Brackets elsewhere are usually the district ("Ongole (Prakasam)"),
 * so they are only used when the name starts with the city and the city has several RTOs.
 */
export function officeLocality(rto: FlattenedRto, details?: { locality?: string }): string | undefined {
  if (details?.locality) return details.locality;
  const m = rto.rtoName.match(/^(.*?)\s*\(([^)]+)\)/);
  if (!m) return undefined;
  const [, before, inside] = m;
  if (!before.toLowerCase().startsWith(rto.cityName.toLowerCase()) || rtosInDistrict(rto).length < 2) return undefined;
  // Labels that are not places people search by.
  if (/\b(Trucking|Fleet|Garment|Port|Metro|Rural|Goa|Kannada|Mewat|Bellary)\b/i.test(inside)) return undefined;
  const inner = inside.replace(/\b(IT Hub|Mining Hub)\b/gi, "").replace(/\s+/g, " ").trim();
  return inner || undefined;
}

/** Office type from its name: "Guna DTO" -> "DTO", "Roorkee ARTO" -> "ARTO". */
export function officeType(rto: FlattenedRto): string {
  const t = rto.rtoName.trim().split(/\s+/).pop() ?? "";
  return /^[A-Z][A-Z-]{1,5}$/.test(t) ? t : "RTO";
}

/** Place people search by: locality for metro offices, else the name without type/brackets. */
export function officePlace(rto: FlattenedRto, locality?: string): string {
  if (locality) return locality;
  const t = officeType(rto);
  const place = rto.rtoName.replace(/\s*\([^)]*\)/g, "").replace(new RegExp(`\\s+${t}\\s*$`), "").trim();
  return place || rto.cityName;
}

/**
 * "Dindigul RTO Office", "Guna RTO / DTO Office", "Roorkee RTO / ARTO Office".
 * People search "rto office <place>" even where the office is a DTO or ARTO, so both words are kept.
 */
export function officeTitle(rto: FlattenedRto, locality?: string): string {
  const t = officeType(rto);
  return `${officePlace(rto, locality)} ${t === "RTO" ? "RTO" : `RTO / ${t}`} Office`;
}

/** "GJ-38" -> "GJ38", as many people type it. */
export const compactCode = (code: string) => code.replace("-", "");
