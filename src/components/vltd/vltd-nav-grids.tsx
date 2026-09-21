import React from "react";
import Link from "next/link";
import { MapPin, Building2, ArrowRight, ShieldCheck } from "lucide-react";
import { StateData, CityData, RtoOffice, getAllStates } from "@/data/vltd-locations";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {states.map((state) => {
          const isCurrent = state.slug === currentStateSlug;
          return (
            <Link
              key={state.slug}
              href={`/vltd/${state.slug}`}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isCurrent
                  ? "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/30 shadow-sm"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {state.name}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    {state.cities.length} Hubs
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-600 line-clamp-2">
                  {state.miningPortal.name}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>View Cities & RTOs</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
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

export function CityGrid({ state, currentCitySlug }: CityGridProps) {
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
          return (
            <Link
              key={city.slug}
              href={`/vltd/${state.slug}/${city.slug}`}
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
                <div className="flex flex-wrap gap-1 max-w-[120px] justify-end">
                  {city.rtos.map((r) => (
                    <span
                      key={r.code}
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200"
                    >
                      {r.code}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-600 line-clamp-2">
                Hubs: {city.majorIndustries.join(", ")}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>View {city.name} RTOs</span>
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
                    <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-200 tracking-wider">
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
