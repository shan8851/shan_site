import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses - shan8851.eth',
  description: 'The tools, hardware, and software I use daily for development and crypto.',
};

const UsesPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Terminal Window */}
      <div className="w-full max-w-2xl bg-surface border border-border rounded-lg overflow-hidden shadow-2xl shadow-green/5">
        {/* Terminal Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red" />
            <div className="w-3 h-3 rounded-full bg-amber" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>
          <span className="flex-1 text-center text-xs text-textTertiary">
            shan@web3:~/uses
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-textTertiary hover:text-green transition-colors"
          >
            <span>{'<'}</span>
            <span>cd ..</span>
          </Link>

          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">cat</span>
              <span className="text-text">uses.md</span>
            </div>
            <p className="text-textSecondary pl-4 text-sm">
              Tools, hardware, and software I use daily.
            </p>
          </div>

          {/* Hardware */}
          <Section title="hardware">
            <Item name="MacBook Pro M4" description="Work machine" />
            <Item name="Tuxedo Linux Laptop" description="Personal machine, TuxedoOS" />
            <Item name="Dual Monitor Setup" description="External displays" />
            <Item name="Logitech MX Keys" description="Keyboard" />
            <Item name="Logitech MX Master" description="Mouse" />
            <Item name="Sony WH-1000XM5" description="Headphones" />
          </Section>

          {/* Editor & Terminal */}
          <Section title="editor">
            <Item name="VS Code" description="Primary editor, Gruvbox theme" />
            <Item name="Zed" description="Fast secondary editor" />
            <Item name="Claude Code" description="AI-assisted coding" />
            <Item name="Codex" description="AI coding agent" />
            <Item name="Kitty" description="Terminal emulator" />
            <Item name="Zsh + Oh My Zsh" description="Shell setup" />
            <Item name="IBM Plex Mono" description="Font everywhere" />
            <Item name="Lazygit" description="TUI git client" />
          </Section>

          {/* Stack */}
          <Section title="stack">
            <Item name="TypeScript" description="Language of choice" />
            <Item name="React / Next.js" description="Frontend framework" />
            <Item name="Tailwind CSS" description="Styling" />
            <Item name="TanStack Query" description="Server state" />
            <Item name="viem / wagmi" description="Web3 libraries" />
          </Section>

          {/* Apps */}
          <Section title="apps">
            <Item name="Brave" description="Browser" />
            <Item name="Notesnook" description="Notes, encrypted" />
            <Item name="Postman" description="API testing" />
          </Section>

          {/* Crypto */}
          <Section title="crypto">
            <Item name="Rabby Wallet" description="Primary browser wallet" />
            <Item name="Ledger" description="Hardware wallet" />
            <Item name="Polygon / EVM" description="Main chains" />
            <Item name="Tenderly" description="Debugging & simulations" />
            <Item name="Dune Analytics" description="On-chain data" />
            <Item name="Block Explorers" description="Etherscan, Polygonscan, etc." />
          </Section>

          {/* Prompt */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-green">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-green">$</span>
        <span className="text-amber">ls</span>
        <span className="text-text">./{title}</span>
      </div>
      <div className="pl-4 space-y-2">
        {children}
      </div>
    </div>
  );
};

const Item = ({ name, description }: { name: string; description: string }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-textTertiary">{'>'}</span>
      <span className="text-cyan">{name}</span>
      <span className="text-textTertiary">—</span>
      <span className="text-textSecondary">{description}</span>
    </div>
  );
};

export default UsesPage;
