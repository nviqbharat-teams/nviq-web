// RTO work landing pages: /rto-services/[service] (+ /[state]).
// Many visitors arrive searching for RTO work (fitness, permit, transfer...), not
// "VLTD". These pages answer that search, collect the lead, and bundle VLTD fitment
// where the RTO work needs it. Documents follow Vahan / CMVR forms; fees are not
// shown (they vary by state and vehicle).

export interface RtoService {
  slug: string;
  name: string; // "Commercial Vehicle Fitness Certificate"
  short: string; // "Fitness Certificate"
  searchTitle: string;
  metaDescription: string;
  intro: string;
  vltdNeeded: boolean;
  vltdNote: string;
  whoNeeds: string[];
  documents: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  relatedSegments: string[]; // segment slugs
}

export const RTO_SERVICES: RtoService[] = [
  {
    slug: "fitness-certificate",
    name: "Commercial Vehicle Fitness Certificate",
    short: "Fitness Certificate",
    searchTitle: "Commercial Vehicle Fitness Certificate & Renewal | VLTD Included",
    metaDescription:
      "Get your commercial vehicle fitness certificate or renewal done without delays. Document check, VLTD fitment and Vahan update in one visit for trucks, buses, taxis and school vans.",
    intro:
      "Fitness renewal is where most commercial vehicles get stuck: a missing VLTD certificate, an expired document or a wrong entry on Vahan. We check your papers, fit the AIS 140 VLTD if needed and get you ready for the inspection.",
    vltdNeeded: true,
    vltdNote: "Buses, taxis, school vehicles and national-permit goods vehicles need a working AIS 140 VLTD on Vahan before fitness.",
    whoNeeds: ["Trucks and trailers", "Buses and school buses", "Taxis and cabs", "Tankers and tippers"],
    documents: [
      "Registration Certificate (RC)",
      "Valid insurance",
      "Pollution Under Control (PUC) certificate",
      "Road tax paid receipt",
      "Permit (for permit vehicles)",
      "AIS 140 VLTD fitment certificate (buses, taxis, national permit)",
      "Speed limiting device and reflective tape certificates (where applicable)",
    ],
    steps: [
      "Share your vehicle number on WhatsApp",
      "We check RC, insurance, PUC, tax and VLTD status on Vahan",
      "VLTD fitted and updated on Vahan if missing",
      "Fitness application and slot booked, inspection at the RTO or ATS",
    ],
    faqs: [
      {
        q: "Why is my fitness stuck on VLTD?",
        a: "For buses, taxis, school vehicles and national-permit goods vehicles, Vahan checks for an active AIS 140 VLTD before fitness. If the device is missing, dead or not updated on Vahan, the fitness cannot proceed until it is fixed.",
      },
      {
        q: "How fast can you get my vehicle fitness-ready?",
        a: "If the only problem is the VLTD, we fit it and update Vahan in about 1 hour. Document issues depend on the case; share your vehicle number and we tell you exactly what is pending.",
      },
    ],
    relatedSegments: ["truck-transporter", "bus-operator", "taxi-cab", "school-bus"],
  },
  {
    slug: "national-permit",
    name: "National Permit for Goods Vehicles",
    short: "National Permit",
    searchTitle: "National Permit for Trucks | Apply & Renew with VLTD",
    metaDescription:
      "Apply for or renew a national permit for your truck. Document check, AIS 140 VLTD fitment and Vahan update, plus authorisation renewal support for transporters.",
    intro:
      "A national permit lets your goods vehicle run across India. The permit needs a valid RC, fitness and an AIS 140 VLTD on Vahan. We help you get every piece ready so the permit is issued without back-and-forth.",
    vltdNeeded: true,
    vltdNote: "National-permit goods vehicles must have an AIS 140 VLTD with panic buttons.",
    whoNeeds: ["Trucks and trailers running across states", "Tankers on inter-state routes", "Transport companies"],
    documents: ["RC", "Valid fitness certificate", "Insurance", "PUC", "Road tax receipt", "AIS 140 VLTD certificate", "Owner ID and address proof"],
    steps: [
      "Share vehicle number and permit status",
      "We check fitness, tax and VLTD on Vahan",
      "VLTD fitted if missing, records updated",
      "Permit application and authorisation fee filed online",
    ],
    faqs: [
      {
        q: "Is VLTD compulsory for national permit?",
        a: "Yes. National-permit goods vehicles need an AIS 140 VLTD with emergency buttons, and it must show on Vahan for the permit to be issued or renewed.",
      },
    ],
    relatedSegments: ["truck-transporter", "tanker"],
  },
  {
    slug: "tourist-permit",
    name: "All India Tourist Permit (AITP)",
    short: "Tourist Permit",
    searchTitle: "All India Tourist Permit for Taxi & Bus | AITP with VLTD",
    metaDescription:
      "Get an All India Tourist Permit for your taxi, tempo traveller or tourist bus. Document check, AIS 140 VLTD fitment and Vahan update for a smooth AITP application.",
    intro:
      "Tourist taxis, tempo travellers and tourist buses need a tourist permit to run across states. The vehicle also needs an AIS 140 VLTD on Vahan. We prepare the documents and fit the VLTD so your permit is not held up.",
    vltdNeeded: true,
    vltdNote: "Tourist vehicles are public service vehicles, so AIS 140 VLTD with panic buttons is required.",
    whoNeeds: ["Tourist taxis", "Tempo travellers", "Tourist buses and coaches", "Travel agencies"],
    documents: ["RC", "Fitness certificate", "Insurance", "PUC", "Road tax receipt", "AIS 140 VLTD certificate", "Driver licence with PSV badge"],
    steps: [
      "Share vehicle number and seating capacity",
      "We check fitness, tax and VLTD",
      "VLTD fitted if missing",
      "Tourist permit applied online on the national permit portal",
    ],
    faqs: [
      {
        q: "Can my taxi run in other states with a tourist permit?",
        a: "Yes. An All India Tourist Permit lets tourist vehicles run across states. The vehicle must have valid fitness, insurance, tax and an AIS 140 VLTD.",
      },
    ],
    relatedSegments: ["taxi-cab", "bus-operator"],
  },
  {
    slug: "taxi-permit",
    name: "Taxi / Cab Permit (Contract Carriage)",
    short: "Taxi Permit",
    searchTitle: "Taxi Permit & Cab Permit Renewal | Contract Carriage with VLTD",
    metaDescription:
      "Get a new taxi permit or renew your cab permit (contract carriage). Document check, AIS 140 VLTD and panic button fitment, Vahan update in one visit.",
    intro:
      "Running a car as a taxi needs a contract carriage permit, yellow plates and an AIS 140 VLTD with panic buttons. We help you with the paperwork and fit the VLTD in the same visit.",
    vltdNeeded: true,
    vltdNote: "Taxis are public service vehicles, so AIS 140 VLTD with panic buttons is mandatory.",
    whoNeeds: ["New taxi owners", "Cab owners renewing permits", "App-based cab drivers"],
    documents: ["RC (commercial)", "Fitness certificate", "Insurance", "PUC", "Road tax receipt", "AIS 140 VLTD certificate", "Driver licence with PSV badge"],
    steps: [
      "Share vehicle number",
      "We check commercial registration, fitness and VLTD",
      "VLTD and panic buttons fitted if missing",
      "Permit application filed with your RTO",
    ],
    faqs: [
      {
        q: "Do I need a VLTD for a taxi permit?",
        a: "Yes. Taxis are public service vehicles and need an AIS 140 VLTD with panic buttons, active on Vahan, for permit and fitness.",
      },
    ],
    relatedSegments: ["taxi-cab", "staff-transport"],
  },
  {
    slug: "bus-permit",
    name: "Bus Permit (Stage & Contract Carriage)",
    short: "Bus Permit",
    searchTitle: "Bus Permit for School, Staff & Private Buses | With VLTD",
    metaDescription:
      "Bus permit help for school buses, staff buses and private operators (stage and contract carriage). Document check, AIS 140 VLTD fitment and Vahan update.",
    intro:
      "School buses, staff buses and private buses need a stage or contract carriage permit, and every one needs an AIS 140 VLTD with panic buttons. We prepare your file and fit the VLTD across the fleet.",
    vltdNeeded: true,
    vltdNote: "Buses are public service vehicles, so AIS 140 VLTD with panic buttons is mandatory.",
    whoNeeds: ["School and college buses", "Staff buses", "Private and tourist bus operators"],
    documents: ["RC", "Fitness certificate", "Insurance", "PUC", "Road tax receipt", "AIS 140 VLTD certificate", "Route / contract details"],
    steps: [
      "Share bus numbers and permit type",
      "We check fitness, tax and VLTD for every bus",
      "VLTD fitted fleet-wide if missing",
      "Permit applications filed with your RTO",
    ],
    faqs: [
      {
        q: "Do school buses need a permit and VLTD?",
        a: "School buses run on a contract carriage or educational institution permit depending on the state, and they need an AIS 140 VLTD with panic buttons as public service vehicles.",
      },
    ],
    relatedSegments: ["school-bus", "college-bus", "bus-operator", "staff-transport"],
  },
  {
    slug: "goods-permit",
    name: "Goods Carriage Permit (State)",
    short: "Goods Permit",
    searchTitle: "Goods Carriage Permit for Trucks | New & Renewal",
    metaDescription:
      "Apply for or renew a state goods carriage permit for your truck, pickup or tempo. Document check and Vahan support; VLTD fitment when your state or load type needs it.",
    intro:
      "Trucks, pickups and tempos carrying goods for hire need a goods carriage permit. We check your documents and tell you if your state or load type also needs a VLTD.",
    vltdNeeded: false,
    vltdNote: "State-permit goods vehicles need a VLTD only in some states or for some loads (mining, hazardous goods). Ask us for your vehicle.",
    whoNeeds: ["Truck owners", "Pickup and tempo owners", "Small transporters"],
    documents: ["RC", "Fitness certificate", "Insurance", "PUC", "Road tax receipt", "Owner ID and address proof"],
    steps: ["Share vehicle number", "We check documents on Vahan", "Fix pending items (incl. VLTD if needed)", "Permit application filed"],
    faqs: [
      {
        q: "Does my state-permit truck need VLTD?",
        a: "It depends on your state and what you carry. National-permit trucks always need it; mining, sand and hazardous goods vehicles often do too. Share your vehicle number and we confirm.",
      },
    ],
    relatedSegments: ["truck-transporter", "mining-tipper"],
  },
  {
    slug: "commercial-vehicle-registration",
    name: "New Commercial Vehicle Registration",
    short: "New Registration",
    searchTitle: "New Commercial Vehicle Registration | VLTD Before Registration",
    metaDescription:
      "Register a new truck, bus or taxi. VLTD fitted before registration and updated on Vahan, so delivery is not delayed. For owners and dealers.",
    intro:
      "New buses, taxis and national-permit trucks need an AIS 140 VLTD fitted before registration. We fit it at the showroom or your yard and update Vahan, so the RC and number plate are not delayed.",
    vltdNeeded: true,
    vltdNote: "New public service vehicles and national-permit goods vehicles need AIS 140 VLTD before registration.",
    whoNeeds: ["New commercial vehicle buyers", "Vehicle dealers", "Fleet owners adding vehicles"],
    documents: ["Form 20", "Sale invoice", "Form 21 / 22 from dealer and manufacturer", "Insurance", "Owner ID and address proof", "PAN", "AIS 140 VLTD certificate (where required)"],
    steps: ["Share chassis / invoice details", "VLTD fitted at showroom or yard", "Vahan updated with VLTD details", "Registration filed by dealer or agent"],
    faqs: [
      {
        q: "Can the dealer register my vehicle without VLTD?",
        a: "For buses, taxis and national-permit goods vehicles, no. The VLTD must be fitted and on Vahan first. We work with dealers so this does not delay delivery.",
      },
    ],
    relatedSegments: ["vehicle-dealer", "truck-transporter", "taxi-cab", "bus-operator"],
  },
  {
    slug: "rc-transfer",
    name: "RC Transfer (Transfer of Ownership)",
    short: "RC Transfer",
    searchTitle: "RC Transfer for Commercial Vehicles | Ownership Transfer Help",
    metaDescription:
      "Transfer ownership of a truck, bus or taxi after sale. Form 29/30, NOC and hypothecation help, plus VLTD check so the new owner's permit and fitness are not blocked.",
    intro:
      "Bought or sold a commercial vehicle? The RC must move to the new owner, and the new owner will need a working VLTD for permit and fitness. We handle the transfer file and check the VLTD at the same time.",
    vltdNeeded: false,
    vltdNote: "Not needed for the transfer itself, but buses, taxis and national-permit trucks need a working VLTD for the next permit or fitness.",
    whoNeeds: ["Buyers of used trucks, buses and taxis", "Sellers", "Used vehicle dealers"],
    documents: ["Form 29 and Form 30", "RC", "Insurance", "PUC", "Buyer and seller ID", "Bank NOC (if on loan)", "NOC from RTO (if moving state)"],
    steps: ["Share vehicle number and buyer/seller city", "We check tax, challans and hypothecation", "Transfer file prepared and submitted", "VLTD checked for the new owner's permit"],
    faqs: [
      {
        q: "Does the VLTD stay with the vehicle after transfer?",
        a: "The device stays fitted, but its records must show the new owner for permit and fitness. We update it during the transfer.",
      },
    ],
    relatedSegments: ["truck-transporter", "taxi-cab", "bus-operator"],
  },
  {
    slug: "noc-other-state",
    name: "NOC for Other State (Form 28)",
    short: "NOC Other State",
    searchTitle: "Vehicle NOC for Other State (Form 28) | Commercial Vehicles",
    metaDescription:
      "Get an RTO NOC (Form 28) to move your truck, bus or taxi to another state. Tax, challan and hypothecation check, plus VLTD status for re-registration.",
    intro:
      "Moving a commercial vehicle to another state needs an NOC from your current RTO. We check tax, challans and loans so the NOC is issued, and make sure the VLTD is ready for registration in the new state.",
    vltdNeeded: false,
    vltdNote: "For buses, taxis and national-permit trucks the VLTD must be active for re-registration in the new state.",
    whoNeeds: ["Owners shifting state", "Buyers from another state", "Transport companies relocating fleet"],
    documents: ["Form 28", "RC", "Insurance", "PUC", "Tax clearance", "Bank NOC (if on loan)", "Owner ID"],
    steps: ["Share vehicle number and new state", "Tax and challan check", "NOC application filed", "VLTD checked for re-registration"],
    faqs: [
      {
        q: "Do I need a new VLTD when I move state?",
        a: "Usually the same AIS 140 device can be used, but it must be active and its details updated on Vahan for the new registration. We check it for you.",
      },
    ],
    relatedSegments: ["truck-transporter", "bus-operator"],
  },
  {
    slug: "hypothecation-removal",
    name: "Hypothecation Removal (Loan Closure on RC)",
    short: "Hypothecation Removal",
    searchTitle: "Remove Bank Hypothecation from RC | Form 35 Help",
    metaDescription:
      "Loan closed? Remove the bank's hypothecation from your truck, bus or taxi RC with Form 35 and bank NOC. Quick document check and filing.",
    intro:
      "After closing a vehicle loan, the bank's name must be removed from the RC before you can sell or transfer the vehicle freely. We file Form 35 with the bank NOC and track it to completion.",
    vltdNeeded: false,
    vltdNote: "Not needed for this work.",
    whoNeeds: ["Owners who closed a vehicle loan", "Sellers preparing for transfer"],
    documents: ["Form 35", "Bank NOC", "RC", "Insurance", "PUC", "Owner ID"],
    steps: ["Share vehicle number and bank NOC", "Documents checked", "Form 35 filed", "Updated RC issued"],
    faqs: [
      {
        q: "Can I sell my vehicle before removing hypothecation?",
        a: "Transfer needs the bank NOC and hypothecation removed or handled in the same file. It is simplest to remove it first.",
      },
    ],
    relatedSegments: ["truck-transporter", "taxi-cab"],
  },
];

export function getRtoService(slug: string): RtoService | undefined {
  return RTO_SERVICES.find((s) => s.slug === slug);
}
