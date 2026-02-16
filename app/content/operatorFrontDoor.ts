export type FocusTrack = {
  title: string;
  status: 'active' | 'shipping' | 'tightening';
  objective: string;
  nextMove: string;
  signal: string;
};

export type WeeklyCadenceItem = {
  window: string;
  focus: string;
};

export type ActiveProject = {
  title: string;
  track: 'work' | 'systems' | 'builds';
  status: 'live' | 'in-progress' | 'stabilizing';
  summary: string;
  nextMove: string;
  href?: string;
};

export type DecisionPolicyItem = {
  mode: string;
  defaultAction: string;
  examples: string;
};

export type OperatorMetric = {
  label: string;
  target: string;
  reason: string;
};

export const operatorLastUpdated = '2026-02-16';

export const operatorIntro =
  'I build payment and automation systems that stay calm in production. This site is the public front door for what I am shipping and what I am learning in real time.';

export const currentFocusTracks: FocusTrack[] = [
  {
    title: 'Polygon dapp e2e quality',
    status: 'shipping',
    objective: 'Expand practical Playwright coverage and turn repeatable test flows into the default.',
    nextMove: 'Map current suite constraints and define a clean path toward Kurtosis-backed runs.',
    signal: 'Coverage should increase without making local setup painful.',
  },
  {
    title: 'POL liquid staking hardening',
    status: 'active',
    objective: 'Land UI security report fixes while keeping redesign momentum.',
    nextMove: 'Treat security fixes as unblockers, not side quests, and run redesign work in parallel.',
    signal: 'No regressions on user-critical flows during redesign rollout.',
  },
  {
    title: 'Backend ownership growth',
    status: 'active',
    objective: 'Own meaningful backend work end-to-end instead of just helping around the edges.',
    nextMove: 'Select a viable scoped backend task and drive it from planning to release.',
    signal: 'Scope clarity + shipped outcome > vague “involved in backend” claims.',
  },
  {
    title: 'Operator systems reliability',
    status: 'tightening',
    objective: 'Keep automation useful, low-noise, and execution-first.',
    nextMove: 'Continue playbook-first loops, fix-first heartbeat behavior, and cleaner reporting discipline.',
    signal: 'More issues resolved automatically, fewer repetitive alerts.',
  },
];

export const weeklyCadence: WeeklyCadenceItem[] = [
  {
    window: 'Daily',
    focus: 'Ship real work first. Keep personal systems improvements lightweight and compounding.',
  },
  {
    window: 'Mon / Thu',
    focus: 'Refresh X signal loop (opportunities, post ideas, replies) without forcing posting volume.',
  },
  {
    window: 'Weekly review',
    focus: 'Review what shipped, what drifted, and which automation loops need hardening.',
  },
  {
    window: 'Monthly',
    focus: 'Cut dead process, keep what compounds, and reset priorities around leverage.',
  },
];

export const deprioritizedItems: string[] = [
  'Newsletter is paused until there is stronger signal and repeatable depth.',
  'Polymarket lane is intentionally removed due to UK access friction.',
  'Over-instrumenting personal systems when simple loops already work.',
];

export const activeProjects: ActiveProject[] = [
  {
    title: 'giles-dashboard',
    track: 'systems',
    status: 'stabilizing',
    summary: 'Operator dashboard for daily health, reminders, and execution visibility.',
    nextMove: 'Keep ops cards actionable and reduce stale/noisy signals.',
    href: 'https://github.com/shan8851/giles-dashboard',
  },
  {
    title: 'giles-api',
    track: 'systems',
    status: 'stabilizing',
    summary: 'API surface behind dashboard ops, reminders, OpenClaw status, and workflow endpoints.',
    nextMove: 'Continue reliability pass: tighter health boundaries, cleaner diagnostics, safer defaults.',
    href: 'https://github.com/shan8851/giles-api',
  },
  {
    title: 'type-safe',
    track: 'builds',
    status: 'in-progress',
    summary: 'Typing trainer for developers with strict scoring and useful analytics.',
    nextMove: 'Improve first-run UX and launch a clean public repo.',
  },
  {
    title: 'x growth loop',
    track: 'systems',
    status: 'live',
    summary: 'Research-first loop for high-signal opportunities, replies, and practical post concepts.',
    nextMove: 'Keep refresh cadence lightweight and quality-focused, not vanity-volume driven.',
  },
  {
    title: 'shan_site',
    track: 'work',
    status: 'in-progress',
    summary: 'Minimal public site for notes, current focus, and operating model.',
    nextMove: 'Make the homepage a stronger operator front door with sharp, current context.',
    href: 'https://github.com/shan8851/shan_site',
  },
];

export const decisionPolicy: DecisionPolicyItem[] = [
  {
    mode: 'auto-execute',
    defaultAction: 'Do internal, reversible, low-risk tasks without permission loops.',
    examples: 'repo hygiene, documentation updates, non-destructive ops fixes',
  },
  {
    mode: 'ask-first',
    defaultAction: 'Pause before external sends, destructive actions, credential changes, or spend.',
    examples: 'public posts, outbound comms, irreversible deletes, money movement',
  },
  {
    mode: 'fix-then-report',
    defaultAction: 'For obvious breakages, patch and validate first, then report clearly.',
    examples: 'cron drift, script path breakages, stale workflow glue',
  },
];

export const operatingPrinciples: string[] = [
  'Boring reliability beats flashy demos.',
  'One strong loop is better than five half-automated loops.',
  'Write decisions down so context compounds.',
  'If a process cannot survive a bad day, it is not done.',
];

export const operatorScoreboard: OperatorMetric[] = [
  {
    label: 'Low-risk tasks handled autonomously',
    target: 'high and rising',
    reason: 'Reduces context-switch tax and keeps flow state intact.',
  },
  {
    label: 'Ops breakages fixed before alerting',
    target: 'default behavior',
    reason: 'Execution beats noisy awareness.',
  },
  {
    label: 'Public outputs with clear receipts',
    target: 'every meaningful change',
    reason: 'Trust comes from visible outcomes, not intent.',
  },
];
