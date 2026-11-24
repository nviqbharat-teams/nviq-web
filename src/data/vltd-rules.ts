// Rules behind the free tools (/tools/ais-140-checker, /tools/fitness-checklist).
// Basis: CMVR Rule 125H. Public service vehicles and national-permit goods vehicles
// need AIS 140 VLTD + emergency buttons; two-wheelers, e-rickshaws, three-wheelers
// and vehicles that need no permit are exempt. State mining departments (RJ, MP, GJ,
// HR in our data) separately need VLTD for mineral transit passes.
// Pure functions, no prices: safe to ship to the browser.

export type Verdict = "required" | "depends" | "not_required";

export interface VehicleType {
  id: string;
  label: string;
  group: "passenger" | "goods" | "special" | "exempt";
  /** Segment landing page for the CTA, if any */
  segment?: string;
}

export const VEHICLE_TYPES: VehicleType[] = [
  { id: "school_bus", label: "School bus / school van", group: "passenger", segment: "school-bus" },
  { id: "bus", label: "Bus (stage / contract / tourist)", group: "passenger", segment: "bus-operator" },
  { id: "college_bus", label: "College / staff bus", group: "passenger", segment: "college-bus" },
  { id: "taxi", label: "Taxi / cab (yellow plate)", group: "passenger", segment: "taxi-cab" },
  { id: "tourist_taxi", label: "Tourist taxi / tempo traveller", group: "passenger", segment: "taxi-cab" },
  { id: "truck", label: "Truck / trailer (goods)", group: "goods", segment: "truck-transporter" },
  { id: "tanker", label: "Tanker (oil, gas, water, chemical)", group: "goods", segment: "tanker" },
  { id: "tipper", label: "Mining dumper / tipper / sand truck", group: "goods", segment: "mining-tipper" },
  { id: "ambulance", label: "Ambulance", group: "special", segment: "ambulance" },
  { id: "auto", label: "Auto-rickshaw / three-wheeler", group: "exempt" },
  { id: "erickshaw", label: "E-rickshaw", group: "exempt" },
  { id: "two_wheeler", label: "Two-wheeler", group: "exempt" },
  { id: "private_car", label: "Private car (white plate)", group: "exempt" },
];

export type PermitType = "national" | "state" | "none" | "unknown";

export interface CheckInput {
  vehicle: string;
  permit: PermitType;
  stateName: string;
  stateHasMining: boolean;
}

export interface CheckResult {
  verdict: Verdict;
  headline: string;
  reasons: string[];
  /** What the visitor should do next */
  next: string;
}

export function checkVltd({ vehicle, permit, stateName, stateHasMining }: CheckInput): CheckResult {
  const v = VEHICLE_TYPES.find((x) => x.id === vehicle);
  if (!v) {
    return { verdict: "depends", headline: "Tell us your vehicle", reasons: [], next: "Share your vehicle number and we confirm." };
  }

  if (v.group === "exempt") {
    return {
      verdict: "not_required",
      headline: `AIS 140 VLTD is not required for a ${v.label.toLowerCase()}`,
      reasons: [
        "CMVR Rule 125H exempts two-wheelers, three-wheelers, e-rickshaws and vehicles that do not need a permit.",
        "A GPS tracker is still useful for theft protection and live location.",
      ],
      next: "Want a GPS tracker for theft protection? Ask for a quote.",
    };
  }

  if (v.group === "passenger") {
    return {
      verdict: "required",
      headline: `Yes: AIS 140 VLTD is mandatory for a ${v.label.toLowerCase()}`,
      reasons: [
        "It is a public service vehicle, so CMVR Rule 125H requires an AIS 140 VLTD with emergency panic buttons.",
        `The RTO in ${stateName} checks it on Vahan during fitness, permit and registration work.`,
      ],
      next: "Get it fitted and updated on Vahan before your fitness or permit date.",
    };
  }

  if (v.id === "ambulance") {
    return {
      verdict: "depends",
      headline: "Usually yes for permit ambulances",
      reasons: [
        `Many states, including ${stateName} in most cases, treat permit ambulances as public service vehicles and ask for AIS 140 VLTD at fitness.`,
        "Hospital, 108 and 102 contracts usually require GPS tracking anyway.",
      ],
      next: "Share your vehicle number and we confirm on Vahan.",
    };
  }

  // Goods vehicles
  if (permit === "national") {
    return {
      verdict: "required",
      headline: `Yes: AIS 140 VLTD is mandatory for a national-permit ${v.label.toLowerCase()}`,
      reasons: [
        "National-permit goods vehicles need an AIS 140 VLTD with emergency buttons.",
        "Without it on Vahan, the permit and fitness cannot be renewed.",
      ],
      next: "Get it fitted and updated on Vahan before your permit or fitness date.",
    };
  }

  if (v.id === "tipper") {
    return stateHasMining
      ? {
          verdict: "required",
          headline: `Yes: needed for mining transit passes in ${stateName}`,
          reasons: [
            `The ${stateName} mining department needs a VLTD for mineral transport vehicles to generate transit passes.`,
            "The device must be accepted on the state mining portal, not just any GPS.",
          ],
          next: "Fit a mining-portal-integrated VLTD so your transit passes are not blocked.",
        }
      : {
          verdict: "depends",
          headline: `Depends on the ${stateName} mining department`,
          reasons: [
            "Several states require a VLTD for mineral and sand transport vehicles. Rules differ by state.",
            "National-permit tippers always need one.",
          ],
          next: "Share your vehicle number and what you carry. We confirm for your state.",
        };
  }

  if (v.id === "tanker") {
    return {
      verdict: "depends",
      headline: "Depends on permit and load",
      reasons: [
        "State-permit tankers need a VLTD only where the state or the hazardous-goods rules require it.",
        "Oil and gas companies usually require GPS tracking in their transport contracts.",
      ],
      next: "Share your vehicle number and contract type. We confirm what applies.",
    };
  }

  return {
    verdict: permit === "none" ? "not_required" : "depends",
    headline:
      permit === "none"
        ? "Not required if the truck runs without a permit"
        : `Depends on ${stateName} rules for state-permit trucks`,
    reasons: [
      "National-permit goods vehicles need AIS 140 VLTD. For state-permit trucks it depends on your state and load (mining, sand, hazardous goods).",
      "Getting a national permit later? You will need the VLTD then.",
    ],
    next: "Share your vehicle number and we confirm on Vahan.",
  };
}

// ── Fitness checklist ───────────────────────────────────────────────────────

export interface ChecklistItem {
  item: string;
  note?: string;
}

export function fitnessChecklist(vehicle: string, permit: PermitType, stateName: string, stateHasMining: boolean): ChecklistItem[] {
  const v = VEHICLE_TYPES.find((x) => x.id === vehicle);
  const vltd = checkVltd({ vehicle, permit, stateName, stateHasMining });
  const list: ChecklistItem[] = [
    { item: "Registration Certificate (RC)", note: "Owner name and address must match Vahan" },
    { item: "Valid insurance", note: "Third-party at minimum, not expiring before the inspection" },
    { item: "Pollution Under Control (PUC) certificate" },
    { item: "Road tax paid up to date", note: "Pending tax or challans block fitness on Vahan" },
  ];
  if (v?.group !== "exempt") list.push({ item: "Valid permit", note: "Renew it in the same window if it is expiring" });
  if (vltd.verdict === "required") {
    list.push({ item: "AIS 140 VLTD fitment certificate", note: "Device must be live and updated on Vahan, with 2 panic buttons" });
  } else if (vltd.verdict === "depends") {
    list.push({ item: "AIS 140 VLTD certificate (if applicable)", note: vltd.headline });
  }
  if (v && v.group !== "exempt") {
    list.push({ item: "Speed limiting device certificate", note: "For transport vehicles where required" });
    list.push({ item: "Retro-reflective tape / reflectors certificate" });
  }
  if (v?.group === "passenger") {
    list.push({ item: "Fire extinguisher and first-aid box" });
    list.push({ item: "Emergency exits and seats in working condition" });
  }
  if (vehicle === "school_bus") {
    list.push({ item: "School bus colour, name and contact details painted", note: "As per your state school-bus rules" });
    list.push({ item: "Driver with valid licence and PSV badge" });
  }
  if (v?.group === "goods") list.push({ item: "Load body and number plates (HSRP) as per RC" });
  list.push({ item: "Vehicle in working condition", note: "Lights, brakes, tyres, horn, wipers, steering" });
  return list;
}
