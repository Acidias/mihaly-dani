import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "rebeka-beauty-salon")!;

export default function RebekaBeautySalonPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          The salon needed a professional web presence with the ability to manage treatments, pricing, and customer reviews without developer involvement for every content update.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>Next.js with Vercel Postgres for a serverless full-stack setup with zero infrastructure management</li>
          <li>Admin dashboard with auth, drag-and-drop content ordering, and image upload with cropping</li>
          <li>Multilingual support via a language provider component for serving multiple customer bases</li>
          <li>Radix UI primitives with Tailwind for accessible, polished UI components</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-semibold text-lg">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
