import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { BuyerJourney } from "@/components/BuyerJourney";
import { CaseStudies } from "@/components/CaseStudies";
import { TechnicalResources } from "@/components/TechnicalResources";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'resources', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <Hero />
      <ValueProposition />
      <About />
      <Products />
      <BuyerJourney />
      <CaseStudies />
      <div id="resources">
        <TechnicalResources />
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
