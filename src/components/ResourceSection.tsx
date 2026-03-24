import SectionReveal from "./SectionReveal";

const ResourceSection = () => {
  return (
    <section id="resource" aria-label="Geothermal resource details" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">The Resource</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-6">
            1,400 MW Generation Potential
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-16">
            The Koroit Hot Sedimentary Aquifer holds an estimated 66,100 PJ of in-place stored heat energy, capable of generating 1,400 MWe for over 30 years using only 15% of the stored heat.
          </p>
        </SectionReveal>

        {/* Two equal blocks side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SectionReveal>
            <div className="bg-earth-warm rounded-lg p-6 md:p-8 h-full">
              <h3 className="font-serif text-xl text-foreground mb-5">Resource Estimate (P50)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold text-foreground" scope="col">Type</th>
                    <th className="text-right py-2 font-semibold text-foreground" scope="col">Area (km²)</th>
                    <th className="text-right py-2 font-semibold text-foreground" scope="col">Heat (PJ)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2.5">Indicated</td>
                    <td className="text-right tabular-nums">50</td>
                    <td className="text-right tabular-nums">7,620</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2.5">Inferred</td>
                    <td className="text-right tabular-nums">400</td>
                    <td className="text-right tabular-nums">58,500</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-foreground">Total</td>
                    <td className="text-right tabular-nums font-semibold text-foreground">450</td>
                    <td className="text-right tabular-nums font-semibold text-foreground">66,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="bg-earth-warm rounded-lg p-6 md:p-8 h-full">
              <h3 className="font-serif text-xl text-foreground mb-5">Key Details</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                  <span>Reservoir mainly within the Pretty Hill Formation — permeable, fractured coarse to fine-grained sandstone</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                  <span>Resource top at 130°C isotherm around 2.8 km depth, extending to 4 km</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                  <span>Highest geothermal gradient in the Otway Basin — up to 40°C/km</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                  <span>Resource estimation compliant with Australian Lexicon for Resources and Reserves (2010)</span>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>

        {/* Map below */}
        <SectionReveal delay={200}>
          <figure className="rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
            <img
              src="/images/grl-lease-map.jpg"
              alt="Map of Geothermal Retention Lease GRL7012 showing the Koroit project area near Warrnambool, South-Western Victoria"
              className="w-full h-auto"
              loading="lazy"
            />
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ResourceSection;
