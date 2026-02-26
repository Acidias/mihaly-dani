import Link from "next/link";

export const metadata = {
  title: "Log – Mihaly Dani",
  description: "Short updates, progress notes, and things I'm working on.",
};

type LogEntry = {
  date: string;
  text: string;
};

const entries: LogEntry[] = [
  {
    date: "2026-02-26",
    text: "Jigsaw Puzzle Generator: full training infrastructure done. Siamese Neural Network architecture presets, auto PyTorch script generation, local + cloud (SSH) training with live progress, experiment tracking with script hashes. Ready to start training runs.",
  },
  {
    date: "2026-02-26",
    text: "Updated project page with all 6 phases. Phases 1-3 complete (data gen, dataset gen, training infra). Next: train the actual piece matching model.",
  },
  {
    date: "2026-02-25",
    text: "Jigsaw Puzzle Generator: added Openverse image fetching (tens of thousands of images), auto-normalization for ML training, and puzzle cutting at any dimension. Posted a video demo on X. Open source on GitHub.",
  },
  {
    date: "2026-02-25",
    text: "Added my personal story to the site. About page is live.",
  },
  {
    date: "2026-02-25",
    text: "Built a jigsaw puzzle generator (Swift + SwiftUI). Open sourced it. First step toward the puzzle-solving robot project.",
  },
  {
    date: "2026-02-24",
    text: "OpenAnalytics: public demo dashboard live, city-level geo map, WS auth ticket flow, landing page redesign.",
  },
  {
    date: "2026-02-24",
    text: "Started planning the world's fastest jigsaw puzzle solving AI robot. Researched state of the art, defined 6 possible paths.",
  },
  {
    date: "2026-02-23",
    text: "LinkedIn Dashboard: added X post history endpoint, fixed draft ordering, integrated analytics tracking.",
  },
  {
    date: "2026-02-22",
    text: "Launched ClawPost on RankInPublic. Shared my story replying to Simon Squibb's post (7 likes, 432 impressions).",
  },
  {
    date: "2026-02-20",
    text: "Started 30-day X posting challenge. Day 1: committed to showing up every day.",
  },
];

export default function LogPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold text-neutral-900 mt-4 mb-1">
          Log
        </h1>
        <p className="text-neutral-500">
          Short updates, progress notes, and things I&apos;m working on.
        </p>
      </header>

      <hr className="border-neutral-200 mb-10" />

      <div className="space-y-6">
        {entries.map((entry, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-xs font-mono text-neutral-400 shrink-0 pt-0.5 w-20">
              {entry.date}
            </span>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {entry.text}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-neutral-200 mt-12 mb-8" />

      <footer className="flex justify-between items-center text-sm text-neutral-400">
        <Link href="/" className="hover:text-neutral-600 transition-colors">← Home</Link>
        <span>&copy; {new Date().getFullYear()} Mihaly Dani</span>
      </footer>
    </main>
  );
}
