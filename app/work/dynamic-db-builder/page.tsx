import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "dynamic-db-builder")!;

export default function DynamicDBBuilderPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Internal teams needed custom data management tools but every new requirement meant building bespoke CRUD interfaces from scratch.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>— Metadata-driven architecture: schemas define both data structure and UI rendering in one place</li>
          <li>— Prisma for dynamic schema management with migration support</li>
          <li>— React component library that renders forms, tables, and detail views from entity configuration</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-medium">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
