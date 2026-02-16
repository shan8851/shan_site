import type { Metadata } from 'next';

import { activeProjects, siteLastUpdated } from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Shan is actively building and experimenting with.',
};

const projectTrackOrder = ['core', 'experiments'] as const;

const trackHeading = {
  core: 'Core builds',
  experiments: 'Experiments',
} as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted">
          A mix of serious builds and messy experiments. Some are polished, some are intentionally raw.
        </p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      {projectTrackOrder.map((track) => {
        const projectsInTrack = activeProjects.filter((project) => project.track === track);

        if (projectsInTrack.length === 0) {
          return null;
        }

        return (
          <section key={track} className="space-y-4 border-t border-border pt-8">
            <h2 className="text-lg font-semibold tracking-tight">{trackHeading[track]}</h2>
            <ul className="space-y-4">
              {projectsInTrack.map((project) => (
                <li key={project.title} className="space-y-1 rounded-sm border border-border bg-surface/40 px-3 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold tracking-tight">{project.title}</h3>
                    <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                      {project.status}
                    </span>
                    {project.maturity ? (
                      <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                        {project.maturity}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted">{project.summary}</p>
                  <p className="text-sm">
                    <span className="text-muted">next:</span> {project.nextMove}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-muted"
                    >
                      open repo
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
