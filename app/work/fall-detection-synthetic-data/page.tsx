import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "fall-detection-synthetic-data")!;

export default function FallDetectionPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Fall detection models for elderly care need large, diverse training datasets, but real fall footage is scarce, sensitive to collect, and limited in viewpoint diversity.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>— Keyframe interpolation to generate synthetic sequences without requiring physics simulation</li>
          <li>— Dual-feature approach: optical flow for motion patterns alongside pose skeletons</li>
          <li>— Cross-environment evaluation to measure real generalization</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-medium">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
