import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/ui/motion";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTABanner({
  headline = "Ready to Transform Your Vehicle or Property?",
  subtext = "Get a free, no-obligation quote from Montclair's most trusted wrap and brand design studio.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/quote",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 border-y border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,247,60,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(198,247,60,0.03)_0%,transparent_50%,rgba(198,247,60,0.03)_100%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
        <FadeUp>
          <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Free Consultation & Quote
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref}>
              <Button variant="primary" size="lg">
                {primaryLabel}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phoneDisplay}
              </Button>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
