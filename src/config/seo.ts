// ============================================================
// FRACTAL — SEO / GEO / AEO Site Config
// Update all [PLACEHOLDER] values before going live.
// This file is the single source of truth for all meta tags,
// schema, and structured data across the site.
// ============================================================

export const seoConfig = {
  // Core
  siteName: '[SITE NAME]',
  siteUrl: 'https://[DOMAIN.COM]',
  defaultTitle: '[DEFAULT PAGE TITLE] | [SITE NAME]',
  defaultDescription: '[150-155 character description of the site]',
  defaultOgImage: 'https://[DOMAIN.COM]/images/og-default.jpg',
  twitterHandle: '@[TWITTERHANDLE]', // remove line if not applicable

  // Business details — used in Organisation schema
  business: {
    name: '[BUSINESS NAME]',
    legalName: '[LEGAL BUSINESS NAME PTY LTD]',
    phone: '[+61X XXXX XXXX]',
    email: '[EMAIL@DOMAIN.COM]',
    address: {
      streetAddress: '[STREET ADDRESS]',
      addressLocality: '[SUBURB]',
      addressRegion: '[STATE]',
      postalCode: '[POSTCODE]',
      addressCountry: 'AU',
    },
  },

  // Schema.org business type
  // Find the most specific type at: https://schema.org/LocalBusiness
  // Examples: LocalBusiness, ProfessionalService, MedicalBusiness,
  // LegalService, AccountingService, HomeAndConstructionBusiness,
  // HealthAndBeautyBusiness, FinancialService, TravelAgency
  businessType: '[SCHEMA_ORG_BUSINESS_TYPE]',

  // Social profiles — used in sameAs field of Organisation schema
  // Add full URLs to all active profiles. Remove unused lines.
  socialProfiles: [
    // 'https://www.linkedin.com/company/[HANDLE]',
    // 'https://www.facebook.com/[HANDLE]',
    // 'https://twitter.com/[HANDLE]',
    // 'https://www.instagram.com/[HANDLE]',
    // 'https://www.youtube.com/@[HANDLE]',
  ],

  // Founding year — used in Organisation schema
  foundingYear: '[YYYY]',
}
