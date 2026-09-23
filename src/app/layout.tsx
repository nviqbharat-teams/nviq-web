import type { Metadata } from "next";
import Script from "next/script";
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
import { IsAppProvider } from "@/context/is-app-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://naviqbharat.com"),
  title: {
    default: "NViQ | AIS 140 VLTD & Mines GPS Tracker Platform India",
    template: "%s | NViQ",
  },
  description:
    "Government-approved AIS 140 VLTD devices and Mines GPS tracking platform in India. Whitelisted for Vahan 4.0, Rajasthan DMG, MP Khanij, Gujarat i-Khanij & Haryana e-Ravanna. Guaranteed 1-hour passing certificate, doorstep fitment, and wholesale RTO consultant partner network.",
  keywords: [
    "AIS 140 VLTD GPS",
    "Mines VLTD GPS tracker",
    "Khanij portal GPS fitment",
    "Rajasthan DMG approved GPS",
    "MP Khanij approved VLTD",
    "Gujarat i-Khanij GPS",
    "Haryana e-Ravanna GPS",
    "Vahan 4.0 fitness passing GPS certificate",
    "RTO consultant VLTD dealer",
    "Fleet GPS tracking India",
    "Commercial vehicle tracking system",
    "Dumper tipper GPS tracker",
  ],
  authors: [{ name: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED" }],
  creator: "NViQ Bharat",
  publisher: "NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED",
  openGraph: {
    title: "NViQ | AIS 140 VLTD & Mines GPS Tracker Platform India",
    description:
      "Govt-approved AIS 140 VLTD GPS trackers with panic buttons. Instant 1-hour Vahan 4.0 & State Mining Portal certificate upload. Doorstep fitment across Rajasthan, MP, Gujarat, Haryana & Pan-India.",
    url: "https://naviqbharat.com",
    siteName: "NViQ Bharat",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "NViQ AIS 140 VLTD & Fleet GPS Tracking",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NViQ | AIS 140 VLTD & Mines GPS Tracker Platform India",
    description:
      "Govt-approved AIS 140 VLTD GPS trackers with panic buttons. 1-hour certificate sync on Vahan 4.0 and State Mining Portals.",
    images: ["/logo.jpeg"],
  },
  alternates: {
    canonical: "https://naviqbharat.com",
  },
  icons: {
    icon: "/logo.jpeg",
  },
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
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GRTHEYLXK1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GRTHEYLXK1');
          `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var isApp = params.get('isApp') || params.get('isapp');
                  if (isApp === 'true' || isApp === '1') {
                    sessionStorage.setItem('isApp', 'true');
                    document.documentElement.classList.add('is-app');
                  } else if (isApp === 'false' || isApp === '0') {
                    sessionStorage.removeItem('isApp');
                    document.documentElement.classList.remove('is-app');
                  } else if (sessionStorage.getItem('isApp') === 'true') {
                    document.documentElement.classList.add('is-app');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <IsAppProvider>
          <LeadModalProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LeadModalProvider>
        </IsAppProvider>
      </body>
    </html>
  );
}

