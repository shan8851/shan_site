import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ReadingProgressRail } from '../../components/ReadingProgressRail';
import { baseUrl } from '../../site';
import { formatIsoDateForDisplay } from '../../../lib/noteDates';
import { getAllWritingPosts, getWritingPost } from '../../../lib/writing';

export async function generateStaticParams() {
  const posts = await getAllWritingPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const post = await getWritingPost(slug);
    const canonicalUrl = `${baseUrl}/notes/${post.slug}`;
    return {
      title: post.title,
      description: post.summary,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: 'article',
        url: canonicalUrl,
        title: post.title,
        description: post.summary,
        publishedTime: post.date,
        modifiedTime: post.updated ?? post.date,
        images: [
          {
            url: '/opengraph-image',
            alt: `${post.title} — Shan`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.summary,
        creator: '@shan8851',
        images: [
          {
            url: '/twitter-image',
            alt: `${post.title} — Shan`,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Writing',
      description: 'Writing index.',
    };
  }
}

const getNextReadPosts = async (currentSlug: string) => {
  const posts = await getAllWritingPosts();
  const currentPost = posts.find((entry) => entry.slug === currentSlug);

  if (!currentPost) {
    return [];
  }

  const scoredPosts = posts
    .filter((entry) => entry.slug !== currentSlug)
    .map((entry) => {
      const sharedTagCount = entry.tags.filter((tag) => currentPost.tags.includes(tag)).length;
      return {
        ...entry,
        sharedTagCount,
      };
    })
    .sort((leftPost, rightPost) => {
      if (rightPost.sharedTagCount !== leftPost.sharedTagCount) {
        return rightPost.sharedTagCount - leftPost.sharedTagCount;
      }

      return rightPost.date.localeCompare(leftPost.date);
    });

  return scoredPosts.slice(0, 3);
};

export default async function WritingPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = await getWritingPost(slug).catch(() => null);

  if (post === null) {
    notFound();
  }

  const nextReadPosts = await getNextReadPosts(slug);
  const canonicalUrl = `${baseUrl}/notes/${post.slug}`;
  const shareText = `${post.title} — ${canonicalUrl}`;
  const xShareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const tableOfContents = post.headings;

  return (
    <article className="space-y-10">
      <ReadingProgressRail />

      <div className="space-y-5">
        <Link href="/notes" className="text-sm text-muted hover:text-text">
          ← Back to notes
        </Link>
        <header className="max-w-[65ch] space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted">
            {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
            {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
          </p>
          <p className="text-muted">{post.summary}</p>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>share:</span>
            <a href={xShareUrl} target="_blank" rel="noreferrer" className="hover:text-text hover:underline">
              X
            </a>
            <a href={canonicalUrl} className="hover:text-text hover:underline">
              link
            </a>
          </div>

          {tableOfContents.length > 1 ? (
            <nav
              aria-label="On this page"
              className="rounded-sm border border-border bg-surface/60 px-3 py-2.5"
            >
              <p className="text-[11px] uppercase tracking-wide text-muted">On this page</p>
              <ul className="mt-2 space-y-1.5">
                {tableOfContents.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block text-sm leading-snug text-muted transition-colors hover:text-text hover:underline ${
                        heading.level === 3 ? 'pl-2' : ''
                      }`}
                    >
                      {heading.level === 3 ? <span className="mr-1 text-muted">↳</span> : null}
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </header>
      </div>

      <section
        className="article-prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {nextReadPosts.length > 0 ? (
        <section className="space-y-4 border-t border-border pt-8">
          <h2 className="text-lg font-semibold tracking-tight">Next read</h2>
          <ul className="space-y-4">
            {nextReadPosts.map((nextPost) => (
              <li key={nextPost.slug}>
                <Link href={`/notes/${nextPost.slug}`} className="group block space-y-1">
                  <p className="font-semibold tracking-tight group-hover:underline">{nextPost.title}</p>
                  <p className="text-xs text-muted">
                    {formatIsoDateForDisplay(nextPost.date)} · {nextPost.readingTimeText}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
