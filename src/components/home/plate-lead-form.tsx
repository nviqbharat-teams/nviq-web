"use client";

// Home hero lead form. The vehicle-number field is drawn as a blue
// number plate (what our buyers drive), so the first thing a visitor does is type
// the one thing they always know by heart. Saves the inquiry, then opens WhatsApp
// with the request filled in, same flow as QuickLeadForm.
import React, { useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { submitInquiry } from "@/lib/api";
import { Select } from "@/components/ui/select";
import { getRefCode, trackLead } from "@/lib/lead-attribution";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, whatsappHref } from "@/lib/contact";

const FLEET_OPTIONS = ["1", "2–5", "6–10", "11–50", "50+"];

export default function PlateLeadForm({ variant = "card" }: { variant?: "card" | "bar" }) {
  const [vehicleNo, setVehicleNo] = useState("");
  const [fleet, setFleet] = useState("1");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (digits.length !== 10) {
      setError("Enter a 10-digit mobile number so we can send your price.");
      return;
    }
    setError("");
    setLoading(true);
    const vehicles = fleet === "50+" ? 50 : Number(fleet.split("–").pop()) || 1;
    const vno = vehicleNo.trim();
    try {
      await submitInquiry({
        inquiryType: "fleet_inquiry",
        fullName: "Website Visitor",
        email: "",
        phoneNumber: digits,
        businessName: "N/A",
        numberOfVehicles: vehicles,
        message: `Home page price request. Vehicles: ${fleet}.${vno ? ` Vehicle no: ${vno}.` : ""}`,
        productOfInterest: "ais_140_vltd",
        sourceElement: "home_plate_form",
      });
    } catch {
      // WhatsApp still opens below, so the lead is not lost if the API is down.
    } finally {
      setLoading(false);
      setDone(true);
      trackLead("whatsapp_click", "home_plate_form");
      window.open(
        whatsappHref(
          `Hi NViQ, please send today's price for AIS 140 VLTD / GPS.\nVehicles: ${fleet}${vno ? `\nVehicle no: ${vno}` : ""}\nMy number: ${digits}\n(Ref: ${getRefCode()})`
        ),
        "_blank"
      );
    }
  };

  // Travel-site style search bar: one white row of fields with the button at the end.
  if (variant === "bar") {
    // Mobile: each field is its own boxed tile. md+: borderless segments of one pill.
    const cell =
      "flex min-w-0 flex-col justify-center rounded-[12px] border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-left focus-within:border-[#1D5BD8] focus-within:bg-white md:rounded-full md:border-0 md:bg-transparent md:px-5 md:py-3 md:hover:bg-slate-50";
    const label = "text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 md:text-[11px]";
    return (
      <div id="quick-lead" className="scroll-mt-24 w-full text-[#18202E]">
        {done ? (
          <div className="rounded-[20px] bg-white p-5 text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]" role="status">
            <p className="font-semibold text-emerald-800">Request sent. WhatsApp is opening with your details.</p>
            <p className="mt-1 text-sm text-slate-600">
              If it did not open, call us on <a className="font-semibold underline" href={SALES_TEL_HREF}>{SALES_PHONE_DISPLAY}</a>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-2 rounded-[20px] bg-white p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] md:grid-cols-[1.25fr_0.8fr_1.15fr_auto] md:items-stretch md:gap-0 md:rounded-full md:p-2 md:pl-3"
          >
            <label htmlFor="home-vno" className={cell}>
              <span className={label}>Vehicle number</span>
              <input
                id="home-vno"
                type="text"
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                maxLength={13}
                size={1}
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))}
                placeholder="RJ 14 GA 1234"
                className="mt-0.5 w-full min-w-0 bg-transparent font-display text-lg font-bold tracking-[0.04em] md:tracking-[0.06em] placeholder:font-semibold placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <label htmlFor="home-fleet" className={`${cell} md:rounded-none md:border-l md:border-slate-200`}>
              <span className={label}>Vehicles</span>
              <Select
                id="home-fleet"
                bare
                value={fleet}
                onValueChange={setFleet}
                options={FLEET_OPTIONS.map((opt) => ({ value: opt, label: `${opt} ${opt === "1" ? "vehicle" : "vehicles"}` }))}
                className="mt-0.5 text-base font-semibold"
              />
            </label>
            <label htmlFor="home-phone" className={`${cell} col-span-2 md:col-span-1 md:rounded-none md:border-l md:border-slate-200`}>
              <span className={label}>WhatsApp number</span>
              <span className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-base font-semibold text-slate-500">+91</span>
                <input
                  id="home-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={14}
                  size={1}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  aria-invalid={!!error}
                  aria-describedby={error ? "home-phone-error" : undefined}
                  className="w-full min-w-0 bg-transparent text-base font-semibold placeholder:font-normal placeholder:text-slate-400 focus:outline-none"
                />
              </span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="col-span-2 flex h-[52px] items-center justify-center gap-2 rounded-[12px] bg-[#0F8A4B] px-7 text-base font-bold text-white transition-colors hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8] disabled:opacity-70 md:col-span-1 md:h-auto md:rounded-full"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {loading ? "Sending…" : (
                <>
                  <span className="md:hidden">Get price on WhatsApp</span>
                  <span className="hidden md:inline">Get price</span>
                </>
              )}
            </button>
          </form>
        )}
        {error && (
          <p id="home-phone-error" className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-red-700">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div id="quick-lead" className="scroll-mt-24 bg-white p-5 text-[#18202E] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-7">
      <h2 className="font-display text-2xl font-semibold leading-tight">Get today&apos;s price on WhatsApp</h2>
      <p className="mt-1 text-sm text-slate-600">Price depends on how many vehicles you have. Most people get a reply within minutes.</p>

      {done ? (
        <div className="mt-5 border-l-4 border-[#0F8A4B] bg-emerald-50 p-4 text-sm text-emerald-950" role="status">
          <p className="font-semibold">Request sent. WhatsApp is opening with your details.</p>
          <p className="mt-1">If it did not open, call us on <a className="font-semibold underline" href={SALES_TEL_HREF}>{SALES_PHONE_DISPLAY}</a>.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
          <div>
            <label htmlFor="home-vno" className="text-sm font-semibold">
              Vehicle number <span className="font-normal text-slate-500">(optional, we check it on Vahan)</span>
            </label>
            {/* Number plate: blue, white lettering, IND strip on the left */}
            <div className="mt-2 flex h-16 overflow-hidden rounded-[7px] border-[3px] border-[#18202E] bg-[#1D5BD8] focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[#18202E]">
              <span className="flex w-9 shrink-0 flex-col items-center justify-end border-r border-white/30 bg-[#164BB5] pb-1.5 text-[10px] font-bold text-white" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="mb-auto mt-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="10" cy="10" r="7.5" />
                  <circle cx="10" cy="10" r="1.6" fill="currentColor" />
                </svg>
                IND
              </span>
              <input
                id="home-vno"
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                maxLength={13}
                size={1}
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, ""))}
                placeholder="RJ 14 GA 1234"
                className="min-w-0 flex-1 bg-transparent px-3 font-display text-[28px] font-bold tracking-[0.08em] text-white placeholder:text-white/50 focus:outline-none sm:text-[32px]"
              />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold">How many vehicles?</legend>
            <div className="mt-2 grid grid-cols-5 border border-slate-300">
              {FLEET_OPTIONS.map((opt, i) => (
                <label
                  key={opt}
                  className={`relative flex h-11 cursor-pointer items-center justify-center text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-[#1D5BD8] ${
                    i > 0 ? "border-l border-slate-300" : ""
                  } ${fleet === opt ? "bg-[#18202E] text-white" : "bg-white text-slate-700 hover:bg-slate-50"}`}
                >
                  <input type="radio" name="home-fleet" value={opt} checked={fleet === opt} onChange={() => setFleet(opt)} className="sr-only" />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="home-phone" className="text-sm font-semibold">Your mobile / WhatsApp number</label>
            <div className="mt-2 flex h-12 border border-slate-300 focus-within:border-[#1D5BD8] focus-within:ring-2 focus-within:ring-[#1D5BD8]/30">
              <span className="flex items-center border-r border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-slate-600">+91</span>
              <input
                id="home-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={14}
                size={1}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile"
                aria-invalid={!!error}
                aria-describedby={error ? "home-phone-error" : undefined}
                className="min-w-0 flex-1 px-3 text-base focus:outline-none"
              />
            </div>
            {error && (
              <p id="home-phone-error" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-13 w-full items-center justify-center bg-[#0F8A4B] px-5 text-base font-bold text-white transition-colors hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8] disabled:opacity-70"
          >
            {loading ? "Sending…" : "Send me the price on WhatsApp"}
          </button>
        </form>
      )}

      <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <PhoneCall className="h-4 w-4 text-[#1D5BD8]" aria-hidden="true" />
        Prefer to talk?{" "}
        <a href={SALES_TEL_HREF} data-track="home_hero_call" className="font-semibold text-[#1D5BD8] underline-offset-2 hover:underline">
          Call {SALES_PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
