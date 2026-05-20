import React from "react";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { FadeUp } from "@/components/ui/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Free Quote | Car Wraps, UTV Wraps & Brand Design Montclair CA",
  description:
    "Get a free, no-obligation quote for vehicle wraps, UTV / side-by-side wraps, or brand design in Montclair, CA. Takes 2 minutes. Prime Surface Studio — (562) 733-9672.",
  path: "/quote",
});

const guarantees = [
  "Free consultation — no obligation",
  "Quote within 1 business day",
  "No hidden charges",
  "Multi-year wrap installation warranties",
];

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Get a Free Quote", url: `${siteConfig.url}/quote` },
        ])}
      />

      <section className="py-20 min-h-screen bg-[#0A0A0A]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — trust sidebar */}
            <FadeUp className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Free Quote</p>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Get Your Free, No-Obligation Quote
                </h1>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Tell us about your project and we&apos;ll send you a detailed, itemized quote within one business day. No pressure, no sales tactics — just honest pricing.
                </p>

                <div className="space-y-3 mb-8">
                  {guarantees.map((g) => (
                    <div key={g} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-[#C6F73C] shrink-0" />
                      <span className="text-sm">{g}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#111] rounded-xl border border-white/10 p-5">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-3">Prefer to call?</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-2xl font-black text-[#C6F73C] hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-white/40 text-xs mt-1">{siteConfig.hours.weekdays}</p>
                </div>

                <div className="mt-6 bg-[#111] rounded-xl border border-white/10 p-5">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Trusted Brands</p>
                  <div className="flex flex-wrap gap-2">
                    {["XPEL", "3M", "Avery Dennison", "KPMF", "Inozetek", "Hexis"].map((b) => (
                      <span key={b} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15} className="lg:col-span-3">
              <div className="bg-[#111] rounded-2xl border border-white/10 p-6 sm:p-8">
                <QuoteForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
