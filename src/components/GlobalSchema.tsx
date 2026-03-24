import { useHead } from '@unhead/react'
import { seoConfig } from '@/config/seo'

// Drop <GlobalSchema /> into App.tsx once — it injects Organisation
// and WebSite schema on every page automatically.

export const GlobalSchema = () => {
  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': seoConfig.businessType,
    name: seoConfig.business.name,
    legalName: seoConfig.business.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: seoConfig.business.phone,
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.business.address,
    },
    sameAs: seoConfig.socialProfiles,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(organisationSchema),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(websiteSchema),
      },
    ],
  })

  return null
}
