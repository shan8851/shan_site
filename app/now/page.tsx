import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I’m focused on right now.',
};

export default function NowPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-cyan">/now</span>
          <span className="text-textTertiary">status page, but human</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          What I’m doing now
        </h1>
        <p className="text-textSecondary leading-relaxed">
          A lightweight update. If it’s out of date, assume I’m heads‑down.
        </p>
      </header>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">Primary focus</h2>
        <ul className="mt-3 space-y-2 text-textSecondary">
          <li>• Payments infrastructure: make it fast, predictable, boring.</li>
          <li>• Developer experience: fewer footguns, better defaults.</li>
          <li>• Reliability: measure first, then fix the thing that matters.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">On the bench</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <BenchItem
            title="Small automations"
            note="Little scripts that save 30 seconds, 20 times a day. Very serious business."
          />
          <BenchItem
            title="Personal site"
            note="Turning this into a useful control panel instead of a résumé cosplay."
          />
          <BenchItem
            title="AI tooling"
            note="Agents, evals, and guardrails so it helps more than it distracts."
          />
          <BenchItem
            title="Health"
            note="Sleep, lifting, walking. Boring inputs. Real output."
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">How to work with me</h2>
        <ul className="mt-3 space-y-2 text-textSecondary">
          <li>• Send context. I’ll send decisions.</li>
          <li>• If it’s ambiguous, I’ll ask. If it’s clear, I’ll ship.</li>
          <li>• I like written specs, but I love tiny PRs.</li>
        </ul>
        <p className="mt-3 text-xs text-textTertiary">
          Last updated: “recently” (this is intentionally low maintenance).
        </p>
      </section>
    </div>
  );
}

function BenchItem({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/30 p-4">
      <div className="text-sm text-text">{title}</div>
      <div className="mt-1 text-sm text-textSecondary leading-relaxed">
        {note}
      </div>
    </div>
  );
}
