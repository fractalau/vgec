import SectionReveal from "./SectionReveal";

const newsItems = [
  {
    headline: "[NEWS HEADLINE 1]",
    date: "[DATE]",
    summary: "[SUMMARY — 1-2 sentence description of the news item.]",
  },
  {
    headline: "[NEWS HEADLINE 2]",
    date: "[DATE]",
    summary: "[SUMMARY — 1-2 sentence description of the news item.]",
  },
  {
    headline: "[NEWS HEADLINE 3]",
    date: "[DATE]",
    summary: "[SUMMARY — 1-2 sentence description of the news item.]",
  },
];

const NewsSection = () => {
  return (
    <section id="news" aria-label="Latest news" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Latest Updates</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-16">
            News
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <time className="text-xs font-medium text-primary uppercase tracking-wider mb-3">{item.date}</time>
                <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">{item.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.summary}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
