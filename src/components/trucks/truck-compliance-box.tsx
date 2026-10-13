import React from "react";
import { ShieldCheck, FileCheck, AlertTriangle, Clock, Cpu } from "lucide-react";

interface TruckComplianceBoxProps {
  locationOrCategoryName: string;
  rtoCode?: string;
  isMiningCategory?: boolean;
}

export default function TruckComplianceBox({
  locationOrCategoryName,
  rtoCode,
  isMiningCategory = true,
}: TruckComplianceBoxProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 text-gray-900 shadow-xs my-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            Fleet Compliance Standards
          </h3>
          <p className="text-xs text-gray-500">
            Mandatory standards for {locationOrCategoryName} {rtoCode ? `(${rtoCode})` : ""} fitness passing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Pillar 1: DMG Khanij Online */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs mb-1.5">
            <FileCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>DMG Khanij e-Ravanna</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Whitelisted on Rajasthan Mines portal. Instant e-transit pass (ई-रवाना) generation with zero penalty risk.
          </p>
        </div>

        {/* Pillar 2: Vahan 4.0 60-Min Sync */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4">
          <div className="flex items-center gap-2 text-blue-700 font-semibold text-xs mb-1.5">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            <span>60-Minute Vahan 4.0 Sync</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Digital fitment certificate uploaded directly to Parivahan Sewa within 1 hour for immediate fitness passing.
          </p>
        </div>

        {/* Pillar 3: Dual Panic Buttons */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4">
          <div className="flex items-center gap-2 text-indigo-700 font-semibold text-xs mb-1.5">
            <Cpu className="h-3.5 w-3.5 text-indigo-600" />
            <span>Dual SOS Panic Buttons</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            ARAI/ICAT certified with 2 emergency cabin panic buttons, internal battery backup, and police command push.
          </p>
        </div>
      </div>

      {/* Transport Warning Banner */}
      <div className="mt-4 flex items-center gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          <strong>Notice:</strong> AIS 140 VLTD fitment is mandatory for commercial vehicle fitness renewals under Section 192A of the Motor Vehicles Act.
        </span>
      </div>
    </div>
  );
}
