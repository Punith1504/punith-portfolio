"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: boolean;
}

export default function GlassCard({ children, className = "", delay = 0, tilt = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={`glass-panel p-8 relative overflow-hidden group ${className}`}
      whileHover={tilt ? { scale: 1.02, rotateX: 2, rotateY: -2 } : {}}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
