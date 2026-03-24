import SectionReveal from "./SectionReveal";

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tower-hill-aerial.jpg')" }}
        role="presentation"
      />
      <div className="absolute inset-0 bg-earth-dark/65" role="presentation" />

      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding py-32">
        <p
          className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-[0.2em] mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Victorian Geothermal Energy Company Pty Ltd
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] text-balance mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Koroit Geothermal Power Project
        </h1>
        <p
          className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Advancing next-generation geothermal energy in South-Western Victoria, Australia.
          Right Project, Right Time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm rounded transition-all duration-200 hover:bg-primary-foreground/10 active:scale-[0.97]"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
