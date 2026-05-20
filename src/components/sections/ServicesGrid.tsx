"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FadeUp } from "@/components/ui/motion";
import { services } from "@/content/services";

export function ServicesGrid() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 relative">
        <FadeUp className="text-center mb-16">
          <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Everything Your Vehicle &amp; Property Needs
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From luxury vehicle wraps and food truck branding to UTV liveries and full brand identities — precision installed and designed in Montclair, CA.
          </p>
        </FadeUp>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={service.slug} className="group block h-full">
                <TiltCard className="h-full rounded-xl border border-white/10 bg-[#111] overflow-hidden transition-colors duration-300 group-hover:border-[#C6F73C]/40">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Montclair CA — Prime Surface Studio`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                    {/* Lime corner accent */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#C6F73C] shadow-[0_0_12px_rgba(198,247,60,0.8)]" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6F73C] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[#C6F73C] text-sm font-semibold">
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C6F73C] group-hover:w-full transition-all duration-500" />
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
