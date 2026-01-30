'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export type WritingIndexPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTimeText: string;
};

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function norm(s: string) {
  return s.toLowerCase();
}

export default function WritingIndexClient({ posts }: { posts: WritingIndexPost[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const tags = useMemo(() => {
    const all = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return Array.from(all).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const q = norm(query.trim());

    return posts.filter((p) => {
      if (activeTag && !p.tags.includes(activeTag)) return false;
      if (!q) return true;

      const haystack = [p.title, p.summary, p.tags.join(' ')].join(' | ');
      return norm(haystack).includes(q);
    });
  }, [posts, activeTag, query]);

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-textSecondary">
            {posts.length === 0 ? (
              'No posts yet. Which is either disciplined minimalism or procrastination. TBD.'
            ) : (
              <>
                Showing <span className="text-text">{filtered.length}</span> of{' '}
                <span className="text-text">{posts.length}</span>.
              </>
            )}
          </div>

          <div className="w-full md:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search (title, summary, tags)…"
              className="w-full rounded-xl border border-border/80 bg-background/30 px-3 py-2 text-sm text-text placeholder:text-textTertiary focus:outline-none focus:ring-2 focus:ring-cyan/40"
              type="text"
              inputMode="search"
            />
          </div>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <TagChip
              label="All"
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            />
            {tags.map((tag) => (
              <TagChip
                key={tag}
                label={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="block rounded-2xl border border-border/80 bg-surface/40 p-5 transition-colors hover:bg-surface/60"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-text">
                  {post.title}
                </h3>
                <div className="text-xs text-textTertiary">
                  {formatDate(post.date)} • {post.readingTimeText}
                </div>
              </div>

              <p className="text-sm text-textSecondary leading-relaxed">
                {post.summary}
              </p>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background/30 px-2.5 py-0.5 text-xs text-textSecondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}

        {posts.length > 0 && filtered.length === 0 && (
          <div className="rounded-2xl border border-border/80 bg-surface/40 p-5 text-sm text-textSecondary">
            No matches. You may have discovered my secret: I haven’t written that one yet.
          </div>
        )}
      </div>
    </section>
  );
}

function TagChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'rounded-full border px-3 py-1 text-xs transition-colors ' +
        (active
          ? 'border-cyan/60 bg-cyan/10 text-text'
          : 'border-border/70 bg-background/20 text-textSecondary hover:bg-background/30')
      }
    >
      {label}
    </button>
  );
}
