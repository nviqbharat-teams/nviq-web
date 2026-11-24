// Plain-text summaries of the site for AI assistants (ChatGPT, Perplexity,
// Claude, Gemini...). Served at /llms.txt (short index) and /llms-full.txt
// (every answer). Built from the same data as the pages so it never drifts.

import { SEGMENTS } from "@/data/segments";
import { RTO_SERVICES } from "@/data/rto-services";
import { HOME_FAQS } from "@/data/faqs";
import { TOOLS } from "@/components/tools/tool-page";
import { getAllStates, hasMiningIntegration } from "@/data/vltd-india";
import { SALES_PHONE_DISPLAY, SUPPORT_PHONE_DISPLAY } from "@/lib/contact";

const BASE = "https://www.naviqbharat.com";

const ABOUT = `NViQ Bharat (NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED) fits government-approved AIS 140 VLTD (Vehicle Location Tracking Device) GPS trackers with panic buttons on commercial vehicles across India: trucks, buses, school buses and vans, taxis and cabs, tankers, mining dumpers and tippers. A technician fits the device at the customer's location in about 30–45 minutes and the fitment certificate is updated on Vahan 4.0 in about 1 hour, so RTO fitness, permit and registration work can continue the same day. Devices are ARAI / ICAT certified, carry a lifetime replacement warranty, and are whitelisted on Vahan 4.0 and the state mining portals Rajasthan DMG, MP Khanij, Gujarat i-Khanij and Haryana e-Ravanna. Every customer gets the NViQ tracking app (live location, route history, overspeed / geofence alerts, engine cut-off, shareable live links, trip and km reports). NViQ also handles RTO work (fitness certificate, permits, RC transfer, NOC, hypothecation removal) and runs a wholesale partner program for RTO agents. 10,000+ vehicles are on NViQ.`;

const CONTACT = `- Sales (call / WhatsApp): ${SALES_PHONE_DISPLAY}
- Support for existing customers: ${SUPPORT_PHONE_DISPLAY}
- Email: team@naviqbharat.com
- Office: 320, 3rd floor, Wonder Mall, Company Bagh Road, Katla, Sector 7, Alwar, Rajasthan 301001, India
- Hours: Monday–Saturday, 09:00–19:00 IST
- Languages: English, Hindi
- Prices are not published; send the vehicle number on WhatsApp for today's all-inclusive price.`;

function link(title: string, path: string, note?: string) {
  return `- [${title}](${BASE}${path})${note ? `: ${note}` : ""}`;
}

function faqBlock(faqs: { q: string; a: string }[]) {
  return faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");
}

function stateLinks() {
  return getAllStates()
    .map((s) => link(`AIS 140 VLTD in ${s.name}`, `/vltd/${s.slug}`, hasMiningIntegration(s) ? "includes state mining portal" : undefined))
    .join("\n");
}

export function buildLlmsTxt(): string {
  return `# NViQ Bharat

> AIS 140 VLTD GPS tracker fitment with Vahan 4.0 certificate in about 1 hour, fleet GPS tracking, mining-portal approved trackers, and RTO services for commercial vehicles across India.

${ABOUT}

## Contact
${CONTACT}

## Main pages
${link("Home", "/", "overview of services")}
${link("AIS 140 VLTD fitment", "/vltd", "device, doorstep fitment, Vahan and mining-portal certificate")}
${link("GPS tracking for fleets", "/gps-tracking")}
${link("RTO services", "/rto-services")}
${link("RTO Partner Program", "/rto-partner", "wholesale prices for RTO agents and consultants")}
${link("Truck passing in Rajasthan", "/truck-passing/rajasthan")}
${link("Truck fleet GPS", "/trucks")}
${link("All answers (FAQ)", "/faq", "every question we answer, in one page")}
${link("About", "/about")}
${link("Contact", "/contact")}
${link("Hindi pages", "/hi")}

## By vehicle type
${SEGMENTS.map((s) => link(s.h1, `/gps-tracking/${s.slug}`, s.needsVltdNote)).join("\n")}

## RTO work
${RTO_SERVICES.map((s) => link(s.name, `/rto-services/${s.slug}`, s.vltdNote)).join("\n")}

## Free tools
${TOOLS.map((t) => link(t.name, t.href, t.text)).join("\n")}

## Optional
${link("Full text of every answer", "/llms-full.txt")}
${link("Sitemap", "/sitemap.xml")}
`;
}

export function buildLlmsFullTxt(): string {
  return `# NViQ Bharat: full reference

> Every question NViQ answers about AIS 140 VLTD, GPS tracking, Vahan certificates, mining portals and RTO work in India. Source: ${BASE}

${ABOUT}

## Contact
${CONTACT}

## General questions
${faqBlock(HOME_FAQS)}

${SEGMENTS.map(
  (s) => `## ${s.name} (${BASE}/gps-tracking/${s.slug})
${s.intro}

Is VLTD needed? ${s.needsVltdNote}

${s.features.map((f) => `- ${f.title}: ${f.text}`).join("\n")}

${faqBlock(s.faqs)}`,
).join("\n\n")}

${RTO_SERVICES.map(
  (s) => `## ${s.name} (${BASE}/rto-services/${s.slug})
${s.intro}

VLTD: ${s.vltdNote}

Who needs it: ${s.whoNeeds.join(", ")}

Documents: ${s.documents.join("; ")}

Steps:
${s.steps.map((step, i) => `${i + 1}. ${step}`).join("\n")}

${faqBlock(s.faqs)}`,
).join("\n\n")}

## States served
${stateLinks()}
`;
}
