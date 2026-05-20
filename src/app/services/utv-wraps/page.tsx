import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "utv-wraps")!;
const pageUrl = `${siteConfig.url}/services/utv-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "UTV Wraps Montclair CA | Polaris RZR, Can-Am Maverick & Side-by-Side Wraps",
  description:
    "Custom UTV and side-by-side wraps in Montclair, CA. Polaris RZR, Can-Am Maverick X3, Yamaha YXZ, Honda Talon. Desert-tested cast vinyl & PPF. Free quote.",
  path: "/services/utv-wraps",
});

export default function UTVWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("UTV & Side-by-Side Wraps", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "UTV Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="utv-wraps"
        introCopy={
          <>
            <p>
              A factory UTV looks like every other unit on the trailer at Glamis. A wrapped one doesn&apos;t. Whether you ride a Polaris RZR, Can-Am Maverick X3, Yamaha YXZ, Honda Talon, or Kawasaki Teryx, a custom wrap is the single most effective way to make your machine yours — and Prime Surface Studio has wrapped enough side-by-sides to know exactly how to do it right for the punishment they take. Dunes, rocks, mud, dust, 110-degree sun. Our wraps are built for it.
            </p>
            <p>
              We work in the same premium cast films used on luxury automotive wraps — <strong>Avery Dennison Supreme, 3M 1080 / 2080, KPMF, Inozetek, Hexis, and Orafol</strong> — because UTV bodywork sees worse abuse than most cars and deserves materials that can handle it. For the front fascia, A-pillars, and high-impact panels, we strongly recommend layering <strong>XPEL Ultimate Plus PPF</strong> underneath your color wrap. PPF takes the rock strikes, the vinyl handles the look. It&apos;s the same protection strategy we use on six-figure exotics, applied to the body panels that actually face the worst trail debris.
            </p>
            <p>
              UTV body panels are unusual to wrap — lots of compound curves, removable bedsides and doors, intake vents, sponsor decal locations, and a body that&apos;s designed to come apart for service. Our process starts with full panel removal where appropriate so the vinyl wraps cleanly around every edge and the wrap survives the next time you yank the doors off for maintenance. We&apos;ve seen too many lazy installs done with the panels still on the cage — those wraps fail at the first edge after a hard day in the dunes. We don&apos;t cut corners.
            </p>
            <p>
              Whether you&apos;re building a desert chase rig, a race-ready Pro R, a family-fun Maverick X3 Max, or a hunting-camo Talon, our in-house design team can take your concept from rough sketch to print-ready livery. Sponsor logos, race numbers, club graphics, custom color schemes inspired by your favorite factory race team — we&apos;ve done all of it. Need help with the design itself? See our{" "}
              <a href="/services/branding-graphic-design" className="text-[#C6F73C] hover:underline">branding &amp; graphic design</a> service for full livery development.
            </p>
            <p>
              We serve UTV owners across Southern California: Montclair, the Inland Empire, Riverside, San Bernardino, Lucerne Valley, Apple Valley, Yucca Valley, and weekend warriors who tow out to Glamis (Imperial Sand Dunes), Johnson Valley, Ocotillo Wells, Pismo Beach Oceano Dunes, and the Mojave. Drop the machine at our Montclair shop with the panels accessible and we&apos;ll have your build looking unmistakable for the next ride. Call (562) 733-9672 or use the quote form with your make, model, year, and any livery references you&apos;ve been collecting.
            </p>
          </>
        }
        galleryImages={[
          { src: "/images/services/utv-wraps/gallery-1.jpg", alt: "Polaris RZR side-by-side with custom desert race wrap installed by Prime Surface Studio Montclair CA" },
          { src: "/images/services/utv-wraps/gallery-2.jpg", alt: "Can-Am Maverick X3 UTV with custom color-change wrap Inland Empire" },
          { src: "/images/services/utv-wraps/gallery-3.jpg", alt: "Side-by-side UTV with sponsor livery and race number wrap Southern California" },
        ]}
      />
    </>
  );
}
