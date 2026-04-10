export { siteLastUpdated } from './siteMeta';

export type HomeRightNowItem = {
  title: string;
  summary: string;
  detail?: string;
  href?: string;
};

export type AIProject = {
  title: string;
  status: 'live' | 'in-progress';
  summary: string;
  learning: string;
  href: string;
};

export type NowLogItem = {
  label: string;
  text: string;
  href?: string;
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

export const homeIntro =
  'I work full-stack on payments, bridging, and staking at Polygon, focused on shipping systems that improve speed and confidence through testing, reliability, and clear docs. Outside work, I build with AI and use personal projects to sharpen agent orchestration in real-world workflows.';

export const northStarLead = 'Build systems that help people move faster with confidence.';

export const northStarWork =
  'make complex systems reliable, testable, and operable.';

export const northStarOutsideWork =
  'keep refining practical AI and agent orchestration through fast iteration and shipping.';

export const northStar = `${northStarLead} At work: ${northStarWork} Outside work: ${northStarOutsideWork}`;

export const rightNowNarrative =
  'Current focus across work, public tooling, and the personal systems behind both.';

export const rightNowSnapshot: string[] = [
  'At work: stepping into Polygon\'s Open Money Stack while keeping the bar high on reliability, testing, docs, and observability.',
  'Outside work: building agent-first CLI tools that are actually useful; tfl-cli, companies-house-cli, rail-cli, and fuel-cli are the clearest proof right now.',
  'Personal systems: tightening family planning, nutrition, and fitness so the setup supports the rest of the work instead of competing with it.',
];

export const rightNowItems: HomeRightNowItem[] = [
  {
    title: 'Excuse Me',
    summary:
      'Simple app: give it context, get a believable excuse fast.',
    detail: 'Fresh launch. Now tuning tone and weird edge cases.',
    href: 'https://excuse-me.xyz/',
  },
  {
    title: 'RoastMaster',
    summary:
      'Photo roast/glaze app with auth, credits, and share loops.',
    detail: 'Still improving output quality and first-run flow.',
    href: 'https://roastmyphoto.app/',
  },
  {
    title: 'AI systems loop',
    summary:
      'Using these apps to sharpen prompts, context packing, and safer output behaviour.',
  },
  {
    title: 'Core Polygon execution',
    summary:
      'Shipping user-facing outcomes across payments, bridging, and staking.',
  },
];

export const aiProjectsFraming =
  'Most apps now have an AI layer. I use these projects to get better at model tuning, context shaping, safety, and turning messy user input into useful output.';

export const aiProjects: AIProject[] = [
  {
    title: 'Excuse Me',
    status: 'live',
    summary:
      'Fast AI excuse generator built for quick, useful copy with controllable tone.',
    learning:
      'Keeping prompts tight, handling edge-case context cleanly, and staying useful without sounding robotic.',
    href: 'https://excuse-me.xyz/',
  },
  {
    title: 'RoastMaster',
    status: 'live',
    summary:
      'Roast and glaze photo app with uploads, auth, credits, and share loops.',
    learning:
      'Balancing style and safety, improving consistency, and finding loops that bring people back.',
    href: 'https://roastmyphoto.app/',
  },
];

export const nowFocusNarrative =
  'Current loop: bigger scope at work, sharper public tooling outside work, and cleaner systems at home.';

export const nowLogItems: NowLogItem[] = [
  {
    label: 'Polygon',
    text: 'moving into Open Money Stack while still supporting core application work when needed. Same priorities as ever: reliability, testing, docs, and operability.',
  },
  {
    label: 'CLI tools',
    text: 'tfl-cli, companies-house-cli, rail-cli, and fuel-cli — a growing suite. I am tightening the agent-first pass across all of them: predictable output, cleaner JSON, better landing pages, and better surrounding skills.',
  },
  {
    label: 'OpenClaw stability',
    text: 'cleaning up the upgrade churn so the stack is boring again: fewer false alarms, healthier crons, clearer memory behaviour, and less dead operational baggage.',
  },
  {
    label: 'Open Markets mini-series',
    text: 'shipped a three-part AI-assisted audio series on DEXs. It is a useful portfolio piece for voice, scripting, and shipping something weird but real.',
  },
  {
    label: 'Family ops',
    text: 'putting more structure around shared planning, nutrition, and training so personal life is not running on loose notes and good intentions.',
  },
];

export const nowOpenQuestionsAndAsks: string[] = [
  'Always interested in comparing notes with people building practical agent systems, especially CLI/TUI tools or operator workflows that have to work in the mess of real life.',
  'Still looking for a small, high-signal builder circle where people ship, share the rough edges, and do the occasional call instead of endless noise.',
];

export const workingStylePoints: string[] = [
  'Public by default. If it can help others and is not sensitive, it should be in-channel, not buried in DMs.',
  'Direct and clear. Cut fluff, get to the ask, and respect people\'s time.',
  'Async first for documentation and reuse. Sync when collaboration genuinely benefits.',
  'Meetings need value. I should be giving value or getting value I cannot get from notes, transcripts, or recordings.',
  'Feedback should be direct and honest: understand the why, then help unblock.',
  'Priorities: ownership and speed.',
];

export const deprioritizedItems: string[] = [
  'Dragging weak projects along just because time is already sunk. If the signal is bad, I would rather cut scope and move on.',
  'Building dashboards or automation that look clever but do not change behaviour.',
  'Trying to keep every work, builder, and personal lane equally hot at the same time.',
];

export const activeProjects: ActiveProject[] = [
  {
    title: 'Agglayer UI',
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
    nextMove: 'Continue improving developer setup and customisation paths.',
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
    title: 'tfl-cli',
    track: 'core',
    status: 'live',
    summary:
      'Transport for London in your terminal. Live tube status, journey planning, arrivals, disruptions, and bike availability. Agent-first with automatic JSON output when piped.',
    nextMove:
      'Add more transport modes and explore notification workflows.',
    href: 'https://tfl-cli.xyz',
  },
  {
    title: 'companies-house-cli',
    track: 'core',
    status: 'live',
    summary:
      'UK company data in your terminal. Search companies, directors, filings, ownership, and insolvency records via the Companies House API. Built for AI agents, still useful for humans.',
    nextMove:
      'Add more data endpoints and improve output formatting.',
    href: 'https://ch-cli.xyz',
  },
  {
    title: 'rail-cli',
    track: 'core',
    status: 'live',
    summary:
      'UK rail in your terminal. Live departures, arrivals, station search, and agent-friendly output.',
    nextMove:
      'Keep tightening the suite and add more useful workflows around real-world travel queries.',
    href: 'https://rail-cli.xyz',
  },
  {
    title: 'fuel-cli',
    track: 'core',
    status: 'live',
    summary:
      'UK fuel prices in your terminal. Find the cheapest petrol and diesel nearby, ranked by price, distance, or freshness.',
    nextMove:
      'Expand fuel type coverage and explore price alert workflows.',
    href: 'https://fuel-cli.xyz',
  },
  {
    title: 'chaingrep',
    track: 'core',
    status: 'live',
    summary:
      'Grep for on-chain events. Point at a contract and block range, get decoded event logs streamed back. No indexer, no SQL, no setup.',
    nextMove:
      'Add more chains, improve query UX, and explore saved-query workflows.',
    href: 'https://chaingrep.xyz',
  },
  {
    title: 'llm-usage',
    track: 'core',
    status: 'live',
    summary:
      'CLI tool for tracking token usage across Claude Code, Codex, and OpenRouter. Published on npm.',
    nextMove:
      'Explore cost estimation and broader provider support based on community feedback.',
    href: 'https://github.com/shan8851/llm-usage',
  },
  {
    title: 'FairSide',
    track: 'core',
    status: 'live',
    summary:
      'Simple app for generating fair 5v5, 6v6, and 7v7 football teams with constraint support.',
    nextMove:
      'Collect real match feedback, tighten balancing logic, and improve repeat setup speed.',
    href: 'https://www.fairside.app/',
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
    title: 'Operator Console',
    track: 'core',
    status: 'in-progress',
    summary:
      'Mission-control-lite for agent runs, operator visibility, and system health.',
    nextMove:
      'Turn the rough dashboard/API foundations into a cleaner Hermes-era control surface.',
    href: 'https://github.com/shan8851/giles-dashboard',
  },
  {
    title: 'skills',
    track: 'experiments',
    status: 'live',
    summary:
      'Small web UI for browsing installed agent skills and related workflows more cleanly.',
    nextMove:
      'Keep improving navigation and discovery as the skill set grows.',
    href: 'https://skills.shan8851.com',
  },
  {
    title: 'viewports',
    track: 'experiments',
    status: 'live',
    summary:
      'Quick responsive-testing tool for previewing a UI across multiple viewport sizes at once.',
    nextMove:
      'Keep tightening the daily utility for fast layout and breakpoint checks.',
    href: 'https://viewports.shan8851.com/',
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
