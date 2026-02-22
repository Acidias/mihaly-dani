"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`relative px-6 py-24 md:py-32 max-w-6xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
