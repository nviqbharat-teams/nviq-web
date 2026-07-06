"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "@/app/logo.jpeg";

import { useLeadModal } from "@/context/lead-modal-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const BANNER_DISMISS_KEY = "nviq-banner-dismissed";

interface NavbarProps {
  /** Whether the navbar should be fixed to the top (default: true) */
  fixed?: boolean;
}

export default function Navbar({ fixed = true }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const { openLeadModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const shouldShow = localStorage.getItem(BANNER_DISMISS_KEY) !== "true";
    setShowBanner(shouldShow);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const dismissBanner = () => {
    localStorage.setItem(BANNER_DISMISS_KEY, "true");
    setShowBanner(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  const isContactPage = pathname === "/contact";

  return (
    <div className={isContactPage ? "hidden md:block" : undefined}>
      <div className={fixed ? "fixed top-0 left-0 right-0 z-50 flex flex-col" : "relative w-full z-50 flex flex-col"}>
        {showBanner && (
          <div className="announcement-bar">
            <div className="announcement-bar__inner">
              <p className="announcement-bar__text">
                Start your <strong>90-day trial</strong> from <strong>₹1,599/vehicle</strong> — free installation included.
              </p>
              <Link href="/#pricing" className="announcement-bar__link">
                View plans
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <button
                onClick={dismissBanner}
                aria-label="Dismiss announcement"
                className="announcement-bar__close"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <header
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-black/[0.05]"
              : "bg-white/80 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                <Image src={logoImg} alt="NViQ Logo" width={32} height={32} className="object-cover rounded-sm" priority />
                <span className="text-[17px] font-black tracking-tight text-gray-900">
                  NV<span className="text-blue-600">i</span>Q
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openLeadModal("starter")}
                  className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Get Started
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>

                {/* Hamburger */}
                <button
                  type="button"
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
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
            <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-4 py-4 flex flex-col gap-1 shadow-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); openLeadModal("starter"); }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg"
                >
                  Get Started →
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
      {fixed && <div className={showBanner ? "h-[116px] shrink-0" : "h-16 shrink-0"} aria-hidden="true" />}
    </div>
  );
}
