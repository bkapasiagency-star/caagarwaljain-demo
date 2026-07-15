import { useEffect } from "react";
import { FIRM_DETAILS, SERVICES, PARTNERS } from "../data";

/**
 * StructuredData component dynamically generates and injects JSON-LD schema scripts 
 * for 'Organization' and 'ProfessionalService' (specifically 'AccountingService') 
 * into the document <head>.
 */
export default function StructuredData() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const origin = window.location.origin || "https://caagarwaljain.com";

    // 1. Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      "name": FIRM_DETAILS.name,
      "legalName": `${FIRM_DETAILS.name}, ${FIRM_DETAILS.suffix}`,
      "url": origin,
      "logo": `${origin}/logo.png`,
      "email": FIRM_DETAILS.email,
      "telephone": FIRM_DETAILS.phone.replace(/\s+/g, ""), // strip spaces for tel schema
      "foundingDate": "2015-01-20", // Established 20 January 2015
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 420, 4th Floor, Avadh Arena, Above Croma, VIP Road, Vesu",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395007",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": FIRM_DETAILS.phone.replace(/\s+/g, ""),
          "contactType": "customer service",
          "email": FIRM_DETAILS.email,
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        }
      ],
      "founder": PARTNERS.map(partner => ({
        "@type": "Person",
        "name": partner.name,
        "jobTitle": partner.designation,
        "knowsAbout": partner.areasOfExpertise
      }))
    };

    // 2. ProfessionalService (AccountingService) Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "@id": `${origin}/#service`,
      "name": FIRM_DETAILS.name,
      "description": "Chartered Accountants firm in Surat providing statutory audits, direct & indirect taxation, and corporate compliance services.",
      "image": `${origin}/hero-preview.jpg`, // fallback hero preview asset
      "telephone": FIRM_DETAILS.phone.replace(/\s+/g, ""),
      "email": FIRM_DETAILS.email,
      "url": origin,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 420, 4th Floor, Avadh Arena, Above Croma, VIP Road, Vesu",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395007",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1435212,
        "longitude": 72.7845347
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:30",
          "closes": "19:30"
        }
      ],
      "knowsAbout": SERVICES.map(s => s.title),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Professional CA Services",
        "itemListElement": SERVICES.map((service, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "AccountingService",
              "name": FIRM_DETAILS.name,
              "telephone": FIRM_DETAILS.phone.replace(/\s+/g, "")
            }
          }
        }))
      }
    };

    // Helper to inject structured data tag
    const injectSchema = (id: string, schema: object) => {
      let scriptTag = document.getElementById(id) as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = id;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema, null, 2);
    };

    // Inject both schemas
    injectSchema("jsonld-organization", orgSchema);
    injectSchema("jsonld-professional-service", serviceSchema);

    // Log for verification in DevTools console (highly structured and professional)
    console.log("SEO Engine: Dynamically injected JSON-LD Structured Data tags (Organization & ProfessionalService/AccountingService) in document head.");

    // Cleanup when component unmounts
    return () => {
      const orgTag = document.getElementById("jsonld-organization");
      const serviceTag = document.getElementById("jsonld-professional-service");
      if (orgTag) orgTag.remove();
      if (serviceTag) serviceTag.remove();
    };
  }, []);

  return null; // This component runs in the background and renders no visible UI elements
}
