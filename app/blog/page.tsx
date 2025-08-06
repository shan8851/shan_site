import { BlogPosts } from 'app/components/posts'
import { createMetadata } from 'app/lib/metadata'

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Thoughts on Web3, DeFi, engineering, and building products that matter.',
  path: '/blog',
  keywords: ['Blog', 'Articles', 'Writing', 'Web3 Blog', 'DeFi Blog'],
})

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-green">My Blog</h1>
      <BlogPosts isPage />
    </section>
  );
}
