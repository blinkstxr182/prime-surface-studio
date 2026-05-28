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
    <section className="bg-white py-24 border-y border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
        <FadeUp>
          <p className="text-black/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Free Consultation &amp; Quote
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-5 leading-tight">
            {headline}
          </h2>
          <p
            className="text-black/60 text-lg mb-10 max-w-2xl mx-auto"
            style={{ textTransform: "none" }}
          >
            {subtext}
          </p>
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
