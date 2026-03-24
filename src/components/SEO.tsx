import { Helmet } from "react-helmet-async";
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
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

  // Global schemas injected on every page
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {seoConfig.twitterHandle && (
        <meta name="twitter:site" content={seoConfig.twitterHandle} />
      )}

      {/* Global JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Page-specific JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
