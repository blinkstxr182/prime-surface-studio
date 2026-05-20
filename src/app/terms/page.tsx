import React from "react";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { FadeUp } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service | Prime Surface Studio",
  description: "Terms of service for Prime Surface Studio vehicle wrap, UTV wrap, and brand design services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="py-20 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp>
          <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm mb-10">Last updated: January 1, 2025</p>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white">1. Services</h2>
              <p>
                Prime Surface Studio provides vehicle wrapping (including luxury and exotic vehicles), fleet graphics, food truck wraps, UTV and side-by-side wraps, architectural surface wrapping, and branding and graphic design services. All services are subject to scheduling availability and pre-installation vehicle/surface assessment.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">2. Quotes &amp; Pricing</h2>
              <p>
                All quotes are valid for 30 days from the date of issuance. Final pricing may vary if the vehicle or property condition differs materially from information provided at quoting. We will notify you of any changes before beginning work.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">3. Deposits &amp; Payment</h2>
              <p>
                A deposit may be required to schedule wrap and larger film installation appointments. Deposits are non-refundable if the appointment is cancelled within 48 hours of the scheduled time. Final payment is due upon completion of service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">4. Warranties</h2>
              <p>
                Warranty terms vary by product and service type. Vinyl wrap installations carry a 2–5 year installation warranty in addition to applicable manufacturer material warranties. Luxury and premium wrap installations may qualify for extended warranty options. UTV and off-road wrap warranties exclude damage from impact, abrasion, and conditions outside normal vehicle use. Design deliverables carry no expressed warranty beyond delivery acceptance. Warranties apply to normal use and do not cover damage from accidents, improper care, or unauthorized modification.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
              <p>
                Prime Surface Studio&apos;s liability is limited to the cost of the service performed. We are not responsible for pre-existing conditions, paint defects revealed during wrap removal, or indirect or consequential damages. We carry appropriate business liability insurance.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">6. California Law &amp; Compliance</h2>
              <p>
                Clients are responsible for understanding and complying with applicable laws and regulations relevant to their wrap or design project, including local vehicle code, off-road vehicle registration and identification requirements, and intellectual property in design briefs. These terms are governed by the laws of the State of California.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white">7. Contact</h2>
              <p>
                {siteConfig.name} | {siteConfig.address.full} |{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-[#C6F73C] hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
            </section>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
