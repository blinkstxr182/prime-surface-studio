"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-black/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            Everything Your Vehicle &amp; Brand Needs
          </h2>
          <p
            className="text-black/60 text-base sm:text-lg"
            style={{ textTransform: "none" }}
          >
            From luxury vehicle wraps and food truck branding to UTV liveries and full brand identities —
            precision installed and designed in Montclair, CA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <Link
                href={service.slug}
                className="group block h-full bg-white overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Prime Surface Studio Montclair CA`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3 transition-colors duration-200 group-hover:text-[#9BD127]">
                    {service.title}
                  </h3>
                  <p
                    className="text-black/60 text-sm leading-relaxed mb-5"
                    style={{ textTransform: "none" }}
                  >
                    {service.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] tracking-[0.15em] uppercase border-b-2 border-[#C6F73C] pb-1 transition-all duration-200 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
