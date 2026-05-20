"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

// Continuous horizontal scroll. Duplicates children twice so the loop is
// seamless. Pauses on hover. SSR-safe: always renders the same DOM;
// reduced-motion just stops the animation.
export function Marquee({ children, speed = 40, className = "" }: MarqueeProps) {
  const shouldReduce = useReducedMotion();

  return (
    <div className={`relative flex overflow-hidden group ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
        animate={shouldReduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex shrink-0 items-center gap-12 pr-12"
        animate={shouldReduce ? undefined : { x: ["0%", "-100%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  );
}
