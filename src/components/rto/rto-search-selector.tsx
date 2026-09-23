"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ALL_INDIA_STATES,
  searchAllIndiaRtos,
  PAN_INDIA_COVERAGE_STATS,
  FlattenedRto,
} from "@/data/india-rto-master";
import {
  Search,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const POPULAR_BREAKOUT_QUERIES = [
  { code: "KA-03", name: "Indiranagar (Bengaluru)", state: "Karnataka", stateSlug: "karnataka", citySlug: "bengaluru", slug: "ka-03" },
  { code: "TN-14", name: "Sholinganallur (Chennai)", state: "Tamil Nadu", stateSlug: "tamil-nadu", citySlug: "chennai", slug: "tn-14" },
  { code: "TN-12", name: "Poonamallee (Tiruvallur)", state: "Tamil Nadu", stateSlug: "tamil-nadu", citySlug: "tiruvallur", slug: "tn-12" },
  { code: "DL-06", name: "Sarai Kale Khan (Delhi)", state: "Delhi", stateSlug: "delhi", citySlug: "central-delhi", slug: "dl-06" },
  { code: "JH-01", name: "Ranchi Central", state: "Jharkhand", stateSlug: "jharkhand", citySlug: "ranchi", slug: "jh-01" },
  { code: "KL-08", name: "Thrissur Central", state: "Kerala", stateSlug: "kerala", citySlug: "thrissur", slug: "kl-08" },
  { code: "TS-09", name: "Khairatabad (Hyderabad)", state: "Telangana", stateSlug: "telangana", citySlug: "hyderabad", slug: "ts-09" },
  { code: "UP-16", name: "Noida / Greater Noida", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", citySlug: "noida", slug: "up-16" },
  { code: "RJ-14", name: "Jaipur South", state: "Rajasthan", stateSlug: "rajasthan", citySlug: "jaipur", slug: "rj-14" },
  { code: "MH-12", name: "Pune Central", state: "Maharashtra", stateSlug: "maharashtra", citySlug: "pune", slug: "mh-12" },
];

export default function RtoSearchSelector() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "states" | "uts">("all");

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
              {searchResults.map((rto) => (
                <Link
                  key={rto.code}
                  href={`/rto-partner/${rto.stateSlug}/${rto.citySlug}/${rto.slug}`}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {rto.code}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors block">
                        {rto.rtoName}
                      </span>
                      <span className="text-xs text-gray-500">
                        {rto.cityName}, {rto.stateName}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Trending / Breakout Queries from Google Trends */}
      <div className="mb-10 text-center">
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

      {/* State Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-6">
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
      </div>

      {/* State Cards Grid */}
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
    </div>
  );
}
