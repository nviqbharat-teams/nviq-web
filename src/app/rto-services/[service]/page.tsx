import { Metadata } from "next";
import { enAlternates, hasHindiState } from "@/lib/hreflang";
import { notFound } from "next/navigation";
import RtoServiceView, { serviceUrl } from "@/components/landing/rto-service-view";
import { BASE_URL } from "@/components/landing/landing-shared";
import { RTO_SERVICES, getRtoService } from "@/data/rto-services";

type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return RTO_SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const svc = getRtoService((await params).service);
  if (!svc) return {};
  const url = `${BASE_URL}${serviceUrl(svc.slug)}`;
  return {
    title: svc.searchTitle,
    description: svc.metaDescription,
    keywords: [svc.short, `${svc.short} online`, `${svc.short} for commercial vehicle`, `${svc.short} RTO`],
    alternates: enAlternates(serviceUrl(svc.slug)),
    openGraph: { title: svc.searchTitle, description: svc.metaDescription, url, siteName: "NViQ", locale: "en_IN", type: "website" },
  };
}

export default async function RtoServicePage({ params }: Props) {
  const svc = getRtoService((await params).service);
  if (!svc) notFound();
  return <RtoServiceView svc={svc} />;
}
