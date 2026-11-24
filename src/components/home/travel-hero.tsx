// Home hero in the style of a travel site: a wide sunrise-over-the-highway
// scene, one big centred line, and a single search-style bar to start. The
// scene is inline SVG so it costs no image download and stays sharp everywhere.
import PlateLeadForm from "@/components/home/plate-lead-form";

const TRUST = ["ARAI / ICAT certified", "Fitted at your door", "Lifetime replacement", "10,000+ vehicles"];

// Side-view vehicles, all facing right, drawn to sit on the foreground road.
const wheel = (cx: number, cy: number, r = 11) => (
  <g key={cx}>
    <circle cx={cx} cy={cy} r={r} fill="#0B1020" />
    <circle cx={cx} cy={cy} r={r * 0.45} fill="#9AA3B5" />
  </g>
);

function Truck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 230 92" className={className} aria-hidden="true">
      <rect x="2" y="6" width="150" height="62" rx="4" fill="#F4F6FA" />
      <rect x="2" y="58" width="150" height="10" fill="#D5DAE3" />
      <text x="77" y="44" textAnchor="middle" fontSize="24" fontWeight="800" fill="#1D5BD8" fontFamily="sans-serif">NViQ</text>
      <rect x="152" y="62" width="10" height="6" fill="#2A3352" />
      <path d="M160 24 H198 Q206 24 210 34 L222 52 V72 H160Z" fill="#1D5BD8" />
      <path d="M180 30 H198 Q202 30 205 36 L213 50 H180Z" fill="#BFDBFE" />
      <rect x="216" y="60" width="8" height="5" rx="1" fill="#FFE9A8" />
      <rect x="160" y="68" width="66" height="6" fill="#18202E" />
      {[wheel(32, 76), wheel(60, 76), wheel(124, 76), wheel(200, 76)]}
    </svg>
  );
}

function Bus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 210 92" className={className} aria-hidden="true">
      <rect x="2" y="8" width="202" height="64" rx="12" fill="#E5484D" />
      <rect x="2" y="54" width="202" height="6" fill="#FFFFFF" opacity="0.85" />
      {[14, 46, 78, 110, 142].map((x) => (
        <rect key={x} x={x} y="18" width="26" height="22" rx="3" fill="#CDE4FF" />
      ))}
      <path d="M176 18 H196 Q202 18 202 26 V44 H176Z" fill="#CDE4FF" />
      <rect x="196" y="62" width="8" height="5" rx="1" fill="#FFE9A8" />
      {[wheel(40, 76, 12), wheel(166, 76, 12)]}
    </svg>
  );
}

function Taxi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 76" className={className} aria-hidden="true">
      <rect x="58" y="6" width="26" height="9" rx="2" fill="#18202E" />
      <text x="71" y="13.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="#FFC83D" fontFamily="sans-serif">TAXI</text>
      <path d="M8 48 Q8 38 20 36 L40 34 L56 16 H98 Q106 16 112 24 L124 36 Q142 38 144 48 V58 H8Z" fill="#FFC83D" />
      <path d="M46 34 L60 21 H76 V34Z M82 21 H96 Q101 21 105 26 L112 34 H82Z" fill="#1F2A44" />
      <rect x="8" y="48" width="136" height="4" fill="#18202E" opacity="0.8" />
      <rect x="136" y="40" width="7" height="5" rx="1" fill="#FFF4D6" />
      {[wheel(36, 60, 11), wheel(116, 60, 11)]}
    </svg>
  );
}

function SchoolVan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 82" className={className} aria-hidden="true">
      <path d="M4 18 Q4 8 14 8 H112 Q122 8 130 18 L150 42 Q156 44 156 52 V64 H4Z" fill="#F59E0B" />
      {[12, 40, 68].map((x) => (
        <rect key={x} x={x} y="16" width="22" height="18" rx="3" fill="#FEF3C7" />
      ))}
      <path d="M98 16 H114 Q118 16 122 20 L136 38 H98Z" fill="#FEF3C7" />
      <text x="54" y="51" textAnchor="middle" fontSize="11" fontWeight="800" fill="#18202E" fontFamily="sans-serif">SCHOOL</text>
      <rect x="148" y="48" width="7" height="5" rx="1" fill="#FFF4D6" />
      {[wheel(34, 66, 11), wheel(126, 66, 11)]}
    </svg>
  );
}

const FLEET = [
  { name: "Truck", speed: "62 km/h", Art: Truck, size: "w-[92px] sm:w-[190px] lg:w-[230px] short:lg:w-[176px]" },
  { name: "Bus", speed: "48 km/h", Art: Bus, size: "w-[88px] sm:w-[172px] lg:w-[210px] short:lg:w-[160px] short:lg:w-[124px]" },
  { name: "Taxi", speed: "36 km/h", Art: Taxi, size: "w-[66px] sm:w-[120px] lg:w-[150px] short:lg:w-[116px]" },
  { name: "School van", speed: "30 km/h", Art: SchoolVan, size: "hidden sm:block sm:w-[130px] lg:w-[160px] short:lg:w-[124px]" },
];

/** Foreground highway with the vehicles we track, each tagged live. */
function FleetRoad() {
  return (
    <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
      <div className="relative mx-auto flex max-w-6xl items-end justify-around px-2">
        {FLEET.map(({ name, speed, Art, size }) => (
          <div key={name} className={`flex flex-col items-center ${size.includes("hidden") ? "hidden sm:flex" : ""}`}>
            <span className="mb-1.5 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] sm:mb-2 sm:px-2.5 sm:py-1 font-bold text-[#18202E] shadow-lg sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {name}
              <span className="hidden font-semibold text-slate-500 sm:inline">· {speed}</span>
            </span>
            <span className="mb-1 h-2 w-px bg-white/60 sm:h-3" />
            <Art className={`${size.replace("hidden sm:block ", "")} relative -mb-[6px] h-auto drop-shadow-[0_10px_12px_rgba(0,0,0,0.45)]`} />
          </div>
        ))}
      </div>
      {/* asphalt with a dashed centre line */}
      <div className="h-10 bg-[#141B30] sm:h-16">
        <div className="h-1 bg-[#2A3352]" />
        <div className="mt-3.5 h-[3px] bg-[repeating-linear-gradient(90deg,#FFD27A_0_36px,transparent_36px_72px)] opacity-80 sm:mt-6" />
      </div>
    </div>
  );
}

function HighwayScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="th-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A1630" />
          <stop offset="0.45" stopColor="#1E3F8A" />
          <stop offset="0.72" stopColor="#E9875A" />
          <stop offset="0.86" stopColor="#FFC97A" />
        </linearGradient>
        <radialGradient id="th-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFF4D6" />
          <stop offset="0.35" stopColor="#FFD27A" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFB45E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="th-road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A3352" />
          <stop offset="1" stopColor="#0C1222" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#th-sky)" />
      <circle cx="1060" cy="590" r="230" fill="url(#th-sun)" />
      <circle cx="1060" cy="590" r="58" fill="#FFF1CC" />

      {/* far, mid and near hills */}
      <path d="M0 640 L120 590 L230 615 L360 560 L470 600 L600 548 L720 596 L860 552 L980 600 L1110 560 L1240 604 L1340 572 L1440 600 V900 H0Z" fill="#8A6A98" />
      <path d="M0 680 Q180 620 340 664 T660 650 T980 668 T1300 640 T1440 656 V900 H0Z" fill="#3D3F78" />
      <path d="M0 720 Q240 684 480 708 T960 704 T1440 714 V900 H0Z" fill="#1B2348" />

    </svg>
  );
}

export default function TravelHero() {
  return (
    <section className="relative isolate flex h-[calc(100svh-57px)] min-h-[640px] max-h-[960px] xl:h-[100svh] xl:min-h-[600px] flex-col overflow-hidden pt-16 text-white">
      <HighwayScene />
      <FleetRoad />
      {/* keeps the text readable over the brightest part of the sky */}
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(10,22,48,0.55),transparent_65%)]" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pb-[132px] pt-6 text-center sm:px-6 sm:pb-[190px] lg:pb-[205px] short:lg:pb-[170px]">
        <p className={`rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:text-sm short:py-1`}>
          AIS 140 VLTD &amp; GPS tracking · across India
        </p>

        <h1 className="mt-3 text-balance font-display text-[30px] font-bold leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:mt-5 sm:text-[38px] lg:text-[52px] short:mt-3 short:lg:text-[44px]">
          Tracker at your door. <span className="text-[#FFC83D]">Vahan in an hour.</span>
        </h1>

        <div className={`mt-6 w-full max-w-4xl sm:mt-7 short:mt-4`}>
          <PlateLeadForm variant="bar" />
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-left text-xs font-medium text-white/85 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 sm:text-sm short:mt-3">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC83D]" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
