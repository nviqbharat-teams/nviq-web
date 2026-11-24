"use client";

// Lead form for vehicle owners looking for an RTO agent (not for agents joining
// the partner network). Order of questions is deliberate:
//   1. "What do you need done?" - one tap, no typing (small first commitment)
//   2. "How soon?" - lets us call urgent jobs first
//   3. Mobile number - asked last, once they have already invested two taps
// The backend contract is unchanged: service, urgency and RTO travel inside the
// existing message / sourceElement fields of /web/inquiries.
import { useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { submitInquiry } from "@/lib/api";
import { getRefCode, trackLead } from "@/lib/lead-attribution";
import { SALES_TEL_HREF, SALES_PHONE_DISPLAY, whatsappHref } from "@/lib/contact";

export type AgentTask = { slug: string; label: string; vltd?: boolean };

export const AGENT_TASKS: AgentTask[] = [
  { slug: "fitness-certificate", label: "Fitness / passing", vltd: true },
  { slug: "vltd-gps", label: "AIS 140 GPS for passing", vltd: true },
  { slug: "permit", label: "Permit (national, tourist, taxi)", vltd: true },
  { slug: "rc-transfer", label: "RC transfer / ownership" },
  { slug: "noc-other-state", label: "NOC for other state" },
  { slug: "hypothecation-removal", label: "Loan / hypothecation removal" },
  { slug: "commercial-vehicle-registration", label: "New commercial registration", vltd: true },
  { slug: "other", label: "Something else" },
];

const URGENCY = [
  { value: "today", label: "Today, it's urgent" },
  { value: "week", label: "This week" },
  { value: "checking", label: "Just checking cost" },
];

export default function RtoAgentLeadForm({
  place,
  rtoCodes,
  source,
  defaultTask,
}: {
  /** "Fatehpur, Uttar Pradesh" */
  place: string;
  /** "UP-71" or "RJ-14, RJ-45" */
  rtoCodes: string;
  source: string;
  defaultTask?: string;
}) {
  const [task, setTask] = useState(defaultTask ?? "");
  const [urgency, setUrgency] = useState("week");
  const [phone, setPhone] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const chosen = AGENT_TASKS.find((t) => t.slug === task);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chosen) {
      setError("Pick what you need done");
      return;
    }
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setLoading(true);
    const urgent = urgency === "today";
    const urgencyLabel = URGENCY.find((u) => u.value === urgency)?.label ?? urgency;
    const lines = [
      `${urgent ? "[URGENT] " : ""}RTO agent request: ${chosen.label}`,
      `Place: ${place} (${rtoCodes})`,
      `When: ${urgencyLabel}`,
      vehicleNo && `Vehicle no: ${vehicleNo}`,
      note && `Note: ${note}`,
    ].filter(Boolean);
    try {
      await submitInquiry({
        inquiryType: "product_inquiry",
        fullName: "Website Visitor",
        email: "",
        phoneNumber: digits,
        businessName: "N/A",
        numberOfVehicles: 1,
        message: lines.join(" | "),
        productOfInterest: chosen.vltd ? "ais_140_vltd" : "general",
        sourceElement: `${source}_${chosen.slug}${urgent ? "_urgent" : ""}`,
      });
    } finally {
      setLoading(false);
      setDone(true);
      trackLead("whatsapp_click", `${source}_form`);
      window.open(
        whatsappHref(`Hi NViQ, I need an RTO agent in ${place}.\n${lines.join("\n")}\nMy number: ${digits}\n(Ref: ${getRefCode()})`),
        "_blank"
      );
    }
  };

  const field =
    "mt-1.5 h-12 w-full border border-slate-300 bg-white px-3 text-base focus:border-[#1D5BD8] focus:outline-none focus:ring-2 focus:ring-[#1D5BD8]/30";

  return (
    <div className="bg-white p-5 text-[#18202E] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:p-7">
      <h2 className="font-display text-2xl font-semibold leading-tight">What do you need done?</h2>
      <p className="mt-1 text-sm text-slate-600">Pick one. We call you back with the total cost and the documents needed.</p>

      {done ? (
        <div className="mt-5 border-l-4 border-[#0F8A4B] bg-emerald-50 p-4 text-sm text-emerald-950" role="status">
          <p className="font-semibold">✓ Request received. WhatsApp is opening.</p>
          <p className="mt-1">
            {urgency === "today" ? "Marked urgent: we call you first." : "We reply on WhatsApp shortly."} In a hurry? Call{" "}
            <a href={SALES_TEL_HREF} className="font-semibold underline">
              {SALES_PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-5">
          <fieldset>
            <legend className="sr-only">Work needed</legend>
            <div className="grid grid-cols-2 gap-2">
              {AGENT_TASKS.map((t) => (
                <label
                  key={t.slug}
                  className={`flex min-h-12 cursor-pointer items-center border px-3 py-2 text-sm font-semibold leading-snug has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#1D5BD8] ${
                    task === t.slug ? "border-[#18202E] bg-[#18202E] text-white" : "border-slate-300 hover:border-[#1D5BD8]"
                  }`}
                >
                  <input type="radio" name="task" value={t.slug} checked={task === t.slug} onChange={() => setTask(t.slug)} className="sr-only" />
                  {t.label}
                </label>
              ))}
            </div>
          </fieldset>

          {task === "other" && (
            <label className="block">
              <span className="text-sm font-semibold">Tell us the work</span>
              <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. duplicate RC, address change" className={field} />
            </label>
          )}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold">How soon?</span>
              <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className={field}>
                {URGENCY.map((u) => (
                  <option key={u.value} value={u.value}>
                    {u.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Mobile / WhatsApp *</span>
              <input
                type="tel"
                inputMode="numeric"
                required
                autoComplete="tel"
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={field}
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-slate-600">Vehicle number (optional, lets us check Vahan first)</span>
            <input
              type="text"
              placeholder={`e.g. ${rtoCodes.split(",")[0].replace("-", "")} AB 1234`}
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
              className={`${field} uppercase`}
            />
          </label>

          {error && <p className="text-sm font-medium text-red-700">{error}</p>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="flex min-h-13 w-full items-center justify-center gap-2 bg-[#0F8A4B] px-5 py-3 text-base font-bold text-white hover:bg-[#0B7440] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8] disabled:opacity-70 sm:flex-1"
            >
              {loading ? "Sending…" : "Get a call back"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={SALES_TEL_HREF}
              data-track={`${source}_form_call`}
              className="flex min-h-13 w-full items-center justify-center gap-2 border border-slate-300 bg-white px-5 py-3 text-base font-semibold hover:bg-slate-50 sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-[#1D5BD8]" aria-hidden="true" />
              Call now
            </a>
          </div>
          <p className="text-xs text-slate-500">Free to ask. You get the total cost before any work starts.</p>
        </form>
      )}
    </div>
  );
}
