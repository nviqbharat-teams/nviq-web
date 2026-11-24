import { Metadata } from "next";
import ToolPage from "@/components/tools/tool-page";
import VltdPricingCalculator from "@/components/vltd/vltd-pricing-calculator";
import { BASE_URL } from "@/components/landing/landing-shared";

const path = "/tools/vltd-price";
const title = "AIS 140 VLTD Price for Your Fleet | Unlock Today's Price";
const description =
  "Choose how many vehicles need AIS 140 VLTD and unlock today's all-inclusive price on WhatsApp: device, 2 panic buttons, installation, 1-year SIM and Vahan certificate. Fleet and RTO agent slabs.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["vltd price", "ais 140 gps price", "vltd device price", "panic button gps price", "vltd price for fleet"],
  alternates: { canonical: `${BASE_URL}${path}` },
  openGraph: { title, description, url: `${BASE_URL}${path}`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const faqs = [
  {
    q: "What is included in the VLTD price?",
    a: "One all-inclusive package: AIS 140 device, 2 emergency panic buttons, installation, 1-year SIM and data, and the fitment certificate updated on Vahan.",
  },
  {
    q: "Why is the price not shown directly?",
    a: "The price depends on how many vehicles you fit, your location and whether you are a fleet owner or an RTO agent. Choose your vehicle count and we send your exact price on WhatsApp within minutes.",
  },
];

export default function Page() {
  return (
    <ToolPage
      path={path}
      name="VLTD Price"
      h1="AIS 140 VLTD price for your fleet"
      intro="Pick how many vehicles you need to fit and who you are. Your exact all-inclusive price is sent on WhatsApp."
      faqs={faqs}
    >
      <VltdPricingCalculator locationName="India" stateSlug="india" miningPortalName="Vahan 4.0" />
    </ToolPage>
  );
}
