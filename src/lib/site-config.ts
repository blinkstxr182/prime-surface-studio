export const siteConfig = {
  name: "Prime Surface Studio",
  tagline: "Premium Window Tinting & Vehicle Wraps",
  description:
    "Montclair's premier car wrap and window tinting specialists. Serving the Inland Empire with precision installations, premium materials, and lifetime warranties.",
  url: "https://www.primesurfacestudio.com",
  address: {
    street: "5505 Moreno St, Suite 105 B",
    city: "Montclair",
    state: "CA",
    zip: "91763",
    full: "5505 Moreno St, Suite 105 B, Montclair, CA 91763",
  },
  contact: {
    phone: "+15627339672",
    phoneDisplay: "(562) 733-9672",
    email: "info@primesurfacestudio.com",
  },
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 6:00 PM",
    weekend: "Sunday: Closed",
    shortWeekdays: "Mon–Sat 9AM–6PM",
  },
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
    google: "#",
  },
  geo: {
    lat: 34.0775,
    lng: -117.6897,
  },
  serviceArea: [
    "Montclair",
    "Ontario",
    "Pomona",
    "Upland",
    "Rancho Cucamonga",
    "Chino",
    "Claremont",
    "Fontana",
    "Inland Empire",
    "Los Angeles County",
    "San Bernardino County",
  ],
  priceRange: "$$",
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 87,
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.7!2d-117.6897!3d34.0775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5505+Moreno+St%2C+Suite+105+B%2C+Montclair%2C+CA+91763!5e0!3m2!1sen!2sus!4v1",
} as const;

export type SiteConfig = typeof siteConfig;
