// Static, accurate sketch of the NViQ tracking app (one vehicle screen) for the
// home page. Built in markup rather than an image so the text is crisp and correct.
export default function AppPreview() {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[34px] border-[10px] border-[#18202E] bg-white shadow-[0_30px_60px_-25px_rgba(24,32,46,0.45)]" aria-hidden="true">
      <div className="flex items-center justify-between px-4 pt-3 text-[11px] font-semibold text-slate-500">
        <span>9:41</span>
        <span className="h-1.5 w-14 rounded-full bg-[#18202E]" />
        <span>4G</span>
      </div>

      <div className="flex items-center justify-between px-4 pb-3 pt-2">
        <span className="rounded-[4px] border-2 border-[#18202E] bg-[#1D5BD8] px-2 py-0.5 font-display text-sm font-bold tracking-wider text-white">
          RJ 14 GA 1234
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0F8A4B]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#0F8A4B] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0F8A4B]" />
          </span>
          Moving
        </span>
      </div>

      {/* Map: grid of roads with today's route */}
      <svg viewBox="0 0 280 170" className="block w-full bg-[#EEF1EC]">
        <g stroke="#FFFFFF" strokeWidth="7">
          <path d="M0 40 H280 M0 118 H280 M70 0 V170 M190 0 V170" />
        </g>
        <path d="M0 150 C60 140 90 160 140 120 S230 60 280 72" stroke="#93C5FD" strokeWidth="9" fill="none" opacity="0.55" />
        <path d="M30 140 C70 128 96 150 138 118 S196 62 226 60" stroke="#1D5BD8" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="140" r="5" fill="#FFFFFF" stroke="#18202E" strokeWidth="2" />
        <circle cx="226" cy="60" r="9" fill="#1D5BD8" opacity="0.2" />
        <circle cx="226" cy="60" r="5.5" fill="#1D5BD8" stroke="#FFFFFF" strokeWidth="2" />
        <text x="84" y="33" fontSize="10" fill="#5B6577" fontFamily="sans-serif">NH 48</text>
      </svg>

      <dl className="grid grid-cols-3 border-b border-slate-200 text-center">
        {[
          ["52 km/h", "Speed"],
          ["186 km", "Today"],
          ["Ignition on", "Engine"],
        ].map(([v, l]) => (
          <div key={l} className="px-1 py-2.5">
            <dt className="sr-only">{l}</dt>
            <dd className="text-[13px] font-bold text-[#18202E]">{v}</dd>
            <dd className="text-[10px] text-slate-500">{l}</dd>
          </div>
        ))}
      </dl>

      <ul className="space-y-2 px-4 py-3 text-[12px]">
        <li className="flex gap-2 border-l-[3px] border-red-500 bg-red-50 px-2 py-1.5">
          <span className="font-semibold text-red-800">Overspeed 84 km/h</span>
          <span className="ml-auto text-red-700/70">2 min ago</span>
        </li>
        <li className="flex gap-2 border-l-[3px] border-[#1D5BD8] bg-blue-50 px-2 py-1.5">
          <span className="font-semibold text-blue-900">Left Kishangarh yard</span>
          <span className="ml-auto text-blue-900/60">9:05 am</span>
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-2 px-4 pb-5">
        <span className="bg-[#18202E] py-2 text-center text-[12px] font-semibold text-white">Share live link</span>
        <span className="border border-slate-300 py-2 text-center text-[12px] font-semibold text-[#18202E]">Route history</span>
      </div>
    </div>
  );
}
