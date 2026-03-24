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
import { seoConfig } from "@/config/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="VGEC — Koroit Geothermal Power Project, Victoria"
        description="Victorian Geothermal Energy Company — advancing the Koroit Geothermal Power Project with next-generation geothermal technologies in South-Western Victoria, Australia."
        canonical={seoConfig.siteUrl}
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
