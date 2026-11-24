"use client";

// 2-field lead form (mobile + vehicle number/count). Saves the inquiry, then opens
// WhatsApp with the request so sales can reply with the price immediately.
import React, { useState } from "react";
import { ArrowRight, PhoneCall, Lock } from "lucide-react";
import { submitInquiry } from "@/lib/api";
import { Select } from "@/components/ui/select";
import { getRefCode, trackLead } from "@/lib/lead-attribution";
import { SALES_TEL_HREF, whatsappHref } from "@/lib/contact";

interface QuickLeadFormProps {
  /** What the visitor wants, e.g. "School Bus GPS in Rajasthan" or "Fitness Certificate in Jaipur" */
  topic: string;
  /** Stored as sourceElement on the inquiry */
  source: string;
  productOfInterest?: "ais_140_vltd" | "gps_fleet_tracking" | "general";
  heading?: string;
  subheading?: string;
  /** Hindi labels for /hi pages */
  lang?: "en" | "hi";
  /** "kit": square white card for the navy landing-page heroes */
  variant?: "card" | "kit";
}

const LABELS = {
  en: {
    heading: "Get today's price on WhatsApp",
    sub: "Price depends on vehicle count. Share your number and we send your exact price within minutes.",
    phone: "Mobile / WhatsApp number *",
    phonePh: "10-digit mobile",
    fleet: "How many vehicles?",
    one: "vehicle",
    many: "vehicles",
    vno: "Vehicle number (optional, helps us check Vahan)",
    submit: "Unlock My Price on WhatsApp",
    sending: "Sending…",
    call: "Call for Price",
    done: "✓ Request received. WhatsApp is opening: your price is on the way.",
    invalid: "Please enter a valid 10-digit mobile number",
  },
  hi: {
    heading: "आज का रेट WhatsApp पर पाएं",
    sub: "रेट गाड़ियों की संख्या पर निर्भर है। अपना नंबर दें, कुछ ही मिनट में आपका सही रेट भेजेंगे।",
    phone: "मोबाइल / WhatsApp नंबर *",
    phonePh: "10 अंकों का मोबाइल नंबर",
    fleet: "कितनी गाड़ियां?",
    one: "गाड़ी",
    many: "गाड़ियां",
    vno: "गाड़ी नंबर (वैकल्पिक, Vahan चेक करने में मदद)",
    submit: "WhatsApp पर मेरा रेट पाएं",
    sending: "भेज रहे हैं…",
    call: "रेट के लिए कॉल करें",
    done: "✓ रिक्वेस्ट मिल गई। WhatsApp खुल रहा है: आपका रेट आ रहा है।",
    invalid: "कृपया सही 10 अंकों का मोबाइल नंबर डालें",
  },
} as const;

const FLEET_OPTIONS = ["1", "2–5", "6–10", "11–50", "50+"];

export default function QuickLeadForm({
  topic,
  source,
  productOfInterest = "ais_140_vltd",
  heading,
  subheading,
  lang = "en",
  variant = "card",
}: QuickLeadFormProps) {
  const L = LABELS[lang];
  const K = variant === "kit";
  const field = K
    ? "mt-1.5 h-12 w-full border border-slate-300 bg-white px-3 text-base focus:border-[#1D5BD8] focus:outline-none focus:ring-2 focus:ring-[#1D5BD8]/30"
    : "mt-1 w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";
  const [phone, setPhone] = useState("");
  const [fleet, setFleet] = useState("1");
  const [vehicleNo, setVehicleNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (digits.length !== 10) {
      setError(L.invalid);
      return;
    }
    setError("");
    setLoading(true);
    const vehicles = fleet === "50+" ? 50 : Number(fleet.split("–").pop()) || 1;
    try {
      await submitInquiry({
        inquiryType: "fleet_inquiry",
        fullName: "Website Visitor",
        email: "",
        phoneNumber: digits,
        businessName: "N/A",
        numberOfVehicles: vehicles,
        message: `${topic}. Vehicles: ${fleet}.${vehicleNo ? ` Vehicle no: ${vehicleNo}.` : ""}`,
        productOfInterest,
        sourceElement: source,
      });
    } finally {
      setLoading(false);
      setDone(true);
      trackLead("whatsapp_click", `${source}_form`);
      window.open(
        whatsappHref(
          `Hi NViQ, please send today's price for ${topic}.\nVehicles: ${fleet}${vehicleNo ? `\nVehicle no: ${vehicleNo}` : ""}\nMy number: ${digits}\n(Ref: ${getRefCode()})`
        ),
        "_blank"
      );
    }
  };

  return (
    <div className={K ? "bg-white p-5 text-[#18202E] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-7" : "rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50/70 to-white p-6 shadow-sm"}>
      {K ? (
        <h2 className="font-display text-2xl font-semibold leading-tight">{heading ?? L.heading}</h2>
      ) : (
        <div className="flex items-center gap-2 text-emerald-800">
          <Lock className="h-4 w-4" />
          <h2 className="text-lg font-black">{heading ?? L.heading}</h2>
        </div>
      )}
      <p className={K ? "mt-1 text-sm text-slate-600" : "mt-1 text-sm text-gray-600"}>{subheading ?? L.sub}</p>

      {done ? (
        <p className={K ? "mt-5 border-l-4 border-[#0F8A4B] bg-emerald-50 p-4 text-sm font-semibold text-emerald-950" : "mt-4 rounded-xl bg-emerald-100 p-4 text-sm font-semibold text-emerald-900"} role="status">
          {L.done}
        </p>
      ) : (
        <form onSubmit={onSubmit} className={K ? "mt-5 space-y-4" : "mt-4 space-y-3"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className={K ? "text-sm font-semibold" : "text-xs font-semibold text-gray-700"}>{L.phone}</span>
              <input
                type="tel"
                inputMode="numeric"
                required
                autoComplete="tel"
                placeholder={L.phonePh}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={field}
              />
            </label>
            <label className="block">
              <span className={K ? "text-sm font-semibold" : "text-xs font-semibold text-gray-700"}>{L.fleet}</span>
              <Select
                aria-label={L.fleet}
                value={fleet}
                onValueChange={setFleet}
                options={FLEET_OPTIONS.map((o) => ({ value: o, label: `${o} ${o === "1" ? L.one : L.many}` }))}
                className={field}
              />
            </label>
          </div>
          <label className="block">
            <span className={K ? "text-sm text-slate-600" : "text-xs text-gray-500"}>{L.vno}</span>
            <input
              type="text"
              placeholder="e.g. RJ14 AB 1234"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
              className={K ? `${field} uppercase` : "mt-1 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm uppercase focus:border-emerald-500 focus:outline-none"}
            />
          </label>
          {error && <p className={K ? "text-sm font-medium text-red-700" : "text-xs font-semibold text-rose-600"}>{error}</p>}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={loading}
              className={K ? "flex min-h-13 w-full sm:w-auto sm:flex-1 items-center justify-center gap-2 bg-[#0F8A4B] px-5 py-3 text-center text-base font-bold text-white hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8] disabled:opacity-70" : "w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 disabled:opacity-70"}
            >
              {loading ? L.sending : L.submit}
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={SALES_TEL_HREF}
              className={K ? "flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-[#18202E] hover:bg-slate-50" : "inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"}
            >
              <PhoneCall className="h-4 w-4 text-blue-600" />
              {L.call}
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
