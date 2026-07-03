import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NViQ — India's Fleet GPS Tracking Platform",
  description:
    "Learn about NViQ, our mission to modernise Indian fleet management, and the team building real-time GPS tracking for transport operators across India.",
};

const stats = [
  { value: "10,000+", label: "Vehicles Tracked" },
  { value: "500+", label: "Fleet Operators" },
  { value: "28", label: "States Covered" },
  { value: "99.6%", label: "Uptime SLA" },
];

const values = [
  {
    emoji: "⚡",
    title: "Real-Time First",
    desc: "Every decision at NViQ is made with real-time data as the baseline — not delayed reports, not approximations.",
  },
  {
    emoji: "🇮🇳",
    title: "Built for India",
    desc: "Low-signal highways, remote depots, multi-lingual drivers — we engineer for Indian realities, not Silicon Valley assumptions.",
  },
  {
    emoji: "🚛",
    title: "Operator-Centric",
    desc: "Fleet owners define our product roadmap. Every feature earns its place by solving a real operational pain point.",
  },
  {
    emoji: "💰",
    title: "Transparent Pricing",
    desc: "No hidden charges, no surprise bills. What you see on our pricing page is exactly what you pay — for life.",
  },
];

const milestones = [
  { year: "2019", text: "Founded in Pune by ex-logistics professionals frustrated by overpriced, unreliable trackers." },
  { year: "2020", text: "Launched first AIS-140 certified tracker. First 50 fleets onboarded within 3 months." },
  { year: "2022", text: "Crossed 5,000 active vehicles. Expanded coverage to 18 states across India." },
  { year: "2024", text: "Reached 10,000+ vehicles. Introduced lifetime plan and offline-first tracking mode." },
];

export default function AboutPage() {
  return (
    <div className="bg-white font-sans">
      <main>
        {/* ── HERO BANNER ──────────────────────────────────────── */}
        <section className="bg-white pt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
                We Help Your Business<br />
                <span className="italic font-normal text-blue-600">
                  With Smart GPS Tracking
                </span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
                NViQ was built by logistics professionals frustrated by expensive, unreliable GPS systems that
                weren&apos;t designed for Indian roads, Indian operators, or Indian scale.
              </p>
            </div>

            {/* Banner Image */}
            <div className="w-full border border-slate-200 shadow-xl shadow-slate-100 mb-6 overflow-hidden">
              <img
                src="/about-team.png"
                alt="NViQ Team Collaboration"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>
        </section>



        {/* ── MISSION / SERVICES STAGGERED GRID ────────────────── */}
        <section className="pt-24 pb-10 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-gray-900 leading-[1.1] mb-2">
                We Scale Telematics & Physical Automation Infrastructure
              </h2>
              <p className="text-base text-slate-500 max-w-xl">
                Bridging advanced software with hard-wearing IoT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column: Para 1 (Text) + Image 1 */}
              <div>
                <div className="flex flex-col gap-6 text-slate-600 text-[15px] leading-relaxed">
                  <p>
                    At NVIQ BHARAT Technology Private Limited, we are a high-performance tech team dedicated to developing, operating, and scaling technology-driven physical automation and intelligence platforms.
                  </p>
                  <p>
                    Established with a core mandate to bridge advanced data software with hard-wearing IoT infrastructure, we focus relentlessly on two critical pillars driving economic growth: <strong>Mobility Infrastructure</strong> and <strong>Agricultural Automation</strong>.
                  </p>
                  <p>
                    We don&apos;t just build standalone software; we construct robust end-to-end ecosystems where AI-driven analytics, customized hardware integrations, and cloud architectures run seamlessly to optimize heavy operations on the road and in the air.
                  </p>
                </div>
                <div className="mt-10 border border-slate-200 shadow-xl shadow-slate-100/80 overflow-hidden rounded-none">
                  <img
                    src="/about-dashboard.png"
                    alt="NViQ Fleet Tracking Dashboard"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>
              </div>

              {/* Right Column: Image 2 + Para 2 (Text) */}
              <div>
                <div className="border border-slate-200 shadow-xl shadow-slate-100/80 overflow-hidden rounded-none mb-10">
                  <img
                    src="/about-hands.png"
                    alt="NViQ Team Partnership and Success"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>
                <div className="flex flex-col gap-6 text-slate-600 text-[15px] leading-relaxed">
                  <p>
                    We provide high-compliance, real-time Telematics and Fleet Intelligence Operations designed to transform raw vehicular movement into highly predictable optimization pipelines.
                  </p>
                  <p>
                    By combining high-frequency tracking dashboards for instantaneous visibility, predictive analytics to maximize fuel economy and analyze driver behavior, and AIS-140 compliant safety systems, we deliver a highly flexible, cloud-native SaaS model that scales smoothly from individual vehicle scopes to multi-tiered corporate fleet operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ─────────────────────────────────── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            {/* Single bordered container with vertical divider */}
            <div className="border border-slate-200 bg-white divide-y md:divide-y-0 md:divide-x md:divide-slate-200 grid grid-cols-1 md:grid-cols-2">

              {/* Vision Card */}
              <div className="p-10 md:p-12 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-widest text-slate-900 mb-4">
                  Our Corporate Vision
                </h3>
                {/* Body */}
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  To position NVIQ BHARAT as the central operating infrastructure for physical logistics and smart field management, setting new national benchmarks for operational safety, automation performance, and structural scalability.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-10 md:p-12 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-widest text-slate-900 mb-4">
                  Our Corporate Mission
                </h3>
                {/* Body */}
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  To democratize access to advanced AI-driven spatial data and physical automation toolkits, lowering operational risk and overhead costs for operators throughout India&apos;s transportation corridors and agricultural fields.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CORPORATE REGISTRATION ───────────────────────────── */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-slate-200 bg-slate-50 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-slate-200">

              {/* CIN */}
              <div className="p-8 md:p-10 flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-1">
                  Corporate Identity Number (CIN)
                </span>
                <span className="text-lg font-black tracking-wider text-slate-900 font-mono">
                  U62099RJ2026PTC113523
                </span>
              </div>

              {/* Registered Address */}
              <div className="p-8 md:p-10 flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-1">
                  Registered Address
                </span>
                <address className="not-italic text-[15px] text-slate-700 leading-relaxed font-medium">
                  NViQ Technologies Pvt. Ltd.<br />
                  Malakhera Jamalpur 301406,<br />
                  Alwar, Rajasthan, India
                </address>
              </div>

            </div>
          </div>
        </section>


        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-blue-600 py-24 text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4">Ready to Track Smarter?</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Start your 90-day free trial. No hidden charges. Free installation across India.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                Get Started Free
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
