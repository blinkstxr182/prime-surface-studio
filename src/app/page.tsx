import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { InsideStudio } from "@/components/sections/InsideStudio";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Car Wraps, UTV Wraps & Brand Design in Montclair, CA | Prime Surface Studio",
  description:
    "Montclair's premier vehicle wrap, UTV / side-by-side wrap & brand identity studio. Vinyl wraps, luxury & exotic car wraps, fleet graphics, off-road UTV wraps, architectural film, and design services. Call (562) 733-9672 for a free quote.",
  alternates: { canonical: siteConfig.url },
};

const whyUs = [
  {
    title: "Precision Installation",
    description: "Factory-trained installers with meticulous attention to every edge, seam, and curve.",
    icon: "🎯",
  },
  {
    title: "Premium Materials Only",
    description: "XPEL, 3M, Avery Dennison, KPMF, Inozetek — we never use unbranded films.",
    icon: "🏆",
  },
  {
    title: "Design + Install Under One Roof",
    description: "Our in-house design team builds brand identities, vehicle livery, and wrap artwork — then we install it.",
    icon: "🎨",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Multi-year installation warranties on every project. We stand behind every wrap.",
    icon: "✅",
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", description: "Describe your project — we'll advise on the best materials and approach for your goals and budget." },
  { step: "02", title: "Design & Material Selection", description: "Choose from thousands of films and finishes. We help you visualize the result before we start." },
  { step: "03", title: "Expert Installation", description: "Our certified installers work with precision — every edge perfect, every bubble impossible." },
  { step: "04", title: "Final Inspection & Aftercare", description: "We inspect every inch before handoff and give you care instructions to maximize longevity." },
];

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "Custom car wrap installed in Montclair CA — Prime Surface Studio" },
  { src: "/images/gallery/2.jpg", alt: "Custom matte black vinyl car wrap near Rancho Cucamonga" },
  { src: "/images/gallery/3.jpg", alt: "Luxury vehicle wrap with premium XPEL Stealth film Inland Empire" },
  { src: "/images/gallery/4.jpg", alt: "Custom food truck wrap with full color graphics in Los Angeles" },
  { src: "/images/gallery/5.jpg", alt: "Fleet vehicle branding wrap for commercial vans in Inland Empire" },
  { src: "/images/gallery/6.jpg", alt: "Architectural DI-NOC surface wrap for office interior renovation" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <HomeHero />
      <HeroShowcase />
      <TrustStrip />
      <ServicesGrid />
      <InsideStudio />
      <FeaturedWork />

      {/* Why Choose Us — flat 4-up, EVW style */}
      <section className="py-24 lg:py-32 bg-white border-b border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] leading-tight">The Prime Surface Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {whyUs.map((item) => (
              <FadeUp key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#C6F73C] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed" style={{ textTransform: "none" }}>{item.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process — minimal numbered steps */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] border-b border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] leading-tight">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {processSteps.map((item) => (
              <FadeUp key={item.step}>
                <div className="text-6xl font-bold text-[#C6F73C] mb-3 leading-none font-display">{item.step}</div>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed" style={{ textTransform: "none" }}>{item.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — clean grid, no hover overlays */}
      <section className="py-24 lg:py-32 bg-white border-b border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight">Recent Projects</h2>
            <p className="text-black/60 text-base sm:text-lg" style={{ textTransform: "none" }}>
              Every project is a portfolio piece. A few recent installations from our Montclair shop.
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-square overflow-hidden group bg-[#F5F5F5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <TestimonialsSection />

      <FAQSection
        faqs={homeFaqs}
        title="Common Questions"
        subtitle="Everything you need to know about vehicle wraps, UTV wraps, and brand design in Montclair, CA."
      />

      <CTABanner />
      <ServiceAreaMap />
    </>
  );
}
