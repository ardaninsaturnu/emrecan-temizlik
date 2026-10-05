import { districts, faq, services } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Arama motorlarına iletilen yapısal veri.
 * Tek bir @graph içinde işletme, web sitesi ve sayfa tanımları toplanır.
 */
export function buildBusinessSchema() {
  const businessId = absoluteUrl("/#isletme");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        url: site.url,
        image: absoluteUrl("/opengraph-image"),
        logo: absoluteUrl("/logo.svg"),
        telephone: site.phone.e164,
        email: site.email.display,
        priceRange: "₺₺",
        foundingDate: String(site.foundingYear),
        currenciesAccepted: "TRY",
        paymentAccepted: "Nakit, Havale/EFT, Kredi Kartı",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.district,
          addressRegion: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: districts.map((district) => ({
          "@type": "City",
          name: `${district}, İstanbul`,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        sameAs: Object.values(site.social),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Temizlik hizmetleri",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              serviceType: service.title,
              areaServed: { "@type": "City", name: "İstanbul" },
              provider: { "@id": businessId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: site.url,
        name: site.name,
        inLanguage: "tr-TR",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#anasayfa"),
        url: site.url,
        name: `${site.name} — ${site.tagline}`,
        description: site.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": businessId },
        inLanguage: "tr-TR",
      },
    ],
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#sss"),
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
