import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/quote`, priority: 0.95, changeFrequency: "monthly" as const },
    { url: `${base}/services/car-window-tinting`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/services/residential-commercial-window-tinting`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/services/car-wraps`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/services/food-truck-wraps`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${base}/services/fleet-wraps`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${base}/services/architectural-wraps`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${base}/privacy-policy`, priority: 0.2, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
