// Helpers for the customer-facing /rto-agent pages ("fatehpur rto agent contact number").
import { ALL_INDIA_STATES, type MasterState, type MasterCity } from "@/data/india-rto-master";

export function rtoAgentHref(stateSlug: string, citySlug: string) {
  return `/rto-agent/${stateSlug}/${citySlug}`;
}

export function getAgentCity(stateSlug: string, citySlug: string): { state: MasterState; city: MasterCity } | undefined {
  const state = ALL_INDIA_STATES.find((s) => s.slug === stateSlug);
  const city = state?.cities.find((c) => c.slug === citySlug);
  return state && city ? { state, city } : undefined;
}

export function allAgentCityParams(): { state: string; city: string }[] {
  return ALL_INDIA_STATES.flatMap((s) => s.cities.map((c) => ({ state: s.slug, city: c.slug })));
}

/** City that holds a given RTO code, for linking RTO-code and partner pages here. */
export function agentHrefForRtoCode(code: string): string | undefined {
  for (const s of ALL_INDIA_STATES) {
    for (const c of s.cities) {
      if (c.rtos.some((r) => r.code === code)) return rtoAgentHref(s.slug, c.slug);
    }
  }
  return undefined;
}
