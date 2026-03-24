import { Helmet } from "react-helmet-async";

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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default AggregateRatingSchema;
