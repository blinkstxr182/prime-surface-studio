"use client";
import React from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

// Magnetic-follows-cursor effect disabled for the clean EVW aesthetic.
// This is now a passthrough so existing call sites keep working.
export function MagneticButton({ children, className }: MagneticButtonProps) {
  return <div className={className} style={{ display: "inline-block" }}>{children}</div>;
}
