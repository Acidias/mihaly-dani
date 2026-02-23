import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "property-extraction")!;

export default function PropertyExtractionPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Property transactions require reviewing dense legal packs — often as scanned PDFs. Manual extraction was slow, error-prone, and a bottleneck.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>— Two-stage pipeline: Tesseract OCR for text extraction, then LLM for structured entity extraction</li>
          <li>— FastAPI backend for async document processing with job status tracking</li>
          <li>— Confidence scores on extracted fields to flag uncertain results for human review</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-medium">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
