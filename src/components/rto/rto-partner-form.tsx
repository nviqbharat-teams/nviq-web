"use client";

import React, { useState } from "react";
import { submitRtoPartnerLead, trackEvent } from "@/lib/api";
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Loader2, Sparkles } from "lucide-react";

interface RtoPartnerFormProps {
  defaultRtoCode?: string;
  defaultLocationName?: string;
}

export default function RtoPartnerForm({
  defaultRtoCode = "",
  defaultLocationName = "",
}: RtoPartnerFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    rtoCode: defaultRtoCode || defaultLocationName || "",
    monthlyVolume: "11-30",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let fleetSizeNum = 20;
    if (form.monthlyVolume === "1-10") fleetSizeNum = 10;
    else if (form.monthlyVolume === "11-30") fleetSizeNum = 30;
    else if (form.monthlyVolume === "31-75") fleetSizeNum = 75;
    else if (form.monthlyVolume === "75+") fleetSizeNum = 100;

    const cleanPhone = form.phone.replace(/\D/g, "").slice(-10);
    if (cleanPhone.length !== 10) {
      setLoading(false);
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const res = await submitRtoPartnerLead({
      fullName: form.name.trim(),
      phone: cleanPhone,
      email: form.email.trim() || undefined,
      businessName: form.businessName.trim() || undefined,
      primaryRtoCode: form.rtoCode.trim(),
      monthlyPassingVolume: form.monthlyVolume as any,
      estimatedFleetSize: fleetSizeNum,
      message: form.message.trim() || undefined,
      sourceElement: "rto-partner-landing-form",
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      trackEvent(
        "form_submit",
        "rto-partner-apply",
        `RTO application: ${form.name.trim()} (${form.rtoCode})`
      );
    } else {
      setErrorMsg(res.message || "Failed to submit application. Please try again or contact us via WhatsApp.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 mb-5">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          Application Received
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          Welcome to the NViQ Partner Network
        </h3>
        <p className="mt-3 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-gray-900">{form.name}</strong>. Our regional RTO partnerships manager is reviewing your territory (<span className="text-blue-700 font-semibold">{form.rtoCode || "your RTO zone"}</span>) and will activate your dealer account within <span className="text-gray-900 font-semibold">2 hours</span>.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919313200700?text=${encodeURIComponent(`Hi NViQ Team, I just submitted an RTO Partner application for ${form.name} in RTO zone: ${form.rtoCode}. Please expedite my partner portal access.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors text-sm cursor-pointer"
          >
            <span>Fast-Track on WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+919694551326"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-sm"
          >
            <PhoneCall className="h-4 w-4 text-gray-500" />
            <span>Call Partner Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            <Sparkles className="h-3 w-3" /> Dealer Onboarding
          </span>
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            Apply for RTO Partner Dealership
          </h3>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
        Zero upfront inventory lock-in. Get direct mobile certificate issuance access upon agency verification, with priority doorstep technician support.
      </p>

      {errorMsg && (
        <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-3.5 text-xs sm:text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Full Name <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Sharma"
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
              WhatsApp / Phone <span className="text-blue-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9+\s-]{10,16}"
              title="Please enter a valid 10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="businessName" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Consultancy / Agency Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="e.g. Sharma RTO Consultancy"
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="rtoCode" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Primary RTO Code / City <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="rtoCode"
              name="rtoCode"
              required
              value={form.rtoCode}
              onChange={handleChange}
              placeholder="e.g. RJ-14 Jaipur, MP-04 Bhopal"
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="partner@example.com"
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="monthlyVolume" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Estimated Monthly Passing Volume
            </label>
            <select
              id="monthlyVolume"
              name="monthlyVolume"
              value={form.monthlyVolume}
              onChange={handleChange}
              className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            >
              <option value="1-10">1 – 10 Vehicles / month</option>
              <option value="11-30">11 – 30 Vehicles / month</option>
              <option value="31-75">31 – 75 Vehicles / month</option>
              <option value="75+">75+ Vehicles (Super Distributor)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Any Specific Requirements or Questions?
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            value={form.message}
            onChange={handleChange}
            placeholder="e.g. Need technician coverage in transport nagar, dumper fitments..."
            className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <span>Apply for Partner Dealership</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-gray-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Zero Lock-In • 100% Confidential • Fast Callback</span>
        </div>
      </form>
    </div>
  );
}
