import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "branding-graphic-design")!;
const pageUrl = `${siteConfig.url}/services/branding-graphic-design`;

export const metadata: Metadata = generatePageMetadata({
  title: "Branding & Graphic Design Montclair CA | Logos, Vehicle Livery & Brand Identity",
  description:
    "Logo design, brand identity, vehicle livery, and print design in Montclair, CA. Design + install under one roof. Food truck branding, fleet identity, and custom wrap design.",
  path: "/services/branding-graphic-design",
});

export default function BrandingGraphicDesignPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Branding & Graphic Design", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Branding & Graphic Design", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="branding-graphic-design"
        introCopy={
          <>
            <p>
              Most wrap shops install pre-existing files. Most design agencies don&apos;t understand how a wrap actually gets printed and applied. Prime Surface Studio does both — and that single fact is why our design work doesn&apos;t just look great on a screen, it looks great on the vehicle, building, or UTV it ends up wrapped onto. We design for the medium, not just for the presentation deck.
            </p>
            <p>
              Our branding & graphic design service spans the full spectrum of identity work: <strong>logo design</strong> with full mark variants and usage guidelines; <strong>brand identity systems</strong> including color palettes, typography, voice, and asset libraries; <strong>vehicle wrap and livery design</strong> built print-ready for installation; <strong>food truck branding</strong> packages that bundle identity, wrap design, menu boards, and social kits; <strong>fleet identity systems</strong> scaled across vans, trucks, and company cars; <strong>UTV liveries and race graphics</strong> for desert and off-road teams; <strong>signage and storefront design</strong>; and <strong>print collateral</strong> from business cards to packaging.
            </p>
            <p>
              We work the way good agencies work: a discovery call to understand brand goals, audience, and competitive landscape; concept development with moodboards and sketches; two to three rounds of revisions baked into every package; and final delivery with print-ready files, fully editable source files (Adobe Illustrator, Photoshop, PDF), and a brand guidelines document for full identity projects. You own the final assets outright on delivery.
            </p>
            <p>
              The advantage of working with us specifically is that you can <strong>design and install under one roof</strong>. If you&apos;re a food truck operator launching a new business, we&apos;ll build your brand identity, design the wrap, then wrap the truck — one team, one timeline, no handoffs between an agency and a print shop and a wrap installer. If you&apos;re a fleet operator rebranding 12 vehicles, we&apos;ll design the new livery system and execute the phased rollout. If you&apos;re a luxury car owner wanting a one-of-one paint-match design, we&apos;ll create the artwork and install it in our climate-controlled bay.
            </p>
            <p>
              <strong>Need it wrapped too?</strong> See our wrap services — we design then install on{" "}
              <Link href="/services/car-wraps" className="text-[#C6F73C] hover:underline">car wraps</Link>,{" "}
              <Link href="/services/food-truck-wraps" className="text-[#C6F73C] hover:underline">food truck wraps</Link>,{" "}
              <Link href="/services/fleet-wraps" className="text-[#C6F73C] hover:underline">fleet wraps</Link>,{" "}
              <Link href="/services/utv-wraps" className="text-[#C6F73C] hover:underline">UTV wraps</Link>, and{" "}
              <Link href="/services/architectural-wraps" className="text-[#C6F73C] hover:underline">architectural installations</Link>.
            </p>
            <p>
              We serve clients across Montclair, the Inland Empire, Los Angeles, Orange County, and remote clients nationwide for design-only work. Branding packages start at $800 — full identity systems and wrap design projects are custom quoted based on scope. Use the quote form or call (562) 733-9672 to start a project. <ArrowRight className="inline w-4 h-4 align-middle" />
            </p>
          </>
        }
        galleryImages={[
          { src: "/images/services/branding-graphic-design/gallery-1.webp", alt: "Logo design and brand identity portfolio by Prime Surface Studio Montclair CA" },
          { src: "/images/services/branding-graphic-design/gallery-2.webp", alt: "Vehicle wrap design and food truck branding artwork Inland Empire" },
          { src: "/images/services/branding-graphic-design/gallery-3.webp", alt: "Print collateral and brand guidelines design Montclair CA" },
        ]}
      />
    </>
  );
}
