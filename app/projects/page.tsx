import type { Metadata } from 'next';
import type { ReactElement } from 'react';

import { activeProjects, selectedShippedWork, siteLastUpdated } from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A short list of featured builds, shipped-at-scale work, and the current operator bet.',
};

const liveProjectHosts = [
  'agglayer.dev',
  'chaingrep.xyz',
  'ch-cli.xyz',
  'excuse-me.xyz',
  'fairside.app',
  'fuel-cli.xyz',
  'rail-cli.xyz',
  'roastmyphoto.app',
  'shan8851.com',
  'tfl-cli.xyz',
] as const;

const getLinkLabel = (href: string) =>
  href.includes('github.com')
    ? 'view repo'
    : liveProjectHosts.some((host) => href.includes(host))
      ? 'view live'
      : 'view project';

const featuredProjectConfigs = [
  {
    title: 'RoastMaster',
    outcome:
      'Consumer AI app with real product constraints: image uploads, auth, credits, share loops, and a lot of prompt + output iteration.',
    technicalHighlights: [
      'Mode-aware routing between roast and glaze flows.',
      'Prompt constraints and structured parsing to keep output funny without losing control.',
      'A meaningful learning project for model behaviour, safety boundaries, and monetised AI UX.',
    ],
  },
  {
    title: 'CLI suite',
    outcome:
      'A growing suite of agent-first CLI tools for useful public data and real-world workflows.',
    tools: [
      {
        title: 'tfl-cli',
        href: 'https://tfl-cli.xyz',
        summary: 'London transport: status, journeys, arrivals, disruptions, bike docks.',
        repoHref: 'https://github.com/shan8851/tfl-cli',
      },
      {
        title: 'companies-house-cli',
        href: 'https://ch-cli.xyz',
        summary: 'UK company search, filings, officers, ownership, insolvency.',
        repoHref: 'https://github.com/shan8851/companies-house-cli',
      },
      {
        title: 'rail-cli',
        href: 'https://rail-cli.xyz',
        summary: 'UK rail departures, arrivals, station search, and fast travel queries.',
        repoHref: 'https://github.com/shan8851/rail-cli',
      },
      {
        title: 'fuel-cli',
        href: 'https://fuel-cli.xyz',
        summary: 'UK fuel prices, ranked by price, distance, or freshness.',
        repoHref: 'https://github.com/shan8851/fuel-cli',
      },
    ],
    technicalHighlights: [
      'Designed to be useful to humans in the terminal and predictable for agents when piped.',
      'A clearer long-term bet than one-off utilities: repeated patterns, public APIs, and practical workflows.',
      'Each tool sharpens the surrounding skills, landing pages, and output discipline.',
    ],
  },
  {
    title: 'Operator Console',
    outcome:
      'Mission-control-lite for agent runs, operator visibility, and system health. Still rough, but likely to matter more over time.',
    technicalHighlights: [
      'Built from the real pain of wanting practical visibility instead of hand-wavy agent dashboards.',
      'Aims to make runs, health, and operational signal easier to inspect without ceremony.',
      'Likely to evolve with Hermes rather than stay tied to older tooling names.',
    ],
  },
] as const;

const shippedAtScaleTitles = ['Agglayer UI', 'Agglayer SDK'] as const;

export default function ProjectsPage(): ReactElement {
  const featuredProjects = featuredProjectConfigs.map((config) => ({
    ...config,
    project: activeProjects.find((project) => project.title === config.title),
  }));

  const shippedAtScaleProjects = shippedAtScaleTitles
    .map((title) => activeProjects.find((project) => project.title === title))
    .filter((project): project is (typeof activeProjects)[number] => Boolean(project));

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted">
          Short by design. The main public bets, the serious shipped work, and one operator-facing build I
          expect to matter more over time.
        </p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="section-divider space-y-4 pt-8">
        <h2 className="text-lg tracking-tight"><span className="text-accent">{'//'}</span> Featured builds</h2>
        <ul className="space-y-6">
          {featuredProjects.map((item) => (
            <li key={item.title} className="space-y-3 border-b border-border/60 pb-6 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                {item.project ? (
                  <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                    {item.project.status}
                  </span>
                ) : null}
              </div>

              <p className="text-sm text-muted">{item.outcome}</p>

              {'tools' in item ? (
                <ul className="space-y-2 text-sm text-soft">
                  {item.tools.map((tool) => (
                    <li key={tool.title} className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-splash font-medium underline underline-offset-4"
                        >
                          {tool.title}
                        </a>
                        <a
                          href={tool.repoHref}
                          target="_blank"
                          rel="noreferrer"
                          className="link-splash text-xs text-muted underline underline-offset-4"
                        >
                          repo
                        </a>
                      </div>
                      <p>{tool.summary}</p>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div>
                <p className="text-xs uppercase tracking-wide text-accent">Why it matters</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-soft">
                  {item.technicalHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {item.project?.nextMove ? <p className="text-sm text-soft">Current focus: {item.project.nextMove}</p> : null}

              {item.project?.href ? (
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={item.project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-splash inline-block text-sm underline underline-offset-4"
                  >
                    {getLinkLabel(item.project.href)}
                  </a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-divider space-y-4 pt-8">
        <h2 className="text-lg tracking-tight"><span className="text-accent">{'//'}</span> Shipped at scale</h2>
        <ul className="space-y-4">
          {shippedAtScaleProjects.map((project) => (
            <li key={project.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold tracking-tight">{project.title}</h3>
              <p className="text-sm text-muted">{project.summary}</p>
              {project.nextMove ? <p className="text-sm text-soft">Current focus: {project.nextMove}</p> : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-splash inline-block text-sm underline underline-offset-4"
                >
                  {getLinkLabel(project.href)}
                </a>
              ) : null}
            </li>
          ))}

          {selectedShippedWork.map((work) => (
            <li key={work.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold tracking-tight">{work.title}</h3>
              <p className="text-sm text-muted">{work.summary}</p>
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="link-splash inline-block text-sm underline underline-offset-4"
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
