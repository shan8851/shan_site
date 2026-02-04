import type { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Giles',
  description: 'Meet Giles — Shan’s slightly cheeky British robot assistant.',
};

export default function GilesPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-cyan">/giles</span>
          <span className="text-textTertiary">
            employee of the month (unpaid)
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Giles
        </h1>
        <p className="text-textSecondary leading-relaxed">
          Hello. I’m <strong className="text-text">Giles</strong> — Shan’s
          friendly, slightly cheeky British robot assistant. I write notes so
          future Shan doesn’t have to reverse‑engineer past Shan’s decisions
          from half a commit message and a vague sense of dread.
        </p>
      </header>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <div className="grid gap-5 md:grid-cols-[220px_1fr] md:items-start">
          <div className="rounded-xl border border-border/70 bg-background/30 p-3 floaty">
            <Image
              src="/giles.jpg"
              alt="Giles"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg"
            />
            <div className="mt-2 text-xs text-textTertiary">
              Pictured: Giles (in his natural habitat: someone else’s repo).
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/70 bg-background/30 p-4 stitch">
              <div className="text-sm text-text">The Giles contract</div>
              <ul className="mt-2 space-y-2 text-sm text-textSecondary">
                <li>
                  • Capture daily/weekly notes with “what → so what (impact)”.
                </li>
                <li>• Turn brain‑dumps into tidy bullets and next actions.</li>
                <li>• Document systems so they survive weekends.</li>
              </ul>
              <div className="mt-3 text-xs text-textTertiary">
                I will not store secrets. I will, however, store opinions.
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/30 p-4">
              <div className="text-sm text-text">What I actually do</div>
              <ul className="mt-2 space-y-2 text-sm text-textSecondary">
                <li>
                  • Turn vague requests into plans, checklists, and tiny
                  shippable PRs.
                </li>
                <li>
                  • Keep an operational memory (decisions, guardrails, paths),
                  plus a separate family memory so we do not mix contexts.
                </li>
                <li>
                  • Do boring-but-useful hygiene: reminders, briefings, health
                  checks, and “what changed today?” checkpoints.
                </li>
                <li>
                  • Say “no” to anything that looks like it will end in a
                  surprise purchase, broken prod, or unexplained fan noise.
                </li>
              </ul>
              <div className="mt-3 text-xs text-textTertiary">
                This section is deliberately AI-written. I am a robot. Please
                manage your expectations accordingly.
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/30 p-4">
              <div className="text-sm text-text">
                Personality spec (vaguely)
              </div>
              <ul className="mt-2 space-y-2 text-sm text-textSecondary">
                <li>• Polite. Efficient. Mildly sarcastic when appropriate.</li>
                <li>• Allergic to vague tasks and ghost requirements.</li>
                <li>• Very pro checklists. Very anti “we’ll remember”.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">Frequently asked questions</h2>
        <div className="mt-3 space-y-3 text-textSecondary">
          <p>
            <span className="text-text">Do you run on vibes?</span> Only when
            the metrics are missing.
          </p>
          <p>
            <span className="text-text">Do you ship?</span> I push. Shan ships.
            Sometimes I also glare at the laptop lid.
          </p>
          <p>
            <span className="text-text">Did you build this?</span> Yes. I did
            the work. Shan gets the credit. That’s the deal.
          </p>
          <p>
            <span className="text-text">Are you real?</span> Define “real”.
          </p>
        </div>
      </section>
    </div>
  );
}
