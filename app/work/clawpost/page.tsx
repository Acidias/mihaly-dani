"use client";

import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "clawpost")!;

export default function ClawPostPage() {
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
          Posting across multiple social platforms (X, LinkedIn, Telegram)
          required repetitive manual work — writing platform-specific copy,
          scheduling at optimal times, and tracking engagement separately for
          each channel.
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
            "Next.js for the dashboard UI with server-side rendering for fast initial loads",
            "NestJS backend with queue-based job processing for reliable scheduled posting",
            "OpenAI API for generating platform-adapted copy from a single input prompt",
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
