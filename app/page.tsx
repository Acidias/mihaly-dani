import { featuredProjects, otherProjects, toolbelt, researchContent } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-1">
          Mihaly Dani
        </h1>
        <p className="text-neutral-500 mb-4">
          Full-stack + ML engineer building practical AI products and
          data-driven systems.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/Acidias" target="_blank" rel="noopener noreferrer" className="text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/dani-mihaly-arpad/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors">LinkedIn</a>
          <a href="mailto:hello@mihaly-dani.com" className="text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors">Email</a>
        </div>
      </header>

      <hr className="border-neutral-200 mb-12" />

      {/* About */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">About</h2>
        <p className="text-neutral-700 leading-relaxed mb-3">
          I build products at the intersection of software engineering and
          machine learning, from full-stack web applications to computer vision
          pipelines. Currently exploring synthetic data and video understanding.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          I work best in small teams where I can own features end-to-end:
          scoping the problem, building quickly, measuring outcomes, and
          iterating.
        </p>
      </section>

      <hr className="border-neutral-200 mb-12" />

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">Projects</h2>
        <div className="space-y-8">
          {featuredProjects.map((p) => (
            <div key={p.slug}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <Link href={`/work/${p.slug}`} className="font-medium text-neutral-900 hover:underline underline-offset-4">
                  {p.title}
                </Link>
                <span className="text-xs text-neutral-400 shrink-0">{p.role}</span>
              </div>
              <p className="text-sm text-neutral-500 mb-1">{p.oneLiner}</p>
              <p className="text-xs text-neutral-400 mb-2">
                {p.startDate}{p.endDate ? ` – ${p.endDate}` : " – present"}
                {p.endNote && <span className="text-neutral-300"> · {p.endNote}</span>}
              </p>
              <p className="text-sm font-medium text-neutral-800 mb-2">{p.outcome}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-neutral-400">{tag}</span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {p.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors">{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Other</h2>
        <ul className="space-y-3">
          {otherProjects.map((p) => (
            <li key={p.title} className="text-sm text-neutral-600">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline underline-offset-4">{p.title}</a>
              ) : (
                <span className="text-neutral-900">{p.title}</span>
              )}
              : {p.description}
              <span className="text-xs text-neutral-400 ml-1">
                {p.startDate}{p.endDate ? ` – ${p.endDate}` : ""}{p.endNote ? ` · ${p.endNote}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-neutral-200 mb-12" />

      {/* Research */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Research</h2>
        <ul className="space-y-2 mb-4">
          {researchContent.focusAreas.map((area) => (
            <li key={area} className="text-sm text-neutral-600">{area}</li>
          ))}
        </ul>
        <ul className="space-y-2 mb-4">
          {researchContent.contributions.map((item) => (
            <li key={item} className="text-sm text-neutral-500">{item}</li>
          ))}
        </ul>
        {researchContent.links.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 transition-colors">
            {link.label}
          </a>
        ))}
      </section>

      <hr className="border-neutral-200 mb-12" />

      {/* Toolbelt */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(toolbelt).map(([category, tools]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-neutral-800 mb-2">{category}</h3>
              <ul className="space-y-1">
                {tools.map((tool) => (
                  <li key={tool} className="text-xs text-neutral-500">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-200 mb-12" />

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">Contact</h2>
        <p className="text-sm text-neutral-600">
          Reach me at{" "}
          <a href="mailto:hello@mihaly-dani.com" className="text-neutral-900 underline underline-offset-4">hello@mihaly-dani.com</a>
          {" "}or connect on{" "}
          <a href="https://www.linkedin.com/in/dani-mihaly-arpad/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-4">LinkedIn</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} Mihaly Dani
      </footer>
    </main>
  );
}
