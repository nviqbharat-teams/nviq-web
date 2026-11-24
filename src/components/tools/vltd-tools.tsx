"use client";

// Interactive free tools: "Does my vehicle need AIS 140 VLTD?" and the fitness checklist.
// Both end in the 2-field quick lead form, pre-filled with what the visitor told us.
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, HelpCircle, Share2, ClipboardList } from "lucide-react";
import QuickLeadForm from "@/components/quick-lead-form";
import { trackLead } from "@/lib/lead-attribution";
import { Select } from "@/components/ui/select";
import {
  VEHICLE_TYPES,
  checkVltd,
  fitnessChecklist,
  type PermitType,
} from "@/data/vltd-rules";

export interface ToolState {
  slug: string;
  name: string;
  hasMining: boolean;
}

const PERMITS: { id: PermitType; label: string }[] = [
  { id: "national", label: "National permit" },
  { id: "state", label: "State permit" },
  { id: "none", label: "No permit" },
  { id: "unknown", label: "Not sure" },
];

const selectCls =
  "mt-1 w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

function useInputs(states: ToolState[], defaultState: string) {
  const [vehicle, setVehicle] = useState("");
  const [permit, setPermit] = useState<PermitType>("unknown");
  const [stateSlug, setStateSlug] = useState(defaultState);
  const st = states.find((s) => s.slug === stateSlug) || states[0];
  const isGoods = VEHICLE_TYPES.find((v) => v.id === vehicle)?.group === "goods";
  return { vehicle, setVehicle, permit, setPermit, stateSlug, setStateSlug, st, isGoods };
}

function Inputs({
  states,
  i,
}: {
  states: ToolState[];
  i: ReturnType<typeof useInputs>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <label className="block">
        <span className="text-xs font-semibold text-gray-700">Vehicle type</span>
        <Select
          aria-label="Vehicle type"
          placeholder="Select vehicle…"
          value={i.vehicle}
          onValueChange={i.setVehicle}
          options={VEHICLE_TYPES.map((v) => ({ value: v.id, label: v.label }))}
          searchPlaceholder="Search vehicle…"
          className={selectCls}
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold text-gray-700">State</span>
        <Select
          aria-label="State"
          value={i.stateSlug}
          onValueChange={i.setStateSlug}
          options={states.map((s) => ({ value: s.slug, label: s.name }))}
          searchPlaceholder="Search state…"
          className={selectCls}
        />
      </label>
      <label className={`block ${i.isGoods ? "" : "opacity-50"}`}>
        <span className="text-xs font-semibold text-gray-700">Permit (goods vehicles)</span>
        <Select
          aria-label="Permit"
          value={i.permit}
          disabled={!i.isGoods}
          onValueChange={(v) => i.setPermit(v as PermitType)}
          options={PERMITS.map((p) => ({ value: p.id, label: p.label }))}
          className={selectCls}
        />
      </label>
    </div>
  );
}

export function VltdChecker({ states, defaultState }: { states: ToolState[]; defaultState: string }) {
  const i = useInputs(states, defaultState);
  const result = useMemo(
    () =>
      i.vehicle
        ? checkVltd({ vehicle: i.vehicle, permit: i.isGoods ? i.permit : "none", stateName: i.st.name, stateHasMining: i.st.hasMining })
        : null,
    [i.vehicle, i.permit, i.isGoods, i.st]
  );
  const vehicleLabel = VEHICLE_TYPES.find((v) => v.id === i.vehicle)?.label || "";
  const segment = VEHICLE_TYPES.find((v) => v.id === i.vehicle)?.segment;

  const style =
    result?.verdict === "required"
      ? { box: "border-blue-300 bg-blue-50", icon: <CheckCircle2 className="h-6 w-6 text-blue-700" />, tag: "Required" }
      : result?.verdict === "not_required"
        ? { box: "border-emerald-300 bg-emerald-50", icon: <XCircle className="h-6 w-6 text-emerald-700" />, tag: "Not required" }
        : { box: "border-blue-300 bg-blue-50", icon: <HelpCircle className="h-6 w-6 text-blue-700" />, tag: "Depends" };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <Inputs states={states} i={i} />
      </div>

      {result && (
        <div className={`rounded-2xl border p-6 ${style.box}`} role="status" aria-live="polite">
          <div className="flex items-start gap-3">
            {style.icon}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">{style.tag}</span>
              <h2 className="text-xl font-black text-gray-900">{result.headline}</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-800 list-disc pl-5">
                {result.reasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-semibold text-gray-900">{result.next}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {segment && (
                  <Link href={`/gps-tracking/${segment}/${i.st.slug}`} className="font-bold text-blue-700 hover:underline">
                    {vehicleLabel} VLTD in {i.st.name} →
                  </Link>
                )}
                <Link href="/tools/fitness-checklist" className="font-bold text-blue-700 hover:underline">
                  Fitness document checklist →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {result && result.verdict !== "not_required" && (
        <QuickLeadForm
          topic={`AIS 140 VLTD for ${vehicleLabel} in ${i.st.name}`}
          source={`tool_checker_${i.vehicle}`}
          heading="Get it fitted: unlock today's price"
          subheading="Share your number. We confirm on Vahan and send your exact price on WhatsApp within minutes."
        />
      )}
      {result && result.verdict === "not_required" && (
        <QuickLeadForm
          topic={`GPS tracker (theft protection) for ${vehicleLabel} in ${i.st.name}`}
          source={`tool_checker_${i.vehicle}`}
          productOfInterest="gps_fleet_tracking"
          heading="Want a GPS tracker anyway?"
          subheading="Live location and theft alerts on your phone. Share your number for today's price."
        />
      )}
    </div>
  );
}

export function FitnessChecklistTool({ states, defaultState }: { states: ToolState[]; defaultState: string }) {
  const i = useInputs(states, defaultState);
  const items = useMemo(
    () => (i.vehicle ? fitnessChecklist(i.vehicle, i.isGoods ? i.permit : "none", i.st.name, i.st.hasMining) : []),
    [i.vehicle, i.permit, i.isGoods, i.st]
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const vehicleLabel = VEHICLE_TYPES.find((v) => v.id === i.vehicle)?.label || "";
  const missing = items.filter((x) => !checked[x.item]);

  const shareText = `Fitness checklist for ${vehicleLabel} (${i.st.name}):\n${items
    .map((x) => `${checked[x.item] ? "✅" : "⬜"} ${x.item}`)
    .join("\n")}\n\nMade with NViQ: https://www.naviqbharat.com/tools/fitness-checklist`;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <Inputs states={states} i={i} />
      </div>

      {items.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
              <ClipboardList className="h-5 w-5 text-blue-600" /> Fitness checklist: {vehicleLabel}
            </h2>
            <span className="text-xs font-bold text-gray-600">
              {items.length - missing.length}/{items.length} ready
            </span>
          </div>
          <ul className="mt-4 divide-y divide-gray-100">
            {items.map((x) => (
              <li key={x.item} className="py-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-emerald-600"
                    checked={!!checked[x.item]}
                    onChange={(e) => setChecked((c) => ({ ...c, [x.item]: e.target.checked }))}
                  />
                  <span>
                    <span className={`text-sm font-semibold ${checked[x.item] ? "text-gray-400 line-through" : "text-gray-900"}`}>{x.item}</span>
                    {x.note && <span className="block text-xs text-gray-600">{x.note}</span>}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("whatsapp_click", "checklist_share")}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 hover:bg-emerald-100"
          >
            <Share2 className="h-4 w-4" /> Share checklist on WhatsApp
          </a>
        </div>
      )}

      {items.length > 0 && (
        <QuickLeadForm
          topic={`Fitness for ${vehicleLabel} in ${i.st.name}${missing.length ? ` (pending: ${missing.slice(0, 3).map((m) => m.item).join(", ")})` : ""}`}
          source={`tool_checklist_${i.vehicle}`}
          productOfInterest="general"
          heading={missing.length ? `${missing.length} items pending? We sort them out` : "All set? Book your VLTD / fitness help"}
          subheading="Share your number and vehicle. We check Vahan and tell you exactly what is pending, with the total cost."
        />
      )}
    </div>
  );
}
