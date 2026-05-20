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
    name: "Marcus T.",
    location: "Ontario, CA",
    rating: 5,
    service: "Ceramic Window Tint",
    text: "Absolutely blown away by the quality of work on my Tesla Model 3. The ceramic tint they installed blocks so much heat — my interior stays 20°F cooler on those scorching Inland Empire afternoons. The team was professional, fast, and the finish is flawless. No bubbles, no edges peeling. This is how window tinting should be done.",
  },
  {
    id: "2",
    name: "Stephanie R.",
    location: "Rancho Cucamonga, CA",
    rating: 5,
    service: "Full Car Wrap",
    text: "I wanted a matte black wrap for my Dodge Charger and Prime Surface Studio absolutely delivered. The color-change wrap looks factory — I can't believe how precise the edges are around the handles and mirrors. I've gotten so many compliments. Worth every penny. These guys are truly the best in the Inland Empire.",
  },
  {
    id: "3",
    name: "David L.",
    location: "Montclair, CA",
    rating: 5,
    service: "Home Window Tinting",
    text: "Had them tint the west-facing windows in my living room and the difference is incredible. Our energy bill dropped noticeably the first month. The film they used blocks UV without making the room feel dark. Their team was in and out in half a day, and the install looks completely professional. Highly recommend for any homeowners in Montclair.",
  },
  {
    id: "4",
    name: "Jasmine K.",
    location: "Pomona, CA",
    rating: 5,
    service: "Food Truck Wrap",
    text: "Our food truck has been getting so much more attention since Prime Surface Studio wrapped it. They took our design concept and made it pop on the truck — the colors are vivid and the print quality is exceptional. People stop us everywhere now just to ask about the truck. Best marketing investment we've made for our business.",
  },
  {
    id: "5",
    name: "Robert M.",
    location: "Upland, CA",
    rating: 5,
    service: "Fleet Wraps",
    text: "We had five company vans wrapped for our HVAC business. Prime Surface Studio was professional throughout — from the initial consultation to delivery. They kept the project on schedule and the branding looks consistent across all vehicles. Our crews get stopped regularly by potential customers who saw the vans. ROI has been incredible.",
  },
  {
    id: "6",
    name: "Angela V.",
    location: "Chino, CA",
    rating: 5,
    service: "Automotive Window Tint",
    text: "I drive a white Suburban and the heat inside was unbearable every summer. Prime Surface did XPEL ceramic tint on all windows and I genuinely cannot believe the difference. The privacy is amazing, the glare reduction while driving is huge, and it still passed the legal VLT requirements for California. Polite staff, clean shop, and done same day.",
  },
  {
    id: "7",
    name: "Kevin S.",
    location: "Claremont, CA",
    rating: 5,
    service: "Architectural Wrap",
    text: "Had them wrap the elevator doors and reception desk at our office building — the place looks completely refreshed without a full renovation. The DI-NOC film they used looks exactly like brushed steel. Nobody can believe it's a wrap. Saved us tens of thousands vs. replacing the surfaces. Brilliant work and a great team.",
  },
];
