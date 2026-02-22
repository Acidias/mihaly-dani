"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./section-wrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="relative glass-card rounded-3xl p-10 md:p-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-amber-500/60 tracking-widest uppercase">
              [ Contact ]
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg">
            Interested in collaborating or have a question? Reach out directly —
            I&apos;m always open to interesting projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-slate-200/10 text-slate-200 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all" />
            </motion.a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
