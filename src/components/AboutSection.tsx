"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";

// Counter hook
function useCounter(end: number, duration: number) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return { count, setHasStarted };
}

export default function AboutSection() {
  const { count: projectsCount, setHasStarted: startProjects } = useCounter(4, 2000);
  const { count: papersCount, setHasStarted: startPapers } = useCounter(1, 1000);
  const { count: accCount, setHasStarted: startAcc } = useCounter(93, 2000);
  const { count: studentsCount, setHasStarted: startStudents } = useCounter(120, 2500);

  return (
    <section className="py-24 relative z-10" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 gap-6 md:gap-8 max-w-6xl mx-auto h-[600px] md:h-[400px]">
          
          {/* Panel 1: Bio */}
          <div className="md:col-span-2 row-span-1 h-full">
            <GlassCard delay={0.1} tilt className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Who I am
              </h3>
              <p className="text-lg text-gray-300 font-sans leading-relaxed">
                I am an Emerging Machine Learning Engineer specializing in Deep Learning & Computer Vision.
                Passionate about building intelligent systems, I thrive on solving complex, data-driven problems.
                Whether it's developing robust CNNs for disease tracking or optimizing time-series prediction models,
                I bring a collaborative spirit and a researcher's rigor to every project.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-mono">
                  B.Tech CSE/ML
                </div>
                <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-mono">
                  Published Researcher
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Panel 2: Avatar placeholder */}
          <div className="col-span-1 row-span-1 h-full">
            <GlassCard delay={0.2} tilt className="h-full flex items-center justify-center p-0 overflow-hidden">
              <div className="relative w-48 h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                {/* Orbital Rings */}
                <div 
                  className="absolute inset-[-20%] rounded-full border border-cyan-400/30 border-dashed"
                  style={{ animation: "orbit 20s linear infinite" }}
                />
                <div 
                  className="absolute inset-[-40%] rounded-full border border-violet-500/20 border-dotted"
                  style={{ animation: "orbit 30s linear infinite reverse" }}
                />
                
                {/* Center Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-xl" />
                <span className="text-4xl font-display font-bold text-white/50 z-10">SPR</span>
              </div>
            </GlassCard>
          </div>
          
          {/* Panel 3: Stats */}
          <div className="md:col-span-3 row-span-1 h-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              onViewportEnter={() => {
                startProjects(true);
                startPapers(true);
                startAcc(true);
                startStudents(true);
              }}
              className="glass-panel p-8 grid grid-cols-2 md:grid-cols-4 gap-8 h-full items-center"
            >
              {[
                { label: "Projects Built", count: projectsCount, suffix: "+" },
                { label: "Research Paper", count: papersCount, suffix: "" },
                { label: "Best Accuracy", count: accCount, suffix: "%" },
                { label: "Students Mentored", count: studentsCount, suffix: "+" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-2">
                    {stat.count}{stat.suffix}
                  </div>
                  <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
