'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

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
const YEAR_QUERY_PARAM = 'year';
const QUICK_FILTER_TAG_LIMIT = 5;
const POSTS_PAGE_SIZE = 12;
const UNKNOWN_YEAR_VALUE = 'unknown';

const normalizeText = (value: string): string => value.trim().toLowerCase();

const extractYearValue = (isoDate: string): string => {
  const yearMatch = isoDate.match(/^(\d{4})/);
  return yearMatch?.[1] ?? UNKNOWN_YEAR_VALUE;
};

const getYearLabel = (yearValue: string): string =>
  yearValue === UNKNOWN_YEAR_VALUE ? 'Unknown' : yearValue;

const sortYearValuesDescending = (leftYear: string, rightYear: string): number => {
  const leftAsNumber = Number.parseInt(leftYear, 10);
  const rightAsNumber = Number.parseInt(rightYear, 10);
  const leftIsNumeric = Number.isFinite(leftAsNumber);
  const rightIsNumeric = Number.isFinite(rightAsNumber);

  if (leftIsNumeric && rightIsNumeric) {
    return rightAsNumber - leftAsNumber;
  }

  if (leftIsNumeric) {
    return -1;
  }

  if (rightIsNumeric) {
    return 1;
  }

  return rightYear.localeCompare(leftYear);
};

const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return target.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select';
};

const buildFilterQueryHref = ({
  pathname,
  currentQuery,
  key,
  value,
}: {
  pathname: string;
  currentQuery: string;
  key: string;
  value: string | null;
}): string => {
  const nextSearchParams = new URLSearchParams(currentQuery);

  if (value === null) {
    nextSearchParams.delete(key);
  } else {
    nextSearchParams.set(key, value);
  }

  const nextQuery = nextSearchParams.toString();
  return nextQuery.length > 0 ? `${pathname}?${nextQuery}` : pathname;
};

export default function WritingIndexClient({ posts }: { posts: WritingIndexPost[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const [paginationState, setPaginationState] = useState({
    filterKey: '',
    visiblePostLimit: POSTS_PAGE_SIZE,
  });

  useEffect(() => {
    const focusSearchInput = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (isTypingTarget(event.target)) {
        return;
      }

      event.preventDefault();
      const notesSearchInput = document.getElementById('notes-search') as HTMLInputElement | null;
      notesSearchInput?.focus();
      notesSearchInput?.select();
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

  const yearLookup = useMemo(
    () => new Set(posts.map((post) => extractYearValue(post.date))),
    [posts]
  );

  const activeTag = useMemo(() => {
    const tagFromQuery = searchParams.get(TAG_QUERY_PARAM);

    if (tagFromQuery === null) {
      return null;
    }

    return tagLookup.get(normalizeText(tagFromQuery)) ?? null;
  }, [searchParams, tagLookup]);

  const activeYear = useMemo(() => {
    const yearFromQuery = searchParams.get(YEAR_QUERY_PARAM);

    if (yearFromQuery === null) {
      return null;
    }

    return yearLookup.has(yearFromQuery) ? yearFromQuery : null;
  }, [searchParams, yearLookup]);

  const quickFilterTags = useMemo(() => {
    const topTags = rankedTags.slice(0, QUICK_FILTER_TAG_LIMIT);

    if (activeTag === null || topTags.includes(activeTag)) {
      return topTags;
    }

    return [...topTags, activeTag];
  }, [activeTag, rankedTags]);

  const normalizedSearchValue = useMemo(() => normalizeText(searchValue), [searchValue]);

  const postsMatchingTagAndSearch = useMemo(() => {
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
  }, [activeTag, normalizedSearchValue, posts]);

  const availableYearCounts = useMemo(() => {
    return postsMatchingTagAndSearch.reduce((countMap, post) => {
      const yearValue = extractYearValue(post.date);
      const previousCount = countMap.get(yearValue) ?? 0;
      countMap.set(yearValue, previousCount + 1);
      return countMap;
    }, new Map<string, number>());
  }, [postsMatchingTagAndSearch]);

  const yearOptions = useMemo(() => {
    const baseYearOptions = Array.from(availableYearCounts.entries())
      .sort(([leftYear], [rightYear]) => sortYearValuesDescending(leftYear, rightYear))
      .map(([yearValue, count]) => ({
        yearValue,
        label: getYearLabel(yearValue),
        count,
      }));

    if (activeYear === null || availableYearCounts.has(activeYear)) {
      return baseYearOptions;
    }

    return [
      {
        yearValue: activeYear,
        label: getYearLabel(activeYear),
        count: 0,
      },
      ...baseYearOptions,
    ];
  }, [activeYear, availableYearCounts]);

  const filteredPosts = useMemo(() => {
    if (activeYear === null) {
      return postsMatchingTagAndSearch;
    }

    return postsMatchingTagAndSearch.filter((post) => extractYearValue(post.date) === activeYear);
  }, [activeYear, postsMatchingTagAndSearch]);

  const activeFilterKey = `${activeTag ?? ''}::${activeYear ?? ''}::${normalizedSearchValue}`;

  const visiblePostLimit =
    paginationState.filterKey === activeFilterKey
      ? paginationState.visiblePostLimit
      : POSTS_PAGE_SIZE;

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visiblePostLimit), [filteredPosts, visiblePostLimit]);

  const visiblePostGroups = useMemo(() => {
    const filteredYearCounts = filteredPosts.reduce((countMap, post) => {
      const yearValue = extractYearValue(post.date);
      const previousCount = countMap.get(yearValue) ?? 0;
      countMap.set(yearValue, previousCount + 1);
      return countMap;
    }, new Map<string, number>());

    const groupedPosts = visiblePosts.reduce((groupMap, post) => {
      const yearValue = extractYearValue(post.date);
      const postsForYear = groupMap.get(yearValue) ?? [];
      groupMap.set(yearValue, [...postsForYear, post]);
      return groupMap;
    }, new Map<string, WritingIndexPost[]>());

    return Array.from(groupedPosts.entries()).map(([yearValue, groupedYearPosts]) => ({
      yearValue,
      yearLabel: getYearLabel(yearValue),
      posts: groupedYearPosts,
      totalMatchingCount: filteredYearCounts.get(yearValue) ?? groupedYearPosts.length,
    }));
  }, [filteredPosts, visiblePosts]);

  const canLoadMore = visiblePosts.length < filteredPosts.length;

  const applyTagFilter = (tag: string | null): void => {
    const nextTag = tag === activeTag ? null : tag;
    const nextHref = buildFilterQueryHref({
      pathname,
      currentQuery: searchParams.toString(),
      key: TAG_QUERY_PARAM,
      value: nextTag,
    });

    router.replace(nextHref, { scroll: false });
  };

  const applyYearFilter = (year: string | null): void => {
    const nextYear = year === activeYear ? null : year;
    const nextHref = buildFilterQueryHref({
      pathname,
      currentQuery: searchParams.toString(),
      key: YEAR_QUERY_PARAM,
      value: nextYear,
    });

    router.replace(nextHref, { scroll: false });
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="notes-search" className="inline-flex items-center gap-1 text-xs text-muted">
          <span>search</span>
          <kbd className="rounded border border-border px-1.5 py-0.5 text-[11px] text-muted">/</kbd>
        </label>

        <input
          id="notes-search"
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
          placeholder="Search notes"
          type="search"
          aria-label="Search notes"
          inputMode="search"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-muted focus:border-text focus:outline-none"
        />

        {quickFilterTags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
            <p className="text-xs text-muted">tags:</p>
            {quickFilterTags.map((tag) => (
              <FilterButton key={tag} active={activeTag === tag} label={tag} onClick={() => applyTagFilter(tag)} />
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

        {yearOptions.length > 0 ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-xs text-muted">archive:</p>
            <FilterButton active={activeYear === null} label="all" onClick={() => applyYearFilter(null)} />
            {yearOptions.map((yearOption) => (
              <FilterButton
                key={yearOption.yearValue}
                active={activeYear === yearOption.yearValue}
                label={yearOption.label}
                onClick={() => applyYearFilter(yearOption.yearValue)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-muted">No matching posts.</p>
      ) : (
        <div className="space-y-7">
          {visiblePostGroups.map((group) => (
            <section key={group.yearValue} className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{group.yearLabel}</h2>
                <p className="text-xs text-muted">{group.totalMatchingCount}</p>
              </div>

              <ul className="space-y-7">
                {group.posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/notes/${post.slug}`} className="group block space-y-1">
                      <h3 className="text-lg font-semibold tracking-tight group-hover:underline">{post.title}</h3>
                      <p className="text-sm text-muted">
                        {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
                        {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
                      </p>
                      <p className="text-soft">{post.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {canLoadMore ? (
            <div className="pt-1">
              <button
                type="button"
                onClick={() =>
                  setPaginationState((currentState) => {
                    const nextVisiblePostLimit =
                      currentState.filterKey === activeFilterKey
                        ? currentState.visiblePostLimit + POSTS_PAGE_SIZE
                        : POSTS_PAGE_SIZE + POSTS_PAGE_SIZE;

                    return {
                      filterKey: activeFilterKey,
                      visiblePostLimit: nextVisiblePostLimit,
                    };
                  })
                }
                className="rounded-md border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-text hover:text-text"
              >
                load more
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

const FilterButton = ({
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
      'text-xs transition-colors underline-offset-2 cursor-pointer ' +
      (active ? 'text-text underline' : 'text-muted hover:text-text hover:underline')
    }
  >
    {label}
  </button>
);
