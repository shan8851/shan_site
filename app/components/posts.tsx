import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/writing/utils'
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

      <div className="flex flex-col gap-4">
        {sortedAndLimitedPosts.map((post, index) => {
          const date = formatDate(post.metadata.publishedAt);
          return (
            <Link
              href={`/writing/${post.slug}`}
              key={post.slug}
              className="group block"
            >
              <article className="p-5 rounded-lg border border-border bg-surface/50 hover:bg-surface hover:border-textSecondary/30 transition-all duration-200">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="text-lg font-medium text-text group-hover:text-purple transition-colors">
                    {post.metadata.title}
                  </h4>
                  <span className="px-3 py-1 rounded-full bg-background/60 border border-border">
                    <p className="text-sm text-textSecondary whitespace-nowrap">
                      {date}
                    </p>
                  </span>
                </div>

                {post.metadata.summary && (
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {post.metadata.summary}
                  </p>
                )}

                {post.metadata.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.metadata.tags.split(',').map((tag) => (
                      <span
                        key={tag.trim()}
                        className="text-xs bg-background/60 text-textSecondary px-2 py-0.5 rounded-md border border-border"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          );
        })}

        {!isPage && (
          <Link
            href="/writing"
            className="flex items-center gap-1 text-sm text-text hover:text-green"
          >
            all posts <BiRightArrowAlt className="inline-block" />
          </Link>
        )}
      </div>
    </section>
  );
}
