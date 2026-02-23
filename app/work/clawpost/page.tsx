import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "clawpost")!;

export default function ClawPostPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Posting across multiple social platforms required repetitive manual work — writing platform-specific copy, scheduling at optimal times, and tracking engagement separately for each channel.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>— Next.js for the dashboard UI with server-side rendering for fast initial loads</li>
          <li>— NestJS backend with queue-based job processing for reliable scheduled posting</li>
          <li>— OpenAI API for generating platform-adapted copy from a single input prompt</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-medium">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
