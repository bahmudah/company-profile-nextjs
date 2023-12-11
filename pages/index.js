import HeaderHero from "../components/HeaderHero";
import AboutUsSection from "../components/AboutUsSection";
import SkillSection from "../components/ServicesSection";
import ProjectSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderHero />
      <AboutUsSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
