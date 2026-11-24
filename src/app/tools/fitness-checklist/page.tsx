import { Metadata } from "next";
import ToolPage, { toolStates } from "@/components/tools/tool-page";
import { FitnessChecklistTool } from "@/components/tools/vltd-tools";
import { BASE_URL } from "@/components/landing/landing-shared";

const path = "/tools/fitness-checklist";
const title = "Vehicle Fitness Certificate Document Checklist (Free Tool)";
const description =
  "Free fitness certificate checklist for trucks, buses, school buses, taxis and tankers: RC, insurance, PUC, tax, permit, AIS 140 VLTD, speed governor, reflective tape. Tick what you have, share on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["fitness certificate documents", "commercial vehicle fitness checklist", "fitness renewal documents", "school bus fitness documents"],
  alternates: { canonical: `${BASE_URL}${path}` },
  openGraph: { title, description, url: `${BASE_URL}${path}`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const faqs = [
  {
    q: "What documents are needed for fitness renewal?",
    a: "Usually RC, valid insurance, PUC, road tax paid, permit (for permit vehicles), and for buses, taxis and national-permit goods vehicles an AIS 140 VLTD fitment certificate. Speed limiter and reflective tape certificates are also checked for transport vehicles.",
  },
  {
    q: "Why does fitness get rejected on Vahan?",
    a: "The most common reasons are pending tax or challans, expired insurance or PUC, and a missing or inactive VLTD for vehicles that need one.",
  },
];

export default function Page() {
  return (
    <ToolPage
      path={path}
      name="Fitness Checklist"
      h1="Fitness certificate checklist for your vehicle"
      intro="Choose your vehicle and state to get the full list of documents and fittings checked at fitness. Tick what you have, then share the list or let us sort out what is pending."
      faqs={faqs}
    >
      <FitnessChecklistTool states={toolStates()} defaultState="rajasthan" />
    </ToolPage>
  );
}
