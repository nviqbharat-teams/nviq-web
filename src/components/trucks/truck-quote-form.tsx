"use client";

import React, { useState } from "react";
import { submitInquiry, trackEvent } from "@/lib/api";
import { Smartphone, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface TruckQuoteFormProps {
  defaultLocation?: string;
  defaultCategory?: string;
}

export default function TruckQuoteForm({
  defaultLocation = "",
  defaultCategory = "",
}: TruckQuoteFormProps) {
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState(defaultCategory || "Marble Trolla / Trailer");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    if (cleanPhone.length !== 10) {
      setLoading(false);
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const res = await submitInquiry({
      inquiryType: "fleet_inquiry",
      fullName: "Truck Transporter / Fleet Owner",
      email: "fleet-lead@nviq.in",
      phoneNumber: cleanPhone,
      message: `Quick quote request for ${vehicleType} in ${defaultLocation || "Rajasthan"}`,
      productOfInterest: "ais_140_vltd",
      sourceElement: "truck_hero_quick_quote",
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      trackEvent("form_submit", "truck_quick_quote", `${defaultLocation || "rajasthan"}_${vehicleType}`);
    } else {
      setErrorMsg(res.message || "Something went wrong. Please call or WhatsApp us.");
    }
  };

  const whatsappUrl = `https://wa.me/919694551326?text=${encodeURIComponent(
    `Hi NViQ, I need AIS 140 VLTD fitment & certificate for ${vehicleType} in ${defaultLocation || "Rajasthan"}. Please share price & fitment time.`
  )}`;

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Request Received</h3>
        <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
          Our field technician will call you within 15 minutes with exact pricing and fitment slot for {defaultLocation || "your location"}.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors w-full"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          Get Instant Fitment Quote
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Doorstep fitment &amp; 60-min Vahan 4.0 certificate {defaultLocation ? `at ${defaultLocation}` : ""}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {errorMsg && (
          <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
            {errorMsg}
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">+91</span>
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
          >
            <option value="Marble Trolla / Trailer">Marble Trolla / Trailer (मार्बल ट्रॉला)</option>
            <option value="Mining Dumper / Tipper">Mining Dumper / Tipper (डंपर)</option>
            <option value="Bajri Sand Truck">Bajri / Sand Truck (बजरी ट्रक)</option>
            <option value="Cement Bulker">Cement Bulker (सीमेंट बल्कर)</option>
            <option value="Stone Crusher Tipper">Stone Crusher Tipper (गिट्टी डंपर)</option>
            <option value="Petroleum / Chemical Tanker">Petroleum / Chemical Tanker</option>
            <option value="Commercial Bus / Sleeper Coach">Commercial Bus / Coach</option>
            <option value="Other Commercial Vehicle">Other Commercial Vehicle</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2 shadow-xs disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Checking Slots...</span>
            </>
          ) : (
            <>
              <span>Get Price &amp; Fitment Slot</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="pt-2 text-center">
          <span className="text-[11px] text-gray-400 block mb-1.5">or connect directly with dispatch:</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 py-1.5 px-3 rounded-lg w-full transition-colors"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp (9694551326)</span>
          </a>
        </div>
      </form>
    </div>
  );
}
