"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type LeadPlan } from "@/components/lead-modal";

interface HeroCarouselProps {
  onOpenLeadModal: (plan?: LeadPlan) => void;
}

export default function HeroCarousel({ onOpenLeadModal }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES = [
    {
      id: "rto-partner",
      title: "NViQ RTO Partner App — Simplify RTO Services. Grow Your Business.",
      description:
        "Add customers, manage vehicles, create cases and track payments — all in one app. Official RTO Partner Program.",
      image: "/rto-partner-new.png",
      href: "/rto-partner",
      isLink: true,
      alt: "NViQ RTO Partner App - Simplify RTO Services, Grow Your Business. Add customers, manage vehicles, create cases and track payments - all in one app.",
    },
    {
      id: "fleet-tracking",
      title: "Track Every Vehicle. Cut Fuel Costs.",
      description:
        "NViQ gives Indian fleet owners live GPS, theft and overspeeding alerts, vehicle past running history — all in one powerful dashboard.",
      image: "/fleet_tracking_new.png",
      isLink: false,
      alt: "NViQ Fleet Tracking - Track Every Vehicle, Cut Fuel Costs. Live GPS, theft and overspeeding alerts, vehicle past running history.",
    },
  ];

  const totalSlides = SLIDES.length;
  const AUTOPLAY_INTERVAL = 5000; // 5 seconds

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL);
  }, [totalSlides, isPaused]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    startAutoPlay();
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full pt-16 bg-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hidden SEO Headings */}
      <div className="sr-only">
        <h1>NViQ Bharat — RTO Partner App & Commercial Fleet GPS Tracking Platform</h1>
        <h2>Simplify RTO Services, Grow Your Business & Track Commercial Vehicles</h2>
      </div>

      {/* ── FULL-WIDTH COMPLETE HERO BANNER CAROUSEL ── */}
      <div
        className="relative w-full aspect-[2560/896] overflow-hidden group bg-slate-900"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Horizontal sliding track: slides sit side-by-side and never overlap */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => {
            const content = (
              <div className="relative w-full h-full bg-slate-900">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover w-full h-full"
                  sizes="100vw"
                />
              </div>
            );

            if (slide.isLink) {
              return (
                <Link
                  key={slide.id}
                  href={slide.href!}
                  className="relative w-full h-full flex-shrink-0 block cursor-pointer"
                  tabIndex={idx === currentSlide ? 0 : -1}
                >
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => onOpenLeadModal("starter")}
                className="relative w-full h-full flex-shrink-0 block text-left cursor-pointer p-0 border-0 bg-transparent"
                tabIndex={idx === currentSlide ? 0 : -1}
              >
                {content}
              </button>
            );
          })}
        </div>

        {/* ── NAVIGATION ARROWS ── */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous banner"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next banner"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        {/* ── PAGINATION PILL DOTS (BOTTOM CENTER) ── */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-black/35 backdrop-blur-sm border border-white/10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(idx);
              }}
              aria-label={`Go to banner ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentSlide
                ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
