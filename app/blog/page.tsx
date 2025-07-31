import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-green">My Blog</h1>
      <BlogPosts isPage />
    </section>
  );
}
