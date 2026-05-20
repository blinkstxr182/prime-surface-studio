"use client";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import React from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface FadeUpProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

// SSR-safe: always render with the "hidden" initial state so the server and client
// produce identical HTML. Reduced-motion preference shrinks duration to 0 so users
// who prefer no motion get the visible state instantly once the viewport check fires.
export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  as: Tag = "div",
  ...props
}: FadeUpProps) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      transition={{
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
      {...(props as object)}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={stagger}
      transition={{ staggerChildren: shouldReduce ? 0 : 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: shouldReduce ? 0 : 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
