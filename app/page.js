import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from './components/ExpertiseSection';
import WorksSection from './components/WorksSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <WorksSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
