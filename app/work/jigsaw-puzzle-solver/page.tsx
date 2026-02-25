import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "jigsaw-puzzle-solver")!;

export default function JigsawPuzzleSolverPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Goal</h2>
        <p className="text-neutral-600 leading-relaxed">
          Create the fastest jigsaw puzzle solver AI in the world. This is a multi-step project, starting with generating massive amounts of high-quality training data.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 1: Data Generation</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Native macOS app in Swift + SwiftUI for maximum performance on image processing</li>
          <li>CGPath cubic bezier curves to generate realistic interlocking jigsaw edges with randomised control points</li>
          <li>Adjacent pieces share edge curves (forward/reversed traversal) for perfect interlocking fit</li>
          <li>Pieces exported as transparent PNGs with metadata JSON (bounding boxes, neighbour lists, grid positions)</li>
          <li>Configurable grid sizes from 1x2 to 100x100 for varied training data complexity</li>
          <li>Image upscaling pipeline for smooth bezier edges on smaller source images</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-semibold text-lg">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
