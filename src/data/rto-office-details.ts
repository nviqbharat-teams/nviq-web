// Public contact details of government RTO offices, shown on /rto-code/[code].
// Only add what you have checked (Parivahan / state transport site, or a phone
// call). Leave a field out rather than guess: a wrong address hurts both the
// visitor and our ranking. `checked` is the date the details were confirmed.

export interface RtoOfficeDetails {
  /** Area people search by, e.g. "Mandaveli" (falls back to the name in brackets). */
  locality?: string;
  address?: string;
  pincode?: string;
  phone?: string;
  email?: string;
  /** Free text, e.g. "Monday to Friday, 10 am to 5 pm" */
  timings?: string;
  /** Areas under this office, for "which RTO covers my area" searches. */
  jurisdiction?: string[];
  checked?: string;
  /** Where the details came from, kept for the team (not shown). */
  sources?: string[];
}

export const RTO_OFFICE_DETAILS: Record<string, RtoOfficeDetails> = {
  "TN-06": {
    locality: "Mandaveli",
    // House number differs between sources (No. 4 vs No. 42); street and pincode agree.
    address: "V.C. Garden 2nd Street, Mandaveli, Chennai",
    pincode: "600028",
    phone: "044-24610405",
    email: "rtotn06@nic.in",
    // Sources give 9 am or 10 am opening; shown as a range with "call to confirm".
    timings: "Working days, from 9–10 am to 5 pm. Call to confirm before you visit.",
    checked: "2026-11-24",
    sources: ["acko.com/rto/chennai", "godigit.com mandaveli-rto-office-tn-06", "rto.quruktimes.com tn06"],
  },
  "AS-04": {
    // Official Assam transport department listing of the District Transport Office.
    address: "District Transport Office, Rang Ghar Chari Ali, Sivasagar",
    pincode: "785640",
    phone: "03772-222137",
    timings: "Working days. Hours differ between sources, so call to confirm before you visit.",
    checked: "2026-11-24",
    sources: ["comtransport.assam.gov.in/node/92396", "godigit.com sivsagar", "acko.com/rto/assam/sivasagar"],
  },
  "UK-17": {
    // Address agrees across Acko, Groww, Ackodrive. Phone numbers conflict, so not shown.
    address: "Delhi Road, Nagender Vihar, Defence Colony, Roorkee",
    pincode: "247667",
    timings: "Working days, from 9:30–10 am to 5 pm or later. Call to confirm before you visit.",
    checked: "2026-11-24",
    sources: ["acko.com/rto/roorkee", "groww.in/rto/uttarakhand/roorkee", "ackodrive.com/rto/roorkee"],
  },
  "MP-08": {
    address: "Model Town Colony, Guna",
    pincode: "473001",
    phone: "07542-221905",
    timings: "Monday to Saturday, 10 am to 5 pm. Call to confirm before you visit.",
    checked: "2026-11-24",
    sources: ["auto.shriramfinance.in/rto-guna", "bajajfinserv.in rto-madhya-pradesh-guna", "spinny.com mp-08"],
  },
};

export function getRtoOfficeDetails(code: string): RtoOfficeDetails | undefined {
  return RTO_OFFICE_DETAILS[code];
}
