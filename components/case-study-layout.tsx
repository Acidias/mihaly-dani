"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

export default function CaseStudyLayout({
  title,
  role,
  stack,
  children,
}: {
  title: string;
  role: string;
  stack: string[];
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-200 noise relative">
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-400 mb-16 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs font-mono text-amber-400/80 tracking-wider uppercase">
            {role}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight mt-3 mb-6">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-16">
            {stack.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-800/80 text-slate-400 border border-navy-600/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.article
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.article>
      </div>
    </main>
  );
}
