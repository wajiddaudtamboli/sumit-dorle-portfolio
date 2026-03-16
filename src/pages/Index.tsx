import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsSection from "@/components/portfolio/StatsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import GallerySection from "@/components/portfolio/GallerySection";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import PartnerInstitutionsSection from "@/components/portfolio/PartnerInstitutionsSection";
import GlobalAdmissionProcessSection from "@/components/portfolio/GlobalAdmissionProcessSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <GallerySection />
    <ExpertiseSection />
    <PartnerInstitutionsSection />
    <GlobalAdmissionProcessSection />
    <ExperienceSection />
    <AchievementsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
