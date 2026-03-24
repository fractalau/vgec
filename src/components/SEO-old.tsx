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
  useSeoMeta({
    title,
    description,
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

  useHead({
    title,
    meta: [{ name: "description", content: description }],
  });

  return null;
};

export default SEO;
