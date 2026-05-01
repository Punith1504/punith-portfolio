"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, BrainCircuit, Database, Globe, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 85 },
    ],
    position: { top: "10%", left: "20%" },
  },
  {
    title: "ML/DL",
    icon: BrainCircuit,
    color: "violet",
    skills: [
      { name: "TensorFlow", level: 95 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "CNNs", level: 90 },
      { name: "RNNs/LSTM", level: 85 },
    ],
    position: { top: "30%", right: "15%" },
  },
  {
    title: "Data",
    icon: Database,
    color: "magenta",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "SciPy", level: 80 },
      { name: "Matplotlib/Seaborn", level: 90 },
    ],
    position: { bottom: "20%", left: "15%" },
  },
  {
    title: "Web/MLOps",
    icon: Globe,
    color: "emerald",
    skills: [
      { name: "Flask", level: 80 },
      { name: "OpenCV", level: 85 },
    ],
    position: { top: "50%", left: "40%" },
  },
  {
    title: "CS Core",
    icon: Lightbulb,
    color: "orange",
    skills: [
      { name: "DSA", level: 85 },
      { name: "Algorithms", level: 85 },
    ],
    position: { bottom: "10%", right: "30%" },
  },
];

const getColorClasses = (color: string) => {
  const map: Record<string, { border: string; bg: string; shadow: string; bar: string }> = {
    cyan: { border: "border-cyan-400/50", bg: "bg-cyan-400/10", shadow: "shadow-[0_0_20px_rgba(0,245,255,0.2)]", bar: "bg-cyan-400" },
    violet: { border: "border-violet-500/50", bg: "bg-violet-500/10", shadow: "shadow-[0_0_20px_rgba(123,47,255,0.2)]", bar: "bg-violet-500" },
    magenta: { border: "border-magenta-500/50", bg: "bg-magenta-500/10", shadow: "shadow-[0_0_20px_rgba(255,60,172,0.2)]", bar: "bg-magenta-500" },
    emerald: { border: "border-emerald-400/50", bg: "bg-emerald-400/10", shadow: "shadow-[0_0_20px_rgba(52,211,153,0.2)]", bar: "bg-emerald-400" },
    orange: { border: "border-orange-400/50", bg: "bg-orange-400/10", shadow: "shadow-[0_0_20px_rgba(251,146,60,0.2)]", bar: "bg-orange-400" },
  };
  return map[color] || map.cyan;
};

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Technical <span className="text-violet-400">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-magenta-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative h-[800px] w-full max-w-5xl mx-auto hidden md:block">
          {skillCategories.map((category, i) => {
            const colors = getColorClasses(category.color);
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={category.position}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  animate={{
                    y: isHovered ? 0 : [0, -15, 0],
                    x: isHovered ? 0 : [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative cursor-pointer"
                >
                  <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    className={`glass-panel rounded-full flex flex-col items-center justify-center p-6 border transition-colors duration-300 ${colors.border} ${isHovered ? colors.bg : "bg-white/5"} ${isHovered ? colors.shadow : ""}`}
                    style={{ width: isHovered ? "300px" : "150px", height: isHovered ? "300px" : "150px" }}
                  >
                    {!isHovered ? (
                      <>
                        <category.icon className="w-10 h-10 text-white mb-2" />
                        <span className="font-mono text-sm text-gray-300 font-bold">{category.title}</span>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full px-6 flex flex-col gap-4"
                      >
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <category.icon className="w-6 h-6 text-white" />
                          <span className="font-display font-bold text-white text-lg">{category.title}</span>
                        </div>
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-mono text-gray-300">{skill.name}</span>
                              <span className="text-xs font-mono text-white/50">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1 bg-black/50 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`h-full ${colors.bar}`}
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile Fallback Grid */}
        <div className="md:hidden grid gap-6">
          {skillCategories.map((category, i) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={i} className={`glass-panel p-6 border ${colors.border}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full ${colors.bg}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">{category.title}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                        <span className="text-xs font-mono text-white/50">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div className={`h-full ${colors.bar}`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
