import Link from "next/link";
import { ReactNode } from "react";

export default function CaseStudyLayout({
  title,
  role,
  stack,
  children,
}: {
  title: string;
  role: string;
  stack: string[];
  children: ReactNode;
}) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="text-sm text-neutral-400 hover:text-neutral-900 underline underline-offset-4 transition-colors"
      >
        &larr; Back
      </Link>

      <div className="mt-10 mb-10">
        <span className="text-xs font-mono text-neutral-400">{role}</span>
        <h1 className="text-2xl font-semibold text-neutral-900 mt-1 mb-3">
          {title}
        </h1>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {stack.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200 mb-10" />

      <article className="space-y-10">{children}</article>
    </main>
  );
}
