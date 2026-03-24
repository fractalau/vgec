import SectionReveal from "./SectionReveal";

const stats = [
  { value: "70%+", label: "Drilling cost reduction since 2021" },
  { value: "16 days", label: "To drill 4,805m (down from 70+ days)" },
  { value: "US$50/MWh", label: "Projected geothermal cost by 2030" },
  { value: "US$3B+", label: "Capital raised for next-gen geothermal since 2019" },
];

const TechnologySection = () => {
  return (
    <section id="technology" aria-label="Next-generation technology" className="py-24 md:py-32 bg-earth-dark text-primary-foreground">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <SectionReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Next-Gen Technology</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance mb-6">
              Technologies Reducing Costs Now
            </h2>
            <div className="space-y-5 text-primary-foreground/80 leading-relaxed">
              <p>
                A suite of next-generation technologies — including faster drilling with PDC bits, horizontal drilling with larger-diameter wells, and improved ORC plant efficiency — is dramatically reducing geothermal development costs.
              </p>
              <p>
                Drilling time has fallen from over 70 days for a 3,400m well to just 16 days for a 4,805m well in 2025. Gathering pipe system costs have dropped from 24% to just 2% of capital costs.
              </p>
              <p>
                HSA, EGS and AGS geothermal systems are commercial now. The IEA projects geothermal could grow from under 1% to 8% of global demand by 2050 — equivalent to 800 GW of new capacity.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/drilling-rig.jpg"
                  alt="Geothermal drilling rig operating at a well site"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/geothermal-model.jpg"
                  alt="Diagram of a closed-loop geothermal well technology model"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-primary/20 rounded-lg p-6 flex flex-col justify-center">
                <p className="text-sm text-primary-foreground/70 mb-1">Operating costs</p>
                <p className="font-serif text-2xl">Only 5%</p>
                <p className="text-sm text-primary-foreground/70">of capital costs (typical OPEX)</p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-primary mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
