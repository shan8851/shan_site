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
        <p className="text-2xl font-semibold tracking-tight">Engineer. Builder.</p>
        <p className="max-w-2xl text-muted">
          I build payment and automation systems that stay calm in production.
        </p>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <h2 className="text-2xl font-bold tracking-tight">Now</h2>
        <ul className="space-y-2 text-muted">
          <li>Shipping on-chain payments and settlement flows.</li>
          <li>Building practical agent workflows for daily operations.</li>
          <li>Tightening end-to-end test coverage for web3 interfaces.</li>
          <li>Keeping football and strength work consistent each week.</li>
        </ul>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Recent posts</h2>
          <Link href="/writing" className="text-sm text-muted transition-colors hover:text-text">
            /writing
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
