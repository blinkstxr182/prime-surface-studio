"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Always autoplay — the video is a decorative ambient background loop,
  // not the kind of moving content the reduced-motion preference targets.
  // Chrome aggressively pauses muted background videos under battery saver
  // or strict autoplay policies, so we additionally listen for any user
  // interaction and kick play() then. Cleanup runs once play succeeds.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;

    let started = false;
    const tryPlay = () => {
      if (started) return;
      v.play()
        .then(() => {
          started = true;
          removeListeners();
        })
        .catch(() => {});
    };

    const removeListeners = () => {
      ["pointerdown", "touchstart", "keydown", "scroll"].forEach((evt) =>
        window.removeEventListener(evt, tryPlay)
      );
    };

    // Try immediately
    tryPlay();
    // Re-arm on any user interaction in case autoplay was blocked
    ["pointerdown", "touchstart", "keydown", "scroll"].forEach((evt) =>
      window.addEventListener(evt, tryPlay, { passive: true })
    );

    return removeListeners;
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Video background layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-home.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        {/* Dark gradient overlay so white text reads on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/55 to-[#0A0A0A]/85" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold tracking-[0.15em] uppercase mb-8 backdrop-blur-sm"
          >
            <Star className="w-3.5 h-3.5 fill-[#C6F73C] stroke-[#C6F73C]" />
            Montclair&apos;s #1 Rated Wrap &amp; Design Studio
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tight"
          >
            Your ride should reflect
            <br />
            <span className="text-[#C6F73C]">your unique style,</span>
            <br />
            not blend in.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ textTransform: "none" }}
          >
            Premium vehicle wraps, luxury &amp; exotic car wraps, UTV graphics, food truck branding,
            fleet livery, and full brand identity design — all under one roof in Montclair, CA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-[#0A0A0A]"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phoneDisplay}
              </Button>
            </a>
          </motion.div>

          {/* Trust micro-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 text-xs tracking-[0.15em] uppercase text-white/60 font-medium"
          >
            Licensed &amp; Insured · 1,000+ Vehicles Wrapped · XPEL · 3M · Avery · KPMF
          </motion.p>
        </div>
      </div>
    </section>
  );
}
