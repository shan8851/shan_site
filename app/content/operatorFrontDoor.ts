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
  track: 'core' | 'experiments';
  status: 'live' | 'in-progress' | 'exploring';
  summary: string;
  nextMove: string;
  maturity?: 'raw';
  href?: string;
};

export const siteLastUpdated = '2026-02-16';

export const homeIntro =
  'I work on payments, bridging, and staking at Polygon. Outside work, I build practical AI agent systems, share what I learn, and keep things useful over flashy.';

export const northStar =
  'Build reliable systems that help people move faster — onchain and with AI.';

export const currentFocusTracks: FocusTrack[] = [
  {
    title: 'Payments, bridging, and staking work at Polygon',
    status: 'shipping',
    objective: 'Ship clean, reliable product and engineering outcomes in core onchain rails.',
    nextMove: 'Keep execution focused on work that has direct user and platform impact.',
    signal: 'Shipped outcomes and clearer ownership over noisy activity.',
  },
  {
    title: 'Practical AI agents in real workflows',
    status: 'active',
    objective: 'Turn agent experiments into repeatable systems that save real time.',
    nextMove: 'Keep tightening reliability, reporting, and low-friction daily usage.',
    signal: 'Fewer manual loops and more trustworthy automation receipts.',
  },
  {
    title: 'Share useful AI lessons in public',
    status: 'tightening',
    objective: 'Help people get to grips with AI, especially agent workflows, without hype spam.',
    nextMove: 'Publish practical notes and tighter X content around what actually worked.',
    signal: 'Higher-quality interactions and repeatable content cadence.',
  },
];

export const weeklyCadence: WeeklyCadenceItem[] = [
  {
    window: 'Daily',
    focus: 'Ship core work first, then invest in systems that compound.',
  },
  {
    window: 'Mon / Thu',
    focus: 'Refresh X opportunities and post/reply ideas without forcing volume.',
  },
  {
    window: 'Weekly review',
    focus: 'Check what shipped, what drifted, and what to cut.',
  },
];

export const deprioritizedItems: string[] = [
  'Publishing sensitive internal details before they are clearly public.',
  'Chasing vanity posting volume over useful signal.',
  'Turning this site into a gimmicky personal dashboard.',
];

export const activeProjects: ActiveProject[] = [
  {
    title: 'type-safe',
    track: 'core',
    status: 'in-progress',
    summary: 'Typing trainer I am building because I make typos constantly and wanted a tool that actually helps.',
    nextMove: 'Tighten first-run UX and get it in shape for broader sharing.',
  },
  {
    title: 'OpenClaw agent dashboard',
    track: 'core',
    status: 'in-progress',
    summary: 'Personal ops and tracking surface for agent runs, system health, and day-to-day execution visibility.',
    nextMove: 'Keep pushing mission-control-lite features without adding noise.',
    href: 'https://github.com/shan8851/giles-dashboard',
  },
  {
    title: 'OpenClaw agent API',
    track: 'core',
    status: 'in-progress',
    summary: 'Backend that powers the dashboard and automation endpoints behind it.',
    nextMove: 'Harden reliability boundaries and tighten diagnostics.',
    href: 'https://github.com/shan8851/giles-api',
  },
  {
    title: 'clawtop',
    track: 'experiments',
    status: 'exploring',
    maturity: 'raw',
    summary: 'Raw experiment while I play with agent-native interaction patterns.',
    nextMove: 'Keep exploring and decide whether it graduates into a clearer product shape.',
    href: 'https://github.com/shan8851/clawtop',
  },
  {
    title: 'scratch',
    track: 'experiments',
    status: 'exploring',
    maturity: 'raw',
    summary: 'Sandbox repo for fast trials, prototypes, and rough ideas.',
    nextMove: 'Keep using it as a pressure release valve for rapid experiments.',
    href: 'https://github.com/shan8851/scratch',
  },
  {
    title: 'pomo',
    track: 'experiments',
    status: 'exploring',
    summary: 'Small project for focus and time-structure experiments.',
    nextMove: 'Decide whether to keep it lightweight or fold insights into broader systems.',
    href: 'https://github.com/shan8851/pomo',
  },
  {
    title: 'Onchain agent experiments',
    track: 'experiments',
    status: 'exploring',
    summary: 'Playing with agent workflows around DeFi and meme-coin style experimentation.',
    nextMove: 'Keep this experimental and risk-aware while patterns are still forming.',
  },
];

export const operatingPrinciples: string[] = [
  'Keep it practical: useful beats clever.',
  'Ship receipts, not theatre.',
  'Prefer compounding systems over one-off hustle.',
  'If it adds noise, cut it.',
];
