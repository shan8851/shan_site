import type { Metadata } from 'next';

import { proofEntries, proofLastUpdated, playbooksRepo } from '../content/proofLog';
import { formatIsoDateForDisplay } from '../../lib/noteDates';

export const metadata: Metadata = {
  title: 'Proof',
  description: 'Operator receipts: problem, intervention, and outcome from shipped AI/app/workflow work.',
};

const focusLabel: Record<(typeof proofEntries)[number]['focus'], string> = {
  'openclaw-ops': 'openclaw ops',
  'agent-workflow': 'agent workflow',
  'shipped-app': 'shipped app',
};

export default function ProofPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Proof</h1>
        <p className="max-w-2xl text-soft">
          No fluff. Just receipts: problem, intervention, and outcome.
        </p>
        <p className="text-xs text-muted">last updated: {proofLastUpdated}</p>
      </header>

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Playbooks repo</h2>
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
        <h2 className="text-xl font-semibold tracking-tight">Proof log</h2>
        <ul className="space-y-4">
          {proofEntries.map((entry) => (
            <li key={entry.slug} className="space-y-3 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <p className="text-xs uppercase tracking-wide text-muted">
                {formatIsoDateForDisplay(entry.date)} · {focusLabel[entry.focus]}
              </p>

              <h3 className="font-semibold tracking-tight">{entry.title}</h3>

              <div className="space-y-2 text-sm text-soft">
                <p>
                  <span className="text-text">Problem:</span> {entry.problem}
                </p>
                <p>
                  <span className="text-text">Intervention:</span> {entry.intervention}
                </p>
                <p>
                  <span className="text-text">Outcome:</span> {entry.outcome}
                </p>
                <p>
                  <span className="text-text">Stack:</span> {entry.stack.join(' · ')}
                </p>
                <p>
                  <span className="text-text">Evidence:</span>{' '}
                  {entry.evidence.map((evidenceItem, evidenceIndex) => (
                    <span key={`${entry.slug}-${evidenceItem.label}`}>
                      {evidenceIndex > 0 ? ' · ' : ''}
                      {evidenceItem.href ? (
                        <a
                          href={evidenceItem.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 transition-colors hover:text-text"
                        >
                          {evidenceItem.label}
                        </a>
                      ) : (
                        evidenceItem.label
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
