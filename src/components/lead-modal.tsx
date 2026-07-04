"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { submitInquiry, trackEvent } from "@/lib/api";

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

type FleetSizeSelectProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

function FleetSizeSelect({ id, value, onChange }: FleetSizeSelectProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedLabel = FLEET_SIZE_OPTIONS.find((option) => option.value === value)?.label;

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <div
      ref={rootRef}
      className={`lead-modal__dropdown${menuOpen ? " lead-modal__dropdown--open" : ""}`}
    >
      <button
        type="button"
        id={id}
        className={`lead-modal__dropdown-trigger${!value ? " lead-modal__dropdown-trigger--placeholder" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{selectedLabel ?? "Select fleet size"}</span>
        <span className="lead-modal__dropdown-chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6l4 4 4-4" />
          </svg>
        </span>
      </button>

      {menuOpen && (
        <ul className="lead-modal__dropdown-menu" role="listbox" aria-labelledby={id}>
          {FLEET_SIZE_OPTIONS.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                className={`lead-modal__dropdown-option${value === option.value ? " lead-modal__dropdown-option--active" : ""}`}
                onClick={() => {
                  onChange(option.value);
                  setMenuOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <select
        className="lead-modal__select-native"
        tabIndex={-1}
        aria-hidden="true"
        value={value}
        required
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" disabled>
          Select fleet size
        </option>
        {FLEET_SIZE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

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
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phoneNumber: form.phone.trim(),
      message: form.requirement.trim() || "No additional requirements.",
      businessName: form.company.trim(),
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
              Our team will contact you within one business day to confirm your {PLAN_LABELS[plan].toLowerCase()} setup.
            </p>
            <button type="button" className="lead-modal__submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="lead-modal__form" onSubmit={handleSubmit}>
            <div className="lead-modal__fields">
              <div className="lead-modal__field">
                <label htmlFor="lead-full-name" className="lead-modal__label">Full Name</label>
                <input
                  id="lead-full-name"
                  type="text"
                  required
                  autoComplete="name"
                  className="lead-modal__input"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </div>

              <div className="lead-modal__field">
                <label htmlFor="lead-phone" className="lead-modal__label">Phone Number</label>
                <input
                  id="lead-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="lead-modal__input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>

              <div className="lead-modal__field">
                <label htmlFor="lead-email" className="lead-modal__label">Email Address</label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  autoComplete="email"
                  className="lead-modal__input"
                  placeholder="you@gmail.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>

              <div className="lead-modal__field">
                <label htmlFor="lead-company" className="lead-modal__label">Company / Business Name</label>
                <input
                  id="lead-company"
                  type="text"
                  required
                  autoComplete="organization"
                  className="lead-modal__input"
                  placeholder="e.g. RoadLink Logistics Pvt. Ltd."
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
              </div>

              <div className="lead-modal__field lead-modal__field--full">
                <label htmlFor="lead-fleet-size" className="lead-modal__label">Number of Vehicles</label>
                <FleetSizeSelect
                  id="lead-fleet-size"
                  value={form.fleetSize}
                  onChange={(value) => updateField("fleetSize", value)}
                />
              </div>

              <div className="lead-modal__field lead-modal__field--full">
                <label htmlFor="lead-requirement" className="lead-modal__label">Tracking Requirement</label>
                <textarea
                  id="lead-requirement"
                  rows={4}
                  className="lead-modal__textarea"
                  placeholder="Tell us about your fleet tracking needs..."
                  value={form.requirement}
                  onChange={(e) => updateField("requirement", e.target.value)}
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
