import { notFound } from 'next/navigation'
import { CustomMarkdown } from 'app/components/markdown';
import { ScrollToTop } from 'app/components/scroll-to-top';
import { formatDate, getBlogPosts } from 'app/writing/utils';
import { baseUrl } from 'app/sitemap';
import { createBlogMetadata } from 'app/lib/metadata';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return {};
  }

  return createBlogMetadata(post.metadata, post.slug);
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/writing/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'shan8851',
              },
            }),
          }}
        />
        <article className="py-2 text-text text-lg">
          <Link
            className="inline-flex items-center gap-1 px-3 py-1.5 my-4 text-sm rounded-full bg-surface/30 border border-border text-textSecondary hover:text-purple hover:bg-surface/50 transition-all"
            href="/writing"
          >
            <BiLeftArrowAlt />
            go back
          </Link>

          <div className="space-y-4 mb-8">
            <h1 className="title font-semibold text-3xl tracking-tighter text-purple">
              {post.metadata.title}
            </h1>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-surface/50 border border-border text-sm">
                Published: <span className="font-medium text-green">{formatDate(post.metadata.publishedAt)}</span>
              </span>
              {post.metadata.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.split(',').slice(0, 3).map((tag) => (
                    <span
                      key={tag.trim()}
                      className="text-xs bg-background/60 text-textSecondary px-2 py-0.5 rounded-md border border-border"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="prose">
            <CustomMarkdown source={post.content} />
          </div>
        </article>
      </section>
      <ScrollToTop />
    </>
  );
}
