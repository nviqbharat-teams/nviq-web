"use client";

// Sticky bottom bar on mobile/tablet (below the desktop-nav breakpoint): Call | WhatsApp | Get Price.
// Hidden inside the mobile app (html.is-app) and on the live-share page.
// Clicks are tracked by instrumentation-client.
import { usePathname } from "next/navigation";
import { PhoneCall, MessageCircle, Tag, Handshake } from "lucide-react";
import { SALES_TEL_HREF } from "@/lib/contact";
import { isHindiPath, pageWhatsappHref } from "@/lib/nav-context";
import { useLeadModal } from "@/context/lead-modal-context";

export default function StickyContactBar() {
  const pathname = usePathname() || "/";
  const { openLeadModal } = useLeadModal();
  if (pathname.startsWith("/live/")) return null;

  const hindi = isHindiPath(pathname);
  const wa = pageWhatsappHref(pathname, hindi);
  const isPartner = pathname.startsWith("/rto-partner");
  const t = hindi
    ? { call: "कॉल करें", wa: "WhatsApp", price: "रेट पाएं", join: "पार्टनर बनें" }
    : { call: "Call", wa: "WhatsApp", price: "Get Price", join: "Join" };

  const onPrice = () => {
    // Prefer the page's own form (it captures the lead with vehicle count / partner details).
    const ids = isPartner ? ["apply"] : ["quick-lead", "calculator-section"];
    const form = ids.map((id) => document.getElementById(id)).find(Boolean);
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      form.querySelector<HTMLInputElement>("input[type=tel], input")?.focus({ preventScroll: true });
    } else {
      openLeadModal("starter");
    }
  };

  return (
    <>
      {/* Spacer so the bar never covers the footer */}
      <div className="h-16 xl:hidden sticky-contact-spacer" aria-hidden="true" />
      <nav
        aria-label="Quick contact"
        className="sticky-contact-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gray-200 bg-white/95 backdrop-blur shadow-[0_-4px_16px_rgba(0,0,0,0.06)] xl:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a href={SALES_TEL_HREF} data-track="sticky_call" className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold text-blue-700 active:bg-blue-50">
          <PhoneCall className="h-5 w-5" />
          {t.call}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-track="sticky_whatsapp"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-emerald-600 py-2 text-xs font-bold text-white active:bg-emerald-700"
        >
          <MessageCircle className="h-5 w-5" />
          {t.wa}
        </a>
        <button
          type="button"
          data-track={isPartner ? "sticky_partner_join" : "sticky_get_price"}
          onClick={onPrice}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold text-blue-700 active:bg-blue-50"
        >
          {isPartner ? <Handshake className="h-5 w-5" /> : <Tag className="h-5 w-5" />}
          {isPartner ? t.join : t.price}
        </button>
      </nav>
    </>
  );
}
