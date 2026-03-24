import { useHead } from "@unhead/react";

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
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          headline,
          description,
          author: { "@type": "Person", name: author },
          datePublished,
          ...(dateModified && { dateModified }),
          ...(image && { image }),
          url,
        }),
      },
    ],
  });

  return null;
};

export default ArticleSchema;
