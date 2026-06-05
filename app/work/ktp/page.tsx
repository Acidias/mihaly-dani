import CaseStudyLayout from "@/components/case-study-layout";

export const metadata = {
  title: "KTP – Mihaly Dani",
  description:
    "Knowledge Transfer Partnership: facial-video analysis for pain and disease detection. What a KTP is, and an ongoing progress log.",
};

// ─────────────────────────────────────────────────────────────
// Progress log — add a new entry at the TOP to update progress.
// Newest first. Keep it short: one or two sentences per entry.
// ─────────────────────────────────────────────────────────────
type ProgressEntry = { date: string; text: string };

const progress: ProgressEntry[] = [
  {
    date: "2026-05-29",
    text: "Project meeting: presented noisy-subject removal and video feature reduction. Ranking the 912-D facial features by importance and keeping only the top ~30 actually improved results — around 86% with a leave-one-subject-out random forest, and EDA alone reaching ~79% versus the ~72% video-only baseline from the original study. The findings are now strong enough to write up: a paper on the results is on the way, targeting a journal special issue.",
  },
  {
    date: "2026-05-21",
    text: "Project meeting on the multimodal comparison. Across SVM (linear and RBF) and random forest on BioVid: EDA (skin conductance) is the strongest single signal for telling graded pain levels apart, while the video features give the best and most stable accuracy for simply detecting whether pain is present. Feature-level fusion of the signals and the challenge of individual variability were the main discussion points.",
  },
  {
    date: "2026-05-20",
    text: "Ran the first proper multimodal comparison on the BioVid dataset: the existing 912-D facial-landmark video features vs physiological signals (EDA, ECG, EMG), with SVM and Random Forest under leave-one-subject-out cross-validation on the university HPC cluster. Goal: quantify how much each sensing modality actually contributes to pain classification.",
  },
  {
    date: "2026-05-14",
    text: "Built a side-research webapp to understand remote photoplethysmography (rPPG) — recovering heart rate from an ordinary face video. Useful background for the contactless physiological-signal angle of the project.",
  },
  {
    date: "2026-04-09",
    text: "Pain-detection proof-of-concept pipelines taking shape: data ingestion, feature extraction and a first classification baseline end-to-end.",
  },
  {
    date: "2026-03-01",
    text: "Started the role: Research Scientist on a Knowledge Transfer Partnership between the University of Hertfordshire and Transpharmation, a pharmaceutical research company. I manage the project end-to-end, bridging the university and the company and driving the machine-learning research.",
  },
];

export default function KtpPage() {
  return (
    <CaseStudyLayout
      title="KTP — Facial-video Analysis"
      role="Research Scientist"
      stack={["Python", "PyTorch", "scikit-learn", "SLURM / HPC", "Anthropic SDK"]}
    >
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          What is a KTP?
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          A Knowledge Transfer Partnership (KTP) is a UK government-funded
          scheme that connects a university with a business to work on a
          strategic innovation project. An academic team provides the research
          expertise, the company provides the real-world problem and data, and
          an embedded associate — me — sits between the two, managing the
          project day-to-day and transferring the knowledge into the business.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          The Project
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          A partnership between the University of Hertfordshire and
          Transpharmation. We&apos;re building a facial-video analysis platform:
          starting with pain-detection proof-of-concepts, then extending towards
          measuring disease state and treatment response — Parkinson&apos;s,
          stroke and dementia. The aim is to read clinically meaningful signals
          from ordinary video, with no contact sensors.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          My Role
        </h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Own the project end-to-end, bridging the university and the company.</li>
          <li>Drive the machine-learning research: pipelines, models, evaluation.</li>
          <li>Compare sensing modalities (video vs physiological signals) to find what actually carries the signal.</li>
          <li>Run experiments at scale on the university HPC cluster.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          Progress Log
        </h2>
        <div className="space-y-5">
          {progress.map((entry, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-xs font-mono text-neutral-400 shrink-0 pt-0.5 w-20">
                {entry.date}
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </CaseStudyLayout>
  );
}
