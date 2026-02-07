import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    return {
      title: post.title,
      description: post.summary,
    };
  } catch {
    return {
      title: 'Writing',
      description: 'Writing index.',
    };
  }
}

const formatDate = (isoDate: string): string => {
  const parsedDate = new Date(isoDate);
  if (Number.isNaN(parsedDate.getTime())) return isoDate;

  return parsedDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export default async function WritingPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = await getWritingPost(slug).catch(() => null);

  if (post === null) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <div className="space-y-5">
        <Link href="/writing" className="text-sm text-muted hover:text-text">
          ← Back to writing
        </Link>
        <header className="max-w-[65ch] space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted">{formatDate(post.date)}</p>
          <p className="text-muted">{post.summary}</p>
        </header>
      </div>

      <section
        className="article-prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
