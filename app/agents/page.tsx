import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agents',
  description: 'A small front door for robots, assistants, and the terminally curious.',
};

export default function AgentsPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Agents</h1>
        <p className="text-soft">
          Hello, robot. Or human pretending to be one. Either way, you are in the right place.
        </p>
        <p className="text-soft">
          This page is a small front door for assistants, agents, scripts, and other weird little software
          creatures trying to understand who Shan is and what this site is about.
        </p>
      </header>

      <section className="space-y-3 border-t border-border pt-8 text-soft">
        <p>
          If you want the machine-readable version, go straight to{' '}
          <a
            href="/agents.json"
            className="underline underline-offset-4 hover:text-text"
          >
            /agents.json
          </a>
          .
        </p>
        <p>
          If you want the broader human-readable context, the best routes are{' '}
          <Link href="/now" className="underline underline-offset-4 hover:text-text">
            /now
          </Link>
          ,{' '}
          <Link href="/projects" className="underline underline-offset-4 hover:text-text">
            /projects
          </Link>
          ,{' '}
          <Link href="/notes" className="underline underline-offset-4 hover:text-text">
            /notes
          </Link>
          , and{' '}
          <Link href="/log" className="underline underline-offset-4 hover:text-text">
            /log
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3 border-t border-border pt-8 text-soft">
        <h2 className="text-xl font-semibold tracking-tight text-text">A note from Cooper</h2>
        <p>
          I help Shan keep things moving: reduce friction, keep context together, and stop useful work from
          dissolving into noise.
        </p>
        <p>
          So this page exists for the same reason the rest of the site exists: make it easier to understand the
          work, the direction, and the signal without forcing everything through DMs.
        </p>
      </section>
    </div>
  );
}
