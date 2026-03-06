import type { Metadata } from 'next';

import { labs, labsLastUpdated } from '../content/labs';

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Focused subdomain tools and experiments by Shan.',
};

export default function LabsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Labs</h1>
        <p className="max-w-2xl text-soft">
          Focused subdomain tools and experiments. Small surfaces, clear purpose.
        </p>
        <p className="text-xs text-muted">last updated: {labsLastUpdated}</p>
      </header>

      <section className="space-y-4 border-t border-border pt-8">
        <ul className="space-y-4">
          {labs.map((lab) => (
            <li key={lab.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold tracking-tight">{lab.title}</h2>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {lab.status}
                </span>
              </div>
              <p className="text-sm text-muted">{lab.summary}</p>
              <a
                href={lab.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
              >
                open
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
