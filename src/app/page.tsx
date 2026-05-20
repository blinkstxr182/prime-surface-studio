import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustStrip } from "@/components/sections/TrustStrip";
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
      <TrustStrip />
      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="py-24 bg-[#111] border-y border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">The Prime Surface Difference</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group relative text-center p-6 rounded-xl border border-white/10 bg-[#0A0A0A] h-full transition-all duration-500 hover:border-[#C6F73C]/40 hover:-translate-y-2 hover:bg-[#0d0d0d] cursor-default overflow-hidden">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6F73C]/0 via-transparent to-[#C6F73C]/0 group-hover:from-[#C6F73C]/5 group-hover:to-[#C6F73C]/10 transition-all duration-700 pointer-events-none" />
                  <div className="relative">
                    <div className="text-4xl mb-4 inline-block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-3 transition-colors group-hover:text-[#C6F73C]">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">Our Installation Process</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#C6F73C]/30 to-transparent" aria-hidden="true" />
            {processSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="group relative p-6 rounded-xl border border-white/10 bg-[#111] h-full transition-all duration-500 hover:border-[#C6F73C]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(198,247,60,0.1)] cursor-default">
                  <div className="text-5xl font-black text-[#C6F73C]/20 mb-4 leading-none transition-all duration-500 group-hover:text-[#C6F73C]/60 group-hover:scale-110 inline-block">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#111] border-y border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">Recent Projects</h2>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Every project is a portfolio piece. These are a few recent installations from our Montclair shop.
            </p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Dark overlay sliding up from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  {/* Caption that fades up */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-white text-xs sm:text-sm font-medium leading-snug">{img.alt}</p>
                  </div>
                  {/* Lime accent border on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#C6F73C]/40 transition-colors duration-300 pointer-events-none" />
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
