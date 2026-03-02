export type ProofEntry = {
  id: string;
  date: string;
  title: string;
  summary: string;
  problem: string;
  fix: string;
  result: string;
};

export const proofLastUpdated = '2026-03-02';

export const playbooksRepo = {
  description:
    'Skills + playbooks are now in a dedicated repo. Detailed entries are being added next, with personal details redacted.',
  href: 'https://github.com/shan8851/skills-playbooks',
  cta: 'view skills-playbooks',
};

export const proofEntries: ProofEntry[] = [
  {
    id: 'LOG-2026-03-02-A',
    date: '2026-03-02',
    title: 'Shipped FairSide with an agent-first coding workflow',
    summary: 'Shipped the app using agent-driven implementation end-to-end.',
    problem:
      'Wanted to ship faster while improving orchestration skill, not hand-writing every line.',
    fix:
      'Ran the build as a 100% agent-coding loop and focused personally on direction, prompts, and review.',
    result:
      'FairSide shipped without manual line-by-line coding, with stronger orchestration reps.',
  },
  {
    id: 'LOG-2026-02-25-A',
    date: '2026-02-25',
    title: 'Started shan-api as a standalone content service discovery',
    summary: 'Created the first docs scaffold for turning site content into a reusable API.',
    problem:
      'Site content was tightly coupled to one frontend, limiting reuse across CLI, agents, and future surfaces.',
    fix:
      'Defined discovery docs covering contract, versioning, auth, deployment, and observability questions.',
    result:
      'Clear path to build a canonical data layer instead of duplicating content logic per surface.',
  },
  {
    id: 'LOG-2026-02-24-A',
    date: '2026-02-24',
    title: 'Built email assistant loop and reduced inbox noise hard',
    summary: 'Cleaned inbox backlog and shipped twice-daily cron email triage workflows.',
    problem:
      'Email noise was burying important actions and wasting focus time.',
    fix:
      'Ran a major cleanup pass and set up automated triage routines that run twice daily.',
    result:
      'Inbox dropped from thousands to under 200, with a durable twice-daily process for staying clean.',
  },
  {
    id: 'LOG-2026-02-20-A',
    date: '2026-02-20',
    title: 'Shipped Excuse Me and started prompt tuning loop',
    summary: 'Shipped Excuse Me and set up a practical prompt tuning loop.',
    problem:
      'Quick AI excuse tools usually break on messy context and output sounds samey.',
    fix:
      'Built a tighter context -> intent -> tone path, then iterated on edge cases.',
    result:
      'Live app is useful out of the box with a clear loop for quality tuning.',
  },
  {
    id: 'LOG-2026-02-19-A',
    date: '2026-02-19',
    title: 'RoastMaster hardening pass before next growth/testing cycle',
    summary: 'Reduced RoastMaster product friction before the next growth/testing cycle.',
    problem:
      'Output quality was improving, but auth/nav friction hurt repeat usage.',
    fix:
      'Simplified flow touchpoints, cleaned the user path, and tightened docs for faster iteration.',
    result:
      'Less product friction and a better base for distribution and tuning.',
  },
  {
    id: 'LOG-2026-02-18-A',
    date: '2026-02-18',
    title: 'Hardened OpenClaw heartbeat and observer checks',
    summary: 'Hardened OpenClaw health checks to catch failures earlier.',
    problem:
      'Health and cron issues were surfacing too late.',
    fix:
      'Hardened heartbeat checks across gateway/channel health, cron sanity, briefing readiness, and browser hygiene.',
    result:
      'Faster fault detection and steadier day-to-day ops.',
  },
  {
    id: 'LOG-2026-02-17-A',
    date: '2026-02-17',
    title: 'Consolidated Discord routing lanes for agent execution',
    summary: 'Organised Discord routing to keep signal-to-noise high.',
    problem:
      'Too many channels with overlapping intent. Lots of context switching. More noise than signal.',
    fix:
      'Consolidated lane ownership and tightened the allowlist for execution and monitoring.',
    result:
      'Lower noise, faster triage, and better operational clarity when something breaks.',
  },
  {
    id: 'LOG-2026-02-16-A',
    date: '2026-02-16',
    title: 'Standardised background-task completion receipts',
    summary: 'Standardised background task receipts so autonomous runs stay auditable.',
    problem:
      'Background runs could finish without a clear summary of change, validation, and risk.',
    fix:
      'Standardised completion receipts and explicit task-state updates.',
    result:
      'Higher trust in autonomous runs and fewer ambiguous done states.',
  },
];
