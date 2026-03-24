import { useHead, useSeoMeta } from "@unhead/react";
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

const SEO = ({
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  canonical = seoConfig.siteUrl,
  ogImage = seoConfig.defaultOgImage,
  ogType = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  // SEO meta tags (render-time, SSG-safe)
  useSeoMeta({
    title,
    description,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: ogType as "website",
    ogSiteName: seoConfig.siteName,
    ogImage: ogImage || undefined,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage || undefined,
    ...(seoConfig.twitterHandle ? { twitterSite: seoConfig.twitterHandle } : {}),
  });

  // Canonical + global JSON-LD schemas
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

  const allSchemas = [orgSchema, websiteSchema, ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];

  useHead({
    link: [{ rel: "canonical", href: canonical }],
    script: allSchemas.map((s) => ({
      type: "application/ld+json",
      innerHTML: JSON.stringify(s),
    })),
  });

  return null;
};

export default SEO;
