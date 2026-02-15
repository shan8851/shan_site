import Link from 'next/link';

import { TWITTER_URL } from './constants';
import { formatIsoDateForDisplay } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const featuredPosts = writingPosts.filter((post) => post.featured).slice(0, 3);
  const latestNonFeaturedPosts = writingPosts.filter((post) => !post.featured).slice(0, 2);
  const homeNotes = [...featuredPosts, ...latestNonFeaturedPosts].slice(0, 5);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl font-semibold tracking-tight">
          engineer. builder. onchain.
        </p>
        <p className="max-w-2xl text-muted">
          I build payment and automation systems that stay calm in production.
        </p>
        <p className="max-w-2xl rounded-sm border border-border bg-surface/60 px-2 py-1 text-sm text-muted">
          I share practical notes on systems, AI leverage, and execution. <span className="font-medium text-text">Follow along on </span>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline decoration-border underline-offset-4 transition-colors hover:text-text"
          >
            X
          </a>
          .
        </p>
      </section>
      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight">Now</h2>
        <div className="space-y-1">
          <ul className="list-disc space-y-1 pl-5 text-muted">
            <li>moving all money onchain at Polygon</li>
            <li>building automated workflows for day-to-day operations</li>
            <li>playing too much with OpenClaw while helping the uninitiated use AI to its full potential</li>
          </ul>
        </div>
        <p className="text-xs text-muted">last updated: 2026-02-13</p>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Notes</h2>
          <Link
            href="/notes"
            className="text-sm text-muted transition-colors hover:text-text hover:underline"
          >
            all
          </Link>
        </div>

        {homeNotes.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {homeNotes.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/notes/${post.slug}`}
                  className="group block space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold tracking-tight transition-colors group-hover:underline">
                      {post.title}
                    </h3>
                    {post.featured ? (
                      <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                        featured
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted">
                    {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
                    {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
                  </p>
                  <p className="text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
