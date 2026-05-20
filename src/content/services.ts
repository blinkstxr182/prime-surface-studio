export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  heroKeyword: string;
  image: string;
  icon: string;
  startingPrice: string;
  benefits: string[];
  options: { name: string; description: string }[];
  brands: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: "car-window-tinting",
    title: "Automotive Window Tinting",
    slug: "/services/car-window-tinting",
    shortDescription: "Ceramic, nano, and dyed window films for maximum heat rejection and privacy.",
    description: "Professional car window tinting in Montclair, CA using premium ceramic and nano-ceramic films.",
    heroKeyword: "Ceramic Window Tint Montclair, CA",
    image: "/images/services/car-window-tinting.jpg",
    icon: "Car",
    startingPrice: "$199",
    benefits: [
      "Up to 99% UV ray rejection — protects skin and interior",
      "Significant heat rejection keeps cabin cooler",
      "Reduced glare for safer driving",
      "Enhanced privacy and security",
      "Shatter-resistant film — added safety in accidents",
      "California-legal VLT options available",
    ],
    options: [
      { name: "Ceramic / Nano-Ceramic", description: "Top-tier heat rejection, crystal clarity, no signal interference" },
      { name: "Carbon Film", description: "Matte finish, superior heat rejection, no metal — won't block electronics" },
      { name: "Dyed Film", description: "Economical, privacy-focused, good UV block" },
      { name: "Hybrid Film", description: "Balanced performance at mid-range price point" },
    ],
    brands: ["XPEL", "3M", "SunTek", "Llumar", "Avery Dennison"],
    faqs: [
      {
        question: "What is California's legal window tint darkness?",
        answer:
          "California law requires front side windows to allow at least 70% of light in (70% VLT). Rear side windows and the rear window can be any darkness. The windshield may have non-reflective tint on the top 4 inches. We always install compliant tint and can advise on enforcement tolerance in San Bernardino County.",
      },
      {
        question: "How long does automotive tinting take?",
        answer:
          "Most vehicles are completed in 2–4 hours. Larger vehicles like SUVs and trucks may take 4–6 hours. We offer same-day appointments Monday through Saturday.",
      },
      {
        question: "How long do I need to wait before rolling down my windows?",
        answer:
          "We recommend waiting at least 3–5 days (ideally a week) before rolling down your windows. The adhesive needs time to fully cure. Resist the urge — patience makes for a perfect, long-lasting install.",
      },
      {
        question: "Will window tint affect my GPS, phone signal, or toll transponder?",
        answer:
          "Our ceramic and carbon films contain no metal, so they will not interfere with GPS, cellular signals, radio, or electronic toll transponders. Only older metallic films can cause interference.",
      },
      {
        question: "What is the difference between ceramic and dyed tint?",
        answer:
          "Ceramic tint uses nano-ceramic particles to reject infrared heat without reducing visibility or signal reception. Dyed tint absorbs heat but transfers some back into the cabin. Ceramic dramatically outperforms dyed tint on heat rejection and longevity, though it costs more upfront.",
      },
      {
        question: "Do you offer a warranty?",
        answer:
          "Yes. Our ceramic films come with a lifetime warranty against bubbling, peeling, delamination, and color change. Dyed films carry a 5-year warranty. All warranties are transferable.",
      },
    ],
    relatedServices: ["car-wraps", "residential-commercial-window-tinting", "fleet-wraps"],
  },
  {
    id: "residential-commercial-window-tinting",
    title: "Residential & Commercial Window Tinting",
    slug: "/services/residential-commercial-window-tinting",
    shortDescription: "Protect your home or business with UV-blocking, energy-saving window film.",
    description: "Home and commercial window tinting in Montclair, CA — reduce heat, cut energy bills, and add privacy.",
    heroKeyword: "Home Window Tinting Montclair, CA",
    image: "/images/services/residential-commercial-window-tinting.jpg",
    icon: "Building2",
    startingPrice: "$4/sq ft",
    benefits: [
      "Reduce solar heat gain up to 79% — lower your AC bill",
      "Block 99%+ of UV rays that fade furniture and flooring",
      "Maintain natural light while eliminating glare",
      "Enhance privacy without sacrificing views",
      "Security film resists smash-and-grab break-ins",
      "Decorative films add style to glass surfaces",
    ],
    options: [
      { name: "Solar Control Film", description: "Reduces heat and glare, excellent energy savings" },
      { name: "Privacy Film", description: "One-way mirror effect — see out, they can't see in" },
      { name: "Security Film", description: "Holds shattered glass in place — protects against break-ins and accidents" },
      { name: "Decorative / Frosted Film", description: "Adds texture, pattern, or frosted look to glass surfaces" },
      { name: "Anti-Graffiti Film", description: "Sacrificial layer protects glass from etching and vandalism" },
    ],
    brands: ["3M", "SunTek", "Llumar", "Avery Dennison", "XPEL"],
    faqs: [
      {
        question: "Will window tint make my home too dark?",
        answer:
          "Not with modern solar films. We have options that reject 60–70% of solar heat while only slightly reducing visible light. The result is a brighter, more comfortable space — not a dark room.",
      },
      {
        question: "How much can I save on energy bills?",
        answer:
          "Most homeowners and businesses in the Inland Empire see a 10–30% reduction in cooling costs after installing solar control film. The film typically pays for itself within 2–4 years through energy savings alone.",
      },
      {
        question: "Will film damage my existing windows?",
        answer:
          "When installed correctly, window film will not damage standard residential or commercial glass. We assess every window before installation and recommend appropriate films based on glass type.",
      },
      {
        question: "How long does residential installation take?",
        answer:
          "A typical home takes 4–8 hours depending on the number of windows. Commercial projects are quoted individually. We work around your schedule with minimal disruption.",
      },
      {
        question: "Can film be removed if I change my mind?",
        answer:
          "Yes. Professional-grade film can be removed cleanly without damaging the glass. We also offer film removal services if you need to update or replace existing film.",
      },
    ],
    relatedServices: ["car-window-tinting", "architectural-wraps", "fleet-wraps"],
  },
  {
    id: "car-wraps",
    title: "Car Wraps",
    slug: "/services/car-wraps",
    shortDescription: "Color-change wraps, partial wraps, PPF, and custom designs for every vehicle.",
    description: "Professional vinyl car wraps in Montclair, CA — full color changes, partial wraps, and paint protection film.",
    heroKeyword: "Car Wrap Montclair, CA",
    image: "/images/services/car-wraps.jpg",
    icon: "Layers",
    startingPrice: "$1,800",
    benefits: [
      "Complete color change at a fraction of a repaint cost",
      "Protects original factory paint — increases resale value",
      "Fully removable — return to original color anytime",
      "Unlimited design options: matte, gloss, satin, chrome, color-shift",
      "Faster turnaround than traditional paint",
      "Commercial advertising wrapped into your daily drive",
    ],
    options: [
      { name: "Gloss Wrap", description: "Mirror-like finish that rivals a fresh paint job" },
      { name: "Matte Wrap", description: "Flat, understated luxury look — hugely popular" },
      { name: "Satin Wrap", description: "Subtle sheen between matte and gloss — elegant and unique" },
      { name: "Color-Shift / Chameleon", description: "Changes color in different lighting — truly head-turning" },
      { name: "Carbon Fiber Wrap", description: "Textured carbon fiber look for accents or full body" },
      { name: "Chrome / Metallic Wrap", description: "High-impact mirror or brushed metal finishes" },
      { name: "Paint Protection Film (PPF)", description: "Clear self-healing film protects against rock chips and scratches" },
    ],
    brands: ["Avery Dennison", "3M", "KPMF", "Inozetek", "XPEL (PPF)", "Hexis"],
    faqs: [
      {
        question: "How long does a vinyl wrap last?",
        answer:
          "A professionally installed, quality vinyl wrap lasts 5–7 years under normal conditions with proper care. Cast vinyl films from brands like Avery Dennison Supreme Wrapping Film are rated for 7+ years.",
      },
      {
        question: "Will a wrap damage my paint?",
        answer:
          "No — in fact, a wrap protects your factory paint from UV fading, minor scratches, and stone chips. When professionally removed, the paint underneath is often in better condition than unwrapped areas.",
      },
      {
        question: "Can any color be wrapped?",
        answer:
          "Yes. We can wrap any vehicle any color with thousands of options across gloss, matte, satin, chrome, color-shift, and textured finishes. If you can envision it, we can create it.",
      },
      {
        question: "How do I care for my wrapped vehicle?",
        answer:
          "Hand wash with wrap-safe soap, avoid high-pressure washes on edges, and store in a garage or shaded area when possible. For matte and satin finishes, avoid waxing — we'll advise on proper detailers.",
      },
      {
        question: "How long does installation take?",
        answer:
          "A full car wrap typically takes 2–5 days depending on vehicle size and design complexity. Partial wraps can be completed in 1–2 days.",
      },
    ],
    relatedServices: ["car-window-tinting", "fleet-wraps", "food-truck-wraps"],
  },
  {
    id: "food-truck-wraps",
    title: "Food Truck Wraps",
    slug: "/services/food-truck-wraps",
    shortDescription: "Turn your food truck into a rolling billboard with vivid, weather-resistant graphics.",
    description: "Custom food truck wraps in Los Angeles and Inland Empire — bold graphics that drive business.",
    heroKeyword: "Food Truck Wrap Los Angeles & Inland Empire",
    image: "/images/services/food-truck-wraps.jpg",
    icon: "Truck",
    startingPrice: "$2,500",
    benefits: [
      "Generate thousands of impressions per day — mobile advertising that works 24/7",
      "Professional design elevates brand credibility",
      "Weather and UV-resistant inks for outdoor durability",
      "Protects the original vehicle surface underneath",
      "Fully removable — update branding without buying a new truck",
      "Faster and more affordable than full repaints",
    ],
    options: [
      { name: "Full Wrap", description: "Every inch covered — maximum visual impact" },
      { name: "Partial Wrap", description: "Key panels wrapped around a base color — budget-friendly" },
      { name: "Spot Graphics", description: "Logo, contact info, and menu panels strategically placed" },
      { name: "Window Perforated Film", description: "One-way vision graphics on serving windows" },
    ],
    brands: ["Avery Dennison", "3M", "KPMF", "Hexis"],
    faqs: [
      {
        question: "Do I need to provide design files?",
        answer:
          "We can work with your existing brand assets or create a custom design from scratch. Our design consultation is included with every food truck wrap project.",
      },
      {
        question: "How long will a food truck wrap hold up outdoors?",
        answer:
          "Our food truck wraps use commercial-grade cast vinyl and UV-resistant inks rated for 5–7 years of outdoor exposure. We recommend a clear laminate overcoat for maximum durability.",
      },
      {
        question: "Can you wrap health department approved surfaces?",
        answer:
          "Yes. We use food-safe, non-toxic vinyl films that meet health department requirements for food service equipment surfaces. We can advise on which areas to wrap or avoid per your local regulations.",
      },
    ],
    relatedServices: ["fleet-wraps", "car-wraps", "architectural-wraps"],
  },
  {
    id: "fleet-wraps",
    title: "Fleet Wraps",
    slug: "/services/fleet-wraps",
    shortDescription: "Brand your entire fleet with consistent, high-impact commercial vehicle graphics.",
    description: "Fleet vehicle wraps for businesses in the Inland Empire — vans, trucks, and company cars wrapped with precision.",
    heroKeyword: "Fleet Wrap Inland Empire",
    image: "/images/services/fleet-wraps.jpg",
    icon: "Package",
    startingPrice: "$1,200/vehicle",
    benefits: [
      "Turn every company vehicle into a rolling billboard",
      "Consistent brand identity across your entire fleet",
      "Generates 30,000–70,000 impressions per vehicle per day",
      "Lower cost-per-impression than any other advertising medium",
      "Protects fleet vehicles — preserves resale value",
      "Volume pricing available for fleets of 5+ vehicles",
    ],
    options: [
      { name: "Full Fleet Wrap", description: "Complete coverage — maximum brand exposure" },
      { name: "Partial Fleet Wrap", description: "Key surfaces wrapped over base paint color" },
      { name: "Spot Graphics Package", description: "Logo, contact info, and tagline on doors and tailgate" },
      { name: "Custom Fleet Livery", description: "Unique per-vehicle numbering and employee names" },
    ],
    brands: ["Avery Dennison", "3M", "KPMF", "Hexis"],
    faqs: [
      {
        question: "Do you offer discounts for multiple vehicles?",
        answer:
          "Yes — we offer volume pricing for fleets of 3 or more vehicles. Contact us for a custom fleet quote and we'll work within your budget.",
      },
      {
        question: "Can you match wraps to our existing brand guidelines?",
        answer:
          "Absolutely. We work from your brand style guide, Pantone colors, and logo files to ensure every vehicle in the fleet matches perfectly.",
      },
      {
        question: "How long does fleet installation take?",
        answer:
          "We can typically install 2–3 vehicles per day. We coordinate scheduling to minimize downtime for your business operations.",
      },
    ],
    relatedServices: ["car-wraps", "food-truck-wraps", "residential-commercial-window-tinting"],
  },
  {
    id: "architectural-wraps",
    title: "Architectural Wraps",
    slug: "/services/architectural-wraps",
    shortDescription: "Refresh interior and exterior surfaces — walls, elevators, columns, and more.",
    description: "Architectural wraps and surface films in Montclair, CA — transform spaces without costly renovations.",
    heroKeyword: "Architectural Film & Surface Wraps Inland Empire",
    image: "/images/services/architectural-wraps.jpg",
    icon: "Layout",
    startingPrice: "$8/sq ft",
    benefits: [
      "Dramatic surface refresh at 10–30% of renovation cost",
      "Thousands of textures: wood, marble, metal, leather, concrete",
      "No demolition, no downtime — install over existing surfaces",
      "Durable, scrubbable surfaces for high-traffic areas",
      "Fully removable — update branding without damage",
      "Sustainable alternative to full material replacement",
    ],
    options: [
      { name: "DI-NOC Architectural Film", description: "3M's premium architectural surface film — wood, stone, metal, fabric textures" },
      { name: "Elevator Wrap", description: "Full elevator cab refresh — walls, doors, ceiling panels" },
      { name: "Wall & Column Wrap", description: "Feature walls, reception areas, columns, and pillars" },
      { name: "Furniture & Fixture Wrap", description: "Desks, countertops, cabinetry, and built-in millwork" },
      { name: "Exterior Cladding Film", description: "Weather-resistant exterior surface films" },
    ],
    brands: ["3M DI-NOC", "Avery Dennison", "Formica", "XPEL"],
    faqs: [
      {
        question: "What surfaces can be wrapped?",
        answer:
          "Almost any smooth, clean surface: drywall, wood, metal, plastic, glass, laminate, MDF, and more. We assess each surface before installation and prep accordingly.",
      },
      {
        question: "How durable are architectural wraps in high-traffic areas?",
        answer:
          "Commercial-grade architectural films like 3M DI-NOC are rated for 10+ years of interior use. They are scrubbable, scratch-resistant, and maintain their appearance in high-traffic environments.",
      },
      {
        question: "Will the wrap damage the surface underneath?",
        answer:
          "No. Properly installed and removed, architectural films leave no residue or damage on the substrate. They're ideal for leased spaces where you cannot make permanent modifications.",
      },
    ],
    relatedServices: ["residential-commercial-window-tinting", "fleet-wraps", "car-wraps"],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getRelatedServices(ids: string[]): Service[] {
  return services.filter((s) => ids.includes(s.id));
}
