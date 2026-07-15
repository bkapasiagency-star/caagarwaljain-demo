import { useEffect } from "react";

interface HeadSEOProps {
  title: string;
  description: string;
  lang?: string;
  robots?: string;
}

/**
 * HeadSEO component
 * Dynamically synchronizes document metadata (title, meta description, lang tag, 
 * social graph, and robots instructions) for each view.
 * 
 * Also serves as an accessibility aid by updating document attributes and 
 * optionally alerting screen readers of the view change.
 */
export default function HeadSEO({
  title,
  description,
  lang = "en-IN", // Indian English locale as standard for Surat-based CA firm
  robots = "index, follow",
}: HeadSEOProps) {
  useEffect(() => {
    // 1. Update document lang and direction
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", "ltr");

    // 2. Update page Title
    document.title = title;

    // Helper to safely select, create or update head elements
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relValue);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefValue);
    };

    // 3. Set standard SEO and screen reader meta tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="robots"]', "name", "robots", robots);
    
    // 4. OpenGraph Social Card tags (improves sharing UX)
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:locale"]', "property", "og:locale", lang.replace("-", "_"));
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Agarwal & Jain Chartered Accountants");

    // 5. Twitter Card tags
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);

    // 6. Set canonical URL dynamically
    if (typeof window !== "undefined") {
      setLinkTag("canonical", window.location.origin + window.location.pathname);
    }
  }, [title, description, lang, robots]);

  return null;
}
