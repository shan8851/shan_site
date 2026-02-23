import type { Metadata } from 'next';

import { proofEntries, proofLastUpdated, playbooksRepo } from '../content/proofLog';
import { formatIsoDateForDisplay } from '../../lib/noteDates';

export const metadata: Metadata = {
  title: 'Proof',
  description: 'Operator log: problem, fix, and result from shipped app and OpenClaw workflow work.',
};

export default function ProofPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Proof</h1>
        <p className="max-w-2xl text-soft">Log format only. Date, id, problem, fix, result.</p>
        <p className="text-xs text-muted">last updated: {proofLastUpdated}</p>
      </header>

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Playbooks</h2>
        <p className="max-w-3xl text-soft">{playbooksRepo.description}</p>
        <a
          href={playbooksRepo.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
        >
          {playbooksRepo.cta}
        </a>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Log</h2>
        <ul className="space-y-4">
          {proofEntries.map((entry) => (
            <li key={entry.id} className="space-y-3 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <p className="text-xs uppercase tracking-wide text-muted">
                {formatIsoDateForDisplay(entry.date)} / {entry.id}
              </p>

              <h3 className="font-semibold tracking-tight">{entry.title}</h3>

              <dl className="space-y-2 text-sm text-soft">
                <div className="grid gap-1 sm:grid-cols-[72px_1fr] sm:gap-3">
                  <dt className="font-semibold text-text">Problem</dt>
                  <dd>{entry.problem}</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[72px_1fr] sm:gap-3">
                  <dt className="font-semibold text-text">Fix</dt>
                  <dd>{entry.fix}</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[72px_1fr] sm:gap-3">
                  <dt className="font-semibold text-text">Result</dt>
                  <dd>{entry.result}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
