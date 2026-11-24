import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { StateData, CityData, getAllStates } from "@/data/vltd-india";
import { rtoLabel } from "@/lib/rto-label";

const MAX_CHIPS = 3;

interface StateGridProps {
  currentStateSlug?: string;
}

export function StateGrid({ currentStateSlug }: StateGridProps) {
  const states = getAllStates();

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Available VLTD & Mining Compliance States
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
            Select your state to view approved portals, RTO passing guidelines, and local technician hubs.
          </p>
        </div>
      </div>

      {/* Compact chips: this grid renders on every VLTD page, so keep the markup light */}
      <div className="flex flex-wrap gap-2">
        {states.map((state) => {
          const isCurrent = state.slug === currentStateSlug;
          return (
            <Link
              key={state.slug}
              href={`/vltd/${state.slug}`}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold ${
                isCurrent ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"
              }`}
            >
              {state.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

interface CityGridProps {
  state: StateData;
  currentCitySlug?: string;
}

const COMPACT_CITY_LIMIT = 12;

export function CityGrid({ state, currentCitySlug }: CityGridProps) {
  const cityHref = (city: CityData) =>
    city.rtos.length === 1 ? `/vltd/${state.slug}/${city.slug}/${city.rtos[0].slug}` : `/vltd/${state.slug}/${city.slug}`;

  // Big states (UP 74 cities, Bihar 39...) get light link chips instead of cards.
  if (state.cities.length > COMPACT_CITY_LIMIT) {
    return (
      <div className="my-12">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{state.name} VLTD Fitment by City</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-5">
          All {state.cities.length} cities and {state.cities.reduce((n, c) => n + c.rtos.length, 0)} RTOs in {state.name}.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {state.cities.map((city) => (
            <Link
              key={city.slug}
              href={cityHref(city)}
              className={`rounded-lg border px-3 py-2 text-sm ${
                city.slug === currentCitySlug ? "border-blue-500 bg-blue-50 font-bold" : "border-gray-200 hover:border-blue-400"
              }`}
            >
              <span className="font-semibold text-gray-900">{city.name}</span>
              <span className="block text-[11px] text-blue-800">{city.rtos.map((r) => r.code).join(", ")}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {state.name} City Fitment Hubs
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
            Doorstep installation available across all industrial zones and transport nagars in {state.name}.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.cities.map((city) => {
          const isCurrent = city.slug === currentCitySlug;
          const href =
            city.rtos.length === 1
              ? `/vltd/${state.slug}/${city.slug}/${city.rtos[0].slug}`
              : `/vltd/${state.slug}/${city.slug}`;
          return (
            <Link
              key={city.slug}
              href={href}
              className={`p-5 rounded-2xl border transition-all ${
                isCurrent
                  ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/30 shadow-sm"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {city.name}
                  </h4>
                  <p className="text-xs text-emerald-700 mt-0.5 flex items-center gap-1 font-medium">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Fitment: {city.installationTurnaround}</span>
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {city.rtos.slice(0, MAX_CHIPS).map((r) => {
                  const label = rtoLabel(r, city.name);
                  return (
                    <span
                      key={r.code}
                      title={r.name}
                      className="max-w-[140px] truncate px-1.5 py-0.5 rounded text-[10px] bg-blue-50 text-blue-800 border border-blue-200"
                    >
                      <span className="font-bold">{r.code}</span>
                      {label !== city.name && <> · {label}</>}
                    </span>
                  );
                })}
                {city.rtos.length > MAX_CHIPS && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-600 bg-gray-50 border border-gray-200">
                    +{city.rtos.length - MAX_CHIPS} more
                  </span>
                )}
              </div>

              <div className="mt-3 text-xs text-gray-600 line-clamp-1">
                Hubs: {city.majorIndustries.join(", ")}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>
                  {city.rtos.length === 1
                    ? `View ${city.name} (${city.rtos[0].code}) Fitment`
                    : `View ${city.name} RTOs`}
                </span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

interface RtoGridProps {
  state: StateData;
  city: CityData;
  currentRtoSlug?: string;
}

export function RtoGrid({ state, city, currentRtoSlug }: RtoGridProps) {
  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {city.name} RTO Offices & Passing Centers
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
            Select your specific RTO code for targeted passing certificates, address details, and agent wholesale rates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {city.rtos.map((rto) => {
          const isCurrent = rto.slug === currentRtoSlug;
          return (
            <Link
              key={rto.code}
              href={`/vltd/${state.slug}/${city.slug}/${rto.slug}`}
              className={`p-6 rounded-2xl border transition-all ${
                isCurrent
                  ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/30 shadow-sm"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-200 tracking-wider">
                      {rto.code}
                    </span>
                    <h4 className="text-base font-bold text-gray-900">
                      {rto.name}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-gray-600 flex items-start gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{rto.officeAddress}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
                <strong className="text-blue-700">Passing Focus:</strong> {rto.fitnessPassingFocus}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>View {rto.code} Passing Certificate Guidelines</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
