"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import logoImg from "@/app/logo.jpeg";
import { subscribeNewsletter, trackEvent } from "@/lib/api";
import { useIsApp } from "@/context/is-app-context";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF, SUPPORT_PHONE_DISPLAY, SUPPORT_TEL_HREF } from "@/lib/contact";
import { pageWhatsappHref } from "@/lib/nav-context";

// Links grouped by what a visitor is looking for, not one long list.
const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/vltd", label: "AIS 140 VLTD fitment" },
      { href: "/gps-tracking", label: "GPS tracking" },
      { href: "/rto-services", label: "RTO services" },
      { href: "/rto-services/fitness-certificate", label: "Fitness certificate" },
      { href: "/truck-passing/rajasthan", label: "Rajasthan truck passing" },
      { href: "/trucks", label: "Truck fleet GPS" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "By vehicle",
    links: [
      { href: "/gps-tracking/truck-transporter", label: "Trucks" },
      { href: "/gps-tracking/school-bus", label: "School buses & vans" },
      { href: "/gps-tracking/bus-operator", label: "Buses" },
      { href: "/gps-tracking/taxi-cab", label: "Taxis & cabs" },
      { href: "/gps-tracking/mining-tipper", label: "Mining dumpers & tippers" },
      { href: "/gps-tracking/vehicle-dealer", label: "Vehicle dealers" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { href: "/tools/ais-140-checker", label: "Does my vehicle need VLTD?" },
      { href: "/tools/fitness-checklist", label: "Fitness checklist" },
      { href: "/tools/vltd-price", label: "Get today's price" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About NViQ" },
      { href: "/contact", label: "Contact us" },
      { href: "/faq", label: "FAQ" },
      { href: "/rto-partner", label: "Become an RTO partner" },
      { href: "/partner-badge", label: "Partner badge" },
      { href: "/hi", label: "हिंदी में देखें" },
    ],
  },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
];

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isContactPage = pathname === "/contact";
  const isApp = useIsApp();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setErrorMsg("");

    const res = await subscribeNewsletter(email.trim());
    setLoading(false);
    if (res.success) {
      setSubmitted(true);
      trackEvent("form_submit", "newsletter-subscribe", `Subscribed to newsletter: ${email.trim()}`);
      setEmail("");
    } else {
      setErrorMsg(res.message || "Couldn't subscribe. Check the email and try again.");
    }
  };

  if (isApp || pathname.startsWith("/live/")) return null;

  return (
    <footer data-app-hide="true" className={`bg-[#18202E] text-white${isContactPage ? " hidden md:block" : ""}`}>
      {/* Contact band: the one thing someone scrolling this far usually wants */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-2xl font-bold leading-tight sm:text-3xl">Need a tracker fitted or RTO work done?</p>
            <p className="mt-2 text-slate-300">Call or WhatsApp us, Monday to Saturday, 9 am to 7 pm. We reply in Hindi or English.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={pageWhatsappHref(pathname, false)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="footer_whatsapp"
              className={`flex h-12 items-center justify-center gap-2 bg-[#0F8A4B] px-6 font-bold text-white transition-colors hover:bg-[#0B7440] ${focusRing}`}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp us
            </a>
            <a
              href={SALES_TEL_HREF}
              data-track="footer_call"
              className={`flex h-12 items-center justify-center gap-2 bg-[#1D5BD8] px-6 font-bold text-white transition-colors hover:bg-[#164BB5] ${focusRing}`}
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              Call {SALES_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr] lg:gap-16">
          {/* Brand, contact details, newsletter */}
          <div>
            <Link href="/" className={`inline-flex items-center gap-2.5 ${focusRing}`}>
              <Image src={logoImg} alt="NViQ logo" width={32} height={32} className="object-cover" suppressHydrationWarning />
              <span className="text-lg font-black tracking-tight">
                NV<span className="text-[#60A5FA]">i</span>Q
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-slate-300">
              Government-approved AIS 140 trackers fitted at your door, Vahan updated in about an hour, and an app to watch every vehicle live.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] text-slate-300">
              <li>
                <a href={SALES_TEL_HREF} className={`inline-flex items-center gap-2.5 hover:text-white ${focusRing}`}>
                  <PhoneCall className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                  Sales: {SALES_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={SUPPORT_TEL_HREF} data-track="footer_support_call" className={`inline-flex items-center gap-2.5 hover:text-white ${focusRing}`}>
                  <PhoneCall className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                  Support: {SUPPORT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:team@naviqbharat.com" className={`inline-flex items-center gap-2.5 hover:text-white ${focusRing}`}>
                  <Mail className="h-4 w-4 text-[#60A5FA]" aria-hidden="true" />
                  team@naviqbharat.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#60A5FA]" aria-hidden="true" />
                <address className="max-w-xs not-italic leading-relaxed">
                  320, 3rd floor, Wonder Mall, Company Bagh Road, Katla, Sector 7, Alwar, Rajasthan 301001
                </address>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p id="footer-newsletter" className="font-semibold">Rule changes and fitness tips, once a month</p>
              {submitted ? (
                <p className="mt-3 text-sm font-semibold text-emerald-400" role="status">
                  Subscribed. The next update will reach your inbox.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-3" aria-labelledby="footer-newsletter">
                  <div className="flex max-w-sm">
                    <label htmlFor="footer-email" className="sr-only">Email address</label>
                    <input
                      id="footer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="h-11 min-w-0 flex-1 border border-white/20 bg-white/5 px-3 text-sm text-white placeholder:text-slate-500 focus:border-[#60A5FA] focus:outline-none"
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      className={`h-11 bg-white px-4 text-sm font-bold text-[#18202E] transition-colors hover:bg-slate-200 disabled:opacity-60 ${focusRing}`}
                      disabled={loading}
                    >
                      {loading ? "Subscribing…" : "Subscribe"}
                    </button>
                  </div>
                  {errorMsg && (
                    <p className="mt-2 text-sm font-medium text-rose-400" role="alert">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-[15px] text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline ${focusRing}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NViQ Bharat Technology Pvt. Ltd.</p>
          <ul className="flex gap-6">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`hover:text-white ${focusRing}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
