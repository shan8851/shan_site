import type { Metadata } from 'next';

import { activeProjects, selectedShippedWork, siteLastUpdated } from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Current builds, experiments, and selected shipped work by Shan.',
};

const getLinkLabel = (href: string) =>
  href.includes('github.com')
    ? 'view repo'
    : href.includes('agglayer.dev') ||
        href.includes('roastmyphoto.app') ||
        href.includes('excuse-me.xyz') ||
        href.includes('fairside.app')
      ? 'view live'
      : 'view project';

const highlightedTitles = new Set(['FairSide', 'RoastMaster', 'Excuse Me', 'Agglayer UI']);

export default function ProjectsPage() {
  const highlightedProjects = activeProjects.filter((project) => highlightedTitles.has(project.title));
  const allActiveProjects = activeProjects.filter((project) => !highlightedTitles.has(project.title));

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted">Current builds, ongoing experiments, and selected shipped work.</p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Highlighted projects</h2>
        <p className="max-w-3xl text-sm text-soft">
          The current focus set: live products and systems I am actively refining.
        </p>
        <ul className="space-y-4">
          {highlightedProjects.map((project) => (
            <li key={project.title} className="space-y-2 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted">
                {project.summary}
                {project.nextMove ? ` ${project.nextMove}` : ''}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
                >
                  {getLinkLabel(project.href)}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">All active projects</h2>
        <ul className="space-y-4">
          {allActiveProjects.map((project) => (
            <li key={project.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.track}
                </span>
                {project.maturity ? (
                  <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                    {project.maturity}
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-muted">
                {project.summary}
                {project.nextMove ? ` ${project.nextMove}` : ''}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
                >
                  {getLinkLabel(project.href)}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Selected shipped work</h2>
        <ul className="space-y-4">
          {selectedShippedWork.map((work) => (
            <li key={work.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold tracking-tight">{work.title}</h3>
              <p className="text-sm text-muted">{work.summary}</p>
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
              >
                {getLinkLabel(work.href)}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
