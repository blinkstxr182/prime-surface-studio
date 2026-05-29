"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Back-to-top floating button. Appears once the user has scrolled past
// ~600px (so it stays out of the way near the top), fades in/out smoothly,
// and smooth-scrolls to the top on click. Positioned to sit above the
// mobile floating CTA bar so the two don't overlap.
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setVisible(window.scrollY > 600);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={cn(
        // Position: bottom-right. On mobile, sits above the floating CTA
        // bar (lg:hidden) which is ~56px + safe-area-inset-bottom.
        "fixed right-4 sm:right-6 lg:right-8 z-40",
        "bottom-[calc(env(safe-area-inset-bottom)+72px)] lg:bottom-8",
        // Style: lime circle, dark icon, soft shadow
        "w-12 h-12 rounded-full bg-[#C6F73C] text-[#0A0A0A] shadow-lg",
        "flex items-center justify-center",
        "hover:bg-[#9BD127] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F73C] focus-visible:ring-offset-2",
        // Visibility — fade + slide in from below
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
