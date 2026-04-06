import Link from 'next/link';

import {
  homeIntro,
  northStarLead,
  northStarOutsideWork,
  northStarWork,
  rightNowNarrative,
  rightNowSnapshot,
  siteLastUpdated,
  workingStylePoints,
} from './content/operatorFrontDoor';
import { logEntries } from './content/proofLog';
import { formatIsoDateForDisplay, getIsoDateSortValue } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const homeNotes = writingPosts.slice(0, 3);
  const latestLogEntries = [...logEntries]
    .sort((entryA, entryB) => getIsoDateSortValue(entryB.date) - getIsoDateSortValue(entryA.date))
    .slice(0, 5);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl tracking-tight">engineer. <span className="text-accent">builder.</span> systems+ai.</p>
        <p className="max-w-2xl text-muted">{homeIntro}</p>
        <p className="max-w-2xl text-sm text-muted">Last updated: {siteLastUpdated}</p>
      </section>

      <section className="section-divider space-y-3 pt-10">
        <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> North star</h2>
        <p className="max-w-2xl text-muted">{northStarLead}</p>
        <p className="max-w-2xl text-muted">
          <span className="font-semibold text-text">At work:</span> {northStarWork}
        </p>
        <p className="max-w-2xl text-muted">
          <span className="font-semibold text-text">Outside work:</span> {northStarOutsideWork}
        </p>
      </section>

      <section className="section-divider space-y-4 pt-10">
        <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> How I work</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {workingStylePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="section-divider space-y-5 pt-10">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> Right now</h2>
          <Link href="/now" className="link-splash text-sm text-muted">
            full now page
          </Link>
        </div>
        <p className="max-w-3xl text-soft">{rightNowNarrative}</p>

        <ul className="list-disc space-y-2 pl-5 text-soft">
          {rightNowSnapshot.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-divider space-y-5 pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> Notes</h2>
          <Link href="/notes" className="link-splash text-sm text-muted">
            all
          </Link>
        </div>

        {homeNotes.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {homeNotes.map((post) => (
              <li key={post.slug}>
                <Link href={`/notes/${post.slug}`} className="group block space-y-1">
                  <h3 className="font-semibold tracking-tight transition-colors group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
                    {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
                  </p>
                  <p className="text-soft">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section-divider space-y-5 pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl tracking-tight"><span className="text-accent">{'//'}</span> Latest log</h2>
          <Link href="/log" className="link-splash text-sm text-muted">
            full log
          </Link>
        </div>

        <ul className="space-y-0 font-mono text-[13px] leading-6">
          {latestLogEntries.map((entry) => (
            <li key={entry.id} className="border-l border-accent/25 pl-3 py-1.5">
              <p className="min-w-0 break-words text-soft">
                <span className="text-muted"><span className="text-accent">›</span> {entry.date}:</span>{' '}
                <span>{entry.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
