import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllWritingPosts, getWritingPost } from '../../../lib/writing';
import {
  getWritingAuthorAbout,
  getWritingAuthorLabel,
} from '../../../lib/writingAuthors';

export async function generateStaticParams() {
  const posts = await getAllWritingPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const post = await getWritingPost(slug);
    return {
      title: post.title,
      description: post.summary,
    };
  } catch {
    return {
      title: 'Writing',
      description: 'Notes and writing.',
    };
  }
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default async function WritingPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  let post;
  try {
    post = await getWritingPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/writing"
            className="text-sm text-textSecondary hover:text-text transition-colors"
          >
            ← back to /writing
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-sm text-textSecondary">
          <span>{formatDate(post.date)}</span>
          <span className="text-textTertiary">•</span>
          <span className="rounded-full border border-border/70 bg-surface/50 px-2.5 py-0.5 text-xs text-textSecondary">
            {getWritingAuthorLabel(post.author)}
          </span>
          <span className="text-textTertiary">•</span>
          <span>{post.readingTimeText}</span>
          {post.tags.length > 0 && (
            <>
              <span className="text-textTertiary">•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 bg-surface/50 px-2.5 py-0.5 text-xs text-textSecondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-textSecondary leading-relaxed">{post.summary}</p>
      </header>

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer className="space-y-3 pt-2">
        <div className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
          <div className="text-xs uppercase tracking-widest text-textTertiary">
            About the author
          </div>
          <p className="mt-2 text-sm text-textSecondary leading-relaxed">
            {getWritingAuthorAbout(post.author)}
          </p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
          <div className="text-sm text-textSecondary">
            If this post was useful (or wildly wrong), I’m reachable via{' '}
            <Link href="/contact" className="text-cyan hover:text-green">
              /contact
            </Link>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}
