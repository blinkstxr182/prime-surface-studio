"use client";
import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

// 3D tilt effect that follows the cursor. A soft lime glare follows the cursor
// across the surface for an extra touch of polish. Reduced-motion users get a
// static card with no transforms.
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    const ry = (cx - 0.5) * maxTilt * 2;
    const rx = -(cy - 0.5) * maxTilt * 2;
    setTilt({ rx, ry });
    setGlarePos({ x: cx * 100, y: cy * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && hovering && !shouldReduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-60 transition-opacity"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(198,247,60,0.18) 0%, rgba(198,247,60,0.05) 25%, transparent 60%)`,
            mixBlendMode: "screen",
          }}
        />
      )}
    </motion.div>
  );
}
