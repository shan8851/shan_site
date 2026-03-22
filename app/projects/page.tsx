import type { Metadata } from 'next';
import type { ReactElement } from 'react';

import { activeProjects, selectedShippedWork, siteLastUpdated } from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Featured builds, shipped-at-scale work, and selected active projects by Shan.',
};

const liveProjectHosts = ['agglayer.dev', 'chaingrep.xyz', 'ch-cli.xyz', 'excuse-me.xyz', 'fairside.app', 'roastmyphoto.app', 'shan8851.com', 'tfl-cli.xyz'] as const;

const getLinkLabel = (href: string) =>
  href.includes('github.com')
    ? 'view repo'
    : liveProjectHosts.some((host) => href.includes(host))
      ? 'view live'
      : 'view project';

const featuredProjectConfigs = [
  {
    title: 'tfl-cli',
    outcome: 'Published npm CLI for live TfL data — status, journey planning, arrivals, disruptions, and bike availability. Agent-first design.',
    technicalHighlights: [
      'Auto-detects TTY: colourised human output in terminal, structured JSON when piped to agents.',
      'Journey planning with multi-leg routing, live line status with severity and closure reasons.',
      'Zero auth required for basic use; optional API key for higher rate limits.',
    ],
  },
  {
    title: 'companies-house-cli',
    outcome: 'Published npm CLI for UK company data — search, directors, filings, ownership, charges, and insolvency. Agent-first design.',
    technicalHighlights: [
      'Eight subcommands covering the full Companies House API surface (search, info, officers, filings, PSC, charges, insolvency, search-person).',
      'Colourised terminal output with ANSI codes, --no-color flag, and automatic JSON mode for agent pipelines.',
      'Zod-validated responses, auto zero-padding of company numbers, and comprehensive test coverage.',
    ],
  },
  {
    title: 'chaingrep',
    outcome: 'Live web tool for searching decoded on-chain event logs across multiple EVM chains with zero setup.',
    technicalHighlights: [
      'Streaming event decoding with automatic ABI resolution via Sourcify and Etherscan fallback.',
      'Two query modes: hosted sample API with rate limiting (Hono) and direct BYOK where queries never touch the server.',
      'Monorepo with shared query engine, CSV/JSON export, and GitHub Actions CI/CD deploying both API and frontend.',
    ],
  },
  {
    title: 'llm-usage',
    outcome: 'Published npm CLI for unified token-usage tracking across local AI coding tools.',
    technicalHighlights: [
      'Multi-provider log parsing for Claude Code and Codex session JSONL files.',
      'OpenRouter account snapshot via API (`/key` + `/credits`) for remote usage context.',
      'Zod-validated TOML config, Commander flag validation, and JSON output mode for scripting.',
    ],
  },
  {
    title: 'Agglayer UI',
    outcome: 'Production bridge UI covering native Agglayer routes and aggregator paths.',
    technicalHighlights: [
      'Native Agglayer routes for direct bridge flows.',
      'LI.FI integration for multihop bridging paths.',
      'Multisig wallet support for team and treasury usage.',
    ],
  },
  {
    title: 'Agglayer SDK',
    outcome: 'Core bridging SDK for native mode integrations and approval-heavy onchain flows.',
    technicalHighlights: [
      'Native mode support for direct protocol integrations.',
      'Onchain approvals and transaction flow handling.',
      'Integration ergonomics tuned for production developer usage.',
    ],
  },
  {
    title: 'RoastMaster',
    outcome: 'Consumer AI app with real monetisation, prompt-control depth, and abuse-resistant generation flows.',
    technicalHighlights: [
      'Mode-aware model routing via OpenRouter (`ROAST_MODEL` vs `GLAZE_MODEL`) with profile-based behaviour.',
      'Prompt steering with hard constraints (intensity bands, output structure, line limits), schema-validated JSON parsing, and retry logic when unhinged output comes back too tame.',
      'Upstash-backed quota/rate controls (anon cookie + IP backstop), with free-tier gating and paid credit paths.',
    ],
  },
] as const;

const otherActiveProjectTitles = ['FairSide', 'Excuse Me', 'OpenClaw dashboard + API', 'skills', 'viewports'] as const;

export default function ProjectsPage(): ReactElement {
  const featuredProjects = featuredProjectConfigs
    .map((config) => ({
      ...config,
      project: activeProjects.find((project) => project.title === config.title),
    }))
    .filter((item): item is (typeof featuredProjectConfigs)[number] & { project: (typeof activeProjects)[number] } =>
      Boolean(item.project),
    );

  const otherActiveProjects = otherActiveProjectTitles
    .map((title) => activeProjects.find((project) => project.title === title))
    .filter((project): project is (typeof activeProjects)[number] => Boolean(project));

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted">Key builds, real-world shipped work, and what I am actively refining now.</p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Featured builds</h2>
        <ul className="space-y-5">
          {featuredProjects.map((item) => (
            <li key={item.project.title} className="space-y-3 border-b border-border/60 pb-5 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{item.project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {item.project.status}
                </span>
              </div>

              <p className="text-sm text-muted">{item.outcome}</p>

              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Technical highlights</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-soft">
                  {item.technicalHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {item.project.nextMove ? <p className="text-sm text-soft">Current focus: {item.project.nextMove}</p> : null}

              {item.project.href ? (
                <a
                  href={item.project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
                >
                  {getLinkLabel(item.project.href)}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Shipped at scale</h2>
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

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight">More projects</h2>
        <ul className="space-y-3">
          {otherActiveProjects.map((project) => (
            <li key={project.title} className="space-y-1 border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted">{project.summary}</p>
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
    </div>
  );
}
