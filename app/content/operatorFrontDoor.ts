export type FocusTrack = {
  title: string;
  status: 'active' | 'shipping' | 'tightening';
  objective: string;
  nextMove: string;
  signal: string;
};

export type NowLogItem = string;

export type ActiveProject = {
  title: string;
  track: 'core' | 'experiments';
  status: 'live' | 'in-progress' | 'exploring';
  summary: string;
  nextMove?: string;
  maturity?: 'raw';
  href?: string;
};

export type ShippedWorkItem = {
  title: string;
  summary: string;
  href: string;
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
    objective: 'Ship clean, reliable product and engineering outcomes across payments, bridging, and staking.',
    nextMove: 'Keep execution on work that has direct user impact.',
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

export const nowLogItems: NowLogItem[] = [
  'Payments, bridging, and staking at Polygon: building comprehensive end-to-end testing that ties web3 app flows, onchain calls, and backend services for full-confidence releases, plus stronger monitoring across onchain and backend systems.',
  'Practical AI agents in real workflows: turning experiments into boring, reliable systems that save real time day to day.',
  'Sharing practical AI workflows in public.',
  "Dealing with the cognitive overload from agentic coding and the 'one more prompt' syndrome.",
  'Hacking on CLIs and TUIs.',
];

export const nowOpenQuestionsAndAsks: string[] = [
  'I am looking for a small, high-signal builder community to learn and ship with — DM me on X if you are building one or want to join one.',
  'If you are building practical agent systems (especially in engineering or ops), I am up for comparing notes.',
  'Open to intros to thoughtful builders in onchain product and AI tooling.',
];

export const workingStylePoints: string[] = [
  'Public by default. If it can help others and is not sensitive, it should be in-channel, not buried in DMs.',
  'Direct and clear. Cut fluff, get to the ask, and respect people\'s time.',
  'Async first for documentation and reuse. Sync when collaboration genuinely benefits.',
  'Meetings need value. I should be giving value or getting value I cannot get from notes, transcript, or recording.',
  'Feedback should be direct and honest. Understand the why, then help unblock.',
  'Priorities: ownership and speed.',
];

export const deprioritizedItems: string[] = [
  'Chasing vanity posting volume over useful signal.',
  'Turning this site into a gimmicky personal dashboard.',
  'Over-worrying that some goals are paused while I double down on AI learning and agent orchestration; short-term sacrifice is worth the long-term leverage.',
];

export const activeProjects: ActiveProject[] = [
  {
    title: 'Agglayer bridge interface',
    track: 'core',
    status: 'live',
    summary: 'Bridge anything to Agglayer via a production-ready web experience.',
    nextMove: 'Keep tightening UX and reliability across supported routes.',
    href: 'https://ui.agglayer.dev/',
  },
  {
    title: 'Agglayer Dev UI',
    track: 'core',
    status: 'live',
    summary:
      'Configurable, self-hosted bridging interface powered by the Agglayer SDK and Bridge Hub API.',
    nextMove: 'Continue improving developer setup and customization paths.',
    href: 'https://github.com/agglayer/agglayer-dev-ui',
  },
  {
    title: 'Agglayer SDK',
    track: 'core',
    status: 'live',
    summary: 'Unified client interface for native and aggregator bridging.',
    nextMove: 'Keep hardening ergonomics and integration reliability.',
    href: 'https://github.com/agglayer/sdk',
  },
  {
    title: 'type-safe',
    track: 'core',
    status: 'in-progress',
    summary: 'Typing trainer I am building because I make typos constantly and wanted a tool that actually helps.',
    nextMove: 'Tighten first-run UX and get it in shape for broader sharing.',
  },
  {
    title: 'OpenClaw dashboard + API',
    track: 'core',
    status: 'in-progress',
    summary:
      'Mission-control-lite setup for agent runs, personal tracking, and server health, spanning both giles-dashboard and giles-api layers.',
    nextMove: 'Keep pushing reliability, clean reporting, and practical operator visibility.',
    href: 'https://github.com/shan8851/giles-dashboard',
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

export const selectedShippedWork: ShippedWorkItem[] = [
  {
    title: 'Cielo',
    summary:
      'Instrumental in evolving Cielo from a Discord bot into a fully-fledged wallet discovery platform.',
    href: 'https://cielo.finance/',
  },
  {
    title: 'Aragon UI Kit',
    summary:
      'Major contributor to the open-source governance UI kit used to build onchain governance experiences.',
    href: 'https://uikit.aragon.org/?path=/docs/docs-documentation--docs',
  },
  {
    title: 'Aragon App 2.0',
    summary: 'Helped bring Aragon App 2.0 to life, shipping modular onchain governance UX.',
    href: 'https://app.aragon.org/?daoFilter=all',
  },
];
