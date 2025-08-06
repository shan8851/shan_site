import { BlogPosts } from 'app/components/posts'
import { createMetadata } from 'app/lib/metadata'
import { ScrollToTop } from 'app/components/scroll-to-top'
import { getBlogPosts } from 'app/blog/utils'
import { BiBookOpen, BiTime } from 'react-icons/bi'

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Thoughts on Web3, DeFi, engineering, and building products that matter.',
  path: '/blog',
  keywords: ['Blog', 'Articles', 'Writing', 'Web3 Blog', 'DeFi Blog'],
})

export default function Page() {
  const posts = getBlogPosts();
  const totalPosts = posts.length;
  const avgReadTime = Math.ceil(
    posts.reduce((acc, post) => {
      const wordCount = post.content.split(' ').length;
      return acc + wordCount / 200; // Average reading speed
    }, 0) / posts.length
  );

  return (
    <>
      <section className="flex flex-col gap-8 mt-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green">Writing</h1>
          
          <div className="p-6 rounded-lg border border-border bg-surface/30 space-y-4">
            <p className="text-lg text-text/90 leading-relaxed">
              A collection of thoughts on Web3, DeFi, engineering, and building products 
              that matter. I write about my experiences in the crypto space, technical 
              challenges, and lessons learned along the way.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <BiBookOpen className="text-green" />
                <span className="text-textSecondary">{totalPosts} posts</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <BiTime className="text-purple" />
                <span className="text-textSecondary">~{avgReadTime} min avg read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                Web3
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                DeFi
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                Engineering
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                Startups
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                Learning
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple">All Posts</h2>
          <BlogPosts isPage />
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
