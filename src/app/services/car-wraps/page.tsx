import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "car-wraps")!;
const pageUrl = `${siteConfig.url}/services/car-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "Car Wraps Montclair CA | Vinyl Wrap & Color Change Near Inland Empire",
  description:
    "Premium vinyl car wraps in Montclair, CA. Matte, gloss, satin, chrome & color-shift wraps. Avery Dennison & 3M films. Protects paint. Free quote (562) 733-9672.",
  path: "/services/car-wraps",
});

export default function CarWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Car Wraps & Vinyl Wrapping", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Car Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="car-wraps"
        introCopy={
          <>
            <p className="text-[#C6F73C]/90 border-l-2 border-[#C6F73C] pl-4 italic">
              Driving a Lamborghini, Ferrari, Porsche, McLaren, or other exotic? See our{" "}
              <Link href="/services/luxury-car-wraps" className="underline hover:text-[#C6F73C]">
                Luxury Car Wraps
              </Link>{" "}
              service for concierge-level installations.
            </p>
            <p>
              A vinyl car wrap is the smartest way to transform your vehicle in the Inland Empire without committing to a paint job. Whether you want a complete color change — from factory white to matte black, or gloss red to satin gunmetal — or you&apos;re looking to protect your paint with a clear bra, Prime Surface Studio delivers wrap results that rival factory finishes. Our Montclair shop has wrapped everything from daily drivers to supercars, and our work speaks for itself.
            </p>
            <p>
              We work exclusively with professional-grade cast vinyl films from Avery Dennison Supreme Wrapping Film, 3M 1080 Series, KPMF, Inozetek, and Hexis. These aren&apos;t the budget calendered films you&apos;ll find at discount shops — they&apos;re purpose-built wrapping films with the conformability to navigate complex compound curves, door handles, and mirror caps cleanly. The difference in quality is visible immediately and lasts for years.
            </p>
            <p>
              Our car wrap installations begin with a thorough decontamination wash and clay bar treatment — because a wrap is only as good as the surface beneath it. Our installers take their time, working panel by panel, heating and stretching the film around every edge and recess before heat-setting it permanently. We don&apos;t rush, and we don&apos;t hide mistakes under trim pieces.
            </p>
            <p>
              Beyond aesthetics, vinyl wraps provide genuine paint protection. Your factory paint is shielded from stone chips, UV fading, bird droppings, and minor abrasions for the life of the wrap. When removed by a professional, the paint underneath is often in better condition than areas that were exposed to the elements. This directly translates to higher resale value — a protected car is a more valuable car.
            </p>
            <p>
              We serve car wrap clients across Montclair, Ontario, Pomona, Chino, Rancho Cucamonga, and throughout San Bernardino and Los Angeles County. If you&apos;ve been searching for &quot;vinyl wrap near me&quot; or &quot;car wrap Inland Empire&quot; — you&apos;ve found your shop. Come visit us at 5505 Moreno St, Suite 105 B, Montclair, CA or call (562) 733-9672 to schedule your free consultation.
            </p>
          </>
        }
        galleryImages={[
          { src: "/images/services/car-wraps/gallery-1.jpg", alt: "Custom vinyl car wrap color change Montclair CA — Prime Surface Studio" },
          { src: "/images/services/car-wraps/gallery-2.jpg", alt: "Matte black full car wrap project Inland Empire" },
          { src: "/images/services/car-wraps/gallery-3.jpg", alt: "Paint protection film PPF installation Montclair CA" },
        ]}
      />
    </>
  );
}
