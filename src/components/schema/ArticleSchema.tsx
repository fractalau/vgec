import { Helmet } from "react-helmet-async";

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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ArticleSchema;
