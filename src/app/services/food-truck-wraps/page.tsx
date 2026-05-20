import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "food-truck-wraps")!;
const pageUrl = `${siteConfig.url}/services/food-truck-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "Food Truck Wraps Los Angeles & Inland Empire | Prime Surface Studio",
  description:
    "Custom food truck wraps in Los Angeles & Inland Empire. Bold, weather-resistant graphics that drive business. Avery & 3M vinyl. Free design consult (562) 733-9672.",
  path: "/services/food-truck-wraps",
});

export default function FoodTruckWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Food Truck Wraps & Custom Vehicle Graphics", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Food Truck Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="food-truck-wraps"
        introCopy={
          <>
            <p>
              Your food truck is more than a kitchen on wheels — it&apos;s a moving billboard that works for your business 24 hours a day, 7 days a week. Every block you drive, every parking spot you occupy, every event you attend is an advertising impression. A professionally designed and installed food truck wrap from Prime Surface Studio transforms your truck into an unforgettable brand statement that draws customers from across a parking lot.
            </p>
            <p>
              We specialize in custom food truck wraps for mobile food businesses throughout Los Angeles County, San Bernardino County, and the wider Inland Empire. From Montclair to Los Angeles, from Pomona to Long Beach, our food truck wrap clients consistently report more foot traffic, more social media engagement, and stronger brand recognition after a fresh wrap from our shop.
            </p>
            <p>
              The process starts with a design consultation where we review your brand identity, color palette, and vision for the truck. If you have design files, we work from them. If you need design help, our team can create a complete concept from scratch — logo, layout, typography, and all. We mock everything up digitally against your truck&apos;s exact template before a single inch of vinyl is cut, so you can approve the design with confidence.
            </p>
            <p>
              Installation is performed in our Montclair facility using commercial-grade cast vinyl and UV-resistant inks from Avery Dennison and 3M. We apply a laminate overcoat on all food truck wraps for maximum durability against weather, grease, steam, and daily washing. The result is a vivid, professional wrap that maintains its impact for years — not months.
            </p>
            <p>
              Whether you run a taco truck, a dessert van, a coffee trailer, or a gourmet burger bus — Prime Surface Studio has the expertise to make your mobile food business look as good as it tastes. Contact us today for a free food truck wrap consultation and quote.
            </p>
          </>
        }
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", alt: "Custom food truck wrap full color Inland Empire" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Food truck branding wrap Los Angeles" },
          { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Mobile food truck exterior wrap graphics" },
        ]}
      />
    </>
  );
}
