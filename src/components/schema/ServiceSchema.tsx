import { useEffect } from "react";
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
  useEffect(() => {
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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-service", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [name, description, url, provider, areaServed, serviceType]);

  return null;
};

export default ServiceSchema;
