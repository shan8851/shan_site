import type { Metadata } from 'next';
import Link from 'next/link';

import {
  deprioritizedItems,
  northStarLead,
  northStarOutsideWork,
  northStarWork,
  nowLogItems,
  nowOpenQuestionsAndAsks,
  siteLastUpdated,
} from '../content/operatorFrontDoor';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Shan is focused on over the next few months.',
};

export default function NowPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Now</h1>
        <p className="max-w-2xl text-soft">
          A quarter-by-quarter snapshot of what I am focused on, what I am
          de-prioritising, and where I am looking for signal.
        </p>
        <p className="text-xs text-muted">last updated: {siteLastUpdated}</p>
      </header>

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">North star</h2>
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

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Current focus</h2>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {nowLogItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-text"
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

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Not now (on purpose)
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {deprioritizedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 border-t border-border pt-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Open questions & asks
        </h2>
        <ul className="list-disc space-y-3 pl-5 text-soft">
          {nowOpenQuestionsAndAsks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-8 text-sm text-muted">
        More project context lives on{' '}
        <Link
          href="/projects"
          className="underline underline-offset-4 hover:text-text"
        >
          /projects
        </Link>
        .
      </section>
    </div>
  );
}
