"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { submitInquiry, trackEvent } from "@/lib/api";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", fleet: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    trackEvent("form_view", "contact-page-load", "Loaded Contact Us page");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    let fleetSizeNum = 0;
    if (form.fleet) {
      if (form.fleet === "1-5") fleetSizeNum = 5;
      else if (form.fleet === "6-20") fleetSizeNum = 20;
      else if (form.fleet === "21-50") fleetSizeNum = 50;
      else if (form.fleet === "51-200") fleetSizeNum = 200;
      else if (form.fleet === "200+") fleetSizeNum = 250;
    }

    const payload = {
      inquiryType: "contact_us" as const,
      fullName: form.name.trim(),
      email: form.email.trim(),
      phoneNumber: form.phone.trim(),
      message: form.message.trim() || "No additional message.",
      fleetSize: fleetSizeNum,
      sourceElement: "contact-form",
      productOfInterest: "general",
    };

    const res = await submitInquiry(payload);
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      trackEvent("form_submit", "contact-us-submit", "Submitted Contact Us form successfully");
      setForm({ name: "", phone: "", email: "", fleet: "", message: "" });
    } else {
      setErrorMsg(res.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-white font-sans">
      <main>
        {/* CONTACT GRID */}
        <section className="py-20 px-6 md:py-28 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-stretch">

            {/* Left Column: Blue Gradient Card */}
            <div className="order-2 lg:order-1 w-full bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 border border-blue-700 p-8 md:p-10 flex flex-col justify-between min-h-[580px] rounded-none shadow-[6px_6px_0px_0px_rgba(37,99,235,0.15)] text-white">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-8">
                  Get in touch
                </h2>

                <div className="flex flex-col gap-8">
                  {/* Item 1: Visit us */}
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2 text-blue-200">
                      Visit us
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-1">
                      Come say hello at our office HQ.
                    </p>
                    <a
                      href="https://maps.google.com/?q=NViQ+Technologies+Pvt.+Ltd.+Malakhera+Jamalpur+301406"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
                    >
                      NViQ Technologies Pvt. Ltd. Malakhera Jamalpur 301406, Alwar, Rajasthan, India
                    </a>
                  </div>

                  {/* Item 2: Chat to us */}
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2 text-blue-200">
                      Chat to us
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-1">
                      Our friendly team is here to help.
                    </p>
                    <a
                      href="mailto:naviqbharat@gmail.com"
                      className="text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
                    >
                      naviqbharat@gmail.com
                    </a>
                  </div>

                  {/* Item 3: Call us */}
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2 text-blue-200">
                      Call us
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-1">
                      Mon–Sat, 9 AM–7 PM IST
                    </p>
                    <a
                      href="tel:+918529245390"
                      className="text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors"
                    >
                      +91 85292 45390
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="order-1 lg:order-2 bg-white border border-slate-200/60 rounded-none p-8 md:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-center">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-[72px] h-[72px] bg-emerald-50 border-2 border-emerald-500 rounded-none flex items-center justify-center text-emerald-500 mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2.5 tracking-tight">
                    We&apos;ve Got Your Message!
                  </h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed max-w-[360px]">
                    Our team will reach out to you within 24-48 hours on your phone number or email.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2.5 text-[15px] font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-none px-8 py-4 cursor-pointer transition-all duration-200 shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)]"
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", fleet: "", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-slate-500 leading-normal">
                      We&apos;ll reply within 24-48 hours during business days.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 text-sm font-semibold text-rose-600 bg-rose-50 border border-rose-100 rounded-none">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-slate-900 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-slate-400"
                      placeholder="Ramesh Kumar"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-slate-900 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-slate-400"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-slate-900 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-slate-400"
                      placeholder="you@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-fleet" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Fleet Size
                    </label>
                    <div className="relative">
                      <select
                        id="contact-fleet"
                        name="fleet"
                        className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-slate-900 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-slate-400 appearance-none pr-10 cursor-pointer"
                        value={form.fleet}
                        onChange={handleChange}
                      >
                        <option value="">Select fleet size</option>
                        <option value="1-5">1–5 vehicles</option>
                        <option value="6-20">6–20 vehicles</option>
                        <option value="21-50">21–50 vehicles</option>
                        <option value="51-200">51–200 vehicles</option>
                        <option value="200+">200+ vehicles</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="w-full px-4 py-3 border border-slate-200 rounded-none bg-white text-slate-900 text-[15px] outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder-slate-400 resize-y min-h-[110px]"
                      placeholder="Tell us about your fleet or ask us anything..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-3 mt-1">
                    <input
                      id="contact-consent"
                      name="consent"
                      type="checkbox"
                      className="mt-1 w-4 h-4 border border-slate-300 rounded-none bg-white text-blue-600 focus:ring-0 cursor-pointer accent-blue-600"
                      required
                    />
                    <label htmlFor="contact-consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                      I agree to receive more operational notifications and agree to the{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full justify-center inline-flex items-center gap-2.5 text-[15px] font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-none px-8 py-4 cursor-pointer transition-all duration-200 shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
