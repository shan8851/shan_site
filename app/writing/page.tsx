import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes and writing (coming soon).',
};

export default function WritingPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-cyan">/writing</span>
          <span className="text-textTertiary">soon™</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Writing
        </h1>
        <p className="text-textSecondary leading-relaxed">
          This is where essays, notes, and “I should write this down” will live.
        </p>
      </header>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">Status</h2>
        <p className="mt-2 text-textSecondary leading-relaxed">
          Coming soon. I’m currently negotiating with my future self about:
        </p>
        <ul className="mt-3 space-y-2 text-textSecondary">
          <li>• categories vs. tags</li>
          <li>• whether everything needs an opinion</li>
          <li>• how many posts before I’m allowed to add RSS</li>
        </ul>
        <p className="mt-3 text-sm text-textTertiary">
          If you want something specific written up, send me a topic and I’ll
          add it to the queue.
        </p>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">Planned topics</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Topic title="Payments infra" note="Boring reliability, graceful failure, and how not to ship footguns." />
          <Topic title="On-chain rails" note="Stablecoins, settlement, and why product constraints are real." />
          <Topic title="Tooling" note="Agents, automation, and time-saving glue code." />
          <Topic title="Builder notes" note="Small systems that compound over months." />
        </div>
      </section>
    </div>
  );
}

function Topic({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/30 p-4">
      <div className="text-sm text-text">{title}</div>
      <div className="mt-1 text-sm text-textSecondary leading-relaxed">{note}</div>
    </div>
  );
}
