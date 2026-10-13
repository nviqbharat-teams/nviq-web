"use client";

import React, { useState } from "react";
import { submitRtoPartnerLead, trackEvent } from "@/lib/api";
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Loader2 } from "lucide-react";

interface RtoPartnerFormProps {
  defaultRtoCode?: string;
  defaultLocationName?: string;
  title?: string;
  subtitle?: string;
}

export default function RtoPartnerForm({
  defaultRtoCode = "",
  defaultLocationName = "",
  title,
  subtitle,
}: RtoPartnerFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const headingTitle =
    title ||
    (defaultLocationName
      ? `Apply for ${defaultLocationName} Dealership`
      : defaultRtoCode
      ? `Apply for ${defaultRtoCode} Dealership`
      : "Apply for Partner Dealership");

  const headingSubtitle =
    subtitle || "Receive your broker portal credentials within 30 minutes.";

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

    if (!name.trim()) {
      setLoading(false);
      setErrorMsg("Please enter your full name.");
      return;
    }

    const assignedRto = defaultRtoCode || defaultLocationName || "";

    const res = await submitRtoPartnerLead({
      fullName: name.trim(),
      phone: cleanPhone,
      primaryRtoCode: assignedRto || undefined,
      sourceElement: "rto-partner-landing-form",
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      trackEvent(
        "form_submit",
        "rto-partner-apply",
        `RTO application: ${name.trim()} (${cleanPhone}${assignedRto ? `, ${assignedRto}` : ""})`
      );
    } else {
      setErrorMsg(res.message || "Failed to submit application. Please try again or contact us via WhatsApp.");
    }
  };

  if (submitted) {
    const assignedRto = defaultRtoCode || defaultLocationName || "";
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 text-center shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 mb-4">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          Application Received
        </span>
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          Welcome to NViQ Partner Network
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-gray-900">{name}</strong>. Our regional partnerships manager is reviewing your territory{assignedRto ? ` (${assignedRto})` : ""} and will call you at <strong className="text-gray-900">+91 {phone.replace(/\D/g, "").slice(-10)}</strong> within <span className="text-gray-900 font-semibold">2 hours</span>.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919694551326?text=${encodeURIComponent(`Hi NViQ Team, I just submitted an RTO Partner application for ${name.trim()} (${phone.replace(/\D/g, "").slice(-10)})${assignedRto ? ` in RTO zone: ${assignedRto}` : ""}. Please expedite my partner portal access.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors text-xs sm:text-sm cursor-pointer"
          >
            <span>Fast-Track on WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+919694551326"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-xs sm:text-sm"
          >
            <PhoneCall className="h-4 w-4 text-gray-500" />
            <span>Call Partner Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
      <div className="mb-5 pb-4 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          {headingTitle}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
          {headingSubtitle}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-xs sm:text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rajesh Sharma"
            className="w-full rounded-xl bg-white border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
            WhatsApp / Mobile Number <span className="text-blue-600">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-sm text-gray-400 font-medium select-none">
              +91
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={10}
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              placeholder="10-digit mobile number"
              className="w-full rounded-xl bg-white border border-gray-200 pl-12 pr-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50"
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

        <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-gray-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Zero Lock-In • 100% Confidential • Fast Callback</span>
        </div>
      </form>
    </div>
  );
}
