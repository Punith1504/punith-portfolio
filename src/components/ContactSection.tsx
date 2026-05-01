"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-24 relative z-10" id="contact">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Mail, label: "Email", value: "punith.career@gmail.com", copy: true },
              { icon: Phone, label: "Phone", value: "628110341", copy: true },
              { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/saipunithreddy", link: "https://www.linkedin.com/in/saipunithreddy" },
              { icon: FaGithub, label: "GitHub", value: "github.com/Punith1504", link: "https://github.com/Punith1504" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glass-panel p-6 flex flex-col items-center text-center gap-4 cursor-pointer group ${i === 4 ? "sm:col-span-2" : ""}`}
                onClick={() => {
                  if (info.copy) copyToClipboard(info.value);
                  else if (info.link) window.open(info.link, "_blank");
                }}
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <info.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-400 mb-2">{info.label}</div>
                  <div className="text-lg font-sans text-white">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
