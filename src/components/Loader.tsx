"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#020408]"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      exit={{ y: "-100vh" }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter"
        >
          SPR
        </motion.div>
        <motion.div
          className="absolute inset-0 text-cyan-400 text-6xl md:text-8xl font-display font-bold tracking-tighter mix-blend-screen"
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [-5, 5, -2, 2, 0],
            opacity: [0, 0.8, 0, 0.5, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            times: [0, 0.2, 0.4, 0.6, 1],
          }}
        >
          SPR
        </motion.div>
        <motion.div
          className="absolute inset-0 text-violet-500 text-6xl md:text-8xl font-display font-bold tracking-tighter mix-blend-screen"
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [5, -5, 2, -2, 0],
            opacity: [0, 0.8, 0, 0.5, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            times: [0, 0.2, 0.4, 0.6, 1],
          }}
        >
          SPR
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 w-48 h-[2px] bg-white/10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-cyan-400"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
