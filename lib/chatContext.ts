import {
  activeProjects,
  homeIntro,
  northStar,
  northStarLead,
  northStarOutsideWork,
  northStarWork,
  nowFocusNarrative,
  nowLogItems,
  nowOpenQuestionsAndAsks,
  rightNowNarrative,
  rightNowSnapshot,
  selectedShippedWork,
  siteLastUpdated,
  workingStylePoints,
} from '../app/content/operatorFrontDoor';
import { labs, labsLastUpdated } from '../app/content/labs';
import { PROFILE } from '../app/content/profile';
import { logEntries, logLastUpdated } from '../app/content/proofLog';
import { usesLastUpdated, usesSections } from '../app/content/uses';

type WritingContextEntry = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

const writingContextEntries: WritingContextEntry[] = [
  {
    slug: 'agent-basics',
    title: 'Working Effectively With Agents',
    date: '2026-02-06',
    summary: 'A practical checklist for working effectively with agents and automated systems.',
    tags: ['agents'],
  },
  {
    slug: 'agents-are-building-their-own-internet',
    title: 'Agents are building their own internet',
    date: '2026-01-31',
    summary: 'Strap in.',
    tags: ['ai'],
  },
  {
    slug: 'ai-overload',
    title: 'The cognitive overload from agentic coding is real.',
    date: '2026-02-15',
    summary: 'Observations after a couple of months all in on agentic coding.',
    tags: ['ai'],
  },
  {
    slug: 'back-to-blockchain',
    title: 'Back to Blockchain',
    date: '2023-10-29',
    summary: 'Taking another crack at Solidity to broaden my development skills.',
    tags: ['learning', 'crypto'],
  },
  {
    slug: 'breadth-vs-depth',
    title: 'Breadth vs Depth',
    date: '2024-03-07',
    summary: 'Exploring the tug-of-war between diversifying skills and deepening expertise',
    tags: ['learning', 'career'],
  },
  {
    slug: 'chaingrep',
    title: 'I built grep for on-chain events',
    date: '2026-03-12',
    summary: 'I kept doing the same thing at work. So I built the tool I wanted and put it on the internet.',
    tags: ['web3', 'building'],
  },
  {
    slug: 'clawdbot',
    title: 'OpenClaw is insane',
    date: '2026-01-29',
    summary: 'Obligatory OpenClaw post.',
    tags: ['ai', 'agents'],
  },
  {
    slug: 'dangers-of-ai',
    title: 'AI in development',
    date: '2023-11-12',
    summary: 'A double-edged sword for junior devs',
    tags: ['career', 'ai'],
  },
  {
    slug: 'docs-are-a-performance-feature',
    title: 'Docs are a performance feature',
    date: '2026-03-10',
    summary: 'In AI-heavy teams, clear documentation is not overhead. It is infrastructure that makes humans and agents faster.',
    tags: ['engineering', 'ai', 'docs'],
  },
  {
    slug: 'harsh-truth',
    title: 'The harsh truth about struggling in the job market.',
    date: '2023-10-24',
    summary: 'The market can be hard, but your positioning and execution still decide outcomes.',
    tags: ['career', 'jobs'],
  },
  {
    slug: 'job-market-narrative',
    title: 'Is AI driven job loss overblown?',
    date: '2026-02-09',
    summary: 'AI is shifting expectations faster than it is eliminating roles outright.',
    tags: ['ai', 'jobs'],
  },
  {
    slug: 'mentoring-juniors-agent-era',
    title: 'Mentoring juniors when agents write most of the code',
    date: '2026-03-07',
    summary: 'When agents handle implementation, mentoring shifts from teaching syntax to teaching judgement, debugging, and ownership.',
    tags: ['ai', 'mentoring', 'career'],
  },
  {
    slug: 'prompting-beats-model-choice',
    title: 'Prompting beat model choice on RoastMaster (until it didn’t)',
    date: '2026-03-04',
    summary: 'I tuned Grok and Sonnet on RoastMaster. Prompt constraints made the biggest difference first, then model personality became the deciding factor.',
    tags: ['ai', 'prompting', 'building', 'roastmaster'],
  },
  {
    slug: 'roastmaster-launch',
    title: 'I built RoastMaster this week',
    date: '2026-02-20',
    summary: 'I wanted to ship something stupid-fun with real product constraints. RoastMaster is what came out.',
    tags: ['ai', 'building', 'launch'],
  },
  {
    slug: 'save-1-hour',
    title: 'One AI system to save an hour+ this week',
    date: '2026-02-13',
    summary: 'A simple weekly AI execution loop that can save you at least an hour without new tools.',
    tags: ['ai', 'productivity'],
  },
  {
    slug: 'scrappy',
    title: 'Back to scrappy',
    date: '2025-04-28',
    summary: 'Getting back to my comfort zone - shipping things.',
    tags: ['learning', 'crypto'],
  },
  {
    slug: 'shipped-fairside',
    title: 'I shipped FairSide',
    date: '2026-03-02',
    summary: 'I am in three weekly games with overlapping players and messy team picks, so I built FairSide to make fair teams fast.',
    tags: ['building', 'launch', 'football'],
  },
  {
    slug: 'standups',
    title: 'The 45 minute standup',
    date: '2025-08-07',
    summary: 'It is not fine. It is not collaboration. It is process debt.',
    tags: ['career'],
  },
  {
    slug: 'stop-dodging-messy-codebase',
    title: 'Stop dodging the messy codebase',
    date: '2026-03-14',
    summary: 'The rough codebases everyone avoids are where the real learning and visibility live. A recent dependency upgrade turned into a full cleanup and the team noticed.',
    tags: ['engineering', 'career', 'refactoring'],
  },
  {
    slug: 'surviving-ai-overload',
    title: 'Surviving the overload',
    date: '2026-03-03',
    summary: 'The follow up. How I am actually dealing with agentic coding burnout.',
    tags: ['ai'],
  },
  {
    slug: 'take-homes',
    title: 'Take home tests',
    date: '2023-11-01',
    summary: 'How to actually get them right.',
    tags: ['career'],
  },
  {
    slug: 'work-life-balance',
    title: 'Work life balance',
    date: '2025-08-30',
    summary: 'Does it exist for high achievers?',
    tags: ['career'],
  },
  {
    slug: 'working-harder-isnt-the-lever-anymore',
    title: 'Working harder is not the lever anymore',
    date: '2026-02-04',
    summary: 'Hard work is still required. It is just not the advantage. Systems are.',
    tags: ['ai', 'career'],
  },
];

const formatSection = (title: string, lines: string[]): string =>
  [`[${title}]`, ...lines.filter(Boolean)].join('\n');

const formatList = (items: string[]): string[] =>
  items.map((item) => `- ${item}`);

const recentLogEntries = [...logEntries]
  .sort((entryA, entryB) => entryB.date.localeCompare(entryA.date) || entryB.id.localeCompare(entryA.id))
  .slice(0, 20);

export const buildSiteContext = (): string => {
  const profileSection = formatSection('Profile', [
    `Handle: ${PROFILE.handle}`,
    `Name: ${PROFILE.name}`,
    `Tagline: ${PROFILE.tagline}`,
    `Bio: ${PROFILE.bio}`,
    PROFILE.location ? `Location: ${PROFILE.location}` : '',
    `Email: ${PROFILE.links.email?.replace('mailto:', '') ?? 'asamshan456@gmail.com'}`,
    `GitHub: ${PROFILE.links.github ?? 'n/a'}`,
    `X: ${PROFILE.links.x ?? 'n/a'}`,
    `Telegram: ${PROFILE.links.telegram ?? 'n/a'}`,
    'Pinned links:',
    ...PROFILE.pinned.map((pinnedLink) => `- ${pinnedLink.title}: ${pinnedLink.note} (${pinnedLink.href})`),
  ]);

  const operatorSection = formatSection('Operator Front Door', [
    `Site last updated: ${siteLastUpdated}`,
    `Home intro: ${homeIntro}`,
    `North star lead: ${northStarLead}`,
    `North star work: ${northStarWork}`,
    `North star outside work: ${northStarOutsideWork}`,
    `North star combined: ${northStar}`,
    `Right now narrative: ${rightNowNarrative}`,
    'Right now snapshot:',
    ...formatList(rightNowSnapshot),
    `Now focus narrative: ${nowFocusNarrative}`,
    'Now log items:',
    ...nowLogItems.map((item) => `- ${item.label}: ${item.text}${item.href ? ` (${item.href})` : ''}`),
    'Working style:',
    ...formatList(workingStylePoints),
    'Open questions and asks:',
    ...formatList(nowOpenQuestionsAndAsks),
    'Active projects (see /projects for the full page):',
    ...activeProjects.map(
      (project) =>
        `- ${project.title} [track=${project.track}; status=${project.status}${project.maturity ? `; maturity=${project.maturity}` : ''}]: ${project.summary}${project.nextMove ? ` Next move: ${project.nextMove}.` : ''}${project.href ? ` (${project.href})` : ''}`
    ),
    'Selected shipped work:',
    ...selectedShippedWork.map((workItem) => `- ${workItem.title}: ${workItem.summary} (${workItem.href})`),
  ]);

  const writingSection = formatSection('Writing Index (/notes)', [
    'Each note includes a summary only, not the full body:',
    ...writingContextEntries
      .sort((entryA, entryB) => entryB.date.localeCompare(entryA.date))
      .map(
        (entry) =>
          `- /notes/${entry.slug} | ${entry.title} | date=${entry.date} | tags=${entry.tags.join(', ') || 'none'} | summary=${entry.summary}`
      ),
  ]);

  const logSection = formatSection('Proof Log (/log)', [
    `Last updated: ${logLastUpdated}`,
    'Recent entries:',
    ...recentLogEntries.map((entry) => `- ${entry.date} | ${entry.id} | ${entry.text}`),
  ]);

  const labsSection = formatSection('Labs (/labs)', [
    `Last updated: ${labsLastUpdated}`,
    ...labs.map((lab) => `- ${lab.title} [${lab.status}]: ${lab.summary} (${lab.href})`),
  ]);

  const usesSection = formatSection('Uses (/uses)', [
    `Last updated: ${usesLastUpdated}`,
    ...usesSections.flatMap((section) => [
      `${section.title}:`,
      ...section.items.map((item) => `- ${item.label}: ${item.value}`),
    ]),
  ]);

  const cvSection = formatSection('CV / Work History (cv.shan8851.com)', [
    'Title: Senior Full Stack Engineer (Applications)',
    'Summary: Frontend-focused engineer shipping production web3 products across bridging, governance, and analytics. Builds clear UX for complex onchain workflows and improves release quality through CI/CD, e2e coverage, runbooks, and observability.',
    'Core skills: TypeScript, React, Next.js, GraphQL, REST APIs, Redux/TanStack Query, EVM integrations (Viem/Wagmi), frontend architecture, CI/CD, e2e/integration testing, Datadog, docs/runbooks.',
    '',
    'Experience:',
    '- Polygon (Oct 2025 – present) — Senior Full Stack Engineer. Built Agglayer UI from 0 to 1 as near-sole engineer. Built Agglayer Dev UI (open source). Integrated LI.FI routing and multihop support. Implemented e2e test flows with funded testnet wallets. Partnered on CI/CD improvements including Argo/Kargo release paths. Added Datadog monitoring and deployment runbooks.',
    '- Aragon (Jul 2024 – Oct 2025) — Senior Software Engineer. Shipped modular governance UX (token wrapping, delegation). Built composable frontend patterns. Contributed to open-source Governance UI Kit.',
    '- Cielo Finance (Oct 2022 – Jul 2024) — Senior Software Engineer. Helped evolve Cielo from bot-first tooling into a wallet discovery and analytics platform across 16+ EVM chains. Contributed to growth to 10k+ MAU.',
    '- Earlier: Co-Founder & CTO at Let\'s Eat (2021–2022), Software Engineer at Library of Things (2021), Software Engineer at North Link Digital (2019–2021).',
    '',
    'Community: Mentors engineers through Coding Coach and The Mentoring Club. Started Tech-Leap newsletter. Writes at shan8851.com.',
  ]);

  const routeHintsSection = formatSection('Internal Route Hints', [
    '- Home page: /',
    '- Current focus: /now',
    '- Projects: /projects',
    '- Labs: /labs',
    '- Log: /log',
    '- Uses: /uses',
    '- Writing index: /notes',
    '- Chat page: /chat',
  ]);

  return [
    profileSection,
    operatorSection,
    cvSection,
    writingSection,
    logSection,
    labsSection,
    usesSection,
    routeHintsSection,
  ].join('\n\n');
};
