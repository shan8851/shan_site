export { siteLastUpdated as logLastUpdated } from './siteMeta';

export const logChannels = ['projects', 'work', 'write', 'ops', 'life'] as const;

export type LogChannel = (typeof logChannels)[number];

export type LogEntry = {
  id: string;
  date: string;
  channel: LogChannel;
  text: string;
};

export const logEntries: LogEntry[] = [
  {
    id: 'LOG-2026-04-19-A',
    date: '2026-04-19',
    channel: 'projects',
    text: 'Shipped Parliament CLI, then published the companion site, Shan skill, and Clawhub skill.',
  },
  {
    id: 'LOG-2026-04-19-B',
    date: '2026-04-19',
    channel: 'projects',
    text: 'Revived the Giles dashboard and API projects, and added analytics into the UI.',
  },
  {
    id: 'LOG-2026-04-17-A',
    date: '2026-04-17',
    channel: 'work',
    text: 'Kept the Portal refactor moving, with the Redux to React Query migration now in a much better place.',
  },
  {
    id: 'LOG-2026-04-16-A',
    date: '2026-04-16',
    channel: 'work',
    text: 'Merged template/docs PRs and landed the first Portal migration tooling slice to staging.',
  },
  {
    id: 'LOG-2026-04-14-A',
    date: '2026-04-14',
    channel: 'work',
    text: 'Shipped Polygon Liquid Staking and Portal to production, then fixed the immediate bugs.',
  },
  {
    id: 'LOG-2026-04-13-A',
    date: '2026-04-13',
    channel: 'projects',
    text: 'Shipped Hermes Console v0.4.0 and tightened the supporting workflows and memory handling.',
  },
  {
    id: 'LOG-2026-04-12-A',
    date: '2026-04-12',
    channel: 'ops',
    text: 'Built an automated backup, wiki, and persistent memory system for a multi-agent Hermes setup — cron-driven, local-first, fully self-hosted.',
  },
  {
    id: 'LOG-2026-04-11-A',
    date: '2026-04-11',
    channel: 'projects',
    text: 'Launched Hermes Console and shipped three versions in a week — global search, cron calendar, token usage graphs.',
  },
  {
    id: 'LOG-2026-04-08-B',
    date: '2026-04-08',
    channel: 'work',
    text: 'Root-caused a production issue as a third-party bug, reported it upstream, and they shipped the fix.',
  },
  {
    id: 'LOG-2026-04-08-A',
    date: '2026-04-08',
    channel: 'work',
    text: 'Shipped a major frontend migration (toolchain, framework, styling) through multiple review rounds.',
  },
  {
    id: 'LOG-2026-03-29-A',
    date: '2026-03-29',
    channel: 'write',
    text: 'Shipped the Open Markets mini-series with all episodes live on a dedicated site.',
  },
  {
    id: 'LOG-2026-04-10-A',
    date: '2026-04-10',
    channel: 'projects',
    text: 'Shipped fuel-cli with landing page and npm publish — fourth CLI tool in the agent-first suite.',
  },
  {
    id: 'LOG-2026-03-25-A',
    date: '2026-03-25',
    channel: 'projects',
    text: 'Published a more agent-friendly pass across my CLI tools and refreshed the related skills.',
  },
  {
    id: 'LOG-2026-03-24-A',
    date: '2026-03-24',
    channel: 'projects',
    text: 'Shipped rail-cli as my third public-facing CLI tool for agent workflows.',
  },
  {
    id: 'LOG-2026-03-23-A',
    date: '2026-03-23',
    channel: 'ops',
    text: 'Set up self-hosted analytics across key projects to track everything from one dashboard.',
  },
  {
    id: 'LOG-2026-03-22-A',
    date: '2026-03-22',
    channel: 'projects',
    text: 'Shipped companies-house-cli and tfl-cli with dedicated landing pages.',
  },
  {
    id: 'LOG-2026-03-21-B',
    date: '2026-03-21',
    channel: 'ops',
    text: 'Set up full Discord search across my workflow stack so almost nothing gets lost.',
  },
  {
    id: 'LOG-2026-03-17-A',
    date: '2026-03-17',
    channel: 'work',
    text: 'Merged a cleanup and improvement pass for a staking backend flow into staging.',
  },
  {
    id: 'LOG-2026-03-21-A',
    date: '2026-03-21',
    channel: 'ops',
    text: 'Added GitHub Action to auto-bump siteLastUpdated on every push to main.',
  },
  {
    id: 'LOG-2026-03-15-A',
    date: '2026-03-15',
    channel: 'projects',
    text: 'Added chat/LLM integration to my personal site with rate limiting and prompt-injection guardrails.',
  },
  {
    id: 'LOG-2026-03-14-A',
    date: '2026-03-14',
    channel: 'work',
    text: 'Fixed and promoted a backend indexer by completing a secrets migration and validating production recovery.',
  },
  {
    id: 'LOG-2026-03-13-A',
    date: '2026-03-13',
    channel: 'work',
    text: 'Released my first backend service end-to-end, including debug, promotion, and observability flows.',
  },
  {
    id: 'LOG-2026-03-12-A',
    date: '2026-03-12',
    channel: 'ops',
    text: 'Built a dump-to-briefing pipeline that turns daily notes into priorities and staff-eng prompts.',
  },
  {
    id: 'LOG-2026-03-12-B',
    date: '2026-03-12',
    channel: 'ops',
    text: 'Built a staff-engineer evidence tracker to map weekly work against impact dimensions over time.',
  },
  {
    id: 'LOG-2026-03-11-A',
    date: '2026-03-11',
    channel: 'projects',
    text: 'Published the llm-usage CLI to npm as a lightweight way to inspect local and OpenRouter usage.',
  },
  {
    id: 'LOG-2026-03-08-A',
    date: '2026-03-08',
    channel: 'ops',
    text: 'Designed and documented an async task-orchestration control plane with planner, worker, and reviewer roles.',
  },
  {
    id: 'LOG-2026-03-08-B',
    date: '2026-03-08',
    channel: 'ops',
    text: 'Tightened agent context and memory defaults to cut token overhead while keeping output quality high.',
  },
  {
    id: 'LOG-2026-03-07-A',
    date: '2026-03-07',
    channel: 'projects',
    text: 'Shipped an updated CV site at cv.shan8851.com with improved download options.',
  },
  {
    id: 'LOG-2026-03-07-B',
    date: '2026-03-07',
    channel: 'projects',
    text: 'Fixed cv.shan8851.com OG/Twitter metadata so previews resolve to the CV domain image.',
  },
  {
    id: 'LOG-2026-03-07-C',
    date: '2026-03-07',
    channel: 'projects',
    text: 'Launched viewports.shan8851.com and wired it into Labs for quick multi-viewport responsive checks.',
  },
  {
    id: 'LOG-2026-03-07-D',
    date: '2026-03-07',
    channel: 'work',
    text: 'Kept strong delivery momentum on a work project while shipping site and Labs upgrades.',
  },
  {
    id: 'LOG-2026-03-06-A',
    date: '2026-03-06',
    channel: 'projects',
    text: 'Built and published 3 new agent workflow skills.',
  },
  {
    id: 'LOG-2026-03-06-B',
    date: '2026-03-06',
    channel: 'projects',
    text: 'Started building a skills UI to surface all installed agent skills.',
  },
  {
    id: 'LOG-2026-03-06-C',
    date: '2026-03-06',
    channel: 'work',
    text: 'Aligned team repo standards and improved testing flows at work.',
  },
  {
    id: 'LOG-2026-03-06-D',
    date: '2026-03-06',
    channel: 'projects',
    text: 'Added a dedicated /labs page on shan8851.com and launched skills.shan8851.com as the first live lab.',
  },
  {
    id: 'LOG-2026-03-06-E',
    date: '2026-03-06',
    channel: 'projects',
    text: 'Reworked navigation and page flow to surface Labs cleanly without homepage duplication.',
  },
  {
    id: 'LOG-2026-03-05-A',
    date: '2026-03-05',
    channel: 'projects',
    text: 'Reshaped site messaging around full-stack systems, reliability, docs, and practical AI orchestration.',
  },
  {
    id: 'LOG-2026-03-05-B',
    date: '2026-03-05',
    channel: 'projects',
    text: 'Overhauled personal site IA: renamed proof log to /log, added favicon, tightened navigation.',
  },
  {
    id: 'LOG-2026-03-04-A',
    date: '2026-03-04',
    channel: 'write',
    text: 'Published note: Prompting beat model choice on RoastMaster (until it didn’t).',
  },
  {
    id: 'LOG-2026-03-04-B',
    date: '2026-03-04',
    channel: 'ops',
    text: 'Built a granular token usage dashboard for agent cost visibility.',
  },
  {
    id: 'LOG-2026-03-03-A',
    date: '2026-03-03',
    channel: 'write',
    text: 'Published note: Surviving the overload.',
  },
  {
    id: 'LOG-2026-03-03-B',
    date: '2026-03-03',
    channel: 'work',
    text: 'Wrote a GCP Workforce Identity Federation auth runbook for the team.',
  },
  {
    id: 'LOG-2026-03-03-C',
    date: '2026-03-03',
    channel: 'life',
    text: 'Set up a dedicated health and fitness accountability agent.',
  },
  {
    id: 'LOG-2026-03-03-D',
    date: '2026-03-03',
    channel: 'projects',
    text: 'Populated public skills-and-playbooks repo as shareable proof of work.',
  },
  {
    id: 'LOG-2026-03-02-A',
    date: '2026-03-02',
    channel: 'projects',
    text: 'Shipped FairSide with an agent-first build loop and published the launch note.',
  },
  {
    id: 'LOG-2026-03-01-A',
    date: '2026-03-01',
    channel: 'work',
    text: 'Pushed integration-test and tooling improvements on a backend work service.',
  },
  {
    id: 'LOG-2026-02-28-A',
    date: '2026-02-28',
    channel: 'work',
    text: 'Set up a backend integration-testing lane with local emulator support.',
  },
  {
    id: 'LOG-2026-02-25-A',
    date: '2026-02-25',
    channel: 'work',
    text: 'Ran a non-frontend strategy/docs/config-heavy work day; doubling down on reliability and observability reps.',
  },
  {
    id: 'LOG-2026-02-24-A',
    date: '2026-02-24',
    channel: 'ops',
    text: 'Built an email assistant loop and cut inbox backlog from thousands to under 200.',
  },
  {
    id: 'LOG-2026-02-24-B',
    date: '2026-02-24',
    channel: 'ops',
    text: 'Added twice-daily triage crons to keep inbox signal high.',
  },
  {
    id: 'LOG-2026-02-24-C',
    date: '2026-02-24',
    channel: 'work',
    text: 'Shipped a first runbook PR for a work system (sanitised).',
  },
  {
    id: 'LOG-2026-02-24-D',
    date: '2026-02-24',
    channel: 'projects',
    text: 'Committed to shipping a v0 of ShanClaw as a hands-on learning build.',
  },
  {
    id: 'LOG-2026-02-22-A',
    date: '2026-02-22',
    channel: 'projects',
    text: 'Shipped Excuse Me and RoastMaster, then moved into quality and distribution loops.',
  },
  {
    id: 'LOG-2026-02-20-A',
    date: '2026-02-20',
    channel: 'projects',
    text: 'Pseudo-launched RoastMaster with payments wired in production.',
  },
  {
    id: 'LOG-2026-02-20-B',
    date: '2026-02-20',
    channel: 'write',
    text: 'Published note: I built RoastMaster this week.',
  },
  {
    id: 'LOG-2026-02-18-A',
    date: '2026-02-18',
    channel: 'ops',
    text: 'Moved OpenClaw ops into Discord lane-based workflows for cleaner multi-session context.',
  },
  {
    id: 'LOG-2026-02-17-A',
    date: '2026-02-17',
    channel: 'ops',
    text: 'Consolidated Discord routing and improved task surfacing/organisation.',
  },
  {
    id: 'LOG-2026-02-16-A',
    date: '2026-02-16',
    channel: 'ops',
    text: 'Migrated to a fresh OpenClaw instance, tightened cron/autonomy setup, and shipped a major site refresh.',
  },
  {
    id: 'LOG-2026-02-15-A',
    date: '2026-02-15',
    channel: 'write',
    text: 'Published note: The cognitive overload from agentic coding is real.',
  },
  {
    id: 'LOG-2026-02-14-A',
    date: '2026-02-14',
    channel: 'work',
    text: 'Made major progress on e2e testing for web3 app workflows.',
  },
  {
    id: 'LOG-2026-02-14-B',
    date: '2026-02-14',
    channel: 'projects',
    text: 'Vibe-coded three small CLI/TUI projects: Pomo, Clawtop, and Scratch.',
  },
  {
    id: 'LOG-2026-02-13-A',
    date: '2026-02-13',
    channel: 'write',
    text: 'Published note: One AI system to save an hour+ this week.',
  },
  {
    id: 'LOG-2026-02-09-A',
    date: '2026-02-09',
    channel: 'work',
    text: 'Kicked off a backend webhooks service and leaned into docs/runbooks as execution tools.',
  },
  {
    id: 'LOG-2026-02-09-B',
    date: '2026-02-09',
    channel: 'write',
    text: 'Published note: Is AI driven job loss overblown?',
  },
  {
    id: 'LOG-2026-02-06-A',
    date: '2026-02-06',
    channel: 'write',
    text: 'Published note: Working Effectively With Agents.',
  },
  {
    id: 'LOG-2026-02-04-A',
    date: '2026-02-04',
    channel: 'write',
    text: 'Published note: Working harder isn’t the lever anymore.',
  },
  {
    id: 'LOG-2026-02-03-A',
    date: '2026-02-03',
    channel: 'ops',
    text: 'Sorted ClawDBot setup on laptop, reorged clawd-notes, and restarted public writing.',
  },
  {
    id: 'LOG-2026-01-31-A',
    date: '2026-01-31',
    channel: 'write',
    text: 'Published note: Agents are building their own internet.',
  },
  {
    id: 'LOG-2026-01-29-A',
    date: '2026-01-29',
    channel: 'write',
    text: 'Published note: OpenClaw is insane.',
  },
  {
    id: 'LOG-2026-01-27-A',
    date: '2026-01-27',
    channel: 'write',
    text: 'Restarted regular writing drafts and AI workflow deep-dives.',
  },
  {
    id: 'LOG-2026-01-26-A',
    date: '2026-01-26',
    channel: 'life',
    text: 'Set a 2026 operating baseline for AI learning, fitness, writing, and consistent execution systems.',
  },
];

export const sortLogEntriesDescending = (entries: readonly LogEntry[]): LogEntry[] =>
  [...entries].sort((leftEntry, rightEntry) => rightEntry.date.localeCompare(leftEntry.date));
