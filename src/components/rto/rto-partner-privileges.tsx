"use client";

import React from "react";
import {
  Clock,
  Smartphone,
  Truck,
  CheckCircle2,
  FileText,
  Wallet,
  Download,
  Navigation,
  Sparkles,
} from "lucide-react";

interface RtoPartnerPrivilegesProps {
  locationName?: string;
  rtoCode?: string;
}

export default function RtoPartnerPrivileges({
  locationName = "",
}: RtoPartnerPrivilegesProps) {
  return (
    <section className="py-14 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Simple Indian Language */}
        <div className="text-left max-w-2xl mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700  mb-2.5">
            100% डिजिटल व पेपरलेस सुविधा
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            1 घंटे में पासिंग सर्टिफिकेट और दोनों के लिए मोबाइल ऐप
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            RTO एजेंट के लिए कलेक्शन और काम का लाइव हिसाब, और गाड़ी मालिक के लिए सारे सरकारी पेपर्स व लाइव GPS लोकेशन।
          </p>
        </div>

        {/* 3 Visual Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── CARD 1: 1-HOUR CERTIFICATE APPROVAL ── */}
          <div className="rounded-2xl bg-white border border-gray-200/80 p-6 shadow-2xs hover:shadow-sm hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  1 घंटे में अप्रूवल
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                1 घंटे में सर्टिफिकेट (Online Delivery)
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                वाहन 4.0 पोर्टल पर तुरंत अपडेट। सर्टिफिकेट सीधा आपके फोन और WhatsApp पर मिलेगा।
              </p>

              {/* Minimal Visual Widget */}
              <div className="mt-5 rounded-xl bg-gray-50 border border-gray-100 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
                  <span>VAHAN 4.0 SYNC</span>
                  <span className="text-emerald-600 font-bold">100% पासिंग गारंटी</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> फिटमेंट
                  </span>
                  <span className="text-gray-300">→</span>
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> सर्वर चेक
                  </span>
                  <span className="text-gray-300">→</span>
                  <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    अप्रूव्ड (&lt; 1 घंटा)
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-600">
                  <span className="flex items-center gap-1 font-medium">
                    <FileText className="h-3 w-3 text-blue-600" /> सरकारी सर्टिफिकेट
                  </span>
                  <span className="text-blue-600 font-semibold flex items-center gap-0.5">
                    <Download className="h-3 w-3" /> PDF डाउनलोड
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span>कागजी झंझट खत्म</span>
              <span className="font-semibold text-gray-900">WhatsApp &amp; PDF</span>
            </div>
          </div>

          {/* ── CARD 2: RTO PARTNER APP ── */}
          <div className="rounded-2xl bg-white border-2 border-blue-600 p-6 shadow-sm relative flex flex-col justify-between">
            <div className="absolute -top-2.5 left-5 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              RTO एजेंट व कंसल्टेंट के लिए
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 mt-0.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Smartphone className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  एजेंट पार्टनर ऐप
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                कमाई व पासिंग रिक्वेस्ट का हिसाब
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                रोज के कलेक्शन और कमीशन का हिसाब रखें, और हर गाड़ी का पासिंग स्टेटस लाइव ट्रैक करें।
              </p>

              {/* Minimal Visual Widget */}
              <div className="mt-5 rounded-xl bg-blue-50/50 border border-blue-100 p-3.5 space-y-2">
                <div className="bg-white rounded-lg p-2 border border-blue-100/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <Wallet className="h-3.5 w-3.5 text-emerald-600" />
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">कलेक्शन व मार्जिन</div>
                      <div className="font-bold text-gray-900 text-xs">लाइव कमाई का बहीखाता</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    लाइव
                  </span>
                </div>

                <div className="bg-white rounded-lg p-2 border border-blue-100/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">गाड़ी पासिंग प्रोग्रेस</div>
                      <div className="font-bold text-gray-900 text-xs">फिटमेंट चालू ➔ सर्टिफिकेट तैयार</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-blue-600">ट्रैक करें</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span>टेक्नीशियन बुकिंग</span>
              <span className="font-semibold text-blue-600">सिर्फ RC नंबर से</span>
            </div>
          </div>

          {/* ── CARD 3: CUSTOMER APP ── */}
          <div className="rounded-2xl bg-white border border-gray-200/80 p-6 shadow-2xs hover:shadow-sm hover:border-emerald-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Truck className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  गाड़ी मालिक के लिए
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                सारे पेपर्स और लाइव लोकेशन ऐप
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                गाड़ी में GPS लगते ही मोबाइल पर लाइव लोकेशन दिखेगी और सारे पेपर्स ऐप में सुरक्षित रहेंगे।
              </p>

              {/* Minimal Visual Widget */}
              <div className="mt-5 rounded-xl bg-gray-50 border border-gray-100 p-3.5 space-y-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-blue-600" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">डिजिटल डॉक्यूमेंट लॉकर</div>
                      <div className="text-[10px] text-gray-400">फिटनेस सर्टिफिकेट, कैलिब्रेशन व बिल</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    फोन में
                  </span>
                </div>

                <div className="bg-white rounded-lg p-2 border border-emerald-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-3.5 w-3.5 text-emerald-600" />
                    <div>
                      <div className="font-bold text-gray-900 text-xs">फिटमेंट के तुरंत बाद लाइव GPS</div>
                      <div className="text-[10px] text-gray-400">गाड़ी कहां है, स्पीड और इग्निशन चालू/बंद</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    लाइव नक्शे पर
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span>सालाना पासिंग अलर्ट</span>
              <span className="font-semibold text-emerald-700">समय पर सूचना</span>
            </div>
          </div>

        </div>

        {/* Minimal 1-Line Trust Note (Zero MOQ) */}
        <div className="mt-8 text-center text-xs text-gray-500 flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            कोई मिनिमम आर्डर नहीं (0 MOQ)
          </span>
          <span className="text-gray-300">•</span>
          <span>1 गाड़ी हो या 100 गाड़ियां — सबके लिए एक जैसी तेज व पक्की सुविधा</span>
        </div>

      </div>
    </section>
  );
}
