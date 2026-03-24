import { useEffect } from "react";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  type?: "Article" | "BlogPosting";
}

const ArticleSchema = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  type = "Article",
}: ArticleSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      headline,
      description,
      author: { "@type": "Person", name: author },
      datePublished,
      ...(dateModified && { dateModified }),
      ...(image && { image }),
      url,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-article", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [headline, description, author, datePublished, dateModified, image, url, type]);

  return null;
};

export default ArticleSchema;
