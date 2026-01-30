import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Tools, hardware, and software I use day-to-day.',
};

const sections = [
  {
    title: 'Desk / hardware',
    items: [
      { name: 'Laptop', desc: 'A fast one. Quiet fans preferred.' },
      { name: 'Keyboard', desc: 'Mechanical. I type a lot. It’s a problem.' },
      { name: 'Mouse', desc: 'Whatever keeps my wrist happy.' },
      { name: 'Audio', desc: 'Headphones for focus, speakers for sanity.' },
    ],
  },
  {
    title: 'Editor / terminal',
    items: [
      { name: 'VS Code', desc: 'Main editor. Minimal extensions. Strong opinions.' },
      { name: 'Zed', desc: 'Secondary editor when I want speed and less ceremony.' },
      { name: 'Kitty', desc: 'Terminal emulator.' },
      { name: 'Zsh', desc: 'Shell. Aliases that are basically muscle memory.' },
      { name: 'lazygit', desc: 'Git UX that doesn’t make me sad.' },
      { name: 'Codex', desc: 'AI pair for boring tasks and quick spikes.' },
    ],
  },
  {
    title: 'Build stack',
    items: [
      { name: 'TypeScript', desc: 'Default language.' },
      { name: 'Next.js', desc: 'App router, server components when it helps.' },
      { name: 'Tailwind', desc: 'Fast UI iteration, consistent constraints.' },
      { name: 'pnpm', desc: 'Because life is too short for dependency drama.' },
    ],
  },
  {
    title: 'Crypto tooling',
    items: [
      { name: 'Rabby', desc: 'Primary browser wallet.' },
      { name: 'Ledger', desc: 'Hardware wallet.' },
      { name: 'Tenderly', desc: 'Debugging, simulation, sanity checks.' },
      { name: 'Explorers', desc: 'Etherscan/Polygonscan, etc. (tabs forever).' },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-cyan">/uses</span>
          <span className="text-textTertiary">tools I actually touch</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Uses
        </h1>
        <p className="text-textSecondary leading-relaxed">
          Not a shopping list. More like a “what my hands keep reaching for”.
        </p>
      </header>

      <div className="space-y-4">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-border/80 bg-surface/50 p-5"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-textTertiary">•</span>
                  <div>
                    <div className="text-sm text-text">{item.name}</div>
                    <div className="text-sm text-textSecondary leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">Notes</h2>
        <p className="mt-2 text-textSecondary leading-relaxed">
          I try to keep this page accurate, but the truth is: I change things the
          moment they annoy me.
        </p>
      </section>
    </div>
  );
}
