"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface VltdFaqAccordionProps {
  faqs: FaqItem[];
  locationName: string;
}

export default function VltdFaqAccordion({ faqs, locationName }: VltdFaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="my-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
          Frequently Asked Questions
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black text-gray-900">
          Everything You Need to Know About VLTD Fitment in {locationName}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Got questions regarding Vahan 4.0 sync, state mining approval, or RTO agent margins?
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-blue-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
