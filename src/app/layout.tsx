import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LeadModalProvider } from "@/context/lead-modal-context";

export const metadata: Metadata = {
  title: "NViQ - Fleet Tracking Platform",
  description: "Modern fleet tracking tools for your business. Track vehicles in real time with the simplest dashboard built for transport operators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <LeadModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LeadModalProvider>
      </body>
    </html>
  );
}
