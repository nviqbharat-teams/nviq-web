import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiServiceView } from "@/components/hi/hi-views";
import { getPriorityStates } from "@/components/landing/landing-shared";
import { RTO_SERVICES, getRtoService } from "@/data/rto-services";
import { RTO_SERVICES_HI } from "@/data/hi/rto-services-hi";
import { stateHi } from "@/data/hi/places-hi";
import { getStateBySlug } from "@/data/vltd-india";
import { hasHindiState, hiAlternates } from "@/lib/hreflang";

type Props = { params: Promise<{ service: string; state: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return RTO_SERVICES.flatMap((s) => getPriorityStates().map((st) => ({ service: s.slug, state: st.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const svc = getRtoService(p.service);
  const state = getStateBySlug(p.state);
  if (!svc || !state) return {};
  const t = RTO_SERVICES_HI[svc.slug];
  const st = stateHi(state.slug, state.name);
  const title = `${st} में ${t.name}${svc.vltdNeeded ? " | VLTD के साथ" : ""}`;
  const description = `${st} में ट्रक, बस और टैक्सी के लिए ${t.short}: ज़रूरी कागज़, प्रक्रिया${svc.vltdNeeded ? ", AIS 140 VLTD फिटिंग" : ""} और ${st} के सभी RTO में मदद। सही खर्च के लिए गाड़ी नंबर WhatsApp करें।`;
  return { title, description, alternates: hiAlternates(`/rto-services/${svc.slug}/${state.slug}`), openGraph: { title, description, locale: "hi_IN", type: "website" } };
}

export default async function Page({ params }: Props) {
  const p = await params;
  const svc = getRtoService(p.service);
  const state = getStateBySlug(p.state);
  if (!svc || !state || !hasHindiState(state.slug)) notFound();
  return <HiServiceView svc={svc} state={state} />;
}
