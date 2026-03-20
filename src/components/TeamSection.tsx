import SectionReveal from "./SectionReveal";

const team = [
  {
    name: "Norm Zillman",
    role: "Chair (Co-Founder)",
    quals: "BSc(Hons), MPESA, MAusIMM",
    bio: "Geologist with 50 years of experience. Founding MD of Queensland Gas NL ($5B), Great Artesian Oil & Gas, Blue Energy, Hot Rock and Real Energy. Working in geothermal since 2006.",
    photo: "/images/team-norm-zillman.jpg",
  },
  {
    name: "Dr Mark Elliott",
    role: "Managing Director (Co-Founder)",
    quals: "Dip.App.Geol, PhD, FAusIMM, FAIG, FAICD, MAGA",
    bio: "Economic geologist with 40+ years in exploration and project development. Co-founding director of Hot Rock Ltd and several mining companies. In geothermal since 2006.",
    photo: "/images/team-bob-graham.jpg",
  },
  {
    name: "Bob Graham",
    role: "Director",
    quals: "BEng (Mech), MBA, MIEAust, GAICD",
    bio: "Engineer with 40+ years in the electricity industry, from power stations to privatisations at Hazelwood and Loy Yang. Former director of McLennan Magasanik Associates.",
    photo: "/images/team-mark-elliott.jpg",
  },
  {
    name: "Luis Urzua",
    role: "Geothermal Consultant",
    quals: "BSc (Geol), MSc, MGRC",
    bio: "Geothermal geologist with 24 years experience in exploration, resource assessment and operations. Involved in drilling 40 wells to depths of up to 3,800m across multiple countries.",
    photo: "/images/team-luis-urzua.jpg",
  },
  {
    name: "Randall Taylor",
    role: "Geophysicist Consultant",
    quals: "BSc App (Geophysics), SEG, ASEG",
    bio: "40+ years in seismic interpretation, survey design and data-processing. Over 10 years as Chief Geophysicist for Origin Energy. Specialist in petroleum, geothermal and mineral systems.",
    photo: "/images/team-randall-taylor.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-3">Leadership</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-16">
            Experienced Board &amp; Consultants
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover shrink-0 shadow-sm"
                    style={{ objectPosition: "center 20%" }}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-serif text-lg text-foreground leading-tight">{person.name}</h3>
                    <p className="text-primary text-sm font-medium">{person.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/70 mb-3">{person.quals}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
