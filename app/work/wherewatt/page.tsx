import CaseStudyLayout from "@/components/case-study-layout";
import { featuredProjects } from "@/data/projects";

const project = featuredProjects.find((p) => p.slug === "wherewatt")!;

export default function WhereWattPage() {
  return (
    <CaseStudyLayout title={project.title} role={project.role} stack={project.stack}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Problem</h2>
        <p className="text-neutral-600 leading-relaxed">
          Finding available EV chargers nearby is fragmented across multiple apps. There was no simple way to discover, compare, and potentially share private chargers.
        </p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">What I Built</h2>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Tech Decisions</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li>React Native with Expo for cross-platform mobile development</li>
          <li>Node.js/Express backend with auth middleware and structured route handlers</li>
          <li>Custom scraping scripts to aggregate charger data from external sources</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Outcome</h2>
        <p className="text-neutral-900 font-medium">{project.outcome}</p>
      </section>
    </CaseStudyLayout>
  );
}
