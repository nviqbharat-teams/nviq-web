import { Metadata } from "next";
import ToolPage, { toolStates } from "@/components/tools/tool-page";
import { VltdChecker } from "@/components/tools/vltd-tools";
import { BASE_URL } from "@/components/landing/landing-shared";

const path = "/tools/ais-140-checker";
const title = "Does My Vehicle Need AIS 140 VLTD? Free Checker";
const description =
  "Free AIS 140 VLTD checker: pick your vehicle type, state and permit to see if a VLTD with panic buttons is mandatory for fitness, permit and registration. Taxi, bus, school bus, truck, tanker, tipper.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["is vltd mandatory", "ais 140 mandatory for which vehicles", "vltd required for taxi", "gps mandatory for school bus", "rule 125h"],
  alternates: { canonical: `${BASE_URL}${path}` },
  openGraph: { title, description, url: `${BASE_URL}${path}`, siteName: "NViQ", locale: "en_IN", type: "website" },
};

const faqs = [
  {
    q: "Which vehicles need AIS 140 VLTD?",
    a: "Under CMVR Rule 125H, public service vehicles (buses, school buses, taxis, cabs, tourist vehicles) and national-permit goods vehicles need an AIS 140 VLTD with emergency panic buttons. Some states also require it for mining, sand and hazardous goods vehicles.",
  },
  {
    q: "Which vehicles are exempt from VLTD?",
    a: "Two-wheelers, three-wheelers (autos), e-rickshaws and vehicles that do not need a permit (such as private white-plate cars) are exempt from the AIS 140 VLTD rule.",
  },
  {
    q: "What happens if my vehicle has no VLTD?",
    a: "For vehicles that need it, Vahan will not let fitness, permit or registration work go ahead until an AIS 140 VLTD is fitted and active. Running without it can also lead to challans.",
  },
];

export default function Page() {
  return (
    <ToolPage
      path={path}
      name="AIS 140 Checker"
      h1="Does my vehicle need AIS 140 VLTD?"
      intro="Pick your vehicle, state and permit. You get a clear answer with the reason, based on CMVR Rule 125H and state mining rules."
      faqs={faqs}
    >
      <VltdChecker states={toolStates()} defaultState="rajasthan" />
    </ToolPage>
  );
}
