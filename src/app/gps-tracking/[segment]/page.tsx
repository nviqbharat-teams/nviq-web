import { Metadata } from "next";
import { enAlternates, hasHindiState } from "@/lib/hreflang";
import { notFound } from "next/navigation";
import SegmentView, { segmentUrl } from "@/components/landing/segment-view";
import { BASE_URL } from "@/components/landing/landing-shared";
import { SEGMENTS, getSegment } from "@/data/segments";

type Props = { params: Promise<{ segment: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ segment: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seg = getSegment((await params).segment);
  if (!seg) return {};
  const url = `${BASE_URL}${segmentUrl(seg.slug)}`;
  return {
    title: seg.searchTitle,
    description: seg.metaDescription,
    keywords: seg.keywords,
    alternates: enAlternates(segmentUrl(seg.slug)),
    openGraph: { title: seg.searchTitle, description: seg.metaDescription, url, siteName: "NViQ", locale: "en_IN", type: "website" },
  };
}

export default async function SegmentPage({ params }: Props) {
  const seg = getSegment((await params).segment);
  if (!seg) notFound();
  return <SegmentView seg={seg} />;
}
