'use client'

export function StructuredData() {
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://ironairhc.com/#organization",
    "name": "Iron Air HC",
    "legalName": "Iron Air Heating & Cooling Inc.",
    "url": "https://ironairhc.com",
    "logo": "https://ironairhc.com/logo.avif",
    "description": "Professional HVAC services including installation, repair, and maintenance for residential and commercial properties. Licensed technicians with 24/7 emergency service.",
    "image": "https://ironairhc.com/logo.avif",
    "telephone": "+15551234567",
    "email": "ironairhc@gmail.comm",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street, Suite 100",
      "addressLocality": "Your City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Downtown"
      },
      {
        "@type": "City",
        "name": "Midtown"
      },
      {
        "@type": "City",
        "name": "Uptown"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ironairhc",
      "https://www.instagram.com/ironairhc",
      "https://www.linkedin.com/company/ironairhc",
      "https://twitter.com/ironairhc"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furnace Installation & Repair",
            "description": "Professional furnace installation, repair, and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Conditioning Services",
            "description": "Complete AC installation, repair, and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heat Pump Services",
            "description": "Heat pump installation, repair, and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency HVAC Service",
            "description": "24/7 emergency HVAC repair and service"
          }
        }
      ]
    }
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ironairhc.com/#organization",
    "name": "Iron Air HC",
    "url": "https://ironairhc.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ironairhc.com/logo.avif",
      "width": "400",
      "height": "400"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-365-888-5854",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": "US"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-365-888-5854",
        "contactType": "emergency service",
        "availableLanguage": ["English"],
        "areaServed": "US",
        "hoursAvailable": "24/7"
      }
    ]
  }

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Iron Air HC"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah Johnson"
    },
    "reviewBody": "Outstanding service from start to finish! The team at Iron Air HC installed our new heat pump system quickly and professionally. Highly recommend!"
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Services",
    "provider": {
      "@type": "HVACBusiness",
      "name": "Iron Air HC",
      "telephone": "+1-365-888-5854",
      "url": "https://ironairhc.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Your State"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Heating Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Furnace Repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Boiler Installation"
              }
            }
          ]
        }
      ]
    }
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer 24/7 emergency HVAC service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Iron Air HC provides 24/7 emergency HVAC service for heating and cooling emergencies. Our licensed technicians are available around the clock to help with urgent repairs."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve 18+ cities in the greater metropolitan area including Downtown, Midtown, Uptown, and surrounding communities. Contact us to confirm service availability in your specific location."
        }
      },
      {
        "@type": "Question",
        "name": "What is your warranty policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a comprehensive 10-year parts and labor warranty on all new HVAC installations. All repair work includes a 1-year labor warranty for your peace of mind."
        }
      },
      {
        "@type": "Question",
        "name": "Are your technicians licensed and certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Iron Air HC technicians are fully licensed, EPA certified, and continuously trained on the latest HVAC technologies and best practices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer financing options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible financing options to make your HVAC installation or repair more affordable. Contact us to learn about current financing promotions."
        }
      }
    ]
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ironairhc.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

