import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40",
          "focus:outline-none focus:border-[#C6F73C] focus:ring-1 focus:ring-[#C6F73C]",
          "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          "transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
