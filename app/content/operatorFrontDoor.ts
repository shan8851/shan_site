export type HomeRightNowItem = {
  title: string;
  summary: string;
  nextMove: string;
  href?: string;
};

export type AIProject = {
  title: string;
  status: 'live' | 'in-progress';
  summary: string;
  proofOfWork: string;
  href: string;
};

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

export const siteLastUpdated = '2026-02-20';

export const homeIntro =
  'I work on payments, bridging, and staking at Polygon. Outside work, I ship small AI products, build agent systems, and share what actually works.';

export const northStar =
  'Build reliable systems that help people move faster onchain and with AI by tightening prompts, context windows, token usage, and agent reliability instead of chasing hype.';

export const rightNowNarrative =
  'I am treating small AI products as positioning plus proof-of-work. Ship fast, watch real usage, then tighten prompts, context strategy, and product loops.';

export const rightNowItems: HomeRightNowItem[] = [
  {
    title: 'Excuse Me',
    summary:
      'Newly shipped AI app that turns messy situations into clean excuses with quick, adjustable tone.',
    nextMove:
      'Tighten tone control, edge-case handling, and retention hooks beyond the first laugh.',
    href: 'https://excuse-me.xyz/',
  },
  {
    title: 'RoastMaster',
    summary:
      'AI roast and glaze app with auth, credits, and share loops that surface real usage signal.',
    nextMove:
      'Keep improving output quality, first-run experience, and distribution that does not feel forced.',
    href: 'https://roastmyphoto.app/',
  },
  {
    title: 'AI systems loop',
    summary:
      'Using shipped apps to sharpen prompt structure, token budgets, context assembly, and agent behavior.',
    nextMove: 'Keep turning ad hoc experiments into boring, reliable workflows.',
  },
  {
    title: 'Core Polygon execution',
    summary:
      'Shipping product and engineering outcomes across payments, bridging, and staking.',
    nextMove: 'Keep driving work that has direct user impact and cleaner reliability.',
  },
];

export const aiProjectsFraming =
  'I use AI projects as applied learning and positioning. Each launch is a public receipt that I can ship, learn from real usage, and improve with data instead of vibes.';

export const aiProjects: AIProject[] = [
  {
    title: 'Excuse Me',
    status: 'live',
    summary:
      'Fast AI excuse generator built for quick, useful copy with controllable tone.',
    proofOfWork:
      'Forces tight prompt constraints, short context handling, and rapid iteration with live feedback.',
    href: 'https://excuse-me.xyz/',
  },
  {
    title: 'RoastMaster',
    status: 'live',
    summary:
      'Roast and glaze photo app with uploads, auth, credits, and share loops.',
    proofOfWork:
      'Stress-tests prompt reliability, guardrails, and repeat usage loops under real traffic.',
    href: 'https://roastmyphoto.app/',
  },
];

export const nowFocusNarrative =
  'Current loop: ship small AI apps, get usage signal, then tighten prompts, token and context strategy, and agent reliability. The target is useful systems, not gimmicks.';

export const nowLogItems: string[] = [
  'Excuse Me (https://excuse-me.xyz/): shipped and now tightening tone controls, edge-case handling, and repeat usage loops.',
  'RoastMaster (https://roastmyphoto.app/): improving first-run UX, output quality, and distribution loops that feel native.',
  'AI systems work: making prompt templates, token budgets, and context assembly more reliable under messy real input.',
  'Payments, bridging, and staking at Polygon: shipping user-impactful work with stronger end-to-end confidence and observability.',
  'Sharing practical AI workflows in public with honest notes on what failed and what actually held up.',
  'Hacking on CLIs and TUIs for operator workflows.',
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
    summary:
      'Bridge anything to Agglayer via a production-ready web experience.',
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
    title: 'RoastMaster',
    track: 'core',
    status: 'live',
    summary:
      'Roast and glaze photo app with image uploads, auth, credits, and share-friendly output loops.',
    nextMove:
      'Keep tuning output quality and run focused distribution pushes to find repeat usage loops.',
    href: 'https://roastmyphoto.app/',
  },
  {
    title: 'Excuse Me',
    track: 'core',
    status: 'live',
    summary:
      'Small AI app that generates direct, context-aware excuses with adjustable tone.',
    nextMove:
      'Tighten edge-case quality and evolve it from novelty to a sticky quick-use utility.',
    href: 'https://excuse-me.xyz/',
  },
  {
    title: 'type-safe',
    track: 'core',
    status: 'in-progress',
    summary:
      'Typing trainer I am building because I make typos constantly and wanted a tool that actually helps.',
    nextMove: 'Tighten first-run UX and get it in shape for broader sharing.',
  },
  {
    title: 'OpenClaw dashboard + API',
    track: 'core',
    status: 'in-progress',
    summary:
      'Mission-control-lite setup for agent runs, personal tracking, and server health, spanning both giles-dashboard and giles-api layers.',
    nextMove:
      'Keep pushing reliability, clean reporting, and practical operator visibility.',
    href: 'https://github.com/shan8851/giles-dashboard',
  },
  {
    title: 'clawtop',
    track: 'experiments',
    status: 'exploring',
    maturity: 'raw',
    summary:
      'Raw experiment while I play with agent-native interaction patterns.',
    nextMove:
      'Keep exploring and decide whether it graduates into a clearer product shape.',
    href: 'https://github.com/shan8851/clawtop',
  },
  {
    title: 'scratch',
    track: 'experiments',
    status: 'exploring',
    maturity: 'raw',
    summary: 'Sandbox repo for fast trials, prototypes, and rough ideas.',
    nextMove:
      'Keep using it as a pressure release valve for rapid experiments.',
    href: 'https://github.com/shan8851/scratch',
  },
  {
    title: 'pomo',
    track: 'experiments',
    status: 'exploring',
    summary: 'Small project for focus and time-structure experiments.',
    nextMove:
      'Decide whether to keep it lightweight or fold insights into broader systems.',
    href: 'https://github.com/shan8851/pomo',
  },
  {
    title: 'Onchain agent experiments',
    track: 'experiments',
    status: 'exploring',
    summary:
      'Playing with agent workflows around DeFi and meme-coin style experimentation.',
    nextMove:
      'Keep this experimental and risk-aware while patterns are still forming.',
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
