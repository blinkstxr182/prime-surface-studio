"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// A side-by-side text + photo collage block. Two photos stacked on the
// right side give visual richness; copy on the left tells the story.
export function InsideStudio() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-black/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Inside the Studio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight">
              A climate-controlled bay built for one thing — flawless work.
            </h2>
            <p
              className="text-black/60 text-base sm:text-lg leading-relaxed mb-8"
              style={{ textTransform: "none" }}
            >
              Our Montclair shop is purpose-built for wraps. Dust-controlled environment,
              heated curing zones, panel-off work stations, and a design team that lives
              and breathes vehicle livery. No corner-cutting, no compromises — just the
              standard most shops talk about but few actually run.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md">
              <div>
                <div className="text-3xl font-bold text-[#0A0A0A] font-display">8+</div>
                <p
                  className="text-xs text-black/50 mt-1 leading-tight"
                  style={{ textTransform: "none" }}
                >
                  Years in business
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A0A0A] font-display">1000+</div>
                <p
                  className="text-xs text-black/50 mt-1 leading-tight"
                  style={{ textTransform: "none" }}
                >
                  Vehicles wrapped
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A0A0A] font-display">87</div>
                <p
                  className="text-xs text-black/50 mt-1 leading-tight"
                  style={{ textTransform: "none" }}
                >
                  5-star reviews
                </p>
              </div>
            </div>

            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Photo collage side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F5F5]">
              <Image
                src="/images/about/story.jpg"
                alt="Prime Surface Studio team installing a vinyl wrap at the Montclair shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Floating accent photo overlapping bottom-left */}
            <div className="hidden md:block absolute -bottom-8 -left-8 lg:-left-12 w-1/2 aspect-[4/3] overflow-hidden bg-[#F5F5F5] border-8 border-white shadow-card-hover">
              <Image
                src="/images/about/why-us.jpg"
                alt="Precision wrap installation detail Prime Surface Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>

            {/* Lime accent block */}
            <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-[#C6F73C] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
