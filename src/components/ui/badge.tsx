import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variant === "default" && "bg-white/10 text-white/80",
        variant === "accent" && "bg-[#C6F73C]/20 text-[#C6F73C] border border-[#C6F73C]/30",
        variant === "outline" && "border border-white/20 text-white/70",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
