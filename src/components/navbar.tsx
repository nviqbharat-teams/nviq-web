"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "@/app/logo.jpeg";

import { useLeadModal } from "@/context/lead-modal-context";
import { useIsApp } from "@/context/is-app-context";
import { SALES_PHONE_DISPLAY, SALES_TEL_HREF } from "@/lib/contact";
import { isHindiPath, languageTwinHref, pageCta, pageWhatsappHref } from "@/lib/nav-context";

// `match`: path prefix that marks the link active, when it differs from href.
type NavLink = { href: string; label: string; hint?: string; badge?: string; match?: string };

// Ordered by buyer intent: the core paid offer first, then other services,
// then the partner (earn) offer and free tools. Trust/info pages sit under "More".
const PRIMARY_EN: NavLink[] = [
  { href: "/vltd", label: "VLTD Fitment", hint: "AIS 140 + Vahan certificate in 1 hour" },
  { href: "/gps-tracking", label: "GPS Tracking", hint: "Trucks, buses, school vans, cabs" },
  { href: "/rto-services", label: "RTO Services", hint: "Fitness, permit, passing help" },
  { href: "/rto-partner", label: "RTO Partner", hint: "Wholesale rates for RTO agents", badge: "Earn" },
  { href: "/tools", label: "Free Tools", hint: "VLTD checker, price calculator" },
];
const MORE_EN: NavLink[] = [
  { href: "/services", label: "All Services", hint: "Everything we do, in one page" },
  { href: "/case-studies", label: "Case Studies", hint: "Real fleets we've passed" },
  { href: "/about", label: "About NViQ", hint: "Who we are" },
  { href: "/contact", label: "Contact Us", hint: "Call, WhatsApp or visit" },
];

const PRIMARY_HI: NavLink[] = [
  { href: "/hi#rajasthan", match: "/hi/vltd", label: "VLTD फिटमेंट", hint: "AIS 140 + 1 घंटे में Vahan सर्टिफिकेट" },
  { href: "/hi#gps", match: "/hi/gps-tracking", label: "GPS ट्रैकिंग", hint: "ट्रक, बस, स्कूल वैन, कैब" },
  { href: "/hi#rto-services", match: "/hi/rto-services", label: "RTO सेवाएं", hint: "फिटनेस, परमिट, पासिंग" },
  { href: "/rto-partner", label: "RTO पार्टनर", hint: "RTO एजेंट के लिए होलसेल रेट", badge: "कमाएं" },
  { href: "/tools", label: "फ्री टूल्स", hint: "VLTD चेकर, रेट कैलकुलेटर" },
];
const MORE_HI: NavLink[] = [
  { href: "/case-studies", label: "केस स्टडी", hint: "जिन फ्लीट की पासिंग कराई" },
  { href: "/about", label: "हमारे बारे में", hint: "NViQ कौन है" },
  { href: "/contact", label: "संपर्क करें", hint: "कॉल, WhatsApp या विज़िट" },
];

interface NavbarProps {
  /** Whether the navbar should be fixed to the top (default: true) */
  fixed?: boolean;
}

export default function Navbar({ fixed = true }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMoreOpen(false);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const linkActive = (l: NavLink) => isActive(l.match ?? l.href);

  const isHindi = isHindiPath(pathname);
  const primary = isHindi ? PRIMARY_HI : PRIMARY_EN;
  const more = isHindi ? MORE_HI : MORE_EN;
  const moreActive = more.some(linkActive);
  const langHref = languageTwinHref(pathname);
  const cta = pageCta(pathname, isHindi);
  const waHref = pageWhatsappHref(pathname, isHindi);
  const t = isHindi
    ? { more: "और", call: "कॉल करें", wa: "WhatsApp", lang: "English", tagline: "AIS 140 सर्टिफाइड · 1 घंटे में Vahan", trust: ["ARAI/ICAT सर्टिफाइड AIS 140 डिवाइस", "लगभग 1 घंटे में Vahan सर्टिफिकेट", "घर/यार्ड पर फिटमेंट"] }
    : { more: "More", call: "Call now", wa: "WhatsApp", lang: "हिंदी", tagline: "AIS 140 certified · Vahan in 1 hr", trust: ["ARAI/ICAT certified AIS 140 devices", "Vahan certificate in about 1 hour", "Doorstep fitment at your yard"] };

  const ctaClass = "items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all duration-200";
  const renderCta = (className: string, onDone?: () => void) =>
    cta.kind === "link" ? (
      <a href={cta.href} onClick={onDone} className={`${ctaClass} ${className}`}>{cta.label}</a>
    ) : (
      <button type="button" onClick={() => { onDone?.(); openLeadModal("starter"); }} className={`${ctaClass} ${className}`}>
        {cta.label}
      </button>
    );

  const isContactPage = pathname === "/contact";
  const isApp = useIsApp();

  if (isApp || pathname.startsWith("/live/")) return null;

  return (
    <div data-app-hide="true" className={isContactPage ? "hidden md:block" : undefined}>
      <div className={fixed ? "fixed top-0 left-0 right-0 z-50 flex flex-col" : "relative w-full z-50 flex flex-col"}>
        {/* Dim the page behind the open mobile menu; tap to close */}
        {menuOpen && (
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setMenuOpen(false)}
            className="xl:hidden fixed inset-0 bg-gray-900/40"
          />
        )}

        <header
          className={`relative transition-all duration-300 ${menuOpen
            ? "bg-white"
            : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-black/[0.05]"
            : "bg-white/80 backdrop-blur-sm"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                <Image src={logoImg} alt="NViQ Logo" width={32} height={32} className="object-cover rounded-sm" priority suppressHydrationWarning />
                <span className="flex flex-col leading-none">
                  <span className="text-[17px] font-black tracking-tight text-gray-900">
                    NV<span className="text-blue-600">i</span>Q
                  </span>
                  <span className="mt-1 hidden min-[360px]:flex items-center gap-1 text-[10px] font-semibold text-emerald-700 whitespace-nowrap">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8.5l3 3 7-7" />
                    </svg>
                    {t.tagline}
                  </span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
                {primary.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    title={link.hint}
                    className={`relative inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${linkActive(link)
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="rounded-full bg-emerald-100 px-1.5 py-px text-[10px] font-bold text-emerald-700">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}

                {/* More dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={moreOpen}
                    onClick={() => setMoreOpen((o) => !o)}
                    className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${moreActive || moreOpen
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    {t.more}
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}>
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  {moreOpen && (
                    <div className="absolute right-0 top-full pt-2 w-64">
                      <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                        {more.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`block rounded-lg px-3 py-2.5 transition-colors ${linkActive(link) ? "bg-blue-50" : "hover:bg-gray-50"}`}
                          >
                            <span className={`block text-sm font-semibold ${linkActive(link) ? "text-blue-700" : "text-gray-900"}`}>{link.label}</span>
                            {link.hint && <span className="block text-xs text-gray-500">{link.hint}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link
                  href={langHref}
                  hrefLang={isHindi ? "en" : "hi"}
                  aria-label={isHindi ? "Switch to English" : "हिंदी में देखें"}
                  className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-xs font-bold text-gray-700 hover:border-blue-400 hover:text-blue-700"
                >
                  {t.lang}
                </Link>

                <a
                  href={SALES_TEL_HREF}
                  className="hidden 2xl:inline-flex flex-col items-end leading-tight px-2 text-right whitespace-nowrap"
                  aria-label={`${t.call} ${SALES_PHONE_DISPLAY}`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600">{t.call}</span>
                  <span className="text-sm font-black text-gray-900">{SALES_PHONE_DISPLAY}</span>
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.wa}
                  title={t.wa}
                  className="hidden xl:flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20"
                >
                  <WhatsAppIcon />
                </a>

                {renderCta("hidden xl:inline-flex whitespace-nowrap px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5")}

                {/* Hamburger */}
                <button
                  type="button"
                  className="xl:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((o) => !o)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    {menuOpen ? (
                      <path d="M6 6l12 12M18 6L6 18" />
                    ) : (
                      <>
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
              {/* Primary action first: what most visitors came for */}
              {renderCta("flex w-full px-3 py-3", () => setMenuOpen(false))}
              <ul className="mt-3 mb-3 space-y-1 px-1 text-xs text-gray-600">
                {t.trust.map((line) => (
                  <li key={line} className="flex items-center gap-1.5">
                    <span className="text-emerald-600" aria-hidden="true">✓</span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-1">
                {primary.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-4 py-2.5 transition-colors ${linkActive(link) ? "bg-blue-50" : "hover:bg-gray-50"}`}
                  >
                    <span className={`flex items-center gap-2 text-sm font-semibold ${linkActive(link) ? "text-blue-700" : "text-gray-900"}`}>
                      {link.label}
                      {link.badge && (
                        <span className="rounded-full bg-emerald-100 px-1.5 py-px text-[10px] font-bold text-emerald-700">{link.badge}</span>
                      )}
                    </span>
                    {link.hint && <span className="block text-xs text-gray-500">{link.hint}</span>}
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-2 px-4 text-sm">
                {more.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={linkActive(link) ? "font-semibold text-blue-700" : "text-gray-600 hover:text-gray-900"}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.46 9.48-9.46a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2 .52 3.96 1.52 5.69L.55 23.63l6.05-1.59a11.38 11.38 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.34-8.07z" />
    </svg>
  );
}
