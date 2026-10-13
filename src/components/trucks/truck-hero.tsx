import React from "react";
import { Check, Smartphone, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";
import TruckQuoteForm from "@/components/trucks/truck-quote-form";

interface TruckHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  highlights: string[];
  primaryCtaText?: string;
  whatsappMessage?: string;
  locationTag?: string;
  truckTypeTag?: string;
}

export default function TruckHero({
  badge,
  title,
  subtitle,
  highlights,
  primaryCtaText = "Get Instant Quote",
  whatsappMessage,
  locationTag,
  truckTypeTag,
}: TruckHeroProps) {
  const whatsappUrl = `https://wa.me/919694551326?text=${encodeURIComponent(
    whatsappMessage || `Hi NViQ, I need AIS 140 VLTD fitment & certificate for ${truckTypeTag || "truck"} in ${locationTag || "Rajasthan"}.`
  )}`;

  // Take max 3 points and keep them concise
  const concisePoints = highlights.slice(0, 3);

  return (
    <section className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Clean & Minimal Value Proposition */}
          <div className="lg:col-span-7">
            {/* Single Subtle Tag (Minimalist, no rainbow colors) */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>{locationTag || badge || "AIS 140 Fleet Compliance"}</span>
              {truckTypeTag && (
                <>
                  <span className="text-gray-300">•</span>
                  <span>{truckTypeTag}</span>
                </>
              )}
            </div>

            {/* Direct & Bold Heading */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              {title}
            </h1>

            {/* Concise 1-2 sentence subtitle */}
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* 3 Simple, Clear Highlights */}
            <div className="mt-5 space-y-2 text-xs sm:text-sm text-gray-700">
              {concisePoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Clean, Simple CTA Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#fitment-form"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-xs sm:text-sm shadow-xs"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-xs sm:text-sm"
              >
                <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
                <span>WhatsApp Dispatch</span>
              </a>

              <a
                href="tel:+919694551326"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-gray-400" />
                <span>9694551326</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick 2-Field Action Form */}
          <div id="fitment-form" className="lg:col-span-5 scroll-mt-24">
            <TruckQuoteForm
              defaultLocation={locationTag || ""}
              defaultCategory={truckTypeTag || ""}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
