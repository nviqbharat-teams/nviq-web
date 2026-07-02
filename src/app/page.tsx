"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "./logo.jpeg";
import { LeadModal, type LeadPlan } from "@/components/lead-modal";

const BANNER_DISMISS_KEY = "nviq-banner-dismissed";

const HERO_FLEET_INSIGHTS = {
  summary: { active: 27, total: 32, onRoute: 24, alerts: 2 },
  metrics: [
    { value: "8,420 km", label: "Tracked today", detail: "Avg 312 km per vehicle" },
    { value: "₹18,400", label: "Fuel saved", detail: "Waste cut this month" },
    { value: "5 sec", label: "GPS refresh", detail: "Works in low-signal zones" },
    { value: "AIS140", label: "Govt compliant", detail: "Audit-ready reports" },
  ],
  alert: {
    plate: "MH12 AB 1244",
    message: "Overspeed detected on NH-48 near Lonavala",
    time: "2 min ago",
  },
};

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];
const FAQ_ITEMS = [
  {
    tag: "Setup",
    question: "Do I need to install the tracking device myself?",
    answer: "No. NViQ provides free local technician installation. Once you start your trial, our certified installation team will coordinate with you to install the devices at your warehouse, office, or yard at no extra charge."
  },
  {
    tag: "Coverage",
    question: "Will this tracking system work in remote villages or low-signal zones?",
    answer: "Yes. Our trackers are built with dual-cellular backup and offline local memory. If a vehicle travels through a dead zone, the tracker continues storing location and fuel metrics locally, and automatically uploads the complete path history the second connectivity returns."
  },
  {
    tag: "Billing",
    question: "How does the 90-day trial refund guarantee work?",
    answer: "We are confident in NViQ's value. You get full access to the tracking platform and hardware for 90 days. If you are not satisfied with NViQ during your first 90 days, you can return the device for a full refund of your subscription cost."
  },
  {
    tag: "Hardware",
    question: "Is there a warranty on the hardware trackers?",
    answer: "Yes, every NViQ device comes with a lifetime replacement warranty. If a device stops working or is damaged through normal wear-and-tear, we ship and install a brand-new replacement device completely free of charge."
  }
];

const FLEET_VALUE = [
  {
    id: "tracking",
    title: "Smart Tracking",
    desc: "Always-on location visibility with clean route history to keep fleet operations grounded.",
    accent: "blue",
    features: [
      "Live GPS position every 10 seconds",
      "Full route history with timestamps",
      "Geofence Breach Alerts",
    ],
  },
  {
    id: "summary",
    title: "Business Summary",
    desc: "Complete business overview with trip, fuel, and fleet performance reports in one place.",
    accent: "indigo",
    features: [
      "Fuel consumption & cost summary",
      "Trip distance & stoppage reports",
      "Fleet utilization analytics",
    ],
  },
  {
    id: "behaviour",
    title: "Drive Behaviour",
    desc: "Real-time driver monitoring with instant alerts for unsafe driving patterns on the road.",
    accent: "amber",
    features: [
      "Overspeed & harsh braking alerts",
      "Geo-fence entry/exit alerts",
      "Fuel theft & drain alerts",
    ],
  },
  {
    id: "safety",
    title: "Certified Safety Solutions",
    desc: "Compliance-friendly controls that strengthen driver safety and audit confidence for fleets.",
    accent: "emerald",
    features: [
      "Driver fatigue & overspeed alerts",
      "Panic button & emergency SOS relay",
      "Compliance audit trail & reports",
    ],
  },
];

const PRICING_STARTER_FEATURES = {
  "90-day": [
    "Mobile App Access",
    "Subscription 90 days",
    "Live GPS Tracking",
    "Alerts",
    "Geo Fence",
    "Playback Route",
    "Business Visibility",
  ],
  annual: [
    "Mobile App Access",
    "Live GPS Tracking",
    "Alerts",
    "Geo Fence",
    "Playback Route",
    "Business Visibility",
  ],
} as const;

const PRICING_PRO_EXTRA = ["Engine Control", "Trip Management"] as const;

const PRICING_ENTERPRISE_FEATURES = [
  "Unlimited Vehicles",
  "Custom Integrations & API",
  "Dedicated Success Manager",
  "24×7 Priority Support",
  "SLA-backed Uptime",
  "Advanced Analytics Workspace",
] as const;

function PricingCheck() {
  return (
    <span className="pricing__check" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="7" fill="currentColor" fillOpacity="0.15" />
        <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const FLEET_SERIES = [
  {
    id: "core",
    title: "Core Series",
    desc: "Entry-level GPS tracking for small fleets. Real-time location, trip history, and driver behavior monitoring out of the box.",
    color: "#3b82f6",
  },
  {
    id: "smart",
    title: "Smart Series",
    desc: "High-speed 4G connectivity with live alerts, geo-fencing, and route analytics for growing mid-size fleets.",
    color: "#22c55e",
  },
  {
    id: "intelli",
    title: "Intelli Series",
    desc: "AI-powered fleet intelligence with predictive maintenance, fuel cost analytics, and advanced multi-branch reporting.",
    color: "#8b5cf6",
  },
  {
    id: "secure",
    title: "Secure Series",
    desc: "AIS140-certified devices meeting all government mandates for commercial vehicle compliance, panic alerts, and audit-ready logs.",
    color: "#f59e0b",
  },
  {
    id: "vision",
    title: "Vision Series",
    desc: "Dual-channel AI dashcam with event-based recording, cloud backup, and real-time driver coaching to reduce accidents.",
    color: "#ef4444",
  },
];

function FleetSeriesIcon({ id }: { id: string }) {
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (id === "core") {
    return (
      <svg {...props}>
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }
  if (id === "smart") {
    return (
      <svg {...props}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "intelli") {
    return (
      <svg {...props}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    );
  }
  if (id === "secure") {
    return (
      <svg {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
      <rect x="3" y="7" width="12" height="10" rx="2" />
    </svg>
  );
}

function FleetValueVisual({ id }: { id: string }) {
  if (id === "tracking") {
    return (
      <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="fleet-value__visual-svg">
        <line x1="20" y1="120" x2="180" y2="120" stroke="#d4d4d8" strokeWidth="1" />
        {[32, 52, 72, 92, 112, 132, 152, 168].map((x) => (
          <line key={x} x1={x} y1="28" x2={x} y2="120" stroke="#e4e4e7" strokeWidth="1" />
        ))}
        <path d="M28 95 Q52 55, 76 72 T124 48 T172 62" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="124" cy="48" r="5" fill="#3b82f6" stroke="#fff" strokeWidth="1.5" />
        <path d="M28 95 Q52 55, 76 72 T124 48" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      </svg>
    );
  }
  if (id === "summary") {
    return (
      <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="fleet-value__visual-svg">
        <rect x="30" y="30" width="140" height="90" rx="4" stroke="#e4e4e7" strokeWidth="1" />
        <line x1="30" y1="55" x2="170" y2="55" stroke="#e4e4e7" strokeWidth="1" />
        {[50, 72, 94, 116, 138, 160].map((x, i) => (
          <rect key={x} x={x - 8} y={120 - (38 + i * 8)} width="14" height={38 + i * 8} rx="3" fill={i % 2 === 0 ? "#1a1a2e" : "#a1a1aa"} opacity={i % 2 === 0 ? 1 : 0.45} />
        ))}
        <path d="M42 100 L72 78 L102 88 L158 52" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "behaviour") {
    return (
      <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="fleet-value__visual-svg">
        <circle cx="100" cy="72" r="48" stroke="#e4e4e7" strokeWidth="1" />
        <line x1="100" y1="24" x2="100" y2="120" stroke="#e4e4e7" strokeWidth="1" />
        <line x1="52" y1="72" x2="148" y2="72" stroke="#e4e4e7" strokeWidth="1" />
        <line x1="66" y1="38" x2="134" y2="106" stroke="#e4e4e7" strokeWidth="1" />
        <line x1="134" y1="38" x2="66" y2="106" stroke="#e4e4e7" strokeWidth="1" />
        <path d="M100 36 L112 68 L148 72 L120 94 L128 128 L100 108 L72 128 L80 94 L52 72 L88 68 Z" fill="#1a1a2e" />
        <circle cx="100" cy="72" r="6" fill="#f59e0b" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="fleet-value__visual-svg">
      <circle cx="118" cy="82" r="42" stroke="#d4d4d8" strokeWidth="1" />
      <circle cx="98" cy="68" r="32" stroke="#a1a1aa" strokeWidth="1" />
      <circle cx="82" cy="58" r="22" fill="#1a1a2e" opacity="0.85" />
      <path d="M82 36 L82 58 L64 70" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 22 L188 22 M12 118 L188 118 M22 12 L22 128 M178 12 L178 128" stroke="#e4e4e7" strokeWidth="0.75" />
    </svg>
  );
}

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"90-day" | "annual">("annual");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadPlan, setLeadPlan] = useState<LeadPlan>("starter");

  const openLeadModal = useCallback((plan: LeadPlan = "starter") => {
    setLeadPlan(plan);
    setLeadModalOpen(true);
    setMobileMenuOpen(false);
  }, []);

  const closeLeadModal = useCallback(() => {
    setLeadModalOpen(false);
  }, []);

  useEffect(() => {
    setShowBanner(localStorage.getItem(BANNER_DISMISS_KEY) !== "true");
  }, []);

  const dismissBanner = () => {
    localStorage.setItem(BANNER_DISMISS_KEY, "true");
    setShowBanner(false);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  const starterPrice = billingCycle === "annual" ? 2599 : 1599;
  const proPrice = billingCycle === "annual" ? 2999 : 1999;
  const starterFeatures = [...PRICING_STARTER_FEATURES[billingCycle]];
  const proFeatures = [...starterFeatures, ...PRICING_PRO_EXTRA];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      <div className="site-header-stack">
        {showBanner && (
          <div className="announcement-bar">
            <div className="announcement-bar__inner">
              <p className="announcement-bar__text">
                Start your <strong>90-day trial</strong> from <strong>₹1,599/vehicle</strong> — free installation included.
              </p>
              <a href="#pricing" className="announcement-bar__link">
                View plans
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
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

        <header className="omega-header">
          <div className="omega-header__inner">
            <a href="#" className="omega-header__logo" onClick={closeMobileMenu}>
              <Image src={logoImg} alt="NViQ Logo" width={32} height={32} className="object-cover" priority />
              <span className="omega-header__logo-text">NViQ</span>
            </a>

            <nav className="omega-nav" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="omega-nav__link">{link.label}</a>
              ))}
            </nav>

            <div className="omega-header__actions">
              <button type="button" className="omega-btn-register" onClick={() => openLeadModal("starter")}>
                Get Started
              </button>
              <button
                type="button"
                className="omega-mobile-menu-btn"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  {mobileMenuOpen ? (
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

          {mobileMenuOpen && (
            <nav className="omega-mobile-nav" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="omega-mobile-nav__link" onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
              <button type="button" className="omega-mobile-nav__cta" onClick={() => openLeadModal("starter")}>
                Get Started
              </button>
            </nav>
          )}
        </header>
      </div>

      <div
        className={`site-header-spacer${showBanner ? " site-header-spacer--with-banner" : ""}`}
        aria-hidden="true"
      />

      {/* HERO SECTION */}
      <section className="omega-hero">
        <div className="omega-hero__bg" aria-hidden="true">
          <div className="omega-hero__glow omega-hero__glow--center" />
          <div className="omega-hero__glow omega-hero__glow--left" />
          <div className="omega-hero__glow omega-hero__glow--right" />
        </div>

        {/* Decorative grid boxes */}
        <div className="hero-grid-boxes" aria-hidden="true">
          <div className="grid-box grid-box--l1">
            <span className="grid-box__line grid-box__line--h" style={{ top: "28%" }} />
            <span className="grid-box__line grid-box__line--h" style={{ top: "52%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "35%" }} />
            <span className="grid-box__dot" style={{ top: 18, left: 18 }} />
            <span className="grid-box__dot" style={{ bottom: 18, right: 18 }} />
          </div>
          <div className="grid-box grid-box--accent grid-box--l2">
            <span className="grid-box__line grid-box__line--h" style={{ top: "40%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "50%" }} />
          </div>
          <div className="grid-box grid-box--l3">
            <span className="grid-box__line grid-box__line--h" style={{ top: "35%" }} />
            <span className="grid-box__dot" style={{ top: 18, right: 18 }} />
          </div>
          <div className="grid-box grid-box--accent grid-box--r1">
            <span className="grid-box__line grid-box__line--h" style={{ top: "30%" }} />
            <span className="grid-box__line grid-box__line--h" style={{ top: "60%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "40%" }} />
          </div>
          <div className="grid-box grid-box--r2">
            <span className="grid-box__line grid-box__line--v" style={{ left: "30%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "65%" }} />
            <span className="grid-box__dot" style={{ bottom: 18, left: 18 }} />
          </div>
          <div className="grid-box grid-box--accent grid-box--r3">
            <span className="grid-box__line grid-box__line--h" style={{ top: "45%" }} />
          </div>
          <div className="grid-box grid-box--t1">
            <span className="grid-box__line grid-box__line--v" style={{ left: "25%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "50%" }} />
            <span className="grid-box__line grid-box__line--v" style={{ left: "75%" }} />
          </div>
          <div className="grid-box grid-box--accent grid-box--t2">
            <span className="grid-box__line grid-box__line--h" style={{ top: "50%" }} />
          </div>
          <div className="grid-box grid-box--b1">
            <span className="grid-box__line grid-box__line--h" style={{ top: "40%" }} />
            <span className="grid-box__dot" style={{ top: 18, right: 18 }} />
          </div>
          <div className="grid-box grid-box--accent grid-box--b2">
            <span className="grid-box__line grid-box__line--v" style={{ left: "45%" }} />
            <span className="grid-box__dot" style={{ bottom: 18, left: 18 }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="omega-hero__content">
          <div className="omega-hero__badge">
            <span className="omega-hero__badge-icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M13.485 4.515a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414 0L3.757 8.929a1 1 0 1 1 1.414-1.414L7.414 9.757l4.95-4.95a1 1 0 0 1 1.414 0z" />
              </svg>
            </span>
            Free installation · 90-day trial · No hidden charges
          </div>

          <h1 className="omega-hero__heading">
            Track Every Truck.<br />
            Cut Fuel Costs
          </h1>

          <p className="omega-hero__desc">
            NViQ gives Indian fleet owners live GPS, fuel theft alerts, and route deviation SMS — all in one dashboard. Built for low-signal highways and remote depots.
          </p>

          <div className="omega-hero__ctas">
            <button type="button" className="omega-cta-primary" onClick={() => openLeadModal("starter")}>
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
            <a href="#services" className="omega-cta-secondary">
              See how it works
            </a>
          </div>
        </div>

      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="fleet-value">
        <div className="fleet-value__bg" aria-hidden="true" />

        <div className="fleet-value__inner">
          <div className="fleet-value__header">
            <h2 className="fleet-value__title">
              Provide Solutions
            </h2>
            <p className="fleet-value__subtitle">
              A focused operating layer that gives your team clear visibility, safer decisions, and stronger control every day.
            </p>
          </div>

          <div className="fleet-value__grid">
            {FLEET_VALUE.map((item, index) => (
              <article
                key={item.id}
                className={`fleet-value__card fleet-value__card--${item.accent}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="fleet-value__card-visual">
                  <FleetValueVisual id={item.id} />
                </div>
                <div className="fleet-value__card-body">
                  <h3 className="fleet-value__card-title">{item.title}</h3>
                  <p className="fleet-value__card-desc">{item.desc}</p>
                  {item.features && (
                    <>
                      <div className="fleet-value__card-divider" aria-hidden="true" />
                      <ul className="fleet-value__card-list">
                        {item.features.map((feature) => (
                          <li key={feature} className="fleet-value__card-item">
                            <span className="fleet-value__check" aria-hidden="true">
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3.5 8.5l3 3 6-6" />
                              </svg>
                            </span>
                            <span className="fleet-value__card-item-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SERIES SECTION */}
      <section className="fleet-series">
        <div className="fleet-series__inner">
          <div className="fleet-series__header">
            <h2 className="fleet-series__title">Who Think Ahead</h2>
            <p className="fleet-series__subtitle">
              Every feature is built around reducing cost, eliminating guesswork, and giving your team a measurable edge.
            </p>
          </div>

          <div className="fleet-series__strip">
            {FLEET_SERIES.map((series) => (
              <article key={series.id} className="fleet-series__item">
                <div className="fleet-series__icon">
                  <FleetSeriesIcon id={series.id} />
                </div>
                <div className="fleet-series__body">
                  <h3 className="fleet-series__label">{series.title}</h3>
                  <p className="fleet-series__desc">{series.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="pricing__inner">
          <div className="pricing__header">
            <h2 className="pricing__title">Transparent plans.</h2>
            <p className="fleet-series__subtitle">Transparent plans. No hidden charges.</p>
          </div>

          <div className="pricing__toggle-wrap">
            <div className="pricing__toggle" role="tablist" aria-label="Billing cycle">
              <span
                className="pricing__toggle-slider"
                style={{ transform: billingCycle === "annual" ? "translateX(100%)" : "translateX(0)" }}
                aria-hidden="true"
              />
              {(["90-day", "annual"] as const).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  role="tab"
                  aria-selected={billingCycle === cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`pricing__toggle-btn${billingCycle === cycle ? " pricing__toggle-btn--active" : ""}`}
                >
                  {cycle === "90-day" ? "90 Days" : "Annual"}
                </button>
              ))}
            </div>
          </div>

          <div className="pricing__grid">
            <article className="pricing__card">
              <span className="pricing__plan-badge">Starter</span>
              <p className="pricing__tagline">Basic tracking for small fleets</p>
              <div className="pricing__price-row">
                <span className="pricing__currency">₹</span>
                <span className="pricing__amount">{starterPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="pricing__divider" />
              <ul className="pricing__features">
                {starterFeatures.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <PricingCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="pricing__cta pricing__cta--ghost" onClick={() => openLeadModal("starter")}>
                Choose Plan
                <span aria-hidden="true">→</span>
              </button>
            </article>

            <article className="pricing__card pricing__card--featured">
              <span className="pricing__recommended">★ Recommended</span>
              <span className="pricing__plan-badge pricing__plan-badge--featured">Professional</span>
              <p className="pricing__tagline">Full tracking suite for growing fleets</p>
              <div className="pricing__price-row pricing__price-row--featured">
                <span className="pricing__currency">₹</span>
                <span className="pricing__amount">{proPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="pricing__divider" />
              <ul className="pricing__features">
                {proFeatures.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <PricingCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="pricing__cta pricing__cta--primary" onClick={() => openLeadModal("professional")}>
                Get Started
                <span aria-hidden="true">→</span>
              </button>
            </article>

            <article className="pricing__card">
              <span className="pricing__plan-badge">Enterprise</span>
              <p className="pricing__tagline">Full integration for large operations</p>
              <div className="pricing__price-row">
                <span className="pricing__amount pricing__amount--custom">Custom</span>
              </div>
              <div className="pricing__divider" />
              <ul className="pricing__features">
                {PRICING_ENTERPRISE_FEATURES.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <PricingCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="pricing__cta pricing__cta--ghost" onClick={() => openLeadModal("enterprise")}>
                Contact Sales
                <span aria-hidden="true">→</span>
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="faq">
        <div className="faq__inner">
          <div className="faq__layout">
            <div className="faq__intro">
              <div className="faq__header">
                <p className="faq__eyebrow">FAQ</p>
                <h2 className="faq__title">Got questions?</h2>
                <p className="faq__subtitle">
                  Everything you need to know about setup, coverage, billing, and hardware — answered before you commit.
                </p>
              </div>

              <aside className="faq__support">
                <p className="faq__support-label">Still need help?</p>
                <p className="faq__support-text">
                  Our fleet specialists are available Monday–Saturday, 9 AM – 7 PM IST.
                </p>
                <a href="tel:+918888888888" className="faq__support-cta">
                  Speak to a specialist
                  <span aria-hidden="true">→</span>
                </a>
              </aside>
            </div>

            <div className="faq__list">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                const panelId = `faq-panel-${idx}`;
                const triggerId = `faq-trigger-${idx}`;

                return (
                  <article
                    key={item.question}
                    className={`faq__item${isOpen ? " faq__item--open" : ""}`}
                  >
                    <button
                      id={triggerId}
                      type="button"
                      className="faq__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    >
                      <span className="faq__trigger-main">
                        <span className="faq__meta">
                          <span className="faq__index">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="faq__tag">{item.tag}</span>
                        </span>
                        <span className="faq__question">{item.question}</span>
                      </span>
                      <span className="faq__icon" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={panelId}
                      className="faq__panel"
                      role="region"
                      aria-labelledby={triggerId}
                    >
                      <div className="faq__panel-inner">
                        <p className="faq__answer">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <a href="#" className="site-footer__logo">
                <Image src={logoImg} alt="NViQ Logo" width={32} height={32} className="object-cover" />
                <span className="site-footer__logo-text">
                  NV<span className="site-footer__logo-accent">i</span>Q
                </span>
              </a>
              <p className="site-footer__tagline">
                Real-time fleet tracking, fuel insights, and compliance tools built for Indian logistics teams.
              </p>
            </div>

            <div className="site-footer__col">
              <h3 className="site-footer__heading">Quick Links</h3>
              <ul className="site-footer__links">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="site-footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h3 className="site-footer__heading">Contact</h3>
              <ul className="site-footer__links">
                <li>
                  <a href="tel:+918888888888" className="site-footer__link">+91 88888 88888</a>
                </li>
                <li>
                  <a href="mailto:hello@nviq.com" className="site-footer__link">hello@nviq.com</a>
                </li>
                <li>
                  <span className="site-footer__link site-footer__link--static">Pune, Maharashtra</span>
                </li>
              </ul>
            </div>

            <div className="site-footer__newsletter">
              <h3 className="site-footer__heading">Newsletter</h3>
              <p className="site-footer__newsletter-desc">
                Fleet tips, product updates, and industry insights — monthly, no spam.
              </p>
              {newsletterSubmitted ? (
                <p className="site-footer__newsletter-success" role="status">
                  You&apos;re subscribed. Thanks for joining!
                </p>
              ) : (
                <form className="site-footer__form" onSubmit={handleNewsletterSubmit}>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="site-footer__input"
                    autoComplete="email"
                  />
                  <button type="submit" className="site-footer__submit">
                    Subscribe
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copy">
              &copy; {new Date().getFullYear()} NViQ Technologies. All rights reserved.
            </p>
            <div className="site-footer__legal">
              <a href="#" className="site-footer__legal-link">Privacy Policy</a>
              <a href="#" className="site-footer__legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3.5 bg-background/95 backdrop-blur-md border-t border-border z-50 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <Image src={logoImg} alt="NViQ Logo" width={24} height={24} className="object-cover" />
          <span className="text-xs font-black text-foreground">NV<span className="text-primary">i</span>Q</span>
        </div>
        <button type="button" className="group inline-flex h-9 items-center justify-center overflow-hidden text-xs font-bold" onClick={() => openLeadModal("starter")}>
          <span className="flex h-full items-center bg-foreground text-background px-4">Start Trial</span>
          <span className="flex h-full items-center bg-primary text-white px-3">→</span>
        </button>
      </div>

      <LeadModal open={leadModalOpen} plan={leadPlan} onClose={closeLeadModal} />

    </div>
  );
}
