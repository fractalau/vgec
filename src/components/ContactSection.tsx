import SectionReveal from "./SectionReveal";

const ContactSection = () => {
  return (
    <section id="contact" aria-label="Contact information" className="py-24 md:py-32 bg-earth-dark text-primary-foreground">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance mb-6">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-12">
            VGEC is seeking partners and investors for our Proof-of-Concept program. We welcome enquiries about the Koroit Geothermal Power Project.
          </p>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 md:p-12 max-w-lg mx-auto">
            <address className="not-italic">
              <h3 className="font-serif text-2xl mb-6">Dr Mark Elliott</h3>
              <p className="text-primary-foreground/70 mb-1">Managing Director</p>
              <p className="text-primary-foreground/70 mb-6">Victorian Geothermal Energy Company Pty Ltd</p>

              <div className="space-y-3">
                <a
                  href="tel:+61409998840"
                  className="flex items-center justify-center gap-3 text-primary-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>0409 998 840</span>
                </a>
                <a
                  href="mailto:mark.elliott@vgec.com.au"
                  className="flex items-center justify-center gap-3 text-primary-foreground hover:text-primary transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>mark.elliott@vgec.com.au</span>
                </a>
              </div>
            </address>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ContactSection;
