import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "luxury-car-wraps")!;
const pageUrl = `${siteConfig.url}/services/luxury-car-wraps`;

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury & Exotic Car Wraps Montclair CA | Lamborghini, Porsche, Tesla",
  description:
    "Concierge-level luxury car wrap service in Montclair, CA. XPEL Stealth, 3M 2080, KPMF & PPF for Lamborghini, Ferrari, Porsche, McLaren, Tesla, Rolls-Royce. By appointment.",
  path: "/services/luxury-car-wraps",
});

export default function LuxuryCarWrapsPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Luxury & Exotic Car Wraps", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Luxury Car Wraps", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="luxury-car-wraps"
        introCopy={
          <>
            <p>
              Wrapping a Lamborghini, Ferrari, Porsche, McLaren, or Rolls-Royce is not the same job as wrapping a daily driver — and it shouldn&apos;t be priced like one, scheduled like one, or installed like one. Prime Surface Studio operates a dedicated luxury division for clients whose vehicles deserve concierge-level treatment: climate-controlled installation bay, panel-off precision where appropriate, premium-tier films only, and strict discretion throughout the project.
            </p>
            <p>
              Every project begins with a private consultation — by appointment, at your convenience, often at our Montclair studio but mobile if the situation calls for it. We discuss your goals (full color change, satin transformation, PPF integration, paint-match livery), walk through finish samples in actual lighting conditions, and produce a detailed itemized quote. There&apos;s no pressure, no sales theater, and no guesswork.
            </p>
            <p>
              We work exclusively in premium cast film: <strong>XPEL Stealth</strong> for satin-finish self-healing PPF that transforms gloss paint into a stealth matte while protecting every painted surface; <strong>3M 2080 series</strong>, the same film 3M uses in its highest-tier wrapping programs; <strong>Avery Dennison Supreme Wrapping Film</strong>, the gold standard for color-change work; and specialty films from <strong>KPMF, Inozetek, Hexis, and Orafol</strong> for color-shift, brushed metallic, and chrome finishes that simply can&apos;t be replicated with lesser materials.
            </p>
            <p>
              Where the bodylines and panel breaks call for it, we perform panel-off installation — door handles, badges, mirror caps, and trim are removed so the vinyl wraps cleanly underneath rather than being trimmed around edges. This is the difference between a wrap that looks acceptable from ten feet away and one that is invisible at the edges, even under close inspection.
            </p>
            <p>
              Privacy and discretion are non-negotiable. We do not post project photos without explicit written permission. Many of our luxury clients prefer their vehicles to remain unphotographed, and we honor that absolutely. If you&apos;d like to see references or speak with prior clients, we can arrange that privately.
            </p>
            <p>
              We serve luxury and exotic vehicle owners across Montclair, the Inland Empire, Los Angeles, Orange County, Beverly Hills, Newport Beach, and Palm Desert. To schedule a private consultation, call (562) 733-9672 directly or use the quote form to request a confidential callback.
            </p>
          </>
        }
        galleryImages={[
          { src: "/images/services/luxury-car-wraps/gallery-1.jpg", alt: "Luxury exotic vehicle wrap installed by Prime Surface Studio in Montclair CA" },
          { src: "/images/services/luxury-car-wraps/gallery-2.jpg", alt: "Premium XPEL Stealth PPF satin finish luxury car wrap Inland Empire" },
          { src: "/images/services/luxury-car-wraps/gallery-3.jpg", alt: "Concierge luxury car wrap installation Montclair CA" },
        ]}
      />
    </>
  );
}
