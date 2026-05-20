import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "fleet-wraps")!;
const pageUrl = `${siteConfig.url}/services/fleet-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "Fleet Wraps Inland Empire | Commercial Vehicle Branding Montclair CA",
  description:
    "Professional fleet wraps for businesses in the Inland Empire. Vans, trucks & company cars branded consistently. Volume pricing. Free quote (562) 733-9672.",
  path: "/services/fleet-wraps",
});

export default function FleetWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Fleet Vehicle Wraps & Commercial Branding", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Fleet Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="fleet-wraps"
        introCopy={
          <>
            <p>
              In the competitive business landscape of the Inland Empire, every touchpoint with a potential customer matters. Your fleet vehicles are rolling billboards that drive through your service area every single day — and a professionally wrapped fleet projects professionalism, legitimacy, and brand recognition that no other advertising medium can match at the cost-per-impression level.
            </p>
            <p>
              Prime Surface Studio is the Inland Empire&apos;s trusted partner for commercial fleet wrapping. We&apos;ve branded fleets for HVAC companies, plumbing and electrical contractors, landscaping businesses, delivery services, real estate agencies, and dozens of other industries across Montclair, Ontario, Rancho Cucamonga, Fontana, Chino, and throughout San Bernardino and Los Angeles counties.
            </p>
            <p>
              Studies show that a single wrapped vehicle generates between 30,000 and 70,000 visual impressions per day. Multiply that across your entire fleet and you have an advertising engine that runs every moment your vehicles are on the road — without a recurring monthly cost. Fleet wraps consistently deliver the lowest cost-per-impression of any advertising medium, outperforming billboards, social media ads, and print by a wide margin.
            </p>
            <p>
              Our fleet wrap process starts with understanding your brand guidelines, color palette, and business messaging. We then create a design that adapts consistently across every vehicle in your fleet — whether it&apos;s a Sprinter van, a pickup truck, a step van, or a sedan. Every vehicle gets the same careful installation treatment, and we coordinate scheduling to minimize downtime for your operations.
            </p>
            <p>
              Volume pricing is available for fleets of 3 or more vehicles. We work with business owners and fleet managers to create a wrap program that delivers maximum brand impact within your budget. Contact our fleet wrap specialists today for a free consultation and volume quote.
            </p>
          </>
        }
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80", alt: "Commercial fleet wrap van branding Inland Empire" },
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Business vehicle wrap Rancho Cucamonga" },
          { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Fleet graphics commercial truck wrap Ontario CA" },
        ]}
      />
    </>
  );
}
