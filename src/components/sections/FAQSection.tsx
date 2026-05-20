"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before you book.",
  className,
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={cn("py-20 bg-[#0A0A0A]", className)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp className="text-center mb-12">
          <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{title}</h2>
          <p className="text-white/50 text-lg">{subtitle}</p>
        </FadeUp>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="border border-white/10 rounded-lg overflow-hidden bg-[#111] hover:border-white/20 transition-colors">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-white text-sm sm:text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 text-[#C6F73C] transition-transform duration-300",
                      open === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    open === i ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
