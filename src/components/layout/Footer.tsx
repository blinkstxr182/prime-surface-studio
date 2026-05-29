import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { title: "Car Wraps", href: "/services/car-wraps" },
  { title: "Luxury Car Wraps", href: "/services/luxury-car-wraps" },
  { title: "Food Truck Wraps", href: "/services/food-truck-wraps" },
  { title: "Fleet Wraps", href: "/services/fleet-wraps" },
  { title: "UTV Wraps", href: "/services/utv-wraps" },
  { title: "Architectural Wraps", href: "/services/architectural-wraps" },
  { title: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
];

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Get a Free Quote", href: "/quote" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5" aria-label="Prime Surface Studio — Home">
              <div className="relative w-[220px] h-14">
                <Image src="/logo.png" alt="Prime Surface Studio logo" fill sizes="180px" className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Premium vehicle wraps, UTV wraps, and brand design in Montclair, CA. Licensed, insured, and obsessed with the details.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </SocialLink>
              <SocialLink href={siteConfig.social.facebook} label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialLink>
              <SocialLink href={siteConfig.social.tiktok} label="TikTok">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.16 8.16 0 004.77 1.52V7.01a4.85 4.85 0 01-1-.32z"/></svg>
              </SocialLink>
              <SocialLink href={siteConfig.social.google} label="Google Business">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#C6F73C] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#C6F73C] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Map */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-white/50 mb-5">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-2.5 hover:text-[#C6F73C] transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#C6F73C]" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-2.5 hover:text-[#C6F73C] transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#C6F73C]" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C6F73C]" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#C6F73C]" />
                <div>
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.weekend}</p>
                </div>
              </div>
            </address>
            {/* Map iframe */}
            <div className="rounded-lg overflow-hidden border border-white/10 h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.012345!2d-117.68970!3d34.07750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5505+Moreno+St%2C+Montclair%2C+CA+91763!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="128"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Surface Studio location map"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Prime Surface Studio. All rights reserved. | Licensed &amp; Insured | Montclair, CA</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C6F73C] hover:border-[#C6F73C]/50 transition-colors"
    >
      {children}
    </a>
  );
}
