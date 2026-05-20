import React from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/ui/motion";

export function ServiceAreaMap() {
  return (
    <section className="py-20 bg-[#111] border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp className="text-center mb-12">
          <p className="text-[#C6F73C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Service Area</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Proudly Serving the Inland Empire</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Based in Montclair, CA — we serve clients across San Bernardino and Los Angeles counties.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* City list */}
          <FadeUp>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {siteConfig.serviceArea.map((city) => (
                <div key={city} className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#C6F73C] shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/40 text-sm">
              Don&apos;t see your city? Call us — we likely serve your area.{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="text-[#C6F73C] hover:underline">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
          </FadeUp>

          {/* Map embed */}
          <FadeUp delay={0.2}>
            <div className="rounded-xl overflow-hidden border border-white/10 h-72 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105942!2d-117.8!3d34.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c336e3be37ca55%3A0x4da63d7bbd81cad3!2sMontclair%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Surface Studio service area map"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
