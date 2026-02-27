export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Onzur Media Studio",
    "alternateName": "Onzur Marketing",
    "url": "https://onzur.com",
    "logo": "https://onzur.com/assets/images/onzur-logo-white.svg",
    "description": "Qatar's leading digital marketing agency specializing in video production, content creation, social media management, and web development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "Qatar"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+974-5999-0137",
      "contactType": "Customer Service",
      "areaServed": "QA",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.instagram.com/onzurmedia",
      "https://www.tiktok.com/@onzurmedia",
      "https://www.linkedin.com/company/onzurmedia"
    ],
    "founder": {
      "@type": "Person",
      "name": "Salman"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Onzur Media Studio",
    "image": "https://onzur.com/assets/images/onzur-logo-white.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "Qatar"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2854",
      "longitude": "51.5310"
    },
    "url": "https://onzur.com",
    "telephone": "+974-5999-0137",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Onzur Media Studio"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Qatar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Production",
            "description": "Professional video production services for brands and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "Engaging content creation for social media platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Complete social media management and growth services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development and design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPC Marketing",
            "description": "Pay-per-click advertising management and optimization"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
