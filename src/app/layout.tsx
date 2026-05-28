import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Prime Surface Studio | Car Wraps, UTV Wraps & Brand Design in Montclair, CA",
    template: "%s | Prime Surface Studio",
  },
  description:
    "Montclair's premier vehicle wrap, UTV / side-by-side wrap, and brand identity studio. Vinyl wraps, luxury & exotic car wraps, fleet graphics, off-road UTV wraps, architectural film, and full graphic design. Serving the Inland Empire. Call (562) 733-9672.",
  keywords: [
    "car wrap Montclair CA",
    "luxury car wrap Inland Empire",
    "vinyl wrap near me",
    "UTV wrap Montclair",
    "Polaris RZR wrap Inland Empire",
    "Can-Am Maverick wrap Southern California",
    "side-by-side wrap Glamis",
    "food truck wrap Los Angeles",
    "fleet wraps San Bernardino County",
    "architectural film Montclair",
    "graphic design Montclair",
    "logo design Inland Empire",
    "vehicle livery design",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
      <body className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
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
