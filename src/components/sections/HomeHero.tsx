"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { AnimatedHeading } from "@/components/ui/AnimatedText";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  // Defer scroll-tied animations until after hydration so SSR and client agree
  // on the initial markup. Until mounted, MotionValues are not bound to style.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const parallaxEnabled = mounted && !shouldReduce;

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={parallaxEnabled ? { y: bgY } : undefined}
      >
        <Image
          src="/images/hero-home.jpg"
          alt="Luxury car with premium ceramic window tint and vinyl wrap in Montclair CA"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]/90" />
      </motion.div>

      {/* Animated lime blobs */}
      <AnimatedBackground />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-20 text-center lg:text-left z-10"
        style={parallaxEnabled ? { y: contentY, opacity } : undefined}
      >
        <div className="max-w-5xl">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6F73C]/30 bg-[#C6F73C]/10 text-[#C6F73C] text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <motion.span
              animate={shouldReduce ? undefined : { rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-flex"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
            </motion.span>
            Montclair&apos;s #1 Rated Tint &amp; Wrap Studio
          </motion.div>

          {/* H1 — word-by-word reveal */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tight">
            <AnimatedHeading text="Premium Window Tinting" />
            <br />
            <AnimatedHeading
              text="& Vehicle Wraps"
              delay={0.3}
              className="text-[#C6F73C]"
            />
            <br />
            <AnimatedHeading text="in Montclair, CA" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Precision-installed ceramic window tint, full car wraps, fleet graphics, and architectural film using only premium brands —{" "}
            <span className="text-white font-semibold">XPEL, 3M, and Avery Dennison.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <MagneticButton>
              <Link href="/quote">
                <Button variant="primary" size="lg">
                  Get a Free Quote{" "}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5" /> Call {siteConfig.contact.phoneDisplay}
                </Button>
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap items-center gap-4 mt-8 justify-center lg:justify-start text-sm text-white/50"
          >
            {["Free Consultation", "Same-Day Appointments", "Lifetime Warranty"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.15 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-[#C6F73C]" /> {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={shouldReduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.span
            animate={shouldReduce ? undefined : { y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#C6F73C] rounded-full"
          />
        </motion.div>
        <ChevronDown className="w-4 h-4 text-white/30" />
      </motion.div>
    </section>
  );
}
