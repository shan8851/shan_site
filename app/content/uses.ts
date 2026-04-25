export { siteLastUpdated as usesLastUpdated } from './siteMeta';

export type UseItem = {
  label: string;
  value: string;
};

export const usesSections: Array<{ title: string; items: UseItem[] }> = [
  {
    title: 'AI + model stack',
    items: [
      { label: 'Coding', value: 'OpenAI Codex 5.5 (primary)' },
      { label: 'Search/research', value: 'OpenClaw web search + browser when source access matters' },
      { label: 'Fast/cheap tasks', value: 'Gemini + Claude Haiku/Sonnet when the job does not need the big gun' },
      {
        label: 'Voice/transcription',
        value: 'OpenAI + ElevenLabs, with Whisper still useful when I want local transcription',
      },
      { label: 'Image generation', value: 'GPT Image 2' },
      { label: 'Routing', value: 'OpenClaw provider routing across OpenAI, Claude, Gemini, and OpenRouter' },
    ],
  },
  {
    title: 'Agent stack',
    items: [
      { label: 'Harness', value: 'OpenClaw' },
      {
        label: 'Current direction',
        value: 'OpenClaw with lean playbooks, skills, crons, memory, and channel-native workflows. More deterministic, less swarm theatre.',
      },
      { label: 'Agent email', value: 'AgentMail.to for dedicated agent inboxes and email-native workflows' },
      { label: 'Experimental lane', value: 'Useful autonomy around research, inboxes, household ops, and public-data CLIs' },
    ],
  },
  {
    title: 'Automations I run a lot',
    items: [
      { label: 'Morning briefing', value: 'Briefing -> actionable list' },
      { label: 'YouTube summaries', value: 'Long videos -> skimmable markdown' },
      { label: 'X research', value: 'Signal refresh -> skimmable markdown files' },
      { label: 'Dump loop', value: 'Raw capture -> structured weekly/monthly review artifacts' },
    ],
  },
  {
    title: 'Dev environment',
    items: [
      { label: 'Editor/IDE', value: 'VS Code, with the terminal doing more of the heavy lifting now' },
      { label: 'Terminal', value: 'Ghostty (macOS), Kitty (Linux)' },
      { label: 'Shell', value: 'zsh + powerlevel10k' },
      { label: 'Notes', value: 'Markdown files in git + wiki for durable knowledge; Notesnook for personal notes' },
      { label: 'Browser', value: 'Brave + Chrome' },
    ],
  },
  {
    title: 'Comms + productivity',
    items: [
      { label: 'Messaging', value: 'Agent-first across Discord and WhatsApp, with channels treated as surfaces rather than separate workflows' },
      { label: 'Calendar', value: 'Google Calendar, usually handled through the agent' },
      { label: 'Tasks', value: 'Mostly handled through the agent now; tools are secondary' },
      { label: 'Focus', value: 'pomo CLI pomodoro app' },
    ],
  },
  {
    title: 'Crypto stack',
    items: [
      { label: 'Hot wallet', value: 'Rabby' },
      { label: 'Cold wallet', value: 'Ledger hardware wallet' },
      { label: 'Bridge', value: 'Agglayer UI' },
      { label: 'DEX/swap', value: 'Jumper' },
      { label: 'Analytics', value: 'Dune + DeFiLlama + Cielo' },
      { label: 'Portfolio tracking', value: 'Dune dashboards + Cielo' },
    ],
  },
  {
    title: 'Hardware + security',
    items: [
      { label: 'Work machine', value: 'MacBook Pro M4' },
      { label: 'Personal machine', value: 'Linux (TUXEDO OS)' },
      { label: 'Phone', value: 'iPhone' },
      { label: 'Peripherals', value: 'Logitech MX keyboard + mouse' },
      { label: 'Password manager', value: 'Bitwarden' },
      { label: 'Hardware auth', value: 'YubiKey everywhere possible' },
      { label: 'Music', value: 'YouTube Music' },
    ],
  },
];
