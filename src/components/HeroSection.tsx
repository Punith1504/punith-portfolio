"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Particle neural network background
function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);
  const mousePosition = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particleCount = 2000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorCyan = new THREE.Color("#00f5ff");
    const colorViolet = new THREE.Color("#7b2fff");
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const mixedColor = colorCyan.clone().lerp(colorViolet, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        colors={colors}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroSection() {
  const [titleText, setTitleText] = useState("ANDLURU SAI PUNITH REDDY");
  const subtitles = [
    "Machine Learning Engineer",
    "Deep Learning Specialist",
    "Computer Vision Dev",
    "AI Researcher"
  ];
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleNetwork />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {titleText}
          </h1>
          
          <div className="h-8 mb-8">
            <motion.p
              key={currentSubtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-2xl text-gray-300 font-sans h-full"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-white/5 border border-cyan-400/30 rounded-full font-bold text-white hover:bg-cyan-400/10 transition-colors shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] backdrop-blur-md"
            >
              View My Work →
            </motion.a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/saipunithreddy" },
                { icon: FaGithub, href: "https://github.com/Punith1504" },
                { icon: Mail, href: "#contact" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:border-cyan-400/50 hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative w-80 h-[32rem] rounded-3xl p-1 bg-gradient-to-br from-cyan-400/30 to-violet-600/30" style={{ animation: "floatY 6s ease-in-out infinite alternate" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-600/20 blur-xl rounded-3xl z-0" />
            <div className="w-full h-full rounded-[22px] overflow-hidden relative z-10 glass-panel !p-0 border border-white/10">
              <img
                src="/sequence.png"
                alt="Profile Sequence"
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
