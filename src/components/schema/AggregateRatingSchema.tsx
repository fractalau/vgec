import { useHead } from "@unhead/react";

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
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": itemReviewed.type,
          name: itemReviewed.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount,
          },
        }),
      },
    ],
  });

  return null;
};

export default AggregateRatingSchema;
