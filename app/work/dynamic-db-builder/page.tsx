"use client";

import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find(
  (p) => p.slug === "dynamic-db-builder"
)!;

export default function DynamicDBBuilderPage() {
  return (
    <CaseStudyLayout
      title={project.title}
      role={project.role}
      stack={project.stack}
    >
      <section className="glass-card rounded-2xl p-8">
        <h2 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-4">
          Problem
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Internal teams needed custom data management tools but every new
          requirement meant building bespoke CRUD interfaces from scratch —
          duplicating the same patterns for tables, forms, and validation logic
          each time.
        </p>
      </section>

      <section className="glass-card rounded-2xl p-8">
        <h2 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-4">
          What I Built
        </h2>
        <p className="text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </section>

      <section className="glass-card rounded-2xl p-8">
        <h2 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-4">
          Tech Decisions
        </h2>
        <ul className="space-y-3">
          {[
            "Metadata-driven architecture: schemas define both data structure and UI rendering in one place",
            "Prisma for dynamic schema management with migration support",
            "React component library that renders forms, tables, and detail views from entity configuration",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-300">
              <span className="text-amber-500 mt-0.5 shrink-0">&#8594;</span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card rounded-2xl p-8 glow-amber">
        <h2 className="text-sm font-mono text-amber-400/80 tracking-wider uppercase mb-4">
          Outcome
        </h2>
        <p className="text-amber-400 font-medium text-lg">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
