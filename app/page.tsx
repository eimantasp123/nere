import AboutMe from "@/components/AboutMe";
import BlogsSection from "@/components/BlogsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import ScrollHeader from "@/components/ScrollHeader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="font-jakarta">
      <Header />
      <ScrollHeader />
      <HeroSection />
      <OurMission />
      <AboutMe />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
      <BlogsSection />
      <Footer />
    </div>
  );
}
