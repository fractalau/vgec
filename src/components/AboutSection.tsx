import SectionReveal from "./SectionReveal";

const highlights = [
  "Advanced geothermal project at Proof-of-Concept stage",
  "100% owned Geothermal Retention Lease (GRL007012) — second ever granted in Australia",
  "Naturally fractured Hot Sedimentary Aquifer — no fracking required",
  "Potential to generate over 1,400 MW of electricity for 30+ years",
  "Next-generation technologies driving costs toward US$50/MWh by 2030",
  "Seeking partners and investors for Proof-of-Concept program",
];

const AboutSection = () => {
  return (
    <section id="about" aria-label="About the Project" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">About the Project</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-6">
            A Step-Change in Geothermal Energy
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Koroit is an advanced geothermal power project benefiting from a global revolution in next-generation technologies that are driving down costs and commercialising geothermal projects worldwide.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          {highlights.map((item, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div className="flex gap-4 items-start py-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
