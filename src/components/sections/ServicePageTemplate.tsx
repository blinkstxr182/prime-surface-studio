import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  serviceId: string;
  introCopy: React.ReactNode;
  galleryImages?: { src: string; alt: string }[];
}

export function ServicePageTemplate({ serviceId, introCopy, galleryImages }: ServicePageProps) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;

  const related = services.filter((s) => service.relatedServices.includes(s.id));

  const defaultGallery = [
    { src: service.image, alt: `${service.title} example — Prime Surface Studio Montclair CA` },
    { src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80", alt: "Professional installation detail" },
    { src: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=800&q=80", alt: "Finished result closeup" },
  ];

  const gallery = galleryImages ?? defaultGallery;

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.heroKeyword} — Prime Surface Studio`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/60 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(198,247,60,0.08)_0%,transparent_60%)]" />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
              <span>/</span>
              <span className="text-[#C6F73C]">{service.title}</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C6F73C]/30 bg-[#C6F73C]/10 text-[#C6F73C] text-xs font-semibold tracking-widest uppercase mb-5">
              Starting at {service.startingPrice}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
              {service.heroKeyword}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button variant="primary" size="lg">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5" /> {siteConfig.contact.phoneDisplay}
                </Button>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Intro copy */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp>
            <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed space-y-5">
              {introCopy}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-12">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Why It Matters</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Key Benefits</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-[#0A0A0A]">
                  <CheckCircle className="w-5 h-5 text-[#C6F73C] shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm leading-relaxed">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Options & Finishes */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-12">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Types &amp; Options</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.options.map((opt) => (
              <StaggerItem key={opt.name}>
                <div className="p-6 rounded-xl border border-white/10 bg-[#111] hover:border-[#C6F73C]/30 transition-colors h-full">
                  <h3 className="text-lg font-bold text-white mb-2">{opt.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{opt.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-[#111] border-y border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <FadeUp>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Materials We Use</p>
            <div className="flex flex-wrap justify-center gap-4">
              {service.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-semibold"
                >
                  {brand}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <FadeUp className="text-center mb-12">
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Recent {service.title} Projects</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-video sm:aspect-square rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-300" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing guidance */}
      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <FadeUp>
            <div className="w-14 h-14 rounded-full bg-[#C6F73C]/10 border border-[#C6F73C]/30 flex items-center justify-center mx-auto mb-5">
              <DollarSign className="w-7 h-7 text-[#C6F73C]" />
            </div>
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              {service.title} Starting at <span className="text-[#C6F73C]">{service.startingPrice}</span>
            </h2>
            <p className="text-white/60 text-lg mb-6 max-w-2xl mx-auto">
              Every project is unique. Pricing depends on vehicle size, material choice, and project complexity. Get a detailed, itemized quote — free, no obligation.
            </p>
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        faqs={service.faqs}
        title={`${service.title} — FAQ`}
        subtitle={`Common questions about ${service.title.toLowerCase()} in Montclair, CA.`}
      />

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-20 bg-[#111] border-t border-white/5">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
            <FadeUp className="text-center mb-10">
              <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Also Available</p>
              <h2 className="text-3xl font-black text-white">Related Services</h2>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rs) => (
                <StaggerItem key={rs.id}>
                  <Link href={rs.slug} className="group block">
                    <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden transition-all duration-300 group-hover:border-[#C6F73C]/30 group-hover:-translate-y-1">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={rs.image}
                          alt={`${rs.title} in Montclair CA`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-white group-hover:text-[#C6F73C] transition-colors mb-1">{rs.title}</h3>
                        <p className="text-white/40 text-sm flex items-center gap-1">
                          Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </p>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
