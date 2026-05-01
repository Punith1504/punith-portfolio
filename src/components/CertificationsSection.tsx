"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Natural Language Processing (4 Certs)", issuer: "Coursera", link: "#" },
  { name: "Data Structures & Algorithms", issuer: "UC San Diego", link: "#" },
  { name: "Interactive Computer Graphics", issuer: "University of Tokyo", link: "#" },
  { name: "Computer Networking", issuer: "Google", link: "#" },
  { name: "Genome Assembly", issuer: "UC San Diego", link: "#" },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden" id="certifications">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Continuous <span className="text-cyan-400">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        {/* Transparent gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020408] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020408] to-transparent z-10" />
        
        {/* Scrolling Track */}
        <motion.div
          className="flex gap-6 py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate the array for infinite scroll effect */}
          {[...certifications, ...certifications].map((cert, i) => (
            <div
              key={i}
              className="w-80 flex-shrink-0 glass-panel p-6 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] transition-shadow group/card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <a href={cert.link} className="p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover/card:text-cyan-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm font-sans text-gray-400">
                Issued by <span className="text-gray-200">{cert.issuer}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
