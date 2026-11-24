import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiSegmentView } from "@/components/hi/hi-views";
import { SEGMENTS, getSegment } from "@/data/segments";
import { SEGMENTS_HI } from "@/data/hi/segments-hi";
import { hiAlternates } from "@/lib/hreflang";

type Props = { params: Promise<{ segment: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ segment: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seg = getSegment((await params).segment);
  if (!seg) return {};
  const t = SEGMENTS_HI[seg.slug];
  return { title: t.title, description: t.meta, alternates: hiAlternates(`/gps-tracking/${seg.slug}`), openGraph: { title: t.title, description: t.meta, locale: "hi_IN", type: "website" } };
}

export default async function Page({ params }: Props) {
  const seg = getSegment((await params).segment);
  if (!seg) notFound();
  return <HiSegmentView seg={seg} />;
}
