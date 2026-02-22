"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-navy-600/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center"
            >
              <span className="font-bold text-sm text-navy-950">MD</span>
            </motion.div>
            <span className="font-semibold text-slate-50 tracking-tight hidden sm:block">
              Mihaly Dani
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-amber-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all duration-200"
            >
              Get in touch
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-amber-400 transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-semibold text-slate-50">MD</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-amber-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-6 pt-8"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-2xl font-light text-slate-200 hover:text-amber-400 border-b border-navy-700/50 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
