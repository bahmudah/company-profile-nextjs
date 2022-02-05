import HeaderHero from '../components/HeaderHero';
import ProfileSection from '../components/ProfileSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeaderHero />
      <ProfileSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
