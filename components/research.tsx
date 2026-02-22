"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { researchContent } from "@/data/projects";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-mono text-amber-500/60 tracking-widest uppercase">
          [ Research ]
        </span>
        <div className="flex-1 glow-line" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mb-4">
        Research
      </h2>
      <p className="text-slate-400 text-lg mb-14 max-w-xl">
        Exploring synthetic data and robustness in video understanding.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">
              Focus Areas
            </h3>
          </div>
          <ul className="space-y-4">
            {researchContent.focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contributions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-6">
            What I Did
          </h3>
          <ul className="space-y-4">
            {researchContent.contributions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0">&#8594;</span>
                <span className="text-slate-300 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-navy-600/30">
            {researchContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
