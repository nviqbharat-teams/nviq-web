import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiServiceView } from "@/components/hi/hi-views";
import { RTO_SERVICES, getRtoService } from "@/data/rto-services";
import { RTO_SERVICES_HI } from "@/data/hi/rto-services-hi";
import { hiAlternates } from "@/lib/hreflang";

type Props = { params: Promise<{ service: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return RTO_SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const svc = getRtoService((await params).service);
  if (!svc) return {};
  const t = RTO_SERVICES_HI[svc.slug];
  return { title: t.title, description: t.meta, alternates: hiAlternates(`/rto-services/${svc.slug}`), openGraph: { title: t.title, description: t.meta, locale: "hi_IN", type: "website" } };
}

export default async function Page({ params }: Props) {
  const svc = getRtoService((await params).service);
  if (!svc) notFound();
  return <HiServiceView svc={svc} />;
}
