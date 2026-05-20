import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  noIndex = false,
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = `${siteConfig.url}${image}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
