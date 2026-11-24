// Real customer case studies → /case-studies/[slug], plus "nearby success stories"
// on matching RTO (/vltd/...) and vehicle-type (/gps-tracking/...) pages.
//
// ⚠️ Add ONLY real jobs, with the customer's permission. No made-up numbers,
// names or quotes: Google and buyers both punish fake reviews. While this list is
// empty, /case-studies shows a "share your story" page and is kept out of the sitemap.
//
// How to add one (copy, fill in, and remove nothing required):
// {
//   slug: "alwar-school-40-buses-2-days",          // url: /case-studies/<slug>
//   title: "40 school buses VLTD-certified in Alwar in 2 days",
//   customer: "St. Example School, Alwar",            // or "A school in Alwar" if they want anonymity
//   segment: "school-bus",                            // slug from src/data/segments.ts
//   stateSlug: "rajasthan",
//   city: "Alwar",
//   rtoCode: "RJ-02",
//   vehicles: 40,
//   date: "2026-11-10",                               // YYYY-MM-DD, when the job was done
//   problem: "Fitness for all 40 buses was due in one week and none had AIS 140 VLTD.",
//   solution: "Two technicians fitted all buses on a Saturday and Sunday at the school depot; certificates were updated on Vahan the same day.",
//   result: "All 40 buses passed fitness on Monday. Parents now get a live bus link on WhatsApp.",
//   timeToCertificate: "Same day",
//   quote: { text: "Real quote from the customer, in their words.", by: "Transport In-charge" }, // optional
//   photo: "/case-studies/alwar-school.jpg",          // optional, put the file in /public/case-studies/
// },

export interface CaseStudy {
  slug: string;
  title: string;
  customer: string;
  segment: string;
  stateSlug: string;
  city: string;
  rtoCode?: string;
  vehicles: number;
  date: string;
  problem: string;
  solution: string;
  result: string;
  timeToCertificate?: string;
  quote?: { text: string; by: string };
  photo?: string;
}

export const CASE_STUDIES: CaseStudy[] = [];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/** Best matches for a page: same RTO > same state + segment > same state > same segment. */
export function relatedCaseStudies(opts: { stateSlug?: string; segment?: string; rtoCode?: string }, limit = 3): CaseStudy[] {
  const score = (c: CaseStudy) =>
    (opts.rtoCode && c.rtoCode === opts.rtoCode ? 8 : 0) +
    (opts.stateSlug && c.stateSlug === opts.stateSlug ? 4 : 0) +
    (opts.segment && c.segment === opts.segment ? 2 : 0);
  return CASE_STUDIES.map((c) => ({ c, s: score(c) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || b.c.date.localeCompare(a.c.date))
    .slice(0, limit)
    .map((x) => x.c);
}
