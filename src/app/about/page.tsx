import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "About Prime Surface Studio | Montclair's Wrap & Brand Design Experts",
  description:
    "Locally owned in Montclair, CA. Factory-trained wrap installers and in-house designers — the Inland Empire's trusted studio for vehicle wraps, UTV wraps, and brand identity.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To design and install flawless vehicle wraps, off-road UTV wraps, and brand identities that protect our clients' investments, elevate their visual presence, and reflect the pride they take in ownership.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description:
      "To be the Inland Empire's most trusted surface transformation studio — setting the standard for quality, transparency, and customer experience in the automotive and architectural space.",
  },
  {
    icon: Shield,
    title: "Our Values",
    description:
      "Integrity in every quote. Precision in every install. Accountability if anything isn't perfect. We treat every vehicle like it's our own and every client like family.",
  },
];

const certifications = [
  "3M Authorized Installer",
  "Avery Dennison Certified",
  "XPEL Authorized Dealer",
  "KPMF Certified Installer",
  "Inozetek Authorized Retailer",
  "PDAA Member",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      {/* Hero — light, text-driven (matches homepage) */}
      <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-24 border-b border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <FadeUp>
            <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0A0A0A] mb-6 leading-[0.95] tracking-tight">
              Built on Precision.<br />
              <span className="text-[#C6F73C]">Driven by Passion.</span>
            </h1>
            <p className="text-black/60 text-lg sm:text-xl max-w-2xl mx-auto" style={{ textTransform: "none" }}>
              Montclair&apos;s locally owned vehicle wrap, UTV wrap, and brand design studio — where craftsmanship meets obsession.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Hero photo strip — full-bleed below the text */}
      <section className="bg-white border-b border-black/5">
        <FadeUp>
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] overflow-hidden">
            <Image
              src="/images/about/hero.jpg"
              alt="Prime Surface Studio professional installers at work in Montclair CA"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </FadeUp>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/story.jpg"
                  alt="Prime Surface Studio team installing vinyl wrap at our Montclair CA shop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] mb-6">
                Montclair-Born. Inland Empire Proud.
              </h2>
              <div className="space-y-4 text-black/60 leading-relaxed">
                <p>
                  Prime Surface Studio was founded with a single obsession: doing the work right. Not fast, not cheap — right. We started as automotive enthusiasts who couldn&apos;t find a local shop that shared our standards, so we built one. From day one in Montclair, our approach has been factory-level precision on every installation.
                </p>
                <p>
                  Over the years, we expanded from automotive wraps into a full-spectrum surface and design studio — vehicle wraps, luxury and exotic car wraps, food truck and fleet branding, UTV and side-by-side wraps, architectural surface films, and full brand identity design. Each expansion came from clients asking us to bring our standard of work to new challenges. We always said yes.
                </p>
                <p>
                  Today, Prime Surface Studio serves clients across the Inland Empire and Southern California — from Montclair and Ontario to Rancho Cucamonga, Newport Beach, Lake Havasu, and beyond. Our team of factory-trained installers and in-house designers uses only premium materials from XPEL, 3M, Avery Dennison, KPMF, and Inozetek, and we back every job with warranties that prove our confidence in the work.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/quote">
                  <Button variant="primary" size="lg">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Values */}
      <section className="py-24 bg-[#F5F5F5] border-y border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-16">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A]">Mission, Vision &amp; Values</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-8 rounded-xl border border-black/10 bg-white h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-[#C6F73C]/10 border border-[#C6F73C]/30 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-[#C6F73C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">{v.title}</h3>
                  <p className="text-black/55 text-sm leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] mb-6">
                Standards Most Shops Don&apos;t Have
              </h2>
              <div className="space-y-4">
                {[
                  "Factory-trained, certified installers — not weekend warriors",
                  "Only premium film brands — XPEL, 3M, Avery Dennison, KPMF, Inozetek",
                  "Climate-controlled installation suite — no dust, no bubbles",
                  "Meticulous prep work — clean paint is the foundation of every great wrap",
                  "Design + install under one roof — no agency hand-offs",
                  "Transparent, itemized quotes — no surprise charges",
                  "Over 87 five-star Google reviews from verified Inland Empire clients",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C6F73C]/20 border border-[#C6F73C]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#C6F73C]" />
                    </div>
                    <p className="text-black/70 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/why-us.jpg"
                  alt="Precision vinyl wrap installation at Prime Surface Studio Montclair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F5F5F5] border-y border-black/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-12">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Certifications &amp; Partners</p>
            <h2 className="text-3xl font-black text-[#0A0A0A]">Industry-Certified. Brand-Trusted.</h2>
          </FadeUp>
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <StaggerItem key={cert}>
                <div className="px-6 py-3 rounded-full border border-black/10 bg-black/[0.03] text-black/60 text-sm font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C6F73C]" />
                  {cert}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
