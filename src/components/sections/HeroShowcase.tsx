"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Full-bleed hero photo strip placed immediately under the hero text.
// EVW-style: lets the photography do the storytelling right out of the gate.
export function HeroShowcase() {
  return (
    <section className="relative bg-white border-b border-black/5">
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[21/9] sm:aspect-[16/6] overflow-hidden"
      >
        <Image
          src="/images/hero-home.jpg"
          alt="Featured Prime Surface Studio vehicle wrap project — premium installation Montclair CA"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Subtle bottom gradient for depth */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        {/* Floating caption */}
        <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-16 right-8 lg:right-16">
          <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-2 opacity-90">
            Featured Project
          </p>
          <h2 className="font-display text-white text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight max-w-3xl leading-[0.95]">
            Built for the precision-obsessed.
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
