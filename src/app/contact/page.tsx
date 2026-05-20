import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { FadeUp } from "@/components/ui/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Prime Surface Studio | Vehicle Wraps & Brand Design Montclair CA",
  description:
    "Contact Prime Surface Studio in Montclair, CA. Call (562) 733-9672, email us, or fill out our form. Open Mon–Sat 9AM–6PM. Free consultations available.",
  path: "/contact",
});

const contactFaqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We respond to all contact form submissions and emails within one business day. For urgent inquiries, call us directly at (562) 733-9672 and we'll be happy to help right away.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "We recommend calling ahead to book an appointment, especially for wrap projects that require longer installation windows. Design consultations and smaller projects can often be booked within the same week.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — all consultations and estimates are completely free with no obligation. You can request a quote online, by phone, or visit us in the shop.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're at 5505 Moreno St, Suite 105 B, Montclair, CA 91763 — conveniently located in the heart of Montclair with easy access from Ontario, Pomona, Upland, and surrounding Inland Empire cities.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />

      {/* Hero */}
      <section className="py-20 bg-[#0A0A0A] border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <FadeUp>
            <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Free consultations. Honest quotes. No pressure. We&apos;re here Mon–Sat, 9AM–6PM.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeUp>
              <div className="bg-[#111] rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                <p className="text-white/50 text-sm mb-6">We&apos;ll reply within one business day.</p>
                <ContactForm />
              </div>
            </FadeUp>

            {/* Contact details */}
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div className="bg-[#111] rounded-2xl border border-white/10 p-8">
                  <h2 className="text-xl font-black text-white mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#C6F73C]/10 border border-[#C6F73C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C6F73C]/20 transition-colors">
                        <Phone className="w-5 h-5 text-[#C6F73C]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Phone</p>
                        <p className="text-white font-semibold group-hover:text-[#C6F73C] transition-colors">
                          {siteConfig.contact.phoneDisplay}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#C6F73C]/10 border border-[#C6F73C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C6F73C]/20 transition-colors">
                        <Mail className="w-5 h-5 text-[#C6F73C]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Email</p>
                        <p className="text-white font-semibold group-hover:text-[#C6F73C] transition-colors">
                          {siteConfig.contact.email}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C6F73C]/10 border border-[#C6F73C]/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#C6F73C]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Address</p>
                        <address className="not-italic text-white font-semibold text-sm leading-relaxed">
                          {siteConfig.address.street}<br />
                          {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C6F73C]/10 border border-[#C6F73C]/20 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#C6F73C]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wide mb-1">Hours</p>
                        <p className="text-white font-semibold text-sm">{siteConfig.hours.weekdays}</p>
                        <p className="text-white/50 text-sm">{siteConfig.hours.weekend}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-wide mb-3">Follow Us</p>
                    <div className="flex gap-3">
                      {[
                        { href: siteConfig.social.instagram, label: "Instagram", svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
                        { href: siteConfig.social.facebook, label: "Facebook", svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                      ].map(({ href, label, svg }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C6F73C] hover:border-[#C6F73C]/50 transition-colors"
                        >
                          {svg}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.012345!2d-117.68970!3d34.07750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5505+Moreno+St%2C+Montclair%2C+CA+91763!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="224"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prime Surface Studio location — 5505 Moreno St, Montclair CA"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={contactFaqs}
        title="Before You Reach Out"
        subtitle="Quick answers to the most common questions."
      />
    </>
  );
}
