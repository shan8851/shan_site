'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import { formatIsoDateForDisplay } from '../../lib/noteDates';

export type WritingIndexPost = {
  slug: string;
  title: string;
  date: string;
  updated: string | null;
  summary: string;
  tags: string[];
  readingTimeText: string;
};

const TAG_QUERY_PARAM = 'tag';
const QUICK_FILTER_TAG_LIMIT = 5;

const normalizeText = (value: string): string => value.trim().toLowerCase();

const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return target.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select';
};

const buildTagQueryHref = ({
  pathname,
  currentQuery,
  tag,
}: {
  pathname: string;
  currentQuery: string;
  tag: string | null;
}): string => {
  const nextSearchParams = new URLSearchParams(currentQuery);

  if (tag === null) {
    nextSearchParams.delete(TAG_QUERY_PARAM);
  } else {
    nextSearchParams.set(TAG_QUERY_PARAM, tag);
  }

  const nextQuery = nextSearchParams.toString();
  return nextQuery.length > 0 ? `${pathname}?${nextQuery}` : pathname;
};

export default function WritingIndexClient({ posts }: { posts: WritingIndexPost[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const focusSearchInput = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (isTypingTarget(event.target)) {
        return;
      }

      event.preventDefault();
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    };

    window.addEventListener('keydown', focusSearchInput);

    return () => {
      window.removeEventListener('keydown', focusSearchInput);
    };
  }, []);

  const rankedTags = useMemo(() => {
    const tagCounts = posts.reduce((countMap, post) => {
      post.tags.forEach((tag) => {
        const previousCount = countMap.get(tag) ?? 0;
        countMap.set(tag, previousCount + 1);
      });

      return countMap;
    }, new Map<string, number>());

    return Array.from(tagCounts.entries())
      .sort(([leftTag, leftCount], [rightTag, rightCount]) => {
        if (leftCount === rightCount) {
          return leftTag.localeCompare(rightTag);
        }

        return rightCount - leftCount;
      })
      .map(([tag]) => tag);
  }, [posts]);

  const tagLookup = useMemo(
    () => new Map(rankedTags.map((tag) => [normalizeText(tag), tag])),
    [rankedTags]
  );

  const activeTag = useMemo(() => {
    const tagFromQuery = searchParams.get(TAG_QUERY_PARAM);

    if (tagFromQuery === null) {
      return null;
    }

    return tagLookup.get(normalizeText(tagFromQuery)) ?? null;
  }, [searchParams, tagLookup]);

  const quickFilterTags = useMemo(() => {
    const topTags = rankedTags.slice(0, QUICK_FILTER_TAG_LIMIT);

    if (activeTag === null || topTags.includes(activeTag)) {
      return topTags;
    }

    return [...topTags, activeTag];
  }, [activeTag, rankedTags]);

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

  const applyTagFilter = (tag: string | null): void => {
    const nextTag = tag === activeTag ? null : tag;
    const nextHref = buildTagQueryHref({
      pathname,
      currentQuery: searchParams.toString(),
      tag: nextTag,
    });

    router.replace(nextHref, { scroll: false });
  };

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <input
          ref={searchInputRef}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key !== 'Escape') {
              return;
            }

            if (searchValue.length > 0) {
              setSearchValue('');
              return;
            }

            event.currentTarget.blur();
          }}
          placeholder="Search"
          type="search"
          aria-label="Search notes"
          inputMode="search"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-muted focus:border-text focus:outline-none"
        />
        <p className="text-xs text-muted">Tip: press / to jump to search.</p>

        {quickFilterTags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-muted">Quick filters:</p>
            {quickFilterTags.map((tag) => (
              <TagButton
                key={tag}
                active={activeTag === tag}
                label={tag}
                onClick={() => applyTagFilter(tag)}
              />
            ))}
            {activeTag !== null ? (
              <button
                type="button"
                onClick={() => applyTagFilter(null)}
                className="text-xs text-muted underline-offset-2 transition-colors hover:text-text hover:underline"
              >
                clear
              </button>
            ) : null}
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
    aria-pressed={active}
    className={
      'rounded-full border px-2.5 py-1 text-xs transition-colors cursor-pointer ' +
      (active
        ? 'border-text text-text'
        : 'border-border text-muted hover:border-text hover:text-text')
    }
  >
    {label}
  </button>
);
