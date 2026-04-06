import type { Metadata } from 'next';
import Link from 'next/link';

import {
  deprioritizedItems,
  northStarLead,
  northStarOutsideWork,
  northStarWork,
  nowFocusNarrative,
  nowLogItems,
  nowOpenQuestionsAndAsks,
  siteLastUpdated,
} from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Now',
  description: 'Current priorities across work, tooling, and life ops.',
};

export default function NowPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl tracking-tight">Now</h1>
        <p className="max-w-2xl text-soft">
          Current priorities, deliberate omissions, and the places I am still
          looking for signal.
        </p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="section-divider space-y-3 pt-8">
        <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> North star</h2>
        <p className="max-w-2xl text-soft">{northStarLead}</p>
        <p className="max-w-2xl text-soft">
          <span className="font-semibold text-text">At work:</span>{' '}
          {northStarWork}
        </p>
        <p className="max-w-2xl text-soft">
          <span className="font-semibold text-text">Outside work:</span>{' '}
          {northStarOutsideWork}
        </p>
      </section>

      <section className="section-divider space-y-3 pt-8">
        <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> Current focus</h2>
        <p className="max-w-2xl text-soft">{nowFocusNarrative}</p>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {nowLogItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-splash underline underline-offset-4"
                  >
                    {item.label}
                  </a>
                  : {item.text}
                </>
              ) : (
                <>
                  <span className="font-medium">{item.label}:</span> {item.text}
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-divider space-y-3 pt-8">
        <h2 className="text-xl tracking-tight">
          <span className="text-accent">{'//'}</span> Not now (on purpose)
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {deprioritizedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-divider space-y-3 pt-8">
        <h2 className="text-xl tracking-tight">
          <span className="text-accent">{'//'}</span> Open questions & asks
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {nowOpenQuestionsAndAsks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-divider pt-8 text-sm text-muted">
        More project context lives on{' '}
        <Link
          href="/projects"
          className="link-splash underline underline-offset-4"
        >
          /projects
        </Link>
        .
      </section>
    </div>
  );
}
