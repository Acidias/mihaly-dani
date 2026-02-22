"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { toolbelt } from "@/data/projects";
import { Code2, Database, BrainCircuit, Layout } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Layout className="w-5 h-5 text-amber-400" />,
  Backend: <Code2 className="w-5 h-5 text-amber-400" />,
  Data: <Database className="w-5 h-5 text-amber-400" />,
  ML: <BrainCircuit className="w-5 h-5 text-amber-400" />,
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-mono text-amber-500/60 tracking-widest uppercase">
          [ About ]
        </span>
        <div className="flex-1 glow-line" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Bio */}
        <div className="md:col-span-3 space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg font-light">
            I build products that sit at the intersection of software engineering
            and machine learning — from full-stack web applications to computer
            vision pipelines. Currently exploring synthetic data and video
            understanding as a research direction.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I work best in small teams where I can own features end-to-end:
            scoping the problem, building quickly, measuring outcomes, and
            iterating. I value clean systems, fast feedback loops, and shipping
            things that actually get used.
          </p>
        </div>

        {/* Stats */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="glass-card rounded-2xl p-6 space-y-5">
            {[
              { label: "Projects Shipped", value: "10+" },
              { label: "Tech Stack Depth", value: "Full-Stack + ML" },
              { label: "Focus", value: "AI Products" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-slate-500">{stat.label}</span>
                <span className="text-sm font-medium text-slate-200">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toolbelt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16"
      >
        <h3 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-8">
          Toolbelt
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(toolbelt).map(([category, tools], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="group glass-card rounded-2xl p-5 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {categoryIcons[category]}
                </div>
                <h4 className="text-sm font-semibold text-slate-100">
                  {category}
                </h4>
              </div>
              <ul className="space-y-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
