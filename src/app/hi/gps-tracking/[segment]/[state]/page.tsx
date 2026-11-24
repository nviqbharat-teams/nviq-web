import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiSegmentView } from "@/components/hi/hi-views";
import { getPriorityStates } from "@/components/landing/landing-shared";
import { SEGMENTS, getSegment } from "@/data/segments";
import { SEGMENTS_HI } from "@/data/hi/segments-hi";
import { stateHi } from "@/data/hi/places-hi";
import { getStateBySlug } from "@/data/vltd-india";
import { hasHindiState, hiAlternates } from "@/lib/hreflang";

type Props = { params: Promise<{ segment: string; state: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return SEGMENTS.flatMap((s) => getPriorityStates().map((st) => ({ segment: s.slug, state: st.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const seg = getSegment(p.segment);
  const state = getStateBySlug(p.state);
  if (!seg || !state) return {};
  const t = SEGMENTS_HI[seg.slug];
  const st = stateHi(state.slug, state.name);
  const title = `${st} में ${t.name} के लिए GPS और AIS 140 VLTD`;
  const description = `${st} में ${t.name}: पैनिक बटन वाला AIS 140 VLTD, लाइव GPS ट्रैकिंग और लगभग 1 घंटे में Vahan सर्टिफिकेट, ${st} के सभी RTO में। आज के रेट के लिए कॉल या WhatsApp करें।`;
  return { title, description, alternates: hiAlternates(`/gps-tracking/${seg.slug}/${state.slug}`), openGraph: { title, description, locale: "hi_IN", type: "website" } };
}

export default async function Page({ params }: Props) {
  const p = await params;
  const seg = getSegment(p.segment);
  const state = getStateBySlug(p.state);
  if (!seg || !state || !hasHindiState(state.slug)) notFound();
  return <HiSegmentView seg={seg} state={state} />;
}
