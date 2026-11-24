import { Metadata } from "next";
import { enAlternates, hasHindiState } from "@/lib/hreflang";
import { notFound } from "next/navigation";
import RtoServiceView, { serviceUrl } from "@/components/landing/rto-service-view";
import { BASE_URL, getPriorityStates } from "@/components/landing/landing-shared";
import { RTO_SERVICES, getRtoService } from "@/data/rto-services";
import { getStateBySlug } from "@/data/vltd-india";

type Props = { params: Promise<{ service: string; state: string }> };

// Built for the main + focus states (RJ, UP, GJ, DL, HR, PB, BR); other states render on demand.
export const dynamicParams = true;
export const revalidate = 604800;

export function generateStaticParams() {
  return RTO_SERVICES.flatMap((svc) => getPriorityStates().map((st) => ({ service: svc.slug, state: st.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const svc = getRtoService(p.service);
  const state = getStateBySlug(p.state);
  if (!svc || !state) return {};
  const title = `${svc.name} in ${state.name}${svc.vltdNeeded ? " | With VLTD" : ""}`;
  const description = `${svc.short} in ${state.name} for trucks, buses and taxis: documents, steps and ${svc.vltdNeeded ? "AIS 140 VLTD fitment, " : ""}help at all ${state.name} RTOs. WhatsApp your vehicle number for the exact cost.`;
  const url = `${BASE_URL}${serviceUrl(svc.slug, state.slug)}`;
  return {
    title,
    description,
    keywords: [`${svc.short} ${state.name}`, `${svc.short} online ${state.name}`, `${state.name} RTO ${svc.short}`],
    alternates: enAlternates(serviceUrl(svc.slug, state.slug), hasHindiState(state.slug)),
    openGraph: { title, description, url, siteName: "NViQ", locale: "en_IN", type: "website" },
  };
}

export default async function RtoServiceStatePage({ params }: Props) {
  const p = await params;
  const svc = getRtoService(p.service);
  const state = getStateBySlug(p.state);
  if (!svc || !state) notFound();
  return <RtoServiceView svc={svc} state={state} />;
}
