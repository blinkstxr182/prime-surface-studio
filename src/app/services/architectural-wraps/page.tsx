import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "architectural-wraps")!;
const pageUrl = `${siteConfig.url}/services/architectural-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "Architectural Wraps & Surface Film Inland Empire | DI-NOC Installer",
  description:
    "Transform offices, elevators & commercial spaces with architectural wraps in the Inland Empire. 3M DI-NOC certified installer. Free quote (562) 733-9672.",
  path: "/services/architectural-wraps",
});

export default function ArchitecturalWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Architectural Wraps & Surface Films", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Architectural Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="architectural-wraps"
        introCopy={
          <>
            <p>
              Not every renovation requires demolition, construction crews, and months of disruption. Architectural wraps — also known as surface films or DI-NOC wraps — allow businesses, property managers, and building owners throughout the Inland Empire to dramatically refresh interior and exterior surfaces at a fraction of the cost and time of traditional renovation.
            </p>
            <p>
              At Prime Surface Studio, we install premium architectural surface films from 3M DI-NOC, Avery Dennison, and other leading brands across commercial, retail, hospitality, healthcare, and multifamily residential properties in Montclair, Ontario, Claremont, Rancho Cucamonga, and the wider San Bernardino and Los Angeles counties. Whether you need to refresh a tired elevator cab, brand a reception area, transform a feature wall, or update outdated furniture, our architectural wrap solutions deliver stunning results.
            </p>
            <p>
              The range of available textures and finishes is extraordinary: natural wood grains in dozens of species and tones, marble and stone patterns, brushed and polished metals, leather, fabric, concrete, and solid colors. Modern architectural films are virtually indistinguishable from the real materials they replicate — guests and visitors are consistently amazed to learn that a &quot;marble&quot; reception desk is actually wrapped MDF, or that &quot;brushed stainless&quot; elevator doors are the original metal underneath a DI-NOC film.
            </p>
            <p>
              For businesses in leased spaces, architectural wraps are transformative: you can completely refresh your space to reflect your brand without making permanent modifications that would violate your lease agreement. When it&apos;s time to move, the film removes cleanly and completely, leaving the original surface intact. This is a game-changing advantage for fast-growing companies who need a polished space now but expect to upsize later.
            </p>
            <p>
              We work on projects of all scales — from a single branded accent wall to a complete multi-floor commercial refresh. Our architectural wrap specialists will assess your space, recommend the appropriate films, and execute the installation with minimal disruption to your business operations. Contact us for a free site consultation and estimate.
            </p>
          </>
        }
        galleryImages={[
          { src: "/images/services/architectural-wraps/gallery-1.jpg", alt: "Architectural wrap office interior surface film Inland Empire" },
          { src: "/images/services/architectural-wraps/gallery-2.jpg", alt: "DI-NOC elevator wrap commercial building Montclair CA" },
          { src: "/images/services/architectural-wraps/gallery-3.jpg", alt: "Feature wall architectural film texture surface wrap" },
        ]}
      />
    </>
  );
}
