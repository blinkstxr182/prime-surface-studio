"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-500",
        // The outer wrapper extends into the iOS safe area at the bottom so
        // the white background fills the home-indicator strip rather than
        // leaving a visible gap below the buttons.
        "bg-white/95 backdrop-blur-xl border-t border-black/10",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#0A0A0A] hover:bg-black/[0.03] transition-colors border-r border-black/10"
        >
          <Phone className="w-4 h-4 text-[#C6F73C]" />
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold bg-[#C6F73C] text-[#0A0A0A] hover:bg-[#9BD127] transition-colors"
        >
          <FileText className="w-4 h-4" />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
