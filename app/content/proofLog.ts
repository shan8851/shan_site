export type ProofEntry = {
  id: string;
  date: string;
  title: string;
  problem: string;
  fix: string;
  result: string;
};

export const proofLastUpdated = '2026-02-23';

export const playbooksRepo = {
  description:
    'Detailed workflow playbooks are being moved into a separate git repo with personal details redacted.',
  href: 'https://github.com/shan8851?tab=repositories',
  cta: 'view repos',
};

export const proofEntries: ProofEntry[] = [
  {
    id: 'LOG-2026-02-20-A',
    date: '2026-02-20',
    title: 'Shipped Excuse Me and started reliability tuning',
    problem:
      'Most quick AI excuse tools break when context is messy and output sounds generic.',
    fix:
      'Built a tighter context -> intent -> tone flow and started iterative tuning on edge cases.',
    result:
      'Live app is fast and useful, with a clear loop for improving consistency under real-world input.',
  },
  {
    id: 'LOG-2026-02-19-A',
    date: '2026-02-19',
    title: 'RoastMaster hardening pass before next growth/testing cycle',
    problem:
      'Core output quality was improving but UX friction in navigation/auth flow slowed repeat usage.',
    fix:
      'Simplified flow touchpoints, cleaned user path, and tightened docs for quicker iteration.',
    result:
      'Stronger base for distribution and output tuning, with less product friction.',
  },
  {
    id: 'LOG-2026-02-18-A',
    date: '2026-02-18',
    title: 'Hardened OpenClaw heartbeat and observer checks',
    problem:
      'Health and cron issues could surface too late, which made ops noisier than needed.',
    fix:
      'Tightened heartbeat checks across gateway/channel health, cron sanity, briefing readiness, and browser hygiene.',
    result:
      'Faster fault detection and cleaner day-to-day reliability on agent operations.',
  },
  {
    id: 'LOG-2026-02-17-A',
    date: '2026-02-17',
    title: 'Consolidated Discord routing lanes for agent execution',
    problem:
      'Execution and status outputs were scattered, causing context switching and avoidable noise.',
    fix:
      'Moved to a tighter channel allowlist with clearer lane ownership for execution and monitoring.',
    result:
      'Lower noise, faster triage, and better operational clarity when something breaks.',
  },
  {
    id: 'LOG-2026-02-16-A',
    date: '2026-02-16',
    title: 'Standardised background-task completion receipts',
    problem:
      'Long-running agent tasks could finish without a crisp summary of change, validation, and risk.',
    fix:
      'Enforced structured completion reporting for background runs and explicit task-state updates.',
    result:
      'Higher trust in autonomous runs and fewer ambiguous “done” states.',
  },
];
