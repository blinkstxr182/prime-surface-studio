"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-4 left-4 right-4 z-50 max-w-md mx-auto lg:mx-0 lg:left-4 lg:right-auto">
      <div className="rounded-lg border border-white/10 bg-[#111]/95 backdrop-blur-xl p-4 shadow-2xl">
        <p className="text-sm text-white/70 mb-3">
          We use cookies to improve your experience. By continuing, you accept our{" "}
          <Link href="/privacy-policy" className="text-[#C6F73C] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button variant="primary" size="sm" onClick={accept}>
            Accept
          </Button>
          <Button variant="ghost" size="sm" onClick={decline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
