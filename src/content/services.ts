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
    id: "car-wraps",
    title: "Car Wraps",
    slug: "/services/car-wraps",
    shortDescription: "Color-change wraps, partial wraps, PPF, and custom designs for every vehicle.",
    description: "Professional vinyl car wraps in Montclair, CA — full color changes, partial wraps, and paint protection film.",
    heroKeyword: "Car Wraps Montclair, CA",
    image: "/images/services/car-wraps.jpg",
    icon: "Layers",
    startingPrice: "$1,800",
    benefits: [
      "Complete color change at a fraction of a repaint cost",
      "Protects original factory paint — increases resale value",
      "Fully removable — return to original color anytime",
      "Unlimited design options: matte, gloss, satin, chrome, color-shift",
      "Faster turnaround than traditional paint",
      "Custom design service available for unique looks",
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
          "Yes. We can wrap any vehicle any color with thousands of options across gloss, matte, satin, chrome, color-shift, and textured finishes. Our in-house design team can also create custom artwork — see our branding & graphic design service.",
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
    relatedServices: ["luxury-car-wraps", "fleet-wraps", "branding-graphic-design"],
  },
  {
    id: "luxury-car-wraps",
    title: "Luxury Car Wraps",
    slug: "/services/luxury-car-wraps",
    shortDescription: "Concierge-level wrap work for exotic, luxury, and high-end vehicles — by appointment only.",
    description: "Premium luxury and exotic vehicle wrap service in Montclair, CA. XPEL Stealth, 3M 2080, KPMF, and PPF for Lamborghini, Porsche, Tesla, McLaren, Rolls-Royce, and Ferrari.",
    heroKeyword: "Luxury & Exotic Car Wraps Montclair, CA",
    image: "/images/services/luxury-car-wraps.jpg",
    icon: "Sparkles",
    startingPrice: "Custom quoted",
    benefits: [
      "White-glove concierge service — by private appointment",
      "Climate-controlled installation bay for flawless results",
      "Premium-tier films only: XPEL Stealth, 3M 2080, Avery Supreme, KPMF, Inozetek",
      "Panel-off installation available for invisible edges",
      "Paint Protection Film (PPF) integration for total preservation",
      "Lifetime warranty options on premium installations",
      "Discreet handling — privacy and confidentiality respected",
    ],
    options: [
      { name: "XPEL Stealth PPF", description: "Satin-finish self-healing paint protection film — transforms gloss paint into stealth matte while protecting it" },
      { name: "Full Body Color Change", description: "Complete color transformation in cast premium vinyl with panel-off installation where appropriate" },
      { name: "Color-Shift / Chameleon Premium", description: "Inozetek and KPMF iridescent films that shift color across the spectrum" },
      { name: "Brushed Metallic & Chrome", description: "High-impact brushed steel, brushed gold, satin chrome, and mirror chrome finishes" },
      { name: "Custom Paint-Match Wrap", description: "Pantone-matched custom vinyl for one-of-one specifications" },
      { name: "PPF + Wrap Combo", description: "Clear PPF underneath colored vinyl — wrap protection plus rock-chip armor" },
    ],
    brands: ["XPEL Stealth", "3M 2080", "Avery Supreme", "KPMF", "Inozetek", "Hexis", "Orafol"],
    faqs: [
      {
        question: "Do you work on Lamborghini, Ferrari, Porsche, McLaren, and Rolls-Royce?",
        answer:
          "Yes. We regularly wrap exotic and ultra-luxury vehicles including Lamborghini, Ferrari, Porsche, McLaren, Rolls-Royce, Bentley, AMG, Tesla, Aston Martin, and Maserati. Each project begins with a private consultation to discuss finish goals, panel-off requirements, and PPF integration.",
      },
      {
        question: "What makes luxury car wraps different from standard car wraps?",
        answer:
          "Luxury wraps use the top tier of cast film (XPEL Stealth, 3M 2080, Avery Supreme) — the same films aftermarket programs use for new-vehicle delivery prep. We allocate significantly more bay time per project, perform panel-off installation on complex body lines, and work exclusively in our climate-controlled bay. Every project includes a finished walkthrough and post-install care kit.",
      },
      {
        question: "Will the wrap damage my vehicle's factory paint?",
        answer:
          "No. Premium cast films are engineered for safe removal. In fact, the paint underneath a wrap is preserved from UV, rock chips, and environmental contamination — often emerging in better condition than exposed panels. For ceramic-coated paint, we have specific removal protocols.",
      },
      {
        question: "How much does a luxury car wrap cost?",
        answer:
          "Every luxury project is custom-quoted because pricing depends on film choice, full-vs-partial coverage, panel-off requirements, and whether PPF is included. We provide a detailed itemized quote after the initial consultation. Investments typically start in the mid four figures for partial work and scale based on scope.",
      },
      {
        question: "Do you offer Paint Protection Film (PPF) and ceramic coating?",
        answer:
          "Yes. We're an XPEL authorized installer offering Ultimate Plus PPF for self-healing rock-chip protection, and XPEL Stealth for satin-finish PPF. We can layer PPF underneath a color wrap for ultimate paint preservation.",
      },
      {
        question: "Is the service by appointment only?",
        answer:
          "Yes. Luxury work is by private appointment. Contact us by phone or through the quote form to schedule a confidential consultation. We respect client privacy and never publish project photos without express permission.",
      },
    ],
    relatedServices: ["car-wraps", "branding-graphic-design", "architectural-wraps"],
  },
  {
    id: "food-truck-wraps",
    title: "Food Truck Wraps",
    slug: "/services/food-truck-wraps",
    shortDescription: "Turn your food truck into a rolling billboard with vivid, weather-resistant graphics.",
    description: "Custom food truck wraps in Los Angeles and Inland Empire — bold graphics that drive business. Design + install under one roof.",
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
      "In-house design team — full identity to wrap in one shop",
    ],
    options: [
      { name: "Full Wrap", description: "Every inch covered — maximum visual impact" },
      { name: "Partial Wrap", description: "Key panels wrapped around a base color — budget-friendly" },
      { name: "Spot Graphics", description: "Logo, contact info, and menu panels strategically placed" },
      { name: "Window Perforated Film", description: "One-way vision graphics on serving windows" },
      { name: "Design + Wrap Package", description: "Full brand identity, logo, and wrap design bundled with installation" },
    ],
    brands: ["Avery Dennison", "3M", "KPMF", "Hexis", "Orafol"],
    faqs: [
      {
        question: "Do I need to provide design files?",
        answer:
          "Not necessarily. We can work with your existing brand assets or our in-house design team can create a custom wrap design from scratch — including logos, menus, and full brand identities. See our branding & graphic design service for full design packages.",
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
      {
        question: "What's the turnaround time for a full food truck wrap?",
        answer:
          "Design typically takes 1–2 weeks with revisions. Installation runs 2–4 days depending on truck size and complexity. We coordinate scheduling around your service days to minimize lost revenue.",
      },
    ],
    relatedServices: ["fleet-wraps", "branding-graphic-design", "car-wraps"],
  },
  {
    id: "fleet-wraps",
    title: "Fleet Wraps",
    slug: "/services/fleet-wraps",
    shortDescription: "Brand your entire fleet with consistent, high-impact commercial vehicle graphics.",
    description: "Fleet vehicle wraps for businesses in the Inland Empire — vans, trucks, and company cars wrapped with precision.",
    heroKeyword: "Fleet Wraps Inland Empire",
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
      { name: "Design + Fleet Rollout", description: "Brand identity design plus phased fleet wrap rollout" },
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
          "Absolutely. We work from your brand style guide, Pantone colors, and logo files to ensure every vehicle in the fleet matches perfectly. Don't have a brand guide? Our in-house design team can build you one.",
      },
      {
        question: "How long does fleet installation take?",
        answer:
          "We can typically install 2–3 vehicles per day. We coordinate scheduling to minimize downtime for your business operations.",
      },
      {
        question: "Can you also design the livery, not just install it?",
        answer:
          "Yes. Our branding & graphic design service handles vehicle livery design from concept to print-ready artwork — perfect for businesses that need a fresh look across their entire fleet.",
      },
    ],
    relatedServices: ["food-truck-wraps", "branding-graphic-design", "car-wraps"],
  },
  {
    id: "utv-wraps",
    title: "UTV Wraps",
    slug: "/services/utv-wraps",
    shortDescription: "Desert-tested wraps for Polaris RZR, Can-Am, Yamaha, Honda & every side-by-side platform.",
    description: "Custom UTV and side-by-side wraps in Montclair, CA. Polaris RZR, Can-Am Maverick X3, Yamaha YXZ, Honda Talon and more — full color changes, sponsor liveries, and PPF for desert riding.",
    heroKeyword: "UTV & Side-by-Side Wraps Montclair, CA",
    image: "/images/services/utv-wraps.jpg",
    icon: "Compass",
    startingPrice: "$2,200",
    benefits: [
      "Custom liveries that stand out at Glamis, Johnson Valley & Pismo",
      "Premium cast vinyl rated for desert UV, dust, and temperature extremes",
      "PPF layering on high-impact panels — rock chips and trail debris deflected",
      "Sponsor logos, race numbers, and club graphics professionally integrated",
      "Panel-off installation — wrap survives removal for service and storage",
      "Fully removable — refresh livery or return to factory paint anytime",
    ],
    options: [
      { name: "Full Body Color Change", description: "Complete UTV wrap — gloss, matte, satin, color-shift, or chrome finishes" },
      { name: "Sponsor Livery & Race Numbers", description: "Race-team-style sponsor decals, race numbers, and class designations" },
      { name: "Custom Trail Graphics", description: "One-of-one trail graphics, camo patterns, and family/club identities" },
      { name: "PPF Front-End Protection", description: "XPEL Ultimate Plus paint protection film on front fascia, A-pillars, and impact zones" },
      { name: "Roof & Cage Accents", description: "Wrapped roof panels, A-pillars, and ROPS cage components" },
      { name: "Trailer & Hauler Matching", description: "Match your tow rig or enclosed trailer to your UTV for a unified setup" },
    ],
    brands: ["Avery Dennison", "3M 1080 / 2080", "KPMF", "Inozetek", "Hexis", "Orafol", "XPEL (PPF)"],
    faqs: [
      {
        question: "What UTVs do you wrap?",
        answer:
          "All major platforms: Polaris RZR (XP, Pro R, Turbo R, Pro XP), Can-Am Maverick X3 / Maverick R / Defender, Yamaha YXZ1000R / Wolverine, Honda Talon / Pioneer, Kawasaki Teryx KRX / Mule, Segway Villain, and most other side-by-sides. If you ride it, we can wrap it.",
      },
      {
        question: "Will a wrap hold up to desert riding?",
        answer:
          "Yes — cast vinyl from Avery, 3M, KPMF, and Inozetek is rated for the same temperature swings and UV exposure that the Inland Empire and Southern California deserts dish out daily. For high-impact panels we recommend layering XPEL PPF underneath the color wrap so rock strikes hit the PPF, not the vinyl. With this combo, our wraps perform excellently at Glamis, Johnson Valley, and Ocotillo Wells.",
      },
      {
        question: "Can you install around removable doors, bedsides, and intake covers?",
        answer:
          "We remove the panels and wrap them separately on the bench — this is the only way to get clean wrapped edges that survive the next time you take the doors off for maintenance. Wraps installed with panels on the chassis fail at the edges fast. We bake removal time into the quote.",
      },
      {
        question: "How long does a UTV wrap installation take?",
        answer:
          "Most full UTV wraps run 2–4 days depending on body complexity and how much PPF is included. Partial wraps and accent work can be completed in a single day. We coordinate scheduling around your next ride weekend.",
      },
      {
        question: "Can you design the livery for me?",
        answer:
          "Absolutely. Our in-house design team builds custom UTV liveries from scratch — desert race look, sponsor mockups, camo patterns, paint-team replicas, full custom artwork. See our branding & graphic design service or include 'design + wrap' in your quote request.",
      },
      {
        question: "How much does a UTV wrap cost?",
        answer:
          "Full UTV wraps start around $2,200 for a standard color change on a single-seat RZR or YXZ. Two- and four-seat platforms (Maverick X3 Max, Talon 4, Pro R Ultimate) run higher due to additional surface area. Adding PPF, custom design work, or premium films (Inozetek color-shift, brushed metallics) increases the investment. Every project gets an itemized quote.",
      },
    ],
    relatedServices: ["car-wraps", "branding-graphic-design", "fleet-wraps"],
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
      { name: "Branded Wall Graphics", description: "Custom branded wall installations — combine with our design service" },
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
      {
        question: "Can you design custom wall graphics and branded installations?",
        answer:
          "Yes. Our branding & graphic design service creates custom wall artwork, branded installations, and environmental graphics — paired with our architectural wrap installation for a one-shop solution.",
      },
    ],
    relatedServices: ["branding-graphic-design", "fleet-wraps", "car-wraps"],
  },
  {
    id: "branding-graphic-design",
    title: "Branding & Graphic Design",
    slug: "/services/branding-graphic-design",
    shortDescription: "Logo design, vehicle livery, brand identity, and print collateral — design + install under one roof.",
    description: "Brand identity and graphic design services in Montclair, CA. Logos, vehicle livery, food truck branding, fleet identity systems, signage, and print design — designed and installed in-house.",
    heroKeyword: "Branding & Graphic Design Montclair, CA",
    image: "/images/services/branding-graphic-design.jpg",
    icon: "Palette",
    startingPrice: "Packages from $800",
    benefits: [
      "Design + install under one roof — no agency hand-offs",
      "Brand identities built for the medium they'll appear on",
      "Vehicle livery designed by people who actually wrap vehicles",
      "Print-ready files delivered alongside source files (AI/PSD/PDF)",
      "Brand guidelines document included with full identity packages",
      "Faster turnaround than traditional agencies — direct designer access",
    ],
    options: [
      { name: "Logo Design", description: "Custom logo design with primary, secondary, and submark variants delivered in all formats" },
      { name: "Brand Identity Systems", description: "Full identity: logo, color palette, typography, brand voice, usage guidelines, and asset library" },
      { name: "Vehicle Wrap Design", description: "Custom wrap artwork for cars, food trucks, fleets, and UTVs — print-ready for installation" },
      { name: "Food Truck Branding", description: "Full brand identity built for food trucks: logo, wrap design, menu boards, social kit" },
      { name: "Fleet Identity Systems", description: "Consistent branding scaled across vans, trucks, and company cars of any size" },
      { name: "UTV Livery & Race Graphics", description: "Custom side-by-side liveries, sponsor decals, race numbers, and desert race team graphics" },
      { name: "Signage & Storefront Design", description: "Storefront signs, monument signs, window graphics, and wayfinding" },
      { name: "Print Collateral", description: "Business cards, flyers, menus, brochures, and packaging design" },
      { name: "Social Media Brand Kits", description: "Templates and asset libraries for Instagram, TikTok, and social platforms" },
    ],
    brands: ["Adobe Creative Suite", "Figma", "Procreate", "Pantone"],
    faqs: [
      {
        question: "Can you design AND install my wrap?",
        answer:
          "Yes — that's our specialty. Most wrap shops only install pre-existing files; most design agencies don't understand wrap production. We do both, which means designs are built for the medium they'll appear on and you get one team accountable end-to-end.",
      },
      {
        question: "How many revision rounds are included?",
        answer:
          "Logo design and brand identity packages include 2–3 revision rounds depending on the tier. Wrap design includes 2 revision rounds. Additional rounds are billed at our hourly rate. We define scope and rounds upfront so there are no surprises.",
      },
      {
        question: "Who owns the rights to the final design?",
        answer:
          "You do. Upon final payment, you receive full ownership and usage rights to the designed assets along with source files in editable formats (Adobe Illustrator, Photoshop, PDF). We retain the right to use work in our portfolio unless you specifically request confidentiality.",
      },
      {
        question: "How long does a brand identity project take?",
        answer:
          "A logo-only project takes 1–2 weeks. A full brand identity package (logo, guidelines, applications) runs 3–6 weeks. Wrap design alone runs 1–3 weeks depending on complexity. We commit to timelines upfront and hit them.",
      },
      {
        question: "Do I need existing brand assets to start a wrap design?",
        answer:
          "Not at all — many of our wrap clients start from zero. We can build your brand identity first, then design the wrap to match. If you have existing assets, we'll work with what you have and elevate where needed.",
      },
      {
        question: "Do you do print fulfillment too, or just design?",
        answer:
          "We design and deliver print-ready files. For print fulfillment (business cards, signage, menus), we work with vetted local printers and can manage the production process for you, or hand off files for you to print elsewhere.",
      },
    ],
    relatedServices: ["car-wraps", "food-truck-wraps", "fleet-wraps"],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getRelatedServices(ids: string[]): Service[] {
  return services.filter((s) => ids.includes(s.id));
}
