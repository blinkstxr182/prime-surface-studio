"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold text-sm tracking-wide uppercase overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F73C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#C6F73C] text-[#0A0A0A] hover:bg-[#9BD127] hover:shadow-[0_0_40px_rgba(198,247,60,0.5),0_0_15px_rgba(198,247,60,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        outline:
          "border border-[#C6F73C] text-[#C6F73C] bg-transparent hover:bg-[#C6F73C] hover:text-[#0A0A0A] hover:shadow-[0_0_30px_rgba(198,247,60,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ghost: "text-white/80 hover:text-white hover:bg-white/10",
        secondary:
          "bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        xl: "h-15 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  shimmer?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size, children, shimmer = true, ...props }, ref) => {
    const showShimmer = shimmer && (variant === "primary" || variant === "outline");
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shimmer sweep on hover for primary/outline */}
        {showShimmer && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
