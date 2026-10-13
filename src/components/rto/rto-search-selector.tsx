"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ALL_INDIA_STATES,
  searchAllIndiaRtos,
  PAN_INDIA_COVERAGE_STATS,
  getRtoFullSlug,
  getRtoRegionName,
  FlattenedRto,
} from "@/data/india-rto-master";
import {
  TRUCK_CATEGORIES,
  RAJASTHAN_TRUCK_CITIES,
} from "@/data/rajasthan-trucks-master";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Truck,
  MapPin,
  Shield,
  Clock,
} from "lucide-react";

const POPULAR_BREAKOUT_QUERIES = [
  { code: "KA-03", name: "Indiranagar (Bengaluru)", state: "Karnataka", stateSlug: "karnataka", citySlug: "bengaluru", slug: "indiranagar-ka-03" },
  { code: "TN-14", name: "Sholinganallur (Chennai)", state: "Tamil Nadu", stateSlug: "tamil-nadu", citySlug: "chennai", slug: "sholinganallur-tn-14" },
  { code: "TN-12", name: "Poonamallee (Tiruvallur)", state: "Tamil Nadu", stateSlug: "tamil-nadu", citySlug: "tiruvallur", slug: "poonamallee-tn-12" },
  { code: "DL-06", name: "Sarai Kale Khan (Delhi)", state: "Delhi", stateSlug: "delhi", citySlug: "central-delhi", slug: "sarai-kale-khan-dl-06" },
  { code: "JH-01", name: "Ranchi Central", state: "Jharkhand", stateSlug: "jharkhand", citySlug: "ranchi", slug: "ranchi-jh-01" },
  { code: "KL-08", name: "Thrissur Central", state: "Kerala", stateSlug: "kerala", citySlug: "thrissur", slug: "thrissur-kl-08" },
  { code: "TS-09", name: "Khairatabad (Hyderabad)", state: "Telangana", stateSlug: "telangana", citySlug: "hyderabad", slug: "khairatabad-ts-09" },
  { code: "UP-16", name: "Noida / Greater Noida", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", citySlug: "noida", slug: "noida-up-16" },
  { code: "RJ-14", name: "Jaipur South", state: "Rajasthan", stateSlug: "rajasthan", citySlug: "jaipur", slug: "jaipur-south-rj-14" },
  { code: "MH-12", name: "Pune Central", state: "Maharashtra", stateSlug: "maharashtra", citySlug: "pune", slug: "pune-mh-12" },
];

const TRUCK_FLEET_PILLS = [
  { label: "Marble Trolla (मार्बल ट्रॉला)", href: "/trucks/marble-trolla", badge: "14-22 Wheeler" },
  { label: "Mining Dumper (खनन डंपर)", href: "/trucks/mining-dumper", badge: "10-14 Wheeler" },
  { label: "Bajri Tipper (बजरी डंपर)", href: "/trucks/bajri-truck", badge: "Banas Sand" },
  { label: "Cement Bulker (सीमेंट बल्कर)", href: "/trucks/cement-bulker", badge: "Fly Ash & Cement" },
  { label: "Kishangarh Mandi (RJ-42)", href: "/truck-passing/rajasthan/kishangarh/marble-mandi/rj-42", badge: "RJ-42" },
  { label: "Chittorgarh Cement (RJ-09)", href: "/truck-passing/rajasthan/chittorgarh/nimbahera-cement-hub/rj-09", badge: "RJ-09" },
  { label: "Jaipur Transport Nagar (RJ-14)", href: "/truck-passing/rajasthan/jaipur/transport-nagar/rj-14", badge: "RJ-14" },
  { label: "Bhilwara Pur Road (RJ-06)", href: "/truck-passing/rajasthan/bhilwara/pur-road/rj-06", badge: "RJ-06" },
];

export default function RtoSearchSelector() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "states" | "uts" | "trucks" | "corridors">("all");

  const searchResults: FlattenedRto[] = useMemo(() => {
    if (!query.trim()) return [];
    return searchAllIndiaRtos(query, 12);
  }, [query]);

  const filteredStates = useMemo(() => {
    if (activeTab === "states") return ALL_INDIA_STATES.filter((s) => s.type === "state");
    if (activeTab === "uts") return ALL_INDIA_STATES.filter((s) => s.type === "union-territory");
    return ALL_INDIA_STATES;
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Search Input Bar */}
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search RTO code, office name, or city (e.g. KA-03, UP-16, DL-06, Ranchi)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 text-xs font-semibold text-gray-500 hover:text-gray-900 px-2 py-1 bg-gray-100 rounded-lg transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Live Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 z-50 max-h-[380px] overflow-y-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1.5 block">
              Found {searchResults.length} RTO Offices Matching &ldquo;{query}&rdquo;
            </span>
            <div className="space-y-1">
              {searchResults.map((rto) => {
                const regionName = getRtoRegionName(rto.rtoName, rto.cityName);
                const fullSlug = getRtoFullSlug({ code: rto.code, name: rto.rtoName, slug: rto.slug }, rto.cityName);
                return (
                  <Link
                    key={rto.code}
                    href={`/rto-partner/${rto.stateSlug}/${rto.citySlug}/${fullSlug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {regionName}
                          </span>
                          <span className="font-mono font-bold text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            {rto.code}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 mt-0.5 block">
                          {rto.rtoName} • {rto.cityName}, {rto.stateName}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Trending / Breakout Queries from Google Trends */}
      <div className="mb-6 text-center">
        <span className="text-xs font-semibold text-gray-500 inline-flex items-center gap-1.5 mb-2.5">
          <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
          High-Volume RTO Search Hubs Across India:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {POPULAR_BREAKOUT_QUERIES.map((item) => (
            <Link
              key={item.code}
              href={`/rto-partner/${item.stateSlug}/${item.citySlug}/${item.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all shadow-2xs"
            >
              <span className="font-mono text-blue-600 font-bold">{item.code}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* High-Intent Commercial Fleet & Truck Corridor Quick Bar */}
      <div className="mb-10 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-amber-600" />
            Commercial Truck &amp; Mining Passing Hubs (Direct URLs):
          </span>
          <Link href="/trucks" className="text-[11px] font-bold text-amber-700 hover:text-amber-900 underline">
            View All Categories →
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {TRUCK_FLEET_PILLS.map((pill, idx) => (
            <Link
              key={idx}
              href={pill.href}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-amber-300 hover:border-amber-500 text-gray-800 hover:text-amber-800 shadow-2xs transition-all hover:scale-102"
            >
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">
                {pill.badge}
              </span>
              <span>{pill.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "all"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
          }`}
        >
          All 36 Regions ({PAN_INDIA_COVERAGE_STATS.totalRegions})
        </button>
        <button
          onClick={() => setActiveTab("states")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "states"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
          }`}
        >
          28 States ({PAN_INDIA_COVERAGE_STATS.totalStates})
        </button>
        <button
          onClick={() => setActiveTab("uts")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "uts"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
          }`}
        >
          8 Union Territories ({PAN_INDIA_COVERAGE_STATS.totalUnionTerritories})
        </button>
        <button
          onClick={() => setActiveTab("trucks")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === "trucks"
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-white text-emerald-700 hover:text-emerald-800 border border-emerald-300"
          }`}
        >
          <Truck className="w-3.5 h-3.5" />
          Truck Categories ({TRUCK_CATEGORIES.length})
        </button>
        <button
          onClick={() => setActiveTab("corridors")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === "corridors"
              ? "bg-amber-600 text-white shadow-sm"
              : "bg-white text-amber-700 hover:text-amber-800 border border-amber-300"
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          Rajasthan Transport Nagars ({RAJASTHAN_TRUCK_CITIES.length} Hubs)
        </button>
      </div>

      {/* View Mode 1: Commercial Truck Categories */}
      {activeTab === "trucks" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
          {TRUCK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/trucks/${cat.slug}`}
              className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {cat.wheelAxle}
                  </span>
                  <Truck className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">
                  {cat.shortDesc}
                </p>
                <div className="mt-3 text-[11px] text-gray-600 font-medium">
                  <span className="font-semibold text-gray-800">Top Hubs:</span> {cat.topHubsInRajasthan.slice(0, 3).join(", ")}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                <span>View Passing Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* View Mode 2: Rajasthan High-Traffic Transport Nagars & RTO Hubs */}
      {activeTab === "corridors" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RAJASTHAN_TRUCK_CITIES.map((city) => (
              <div
                key={city.slug}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {Array.from(new Set(city.areas.map((a) => a.rtoCode))).join(", ")}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600">
                      {city.areas.length} Yards
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {city.citySummary}
                  </p>

                  <div className="mt-4 space-y-2">
                    {city.areas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/truck-passing/rajasthan/${city.slug}/${area.slug}/${area.rtoSlug}`}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-amber-50 border border-gray-100 hover:border-amber-300 flex items-center justify-between group transition-colors block text-xs"
                      >
                        <div>
                          <span className="font-semibold text-gray-900 block group-hover:text-amber-800">
                            {area.name}
                          </span>
                          <span className="text-[10px] text-gray-500">
                            {area.rtoCode} • {area.doorstepFitmentTime}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href={`/truck-passing/rajasthan/${city.slug}`}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center justify-between"
                  >
                    <span>Explore All {city.name} Fleets</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View Mode 3: Standard Pan-India States & UTs Cards Grid */}
      {(activeTab === "all" || activeTab === "states" || activeTab === "uts") && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredStates.map((st) => {
            const rtoCount = st.cities.reduce((acc, c) => acc + c.rtos.length, 0);
            return (
              <Link
                key={st.slug}
                href={`/rto-partner/${st.slug}`}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {st.code}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">
                      {rtoCount} RTOs
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {st.name}
                  </h3>
                  <span className="text-[11px] text-gray-500 block mt-0.5 line-clamp-1">
                    {st.cities.length} Cities
                  </span>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-500 group-hover:text-blue-600">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

