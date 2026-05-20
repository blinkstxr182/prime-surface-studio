"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { FadeUp } from "@/components/ui/motion";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-[#111] border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp className="text-center mb-16">
          <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">What Clients Say</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Trusted by the Inland Empire</h2>
        </FadeUp>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C6F73C] text-[#C6F73C]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/40 text-sm">{t.location}</p>
                <p className="text-[#C6F73C] text-xs tracking-wide uppercase mt-1">{t.service}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C6F73C]/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[#C6F73C] w-6" : "bg-white/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C6F73C]/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
