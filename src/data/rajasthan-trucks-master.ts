export interface TruckCategory {
  slug: string;
  title: string;
  englishTitle: string;
  hindiTitle: string;
  wheelAxle: string;
  shortDesc: string;
  fullDesc: string;
  compliancePoints: string[];
  typicalRoutes: string[];
  commonBrands: string[];
  topHubsInRajasthan: string[];
  keywords: string[];
}

export interface TruckingArea {
  name: string;
  slug: string;
  hindiName: string;
  rtoCode: string;
  rtoSlug: string;
  rtoName: string;
  landmark: string;
  address: string;
  truckYards: string[];
  dominantFleets: string[];
  doorstepFitmentTime: string;
  passingDetails: string;
}

export interface TruckingCity {
  name: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  truckingHubTitle: string;
  citySummary: string;
  keyHighways: string[];
  miningPortal: string;
  dominantCategories: string[]; // slugs of categories
  areas: TruckingArea[];
  cityFaqs: { q: string; a: string }[];
}

export const TRUCK_CATEGORIES: TruckCategory[] = [
  {
    slug: "marble-trolla",
    title: "Marble Trolla (मार्बल ट्रॉला)",
    englishTitle: "Marble Trolla & Heavy Stone Trailer",
    hindiTitle: "मार्बल ट्रॉला व भारी ट्रेलर",
    wheelAxle: "14-Wheel to 22-Wheel Heavy Multi-Axle",
    shortDesc: "Govt-approved AIS 140 VLTD fitment for 14-to-22 wheeler marble block & slab trailers across Kishangarh, Rajsamand, Makrana & Udaipur.",
    fullDesc: "Marble trollas represent the lifeline of Rajasthan's natural stone export economy. Operating across high-tonnage corridors from Kishangarh, Makrana, and Kelwa to Gujarat and North India, these 14-wheeler, 18-wheeler, and 22-wheeler trailers carry massive marble and granite blocks. Under Rajasthan Department of Mines & Geology (DMG) and MoRTH rules, every marble carrier must have an ARAI-certified AIS 140 GPS tracker with dual SOS panic buttons connected to the Khanij Online Portal for e-Ravanna transit pass generation and Vahan 4.0 fitness passing.",
    compliancePoints: [
      "Mandatory Rajasthan DMG Khanij Online Portal whitelist for e-Ravanna transit pass",
      "Dual emergency SOS panic buttons wired inside cabin for driver and co-driver safety",
      "Instant 60-minute fitment certificate generation synced to Vahan 4.0 database",
      "Heavy-duty IP67 dustproof & vibration-resistant casing for rough quarry operation",
      "Internal battery backup to prevent tracking loss during battery cut-offs",
    ],
    typicalRoutes: [
      "Kishangarh Marble Mandi ➔ Gujarat / Maharashtra NH-48 Belt",
      "Rajsamand (Kelwa) ➔ Udaipur ➔ Ahmedabad Corridor",
      "Makrana Marble Belt ➔ Jaipur ➔ Delhi-NCR",
      "Abu Road ➔ Jalore ➔ Kandla Port Granite Freight",
    ],
    commonBrands: ["Tata Signa 5525.S / 4825.TK", "Ashok Leyland 5525 / AVTR 4220", "BharatBenz 3528C / 4028T", "Eicher Pro 6040 / 8035"],
    topHubsInRajasthan: ["Kishangarh (RJ-42)", "Rajsamand (RJ-30)", "Makrana (RJ-37)", "Udaipur (RJ-27)", "Jalore (RJ-16)"],
    keywords: [
      "marble trolla gps fitment",
      "marble truck ais 140 rajasthan",
      "kishangarh marble trolla passing certificate",
      "dmg khanij marble e-ravanna gps",
      "मार्बल ट्रॉला जीपीएस फिटमेंट",
      "rj 42 marble truck fitness passing",
    ],
  },
  {
    slug: "mining-dumper",
    title: "Mining Dumper & Tipper (खनन डंपर व टिपर)",
    englishTitle: "Mining Tippers & Heavy Rock Haulers",
    hindiTitle: "खनन डंपर व भारी रॉक हॉलर्स",
    wheelAxle: "10-Wheel, 12-Wheel & 14-Wheel Heavy Tipper",
    shortDesc: "Certified AIS 140 VLTD with panic buttons for mineral quarry dumpers, rock haulers, and open-cast mining fleets across Rajasthan.",
    fullDesc: "Mining tippers and dumpers operate under extreme dust, vibration, and heavy-duty load conditions across Rajasthan's limestone, zinc, silica sand, and lignite mines. Rajasthan DMG enforcement strictly blocks any dumper without an active, government-whitelisted AIS 140 VLTD unit from downloading e-Ravanna transit passes. NViQ supplies ruggedized, ARAI/ICAT approved mining GPS units with real-time panic alert push to state mining surveillance servers and 1-hour Vahan fitness clearance.",
    compliancePoints: [
      "100% compliant with Rajasthan DMG Khanij Online surveillance mandate",
      "Real-time geofence violation alerts for unauthorized mining lease exits",
      "High-durability IP67 waterproof hardware withstands high-pressure quarry washing",
      "Dual SOS panic buttons for instant driver distress signal transmission",
      "Over-the-air firmware updates and tamper-proof cable harness fitment",
    ],
    typicalRoutes: [
      "Chittorgarh & Nimbahera Limestone Mines ➔ Cement Plant Kilns",
      "Dariba & Zawar Zinc Mines (Hindustan Zinc) ➔ Smelter Plants",
      "Jodhpur Stone Belt (Mandore/Boranada) ➔ Inter-State Construction Sites",
      "Bhilwara Mandal & Hamirgarh Mineral Corridors",
    ],
    commonBrands: ["Tata Signa 2823.K / 3525.K", "Ashok Leyland 2820 Tipper", "BharatBenz 2823C / 3528CM", "Mahindra Blazo X 28 Tipper"],
    topHubsInRajasthan: ["Chittorgarh (RJ-09)", "Bhilwara (RJ-06)", "Jodhpur (RJ-19)", "Udaipur (RJ-27)", "Kota (RJ-20)"],
    keywords: [
      "mining dumper ais 140 gps",
      "rajasthan khanij dumper tracker",
      "tipper fitness passing certificate rto",
      "mining tipper panic button installation",
      "डंपर जीपीएस पासिंग राजस्थान",
      "e-ravanna approved dumper gps",
    ],
  },
  {
    slug: "bajri-truck",
    title: "Bajri Truck & Sand Tipper (बजरी डंपर)",
    englishTitle: "River Sand (Bajri) & Aggregate Tippers",
    hindiTitle: "नदी बजरी व रेत डंपर",
    wheelAxle: "6-Wheel, 10-Wheel & 12-Wheel Sand Dumpers",
    shortDesc: "MoRTH and Rajasthan Mines compliant AIS 140 fitment for river sand (bajri) tippers with instant e-Ravanna challan activation.",
    fullDesc: "Bajri (river sand) transport in Rajasthan—originating along the Banas river basin in Tonk, Bhilwara, Sawai Madhopur, and Jaipur—is heavily monitored by mining police and state transport authorities. Unregistered sand tippers face severe penalties exceeding ₹25,000 for non-whitelisted GPS devices. NViQ provides doorstep installation across sand loading zones and transport yards with instant DMG Khanij synchronization so your bajri truck operates legally without stoppages.",
    compliancePoints: [
      "Real-time sync with Rajasthan Mines department to generate legitimate bajri e-Ravanna",
      "Avoid severe illegal sand transit penalties and police impoundments",
      "Same-day doorstep fitment across Banas river transport yards and dhabas",
      "Direct Vahan 4.0 fitness verification certificate uploaded within 60 minutes",
      "Mobile tracking app with accurate vehicle location and engine on/off status",
    ],
    typicalRoutes: [
      "Banas River Basin (Tonk / Bhilwara) ➔ Jaipur NCR Influx",
      "Chambal River Aggregate Hubs ➔ Kota & Central Rajasthan",
      "Luni River Sand Zone ➔ Jodhpur & Barmer Border Belt",
      "Dudu & Phulera Sand Bypass ➔ Ring Road Jaipur",
    ],
    commonBrands: ["Tata 1616 Tipper / LPT 1618", "Ashok Leyland 1615 / 1920", "Eicher Pro 2110 / 3019", "BharatBenz 1217C"],
    topHubsInRajasthan: ["Bhilwara (RJ-06)", "Tonk (RJ-26)", "Jaipur (RJ-14 / RJ-45)", "Sawai Madhopur (RJ-25)", "Kota (RJ-20)"],
    keywords: [
      "bajri truck gps passing",
      "sand tipper ais 140 rajasthan",
      "banas bajri dumper tracker",
      "e ravanna bajri truck certificate",
      "बजरी ट्रक जीपीएस फिटमेंट",
      "rj 06 sand truck passing gps",
    ],
  },
  {
    slug: "cement-bulker",
    title: "Cement Bulker & Clinker Trailer (सीमेंट बल्कर)",
    englishTitle: "Cement Bulkers, Fly Ash Carriers & Clinker Trailers",
    hindiTitle: "सीमेंट बल्कर व फ्लाई ऐश टैंकर",
    wheelAxle: "14-Wheel, 16-Wheel & 22-Wheel Bulker Trailers",
    shortDesc: "Heavy-duty AIS 140 VLTD with telemetry sensors for loose cement bulkers, fly-ash tankers, and plant dispatch fleets in Chittorgarh & Nimbahera.",
    fullDesc: "Chittorgarh and Nimbahera host India's dense cluster of mega cement plants, including Wonder Cement, JK Cement, Birla Corporation, and UltraTech. Thousands of specialized bulkers transport loose OPC/PPC cement and fly-ash 24/7 along NH-27 and NH-48. Industrial safety mandates and RTO fitness passing require robust AIS 140 VLTD units with dual panic buttons, SOS distress signaling, and tamper detection.",
    compliancePoints: [
      "Full compliance with Cement Plant Safety protocols and automated gate-entry RFID/GPS standards",
      "Instant Vahan 4.0 sync for annual commercial vehicle fitness passing without RTO delays",
      "Emergency panic button fitment wired for both driver and co-driver",
      "Live trip speed monitoring to prevent highway overspeeding citations",
      "Pan-India roaming SIM card ensuring zero telemetry blindspots across hilly routes",
    ],
    typicalRoutes: [
      "Nimbahera / Chittorgarh Cement Belt ➔ Gujarat / Delhi-NCR / Haryana",
      "Beawar & Ras Cement Corridor ➔ North India Infrastructure Sites",
      "Lakheri / Bundi Cement Plants ➔ Kota & Western UP",
      "Nathdwara & Sirohi Clinker Belt ➔ Ports & Regional Grinding Units",
    ],
    commonBrands: ["Tata Signa 4018.S / 4925.S", "Ashok Leyland 4220 / 4825 Bulker", "BharatBenz 4028T / 5528TT", "Eicher Pro 6048"],
    topHubsInRajasthan: ["Chittorgarh (RJ-09)", "Beawar (RJ-36)", "Sirohi (RJ-24)", "Bundi (RJ-08)", "Nagaur (RJ-21)"],
    keywords: [
      "cement bulker gps passing",
      "chittorgarh bulker ais 140 installation",
      "nimbahera cement truck vltd",
      "fly ash bulker vahan passing tracker",
      "सीमेंट बल्कर जीपीएस फिटमेंट",
      "rj 09 cement bulker fitness passing",
    ],
  },
  {
    slug: "stone-crusher-tipper",
    title: "Stone Crusher & Ballast Tipper (पत्थर क्रशर ट्रक)",
    englishTitle: "Stone Crusher Tippers & Gitti Haulers",
    hindiTitle: "पत्थर क्रशर व गिट्टी हॉलर्स",
    wheelAxle: "10-Wheel & 12-Wheel Heavy Duty Tippers",
    shortDesc: "Rugged AIS 140 VLTD with panic buttons for Kota stone, ballast crushers, and m-sand commercial haulers.",
    fullDesc: "Crusher tippers carry heavy aggregate (gitti) and stone rubble from quarries to highway expansion projects across Rajasthan. Working in severe dust environments around VKI Jaipur, Ramganj Mandi, Matsya Alwar, and Mandore Jodhpur, these vehicles require industrial-grade IP67 GPS trackers that endure vibration while complying with RTO fitness and state environmental tracking norms.",
    compliancePoints: [
      "Vibration and shock-resistant casing built specifically for rocky quarry routes",
      "Authorized DMG Khanij transit pass generation for crushed aggregate transit",
      "Doorstep technician service directly at crusher zones and stone weighing scales (Dharakanta)",
      "Vahan 4.0 online certificate upload within 60 minutes of installation",
      "Driver panic buttons wired cleanly with zero battery drain guarantee",
    ],
    typicalRoutes: [
      "Ramganj Mandi Stone Belt ➔ Kota & MP Border Delivery",
      "Matsya Industrial Area (Alwar) ➔ Delhi-Mumbai Expressway Project",
      "VKI Road No. 14 / Chomu Bypass ➔ Jaipur Infrastructure Projects",
      "Mandore & Balesar Stone Belt ➔ Marwar Construction Sites",
    ],
    commonBrands: ["Tata Signa 2823.K", "Ashok Leyland 2820", "BharatBenz 2823C", "Eicher Pro 6028T"],
    topHubsInRajasthan: ["Kota (RJ-20 / RJ-33)", "Alwar (RJ-02)", "Jaipur (RJ-45)", "Jodhpur (RJ-19)", "Bhilwara (RJ-06)"],
    keywords: [
      "stone crusher truck gps",
      "gitti dumper ais 140 passing",
      "kota stone tipper vltd fitment",
      "ramganj mandi stone dumper tracker",
      "क्रशर डंपर जीपीएस पासिंग",
      "stone quarry truck fitness tracker",
    ],
  },
  {
    slug: "oil-tanker",
    title: "Oil & Chemical Tanker (पेट्रोलियम व केमिकल टैंकर)",
    englishTitle: "Petroleum, Crude Oil & Chemical Tankers",
    hindiTitle: "पेट्रोलियम व केमिकल टैंकर",
    wheelAxle: "10-Wheel, 12-Wheel & Multi-Axle Hazchem Tankers",
    shortDesc: "PESO & AIS 140 certified VLTD trackers with panic buttons for crude oil, petroleum, and industrial chemical haulers.",
    fullDesc: "Operating from the Barmer Cairn Vedanta oil fields, HPCL Pachpadra refinery, IOCL Jaipur pipeline terminal, and Kota chemical industrial zones, hazardous material tankers face stringent safety checks. Every tanker must carry MoRTH-notified AIS 140 VLTD with continuous location ping, emergency distress push, and tamper alerting to maintain national road safety and RTO fitness certification.",
    compliancePoints: [
      "Certified under AIS 140 standard for hazardous goods and petroleum transport (Hazchem)",
      "Dual panic button installation for cabin safety compliance",
      "National Vahan 4.0 database sync for hassle-free annual RTO fitness passing",
      "Intelligent tampering alert sent if GPS power cable is disconnected",
      "Accurate telemetry with live speed tracking and harsh braking alerts",
    ],
    typicalRoutes: [
      "Barmer Cairn Oilfields & Pachpadra Refinery ➔ Gujarat / North India Refineries",
      "IOCL Sanganer & Bagru Depots ➔ Statewide Fuel Retailers",
      "Kota DCM Chemical Belt ➔ Western India Industrial Complexes",
      "Bhiwadi Chemical & Paint Manufacturing Corridors",
    ],
    commonBrands: ["Tata LPT 2818 Tanker / Signa 3523.T", "Ashok Leyland 2820 Tanker", "BharatBenz 2823R", "Eicher Pro 3019"],
    topHubsInRajasthan: ["Barmer (RJ-04)", "Jaipur (RJ-14)", "Kota (RJ-20)", "Alwar (RJ-02)", "Udaipur (RJ-27)"],
    keywords: [
      "oil tanker ais 140 gps",
      "petroleum tanker rto passing certificate",
      "barmer crude oil truck vltd",
      "chemical tanker panic button tracker",
      "ऑयल टैंकर जीपीएस पासिंग",
      "rj 04 tanker fitness passing gps",
    ],
  },
  {
    slug: "container-trailer",
    title: "Container Trailer (कंटेनर ट्रॉला व ट्रेलर)",
    englishTitle: "Multi-Axle Container Trailers & Freight Carriers",
    hindiTitle: "मल्टी-एक्सल कंटेनर ट्रॉला व फ्रेट कैरियर्स",
    wheelAxle: "18-Wheel & 22-Wheel Inter-State Container Trailers",
    shortDesc: "High-reliability AIS 140 VLTD trackers for export-import container trailers, logistics carriers, and ICD fleets.",
    fullDesc: "Rajasthan's export economy relies on massive container trailers moving between dry ports (ICD Kanakpura, Concor Jodhpur, Bhiwadi Concor) and Western seaports (Mundra, Kandla, Pipavav, Nhava Sheva). Fleet operators along the Golden Quadrilateral (NH-48) require AIS 140 VLTD trackers to fulfill corporate logistics mandates, pass inter-state transport fitness, and protect million-dollar export cargo.",
    compliancePoints: [
      "Pre-approved for Inland Container Depot (ICD) gate entry and multi-modal logistics",
      "Instant Vahan 4.0 certificate generation for heavy goods vehicle (HGV) annual passing",
      "Nationwide high-sensitivity GPS chip with dual network 4G SIM fallback",
      "Driver safety panic buttons and real-time ignition status monitoring",
      "Integration with fleet management dashboards for tyre and fuel operational efficiency",
    ],
    typicalRoutes: [
      "ICD Kanakpura (Jaipur) ➔ Mundra / Kandla Port NH-48 Expressway",
      "Bhiwadi NCR Logistics Cluster ➔ Delhi-Mumbai Industrial Corridor (DMIC)",
      "ICD Bhagat Ki Kothi (Jodhpur) ➔ Gujarat Seaport Export Line",
      "Neemrana Japanese Zone ➔ Chennai / Mumbai Automotive Transport",
    ],
    commonBrands: ["Tata Prima 5530.S / Signa 5525.S", "Ashok Leyland 5525 Tractor", "BharatBenz 5528TT", "Volvo FH Series"],
    topHubsInRajasthan: ["Jaipur (RJ-14 / RJ-45)", "Alwar / Bhiwadi (RJ-02 / RJ-40)", "Jodhpur (RJ-19)", "Kishangarh (RJ-42)", "Udaipur (RJ-27)"],
    keywords: [
      "container trailer ais 140 gps",
      "interstate truck rto passing certificate",
      "icd jaipur container fleet tracker",
      "bhiwadi container trailer vltd",
      "कंटेनर ट्रेलर जीपीएस",
      "rj 14 heavy commercial vehicle passing",
    ],
  },
  {
    slug: "commercial-bus",
    title: "Commercial Bus & Tourist Coach (टूरिस्ट व स्कूल बस)",
    englishTitle: "All India Tourist Permit (AITP) Coaches & School Buses",
    hindiTitle: "टूरिस्ट कोच व स्कूल बस",
    wheelAxle: "2-Axle & Multi-Axle Passenger Carriers",
    shortDesc: "MoRTH AIS 140 VLTD with multiple panic buttons for Rajasthan tourist luxury coaches, sleeper buses, and school transit fleets.",
    fullDesc: "Under Ministry of Road Transport and Highways (MoRTH) and Rajasthan Transport Department mandates, all commercial passenger buses—including All India Tourist Permit (AITP) luxury coaches, inter-city private sleepers, and school buses—must have AIS 140 VLTD with emergency panic buttons installed at every passenger window row. Fitness certificates cannot be renewed without verified Vahan 4.0 panic button test reports.",
    compliancePoints: [
      "Mandatory for All India Tourist Permit (AITP) issuance and annual renewal",
      "Multi-point passenger panic button installation with buzzer and LED indicators",
      "Same-day doorstep fitment across bus depots, transport yards, and school campuses",
      "Instant push to Rajasthan Parivahan Sewa / Vahan 4.0 database",
      "Passenger safety live tracking accessible by fleet manager and school administration",
    ],
    typicalRoutes: [
      "Jaipur ➔ Delhi / Agra Golden Triangle Tourist Circuit",
      "Udaipur ➔ Ahmedabad / Mount Abu Luxury Travel Route",
      "Jodhpur ➔ Jaisalmer Desert Safari Inter-City Fleet",
      "Kota Education Hub Coach Transit",
    ],
    commonBrands: ["Tata Starbus Ultra", "Ashok Leyland Viking / Oyster", "Eicher Skyline Pro", "Volvo 9600 Multi-Axle"],
    topHubsInRajasthan: ["Jaipur (RJ-14)", "Udaipur (RJ-27)", "Jodhpur (RJ-19)", "Kota (RJ-20)", "Bikaner (RJ-07)"],
    keywords: [
      "tourist bus ais 140 gps",
      "school bus panic button passing certificate",
      "aitp bus vltd rajasthan",
      "sleeper bus gps tracker fitment",
      "टूरिस्ट बस जीपीएस पासिंग",
      "rj 14 tourist coach fitness passing",
    ],
  },
];

export const RAJASTHAN_TRUCK_CITIES: TruckingCity[] = [
  {
    name: "Jaipur",
    slug: "jaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Jaipur Freight & Logistics Hub (Transport Nagar & VKI Belt)",
    citySummary: "Jaipur is North India's premier freight interchange connecting Delhi-NCR to Gujarat and Mumbai via NH-48. With over 60,000 commercial vehicles operating out of Jaipur Transport Nagar, VKI Industrial Area, and Bagru, the city represents Rajasthan's largest volume of RTO fitness passing under RJ-14 and RJ-45.",
    keyHighways: ["NH-48 (Delhi-Jaipur Highway)", "Jaipur Ring Road Expressway", "NH-21 (Agra Road)", "NH-52 (Sikar-Kota Highway)"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["container-trailer", "stone-crusher-tipper", "bajri-truck", "commercial-bus", "oil-tanker"],
    areas: [
      {
        name: "Jaipur Transport Nagar",
        slug: "transport-nagar",
        hindiName: "ट्रांसपोर्ट नगर, जयपुर",
        rtoCode: "RJ-14",
        rtoSlug: "rj-14",
        rtoName: "Jaipur Central RTO (Jhalana)",
        landmark: "Agra Road & Ghat Ki Guni Crossing",
        address: "Transport Nagar, Agra Road, Jaipur, Rajasthan 302003",
        truckYards: ["Central Heavy Vehicle Parking Yard", "Delhi-Agra Goods Booking Mandi", "Tyre & Leaf-Spring (Kamani) Mechanic Market"],
        dominantFleets: ["Inter-State Container Trailers", "Export Freight Carriers", "Banas Sand Dumpers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "Direct doorstep fitment and instant Vahan 4.0 sync for Jhalana RTO (RJ-14) commercial fitness inspections.",
      },
      {
        name: "VKI Industrial Area",
        slug: "vki-industrial-area",
        hindiName: "वी.के.आई. इंडस्ट्रियल एरिया, जयपुर",
        rtoCode: "RJ-45",
        rtoSlug: "rj-45",
        rtoName: "Jaipur North RTO (VKI)",
        landmark: "Road No. 1 to Road No. 14, Sikar Road",
        address: "Vishwakarma Industrial Area (VKI), Sikar Road, Jaipur, Rajasthan 302013",
        truckYards: ["Road No. 6 Truck Parking", "Sikar Road Mineral Carrier Terminal", "Chomu Bypass Heavy Haulage Depot"],
        dominantFleets: ["Stone Crusher Tippers", "Steel & Machinery Trailers", "Marble Block Trollas"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Immediate Vahan certificate issue for RJ-45 VKI RTO fitness renewal and stone crusher passing.",
      },
      {
        name: "Bagru Logistics Hub",
        slug: "bagru-logistics-hub",
        hindiName: "बगरू लॉजिस्टिक्स हब, जयपुर",
        rtoCode: "RJ-14",
        rtoSlug: "rj-14",
        rtoName: "Jaipur Central RTO (Jhalana)",
        landmark: "Ajmer Road Expressway, Mahindra World City Junction",
        address: "Bagru Industrial Belt, Ajmer Road, Jaipur, Rajasthan 303007",
        truckYards: ["Mahindra World City Warehousing Yard", "Ajmer Highway Multi-Axle Parking", "Chemical & FMCG Dispatch Center"],
        dominantFleets: ["E-Commerce Express Trucks", "Petroleum Tankers", "Heavy Multi-Axle Long-Haul Trailers"],
        doorstepFitmentTime: "Within 2 to 3 Hours",
        passingDetails: "Fast-track doorstep fitment at major transport warehouses with corporate volume discounts.",
      },
    ],
    cityFaqs: [
      {
        q: "Where in Jaipur can I get AIS 140 VLTD installed on my truck for RTO passing?",
        a: "NViQ provides doorstep installation across Jaipur Transport Nagar, VKI Industrial Area, Bagru, and Sitapura. Our technicians reach your parking yard within 1 to 2 hours.",
      },
      {
        q: "How fast is the certificate uploaded to Vahan for RJ-14 and RJ-45 passing?",
        a: "Certificates are synchronized with Parivahan Vahan 4.0 within 60 minutes of fitment, allowing your fitness inspection at Jhalana or VKI RTO to proceed immediately.",
      },
      {
        q: "Are NViQ devices approved for Rajasthan DMG mining e-Ravanna in Jaipur?",
        a: "Yes. Our devices are pre-configured with emergency panic buttons and whitelisted on the Rajasthan DMG Khanij Online Portal for e-Ravanna generation.",
      },
    ],
  },
  {
    name: "Kishangarh & Ajmer",
    slug: "kishangarh",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Kishangarh Asia Marble Mandi & Freight Hub",
    citySummary: "Kishangarh is widely recognized as Asia's largest marble and granite trading center, home to over 25,000 multi-axle marble trollas (ट्रॉला) and flatbed trailers. Heavy trailers continuously transport stone blocks between Makrana, Rajsamand, Gujarat ports, and North India under RJ-42 and RJ-01 jurisdictions.",
    keyHighways: ["NH-48 (Jaipur-Ajmer Expressway)", "Harmara-Makrana Bypass", "Ajmer Ring Highway"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["marble-trolla", "mining-dumper", "container-trailer", "commercial-bus"],
    areas: [
      {
        name: "Kishangarh Marble Mandi Yard",
        slug: "marble-mandi",
        hindiName: "मार्बल मंडी यार्ड, किशनगढ़",
        rtoCode: "RJ-42",
        rtoSlug: "rj-42",
        rtoName: "Kishangarh DTO Office",
        landmark: "Marble Association Road & RIICO Industrial Area",
        address: "Kishangarh Marble Association Market, Ajmer Road, Kishangarh, Rajasthan 305801",
        truckYards: ["Main Marble Mandi Truck Terminal", "Saw-Mill & Granite Cutting Yard", "Weighbridge Dharakanta Row"],
        dominantFleets: ["14-Wheel to 22-Wheel Marble Trollas", "Granite Slab Trailers", "Block Haulers"],
        doorstepFitmentTime: "Within 1 Hour",
        passingDetails: "Specialized doorstep fitment for marble trolla unions with instant RJ-42 DTO fitness certificates.",
      },
      {
        name: "Harmara Bypass & Truck Parking",
        slug: "harmara-bypass",
        hindiName: "हरमाड़ा बाईपास, किशनगढ़",
        rtoCode: "RJ-42",
        rtoSlug: "rj-42",
        rtoName: "Kishangarh DTO Office",
        landmark: "NH-48 Flyover Junction",
        address: "Harmara Road, NH-48 Bypass, Kishangarh, Rajasthan 305802",
        truckYards: ["Expressway Dhaba Truck Stop", "Tyre Retreading & Repair Cluster", "Inter-State Fleet Staging Depot"],
        dominantFleets: ["Long-Haul Multi-Axle Trollas", "Container Logistics Trailers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "24/7 on-call technician deployment for highway transit trucks requiring emergency GPS certificate replacement.",
      },
      {
        name: "Ajmer Transport Hub",
        slug: "ajmer-transport-hub",
        hindiName: "अजमेर ट्रांसपोर्ट हब",
        rtoCode: "RJ-01",
        rtoSlug: "rj-01",
        rtoName: "Ajmer Central RTO",
        landmark: "Parbatpura Industrial Area, Beawar Road",
        address: "Parbatpura Industrial Area, Beawar Road, Ajmer, Rajasthan 305002",
        truckYards: ["Parbatpura Commercial Goods Yard", "Dargah Tourism Coach Depot", "Makhupura Truck Terminus"],
        dominantFleets: ["Commercial Tourist Coaches", "Machinery Haulers", "Regional Transit Trucks"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Verified Vahan 4.0 sync for RJ-01 Ajmer RTO passenger coach and goods vehicle passing.",
      },
    ],
    cityFaqs: [
      {
        q: "Why do Kishangarh marble trollas need AIS 140 VLTD with panic buttons?",
        a: "Rajasthan Department of Mines & Geology mandates that all marble block and slab carriers must have an approved AIS 140 tracker with 2 panic buttons to generate valid e-Ravanna transit passes. Without it, trucks face heavy mineral transit penalties.",
      },
      {
        q: "Can I get doorstep fitment directly at the Kishangarh Marble Association yard?",
        a: "Yes. Our local Kishangarh technicians reach your marble sawmill, granite yard, or parking dhabas within 60 minutes and upload the fitment certificate directly to Vahan 4.0.",
      },
    ],
  },
  {
    name: "Chittorgarh & Nimbahera",
    slug: "chittorgarh",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Chittorgarh Cement Capital & Heavy Limestone Corridor",
    citySummary: "Chittorgarh and Nimbahera constitute the cement powerhouse of India, surrounded by mammoth manufacturing plants of Wonder Cement, JK Cement, Birla Corporation, and UltraTech. Over 30,000 heavy cement bulkers, fly-ash tankers, and limestone quarry tippers operate under RJ-09 jurisdiction.",
    keyHighways: ["NH-27 (East-West Corridor)", "NH-48 (Golden Quadrilateral)", "Chittor-Nimbahera State Highway"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["cement-bulker", "mining-dumper", "stone-crusher-tipper", "container-trailer"],
    areas: [
      {
        name: "Nimbahera Cement Hub",
        slug: "nimbahera-cement-hub",
        hindiName: "निंबाहेड़ा सीमेंट हब, चित्तौड़गढ़",
        rtoCode: "RJ-09",
        rtoSlug: "rj-09",
        rtoName: "Chittorgarh DTO Office",
        landmark: "Wonder Cement & JK Cement Plant Roads",
        address: "Industrial Road, Nimbahera, District Chittorgarh, Rajasthan 312601",
        truckYards: ["JK Cement Bulker Terminal", "Wonder Cement Logistics Parking", "Ahirpura Mining Dumper Yard"],
        dominantFleets: ["Fly-Ash Bulkers", "Loose Cement Tankers", "Heavy Limestone Quarry Tippers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "Specialized installation compliant with plant gate entry tracking and RJ-09 DTO fitness passing.",
      },
      {
        name: "Chanderiya Industrial Belt",
        slug: "chanderiya-industrial-belt",
        hindiName: "चंदेरिया इंडस्ट्रियल बेल्ट, चित्तौड़गढ़",
        rtoCode: "RJ-09",
        rtoSlug: "rj-09",
        rtoName: "Chittorgarh DTO Office",
        landmark: "Hindustan Zinc Lead-Zinc Smelter Road",
        address: "Chanderiya Industrial Zone, Chittorgarh, Rajasthan 312021",
        truckYards: ["Smelter Mineral Transport Depot", "Birla Cement Bulker Yard", "NH-27 Flyover Truck Stop"],
        dominantFleets: ["Zinc Ore Dumpers", "Heavy Clinker Carriers", "Industrial Chemical Tankers"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Full compatibility with Rajasthan DMG Khanij transit verification and industrial safety norms.",
      },
    ],
    cityFaqs: [
      {
        q: "Are NViQ GPS devices accepted by cement plant automated gate systems in Nimbahera?",
        a: "Yes. NViQ AIS 140 devices adhere to MoRTH AIS 140 protocols and provide reliable GPS feeds compatible with industrial weighbridge and plant gate dispatch systems.",
      },
      {
        q: "How does an RJ-09 fleet owner get wholesale pricing for 10+ bulkers?",
        a: "Fleet owners and cement transport syndicates can access our Bulk & RTO Partner tier starting at confidential wholesale pricing with free on-site fleet installation camps.",
      },
    ],
  },
  {
    name: "Bhilwara",
    slug: "bhilwara",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Bhilwara Textile & Banas Bajri (Sand) Mining Hub",
    citySummary: "Known as Rajasthan's Textile City, Bhilwara is also the primary origin point for Banas river bajri (sand) extraction and iron ore mining. Commercial tipper and truck density under RJ-06 is exceptionally high, requiring continuous DMG Khanij compliance.",
    keyHighways: ["NH-48 (Jaipur-Udaipur Highway)", "NH-148D (Bhilwara-Kota Road)", "Mandal-Bhilwara Expressway"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["bajri-truck", "mining-dumper", "container-trailer", "stone-crusher-tipper"],
    areas: [
      {
        name: "Pur Road Industrial & Transport Zone",
        slug: "pur-road",
        hindiName: "पुर रोड इंडस्ट्रियल व ट्रांसपोर्ट जोन, भीलवाड़ा",
        rtoCode: "RJ-06",
        rtoSlug: "rj-06",
        rtoName: "Bhilwara DTO Office",
        landmark: "Pur Road & RIICO Phase III",
        address: "Pur Road Industrial Area, Bhilwara, Rajasthan 311001",
        truckYards: ["Bhilwara Goods Transport Association Yard", "Textile Container Staging Yard", "Pur Dumper Parking Area"],
        dominantFleets: ["Multi-Axle Textile Carriers", "Iron Ore Dumpers", "Banas Sand Tippers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "Instant fitment certification for RJ-06 vehicle fitness renewal and Banas bajri e-Ravanna clearance.",
      },
      {
        name: "Mandal & Hamirgarh Mining Belt",
        slug: "mandal-stone-belt",
        hindiName: "मांडल व हमीरगढ़ माइनिंग बेल्ट, भीलवाड़ा",
        rtoCode: "RJ-06",
        rtoSlug: "rj-06",
        rtoName: "Bhilwara DTO Office",
        landmark: "NH-48 Hamirgarh Airstrip Crossing",
        address: "Hamirgarh Industrial Zone, District Bhilwara, Rajasthan 311025",
        truckYards: ["Quarry Tipper Weighbridge Yards", "Crusher Hub Truck Staging", "Highway Dumper Union Yard"],
        dominantFleets: ["Heavy Mineral Tippers", "Stone Crushers", "Ballast Dumpers"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Doorstep installation at crushing plants with 1-hour Vahan and DMG Khanij online upload.",
      },
    ],
    cityFaqs: [
      {
        q: "What happens if a bajri tipper in Bhilwara operates without an approved AIS 140 device?",
        a: "The Rajasthan Mines department automatically blocks transit pass (e-Ravanna) generation on the Khanij Online Portal, and the vehicle faces heavy illegal transit fines from mining police.",
      },
    ],
  },
  {
    name: "Jodhpur",
    slug: "jodhpur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Jodhpur Sandstone & Western Marwar Freight Corridor",
    citySummary: "The Sun City serves as the primary transport gateway for western Rajasthan, commanding massive fleets of sandstone tippers, red stone haulers, timber carriers, and handicraft export trailers operating under RJ-19 jurisdiction.",
    keyHighways: ["NH-62 (Bikaner-Jodhpur-Pali)", "NH-112 (Jodhpur-Barmer)", "NH-125 (Jodhpur-Jaisalmer)"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["mining-dumper", "stone-crusher-tipper", "container-trailer", "commercial-bus"],
    areas: [
      {
        name: "Basni Transport Nagar",
        slug: "basni",
        hindiName: "बासनी ट्रांसपोर्ट नगर, जोधपुर",
        rtoCode: "RJ-19",
        rtoSlug: "rj-19",
        rtoName: "Jodhpur RTO Office",
        landmark: "Basni Phase II & AIIMS Road",
        address: "Transport Nagar, Basni Industrial Area, Jodhpur, Rajasthan 342005",
        truckYards: ["Basni Heavy Vehicle Depot", "Handicrafts Export Logistics Center", "Marwar Goods Transport Syndicate"],
        dominantFleets: ["Inter-State Container Fleets", "Sandstone Quarry Carriers", "Timber Trucks"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Doorstep technician fitment for RJ-19 RTO fitness inspections at Mandore and Basni.",
      },
      {
        name: "Mandore Stone Belt & Balesar",
        slug: "mandore-stone-belt",
        hindiName: "मंडोर व बालेसर स्टोन बेल्ट, जोधपुर",
        rtoCode: "RJ-19",
        rtoSlug: "rj-19",
        rtoName: "Jodhpur RTO Office",
        landmark: "Mandore Industrial Area & Balesar Stone Quarries",
        address: "Mandore Mining Zone, Jodhpur, Rajasthan 342026",
        truckYards: ["Chittar Sandstone Loading Hub", "Quarry Weighbridge Staging Area", "Red Stone Tipper Park"],
        dominantFleets: ["Sandstone Block Dumpers", "Heavy 10-Wheel Tippers", "Rubble Carriers"],
        doorstepFitmentTime: "Within 2 to 3 Hours",
        passingDetails: "DMG Khanij Online compliance guarantee with dual panic button integration.",
      },
    ],
    cityFaqs: [
      {
        q: "Is NViQ GPS certified for Jodhpur sandstone and chittar stone tippers?",
        a: "Yes. All NViQ devices are certified for Rajasthan DMG Khanij transit passes and Parivahan Vahan 4.0 fitness passing.",
      },
    ],
  },
  {
    name: "Alwar & Bhiwadi",
    slug: "alwar",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Bhiwadi-Alwar NCR Industrial Freight & Auto-Carrier Corridor",
    citySummary: "Strategically located in NCR along the Delhi-Mumbai Expressway and NH-48, Bhiwadi and Alwar handle India's heaviest concentration of automobile carrier trailers, container logistics, and stone crushing vehicles under RJ-02 and RJ-40.",
    keyHighways: ["Delhi-Mumbai Expressway (NE-4)", "NH-48 (Delhi-Jaipur Highway)", "Bhiwadi-Dharuhera Link Road"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["container-trailer", "stone-crusher-tipper", "oil-tanker", "commercial-bus"],
    areas: [
      {
        name: "Bhiwadi Industrial Corridor",
        slug: "bhiwadi",
        hindiName: "भिवाड़ी इंडस्ट्रियल कॉरिडोर, अलवर",
        rtoCode: "RJ-40",
        rtoSlug: "rj-40",
        rtoName: "Bhiwadi DTO Office",
        landmark: "RIICO Industrial Area Phase I to IV & Khushkhera",
        address: "Bhiwadi Industrial Belt, Alwar District, Rajasthan 301019",
        truckYards: ["Bhiwadi Concor Container Yard", "Automobile Carrier Staging Terminal", "Khushkhera Truck Parking"],
        dominantFleets: ["Automobile Carriers", "Inter-State Container Fleets", "Chemical Tankers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "NCR pollution and transport compliance with verified Vahan 4.0 certificate upload for RJ-40 DTO.",
      },
      {
        name: "Matsya Industrial Area (Alwar)",
        slug: "matsya-industrial-area",
        hindiName: "मत्स्य इंडस्ट्रियल एरिया, अलवर",
        rtoCode: "RJ-02",
        rtoSlug: "rj-02",
        rtoName: "Alwar DTO Office",
        landmark: "Delhi Road & MIA Industrial Hub",
        address: "Matsya Industrial Area, Delhi Road, Alwar, Rajasthan 301030",
        truckYards: ["Alwar Transport Nagar", "MIA Freight Booking Hub", "Crusher Tipper Staging Depot"],
        dominantFleets: ["Stone Crusher Dumpers", "Heavy Machinery Carriers", "Consumer Goods Fleets"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Immediate Vahan 4.0 fitness certification for RJ-02 commercial passing.",
      },
    ],
    cityFaqs: [
      {
        q: "Do auto carriers and container trucks in Bhiwadi need AIS 140 GPS for NCR entry?",
        a: "Yes. Delhi-NCR transport regulations strictly enforce functional AIS 140 VLTD with panic buttons for commercial vehicle fitness and permits.",
      },
    ],
  },
  {
    name: "Udaipur & Rajsamand",
    slug: "udaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Udaipur & Mewar Mineral, Marble & Tourism Transport Belt",
    citySummary: "Udaipur and adjoining Rajsamand (RJ-27 and RJ-30) lead India in green marble, white marble, granite, and zinc mining (Hindustan Zinc Dariba/Zawar). Combined with a large fleet of luxury tourist coaches, this corridor has intense demand for AIS 140 compliance.",
    keyHighways: ["NH-48 (Udaipur-Ahmedabad Golden Quadrilateral)", "NH-58 (Udaipur-Ajmer Highway)", "NH-27 (Udaipur-Pindwara)"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["marble-trolla", "mining-dumper", "commercial-bus", "oil-tanker"],
    areas: [
      {
        name: "Sukher Marble Mandi & Transport Hub",
        slug: "sukher",
        hindiName: "सुखेर मार्बल मंडी, उदयपुर",
        rtoCode: "RJ-27",
        rtoSlug: "rj-27",
        rtoName: "Udaipur RTO Office",
        landmark: "NH-58 Marble Market Corridor",
        address: "Sukher Marble Industrial Area, Nathdwara Road, Udaipur, Rajasthan 313001",
        truckYards: ["Sukher Marble Slab Staging Yard", "Udaipur Truck Operators Syndicate", "NH-58 Weighbridge Park"],
        dominantFleets: ["Heavy Marble Trollas", "Granite Flatbed Trailers", "Mining Quarry Tippers"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "Direct doorstep installation for RJ-27 vehicle fitness passing and DMG Khanij e-Ravanna.",
      },
      {
        name: "Kelwa Marble Zone (Rajsamand)",
        slug: "kelwa-marble-zone",
        hindiName: "केलवा मार्बल जोन, राजसमंद",
        rtoCode: "RJ-30",
        rtoSlug: "rj-30",
        rtoName: "Rajsamand DTO Office",
        landmark: "Kelwa RIICO Industrial Belt, NH-58",
        address: "Kelwa Marble Industrial Belt, District Rajsamand, Rajasthan 313334",
        truckYards: ["Kelwa Marble Block Yard", "Kankroli Industrial Terminal", "Dariba Zinc Haulage Depot"],
        dominantFleets: ["White Marble Block Carriers", "Multi-Axle Dumpers", "Zinc Slurry Tankers"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Guaranteed DMG Khanij portal whitelist and RJ-30 DTO fitness certificate generation.",
      },
    ],
    cityFaqs: [
      {
        q: "How fast can I get a VLTD certificate for my marble trolla in Sukher or Kelwa?",
        a: "Our technicians provide doorstep fitment at your marble yard and push the certificate to Vahan 4.0 within 60 minutes.",
      },
    ],
  },
  {
    name: "Kota & Ramganj Mandi",
    slug: "kota",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Kota Stone Quarry & Hadoti Chemical Corridor",
    citySummary: "The Hadoti region, centered on Kota and Ramganj Mandi (RJ-20 and RJ-33), produces billions of square feet of famous Kota Stone, alongside chemical fertilizers and coaching transit fleets. Dense tipper traffic transports dimensional stone 24/7.",
    keyHighways: ["NH-52 (Kota-Jaipur Highway)", "Delhi-Mumbai Expressway (Kota Section)", "NH-27 (Kota-Baran Expressway)"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["stone-crusher-tipper", "mining-dumper", "oil-tanker", "commercial-bus"],
    areas: [
      {
        name: "Ramganj Mandi Stone Cluster",
        slug: "ramganj-mandi",
        hindiName: "रामगंज मंडी स्टोन क्लस्टर, कोटा",
        rtoCode: "RJ-33",
        rtoSlug: "rj-33",
        rtoName: "Ramganj Mandi DTO Office",
        landmark: "Kota Stone Industrial Estate",
        address: "RIICO Industrial Area, Ramganj Mandi, District Kota, Rajasthan 326519",
        truckYards: ["Kota Stone Loading Hub", "Quarry Tipper Parking Area", "Dharakanta Weighbridge Staging"],
        dominantFleets: ["Kota Stone Dimensional Carriers", "Heavy Limestone Tippers", "Aggregate Dumpers"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Complete DMG e-Ravanna authorization and RJ-33 DTO passing compliance.",
      },
      {
        name: "Anantpura Transport Nagar (Kota)",
        slug: "anantpura",
        hindiName: "अनंतपुरा ट्रांसपोर्ट नगर, कोटा",
        rtoCode: "RJ-20",
        rtoSlug: "rj-20",
        rtoName: "Kota DTO Office",
        landmark: "Jhalawar Road & DCM Bypass",
        address: "Transport Nagar, Anantpura, Kota, Rajasthan 324005",
        truckYards: ["Anantpura Goods Booking Depot", "Chemical Tanker Staging Yard", "Commercial Coach Yard"],
        dominantFleets: ["Chemical Tankers", "Student Transit Fleet", "Fertilizer Trucks"],
        doorstepFitmentTime: "Within 1 to 2 Hours",
        passingDetails: "Fast Vahan 4.0 sync for RJ-20 annual commercial passing inspections.",
      },
    ],
    cityFaqs: [
      {
        q: "Do Kota stone tippers in Ramganj Mandi require panic buttons for e-Ravanna?",
        a: "Yes. Rajasthan DMG Khanij portal mandates ARAI-approved AIS 140 GPS with 2 connected emergency SOS buttons to generate transit passes.",
      },
    ],
  },
  {
    name: "Nagaur & Makrana",
    slug: "nagaur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Makrana Legendary Marble & Didwana Salt Corridor",
    citySummary: "Home to the world's most famous white marble in Makrana, gypsum mines in Degana, and massive inland salt production in Didwana, this central Rajasthan district (RJ-21 and RJ-37) commands thousands of specialized multi-axle stone and mineral trucks.",
    keyHighways: ["NH-58 (Ajmer-Nagaur)", "NH-89 (Ajmer-Bikaner Highway)", "Makrana-Kishangarh State Highway"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["marble-trolla", "mining-dumper", "bajri-truck", "container-trailer"],
    areas: [
      {
        name: "Makrana Marble Mandi & Bypass",
        slug: "makrana-marble-mandi",
        hindiName: "मकराना मार्बल मंडी व बाईपास",
        rtoCode: "RJ-37",
        rtoSlug: "rj-37",
        rtoName: "Didwana / Kuchaman DTO Office",
        landmark: "Makrana Railway Station Industrial Bypass",
        address: "Marble Mandi, Makrana, District Didwana-Kuchaman, Rajasthan 341505",
        truckYards: ["Makrana Marble Association Yard", "Block Sawmill Staging Depot", "Bypass Truck Dhaba Hub"],
        dominantFleets: ["White Marble Block Trollas", "Granite Haulers", "Gypsum Carriers"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Immediate Vahan certificate issue for RJ-37 and RJ-21 stone carrier fitness passing.",
      },
    ],
    cityFaqs: [
      {
        q: "Can I get AIS 140 fitted in Makrana for white marble trollas?",
        a: "Yes, NViQ provides doorstep installation across all marble sawmills and bypass dhabas in Makrana within 2 hours.",
      },
    ],
  },
  {
    name: "Bikaner",
    slug: "bikaner",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Bikaner POP, Clay & Desert Logistics Corridor",
    citySummary: "Bikaner (RJ-07) is India's largest hub for Plaster of Paris (POP), ceramic ball clay, and wool transport, connecting northern desert logistics to central Rajasthan along NH-11 and NH-62.",
    keyHighways: ["NH-11 (Bikaner-Jaipur)", "NH-62 (Bikaner-Jodhpur)", "Amritsar-Jamnagar Economic Corridor"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["mining-dumper", "cement-bulker", "container-trailer", "commercial-bus"],
    areas: [
      {
        name: "Karni Industrial Area & Bichhwal",
        slug: "karni-industrial-area",
        hindiName: "करणी इंडस्ट्रियल एरिया व बिछवाल, बीकानेर",
        rtoCode: "RJ-07",
        rtoSlug: "rj-07",
        rtoName: "Bikaner RTO Office",
        landmark: "RIICO Karni Industrial Area & Bichhwal Bypass",
        address: "Karni Industrial Area, Bikaner, Rajasthan 334004",
        truckYards: ["POP Bulker Parking Yard", "Bichhwal Goods Booking Mandi", "Ceramic Transport Depot"],
        dominantFleets: ["Plaster of Paris Bulkers", "Clay Tippers", "Inter-State Freight Fleets"],
        doorstepFitmentTime: "Within 2 Hours",
        passingDetails: "Certified Vahan 4.0 sync for RJ-07 commercial fitness inspections.",
      },
    ],
    cityFaqs: [
      {
        q: "Do POP and clay tippers in Bikaner need Rajasthan DMG Khanij whitelisting?",
        a: "Yes, gypsum and clay transport requires verified AIS 140 devices to generate DMG Khanij transit passes without penalties.",
      },
    ],
  },
  {
    name: "Barmer",
    slug: "barmer",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    truckingHubTitle: "Barmer Crude Oil, Refinery & Bentonite Corridor",
    citySummary: "Barmer (RJ-04) has transformed into a national energy nerve center with Cairn Vedanta crude oil fields and the HPCL Pachpadra mega-refinery. Heavy crude tankers and bentonite quarry tippers dominate the landscape.",
    keyHighways: ["NH-25 (Barmer-Jodhpur)", "NH-68 (Barmer-Jaisalmer / Gujarat Highway)", "Pachpadra Refinery Expressway"],
    miningPortal: "DMG Rajasthan Khanij Online Portal",
    dominantCategories: ["oil-tanker", "mining-dumper", "container-trailer", "stone-crusher-tipper"],
    areas: [
      {
        name: "Pachpadra & Balotra Refinery Hub",
        slug: "pachpadra-refinery-hub",
        hindiName: "पचपदरा व बालोतरा रिफाइनरी हब, बाड़मेर",
        rtoCode: "RJ-04",
        rtoSlug: "rj-04",
        rtoName: "Barmer DTO / Balotra Office",
        landmark: "HPCL Refinery Complex & Balotra Industrial Area",
        address: "Refinery Corridor, Pachpadra, District Balotra/Barmer, Rajasthan 344032",
        truckYards: ["Petroleum Tanker Staging Depot", "Balotra Textile Fleet Yard", "Bentonite Mineral Park"],
        dominantFleets: ["Crude Oil Tankers", "Heavy Construction Equipment", "Bentonite Tippers"],
        doorstepFitmentTime: "Within 2 to 3 Hours",
        passingDetails: "High-spec Hazchem compliance with dual panic buttons and RJ-04 fitness passing.",
      },
    ],
    cityFaqs: [
      {
        q: "Are NViQ trackers approved for crude oil tankers at Barmer refinery?",
        a: "Yes. Our AIS 140 VLTD devices satisfy Hazchem guidelines and are approved on Vahan 4.0 for tanker fitness certification.",
      },
    ],
  },
];

// Helper functions for easy querying
export function getAllTruckCategories(): TruckCategory[] {
  return TRUCK_CATEGORIES;
}

export function getTruckCategoryBySlug(slug: string): TruckCategory | undefined {
  return TRUCK_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllTruckCities(): TruckingCity[] {
  return RAJASTHAN_TRUCK_CITIES;
}

export function getTruckCityBySlug(stateSlug: string, citySlug: string): TruckingCity | undefined {
  if (stateSlug !== "rajasthan") return undefined;
  return RAJASTHAN_TRUCK_CITIES.find((c) => c.slug === citySlug);
}

export function getTruckAreaBySlug(stateSlug: string, citySlug: string, areaSlug: string): { city: TruckingCity; area: TruckingArea } | undefined {
  const city = getTruckCityBySlug(stateSlug, citySlug);
  if (!city) return undefined;
  const area = city.areas.find((a) => a.slug === areaSlug);
  if (!area) return undefined;
  return { city, area };
}

export function getTruckAreaRtoDetail(stateSlug: string, citySlug: string, areaSlug: string, rtoCodeSlug: string): { city: TruckingCity; area: TruckingArea } | undefined {
  const match = getTruckAreaBySlug(stateSlug, citySlug, areaSlug);
  if (!match) return undefined;
  if (match.area.rtoSlug.toLowerCase() !== rtoCodeSlug.toLowerCase()) return undefined;
  return match;
}

// Static parameter generators for programmatic routes
export function getAllTruckStateParams() {
  return [{ state: "rajasthan" }];
}

export function getAllTruckPassingCityParams() {
  return RAJASTHAN_TRUCK_CITIES.map((c) => ({
    state: c.stateSlug,
    city: c.slug,
  }));
}

export function getAllTruckPassingAreaParams() {
  const params: { state: string; city: string; area: string }[] = [];
  for (const c of RAJASTHAN_TRUCK_CITIES) {
    for (const a of c.areas) {
      params.push({
        state: c.stateSlug,
        city: c.slug,
        area: a.slug,
      });
    }
  }
  return params;
}

export function getAllTruckPassingAreaRtoParams() {
  const params: { state: string; city: string; area: string; "rto-code": string }[] = [];
  for (const c of RAJASTHAN_TRUCK_CITIES) {
    for (const a of c.areas) {
      params.push({
        state: c.stateSlug,
        city: c.slug,
        area: a.slug,
        "rto-code": a.rtoSlug,
      });
    }
  }
  return params;
}

export function getAllTruckCategoryParams() {
  return TRUCK_CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export function getAllStateTruckCategoryParams() {
  const params: { state: string; category: string }[] = [];
  for (const cat of TRUCK_CATEGORIES) {
    params.push({
      state: "rajasthan",
      category: cat.slug,
    });
  }
  return params;
}

export function getAllCityTruckCategoryParams() {
  const params: { state: string; city: string; category: string }[] = [];
  for (const c of RAJASTHAN_TRUCK_CITIES) {
    for (const catSlug of c.dominantCategories) {
      params.push({
        state: c.stateSlug,
        city: c.slug,
        category: catSlug,
      });
    }
  }
  return params;
}
