import SectionReveal from "./SectionReveal";

const phases = [
  {
    phase: "Phase 1",
    title: "Proof of Concept",
    steps: [
      "Update velocity, seismic and temperature models",
      "Complete well designs, approvals and award tenders",
      "Drill first deep deviated appraisal-production well (KRT-1)",
      "Drill second appraisal-production well (KRT-2)",
      "Feasibility study for ~10 MWe demonstration plant",
    ],
  },
  {
    phase: "Phase 2",
    title: "Demonstration Plant",
    steps: ["Development and operation of a 10 MWe demonstration power plant"],
  },
  {
    phase: "Phase 3",
    title: "Production Expansion",
    steps: ["Development and operation of a 50 MWe generation expansion plant"],
  },
  {
    phase: "Phase 4",
    title: "Full Scale",
    steps: ["Development of a further 400 MWe using standardised 100 MWe plant modules"],
  },
];

const TimelineSection = () => {
  return (
    <section id="phases" aria-label="Project phases" className="py-24 md:py-32 bg-earth-warm">
      <div className="max-w-5xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Development Roadmap</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-16">
            Project Phases
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/20" aria-hidden="true" />

          <ol className="space-y-12 list-none p-0 m-0">
            {phases.map((phase, i) => (
              <SectionReveal key={i} delay={i * 120}>
                <li className="relative pl-12 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" aria-hidden="true" />

                  <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">{phase.phase}</span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.steps.map((step, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2 shrink-0" aria-hidden="true" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
