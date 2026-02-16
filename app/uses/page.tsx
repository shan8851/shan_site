import type { Metadata } from 'next';

import { usesLastUpdated, usesSections } from '../content/uses';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Tools, models, workflows, and stack Shan uses day to day.',
};

export default function UsesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Uses</h1>
        <p className="max-w-2xl text-soft">
          Tools and stack I actually use day to day. This is a practical snapshot, not a forever list.
        </p>
        <p className="text-xs text-muted">last updated: {usesLastUpdated}</p>
      </header>

      {usesSections.map((section) => (
        <section key={section.title} className="space-y-3 border-t border-border pt-8">
          <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={`${section.title}-${item.label}`} className="text-soft">
                <span className="text-text">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
