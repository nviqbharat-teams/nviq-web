import React from "react";
import Link from "next/link";
import { TRUCK_CATEGORIES, RAJASTHAN_TRUCK_CITIES, TruckingCity, TruckCategory } from "@/data/rajasthan-trucks-master";
import { Truck, MapPin, ChevronRight, Building2, Shield, Wrench } from "lucide-react";

export function TruckCategoryGrid({ currentCategorySlug }: { currentCategorySlug?: string }) {
  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Commercial Truck & Fleet Categories</h3>
          <p className="text-xs sm:text-sm text-gray-500">Government-approved AIS 140 fitment tailored for each vehicle type</p>
        </div>
        <Link href="/trucks" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5">
          View All <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {TRUCK_CATEGORIES.map((cat) => {
          const isActive = cat.slug === currentCategorySlug;
          return (
            <Link
              key={cat.slug}
              href={`/trucks/${cat.slug}`}
              className={`group p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                isActive
                  ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-md">
                    {cat.wheelAxle}
                  </span>
                  <Truck className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-emerald-600">
                <span>Passing Compliance</span>
                <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function RajasthanTruckCitiesGrid({ currentCitySlug }: { currentCitySlug?: string }) {
  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Rajasthan Trucking & RTO Hubs</h3>
          <p className="text-xs sm:text-sm text-gray-500">Major transport corridors, mineral loading zones & RTO jurisdictions</p>
        </div>
        <Link href="/truck-passing/rajasthan" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5">
          View Statewide <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {RAJASTHAN_TRUCK_CITIES.map((city) => {
          const isActive = city.slug === currentCitySlug;
          const rtoCodes = Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ");
          return (
            <Link
              key={city.slug}
              href={`/truck-passing/${city.stateSlug}/${city.slug}`}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isActive
                  ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-emerald-400 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-gray-900">{city.name}</span>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-md">
                  {rtoCodes}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">{city.areas.length} Transport Areas</p>
              <div className="text-[11px] text-emerald-600 mt-2 font-medium flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>Doorstep Fitment</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function AreaPassingGrid({ city }: { city: TruckingCity }) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        Transport Nagars & Yards in {city.name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-4">
        Doorstep fitment centers and mechanic clusters across {city.name}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {city.areas.map((area) => (
          <Link
            key={area.slug}
            href={`/truck-passing/${city.stateSlug}/${city.slug}/${area.slug}`}
            className="p-4 rounded-xl border border-gray-200 bg-white hover:border-emerald-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                  {area.rtoCode} — {area.rtoName}
                </span>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-100 font-medium px-2 py-0.5 rounded-md">
                  {area.doorstepFitmentTime}
                </span>
              </div>
              <h4 className="font-bold text-base text-gray-900">{area.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{area.landmark}</p>

              <div className="mt-3 text-xs text-gray-600 space-y-1">
                <div>
                  <span className="font-semibold text-gray-900">Fleets:</span> {area.dominantFleets.join(", ")}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
              <span>View RTO Passing Hub</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
