"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import GlassCard from "./GlassCard";

const education = [
  {
    degree: "B.Tech CSE / Machine Learning",
    institution: "Lovely Professional University, Punjab",
    date: "2021–2025",
    courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Structures", "Algorithms"],
  },
  {
    degree: "Intermediate MPC",
    institution: "Sri Chaitanya, Hyderabad",
    date: "2019–2021",
    grade: "77%",
    courses: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "SSC 10th",
    institution: "High School",
    date: "2019",
    grade: "98%",
    courses: [],
  },
];

export default function EducationSection() {
  return (
    <section className="py-24 relative z-10" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Academic <span className="text-violet-400">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-magenta-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-violet-500 to-magenta-500"
              initial={{ y: "-100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {education.map((edu, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Glowing Node */}
                  <div className="absolute left-[-16px] md:left-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center transform translate-x-[-12px] md:-translate-x-1/2 z-10 border-violet-500/50 shadow-[0_0_15px_rgba(123,47,255,0.5)]">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full pl-8 md:pl-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <GlassCard className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-display font-bold text-white">{edu.degree}</h3>
                        <span className="text-xs font-mono px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-full whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      
                      <div className="text-gray-300 font-sans mb-4">{edu.institution}</div>
                      
                      {edu.grade && (
                        <div className="inline-block px-3 py-1 mb-6 bg-black/30 border border-white/5 rounded-md">
                          <span className="text-sm font-mono font-bold text-cyan-400">{edu.grade}</span>
                        </div>
                      )}

                      {edu.courses.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-400"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
