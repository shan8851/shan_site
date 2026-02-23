export type ProofFocus = 'openclaw-ops' | 'agent-workflow' | 'shipped-app';

export type ProofEvidence = {
  label: string;
  href?: string;
};

export type ProofEntry = {
  slug: string;
  date: string;
  focus: ProofFocus;
  title: string;
  problem: string;
  intervention: string;
  outcome: string;
  stack: string[];
  evidence: ProofEvidence[];
};

export const proofLastUpdated = '2026-02-23';

export const playbooksRepo = {
  label: 'Workflow playbooks (sanitised)',
  description:
    'Detailed playbooks are being moved to a separate git repo with personal details removed. For now, they live alongside my repos and are being split out.',
  href: 'https://github.com/shan8851?tab=repositories',
  cta: 'view repos',
};

export const proofEntries: ProofEntry[] = [
  {
    slug: 'excuse-me-launch-loop',
    date: '2026-02-20',
    focus: 'shipped-app',
    title: 'Shipped Excuse Me + started prompt reliability loop',
    problem:
      'Most quick “AI excuse” tools fall apart when context is messy and produce generic, robotic copy.',
    intervention:
      'Shipped a tight context -> intent -> tone flow, then started iterative tuning on edge cases and tone control.',
    outcome:
      'Live app is fast and usable; next work is focused on consistency under weird real-world input.',
    stack: ['Prompt constraints', 'Context shaping', 'Tone control', 'Safety checks'],
    evidence: [{ label: 'Live app', href: 'https://excuse-me.xyz/' }],
  },
  {
    slug: 'roastmaster-hardening-loop',
    date: '2026-02-19',
    focus: 'shipped-app',
    title: 'RoastMaster hardening before webhook/testing pass',
    problem:
      'Output quality was improving, but nav/auth affordances and flow consistency still added friction.',
    intervention:
      'Tightened route flow, simplified auth/navigation touchpoints, and cleaned handoff docs for faster iteration.',
    outcome:
      'Cleaner user path and a more reliable base for further output + distribution tuning.',
    stack: ['Prompt iteration', 'Auth flow polish', 'App UX cleanup', 'Doc-driven handoff'],
    evidence: [{ label: 'Live app', href: 'https://roastmyphoto.app/' }],
  },
  {
    slug: 'openclaw-heartbeat-hardening',
    date: '2026-02-18',
    focus: 'openclaw-ops',
    title: 'Hardened OpenClaw heartbeat + observer checks',
    problem:
      'Health checks were too easy to miss and some failures surfaced later than they should have.',
    intervention:
      'Added/updated heartbeat checks for gateway + channel health, cron sanity, briefing readiness, and browser hygiene.',
    outcome:
      'Faster fault detection and fewer blind spots in day-to-day agent operations.',
    stack: ['OpenClaw', 'Cron observer', 'Discord routing', 'Ops checklist'],
    evidence: [{ label: 'Implementation notes (internal)' }],
  },
  {
    slug: 'mission-control-active-tasks',
    date: '2026-02-17',
    focus: 'openclaw-ops',
    title: 'Added mission-control views for active tasks + critical cron health',
    problem:
      'Background agent work was hard to audit quickly; too much hunting for state across logs.',
    intervention:
      'Shipped endpoints + dashboard wiring for active-task board and critical-cron health signals.',
    outcome:
      'At-a-glance operational visibility and faster triage when something drifts.',
    stack: ['OpenClaw API integrations', 'Task-state normalization', 'Dashboard UX'],
    evidence: [
      { label: 'Dashboard repo', href: 'https://github.com/shan8851/giles-dashboard' },
      { label: 'API repo', href: 'https://github.com/shan8851/giles-api' },
    ],
  },
  {
    slug: 'discord-routing-consolidation',
    date: '2026-02-17',
    focus: 'agent-workflow',
    title: 'Consolidated Discord routing lanes for agent execution',
    problem:
      'Output and execution messages were spread across channels, increasing noise and context switching.',
    intervention:
      'Moved to a tighter channel allowlist and clearer lane ownership for execution, alerts, and curated outputs.',
    outcome:
      'Lower channel noise, cleaner operational flow, and easier debugging when things break.',
    stack: ['Routing policy', 'Channel allowlists', 'Agent execution lanes'],
    evidence: [{ label: 'Routing spec + notes (internal)' }],
  },
  {
    slug: 'bg-task-receipts-discipline',
    date: '2026-02-16',
    focus: 'agent-workflow',
    title: 'Tightened background-task receipt discipline',
    problem:
      'Long-running agent work could finish without a crisp “what changed / what passed / what is next” receipt.',
    intervention:
      'Standardised completion reporting and active-task tracking to force explicit outcomes and validation status.',
    outcome:
      'Fewer ambiguous finishes and better trust in autonomous runs.',
    stack: ['Sub-agent orchestration', 'Task-state logging', 'Completion receipts'],
    evidence: [{ label: 'Task log workflow (internal)' }],
  },
];
