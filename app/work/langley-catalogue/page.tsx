import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "langley-catalogue")!;

export default function LangleyCataloguePage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Construction estimators spent around 5 minutes per item searching through dense PDF pricing books manually. With hundreds of lookups per project, this was a major bottleneck.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Next.js 15 with Prisma and PostgreSQL for the full-stack framework</li>
          <li>Dual search: traditional full-text search (tsvector triggers) and OpenAI embeddings with pgvector for semantic search</li>
          <li>PDF ingestion pipeline that extracts hierarchical catalogue structure, specs, items, and detailed price breakdowns</li>
          <li>Search analytics tracking (sessions, queries, result snapshots, user picks) for measuring search quality</li>
          <li>Role-based auth with hashed sessions and invitation-based registration</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-semibold text-lg">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
