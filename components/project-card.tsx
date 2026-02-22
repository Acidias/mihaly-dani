"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block h-full relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 hover:border-amber-500/30 transition-all duration-500"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-transparent group-hover:to-amber-500/3 transition-all duration-500 rounded-2xl" />

        {/* Corner accents on hover */}
        <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
          <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-amber-500/60 rounded-tl-2xl" />
          <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-amber-500/60 rounded-tr-2xl" />
          <div className="absolute -left-px -bottom-px h-5 w-5 border-l-2 border-b-2 border-amber-500/60 rounded-bl-2xl" />
          <div className="absolute -right-px -bottom-px h-5 w-5 border-r-2 border-b-2 border-amber-500/60 rounded-br-2xl" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-mono text-amber-400/80 tracking-wider uppercase">
              {project.role}
            </span>
            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-2 group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
            {project.oneLiner}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-800/80 text-slate-400 border border-navy-600/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Outcome */}
          <div className="pt-4 border-t border-navy-600/30">
            <p className="text-sm text-amber-400/70 font-medium">
              {project.outcome}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
