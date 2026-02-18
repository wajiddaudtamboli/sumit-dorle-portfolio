import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsSection from "@/components/portfolio/StatsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ExpertiseSection />
    <ExperienceSection />
    <AchievementsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
