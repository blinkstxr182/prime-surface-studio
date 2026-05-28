import React from "react";
import { Shield, Award, Star, Wrench, CheckCircle, Zap, Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "Lifetime Warranty Available" },
  { icon: CheckCircle, label: "3M, Avery, XPEL & KPMF Certified Installer" },
  { icon: Star, label: "5-Star Rated on Google" },
  { icon: Wrench, label: "1,000+ Vehicles Wrapped" },
  { icon: Sparkles, label: "Design + Install Under One Roof" },
  { icon: Zap, label: "Premium Cast Films Only" },
];

export function TrustStrip() {
  return (
    <section className="bg-[#F5F5F5] border-y border-black/5 py-5 relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

      <Marquee speed={45}>
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-black/60 shrink-0">
            <Icon className="w-4 h-4 text-[#C6F73C]" />
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
