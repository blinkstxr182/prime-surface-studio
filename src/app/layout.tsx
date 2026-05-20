import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Prime Surface Studio | Window Tinting & Car Wraps in Montclair, CA",
    template: "%s | Prime Surface Studio",
  },
  description:
    "Montclair's premier car wrap and window tinting shop. Ceramic tints, vinyl wraps, fleet graphics, and architectural film. Serving the Inland Empire. Call (562) 733-9672.",
  keywords: [
    "window tinting Montclair CA",
    "car wrap Montclair",
    "ceramic window tint Inland Empire",
    "vinyl wrap near me",
    "fleet wraps San Bernardino County",
    "residential window tinting",
    "commercial window film",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {},
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaId = process.env.NEXT_PUBLIC_GA_ID;
// Google Ads account ID (AW-XXXXXXXXXX). Env var overrides default.
const gAdsId = process.env.NEXT_PUBLIC_GADS_ID ?? "AW-18103141318";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={organizationSchema()} />
        {/* Google Tag Manager */}
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
        {/* Google gtag.js — loads once and configs every gtag ID below */}
        {(gAdsId || gaId) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gAdsId ?? gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${gAdsId ? `gtag('config', '${gAdsId}');` : ""}
                ${gaId ? `gtag('config', '${gaId}');` : ""}
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
        {/* GTM noscript */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ScrollProgress />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
