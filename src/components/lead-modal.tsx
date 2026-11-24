"use client";

import React, { useEffect, useId, useState } from "react";
import { SALES_PHONE_DISPLAY } from "@/lib/contact";
import { submitInquiry, trackEvent } from "@/lib/api";
import { Select } from "@/components/ui/select";

export type LeadPlan = "starter" | "professional" | "enterprise";

const FLEET_SIZE_OPTIONS = [
  { value: "1-5", label: "1–5 vehicles" },
  { value: "6-15", label: "6–15 vehicles" },
  { value: "16-50", label: "16–50 vehicles" },
  { value: "51-100", label: "51–100 vehicles" },
  { value: "100+", label: "100+ vehicles" },
] as const;

const PLAN_LABELS: Record<LeadPlan, string> = {
  starter: "Starter",
  professional: "Professional",
  enterprise: "Enterprise",
};

const PLAN_CTA: Record<LeadPlan, string> = {
  starter: "Activate Starter Plan",
  professional: "Activate Professional Plan",
  enterprise: "Request Enterprise Demo",
};

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  fleetSize: "",
  requirement: "",
};

type LeadModalProps = {
  open: boolean;
  plan: LeadPlan;
  onClose: () => void;
};

export function LeadModal({ open, plan, onClose }: LeadModalProps) {
  const titleId = useId();
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (open) {
      trackEvent("form_view", `lead-modal-open-${plan}`, `Opened lead modal for plan: ${plan}`);
    }
  }, [open, plan]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm(EMPTY_FORM);
        setSubmitted(false);
        setLoading(false);
        setErrorMsg("");
      }, 0);
    }
  }, [open]);

  if (!open) return null;

  const updateField = (field: keyof typeof EMPTY_FORM, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let numberOfVehicles = 0;
    if (form.fleetSize) {
      if (form.fleetSize === "1-5") numberOfVehicles = 5;
      else if (form.fleetSize === "6-15") numberOfVehicles = 15;
      else if (form.fleetSize === "16-50") numberOfVehicles = 50;
      else if (form.fleetSize === "51-100") numberOfVehicles = 100;
      else if (form.fleetSize === "100+") numberOfVehicles = 150;
    }

    const payload = {
      inquiryType: "fleet_inquiry" as const,
      fullName: form.fullName.trim() || "Website Visitor",
      email: form.email.trim(),
      phoneNumber: form.phone.trim(),
      message: form.requirement.trim() || "Quick lead: call back with price.",
      businessName: form.company.trim() || "N/A",
      numberOfVehicles,
      sourceElement: `lead-modal-${plan}`,
      productOfInterest: "gps_fleet_tracking",
    };

    const res = await submitInquiry(payload);
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      trackEvent("form_submit", `lead-modal-submit-${plan}`, `Submitted lead modal for plan: ${plan}`);
    } else {
      setErrorMsg(res.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="lead-modal" role="presentation">
      <button
        type="button"
        className="lead-modal__backdrop"
        aria-label="Close form"
        onClick={onClose}
      />

      <div
        className="lead-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="lead-modal__drawer-handle" aria-hidden="true" />

        <div className="lead-modal__header">
          <div className="lead-modal__header-copy">
            <p className="lead-modal__eyebrow">{PLAN_LABELS[plan]} plan</p>
            <h2 id={titleId} className="lead-modal__title">
              Start Your Data-Driven Fleet Setup
            </h2>
            <p className="lead-modal__subtitle">
              Tell us about your fleet and we&apos;ll get your trial activated with free installation.
            </p>
          </div>
          <button
            type="button"
            className="lead-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="lead-modal__success" role="status">
            <p className="lead-modal__success-title">Request received</p>
            <p className="lead-modal__success-text">
              Our team will call you shortly with your {PLAN_LABELS[plan].toLowerCase()} price. Need it right now? Call or WhatsApp {SALES_PHONE_DISPLAY}.
            </p>
            <button type="button" className="lead-modal__submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="lead-modal__form" onSubmit={handleSubmit}>
            <div className="lead-modal__fields">
              <div className="lead-modal__field">
                <label htmlFor="lead-full-name" className="lead-modal__label">Your Name (optional)</label>
                <input
                  id="lead-full-name"
                  type="text"
                  autoComplete="name"
                  className="lead-modal__input"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </div>

              <div className="lead-modal__field">
                <label htmlFor="lead-phone" className="lead-modal__label">Mobile / WhatsApp Number *</label>
                <input
                  id="lead-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="lead-modal__input"
                  inputMode="numeric"
                  pattern="[0-9+ ]{10,15}"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>

              <div className="lead-modal__field lead-modal__field--full">
                <label htmlFor="lead-fleet-size" className="lead-modal__label">Number of Vehicles</label>
                <Select
                  id="lead-fleet-size"
                  name="fleetSize"
                  required
                  options={FLEET_SIZE_OPTIONS}
                  placeholder="Select fleet size"
                  value={form.fleetSize}
                  onValueChange={(value) => updateField("fleetSize", value)}
                  className="h-11 rounded-none border-[#d4d4dc]"
                />
              </div>

            </div>

            {errorMsg && (
              <p className="text-sm font-semibold text-rose-600 my-3 bg-rose-50 border border-rose-100 p-3 text-center">
                {errorMsg}
              </p>
            )}

            <button type="submit" className="lead-modal__submit" disabled={loading}>
              {loading ? "Activating Plan..." : PLAN_CTA[plan]}
              {!loading && <span aria-hidden="true">→</span>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
