"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, ExternalLink } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ResearchSection() {
  return (
    <section className="py-24 relative z-10" id="research">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Published <span className="text-magenta-400">Research</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard tilt className="relative overflow-hidden group border-magenta-500/30">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-magenta-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 grid md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-40 bg-white/5 border border-white/10 rounded-xl relative flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(255,60,172,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <FileText className="w-16 h-16 text-magenta-400 opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full" />
                  <div className="absolute bottom-7 left-4 right-8 h-1 bg-white/10 rounded-full" />
                  <div className="absolute bottom-10 left-4 right-12 h-1 bg-white/10 rounded-full" />
                </motion.div>
              </div>

              <div className="md:col-span-3">
                <div className="inline-block px-3 py-1 bg-magenta-500/20 border border-magenta-500/30 rounded-full text-xs font-mono text-magenta-300 mb-4">
                  IJCSE Vol. 13, Issue 2, 2024 | IF: 9.05
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
                  Enhancing Violence Detection on Surveillance Cameras Using YOLOv7
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Developed a real-time object detection model focusing on violence recognition.",
                    "Leveraged YOLOv7 architecture and transfer learning for high accuracy.",
                    "Implemented automated SMTP email alerts for immediate threat notification."
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-sans">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-magenta-500/20 border border-magenta-500/50 rounded-full font-bold text-white hover:bg-magenta-500/30 transition-colors shadow-[0_0_15px_rgba(255,60,172,0.2)] hover:shadow-[0_0_30px_rgba(255,60,172,0.4)] backdrop-blur-md"
                >
                  Read Paper
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
