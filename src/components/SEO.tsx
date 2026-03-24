import { useHead } from '@unhead/react'
import { seoConfig } from '@/config/seo'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  schema?: object | object[]
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  schema,
}: SEOProps) => {
  const resolvedTitle = title ?? seoConfig.defaultTitle
  const resolvedDescription = description ?? seoConfig.defaultDescription
  const resolvedOgImage = ogImage ?? seoConfig.defaultOgImage
  const resolvedCanonical = canonical ?? seoConfig.siteUrl

  const schemaArray = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : []

  useHead({
    title: resolvedTitle,
    meta: [
      { name: 'description', content: resolvedDescription },
      { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
      // Open Graph
      { property: 'og:title', content: resolvedTitle },
      { property: 'og:description', content: resolvedDescription },
      { property: 'og:image', content: resolvedOgImage },
      { property: 'og:url', content: resolvedCanonical },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: seoConfig.siteName },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: resolvedTitle },
      { name: 'twitter:description', content: resolvedDescription },
      { name: 'twitter:image', content: resolvedOgImage },
    ],
    link: [
      { rel: 'canonical', href: resolvedCanonical },
    ],
    script: schemaArray.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })

  return null
}
