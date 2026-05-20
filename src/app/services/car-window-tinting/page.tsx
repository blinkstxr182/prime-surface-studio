import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const service = services.find((s) => s.id === "car-window-tinting")!;
const pageUrl = `${siteConfig.url}/services/car-window-tinting`;

export const metadata: Metadata = generatePageMetadata({
  title: "Ceramic Window Tint Montclair CA | Car Tinting Inland Empire",
  description:
    "Professional ceramic car window tinting in Montclair, CA. XPEL, 3M & Llumar films. Blocks UV, reduces heat, California-legal. Call (562) 733-9672 — same-day available.",
  path: "/services/car-window-tinting",
});

export default function CarWindowTintingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Automotive Window Tinting", service.description, pageUrl)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: `${siteConfig.url}/services` },
        { name: "Automotive Window Tinting", url: pageUrl },
      ])} />
      <ServicePageTemplate
        serviceId="car-window-tinting"
        introCopy={
          <>
            <p>
              If you drive in the Inland Empire, you already know what summer feels like behind the wheel. Temperatures regularly climb past 100°F in Montclair, Ontario, and Rancho Cucamonga — and a car without quality window tint can feel like a greenhouse. At Prime Surface Studio, we install professional ceramic window tint that transforms your driving experience: dramatically cooler cabin temperatures, near-total UV protection, enhanced privacy, and reduced glare on those blinding Southern California afternoons.
            </p>
            <p>
              We use only premium films from trusted brands — XPEL Prime XR, 3M Ceramic IR Series, SunTek Carbon, and Llumar CTX — installed by certified technicians in our climate-controlled Montclair facility. Unlike bargain shops, we never cut corners on material quality or installation prep. Every window is meticulously cleaned, the film is precisely cut to your vehicle&apos;s exact template, and each panel is squeegeed to perfection before we call it done.
            </p>
            <p>
              California vehicle window tint law requires front side windows to allow at least 70% visible light transmission (VLT). Rear side windows and the rear window can be any darkness you choose. We always install California-compliant film on front windows and advise on the darkest legal option for your specific vehicle and intended use. Our installers know current San Bernardino County enforcement patterns and will never put you in a position to get a fix-it ticket.
            </p>
            <p>
              Whether you drive a commuter sedan, a luxury SUV, a lifted truck, or a Tesla — we&apos;ve tinted thousands of vehicles across the Inland Empire and every make and model gets the same obsessive attention to detail. Automotive tint at Prime Surface Studio comes with a lifetime warranty against bubbling, peeling, and color fade. We stand behind our work because we&apos;re proud of it.
            </p>
          </>
        }
        galleryImages={[
          { src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80", alt: "Tesla with ceramic window tint Montclair CA" },
          { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", alt: "Luxury SUV window tint Inland Empire" },
          { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", alt: "Car window tint closeup detail Prime Surface Studio" },
        ]}
      />
    </>
  );
}
