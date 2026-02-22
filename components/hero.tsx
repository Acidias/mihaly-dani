"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";

const chips = [
  { label: "AI / ML", desc: "synthetic data, vision" },
  { label: "Full-Stack", desc: "Next.js / NestJS / Postgres" },
  { label: "Product Builder", desc: "shipped tools & automations" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 max-w-6xl mx-auto pt-20">
      <div className="relative z-10 w-full">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="text-sm text-slate-400 font-mono">
            Available for work
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 leading-[1.1] tracking-tight max-w-4xl">
            Full-stack + ML engineer
            <br />
            building{" "}
            <span className="gradient-text">practical AI</span>
            <br />
            products.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light"
        >
          I design and ship data-driven systems — from computer vision pipelines
          to full-stack web apps — with a focus on measurable outcomes.
        </motion.p>

        {/* Proof chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {chips.map((c) => (
            <div
              key={c.label}
              className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-amber-500/40 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-amber-400">
                {c.label}
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                {c.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200/10 text-slate-200 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex items-center gap-5"
        >
          {[
            {
              icon: Github,
              href: "https://github.com",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: FileText,
              href: "#",
              label: "CV",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors duration-200"
            >
              <s.icon className="w-4 h-4" />
              <span className="text-sm">{s.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-amber-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
