"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
  highlightClassName?: string;
}

// Splits text into words and reveals each sequentially with a slight upward
// motion + blur clear. SSR-safe: always renders the same DOM structure;
// reduced-motion just skips the animation by setting variants to undefined.
export function AnimatedHeading({
  text,
  className = "",
  delay = 0,
  highlight,
  highlightClassName = "text-[#C6F73C]",
}: AnimatedHeadingProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  // SSR-safe: always initial="hidden" so server + client agree on opacity:0/y:24.
  // Reduced-motion shrinks duration to 0 — visible state is reached instantly.
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: shouldReduce ? 0 : 0.07, delayChildren: shouldReduce ? 0 : delay }}
      style={{ display: "inline" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {highlight && w === highlight ? (
            <span className={highlightClassName}>{w}</span>
          ) : (
            w
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}
