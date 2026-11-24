// hreflang helpers: English pages that have a Hindi twin under /hi, and vice versa.
import { getStateCode, MAIN_STATE_CODES, FOCUS_STATE_CODES } from "@/data/vltd-india";

const BASE = "https://www.naviqbharat.com";
const HI_STATE_CODES = [...MAIN_STATE_CODES, ...FOCUS_STATE_CODES];

/** Hindi pages exist for the main + focus states only. */
export function hasHindiState(stateSlug: string): boolean {
  return HI_STATE_CODES.includes(getStateCode(stateSlug));
}

/** `alternates` for an English page whose Hindi twin is `/hi${path}`. */
export function enAlternates(path: string, withHindi = true) {
  return {
    canonical: `${BASE}${path}`,
    ...(withHindi && {
      languages: { "en-IN": `${BASE}${path}`, "hi-IN": `${BASE}/hi${path}`, "x-default": `${BASE}${path}` },
    }),
  };
}

/** `alternates` for a Hindi page at `/hi${path}`. */
export function hiAlternates(path: string) {
  return {
    canonical: `${BASE}/hi${path}`,
    languages: { "en-IN": `${BASE}${path}`, "hi-IN": `${BASE}/hi${path}`, "x-default": `${BASE}${path}` },
  };
}
