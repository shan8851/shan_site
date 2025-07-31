import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { BiRightArrowAlt } from 'react-icons/bi';

export function BlogPosts({ isPage = false }: { isPage?: boolean }) {
  let allBlogs = getBlogPosts();

  const sortedPosts = allBlogs.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const sortedAndLimitedPosts = isPage ? sortedPosts : sortedPosts.slice(0, 3);

  return (
    <section className="flex flex-col gap-6">
      {!isPage && (
        <div>
          <h3 className="text-green font-semibold tracking-tight text-xl">
            Writing
          </h3>
          <p className="text-textSecondary text-base mt-2 leading-loose">
            Writing has always been part of how I learn and reflect. These days
            I’m focused on DAO tooling, full-stack engineering in Web3, and
            helping others navigate the space.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {sortedAndLimitedPosts.map((post, index) => {
          const date = formatDate(post.metadata.publishedAt);
          const isLast = index === sortedAndLimitedPosts.length - 1;
          return (
            <article
              className={`pb-4 ${!isLast ? 'border-b border-border' : ''}`}
              key={post.slug}
            >
              <div className="flex justify-between items-center mb-1 gap-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium text-text hover:text-purple transition-colors"
                >
                  {post.metadata.title}
                </Link>
                <p className="text-sm text-textSecondary whitespace-nowrap">
                  {date}
                </p>
              </div>

              {post.metadata.summary && (
                <p className="text-textSecondary text-sm leading-relaxed mt-1">
                  {post.metadata.summary}
                </p>
              )}

              {post.metadata.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.metadata.tags.split(',').map((tag) => (
                    <span
                      key={tag.trim()}
                      className="text-xs bg-surface text-textSecondary px-2 py-0.5 rounded-md border border-border"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}

        {!isPage && (
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm text-text hover:text-green"
          >
            all posts <BiRightArrowAlt className="inline-block" />
          </Link>
        )}
      </div>
    </section>
  );
}
