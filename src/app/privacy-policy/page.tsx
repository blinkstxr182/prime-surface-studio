import React from "react";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { FadeUp } from "@/components/ui/motion";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Prime Surface Studio",
  description: "Prime Surface Studio privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp>
          <h1 className="text-4xl font-black text-[#0A0A0A] mb-3">Privacy Policy</h1>
          <p className="text-black/40 text-sm mb-10">Last updated: January 1, 2025</p>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-black/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">1. Information We Collect</h2>
              <p>
                When you contact us, request a quote, or use our website, we may collect: your name, email address, phone number, vehicle or property information you voluntarily provide, and standard usage data such as IP address, browser type, and pages visited.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Schedule and fulfill service appointments</li>
                <li>Send you appointment reminders and follow-ups</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">3. Cookies &amp; Analytics</h2>
              <p>
                We use cookies and similar technologies to understand how visitors use our website. This may include Google Analytics to measure website traffic. You may decline cookies through the cookie banner on this site. Essential cookies necessary for the site to function cannot be declined.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">4. Data Security</h2>
              <p>
                We use industry-standard security measures to protect your information, including SSL/TLS encryption for data in transit. No method of electronic transmission is 100% secure, but we take reasonable precautions to protect your personal data.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">5. Your Rights (CCPA)</h2>
              <p>
                California residents have the right to: know what personal data we have collected about you, request deletion of your data, and opt out of the sale of personal information (we do not sell personal information). To exercise these rights, contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C6F73C] hover:underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">6. Third-Party Services</h2>
              <p>
                Our website may use Google Analytics, Google Ads, and similar services. These services have their own privacy policies governing how they use data collected through our website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A0A0A]">7. Contact Us</h2>
              <p>
                For privacy questions or requests: {siteConfig.name}, {siteConfig.address.full}. Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C6F73C] hover:underline">
                  {siteConfig.contact.email}
                </a>{" "}
                | Phone:{" "}
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
