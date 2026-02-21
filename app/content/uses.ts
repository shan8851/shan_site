export type UseItem = {
  label: string;
  value: string;
};

export const usesLastUpdated = '2026-02-20';

export const usesSections: Array<{ title: string; items: UseItem[] }> = [
  {
    title: 'AI + model stack',
    items: [
      { label: 'Coding', value: 'Codex 5.3 (primary)' },
      { label: 'Search/research', value: 'Perplexity (default)' },
      { label: 'Fast/cheap tasks', value: 'Gemini + Claude Haiku/Sonnet' },
      { label: 'Voice/transcription', value: 'Whisper, plus playing with Pocket TTS' },
      { label: 'Image generation', value: 'Nano Banana Pro (still great)' },
      { label: 'Routing', value: 'OpenRouter for one API key + easy model switching' },
      { label: 'Want to try', value: 'Kimi K2.5' },
    ],
  },
  {
    title: 'Agent stack',
    items: [
      { label: 'Platform', value: 'OpenClaw' },
      {
        label: 'Current direction',
        value: 'OpenClaw + custom OpenClaw dashboard is slowly eating everything else.',
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
      { label: 'Editor/IDE', value: 'VS Code (less these days thanks to Codex)' },
      { label: 'Terminal', value: 'Ghostty (macOS), Kitty (Linux)' },
      { label: 'Shell', value: 'zsh + powerlevel10k' },
      { label: 'Notes', value: 'Notesnook + markdown files in git' },
      { label: 'Browser', value: 'Brave + Chrome' },
    ],
  },
  {
    title: 'Comms + productivity',
    items: [
      { label: 'Messaging', value: 'Telegram' },
      { label: 'Calendar', value: 'Google Calendar' },
      { label: 'Tasks', value: 'Google Tasks' },
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
