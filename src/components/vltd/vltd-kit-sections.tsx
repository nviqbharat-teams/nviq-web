// Kit-styled VLTD sections shared by /vltd and its state, city and RTO pages.
import Link from "next/link";
import { X } from "lucide-react";
import { getComplianceRows } from "@/components/vltd/vltd-compliance-table";
import { getAllStates } from "@/data/vltd-india";
import { Section, SectionHead, FactGrid, WhatsAppButton, ChipLinks } from "@/components/landing/kit";

/** NViQ vs generic GPS comparison table. */
export function VltdCompareSection({
  locationName,
  miningPortalName,
  hasMining = true,
  tone = "white",
}: {
  locationName: string;
  miningPortalName?: string;
  hasMining?: boolean;
  tone?: "white" | "grey";
}) {
  const rows = getComplianceRows(locationName, miningPortalName, hasMining);
  return (
    <Section tone={tone} labelledBy="compare-title">
      <SectionHead
        id="compare-title"
        title="Why a cheap tracker costs more"
        sub={
          hasMining
            ? "A non-whitelisted GPS can fail your fitness passing or halt your mining transit pass. Here is what changes with NViQ."
            : "A non-certified GPS can fail your fitness passing or permit renewal. Here is what changes with NViQ."
        }
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-[#18202E] text-sm">
              <th scope="col" className="py-4 pr-6 font-semibold text-slate-500">What matters</th>
              <th scope="col" className="bg-[#18202E] px-5 py-4 font-display text-lg font-semibold text-white">NViQ AIS 140 VLTD</th>
              <th scope="col" className="px-5 py-4 font-semibold text-slate-500">Generic market GPS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-[#D9DEE6] align-top">
                <th scope="row" className="py-4 pr-6 font-semibold">{r.feature}</th>
                <td className="bg-[#F2F4F7] px-5 py-4 font-medium text-[#0B5E35]">{r.nviq}</td>
                <td className="px-5 py-4 text-slate-500">
                  <span className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    {r.others}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Using an unwhitelisted device can lead to ₹10,000+ vehicle impound fines under the Motor Vehicles Act.
      </p>
    </Section>
  );
}

/** Navy band pitching the RTO partner programme. */
export function VltdPartnerSection({ locationName }: { locationName?: string }) {
  const where = locationName ? ` in ${locationName}` : "";
  return (
    <Section tone="dark" labelledBy="partner-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHead
            dark
            id="partner-title"
            title={`RTO consultant or agent${where}?`}
            sub="Stop losing passing jobs to slow certificates and out-of-stock devices. Get dealer rates and issue certificates from your phone."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rto-partner"
              className="flex h-14 items-center justify-center bg-[#1D5BD8] px-7 text-base font-bold text-white hover:bg-[#164BB5] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the RTO Partner Program
            </Link>
            <WhatsAppButton
              label="WhatsApp RTO desk"
              message={`Hi NViQ Team, I am an RTO Consultant${where} interested in partnering for VLTD fitments.`}
              track="vltd_partner_whatsapp"
            />
          </div>
        </div>
        <FactGrid
          facts={[
            { value: "Priority support", text: "Fast dispatch and a dedicated agency desk.", big: false },
            { value: "Issue from your phone", text: "Certificates generated once fitment and telemetry are verified.", big: false },
            { value: "Zero rejections", text: "Pre-mapped to Vahan 4.0, so fitness lanes accept it.", big: false },
            { value: "No bulk lock-in", text: "Order devices as jobs come in.", big: false },
          ]}
        />
      </div>
    </Section>
  );
}

/** Chip row of every VLTD state, current one highlighted. */
export function VltdStateChips({ currentStateSlug }: { currentStateSlug?: string }) {
  return (
    <ChipLinks
      items={getAllStates().map((s) => ({ href: `/vltd/${s.slug}`, name: s.name, current: s.slug === currentStateSlug }))}
    />
  );
}
