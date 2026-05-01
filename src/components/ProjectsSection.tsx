"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GlassCard from "./GlassCard";

const projects = [
  {
    title: "ASD Behavioral Tracking System",
    date: "March 2025",
    description: "Computer Vision system for tracking behavioral patterns in Autism Spectrum Disorder patients.",
    metric: "~85% Accuracy | 40% Efficiency Gain",
    tags: ["OpenCV", "CNN", "Computer Vision"],
    github: "https://github.com/Punith1504",
    isPublished: false,
  },
  {
    title: "Stock Market Prediction",
    date: "Jan 2025",
    description: "Time series forecasting model utilizing LSTM and RNN architectures to predict market trends.",
    metric: "87% Prediction Accuracy",
    tags: ["LSTM", "RNN", "Time Series", "TensorFlow"],
    github: "https://github.com/Punith1504",
    isPublished: false,
  },
  {
    title: "Deepfake Detection",
    date: "Aug 2024",
    description: "Advanced deepfake detection model using Transfer Learning and Convolutional Neural Networks.",
    metric: "93% Detection Accuracy",
    tags: ["EfficientNetB0", "CNN", "PyTorch"],
    github: "https://github.com/Punith1504",
    isPublished: false,
  },
  {
    title: "YOLOv7 Violence Detection",
    date: "Jul–Dec 2024",
    description: "Real-time violence detection on surveillance cameras with automated SMTP email alerts.",
    metric: "📄 Published in IJCSE | Impact Factor 9.05",
    tags: ["YOLOv7", "Transfer Learning", "SMTP Alerts"],
    github: "https://github.com/Punith1504",
    isPublished: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 relative z-10" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Selected <span className="text-cyan-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <GlassCard
              key={i}
              delay={i * 0.1}
              tilt
              className={`flex flex-col h-full group ${project.isPublished ? "border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]" : ""}`}
            >
              {project.isPublished && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400">
                  {project.date}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 font-sans mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6 p-3 rounded-xl bg-black/20 border border-white/5">
                <div className={`text-sm font-mono font-bold ${project.isPublished ? "text-yellow-400" : "text-cyan-400"}`}>
                  {project.metric}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
