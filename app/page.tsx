"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import Animated3DHeaderV2 from '@/components/sections/Animated3DHeaderV2';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      let current = 'home'; // Default to home
      
      // Check if we're at the very top of the page
      if (window.scrollY < 200) {
        current = 'home';
      } else {
        // Find the section that's currently in view
        const sectionInView = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (sectionInView) {
          current = sectionInView;
        } else {
          // If no section is in the viewport, find the closest one
          let closestSection = 'home';
          let closestDistance = Infinity;
          
          sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
              }
            }
          });
          
          current = closestSection;
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call immediately to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onScrollToSection={scrollToSection} 
      />
      <Animated3DHeaderV2 />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}