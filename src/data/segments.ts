// Buyer segments for /gps-tracking/[segment] (+ /[state]) landing pages.
// Each one targets how that buyer actually searches ("school bus gps tracker",
// "taxi vltd", "bus gps tracking system"...). Copy is factual: legal points cite
// CMVR Rule 125H (AIS 140 VLTD + panic buttons for public service vehicles and
// national-permit goods vehicles). No prices: prices are unlocked on WhatsApp/call.

export interface Segment {
  slug: string;
  name: string; // "School Buses"
  buyer: string; // "schools and school bus operators"
  h1: string;
  searchTitle: string; // <title> (layout appends "| NViQ")
  metaDescription: string;
  intro: string;
  needsVltd: "mandatory" | "depends" | "recommended";
  needsVltdNote: string;
  keywords: string[];
  pains: string[];
  features: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const SEGMENTS: Segment[] = [
  {
    slug: "taxi-cab",
    name: "Taxis & Cabs",
    buyer: "taxi owners, cab operators and travel agencies",
    h1: "AIS 140 VLTD & GPS Tracker for Taxis and Cabs",
    searchTitle: "Taxi & Cab GPS Tracker | AIS 140 VLTD for Permit & Fitness",
    metaDescription:
      "AIS 140 VLTD with panic button for taxis, cabs and tourist vehicles. Needed for permit, fitness and registration. Fleet app for travel agencies. Fitment + Vahan certificate in about 1 hour.",
    intro:
      "Every taxi, cab and tourist vehicle on a permit needs an AIS 140 VLTD with panic buttons before fitness, permit or registration work at the RTO. NViQ fits it, updates Vahan, and gives you a live fleet app to track every car.",
    needsVltd: "mandatory",
    needsVltdNote:
      "Taxis and cabs are public service vehicles, so AIS 140 VLTD with emergency buttons is mandatory under CMVR Rule 125H.",
    keywords: ["taxi gps tracker", "cab vltd", "taxi panic button", "tourist taxi permit gps", "ola uber car gps tracker"],
    pains: [
      "Fitness or permit renewal stuck because the VLTD is missing or not showing on Vahan",
      "Driver misuse, side trips and fuel theft on outstation duties",
      "No proof of trip time and km for corporate billing",
    ],
    features: [
      { title: "Permit-ready VLTD", text: "AIS 140 device with 2 panic buttons, certificate updated on Vahan in about 1 hour." },
      { title: "Live tracking app", text: "See every cab live, trip history, overspeed and idle alerts on your phone." },
      { title: "Trip & km reports", text: "Daily km and trip reports for corporate and travel-agency billing." },
      { title: "Bulk fleet pricing", text: "Owners with 5+ cabs and travel agencies get fleet slab rates." },
    ],
    faqs: [
      {
        q: "Is a GPS / VLTD compulsory for taxis?",
        a: "Yes. Taxis and cabs are public service vehicles. Under CMVR Rule 125H they need an AIS 140 VLTD with emergency panic buttons, and RTOs check it during fitness, permit and registration work.",
      },
      {
        q: "Can I track my taxi on my mobile?",
        a: "Yes. With the NViQ app you see live location, trip history, overspeed and idle alerts for each vehicle. You can also share a live location link with a customer.",
      },
      {
        q: "How long does taxi VLTD fitment take?",
        a: "Installation takes about 30–45 minutes and the fitment certificate is updated on Vahan in about 1 hour, so your RTO work can continue the same day.",
      },
    ],
  },
  {
    slug: "school-bus",
    name: "School Buses & Vans",
    buyer: "schools, school transport contractors and van owners",
    h1: "School Bus GPS Tracking & AIS 140 VLTD",
    searchTitle: "School Bus GPS Tracker & VLTD | Parent Tracking App",
    metaDescription:
      "GPS tracking for school buses and vans with AIS 140 VLTD, panic buttons and live location for parents and school admin. Needed for fitness and permit. Bulk pricing for schools.",
    intro:
      "Parents want to know where the bus is. The RTO wants an AIS 140 VLTD before fitness. NViQ does both: certified VLTD with panic buttons, plus live tracking for the school office and a shareable live link for parents.",
    needsVltd: "mandatory",
    needsVltdNote:
      "School buses run as public service vehicles, so AIS 140 VLTD with panic buttons is required under CMVR Rule 125H. CBSE and many state school-transport rules also ask for GPS on school buses.",
    keywords: ["school bus gps tracker", "school van gps", "school bus tracking app for parents", "school bus vltd", "school bus panic button"],
    pains: [
      "Parents calling the school office every morning asking where the bus is",
      "Bus fitness due and the RTO asking for a VLTD certificate",
      "No record of overspeeding or route changes by drivers",
    ],
    features: [
      { title: "Live bus location", text: "School office sees every bus live. Share a live link with parents on WhatsApp." },
      { title: "Panic buttons", text: "2 certified emergency buttons per bus, as required for public service vehicles." },
      { title: "Overspeed alerts", text: "Instant alert when a driver crosses the speed limit you set." },
      { title: "One bill for all buses", text: "Schools and contractors get one bulk order, one invoice, one support desk." },
    ],
    faqs: [
      {
        q: "Is GPS mandatory in school buses?",
        a: "School buses need an AIS 140 VLTD with panic buttons under CMVR Rule 125H, and CBSE and many state school-transport guidelines also require GPS tracking. The RTO checks the VLTD during fitness.",
      },
      {
        q: "Can parents track the school bus?",
        a: "Yes. The school can share a live location link for each bus on WhatsApp, so parents see where the bus is without calling the office.",
      },
      {
        q: "Do you fit all buses of a school at once?",
        a: "Yes. For schools and transport contractors we fit the full fleet in one visit, usually on a weekend or holiday, and the certificates are updated on Vahan.",
      },
    ],
  },
  {
    slug: "college-bus",
    name: "College & University Buses",
    buyer: "colleges, universities, coaching institutes and their transport contractors",
    h1: "College Bus GPS Tracking & AIS 140 VLTD",
    searchTitle: "College & University Bus GPS Tracker | AIS 140 VLTD",
    metaDescription:
      "GPS tracking for college, university and coaching institute buses. AIS 140 VLTD with panic buttons for fitness and permit, live tracking for the transport office and students.",
    intro:
      "Running 10, 30 or 100 buses across city routes? NViQ fits AIS 140 VLTD on every bus for RTO compliance and gives your transport office one live map of all routes, with links students can open on their phone.",
    needsVltd: "mandatory",
    needsVltdNote:
      "Buses carrying students on contract are public service vehicles, so AIS 140 VLTD with panic buttons is required under CMVR Rule 125H.",
    keywords: ["college bus gps tracking", "university bus tracking system", "institute bus gps", "college bus vltd"],
    pains: [
      "Students missing buses because they do not know the live position",
      "Contractor buses skipping stops or running late",
      "Fitness and permit renewals for a large fleet every year",
    ],
    features: [
      { title: "All routes on one map", text: "Transport office sees every bus and route live." },
      { title: "Student live links", text: "Share a live bus link per route on WhatsApp groups." },
      { title: "Stop & delay reports", text: "Know which bus reached which stop, and when." },
      { title: "Campus-wide rollout", text: "Bulk fitment for the whole fleet with one invoice." },
    ],
    faqs: [
      {
        q: "Do college buses need AIS 140 VLTD?",
        a: "Yes. Buses used to carry students on contract are public service vehicles and need an AIS 140 VLTD with panic buttons under CMVR Rule 125H.",
      },
      {
        q: "Can students see where the bus is?",
        a: "Yes. The transport office can share a live location link for each route, which students open on their phone without installing anything.",
      },
    ],
  },
  {
    slug: "bus-operator",
    name: "Bus Operators",
    buyer: "private bus owners, tourist bus and sleeper coach operators",
    h1: "AIS 140 VLTD & GPS Tracking for Bus Operators",
    searchTitle: "Bus GPS Tracking System for Operators | AIS 140 VLTD",
    metaDescription:
      "AIS 140 VLTD and GPS fleet tracking for private, tourist, sleeper and stage-carriage bus operators. Permit-ready certificate on Vahan, live tracking, overspeed and route reports.",
    intro:
      "Stage carriage, contract carriage, tourist permit or sleeper coaches: every bus needs a working AIS 140 VLTD for permit and fitness. NViQ fits it across your whole fleet and gives you live tracking, route and overspeed reports.",
    needsVltd: "mandatory",
    needsVltdNote:
      "Buses are public service vehicles, so AIS 140 VLTD with emergency buttons is mandatory under CMVR Rule 125H for permit, fitness and registration.",
    keywords: ["bus gps tracking system", "bus vltd", "tourist bus gps", "sleeper bus tracking", "bus operator gps"],
    pains: [
      "Permit or fitness renewal blocked by a dead or unregistered VLTD",
      "Buses deviating from route, skipping trips or overspeeding at night",
      "Passengers asking for live bus location",
    ],
    features: [
      { title: "Fleet-wide VLTD", text: "Certified AIS 140 devices and panic buttons on every bus, updated on Vahan." },
      { title: "Night overspeed alerts", text: "Instant alerts for overspeed and harsh driving on night routes." },
      { title: "Passenger live link", text: "Share live bus location with passengers or booking agents." },
      { title: "Operator pricing", text: "Slab rates for operators with 5, 10 or 50+ buses." },
    ],
    faqs: [
      {
        q: "Is VLTD required for tourist and stage-carriage buses?",
        a: "Yes. All buses on a permit are public service vehicles and need an AIS 140 VLTD with emergency buttons under CMVR Rule 125H. Permit and fitness work at the RTO checks it.",
      },
      {
        q: "My old VLTD stopped working. Can you replace it?",
        a: "Yes. We fit a new certified device and update the details on Vahan, so your permit or fitness can go ahead.",
      },
    ],
  },
  {
    slug: "truck-transporter",
    name: "Truck Transporters",
    buyer: "transport companies and truck owners with national or state permits",
    h1: "AIS 140 VLTD & GPS Tracker for Trucks and Transporters",
    searchTitle: "Truck GPS Tracker & AIS 140 VLTD | National Permit Ready",
    metaDescription:
      "AIS 140 VLTD for national-permit trucks, trailers and tippers. Certificate on Vahan in about 1 hour for fitness and permit. Live truck tracking, fuel and trip reports for transporters.",
    intro:
      "National-permit goods vehicles need an AIS 140 VLTD for permit and fitness. NViQ fits it fast at your yard or transport nagar and gives you live tracking, trip and halt reports for every truck.",
    needsVltd: "depends",
    needsVltdNote:
      "National-permit goods vehicles need AIS 140 VLTD. For state-permit trucks the rule depends on your state and load type (for example mining or hazardous goods), so ask us for your vehicle.",
    keywords: ["truck gps tracker", "national permit vltd", "truck vltd fitness", "transport gps tracking", "trailer gps"],
    pains: [
      "Fitness passing delayed because the VLTD certificate is missing",
      "No visibility on halts, diversions and fuel theft",
      "Customers asking for live consignment location",
    ],
    features: [
      { title: "National-permit ready", text: "AIS 140 device and panic buttons, certificate updated on Vahan." },
      { title: "Halt & route reports", text: "Know every halt, diversion and night driving." },
      { title: "Consignment live link", text: "Share live truck location with your customer." },
      { title: "Doorstep fitment", text: "Technician comes to your yard or transport nagar." },
    ],
    faqs: [
      {
        q: "Which trucks need AIS 140 VLTD?",
        a: "National-permit goods vehicles need an AIS 140 VLTD. Some states also require it for mining, sand and hazardous goods vehicles. Share your vehicle number and we confirm for your case.",
      },
      {
        q: "Can you fit VLTD at my transport yard?",
        a: "Yes. Our technician comes to your yard or transport nagar, fits the device and updates the certificate on Vahan.",
      },
    ],
  },
  {
    slug: "vehicle-dealer",
    name: "Vehicle Dealers",
    buyer: "commercial vehicle, bus, taxi and three-wheeler dealerships",
    h1: "Bulk AIS 140 VLTD Fitment for Vehicle Dealers",
    searchTitle: "VLTD for Vehicle Dealers | Bulk AIS 140 Fitment Before Registration",
    metaDescription:
      "Bulk AIS 140 VLTD fitment for commercial vehicle, bus and taxi dealerships. Fit before registration, certificate on Vahan in about 1 hour, dealer margins and monthly billing.",
    intro:
      "New buses, taxis and national-permit trucks need a VLTD before registration. NViQ works with dealerships to fit devices at your showroom or stockyard, update Vahan fast, and keep deliveries on time, with dealer margins on every unit.",
    needsVltd: "mandatory",
    needsVltdNote:
      "New public service vehicles and national-permit goods vehicles need AIS 140 VLTD before registration, so the dealer usually arranges the fitment.",
    keywords: ["vltd for dealers", "dealer vltd fitment", "commercial vehicle dealer gps", "vltd before registration", "bulk vltd supplier"],
    pains: [
      "Vehicle delivery delayed because the VLTD certificate is not on Vahan",
      "Different VLTD vendors for different customers and states",
      "No margin on the VLTD your customers have to buy anyway",
    ],
    features: [
      { title: "Fitment at your showroom", text: "Technician at your showroom or stockyard on call." },
      { title: "Fast Vahan update", text: "Certificate updated in about 1 hour so registration is not held up." },
      { title: "Dealer margins", text: "Wholesale rates and margin on every unit you sell." },
      { title: "Monthly billing", text: "One account, monthly statement for all fitments." },
    ],
    faqs: [
      {
        q: "Do new commercial vehicles need VLTD before registration?",
        a: "Yes. New public service vehicles (buses, taxis) and national-permit goods vehicles need an AIS 140 VLTD fitted and updated on Vahan before registration.",
      },
      {
        q: "How do dealers partner with NViQ?",
        a: "Call or WhatsApp us. We set up a dealer account with wholesale rates, on-call technicians for your showroom and monthly billing.",
      },
    ],
  },
  {
    slug: "ambulance",
    name: "Ambulances",
    buyer: "hospitals, ambulance operators and 108/102 service contractors",
    h1: "AIS 140 VLTD & GPS Tracking for Ambulances",
    searchTitle: "Ambulance GPS Tracker & AIS 140 VLTD | Live Dispatch Tracking",
    metaDescription:
      "AIS 140 VLTD and live GPS tracking for hospital and private ambulances. Panic buttons, live location for dispatch, response-time reports. Certificate on Vahan for fitness and permit.",
    intro:
      "When every minute matters, dispatch needs to see the nearest ambulance. NViQ gives hospitals and ambulance operators live tracking, response-time reports and AIS 140 compliance for fitness and permit.",
    needsVltd: "depends",
    needsVltdNote:
      "Many states treat permit ambulances as public service vehicles and ask for AIS 140 VLTD at fitness and permit work, and hospital and 108/102 contracts usually require GPS. Share your vehicle number and we confirm for your state.",
    keywords: ["ambulance gps tracker", "ambulance vltd", "hospital ambulance tracking", "ambulance tracking system"],
    pains: [
      "Dispatch cannot see which ambulance is nearest",
      "No record of response times for hospital audits",
      "Fitness renewal held up by a missing VLTD",
    ],
    features: [
      { title: "Live dispatch map", text: "See every ambulance live and send the nearest one." },
      { title: "Response-time reports", text: "Time from call to pickup to hospital, per trip." },
      { title: "Share with family", text: "Send a live ambulance location link to the patient's family." },
      { title: "AIS 140 compliant", text: "Certified device and panic buttons, certificate on Vahan." },
    ],
    faqs: [
      {
        q: "Do ambulances need AIS 140 VLTD?",
        a: "Ambulances on a permit are public service vehicles and need an AIS 140 VLTD for fitness and permit work. Share your vehicle number and we confirm for your case.",
      },
    ],
  },
  {
    slug: "tanker",
    name: "Tankers",
    buyer: "oil, gas, water and chemical tanker owners",
    h1: "AIS 140 VLTD & GPS Tracker for Tankers",
    searchTitle: "Tanker GPS Tracker & AIS 140 VLTD | Oil, Gas, Water Tankers",
    metaDescription:
      "AIS 140 VLTD and GPS tracking for oil, LPG, water and chemical tankers. Route, halt and overspeed reports, live link for clients, certificate on Vahan for fitness and permit.",
    intro:
      "Oil companies and clients want tanker tracking. The RTO wants a VLTD for national permit and fitness. NViQ fits certified devices and gives you route, halt and overspeed reports for every tanker.",
    needsVltd: "depends",
    needsVltdNote:
      "National-permit tankers need AIS 140 VLTD. Oil companies and hazardous-goods rules often require GPS tracking too. Ask us for your vehicle and contract.",
    keywords: ["tanker gps tracker", "oil tanker vltd", "water tanker gps", "lpg tanker tracking"],
    pains: [
      "Client or oil company asking for live tracking and halt reports",
      "Unauthorised halts and route diversions",
      "Fitness or permit renewal waiting on a VLTD certificate",
    ],
    features: [
      { title: "Halt & diversion alerts", text: "Alerts for unauthorised halts and route changes." },
      { title: "Client live link", text: "Share live tanker location with your client." },
      { title: "Overspeed control", text: "Speed alerts for hazardous-goods safety." },
      { title: "Permit-ready", text: "AIS 140 device, panic buttons and Vahan certificate." },
    ],
    faqs: [
      {
        q: "Do tankers need AIS 140 VLTD?",
        a: "National-permit tankers need AIS 140 VLTD, and many oil and gas companies require GPS tracking in their transport contracts. Share your vehicle number and we confirm what applies.",
      },
    ],
  },
  {
    slug: "staff-transport",
    name: "Staff & Employee Transport",
    buyer: "companies, factories and employee transport contractors",
    h1: "GPS Tracking for Staff Buses and Employee Cabs",
    searchTitle: "Staff Bus & Employee Cab GPS Tracking | AIS 140 VLTD",
    metaDescription:
      "GPS tracking for staff buses and employee cabs with AIS 140 VLTD and panic buttons. Women-safety SOS, live tracking for the admin team, trip and km reports for vendor billing.",
    intro:
      "Admin teams need to know every staff bus and cab is on route and on time, especially on night shifts. NViQ gives live tracking, SOS panic buttons and km reports to check vendor bills.",
    needsVltd: "mandatory",
    needsVltdNote:
      "Staff buses and cabs on contract are public service vehicles, so AIS 140 VLTD with panic buttons is required under CMVR Rule 125H.",
    keywords: ["staff bus gps tracking", "employee cab tracking", "company bus gps", "employee transport vltd"],
    pains: [
      "Night-shift safety for women employees",
      "Vendor bills with km you cannot verify",
      "Late buses and missed pickups",
    ],
    features: [
      { title: "SOS panic buttons", text: "Certified emergency buttons for passenger safety." },
      { title: "Km & trip reports", text: "Verify vendor billing against real trips." },
      { title: "Live admin view", text: "All staff buses and cabs on one live map." },
      { title: "Vendor rollout", text: "We fit devices across all your vendors' vehicles." },
    ],
    faqs: [
      {
        q: "Can we check our cab vendor's km bills?",
        a: "Yes. NViQ trip and km reports show the real distance and time for each trip, so you can match them against vendor invoices.",
      },
    ],
  },
  {
    slug: "mining-tipper",
    name: "Mining Dumpers & Tippers",
    buyer: "mining lease holders, sand and stone transporters",
    h1: "Mining VLTD for Dumpers and Tippers",
    searchTitle: "Mining VLTD for Dumpers & Tippers | e-Ravanna & Fitness Ready",
    metaDescription:
      "AIS 140 VLTD for mining dumpers, tippers and sand trucks. Integrated with Rajasthan DMG and other state mining portals for transit passes, certificate on Vahan for fitness.",
    intro:
      "Mining and sand vehicles need a VLTD that the state mining portal accepts, or transit passes stop. NViQ fits devices integrated with Rajasthan DMG, MP, Gujarat and Haryana mining systems, and updates Vahan for fitness.",
    needsVltd: "depends",
    needsVltdNote:
      "Rajasthan, MP, Gujarat and Haryana mining departments need a VLTD for mineral transit passes. Other states differ, so ask us for yours.",
    keywords: ["mining vltd", "dumper gps", "tipper gps tracker", "e-ravanna gps", "sand truck gps"],
    pains: [
      "Transit pass blocked because the device is not on the mining portal",
      "Fines for untracked mineral transport",
      "Fitness passing waiting on a VLTD certificate",
    ],
    features: [
      { title: "Mining portal integrated", text: "Accepted on Rajasthan DMG, MP, Gujarat and Haryana mining systems." },
      { title: "Transit-pass ready", text: "Device data flows so e-Ravanna / transit passes are not blocked." },
      { title: "Vahan certificate", text: "Fitment certificate updated for fitness passing." },
      { title: "Quarry-site fitment", text: "Technician comes to your mine or quarry." },
    ],
    faqs: [
      {
        q: "Is your device accepted on the Rajasthan DMG portal?",
        a: "Yes. NViQ VLTD is integrated with the Rajasthan DMG system, and with MP, Gujarat and Haryana mining systems, for transit pass generation.",
      },
    ],
  },
];

export function getSegment(slug: string): Segment | undefined {
  return SEGMENTS.find((s) => s.slug === slug);
}
