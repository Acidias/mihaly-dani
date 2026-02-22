"use client";

import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find(
  (p) => p.slug === "fall-detection-synthetic-data"
)!;

export default function FallDetectionPage() {
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
          Fall detection models for elderly care need large, diverse training
          datasets, but real fall footage is scarce, sensitive to collect, and
          limited in viewpoint diversity. Models trained on small datasets fail
          to generalize across environments.
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
            "Keyframe interpolation to generate synthetic sequences without requiring physics simulation",
            "Dual-feature approach: optical flow for motion patterns alongside pose skeletons for body configuration",
            "Cross-environment evaluation to measure real generalization rather than in-distribution accuracy",
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
