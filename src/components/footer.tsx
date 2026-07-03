"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/app/logo.jpeg";

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image src={logoImg} alt="NViQ Logo" width={30} height={30} className="object-cover rounded-sm" />
              <span className="text-[17px] font-black tracking-tight">
                NV<span className="text-blue-400">i</span>Q
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Real-time GPS fleet tracking, fuel insights, and AIS-140 compliance — built for Indian transport operators.
            </p>

            {/* Contact info */}
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-gray-400">
              <a href="tel:+918529245390" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 10.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 17z" />
                </svg>
                +91 85292 45390
              </a>
              <a href="mailto:naviqbharat@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                naviqbharat@gmail.com
              </a>
              <span className="flex items-start gap-2">
                <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  NViQ Technologies Pvt. Ltd.<br />
                  Malakhera Jamalpur 301406,<br />
                  Alwar, Rajasthan, India
                </span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter box */}
          <div>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                Fleet tips, product updates, and industry insights — monthly, no spam.
              </p>
              {submitted ? (
                <p className="text-sm text-emerald-400 font-semibold" role="status">
                  ✓ You&apos;re subscribed. Thank you!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 text-white text-sm rounded-lg px-3 py-2 border border-white/20 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} NViQ Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
