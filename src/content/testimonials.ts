export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Stephanie R.",
    location: "Rancho Cucamonga, CA",
    rating: 5,
    service: "Full Car Wrap",
    text: "I wanted a matte black wrap for my Dodge Charger and Prime Surface Studio absolutely delivered. The color-change wrap looks factory — I can't believe how precise the edges are around the handles and mirrors. I've gotten so many compliments. Worth every penny. These guys are truly the best in the Inland Empire.",
  },
  {
    id: "2",
    name: "Marcus T.",
    location: "Ontario, CA",
    rating: 5,
    service: "Luxury Car Wrap",
    text: "Had my Porsche 911 wrapped in XPEL Stealth and it's incredible. The satin finish is flawless and the PPF is doing its job — already deflected a rock chip on the freeway. The team treated my car with the kind of care I'd expect from a luxury dealership. Discreet, professional, and the install is invisible at the edges.",
  },
  {
    id: "3",
    name: "Jasmine K.",
    location: "Pomona, CA",
    rating: 5,
    service: "Food Truck Wrap + Brand Identity",
    text: "Our food truck has been getting so much more attention since Prime Surface Studio designed AND wrapped it. They built our entire brand identity from scratch — logo, color palette, the works — then translated it onto the truck. The colors are vivid and people stop us everywhere now. Best marketing investment we've made for our business.",
  },
  {
    id: "4",
    name: "Robert M.",
    location: "Upland, CA",
    rating: 5,
    service: "Fleet Wraps",
    text: "We had five company vans wrapped for our HVAC business. Prime Surface Studio was professional throughout — from the initial brand consultation to delivery. They kept the project on schedule and the branding looks consistent across all vehicles. Our crews get stopped regularly by potential customers who saw the vans. ROI has been incredible.",
  },
  {
    id: "5",
    name: "Carlos D.",
    location: "Lucerne Valley, CA",
    rating: 5,
    service: "UTV Wrap",
    text: "Had Prime Surface wrap my Polaris RZR Pro R from factory red to a desert sand camo with sponsor logos and race numbers — the rig looks unreal at Glamis. They removed the doors and bedsides to wrap them clean off the chassis, and added XPEL PPF on the front fascia for rock protection. A full season later and the wrap still looks brand new. These guys understand off-road builds.",
  },
  {
    id: "6",
    name: "Angela V.",
    location: "Chino, CA",
    rating: 5,
    service: "Car Wrap",
    text: "I wrapped my white Suburban in a deep gloss midnight blue and the result is stunning. Prime Surface's installers were meticulous — every edge, every mirror cap, every door jamb was wrapped clean. Polite staff, clean shop, kept me posted with photos during the install. I'll never paint a car again.",
  },
  {
    id: "7",
    name: "Kevin S.",
    location: "Claremont, CA",
    rating: 5,
    service: "Architectural Wrap",
    text: "Had them wrap the elevator doors and reception desk at our office building — the place looks completely refreshed without a full renovation. The DI-NOC film they used looks exactly like brushed steel. Nobody can believe it's a wrap. Saved us tens of thousands vs. replacing the surfaces. Brilliant work and a great team.",
  },
  {
    id: "8",
    name: "Daniel H.",
    location: "Riverside, CA",
    rating: 5,
    service: "Brand Identity + Logo Design",
    text: "Hired Prime Surface to rebrand my detailing business from the ground up — logo, color palette, business cards, vehicle livery on my service van, the works. Their designer understood what I wanted immediately and the final identity is sharper than anything I've seen from much bigger agencies. The wrap on my van turns heads daily.",
  },
];
