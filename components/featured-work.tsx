"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import ProjectCard from "./project-card";
import { featuredProjects, otherProjects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <SectionWrapper id="work">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-mono text-amber-500/60 tracking-widest uppercase">
          [ Featured Work ]
        </span>
        <div className="flex-1 glow-line" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mb-4">
        Projects
      </h2>
      <p className="text-slate-400 text-lg mb-14 max-w-xl">
        A selection of things I&apos;ve built — from AI pipelines to full-stack
        platforms.
      </p>

      {/* Project cards — bento grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Other projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 glass-card rounded-2xl p-8"
      >
        <h3 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-6">
          Other Projects
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-2 shrink-0" />
              <div>
                <span className="text-sm font-medium text-slate-200">
                  {p.title}
                </span>
                <p className="text-xs text-slate-500 mt-0.5">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
