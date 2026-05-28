"use client";
import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Vehicles Wrapped" },
  { value: 250, suffix: "+", label: "Brands Designed" },
  { value: 87, suffix: "", label: "5-Star Reviews" },
];

function useCounter(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!trigger || shouldReduce) {
      // Defer to avoid setState-in-effect lint error
      const id = setTimeout(() => setCount(target), 0);
      return () => clearTimeout(id);
    }
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger, shouldReduce]);

  return count;
}

function StatItem({ stat, trigger }: { stat: Stat; trigger: boolean }) {
  const count = useCounter(stat.value, 2000, trigger);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-black text-[#0A0A0A] mb-2">
        {count.toLocaleString()}
        <span className="text-[#C6F73C]">{stat.suffix}</span>
      </div>
      <p className="text-black/55 text-sm uppercase tracking-wide">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white border-y border-black/5" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <FadeUp className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} trigger={triggered} />
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
