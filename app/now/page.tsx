import type { Metadata } from 'next';
import Link from 'next/link';

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
          A lightweight update. If it’s out of date, blame{' '}
          <Link className="text-amber hover:underline" href="/giles">
            Giles
          </Link>
          .
        </p>
      </header>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">Currently shipping</h2>
        <ul className="mt-3 space-y-2 text-textSecondary">
          <li>
            • A solid end-to-end testing flow for Web3 UIs (staking + bridging
            dapps).
          </li>
          <li>• On-chain payments work (Polygon: bring all money on chain).</li>
          <li>
            • Deep in AI automation and workflows (trying to make it actually
            useful, not just noisy).
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">Not doing (on purpose)</h2>
        <div className="mt-3 space-y-2 text-textSecondary">
          <p>
            I am not actively trying to learn a new language/tool just for the
            sake of it. I used to think I should be constantly hopping.
          </p>
          <p>
            Right now I am happy going deeper in JS/TS land and Web3. Less
            scattered. More shipping.
          </p>
          <p>
            Also trying to not spend my time doom-scrolling the job market.
            Layoffs happen. AI is moving fast. I would rather face it head on by
            getting meaningfully better.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">On the bench</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <BenchItem
            title="Automations"
            note="Tiny scripts and glue that save 30 seconds, 20 times a day. Unsexy. High ROI."
          />
          <BenchItem
            title="Personal site"
            note="Trying to make this more useful than an online business card. Slowly winning."
          />
          <BenchItem
            title="AI tooling"
            note="Agents, evals, guardrails. I want it helpful. I do not want it in my way."
          />
          <BenchItem
            title="Health"
            note="Football + strength training. The boring inputs. The real output."
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
        <p className="mt-3 text-xs text-textTertiary">Last updated: Feb 2026.</p>
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
