"use client";

import { motion } from "framer-motion";
import { Users, HeartHandshake, Mic, FlaskConical } from "lucide-react";
import GlassCard from "./GlassCard";

const leadershipRoles = [
  {
    title: "Founder & COO",
    organization: "Game Scape",
    date: "2022–2025",
    description: "Led 5 training batches with 120+ participants. Head of Design and operations.",
    icon: Users,
    color: "cyan",
  },
  {
    title: "NSS Volunteer",
    organization: "LPU",
    date: "2022–2025",
    description: "Organized multiple plantation drives and blood donation camps.",
    icon: HeartHandshake,
    color: "emerald",
  },
  {
    title: "Head of Public Speaking",
    organization: "Kaladhara",
    date: "Past",
    description: "Led a team focusing on communication skills and public speaking events.",
    icon: Mic,
    color: "violet",
  },
  {
    title: "Member",
    organization: "SRPC, LPU",
    date: "Past",
    description: "Participated in Research & Development council operations and activities.",
    icon: FlaskConical,
    color: "magenta",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 relative z-10" id="leadership">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Leadership & <span className="text-emerald-400">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-500"
              initial={{ y: "-100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {leadershipRoles.map((role, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full glass-panel flex items-center justify-center transform -translate-x-0 md:-translate-x-1/2 z-10 border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <role.icon className={`w-6 h-6 text-${role.color}-400`} style={{ color: `var(--color-accent-${role.color === 'emerald' ? 'cyan' : role.color})` }} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"}`}
                  >
                    <GlassCard className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-xl font-display font-bold text-white">{role.title}</h3>
                        <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded-md text-gray-400 whitespace-nowrap">
                          {role.date}
                        </span>
                      </div>
                      <div className="text-sm font-sans text-cyan-400 mb-3">{role.organization}</div>
                      <p className="text-gray-400 font-sans text-sm">{role.description}</p>
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
