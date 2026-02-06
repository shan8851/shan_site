import Link from 'next/link';

import { getAllWritingPosts } from '../lib/writing';

const formatDate = (isoDate: string): string => {
  const parsedDate = new Date(isoDate);
  if (Number.isNaN(parsedDate.getTime())) return isoDate;

  return parsedDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const recentPosts = writingPosts.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl font-semibold tracking-tight">engineer. builder.</p>
        <p className="max-w-2xl text-muted">
          I build payment and automation systems that stay calm in production.
        </p>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-lg font-semibold tracking-tight">now</h2>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold tracking-tight">currently</h3>
          <ul className="list-disc space-y-1 pl-5 text-muted">
            <li>web3 UI end-to-end testing flows (staking + bridging)</li>
            <li>on-chain payments and settlement flows (Polygon)</li>
            <li>AI automation workflows for day-to-day operations</li>
          </ul>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold tracking-tight">not doing</h3>
          <ul className="list-disc space-y-1 pl-5 text-muted">
            <li>tool-hopping for novelty</li>
            <li>spreading across new stacks without a shipping reason</li>
            <li>doom-scrolling the job market</li>
          </ul>
        </div>
        <p className="text-xs text-muted">last updated: 2026-02-06</p>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Recent posts</h2>
          <Link href="/writing" className="text-sm text-muted transition-colors hover:text-text">
            all
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`} className="group block space-y-1">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted">{formatDate(post.date)}</p>
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
