import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

const FAQSchema = ({ items }: FAQSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-faq", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [items]);

  return null;
};

export default FAQSchema;
