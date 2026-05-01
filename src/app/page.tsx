"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import FloatingOrbs from "@/components/FloatingOrbs";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import LeadershipSection from "@/components/LeadershipSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main className="relative bg-[#020408] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-magenta-500 transform origin-left z-50"
            style={{ scaleX }}
          />
          
          <Navbar />
          <FloatingOrbs />
          
          <HeroSection />
          
          {/* Section Dividers (Animated Gradient Waves) are simulated with spacing and background gradients */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020408] to-transparent z-10" />
            <AboutSection />
          </div>
          
          <SkillsSection />
          <ProjectsSection />
          <ResearchSection />
          <LeadershipSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-8 text-center text-gray-500 font-mono text-sm border-t border-white/5 relative z-10">
            <p>© {new Date().getFullYear()} Andluru Sai Punith Reddy. Built with Next.js & Framer Motion.</p>
          </footer>
        </main>
      )}
    </>
  );
}
