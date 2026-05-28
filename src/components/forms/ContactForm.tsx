"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fireGoogleAdsConversion } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Car Wrap",
  "Luxury Car Wrap",
  "Food Truck Wrap",
  "Fleet Wraps",
  "UTV Wrap",
  "Architectural Wraps",
  "Branding & Graphic Design",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      fireGoogleAdsConversion();
    } catch {
      setError("Something went wrong. Please call us directly at (562) 733-9672.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#C6F73C] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">Message Sent!</h3>
        <p className="text-black/60">
          Thank you! We&apos;ll get back to you within one business day. For urgent inquiries, call us at{" "}
          <a href="tel:+15627339672" className="text-[#C6F73C] hover:underline">(562) 733-9672</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="John Smith" {...register("name")} />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" placeholder="john@email.com" {...register("email")} />
          {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" placeholder="(555) 000-0000" {...register("phone")} />
          {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <Select onValueChange={(val) => setValue("service", val)}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-red-400 text-xs">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" placeholder="Tell us about your project..." {...register("message")} />
        {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </Button>
    </form>
  );
}
