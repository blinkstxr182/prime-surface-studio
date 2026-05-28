"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Mail, MapPin, Clock, ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { title: "Car Wraps", href: "/services/car-wraps" },
  { title: "Luxury Car Wraps", href: "/services/luxury-car-wraps" },
  { title: "Food Truck Wraps", href: "/services/food-truck-wraps" },
  { title: "Fleet Wraps", href: "/services/fleet-wraps" },
  { title: "UTV Wraps", href: "/services/utv-wraps" },
  { title: "Architectural Wraps", href: "/services/architectural-wraps" },
  { title: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change — deferred to avoid setState-in-effect lint rule
  useEffect(() => {
    const id = setTimeout(() => {
      setMobileOpen(false);
      setServicesOpen(false);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#F5F5F5] border-b border-black/5 text-black/60 text-xs">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 hover:text-[#C6F73C] transition-colors">
              <Phone className="w-3 h-3" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-[#C6F73C] transition-colors">
              <Mail className="w-3 h-3" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {siteConfig.hours.shortWeekdays}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              {siteConfig.address.city}, {siteConfig.address.state}
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-2xl"
            : "bg-white/80 backdrop-blur-md border-b border-black/5"
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Prime Surface Studio — Home">
            <div className="relative h-10 lg:h-12 w-[150px] lg:w-[180px]">
              <Image
                src="/logo.png"
                alt="Prime Surface Studio — Premium vehicle wraps, UTV wraps and brand design in Montclair CA"
                fill
                sizes="180px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>About</NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-sm transition-colors",
                  pathname.startsWith("/services")
                    ? "text-[#C6F73C]"
                    : "text-black/70 hover:text-[#0A0A0A]"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <div className="rounded-lg border border-black/10 bg-[#F5F5F5]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="p-2">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-black/70 hover:text-[#0A0A0A] hover:bg-black/[0.03] transition-colors group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#C6F73C] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-black/10 p-3">
                      <Link
                        href="/quote"
                        className="flex items-center justify-center gap-2 w-full py-2 rounded-sm bg-[#C6F73C] text-[#0A0A0A] text-sm font-bold uppercase tracking-wide hover:bg-[#9BD127] transition-colors"
                      >
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-black/70 hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#C6F73C]" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link href="/quote">
              <Button variant="primary" size="md">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-black/75 hover:text-[#0A0A0A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <nav
          className={cn(
            "absolute top-[calc(4rem+1px)] right-0 bottom-0 w-full max-w-sm bg-[#0f0f0f] border-l border-white/10 p-6 overflow-y-auto transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white rounded-sm hover:bg-white/5 transition-colors text-left"
            >
              <span className="font-medium">Services</span>
              <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-sm text-white/60 hover:text-white rounded-sm hover:bg-white/5 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <MobileNavLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link href="/quote" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center justify-center gap-2 py-3 text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#C6F73C]" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm text-white/60">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{siteConfig.address.full}</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0" />{siteConfig.hours.weekdays}</p>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-sm transition-colors",
        active ? "text-[#C6F73C]" : "text-black/70 hover:text-[#0A0A0A]"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 font-medium text-white/80 hover:text-white rounded-sm hover:bg-white/5 transition-colors"
    >
      {children}
    </Link>
  );
}
