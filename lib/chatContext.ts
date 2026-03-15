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
import { getAllWritingPosts } from './writing';

const formatSection = (title: string, lines: string[]): string =>
  [`[${title}]`, ...lines.filter(Boolean)].join('\n');

const formatList = (items: string[]): string[] =>
  items.map((item) => `- ${item}`);

const recentLogEntries = [...logEntries]
  .sort((entryA, entryB) => entryB.date.localeCompare(entryA.date) || entryB.id.localeCompare(entryA.id))
  .slice(0, 20);

export const buildSiteContext = async (): Promise<string> => {
  const writingPosts = await getAllWritingPosts();
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
    ...writingPosts.map(
      (post) =>
        `- /notes/${post.slug} | ${post.title} | date=${post.date} | tags=${post.tags.join(', ') || 'none'} | summary=${post.summary}`
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
    '- Polygon (Oct 2025 - present) - Senior Full Stack Engineer. Built Agglayer UI from 0 to 1 as near-sole engineer. Built Agglayer Dev UI (open source). Integrated LI.FI routing and multihop support. Implemented e2e test flows with funded testnet wallets. Partnered on CI/CD improvements including Argo/Kargo release paths. Added Datadog monitoring and deployment runbooks.',
    '- Aragon (Jul 2024 - Oct 2025) - Senior Software Engineer. Shipped modular governance UX (token wrapping, delegation). Built composable frontend patterns. Contributed to open-source Governance UI Kit.',
    '- Cielo Finance (Oct 2022 - Jul 2024) - Senior Software Engineer. Helped evolve Cielo from bot-first tooling into a wallet discovery and analytics platform across 16+ EVM chains. Contributed to growth to 10k+ MAU.',
    '- Earlier: Co-Founder & CTO at Let\'s Eat (2021-2022), Software Engineer at Library of Things (2021), Software Engineer at North Link Digital (2019-2021).',
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
