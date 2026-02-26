import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "jigsaw-puzzle-solver")!;

export default function JigsawPuzzleSolverPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Goal</h2>
        <p className="text-neutral-600 leading-relaxed">
          Create the fastest jigsaw puzzle solver AI in the world, with a physical robot that can autonomously solve puzzles in real-time. This is a multi-phase research project combining computer vision, supervised learning, reinforcement learning, and robotics.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 1: Data Generation ✅</h2>
        <p className="text-neutral-600 leading-relaxed mb-3">
          Built a native macOS app that generates high-quality jigsaw puzzle training data at scale.
        </p>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Openverse integration: search and download tens of thousands of Creative Commons images directly into projects, with licence and attribution preserved</li>
          <li>Puzzle cutting engine with CGPath cubic bezier curves for realistic interlocking edges with randomised control points</li>
          <li>Adjacent pieces share edge curves (forward/reversed traversal) for perfect interlocking fit</li>
          <li>Configurable grid sizes from 1x2 to 100x100</li>
          <li>AI normalization pipeline: centre-crop, resize, pad all pieces to uniform square canvas for ML training</li>
          <li>Batch processing: process multiple images in one go with per-item progress tracking</li>
          <li>Pieces exported as transparent PNGs with metadata JSON (bounding boxes, neighbour lists, grid positions)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 2: Dataset Generation ✅</h2>
        <p className="text-neutral-600 leading-relaxed mb-3">
          Structured ML dataset creation from 2-piece puzzles with proper data science methodology.
        </p>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Four pair categories: correct match, wrong shape match (same edges, different image), wrong image match (same image, different edges), wrong nothing (different both)</li>
          <li>Image-level train/test/valid splits to prevent data leakage</li>
          <li>Shared grid edges enable shape-match pairs across images for harder negatives</li>
          <li>Larger grids produce more pair positions and diverse piece types (corners, edges, interior)</li>
          <li>Datasets persisted as independent entities (survive project deletion), exportable to external directories</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 3: Model Architecture and Training ✅</h2>
        <p className="text-neutral-600 leading-relaxed mb-3">
          Siamese Neural Network training infrastructure built directly into the app.
        </p>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Architecture presets: reusable SNN configurations with 3 built-in defaults (Quick Test, Recommended, High Capacity)</li>
          <li>Configurable ConvBlocks, comparison methods, and hyperparameters</li>
          <li>Auto-generates self-contained PyTorch training scripts + requirements.txt</li>
          <li>Local training: auto venv creation, pip install, subprocess execution with live epoch progress</li>
          <li>Cloud training via SSH: uploads dataset + scripts via scp, runs on remote GPU instances, streams live progress, auto-downloads results</li>
          <li>Experiment tracking: script SHA-256 hashes, preset names, notes, timestamps, metrics comparison table</li>
          <li>Auto-imports metrics.json and Core ML model on completion</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 4: Piece Matching Model (next)</h2>
        <p className="text-neutral-600 leading-relaxed">
          Train the Siamese Neural Network on generated datasets to learn piece compatibility. Evaluate matching accuracy across different puzzle complexities and ambiguous textures.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 5: Assembly Solver (planned)</h2>
        <p className="text-neutral-600 leading-relaxed">
          Develop an RL agent or optimization-based solver that uses pairwise match scores to plan and execute full puzzle assembly.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Phase 6: Physical Robot (planned)</h2>
        <p className="text-neutral-600 leading-relaxed">
          Computer vision for physical piece detection via overhead camera, robot arm integration with vacuum gripper for pick-rotate-place operations. Bridge the virtual and physical worlds.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Native macOS app in Swift + SwiftUI for maximum performance on image processing</li>
          <li>Pure native implementation with no external dependencies (Core Graphics)</li>
          <li>PyTorch for model training with Core ML export for on-device inference</li>
          <li>SSH-based cloud training for GPU access without leaving the app</li>
          <li>Four-level project hierarchy: Project &gt; Cut &gt; CutImageResult &gt; Pieces</li>
          <li>Full persistence layer with JSON manifests for all entities</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-semibold text-lg">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
