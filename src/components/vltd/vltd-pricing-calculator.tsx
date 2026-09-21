"use client";

import React, { useState } from "react";
import { CheckCircle2, PhoneCall, ShieldCheck, Zap, ArrowRight, Truck, Sparkles, Building2 } from "lucide-react";
import { submitInquiry } from "@/lib/api";

interface VltdPricingCalculatorProps {
  locationName: string; // e.g. "Jaipur (RJ-14)" or "Rajasthan"
  stateSlug: string;
  cityName?: string;
  rtoCode?: string;
  miningPortalName?: string;
}

const VEHICLE_SLABS = [
  { count: 1, label: "1 Vehicle", pricePerUnit: 3799, originalPrice: 5499, tag: "Passing Urgent" },
  { count: 2, label: "2 Vehicles", pricePerUnit: 3499, originalPrice: 5199, tag: "Save ₹3,400" },
  { count: 3, label: "3 Vehicles", pricePerUnit: 3399, originalPrice: 5199, tag: "Save ₹5,400" },
  { count: 5, label: "5 Vehicles", pricePerUnit: 3299, originalPrice: 4999, tag: "Popular Fleet" },
  { count: 8, label: "8 Vehicles", pricePerUnit: 3099, originalPrice: 4799, tag: "Volume Deal" },
  { count: 10, label: "10+ Vehicles", pricePerUnit: 2699, originalPrice: 4499, tag: "RTO Wholesale" },
];

export default function VltdPricingCalculator({
  locationName,
  cityName,
  rtoCode,
  miningPortalName,
}: VltdPricingCalculatorProps) {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [userRole, setUserRole] = useState<"truck_owner" | "rto_consultant">("truck_owner");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentSlab = VEHICLE_SLABS.find((s) => s.count === selectedCount) || VEHICLE_SLABS[0];
  const totalPrice = currentSlab.pricePerUnit * selectedCount;
  const originalTotalPrice = currentSlab.originalPrice * selectedCount;
  const totalSavings = originalTotalPrice - totalPrice;

  const handleWhatsAppQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const messageText = `Hi NViQ Team, I need an official quote for ${selectedCount} vehicle(s) in ${locationName}. 
Role: ${userRole === "rto_consultant" ? "RTO Consultant / Agent" : "Truck / Fleet Owner"}
Name: ${fullName || "Customer"}
Phone: ${phoneNumber}
${vehicleNumber ? `Vehicle: ${vehicleNumber}` : ""}`;

    try {
      await submitInquiry({
        inquiryType: "fleet_inquiry",
        fullName: fullName || "RTO/Fleet Visitor",
        email: "quote-request@naviqbharat.com",
        phoneNumber,
        numberOfVehicles: selectedCount,
        businessName: userRole === "rto_consultant" ? `RTO Agent (${locationName})` : `Transporter (${locationName})`,
        message: `Quote request for ${selectedCount} vehicles in ${locationName}. Vehicle: ${vehicleNumber}`,
        productOfInterest: "ais_140_vltd_mining",
        sourceElement: `vltd_calculator_${locationName}`,
      });
    } catch {
      // Non-blocking for WhatsApp redirection
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const encodedMsg = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/919313200700?text=${encodedMsg}`;
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    }
  };

  return (
    <div id="calculator-section" className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-gray-900/90 via-gray-950 to-gray-900 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Live Pricing & Immediate Availability
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          <span>ARAI & ICAT Certified • Vahan 4.0 Approved</span>
        </div>
      </div>

      {/* Role Toggle Selector */}
      <div className="mt-6">
        <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-2">
          Who is requesting this quote?
        </label>
        <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-gray-800/80 border border-gray-700">
          <button
            type="button"
            onClick={() => setUserRole("truck_owner")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs md:text-sm font-medium transition-all ${
              userRole === "truck_owner"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Truck className="h-4 w-4" />
            <span>Truck / Mining Fleet Owner</span>
          </button>
          <button
            type="button"
            onClick={() => setUserRole("rto_consultant")}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs md:text-sm font-medium transition-all ${
              userRole === "rto_consultant"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>RTO Agent / Consultant</span>
          </button>
        </div>
      </div>

      {/* Vehicle Slabs Selection */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Select Number of Vehicles
          </label>
          <span className="text-xs font-semibold text-blue-400">
            {currentSlab.tag}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {VEHICLE_SLABS.map((slab) => {
            const isSelected = selectedCount === slab.count;
            return (
              <button
                key={slab.count}
                type="button"
                onClick={() => setSelectedCount(slab.count)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-500/15 text-white ring-2 ring-blue-500/50 scale-[1.02]"
                    : "border-gray-800 bg-gray-900/60 text-gray-400 hover:border-gray-700 hover:bg-gray-800/60"
                }`}
              >
                <span className="text-lg md:text-xl font-bold text-white">
                  {slab.count}{slab.count === 10 ? "+" : ""}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5">
                  {slab.count === 1 ? "Vehicle" : "Vehicles"}
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold mt-1">
                  ₹{slab.pricePerUnit.toLocaleString("en-IN")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Breakdown Card */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/50 p-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <div className="text-xs text-gray-400">
              Total Package for {selectedCount} {selectedCount === 1 ? "Vehicle" : "Vehicles"} in {locationName}
            </div>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-sm line-through text-gray-500">
                ₹{originalTotalPrice.toLocaleString("en-IN")}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save ₹{totalSavings.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="sm:text-right text-xs text-gray-400">
            <span className="text-blue-400 font-semibold">₹{currentSlab.pricePerUnit.toLocaleString("en-IN")}</span> per vehicle
            <span className="block text-[11px] text-gray-500">Includes Hardware + 1-Yr SIM + Portal Sync</span>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-800 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span><strong>1-Hour Express Certificate</strong> (Vahan 4.0 Passing)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span><strong>{miningPortalName || "State Mining Portal"}</strong> Whitelist</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span><strong>Same-Day / 24-48h Doorstep Fitment</strong> in {cityName || locationName}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span><strong>Panic Button & SOS Siren</strong> (ARAI AIS 140 / 004)</span>
          </div>
        </div>
      </div>

      {/* RTO Consultant Alert if selected */}
      {userRole === "rto_consultant" && (
        <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
          <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>RTO Consultant Wholesale Advantage:</strong> You are eligible for bulk dealer credits (₹1,500–₹3,000 margin per client) and direct online certificate issuance. Our partner team will assign your local RTO dealer code immediately.
          </div>
        </div>
      )}

      {/* Quick WhatsApp Quote Form */}
      <form onSubmit={handleWhatsAppQuote} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rajesh Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              WhatsApp Mobile Number <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Vehicle Number(s) (Optional)
            </label>
            <input
              type="text"
              placeholder={rtoCode ? `e.g. ${rtoCode}-AB-1234` : "e.g. RJ14-XX-1234"}
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 uppercase"
            />
          </div>
        </div>

        {errorMessage && (
          <p className="text-xs text-rose-400">{errorMessage}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] text-sm"
          >
            <Zap className="h-4 w-4" />
            <span>
              {isSubmitting ? "Connecting..." : "Get Instant Official Quote on WhatsApp"}
            </span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="tel:+919313200700"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all text-sm"
          >
            <PhoneCall className="h-4 w-4 text-blue-400" />
            <span>Call RTO Desk</span>
          </a>
        </div>

        {submitSuccess && (
          <p className="text-xs text-emerald-400 text-center animate-fade-in">
            ✓ Inquiry recorded! Opening WhatsApp to send your official quotation immediately.
          </p>
        )}
      </form>
    </div>
  );
}
