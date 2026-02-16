import type { Metadata } from 'next';
import Link from 'next/link';

import {
  currentFocusTracks,
  deprioritizedItems,
  northStar,
  siteLastUpdated,
  weeklyCadence,
} from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Shan is focused on right now.',
};

const statusClassByTrackStatus = {
  active: 'text-amber-600 dark:text-amber-300',
  shipping: 'text-emerald-700 dark:text-emerald-300',
  tightening: 'text-sky-700 dark:text-sky-300',
} as const;

export default function NowPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Now</h1>
        <p className="max-w-2xl text-muted">
          What I am focused on at the moment. Kept intentionally simple so it stays honest and current.
        </p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">North star</h2>
        <p className="max-w-2xl text-muted">{northStar}</p>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Current focus</h2>
        <ul className="space-y-4">
          {currentFocusTracks.map((track) => (
            <li key={track.title} className="space-y-1 rounded-sm border border-border bg-surface/40 px-3 py-3">
              <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
                <span className={statusClassByTrackStatus[track.status]}>{track.status}</span>
                <span>·</span>
                <span>{track.title}</span>
              </p>
              <p className="text-sm text-muted">{track.objective}</p>
              <p className="text-sm">
                <span className="text-muted">next:</span> {track.nextMove}
              </p>
              <p className="text-xs text-muted">signal: {track.signal}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Operating cadence</h2>
        <ul className="space-y-3">
          {weeklyCadence.map((entry) => (
            <li key={entry.window} className="space-y-1">
              <p className="text-sm font-semibold tracking-tight">{entry.window}</p>
              <p className="text-sm text-muted">{entry.focus}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Not now (on purpose)</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {deprioritizedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-8 text-sm text-muted">
        Work detail lives on{' '}
        <Link href="/projects" className="underline underline-offset-4 hover:text-text">
          /projects
        </Link>
        .
      </section>
    </div>
  );
}
