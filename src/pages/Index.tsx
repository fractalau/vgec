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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <TechnologySection />
      <ResourceSection />
      <TimelineSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
