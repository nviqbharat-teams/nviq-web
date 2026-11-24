"use client";

// Builds an embeddable HTML badge that links back to the partner's local NViQ page.
// Every embed = one relevant backlink with local keyword anchor text.
import React, { useMemo, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Select } from "@/components/ui/select";

export interface BadgeRto {
  s: string; // state slug
  sn: string; // state name
  c: string; // city slug
  cn: string; // city name
  r: string; // rto slug
  code: string;
}

const ORIGIN = "https://www.naviqbharat.com";

export default function PartnerBadgeBuilder({ rtos }: { rtos: BadgeRto[] }) {
  const states = useMemo(() => Array.from(new Map(rtos.map((x) => [x.s, x.sn])).entries()), [rtos]);
  const [stateSlug, setStateSlug] = useState(states[0]?.[0] || "");
  const inState = rtos.filter((x) => x.s === stateSlug);
  const [rtoSlug, setRtoSlug] = useState(inState[0]?.r || "");
  const [copied, setCopied] = useState(false);
  const sel = inState.find((x) => x.r === rtoSlug) || inState[0];

  const href = sel ? `${ORIGIN}/vltd/${sel.s}/${sel.c}/${sel.r}?utm_source=partner_badge&utm_medium=referral` : ORIGIN;
  const anchor = sel ? `AIS 140 VLTD fitment in ${sel.code} (${sel.cn})` : "AIS 140 VLTD fitment";
  const snippet = `<a href="${href}" title="${anchor}" target="_blank" rel="noopener"><img src="${ORIGIN}/badges/nviq-vltd-partner.svg" alt="NViQ Authorised AIS 140 VLTD Partner" width="220" height="64" loading="lazy"></a>\n<p style="font:13px Arial,sans-serif;margin:4px 0 0"><a href="${href}" target="_blank" rel="noopener">${anchor}</a></p>`;

  const copy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Your state</span>
          <Select
            aria-label="Your state"
            value={stateSlug}
            onValueChange={(v) => {
              setStateSlug(v);
              setRtoSlug(rtos.find((x) => x.s === v)?.r || "");
            }}
            options={states.map(([slug, name]) => ({ value: slug, label: name }))}
            searchPlaceholder="Search state…"
            className="mt-1"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Your RTO</span>
          <Select
            aria-label="Your RTO"
            value={sel?.r || ""}
            onValueChange={setRtoSlug}
            options={inState.map((x) => ({ value: x.r, label: `${x.code} · ${x.cn}` }))}
            searchPlaceholder="Search RTO code or city…"
            className="mt-1"
          />
        </label>
      </div>

      <div>
        <div className="text-xs font-semibold text-gray-700 mb-2">Preview</div>
        <div className="rounded-xl border border-dashed border-gray-300 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/badges/nviq-vltd-partner.svg" alt="NViQ Authorised AIS 140 VLTD Partner" width={220} height={64} />
          <p className="mt-1 text-[13px] text-blue-700 underline">{anchor}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700">Copy this code into your website (footer or contact page)</span>
          <button type="button" onClick={copy} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700">
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied" : "Copy code"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap break-all rounded-xl bg-gray-900 p-4 text-[11px] leading-relaxed text-gray-100">{snippet}</pre>
      </div>
    </div>
  );
}
