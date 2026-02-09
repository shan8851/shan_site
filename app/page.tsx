import Link from 'next/link';

import { formatIsoDateForDisplay } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const recentPosts = writingPosts.slice(0, 3);

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
      </section>
      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight">Now</h2>
        <div className="space-y-1">
          <ul className="list-disc space-y-1 pl-5 text-muted">
            <li>moving all money onchain at Polygon</li>
            <li>predictable end-to-end testing flows for web3 UIs</li>
            <li>automated workflows for day-to-day operations</li>
          </ul>
        </div>
        <p className="text-xs text-muted">last updated: 2026-02-06</p>
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

        {recentPosts.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/notes/${post.slug}`}
                  className="group block space-y-1"
                >
                  <h3 className="font-semibold tracking-tight transition-colors group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted">{formatIsoDateForDisplay(post.date)}</p>
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
