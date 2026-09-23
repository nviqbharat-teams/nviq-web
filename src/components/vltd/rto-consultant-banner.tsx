import React from "react";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Banknote, Clock, Award } from "lucide-react";

interface RtoConsultantBannerProps {
  locationName: string;
  rtoCode?: string;
}

export default function RtoConsultantBanner({ locationName, rtoCode }: RtoConsultantBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/70 via-orange-50/30 to-white p-8 md:p-12 my-12 shadow-sm">
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-4">
            <Award className="h-3.5 w-3.5 text-amber-700" />
            <span>NViQ RTO Partner Network — {rtoCode || locationName}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Are You an RTO Consultant or Agent in {locationName}?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            Stop losing vehicle passing deals to slow certification and out-of-stock devices. Partner with NViQ to get direct access to our dealer portal with guaranteed instant certificate issuance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 text-xs sm:text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-2.5">
              <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
              <span><strong>Priority Agency Support</strong> & fast dispatch</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-amber-600 shrink-0" />
              <span><strong>Mobile App Issuance:</strong> Upon verified fitment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
              <span><strong>Zero Fitness Rejections</strong> on Vahan 4.0</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>No Bulk Lock-in:</strong> Order as you need</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
          <Link
            href="/rto-partner"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-md transition-all text-sm"
          >
            <Building2 className="h-4 w-4" />
            <span>Join RTO Partner Portal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="https://wa.me/919313200700?text=Hi%20NViQ%20Team%2C%20I%20am%20an%20RTO%20Consultant%20interested%20in%20partnering%20for%20VLTD%20fitments."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-all text-sm shadow-sm"
          >
            <span>WhatsApp RTO Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
