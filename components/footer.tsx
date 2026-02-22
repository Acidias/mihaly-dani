"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-700/30 mt-12">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="font-bold text-[10px] text-navy-950">MD</span>
            </div>
            <span className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Mihaly Dani
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ y: -2 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-amber-400 transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
