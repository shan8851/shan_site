'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { formatIsoDateForDisplay } from '../../lib/noteDates';

export type WritingIndexPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

const normalizeText = (value: string): string => value.trim().toLowerCase();

export default function WritingIndexClient({ posts }: { posts: WritingIndexPost[] }) {
  const [searchValue, setSearchValue] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const uniqueTags = new Set(posts.flatMap((post) => post.tags));
    return Array.from(uniqueTags).sort((leftTag, rightTag) => leftTag.localeCompare(rightTag));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedSearchValue = normalizeText(searchValue);

    return posts.filter((post) => {
      if (activeTag !== null && !post.tags.includes(activeTag)) {
        return false;
      }

      if (!normalizedSearchValue) {
        return true;
      }

      const searchableText = [post.title, post.summary, post.tags.join(' ')].join(' ');
      return normalizeText(searchableText).includes(normalizedSearchValue);
    });
  }, [activeTag, posts, searchValue]);

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search"
          type="search"
          inputMode="search"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-muted focus:border-text focus:outline-none"
        />

        {availableTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            <TagButton
              active={activeTag === null}
              label="all"
              onClick={() => setActiveTag(null)}
            />
            {availableTags.map((tag) => (
              <TagButton
                key={tag}
                active={activeTag === tag}
                label={tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-muted">No matching posts.</p>
      ) : (
        <ul className="space-y-7">
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/notes/${post.slug}`}
                className="group block space-y-1"
              >
                <h2 className="text-lg font-semibold tracking-tight group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-muted">{formatIsoDateForDisplay(post.date)}</p>
                <p className="text-muted">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const TagButton = ({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={
      'rounded-md border px-2 py-1 text-xs transition-colors cursor-pointer ' +
      (active
        ? 'border-text text-text'
        : 'border-border text-muted hover:border-text hover:text-text')
    }
  >
    {label}
  </button>
);
