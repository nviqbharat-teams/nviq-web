import { Metadata } from "next";
import { enAlternates, hasHindiState } from "@/lib/hreflang";
import { notFound } from "next/navigation";
import SegmentView, { segmentUrl } from "@/components/landing/segment-view";
import { BASE_URL, getPriorityStates } from "@/components/landing/landing-shared";
import { SEGMENTS, getSegment } from "@/data/segments";
import { getStateBySlug } from "@/data/vltd-india";

type Props = { params: Promise<{ segment: string; state: string }> };

// Built for the main + focus states (RJ, UP, GJ, DL, HR, PB, BR); other states render on demand.
export const dynamicParams = true;
export const revalidate = 604800;

export function generateStaticParams() {
  return SEGMENTS.flatMap((seg) => getPriorityStates().map((st) => ({ segment: seg.slug, state: st.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const seg = getSegment(p.segment);
  const state = getStateBySlug(p.state);
  if (!seg || !state) return {};
  const title = `${seg.name} GPS & AIS 140 VLTD in ${state.name}`;
  const description = `${seg.name} in ${state.name}: AIS 140 VLTD with panic buttons, live GPS tracking and Vahan certificate in about 1 hour, across all ${state.name} RTOs. Call or WhatsApp for today's price.`;
  const url = `${BASE_URL}${segmentUrl(seg.slug, state.slug)}`;
  return {
    title,
    description,
    keywords: seg.keywords.map((k) => `${k} ${state.name}`),
    alternates: enAlternates(segmentUrl(seg.slug, state.slug), hasHindiState(state.slug)),
    openGraph: { title, description, url, siteName: "NViQ", locale: "en_IN", type: "website" },
  };
}

export default async function SegmentStatePage({ params }: Props) {
  const p = await params;
  const seg = getSegment(p.segment);
  const state = getStateBySlug(p.state);
  if (!seg || !state) notFound();
  return <SegmentView seg={seg} state={state} />;
}
