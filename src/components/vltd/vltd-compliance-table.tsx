import React from "react";
import { Check, X, ShieldAlert, Zap } from "lucide-react";

interface VltdComplianceTableProps {
  locationName: string;
  miningPortalName?: string;
}

export default function VltdComplianceTable({ locationName, miningPortalName }: VltdComplianceTableProps) {
  const comparisons = [
    {
      feature: "Fitment Certificate Generation Time",
      nviq: "Within 60 Minutes (Instant)",
      others: "2 to 4 Days (High Delays)",
      important: true,
    },
    {
      feature: "Vahan 4.0 & State RTO Approval",
      nviq: "Direct Server Sync (100% Guaranteed)",
      others: "Frequent manual rejection issues",
      important: true,
    },
    {
      feature: miningPortalName || "State Mining Portal Whitelist",
      nviq: "Pre-Integrated for e-Transit Pass / e-Ravanna",
      others: "Not whitelisted on mining servers",
      important: true,
    },
    {
      feature: "Certified Emergency Panic Buttons",
      nviq: "2x Illuminated SOS Buttons with Siren",
      others: "Cheap uncertified switch or missing",
      important: false,
    },
    {
      feature: "Technician Doorstep Turnaround",
      nviq: "Same-Day / 2 to 4 Hours in " + locationName,
      others: "Must take truck to distant workshop",
      important: true,
    },
    {
      feature: "RTO Consultant Dealer Portal",
      nviq: "Instant Self-Issue + ₹1,500-₹3,000 Margin",
      others: "No dealer margins or portal access",
      important: true,
    },
    {
      feature: "Replacement Warranty",
      nviq: "1 to 2 Years Doorstep Replacement",
      others: "Limited 6-month repair warranty",
      important: false,
    },
    {
      feature: "Dual SIM Roaming (Airtel + Vi)",
      nviq: "Automatic Network Failover in Remote Mines",
      others: "Single 2G/3G SIM (Loses connectivity)",
      important: false,
    },
  ];

  return (
    <section className="my-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <Zap className="h-3.5 w-3.5 text-emerald-600" />
          Passing & Compliance Guarantee
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black text-gray-900">
          Why 50,000+ Trucks & RTO Agents Choose NViQ in {locationName}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Don’t let a cheap, non-whitelisted GPS tracker fail your RTO fitness passing or halt your mining transit pass.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-600">
              <th className="py-4 px-6 font-bold">Compliance & Service Metric</th>
              <th className="py-4 px-6 font-bold text-blue-700 bg-blue-50/70 border-x border-blue-200">
                NViQ AIS 140 VLTD
              </th>
              <th className="py-4 px-6 font-semibold text-gray-500">Generic Market GPS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
            {comparisons.map((row, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50/70 transition-colors ${
                  row.important ? "bg-blue-50/20" : ""
                }`}
              >
                <td className="py-4 px-6 font-medium text-gray-900">
                  {row.feature}
                </td>
                <td className="py-4 px-6 font-semibold text-emerald-700 bg-blue-50/30 border-x border-blue-200">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{row.nviq}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-500">
                  <div className="flex items-center gap-2 text-rose-500">
                    <X className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>{row.others}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 px-2">
        <span className="flex items-center gap-1.5">
          <ShieldAlert className="h-4 w-4 text-amber-600" />
          <span>Using an unwhitelisted device can lead to ₹10,000+ vehicle impound fines under the Motor Vehicles Act.</span>
        </span>
      </div>
    </section>
  );
}
