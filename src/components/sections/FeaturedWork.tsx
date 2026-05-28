"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCard {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    category: "Luxury Car Wrap",
    title: "Concierge service for exotic & high-end vehicles",
    description:
      "Climate-controlled bay, premium films only — XPEL Stealth, 3M 2080, KPMF. By private appointment.",
    image: "/images/services/luxury-car-wraps/gallery-1.jpg",
    href: "/services/luxury-car-wraps",
  },
  {
    category: "UTV & Side-by-Side",
    title: "Desert-tested wraps for RZR, Maverick & more",
    description:
      "Premium cast films with optional PPF for rock-strike protection. Built for Glamis, Johnson Valley, and your weekend rides.",
    image: "/images/services/utv-wraps/gallery-1.jpg",
    href: "/services/utv-wraps",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] border-b border-black/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] leading-tight">
            Premium installations, real results.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link href={feature.href} className="group block">
                {/* Photo — large, full-bleed within card */}
                <div className="relative aspect-[5/4] overflow-hidden bg-[#F5F5F5] mb-6">
                  <Image
                    src={feature.image}
                    alt={`${feature.category} — ${feature.title}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  {/* Category tag overlaid on bottom-left */}
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-xs font-bold tracking-[0.15em] uppercase text-[#0A0A0A]">
                    {feature.category}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0A0A0A] mb-3 leading-tight transition-colors duration-200 group-hover:text-[#9BD127]">
                  {feature.title}
                </h3>
                <p
                  className="text-black/60 text-base mb-5 leading-relaxed"
                  style={{ textTransform: "none" }}
                >
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[#0A0A0A] border-b-2 border-[#C6F73C] pb-1 transition-all duration-200 group-hover:gap-3">
                  See Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
