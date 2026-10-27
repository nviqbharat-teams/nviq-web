import { Metadata } from "next";
import LiveView from "./live-view";

export const metadata: Metadata = {
  title: "Live Vehicle Location",
  description: "Track this vehicle live on the map — shared via NViQ. No app needed.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Live Vehicle Location | NViQ",
    description: "Tap to see this vehicle moving live on the map. No app needed.",
    images: [{ url: "/logo.jpeg", width: 800, height: 600, alt: "NViQ Live Location" }],
  },
};

export default async function LiveSharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <LiveView token={token} />;
}
