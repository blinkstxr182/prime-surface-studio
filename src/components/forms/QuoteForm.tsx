"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, Car, Home, Layers, Truck, Package, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { fireGoogleAdsConversion } from "@/lib/analytics";

const schema = z.object({
  serviceType: z.string().min(1, "Please select a service"),
  // Auto fields
  year: z.string().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  windows: z.string().optional(),
  // Wrap fields
  wrapType: z.string().optional(),
  wrapFinish: z.string().optional(),
  // Residential fields
  sqft: z.string().optional(),
  numWindows: z.string().optional(),
  // Contact
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  contactMethod: z.string().optional(),
  notes: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const serviceTypes = [
  { id: "auto-tint", label: "Auto Window Tinting", icon: Car },
  { id: "home-tint", label: "Home Tinting", icon: Home },
  { id: "car-wrap", label: "Car Wrap", icon: Layers },
  { id: "fleet", label: "Fleet Wraps", icon: Package },
  { id: "food-truck", label: "Food Truck Wrap", icon: Truck },
  { id: "architectural", label: "Architectural Wrap", icon: Layout },
];

const steps = ["Service Type", "Project Details", "Contact Info", "Review"];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { honeypot: "" } });

  const serviceType = watch("serviceType");
  const isAuto = serviceType === "auto-tint";
  const isWrap = ["car-wrap", "fleet", "food-truck"].includes(serviceType ?? "");
  const isHome = ["home-tint", "architectural"].includes(serviceType ?? "");

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "quote" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      fireGoogleAdsConversion();
    } catch {
      setError("Submission failed. Please call (562) 733-9672 directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
          <CheckCircle className="w-20 h-20 text-[#C6F73C] mx-auto mb-6" />
        </motion.div>
        <h2 className="text-3xl font-black text-white mb-3">Quote Request Received!</h2>
        <p className="text-white/60 max-w-md mx-auto text-lg">
          We&apos;ll review your project details and get back to you within one business day with a detailed quote.
        </p>
        <p className="text-white/40 text-sm mt-4">
          Need it faster? Call <a href="tel:+15627339672" className="text-[#C6F73C] hover:underline">(562) 733-9672</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress steps */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/10" />
        <div
          className="absolute top-4 left-0 h-0.5 bg-[#C6F73C] transition-all duration-500"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((label, i) => (
          <div key={label} className="relative flex flex-col items-center gap-2 z-10">
            <div
              className={cn(
                "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300",
                i < step
                  ? "bg-[#C6F73C] border-[#C6F73C] text-[#0A0A0A]"
                  : i === step
                  ? "bg-[#0A0A0A] border-[#C6F73C] text-[#C6F73C]"
                  : "bg-[#0A0A0A] border-white/20 text-white/30"
              )}
            >
              {i < step ? "✓" : i + 1}
            </div>
            <span className={cn("text-xs font-medium hidden sm:block", i === step ? "text-white" : "text-white/30")}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        <AnimatePresence mode="wait">
          {/* Step 0: Service type */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black text-white mb-2">What service do you need?</h2>
              <p className="text-white/50 mb-6">Select the service you&apos;re interested in</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceTypes.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setValue("serviceType", id)}
                    className={cn(
                      "flex flex-col items-center gap-3 p-5 rounded-lg border-2 transition-all duration-200 text-sm font-medium",
                      serviceType === id
                        ? "border-[#C6F73C] bg-[#C6F73C]/10 text-white"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    {label}
                  </button>
                ))}
              </div>
              {errors.serviceType && <p className="text-red-400 text-xs mt-2">{errors.serviceType.message}</p>}
              <div className="flex justify-end mt-6">
                <Button type="button" variant="primary" onClick={nextStep} disabled={!serviceType}>
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 1: Project details */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black text-white mb-2">Project Details</h2>
              <p className="text-white/50 mb-6">Help us understand your project</p>
              <div className="space-y-4">
                {isAuto && (
                  <>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Vehicle Year</Label>
                        <Input id="year" placeholder="2022" {...register("year")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="make">Make</Label>
                        <Input id="make" placeholder="Tesla" {...register("make")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model">Model</Label>
                        <Input id="model" placeholder="Model 3" {...register("model")} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="windows">Windows to Tint</Label>
                      <Input id="windows" placeholder="All windows / Front 2 / Windshield only" {...register("windows")} />
                    </div>
                  </>
                )}
                {isWrap && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="wrapType">Full or Partial Wrap?</Label>
                      <Input id="wrapType" placeholder="Full wrap / Partial (hood, roof) / Accents only" {...register("wrapType")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="wrapFinish">Preferred Finish</Label>
                      <Input id="wrapFinish" placeholder="Matte black / Gloss red / Satin / Open to suggestions" {...register("wrapFinish")} />
                    </div>
                  </>
                )}
                {isHome && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sqft">Estimated Square Footage</Label>
                        <Input id="sqft" placeholder="500 sq ft" {...register("sqft")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="numWindows">Number of Windows/Surfaces</Label>
                        <Input id="numWindows" placeholder="10 windows" {...register("numWindows")} />
                      </div>
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Details</Label>
                  <Textarea id="notes" placeholder="Any other details, special requirements, or questions..." {...register("notes")} />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" variant="ghost" onClick={prevStep}><ArrowLeft className="w-4 h-4" /> Back</Button>
                <Button type="button" variant="primary" onClick={nextStep}>Next <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact info */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black text-white mb-2">Your Contact Info</h2>
              <p className="text-white/50 mb-6">How can we reach you with your quote?</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" {...register("name")} />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@email.com" {...register("email")} />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" {...register("phone")} />
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <Input id="contactMethod" placeholder="Phone / Email / Text" {...register("contactMethod")} />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button type="button" variant="ghost" onClick={prevStep}><ArrowLeft className="w-4 h-4" /> Back</Button>
                <Button type="button" variant="primary" onClick={nextStep}>Review <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review & submit */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-black text-white mb-2">Review & Submit</h2>
              <p className="text-white/50 mb-6">Confirm your details before submitting</p>
              <div className="space-y-3 mb-6">
                {[
                  ["Service", serviceTypes.find(s => s.id === getValues("serviceType"))?.label],
                  ["Name", getValues("name")],
                  ["Email", getValues("email")],
                  ["Phone", getValues("phone")],
                  ["Notes", getValues("notes")],
                ].map(([label, value]) => value ? (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-white/40 w-20 shrink-0">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ) : null)}
              </div>
              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
              <div className="flex justify-between">
                <Button type="button" variant="ghost" onClick={prevStep}><ArrowLeft className="w-4 h-4" /> Back</Button>
                <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Submit Quote Request <ArrowRight className="w-4 h-4" /></>}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
