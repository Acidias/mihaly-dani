"use client";

import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find(
  (p) => p.slug === "property-extraction"
)!;

export default function PropertyExtractionPage() {
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
          Property transactions require reviewing dense legal packs — title
          deeds, local authority searches, lease agreements — often as scanned
          PDFs. Manual extraction of key details was slow, error-prone, and a
          bottleneck in the conveyancing process.
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
            "Two-stage pipeline: Tesseract OCR for text extraction, then LLM for structured entity extraction",
            "FastAPI backend for async document processing with job status tracking",
            "Confidence scores on extracted fields to flag uncertain results for human review",
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
