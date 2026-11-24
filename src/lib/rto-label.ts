import { getRtoRegionName } from "@/data/india-rto-master";
import { RTO_NAMES_HI } from "@/data/hi/rto-names-hi";

/**
 * Short place name for an RTO, for link cards / chips next to the code.
 * "Alwar DTO Office" → "Alwar", "Kotputli RTO" → "Kotputli", "Pataudi SDM" → "Pataudi".
 * With lang "hi", returns the Hindi name when known, else the English one.
 */
export function rtoLabel(rto: { code: string; name: string }, cityName?: string, lang: "en" | "hi" = "en"): string {
  if (lang === "hi" && RTO_NAMES_HI[rto.code]) return RTO_NAMES_HI[rto.code];
  const region = getRtoRegionName(rto.name, cityName)
    .replace(/\b(Office|SDM|RTA)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return region || cityName || rto.name;
}
