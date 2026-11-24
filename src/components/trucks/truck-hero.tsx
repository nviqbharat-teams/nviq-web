import React from "react";
import { Smartphone, PhoneCall, ArrowRight } from "lucide-react";
import TruckQuoteForm from "@/components/trucks/truck-quote-form";
import { HeroEyebrow, HeroHeadline, HeroIntro, HeroPoints } from "@/components/hero/hero-text";

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
  const whatsappUrl = `https://wa.me/919257038711?text=${encodeURIComponent(
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
            <HeroEyebrow tone="light">
              {locationTag || badge || "AIS 140 Fleet Compliance"}
              {truckTypeTag && <> · {truckTypeTag}</>}
            </HeroEyebrow>

            <HeroHeadline
              tone="light"
              title={title}
              className="mt-4 text-[28px] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl"
            />

            <HeroIntro tone="light" className="mt-3 sm:text-base!">{subtitle}</HeroIntro>

            <HeroPoints tone="light" points={concisePoints} className="mt-5 sm:grid-cols-1 sm:gap-2 [&>li:nth-child(3)]:col-span-2 sm:[&>li:nth-child(3)]:col-span-1" />

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
                href="tel:+919257038711"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-gray-400" />
                <span>+91 92570 38711</span>
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
