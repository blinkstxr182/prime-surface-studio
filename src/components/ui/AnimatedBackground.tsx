"use client";
import { motion, useReducedMotion } from "framer-motion";

// Floating lime-tinted blobs that drift in the background for depth.
// SSR-safe: always renders the same DOM structure; reduced-motion just
// turns the animation off via `animate={undefined}` so the blobs stay static.
export function AnimatedBackground() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute top-[10%] -left-32 w-96 h-96 rounded-full bg-[#C6F73C]/10 blur-[120px]"
        animate={shouldReduce ? undefined : {
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] -right-32 w-[28rem] h-[28rem] rounded-full bg-[#C6F73C]/8 blur-[140px]"
        animate={shouldReduce ? undefined : {
          x: [0, -60, 0],
          y: [0, -90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[40%] w-80 h-80 rounded-full bg-[#9BD127]/6 blur-[100px]"
        animate={shouldReduce ? undefined : {
          x: [0, 50, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
