import React from "react";
import Link from "next/link";
import { Shield, Zap, Clock, Wrench, Building2, CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";

interface VltdHeroProps {
  title: string;
  badge: string;
  description: string;
  locationName: string;
  stateName: string;
  cityName?: string;
  rtoCode?: string;
  miningPortalName?: string;
}

export default function VltdHero({
  title,
  badge,
  description,
  locationName,
  cityName,
  rtoCode,
  miningPortalName,
}: VltdHeroProps) {
  const whatsappQuoteUrl = `https://wa.me/919313200700?text=${encodeURIComponent(
    `Hi NViQ, I need AIS 140 & Mines VLTD fitment quotation for ${locationName}. Please share details.`
  )}`;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-gray-200 bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/80 blur-[100px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Location Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Shield className="h-3.5 w-3.5 text-blue-600" />
            {badge}
          </span>
          {rtoCode && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 tracking-wider">
              {rtoCode.toUpperCase()} RTO ZONE
            </span>
          )}
          <span className="text-xs text-gray-500 font-medium">
            ARAI AIS-140 • ICAT Tested • Vahan 4.0 Whitelisted
          </span>
        </div>

        {/* Main H1 Title */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.15]">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Quick CTA row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all text-sm hover:scale-[1.01]"
          >
            <Zap className="h-4 w-4" />
            <span>Get 1-Hour Certificate on WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            href="/rto-partner/invite"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all text-sm"
          >
            <Building2 className="h-4 w-4 text-amber-700" />
            <span>RTO Agent? Unlock Wholesale Dealer Rates</span>
          </Link>

          <a
            href="tel:+919313200700"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-all text-sm"
          >
            <PhoneCall className="h-4 w-4 text-blue-600" />
            <span>Call +91 93132 00700</span>
          </a>
        </div>

        {/* The 3 Core "Greeds" / Value Pillars (Clean White Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Greed 1: 1-Hour Certificate */}
          <div className="relative group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Clock className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Passing Guaranteed
              </span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              In 1-Hour Certificate Issuance
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Vehicle passing or fitness inspection due today? We sync your fitment certificate to Vahan 4.0 and {miningPortalName || "the State Mining Portal"} within 60 minutes of installation.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>100% Zero-Rejection Guarantee</span>
            </div>
          </div>

          {/* Greed 2: Same-Day / 24-48h Doorstep Installation */}
          <div className="relative group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Doorstep Fitment
              </span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              Same-Day or 24-48h Doorstep Fitment
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our certified auto-electricians come straight to your transport yard, mine pit, or depot anywhere in {cityName || locationName}. Same-day dispatch with certified panic button wiring.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Doorstep Technician across {cityName || locationName}</span>
            </div>
          </div>

          {/* Greed 3: RTO Consultant Partnership */}
          <div className="relative group rounded-2xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                RTO Agents & Consultants
              </span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              RTO Consultant Partnership
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Earn top dealer margins (₹1,500–₹3,000 per vehicle) with your private dealer portal. Generate fitment certificates in 15 minutes without waiting on device manufacturers.
            </p>
            <div className="mt-4">
              <Link
                href="/rto-partner/invite"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4"
              >
                <span>Join NViQ RTO Partner Program</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
