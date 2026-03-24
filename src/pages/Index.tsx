import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologySection from "@/components/TechnologySection";
import ResourceSection from "@/components/ResourceSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/schema/FAQSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { seoConfig } from "@/config/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="VGEC — Koroit Geothermal Power Project, Victoria"
        description="Victorian Geothermal Energy Company — advancing the Koroit Geothermal Power Project with next-generation geothermal technologies in South-Western Victoria, Australia."
        canonical={seoConfig.siteUrl}
      />
      <BreadcrumbSchema
        items={[{ name: "Home", url: seoConfig.siteUrl }]}
      />
      <FAQSchema
        items={[
          {
            question: "What is the Koroit Geothermal Power Project?",
            answer:
              "The Koroit Geothermal Power Project is an advanced geothermal energy project in South-Western Victoria, Australia. It targets a naturally fractured Hot Sedimentary Aquifer with the potential to generate over 1,400 MW of renewable baseload electricity for 30+ years.",
          },
          {
            question: "Does the Koroit project require fracking?",
            answer:
              "No. The Koroit project targets a naturally fractured sandstone reservoir, so no hydraulic fracturing (fracking) is required and there is no risk of damaging seismicity.",
          },
          {
            question: "What is the geothermal resource at Koroit?",
            answer:
              "The Koroit Hot Sedimentary Aquifer holds an estimated 66,100 PJ of in-place stored heat energy. Using only 15% of the stored heat, it is capable of generating 1,400 MWe for over 30 years.",
          },
          {
            question: "Who is behind VGEC?",
            answer:
              "Victorian Geothermal Energy Company Pty Ltd (VGEC) is led by experienced geologists and engineers including Chair Norm Zillman, Managing Director Dr Mark Elliott, and Director Bob Graham, with specialist geothermal and geophysics consultants.",
          },
        ]}
      />
      <ServiceSchema
        name="Geothermal Energy Development"
        description="Development of the Koroit Geothermal Power Project — a 1,400 MW baseload renewable energy resource in South-Western Victoria, Australia."
        url={seoConfig.siteUrl}
        areaServed="Victoria, Australia"
        serviceType="Renewable Energy Development"
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TechnologySection />
        <ResourceSection />
        <TimelineSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
