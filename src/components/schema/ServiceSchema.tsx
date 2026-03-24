import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/config/seo";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: { name: string; url: string };
  areaServed?: string;
  serviceType?: string;
}

const ServiceSchema = ({
  name,
  description,
  url,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: provider ?? {
      "@type": "Organization",
      name: seoConfig.business.legalName,
      url: seoConfig.siteUrl,
    },
    ...(areaServed && { areaServed }),
    ...(serviceType && { serviceType }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ServiceSchema;
