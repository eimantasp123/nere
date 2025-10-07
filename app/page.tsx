import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

/**
 * Home page component with various sections.
 * It includes HeroSection, OurMission, AboutMe, WhyChooseUs, Services, Testimonials, Contact, and BlogsSection.
 */
export default function Home() {
  return (
    <div className="font-jakarta">
      <HeroSection />
      <OurMission />
      <AboutMe />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
