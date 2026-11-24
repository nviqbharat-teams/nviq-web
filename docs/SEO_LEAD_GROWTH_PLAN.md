# NViQ SEO Lead Growth Plan

Goal: grow inbound **quotes** (form/WhatsApp) and **calls** from organic search on naviqbharat.com.
Order = highest impact first. Do one step, ship it, measure it, then move on.

---

## Reality check (targets)

| Metric | Today | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Organic visits/day | measure (Step 1) | 1,500 | 5,000 | 15,000+ |
| Quotes/day (form + WhatsApp) | measure | 30 | 100 | 300+ |
| Inbound calls/day | measure | 20 | 60 | 150+ |

- 1,000 quotes/day needs about 30k visits/day at a 3% conversion rate. That's a 12-month or longer goal, and only if search demand exists. Check the demand in Search Console and Keyword Planner first.
- 5,000 calls/day takes about 30 full-time agents. Inbound volume at that level needs a call centre (IVR + multiple lines), not one number.
- 5,000 **outbound** dials/day takes about 25 callers × 200 dials, worked from `nviqbackend/reports/rto-leads/vltd_leads_all.csv` (about 12.9k leads). It runs in parallel with SEO; it isn't part of it.

---

## Current gaps (from the code)

1. Call and WhatsApp clicks are **not tracked**. GA4 records page views only, so you can't see which page produces calls.
2. 1,466 of the 1,624 sitemap URLs are `/rto-partner/*` (agent recruitment). Only **37** are `/vltd/*` buyer pages.
3. `src/data/vltd-locations.ts` covers about 30 RTOs, while `src/data/india-rto-master.ts` covers all of India. The buyer pages use the small dataset.
4. Inquiries store `sourcePage` but no `utm`/`referrer`/`landingPage`, so you can't separate organic leads from other sources.
5. One phone number handles everything, with no per-page tracking number.

---

## Step 1: Measurement (Week 1) · REQUIRED FIRST · ✅ BUILT (GA4 admin setup pending)

**Why:** without measurement, none of the later steps can be judged.

**Tasks**
- [x] Add `src/lib/track.ts` with `trackLead(type, label)`. It sends `gtag('event', type, {page_path, label})` and calls the existing `trackEvent()` in `src/lib/api.ts`.
- [x] Fire it on every `tel:` link (`call_click`), every `wa.me` link (`whatsapp_click`) and every form submit (`quote_submit`). Locations:
  `src/app/page.tsx`, `src/app/vltd/**/page.tsx`, `src/app/rto-partner/**/page.tsx`, `src/app/contact/contact-client.tsx`,
  `src/components/lead-modal.tsx`, `src/components/trucks/truck-quote-form.tsx`, `src/components/vltd/*`.
  Server pages: wrap links in a small client component `<TrackedLink>`.
- [x] In `submitInquiry()` and `submitRtoPartnerLead()`, also send `landingPage`, `referrer` and `utm_*`. Store the first-touch values in `localStorage` when the session starts.
- [x] Backend (`nviqbackend/modules/fleet/inquiry/inquiry.model.ts`, `partnerLead.model.ts`): add the `landingPage`, `referrer` and `utm` fields.
- [x] GA4: mark `call_click`, `whatsapp_click` and `quote_submit` as **Key events**. Link GA4 to Search Console.
- [x] Add a `ref` code to the WhatsApp prefill text, e.g. `...(ref: VLTD-RJ14)`, so each chat can be traced to a page.

**Done when:** a GA4 report shows calls, WhatsApp chats and quotes **per page per day**.

---

## Step 2: Buyer pages for every RTO (Weeks 2–4) · BIGGEST TRAFFIC LEVER · ✅ BUILT (Search Console submit pending)

**Why:** people who need a VLTD fitment search "AIS 140 GPS <city>/<RTO code>". Right now only about 30 RTOs have a page.

**Tasks**
- [x] Point `/vltd/[state]/[city]/[rto-code]` at `india-rto-master.ts` (it already powers the 1,466 rto-partner pages). Keep `vltd-locations.ts` as an override for the richer data on fitment centres you actually run.
- [x] Make each page **unique**, so Google doesn't treat the pages as thin duplicates:
  - RTO address, code and district, plus the nearest NViQ fitment point and its distance
  - State-specific rule: which vehicles need AIS-140 there, the deadline and the penalty
  - Price block (the reused `vltd-pricing-calculator`) and a "1-hour certificate" promise
  - 5 local FAQs, and `LocalBusiness` + `FAQPage` JSON-LD (`json-ld-schema.tsx`)
  - Above the fold: **Call**, **WhatsApp quote** and **Get price** buttons. Keep them sticky on mobile.
- [x] Update `src/app/sitemap.ts` to include every VLTD RTO page at priority 0.9. Lower `/rto-partner/*` to 0.5.
- [x] Internal links: home → states → cities → RTOs, and each RTO page → 6 nearby RTOs.
- [x] Submit the sitemap in Search Console. Use URL Inspection on the top 50 pages.

**Done when:** at least 1,000 `/vltd` pages are indexed (Search Console → Pages).

**Built:** `src/data/vltd-india.ts` merges rich data (RJ, MP, GJ, HR) with all 1,234 RTOs in `india-rto-master.ts`. The sitemap has 1,466 `/vltd` URLs, tiered RJ (main) → UP/GJ/DL/HR/PB/BR (focus) → rest. Main and focus states are pre-rendered; the rest render on first visit (ISR). States without a verified mining integration get Vahan-only copy (no e-Ravanna/DMG claims). RTO pages now include the price calculator (quote form) and 8 nearby-RTO links.
Still manual: submit the sitemap and run URL Inspection on the top 50 pages. Mining portals for UP, Punjab, Bihar etc. can go into `vltd-locations.ts` once they're confirmed.

---

## Step 3: Vehicle-type pages (Weeks 4–6) · ✅ BUILT

**Why:** buyers search by vehicle, e.g. "school bus GPS AIS 140", "taxi VLTD", "mining truck GPS".

**Tasks**
- [ ] Add a new route `/vltd/vehicle/[type]` for: `school-bus`, `taxi-cab`, `goods-truck`, `tanker`, `mining-dumper`, `ambulance`, `tourist-bus`, `e-rickshaw`.
- [ ] Add a `/vltd/vehicle/[type]/[state]` combo for the priority states listed in `sitemap.ts` (`RJ, GJ, MH, UP, MP, HR, PB` first).
- [ ] Each page covers the rule for that vehicle, documents needed, price, a case study and the CTA.

**Done when:** 8 type pages and about 150 type × state pages are live and indexed.

---


**Built (Step 3 + RTO work):**
- `/gps-tracking/[segment]` (+ `/[state]` for RJ, UP, GJ, DL, HR, PB, BR) covers 10 buyer types: taxi-cab, school-bus, college-bus, bus-operator, truck-transporter, vehicle-dealer, ambulance, tanker, staff-transport and mining-tipper. Content lives in `src/data/segments.ts`.
- `/rto-services/[service]` (+ `/[state]`) covers 10 RTO jobs: fitness certificate, national permit, tourist permit, taxi permit, bus permit, goods permit, new commercial registration, RC transfer, NOC and hypothecation removal. Content lives in `src/data/rto-services.ts`. Each page bundles VLTD where the RTO work needs it.
- Every page has a 2-field quick lead form (`src/components/quick-lead-form.tsx`) that saves the inquiry and opens WhatsApp.
- No prices anywhere: they're unlocked on WhatsApp or by phone. Sales number (calls + WhatsApp) is +91 92570 38711, set in `src/lib/contact.ts`.

---

## Step 4: Free tools (Weeks 5–8) · MOST VISITORS · ✅ BUILT (3 of 4)

**Why:** "does my vehicle need…" and "check…" searches get far more traffic than service searches. Every tool result should end with a quote CTA.

| Tool | Route | CTA after the result |
|---|---|---|
| AIS-140 requirement checker (state + vehicle type → yes/no + deadline) | `/tools/ais-140-checker` | "Get fitted today" |
| VLTD price calculator (move the existing component to its own page) | `/tools/vltd-price` | "Book at this price" |
| Fitness / permit renewal checklist generator | `/tools/fitness-checklist` | "We handle VLTD for fitness" |
| Penalty calculator (no VLTD) | `/tools/vltd-penalty` | "Avoid the penalty" |

- [ ] Every tool collects phone or WhatsApp **after** it shows its value ("Send this result to WhatsApp").
- [ ] Add `SoftwareApplication`/`HowTo` schema and link each tool from every VLTD page.

**Done when:** the tools reach 20% of organic sessions and 25% of quotes.

---


**Built:** `/tools` hub, `/tools/ais-140-checker` (vehicle + state + permit → required / depends / not required, rules in `src/data/vltd-rules.ts`), `/tools/fitness-checklist` (tick-list, WhatsApp share), and `/tools/vltd-price` (locked-price calculator). Each ends in the quick lead form. Linked from the navbar, footer, every RTO page and every buyer-type page.
The penalty calculator was skipped: there is no reliable official penalty figure specific to VLTD, and a made-up number would hurt trust.

---

## Step 5: Hindi pages (Weeks 6–9) · ✅ BUILT

**Why:** a large share of transporters and RTO agents search in Hindi, and there's less competition.

**Tasks**
- [ ] Add `/hi/vltd/...` mirrors for the top 300 RTOs, the vehicle-type pages and the tools.
- [ ] Use a native-quality translation (not raw machine output), plus `hreflang` `en-IN`/`hi-IN` in metadata.


**Built:** `/hi` hub, `/hi/vltd/...` for every RTO in RJ, UP, GJ, DL, HR, PB, BR (≈400 pages), `/hi/gps-tracking/[segment]` (+ state), `/hi/rto-services/[service]` (+ state). That's 561 Hindi URLs, all with `lang="hi"`, hreflang pairs with the English pages and a Hindi lead form. Copy is in `src/data/hi/`. Not translated yet: the free tools (they link to the English tools).

---

## Step 6: Google Business Profile + reviews (Ongoing from Week 2) · MOST CALLS · 📋 PLAYBOOK READY (manual)

**Why:** "near me" and "GPS fitment <city>" calls mostly come from the **Google Maps results**, not the website.

**Tasks**
- [ ] Create one GBP per real fitment location or partner centre (real addresses only, never virtual).
- [ ] Category: "GPS supplier" / "Vehicle inspection". Add photos, services and the price, linked to the matching `/vltd/...` page with `?utm_source=gbp`.
- [ ] Ask every installed customer for a review via a WhatsApp template (`nviqbackend/scripts/send-wa-template.ts`). Target 10 new reviews/week per location.
- [ ] Post weekly: installs done, rule updates.

**Done when:** you're in the top 3 map results for "AIS 140 GPS <city>" in your 20 main cities.


**Ready:** `docs/GBP_AND_BACKLINKS_PLAYBOOK.md` has profile rules, the review-request WhatsApp text (Hindi + English) and UTM website links for the top cities in each priority state.

---

## Step 7: Case studies + trust (Weeks 3–10) · ✅ BUILT (needs real stories)

**Tasks**
- [ ] Add a `/case-studies/[slug]` route. Publish **2 per week**, using real customers with their permission.
- [ ] Format: problem (deadline/penalty) → vehicles and city → time to certificate → cost → quote and photo.
- [ ] Examples: "40 school buses certified in Alwar in 2 days", "Mining fleet of 120 dumpers, Bhilwara".
- [ ] Show the 3 nearest case studies on every RTO page.


**Built:** `/case-studies` and `/case-studies/[slug]` are driven by `src/data/case-studies.ts` (empty: add real jobs only). Matching stories show up automatically on RTO and vehicle-type pages. The hub stays noindex until the first story is added.

---

## Step 8: Backlinks (Ongoing) · ✅ BADGE BUILT + 📋 PLAYBOOK

- [ ] Ask every RTO partner (the 119 partner files in `reports/rto-leads/partners_*`) to link to their city page from their website or GBP.
- [ ] Get listed on transport associations, school bus associations, truck unions and B2B directories (IndiaMART, Justdial, TradeIndia), linking to `/vltd`.
- [ ] Write 1 rule-update article per month (state notifications on AIS-140) for local news and transport blogs.


**Built:** `/partner-badge` lets partners pick their RTO and copy an embed badge that links to their exact RTO page (`utm_source=partner_badge`). Outreach messages and the listing checklist are in `docs/GBP_AND_BACKLINKS_PLAYBOOK.md`.

---

## Step 9: Conversion fixes (Weeks 2–4, quick wins) · ✅ BUILT (ops items pending)

- [x] Sticky bottom bar on mobile: **Call | WhatsApp | Get price** (`src/components/sticky-contact-bar.tsx`).
- [x] Lead modal: 2 fields only (phone + vehicle count). Ask for the rest on WhatsApp.
- [x] Instant WhatsApp reply to every web lead plus a sales alert (`nviqbackend/common/utils/leadWhatsapp.ts`). It switches on once Meta approves the `META_WA_LEAD_ACK_TEMPLATE` / `META_WA_SALES_ALERT_TEMPLATE` templates.
- [ ] Add a second answering number plus IVR when calls exceed 50/day. Route by state.
- [x] Page weight: RTO pages cut by about 50% (compact state/city grids). Lighthouse was not run here, so still run PageSpeed Insights on the live top 20 pages.

---

## Weekly review (every Monday, 30 min)

1. Search Console: clicks, impressions, indexed `/vltd` pages, top queries without a page → add pages.
2. GA4: quotes, calls and WhatsApp chats per page type. Find the bottom 10 pages by conversion and fix their CTA or content.
3. Backend: inquiries by `landingPage` / `utm_source`, and won vs. lost.
4. Ship the next step on the list.

---

## Execution order (summary)

| # | Step | Weeks | Impact |
|---|---|---|---|
| 1 | Measurement | 1 | Required |
| 2 | VLTD page for every RTO | 2–4 | Traffic ↑↑↑ |
| 9 | Conversion fixes | 2–4 | Quotes ↑↑ |
| 6 | Google Business Profile + reviews | 2+ | Calls ↑↑↑ |
| 3 | Vehicle-type pages | 4–6 | Traffic ↑↑ |
| 4 | Free tools | 5–8 | Traffic ↑↑↑ |
| 7 | Case studies | 3–10 | Conversion ↑ |
| 5 | Hindi pages | 6–9 | Traffic ↑↑ |
| 8 | Backlinks | ongoing | Ranking ↑↑ |
