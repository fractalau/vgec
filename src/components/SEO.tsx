import { useEffect } from "react";
import { seoConfig } from "@/config/seo";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (attr: string, value: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  canonical = seoConfig.siteUrl,
  ogImage = seoConfig.defaultOgImage,
  ogType = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", seoConfig.siteName);
    if (ogImage) setMeta("property", "og:image", ogImage);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (ogImage) setMeta("name", "twitter:image", ogImage);
    if (seoConfig.twitterHandle) {
      setMeta("name", "twitter:site", seoConfig.twitterHandle);
    }

    // JSON-LD: Organisation
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": seoConfig.businessType,
      name: seoConfig.business.legalName,
      url: seoConfig.siteUrl,
      logo: `${seoConfig.siteUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoConfig.business.phone,
        contactType: "customer service",
      },
      address: {
        "@type": "PostalAddress",
        ...seoConfig.business.address,
      },
      sameAs: seoConfig.sameAs,
    };

    // JSON-LD: WebSite
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Inject all JSON-LD scripts
    const allSchemas = [orgSchema, websiteSchema, ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];
    
    // Remove previous SEO JSON-LD scripts
    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());

    allSchemas.forEach((s) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    };
  }, [title, description, canonical, ogImage, ogType, noIndex, schema]);

  return null;
};

export default SEO;
