export { siteLastUpdated as usesLastUpdated } from './siteMeta';

export type UseItem = {
  label: string;
  value: string;
};

export const usesSections: Array<{ title: string; items: UseItem[] }> = [
  {
    title: 'AI + model stack',
    items: [
      { label: 'Coding', value: 'Codex 5.4 (primary)' },
      { label: 'Search/research', value: 'Exa for AI search' },
      { label: 'Fast/cheap tasks', value: 'Gemini + Claude Haiku/Sonnet' },
      {
        label: 'Voice/transcription',
        value: 'OpenAI + ElevenLabs, with Whisper still useful when I want local transcription',
      },
      { label: 'Image generation', value: 'Nano Banana Pro (still great)' },
      { label: 'Routing', value: 'OpenRouter for one API key + easy model switching' },
    ],
  },
  {
    title: 'Agent stack',
    items: [
      { label: 'Harness', value: 'Hermes Agent' },
      {
        label: 'Current direction',
        value: 'Hermes Agent with lean playbooks, skills, and crons. More deterministic, less swarm theatre.',
      },
      { label: 'Experimental lane', value: 'Onchain agents + broader autonomy (shopping/email)' },
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
      { label: 'Notes', value: 'Notesnook + markdown files in git' },
      { label: 'Browser', value: 'Brave + Chrome' },
    ],
  },
  {
    title: 'Comms + productivity',
    items: [
      { label: 'Messaging', value: 'Agent-first; Telegram is mostly just one surface now' },
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
