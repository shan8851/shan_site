import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now - shan8851.eth',
  description: 'What I’m up to right now.',
};

const NowPage = () => {
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
            shan@web3:~/now
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
              <span className="text-text">now.md</span>
            </div>
            <p className="text-textSecondary pl-4 text-sm">
              A quick snapshot. I try to keep this current-ish.
            </p>
          </div>

          <Section title="work">
            <Item
              name="Polygon"
              description="on a mission to move all money on-chain (bridging, staking, web3 UX)"
            />
            <Item
              name="AggLayer"
              description="building bridging UIs + the stuff around them (powered by Li.Fi)"
            />
          </Section>

          <Section title="playing-with">
            <Item name="AI + agents" description="CLI/TUI workflows, automation, weird little tools" />
            <Item name="UI/UX" description="making web3 apps feel less cursed" />
          </Section>

          <Section title="open-to">
            <Item name="connecting" description="with like-minded builders" />
            <Item
              name="mentoring"
              description="folks trying to break into tech / web3 (happy to chat)"
            />
          </Section>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">echo</span>
              <span className="text-text">$CONTACT</span>
            </div>
            <div className="pl-4 text-sm text-textSecondary space-y-1">
              <p>• Telegram: @shan8851</p>
              <p>• Email: asamshan456@gmail.com</p>
            </div>
          </div>

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
      <div className="pl-4 space-y-2">{children}</div>
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

export default NowPage;
