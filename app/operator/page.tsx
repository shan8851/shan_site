import type { Metadata } from 'next';
import Link from 'next/link';

import {
  decisionPolicy,
  operatingPrinciples,
  operatorLastUpdated,
  operatorScoreboard,
} from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Operator',
  description: 'How Shan runs execution systems, decision policy, and guardrails.',
};

export default function OperatorPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Operator</h1>
        <p className="max-w-2xl text-muted">
          This is the execution model: where autonomy is useful, where approvals still matter,
          and how reliability stays ahead of hype.
        </p>
        <p className="text-xs text-muted">last updated: {operatorLastUpdated}</p>
      </header>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Decision policy</h2>
        <ul className="space-y-4">
          {decisionPolicy.map((policy) => (
            <li key={policy.mode} className="space-y-1 rounded-sm border border-border bg-surface/40 px-3 py-3">
              <p className="text-xs uppercase tracking-wide text-muted">{policy.mode}</p>
              <p className="text-sm">{policy.defaultAction}</p>
              <p className="text-xs text-muted">examples: {policy.examples}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Principles</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {operatingPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Scoreboard</h2>
        <ul className="space-y-3">
          {operatorScoreboard.map((metric) => (
            <li key={metric.label} className="space-y-1">
              <p className="text-sm font-semibold tracking-tight">{metric.label}</p>
              <p className="text-sm text-muted">target: {metric.target}</p>
              <p className="text-sm text-muted">why: {metric.reason}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-8 text-sm text-muted">
        For current execution lanes, start on{' '}
        <Link href="/now" className="underline underline-offset-4 hover:text-text">
          /now
        </Link>
        .
      </section>
    </div>
  );
}
