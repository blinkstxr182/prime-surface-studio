"use client";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin lime accent bar at the top of the page that fills as you scroll.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#C6F73C] z-[100] origin-left shadow-[0_0_12px_rgba(198,247,60,0.7)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
