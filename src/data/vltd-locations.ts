export interface RtoOffice {
  code: string; // e.g. "RJ-14"
  slug: string; // e.g. "rj-14"
  name: string; // e.g. "Jaipur Central RTO"
  officeAddress: string;
  majorHubs: string[]; // e.g. ["Transport Nagar", "VKI Industrial Area", "Sanganer"]
  fitnessPassingFocus: string;
}

export interface CityData {
  name: string;
  slug: string;
  rtos: RtoOffice[];
  majorIndustries: string[];
  installationTurnaround: string; // e.g. "2 to 4 Hours"
}

export interface StateData {
  name: string;
  slug: string;
  capital: string;
  miningPortal: {
    name: string;
    description: string;
    integrated: boolean;
    portalUrlName: string;
  };
  transportDepartment: string;
  vahanIntegrated: boolean;
  commonVehicleTypes: string[];
  cities: CityData[];
  stateFaqs: { q: string; a: string }[];
}

export const VLTD_PRICING_SLABS = [
  {
    min: 1,
    max: 1,
    label: "Single Vehicle",
    pricePerUnit: 3799,
    originalPrice: 5499,
    turnaroundTime: "Same Day (2-4 Hrs)",
    certificateTime: "Within 1 Hour",
    badge: "Most Popular for Passing",
  },
  {
    min: 2,
    max: 5,
    label: "Small Fleet (2-5)",
    pricePerUnit: 3399,
    originalPrice: 5199,
    turnaroundTime: "Same Day",
    certificateTime: "Instant Batch Upload",
    badge: "Save 38%",
  },
  {
    min: 6,
    max: 10,
    label: "Medium Fleet (6-10)",
    pricePerUnit: 3099,
    originalPrice: 4899,
    turnaroundTime: "Dedicated Technician",
    certificateTime: "Priority Mining Upload",
    badge: "Volume Saver",
  },
  {
    min: 11,
    max: 100,
    label: "Bulk & RTO Partner (10+)",
    pricePerUnit: 2699,
    originalPrice: 4499,
    turnaroundTime: "On-Site Fleet Camp",
    certificateTime: "Instant Portal Self-Issue",
    badge: "RTO Consultant Wholesale",
  },
];

export const VLTD_LOCATIONS: StateData[] = [
  {
    name: "Rajasthan",
    slug: "rajasthan",
    capital: "Jaipur",
    miningPortal: {
      name: "DMG Rajasthan Khanij Online Portal",
      description: "Mandatory AIS 140 VLTD with panic button integration for marble, granite, sand (bajri), and mineral tippers.",
      integrated: true,
      portalUrlName: "mines.rajasthan.gov.in",
    },
    transportDepartment: "Rajasthan Transport Department (Parivahan)",
    vahanIntegrated: true,
    commonVehicleTypes: ["Dumpers & Tippers", "Bajri Trucks", "Granite & Marble Carriers", "Commercial Buses", "School Buses", "Oil Tankers"],
    stateFaqs: [
      {
        q: "Is NViQ VLTD approved by Rajasthan Department of Mines & Geology (DMG)?",
        a: "Yes. NViQ AIS 140 VLTD devices are fully whitelisted and certified for integration with the Rajasthan DMG Khanij Online Portal. You receive an instant verification receipt for transit pass (e-Ravanna) generation.",
      },
      {
        q: "How fast can I get the VLTD certificate for RTO fitness in Rajasthan?",
        a: "Our fitment certificates are generated and synchronized with Vahan 4.0 within 60 minutes of installation, allowing your vehicle passing or fitness inspection to proceed without delay.",
      },
      {
        q: "How can RTO consultants in Rajasthan partner with NViQ?",
        a: "RTO agents across Jaipur, Bhilwara, Jodhpur, and other hubs can register for our Partner Portal to access wholesale dealer pricing, instant certificate generation, and dedicated portal support.",
      },
    ],
    cities: [
      {
        name: "Jaipur",
        slug: "jaipur",
        majorIndustries: ["Marble & Stone Cutting", "Transport Nagar Logistics", "Automotive Ancillary", "Gem & Jewelry Transport"],
        installationTurnaround: "Within 2 to 4 Hours",
        rtos: [
          {
            code: "RJ-14",
            slug: "rj-14",
            name: "Jaipur Central RTO (Jhalana)",
            officeAddress: "Jhalana Doongri, Jaipur, Rajasthan 302004",
            majorHubs: ["Transport Nagar", "Jhalana Industrial Area", "Ghat Ki Guni"],
            fitnessPassingFocus: "Heavy commercial trucks, tourist buses, and urban delivery carriers",
          },
          {
            code: "RJ-45",
            slug: "rj-45",
            name: "Jaipur North RTO (VKI Area)",
            officeAddress: "Road No. 6, Vishwakarma Industrial Area (VKI), Jaipur, Rajasthan 302013",
            majorHubs: ["VKI Industrial Area", "Sikar Road Logistics Hub", "Chomu Bypass"],
            fitnessPassingFocus: "Stone crushers, industrial machinery trailers, and inter-state logistics fleet",
          },
        ],
      },
      {
        name: "Bhilwara",
        slug: "bhilwara",
        majorIndustries: ["Textile Transport", "Sand & Mineral Mining", "Iron Ore Transport"],
        installationTurnaround: "Same-Day Doorstep Fitment",
        rtos: [
          {
            code: "RJ-06",
            slug: "rj-06",
            name: "Bhilwara DTO Office",
            officeAddress: "Near Circuit House, Subhash Nagar, Bhilwara, Rajasthan 311001",
            majorHubs: ["Pur Road Industrial Belt", "Mandal Stone Zone", "Hamirgarh Road"],
            fitnessPassingFocus: "Mining dumpers, sand tippers, and multi-axle textile transport trucks",
          },
        ],
      },
      {
        name: "Jodhpur",
        slug: "jodhpur",
        majorIndustries: ["Sandstone & Granite Mining", "Handicrafts Export Fleet", "Limestone Transport"],
        installationTurnaround: "Same-Day Fitment",
        rtos: [
          {
            code: "RJ-19",
            slug: "rj-19",
            name: "Jodhpur RTO Office",
            officeAddress: "Mandore Road, Paota, Jodhpur, Rajasthan 342001",
            majorHubs: ["Basni Industrial Area", "Mandore Stone Belt", "Boranada SEZ"],
            fitnessPassingFocus: "Sandstone tippers, mining haulers, and inter-district commercial carriers",
          },
        ],
      },
      {
        name: "Alwar",
        slug: "alwar",
        majorIndustries: ["Bhiwadi NCR Logistics", "Mineral Crusher Zone", "Automobile Carriers"],
        installationTurnaround: "Within 3 Hours",
        rtos: [
          {
            code: "RJ-02",
            slug: "rj-02",
            name: "Alwar DTO Office",
            officeAddress: "Opp. Collectorate, Alwar, Rajasthan 301001",
            majorHubs: ["Bhiwadi Industrial Zone", "Neemrana Hub", "Matsya Industrial Area"],
            fitnessPassingFocus: "NCR passing compliance, inter-state container fleet, and stone crusher vehicles",
          },
        ],
      },
      {
        name: "Udaipur",
        slug: "udaipur",
        majorIndustries: ["Marble & Zinc Mining", "Mineral Slurry Transport", "Tourism Coaches"],
        installationTurnaround: "Same-Day Doorstep",
        rtos: [
          {
            code: "RJ-27",
            slug: "rj-27",
            name: "Udaipur RTO Office",
            officeAddress: "Chitrakoot Nagar, Bhuwana, Udaipur, Rajasthan 313001",
            majorHubs: ["Sukher Marble Market", "Mewar Industrial Area", "Debari Smelter Hub"],
            fitnessPassingFocus: "Heavy marble slab tippers, zinc haulage, and luxury tourist buses",
          },
        ],
      },
      {
        name: "Kota",
        slug: "kota",
        majorIndustries: ["Kota Stone Mining", "Fertilizer & Chemical Fleet", "Student Transit Fleet"],
        installationTurnaround: "Same-Day Fitment",
        rtos: [
          {
            code: "RJ-20",
            slug: "rj-20",
            name: "Kota DTO Office",
            officeAddress: "Rawatbhata Road, Instrumentation Township, Kota, Rajasthan 324005",
            majorHubs: ["Anantpura Industrial Area", "Ramganj Mandi Stone Hub", "DCM Road"],
            fitnessPassingFocus: "Kota stone carriers, chemical tankers, and school passing fitness",
          },
        ],
      },
    ],
  },
  {
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    capital: "Bhopal",
    miningPortal: {
      name: "MP Khanij Nigam Online Tracking Portal",
      description: "Mandatory AIS 140 GPS with dual emergency buttons for sand (ret), coal, iron ore, and ballast dumpers.",
      integrated: true,
      portalUrlName: "khanij.mp.gov.in",
    },
    transportDepartment: "Madhya Pradesh Transport Department (Parivahan)",
    vahanIntegrated: true,
    commonVehicleTypes: ["Sand Dumper (Ret)", "Coal Tippers", "Stone Crushers", "Agricultural Tractors/Trailers", "Commercial Buses", "Liquid Chemical Tankers"],
    stateFaqs: [
      {
        q: "Is NViQ GPS compliant with MP Khanij Online tracking rules?",
        a: "Yes. NViQ is certified and registered with MP Khanij Nigam. The device automatically syncs telemetry with the government tracking servers for e-TP (e-Transit Pass) generation.",
      },
      {
        q: "Can I do vehicle passing in Indore or Bhopal without visiting the RTO office for GPS testing?",
        a: "Our certified technicians conduct the on-site fitment and instant panic-button testing upload. Your test report is synced directly to Vahan 4.0 so your RTO consultant can complete fitness passing smoothly.",
      },
      {
        q: "Do you offer wholesale bulk discounts for MP sand & mining truck syndicates?",
        a: "Yes. We offer special fleet packages for dumper unions, quarry contractors, and RTO consultant associations with wholesale pricing and free installation camps.",
      },
    ],
    cities: [
      {
        name: "Indore",
        slug: "indore",
        majorIndustries: ["Commercial Transport Hub", "Pharmaceutical Logistics", "Sand & Aggregate Supply", "Food Processing Fleet"],
        installationTurnaround: "Within 2 Hours",
        rtos: [
          {
            code: "MP-09",
            slug: "mp-09",
            name: "Indore RTO Office",
            officeAddress: "Nayapura, Indore, Madhya Pradesh 452001",
            majorHubs: ["Loha Mandi", "Dewas Naka Transport Hub", "Pithampur Industrial Corridor"],
            fitnessPassingFocus: "Pithampur industrial haulers, pharma containers, and heavy tippers",
          },
        ],
      },
      {
        name: "Bhopal",
        slug: "bhopal",
        majorIndustries: ["Heavy Machinery Transit", "Sand Transport (Narmada basin)", "Inter-state Logistics"],
        installationTurnaround: "Within 2 to 4 Hours",
        rtos: [
          {
            code: "MP-04",
            slug: "mp-04",
            name: "Bhopal RTO Office",
            officeAddress: "Transport Nagar, Kokta, Bhopal, Madhya Pradesh 462022",
            majorHubs: ["Kokta Transport Nagar", "Govindpura Industrial Area", "Mandideep Industrial Area"],
            fitnessPassingFocus: "Sand dumper fitness passing, Mandideep factory fleet, and commercial buses",
          },
        ],
      },
      {
        name: "Singrauli",
        slug: "singrauli",
        majorIndustries: ["Coal Mining Heavy Haul", "Power Plant Coal Tippers", "Heavy Earthmoving Equipment"],
        installationTurnaround: "Same-Day Mine-site Fitment",
        rtos: [
          {
            code: "MP-53",
            slug: "mp-53",
            name: "Singrauli DTO Office",
            officeAddress: "Waidhan, Singrauli, Madhya Pradesh 486886",
            majorHubs: ["Waidhan Coal Corridor", "Jayant Mining Zone", "Nigahi Quarry Area"],
            fitnessPassingFocus: "Heavy coal dumpers, 10-wheel to 16-wheel tippers, and mining contractors",
          },
        ],
      },
      {
        name: "Jabalpur",
        slug: "jabalpur",
        majorIndustries: ["Mineral & Sand Logistics", "Defense Vehicle Assembly", "Agricultural Haulage"],
        installationTurnaround: "Same-Day Fitment",
        rtos: [
          {
            code: "MP-20",
            slug: "mp-20",
            name: "Jabalpur RTO Office",
            officeAddress: "Karmeta, Jabalpur, Madhya Pradesh 482003",
            majorHubs: ["Karmeta Transport Nagar", "Adhartal Industrial Zone", "Richhai Industrial Area"],
            fitnessPassingFocus: "Bauxite and iron ore transport, sand trucks, and public transport coaches",
          },
        ],
      },
      {
        name: "Gwalior",
        slug: "gwalior",
        majorIndustries: ["Sand & Stone Mining", "Textile Transit", "Heavy Commercial Haulage"],
        installationTurnaround: "Within 3 Hours",
        rtos: [
          {
            code: "MP-07",
            slug: "mp-07",
            name: "Gwalior RTO Office",
            officeAddress: "Transport Nagar, Gwalior, Madhya Pradesh 474010",
            majorHubs: ["Transport Nagar Gwalior", "Malanpur Industrial Belt", "Banmore Stone Zone"],
            fitnessPassingFocus: "Stone crusher dumpers, Malanpur industrial haulage, and interstate goods trucks",
          },
        ],
      },
    ],
  },
  {
    name: "Gujarat",
    slug: "gujarat",
    capital: "Gandhinagar",
    miningPortal: {
      name: "Gujarat i-Khanij Portal (Industries & Mines)",
      description: "Mandatory ARAI/ICAT certified AIS 140 tracking with dual SIM roaming for bauxite, lignite, limestone, and chemical tankers.",
      integrated: true,
      portalUrlName: "ikhanij.gujarat.gov.in",
    },
    transportDepartment: "Gujarat Ports and Transport Department",
    vahanIntegrated: true,
    commonVehicleTypes: ["Hazardous Chemical Tankers", "Port Container Trailers", "Lignite & Bauxite Dumpers", "Ceramic Transport Trucks", "School & Staff Buses"],
    stateFaqs: [
      {
        q: "Is NViQ VLTD certified for hazardous chemical tankers in Gujarat?",
        a: "Yes. Our devices come with PESO and IP67 certified flame-retardant wiring harnesses, panic buttons, and SOS alarms as mandated by Gujarat RTOs for petroleum and hazardous chemical carriers.",
      },
      {
        q: "Can ceramic and tile transporters in Morbi get same-day bulk installation?",
        a: "Yes. We have dedicated technician squads stationed in Morbi and Rajkot providing doorstep fitment at ceramic factory yards within 2 to 4 hours.",
      },
      {
        q: "How does the RTO consultant referral payout work in Gujarat?",
        a: "RTO agents receive instant digital wallet credits or direct bank transfers for every fitment certificate generated through their consultant code.",
      },
    ],
    cities: [
      {
        name: "Ahmedabad",
        slug: "ahmedabad",
        majorIndustries: ["Textile & Chemical Logistics", "Port Rail Transit", "Commercial Goods Distribution"],
        installationTurnaround: "Within 2 Hours",
        rtos: [
          {
            code: "GJ-01",
            slug: "gj-01",
            name: "Ahmedabad RTO (Subhash Bridge)",
            officeAddress: "Near Subhash Bridge, Old RTO, Ahmedabad, Gujarat 380027",
            majorHubs: ["Narol Textile Belt", "Odhav Industrial Zone", "Changodar Logistics Park"],
            fitnessPassingFocus: "Commercial goods carriers, passenger buses, and inter-city trailers",
          },
          {
            code: "GJ-27",
            slug: "gj-27",
            name: "Ahmedabad East RTO (Vastral)",
            officeAddress: "Near Vastral Cross Road, Ahmedabad, Gujarat 382418",
            majorHubs: ["Vastral Industrial Hub", "Kathwada GIDC", "Aslali Transport Hub"],
            fitnessPassingFocus: "Heavy container logistics, chemical tankers, and delivery fleet",
          },
        ],
      },
      {
        name: "Surat",
        slug: "surat",
        majorIndustries: ["Textile & Diamond Courier", "Hazira Industrial Port Fleet", "Chemical Transport"],
        installationTurnaround: "Within 2 to 4 Hours",
        rtos: [
          {
            code: "GJ-05",
            slug: "gj-05",
            name: "Surat RTO Office",
            officeAddress: "Majura Gate, Ring Road, Surat, Gujarat 395001",
            majorHubs: ["Hazira Port Corridor", "Sachin GIDC", "Pandesara Industrial Zone"],
            fitnessPassingFocus: "Hazira port heavy haulers, petroleum tankers, and textile trucks",
          },
        ],
      },
      {
        name: "Morbi",
        slug: "morbi",
        majorIndustries: ["Ceramic Tiles & Sanitaryware Export", "Clay & Mineral Haulage", "Heavy Multiaxle Trailers"],
        installationTurnaround: "Same-Day Factory Fitment",
        rtos: [
          {
            code: "GJ-36",
            slug: "gj-36",
            name: "Morbi ARTO Office",
            officeAddress: "Lalpar, National Highway 8A, Morbi, Gujarat 363642",
            majorHubs: ["Lalpar Ceramic Belt", "Pipali Road Factory Zone", "Trajpar Logistics"],
            fitnessPassingFocus: "Ceramic export trailers, clay tippers, and heavy 14-to-22 wheel trucks",
          },
        ],
      },
      {
        name: "Gandhidham / Kutch",
        slug: "kutch-gandhidham",
        majorIndustries: ["Kandla & Mundra Port Container Fleet", "Salt Transport", "Timber & Mineral Logistics"],
        installationTurnaround: "Within 3 Hours",
        rtos: [
          {
            code: "GJ-12",
            slug: "gj-12",
            name: "Kutch Bhuj / Gandhidham RTO",
            officeAddress: "Transport Nagar, Gandhidham, Kutch, Gujarat 370201",
            majorHubs: ["Mundra Port Road", "Kandla SEZ", "Gandhidham Transport Nagar"],
            fitnessPassingFocus: "Port container chassis, salt bulk carriers, and multi-axle heavy trailers",
          },
        ],
      },
      {
        name: "Vadodara",
        slug: "vadodara",
        majorIndustries: ["Chemical & Petrochemical Fleet", "Engineering Goods", "Fertilizer Logistics"],
        installationTurnaround: "Within 2 Hours",
        rtos: [
          {
            code: "GJ-06",
            slug: "gj-06",
            name: "Vadodara RTO Office",
            officeAddress: "Darbar Chokdi, Manjalpur, Vadodara, Gujarat 390011",
            majorHubs: ["Makarpura GIDC", "Nandesari Chemical Zone", "Ranoli Industrial Hub"],
            fitnessPassingFocus: "Chemical and petroleum tankers, engineering equipment carriers, and passenger buses",
          },
        ],
      },
    ],
  },
  {
    name: "Haryana",
    slug: "haryana",
    capital: "Chandigarh",
    miningPortal: {
      name: "Haryana e-Ravanna Mines & Geology Portal",
      description: "Mandatory GPS for sand, boulder, and gravel carriers with geo-fencing on Yamunanagar, Narnaul, and Mahendragarh quarry zones.",
      integrated: true,
      portalUrlName: "minesharyana.gov.in",
    },
    transportDepartment: "Haryana Transport Department (State Transport Authority)",
    vahanIntegrated: true,
    commonVehicleTypes: ["NCR Commercial Cabs", "Mining Tippers & Dumpers", "E-Commerce Delivery Trucks", "Automobile Carriers", "School Buses"],
    stateFaqs: [
      {
        q: "Is NViQ AIS 140 GPS accepted for NCR fitness passing in Gurugram and Faridabad?",
        a: "Yes. Our devices fulfill all Delhi-NCR STA and Haryana Transport Department guidelines including CAQM (Commission for Air Quality Management) fitness compliance requirements.",
      },
      {
        q: "Can Yamunanagar stone and sand mining trucks get instant e-Ravanna activation?",
        a: "Yes. NViQ is connected to Haryana e-Ravanna systems. Once installed, your vehicle telemetry is whitelisted immediately for transit pass approval.",
      },
      {
        q: "What is the warranty and support for RTO consultants in Haryana?",
        a: "All devices come with a 1-year to 2-year doorstep replacement warranty, dual SIM connectivity, and a dedicated RTO agent hotline for priority certificate clearances.",
      },
    ],
    cities: [
      {
        name: "Gurugram",
        slug: "gurugram",
        majorIndustries: ["Auto Logistics (Maruti / Honda belt)", "Corporate Cab Fleet", "NCR Goods Transit"],
        installationTurnaround: "Within 2 Hours",
        rtos: [
          {
            code: "HR-26",
            slug: "hr-26",
            name: "Gurugram North RTO Office",
            officeAddress: "Mini Secretariat, Rajiv Chowk, Gurugram, Haryana 122001",
            majorHubs: ["Udyog Vihar", "Manesar Industrial Belt", "Delhi-Jaipur Highway Corridor"],
            fitnessPassingFocus: "Corporate transit buses, commercial cabs, and light commercial vehicles",
          },
          {
            code: "HR-55",
            slug: "hr-55",
            name: "Gurugram Commercial RTO",
            officeAddress: "Sector 32, Near Medanta, Gurugram, Haryana 122003",
            majorHubs: ["Pataudi Road Logistics", "Manesar Auto Cluster", "Sohna Road Freight Yard"],
            fitnessPassingFocus: "Heavy commercial passing, multi-tier car carriers, and container trucks",
          },
        ],
      },
      {
        name: "Faridabad",
        slug: "faridabad",
        majorIndustries: ["Engineering & Metal Fabrication", "NCR Construction Tippers", "Interstate Freight"],
        installationTurnaround: "Within 2 to 4 Hours",
        rtos: [
          {
            code: "HR-51",
            slug: "hr-51",
            name: "Faridabad RTO Office",
            officeAddress: "Sector 12, Mini Secretariat, Faridabad, Haryana 121007",
            majorHubs: ["Sector 24 & 25 Industrial Area", "Mathura Road Transport Hub", "Ballabhgarh Freight Hub"],
            fitnessPassingFocus: "Construction dumpers, inter-state industrial haulers, and commercial buses",
          },
        ],
      },
      {
        name: "Yamunanagar",
        slug: "yamunanagar",
        majorIndustries: ["Sand & Gravel Mining (Yamuna Basin)", "Plywood & Timber Transit", "Heavy Machinery Haulage"],
        installationTurnaround: "Same-Day Doorstep Fitment",
        rtos: [
          {
            code: "HR-58",
            slug: "hr-58",
            name: "Yamunanagar Jagadhri RTO",
            officeAddress: "Near Mini Secretariat, Jagadhri, Yamunanagar, Haryana 135003",
            majorHubs: ["Tajewala Mining Zone", "Jagadhri Timber Market", "Bilaspur Quarry Belt"],
            fitnessPassingFocus: "Sand dumpers, e-Ravanna mining tippers, and timber transport trucks",
          },
        ],
      },
      {
        name: "Panipat",
        slug: "panipat",
        majorIndustries: ["Textile Machinery & Blanket Transit", "IOCL Refinery Chemical Tankers", "Heavy Logistics"],
        installationTurnaround: "Within 3 Hours",
        rtos: [
          {
            code: "HR-06",
            slug: "hr-06",
            name: "Panipat RTO Office",
            officeAddress: "Near Mini Secretariat, GT Road, Panipat, Haryana 132103",
            majorHubs: ["IOCL Refinery Area", "Sector 29 Industrial Area", "GT Road Logistics Strip"],
            fitnessPassingFocus: "Chemical and petroleum tankers, textile fleet, and long-haul trucks",
          },
        ],
      },
    ],
  },
];

// Helper functions for lookup
export function getAllStates(): StateData[] {
  return VLTD_LOCATIONS;
}

export function getStateBySlug(stateSlug: string): StateData | undefined {
  return VLTD_LOCATIONS.find(
    (s) => s.slug.toLowerCase() === stateSlug.toLowerCase()
  );
}

export function getCityBySlug(stateSlug: string, citySlug: string): { state: StateData; city: CityData } | undefined {
  const state = getStateBySlug(stateSlug);
  if (!state) return undefined;
  const city = state.cities.find(
    (c) => c.slug.toLowerCase() === citySlug.toLowerCase()
  );
  if (!city) return undefined;
  return { state, city };
}

export function getRtoByCode(
  stateSlug: string,
  citySlug: string,
  rtoCodeOrSlug: string
): { state: StateData; city: CityData; rto: RtoOffice } | undefined {
  const cityMatch = getCityBySlug(stateSlug, citySlug);
  if (!cityMatch) return undefined;

  const normalized = rtoCodeOrSlug.toLowerCase().replace(/_/g, "-");
  const rto = cityMatch.city.rtos.find(
    (r) =>
      r.slug.toLowerCase() === normalized ||
      r.code.toLowerCase().replace(/_/g, "-") === normalized
  );

  if (!rto) return undefined;
  return { state: cityMatch.state, city: cityMatch.city, rto };
}

export function getAllRtoParams() {
  const params: { state: string; city: string; "rto-code": string }[] = [];
  for (const state of VLTD_LOCATIONS) {
    for (const city of state.cities) {
      for (const rto of city.rtos) {
        params.push({
          state: state.slug,
          city: city.slug,
          "rto-code": rto.slug,
        });
      }
    }
  }
  return params;
}

export function getAllCityParams() {
  const params: { state: string; city: string }[] = [];
  for (const state of VLTD_LOCATIONS) {
    for (const city of state.cities) {
      params.push({
        state: state.slug,
        city: city.slug,
      });
    }
  }
  return params;
}

export function getAllStateParams() {
  return VLTD_LOCATIONS.map((state) => ({
    state: state.slug,
  }));
}
