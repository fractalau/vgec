import { useEffect } from "react";

interface AggregateRatingSchemaProps {
  itemReviewed: { type: string; name: string };
  ratingValue: number;
  reviewCount: number;
}

const AggregateRatingSchema = ({
  itemReviewed,
  ratingValue,
  reviewCount,
}: AggregateRatingSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": itemReviewed.type,
      name: itemReviewed.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-rating", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [itemReviewed, ratingValue, reviewCount]);

  return null;
};

export default AggregateRatingSchema;
