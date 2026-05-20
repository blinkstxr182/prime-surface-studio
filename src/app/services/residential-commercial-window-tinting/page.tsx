import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "residential-commercial-window-tinting")!;
const pageUrl = `${siteConfig.url}/services/residential-commercial-window-tinting`;

export const metadata: Metadata = generatePageMetadata({
  title: "Home & Commercial Window Tinting Montclair CA | UV & Heat Film",
  description:
    "Professional residential & commercial window tinting in Montclair, CA. Reduce heat, block UV, cut energy bills. 3M & SunTek films. Free quote (562) 733-9672.",
  path: "/services/residential-commercial-window-tinting",
});

export default function ResidentialCommercialTintingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Residential & Commercial Window Tinting", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Residential & Commercial Window Tinting", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="residential-commercial-window-tinting"
        introCopy={
          <>
            <p>
              Your home or business is one of your most important investments — and the sun doesn&apos;t take a day off in Montclair. The Inland Empire&apos;s intense heat and year-round sunshine can fade your furniture, spike your energy bills, and make rooms uncomfortably hot despite running your AC at full blast. Professional residential and commercial window tinting from Prime Surface Studio provides a smart, permanent solution that starts paying dividends the moment it&apos;s installed.
            </p>
            <p>
              We install premium solar control, privacy, security, and decorative window films for homes, apartment complexes, office buildings, retail storefronts, warehouses, and healthcare facilities throughout Montclair, Ontario, Upland, Claremont, Rancho Cucamonga, and the wider Inland Empire. Our films reject up to 79% of solar heat gain while maintaining clear, natural views — you keep the light without the burn.
            </p>
            <p>
              The UV protection offered by professional window film is remarkable: 99%+ of UVA and UVB rays blocked. This isn&apos;t just about comfort — it&apos;s about preserving your flooring, furniture, artwork, and merchandise from sun damage that accumulates silently over years. For retail and commercial clients, it also means your product displays won&apos;t fade under intense storefront sun.
            </p>
            <p>
              Our commercial window film clients across the Inland Empire consistently report meaningful energy savings — often 10–30% on cooling costs — in the first full season. For large commercial facilities and multi-story office buildings, that translates to thousands of dollars annually. The film typically pays for itself in 2–4 years and keeps delivering value for 10–15+ years thereafter.
            </p>
            <p>
              Beyond solar control, we also install security film (which holds shattered glass in place and deters smash-and-grab break-ins), decorative frosted and pattern films for privacy or aesthetic enhancement, and anti-graffiti films that protect glass from etching vandalism. If it&apos;s a glass surface, we have a film solution for it.
            </p>
          </>
        }
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Commercial window tinting office building Inland Empire" },
          { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", alt: "Residential home window film Montclair CA UV protection" },
          { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Storefront commercial window tint Ontario CA" },
        ]}
      />
    </>
  );
}
