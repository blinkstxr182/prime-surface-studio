import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#C6F73C] text-8xl font-black mb-4 leading-none">404</p>
        <h1 className="text-3xl font-black text-[#0A0A0A] mb-4">Page Not Found</h1>
        <p className="text-black/55 mb-8">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on the road.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home className="w-4 h-4" /> Go Home
            </Button>
          </Link>
          <Link href="/quote">
            <Button variant="outline" size="lg">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
