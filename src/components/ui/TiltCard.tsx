"use client";
import React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

// 3D tilt + glare effect disabled for the clean EVW aesthetic.
// Now a static wrapper so existing call sites keep working.
export function TiltCard({ children, className = "" }: TiltCardProps) {
  return <div className={className}>{children}</div>;
}
