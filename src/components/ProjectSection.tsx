import SectionReveal from "./SectionReveal";

const advantages = [
  { title: "Known Geology", desc: "Extensive petroleum well and seismic survey data provide detailed understanding of geology, structure and temperature." },
  { title: "Close to Market", desc: "Adjacent to a major 500kV transmission line and electricity markets in South-Western Victoria." },
  { title: "Granted Lease", desc: "12-year Geothermal Retention Lease (GRL007012) granted in August 2023, with pathway to extraction licence." },
  { title: "No Fracking Required", desc: "Naturally fractured sandstone reservoir — no hydraulic fracturing needed and no damaging seismicity." },
];

const benefits = [
  "Renewable, baseload (24/7) and scalable energy",
  "Helps stabilise the electricity grid",
  "Clean and net-zero greenhouse gas emissions",
  "Small land footprint — 1Ha geothermal equals 35Ha solar PV",
  "Additional applications: industrial heat and geothermal tourism",
];

const ProjectSection = () => {
  return (
    <section id="project" aria-label="Why Koroit" className="py-24 md:py-32 bg-earth-warm">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Why Koroit</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-16">
            Advantages That Mitigate Risk
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {advantages.map((item, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <article className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Benefits of Geothermal Energy</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/australia-temperature-map.jpg"
                alt="Australia projected temperature at 5km depth showing geothermal potential across the continent"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProjectSection;
