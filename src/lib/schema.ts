import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoBodyShop"],
    "@id": siteConfig.url,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-default.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
      siteConfig.social.google,
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function serviceSchema(serviceName: string, description: string, serviceUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      address: siteConfig.address.full,
      telephone: siteConfig.contact.phone,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({ "@type": "City", name: city })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
