import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiRtoView, hiRtoCopy } from "@/components/hi/hi-views";
import { getPrebuiltRtoParams, getRtoByCode } from "@/data/vltd-india";
import { hasHindiState, hiAlternates } from "@/lib/hreflang";

type Props = { params: Promise<{ state: string; city: string; "rto-code": string }> };

// Hindi RTO pages: main + focus states (RJ, UP, GJ, DL, HR, PB, BR) only.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPrebuiltRtoParams().filter((p) => hasHindiState(p.state));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const m = getRtoByCode(p.state, p.city, p["rto-code"]);
  if (!m) return {};
  const c = hiRtoCopy(m.state, m.city, m.rto);
  const path = `/vltd/${m.state.slug}/${m.city.slug}/${m.rto.slug}`;
  return {
    title: c.title,
    description: c.description,
    alternates: hiAlternates(path),
    openGraph: { title: c.title, description: c.description, url: `https://www.naviqbharat.com/hi${path}`, siteName: "NViQ", locale: "hi_IN", type: "website" },
  };
}

export default async function Page({ params }: Props) {
  const p = await params;
  const m = getRtoByCode(p.state, p.city, p["rto-code"]);
  if (!m || !hasHindiState(m.state.slug)) notFound();
  return <HiRtoView state={m.state} city={m.city} rto={m.rto} />;
}
