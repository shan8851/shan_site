import type { Metadata } from 'next';

import WritingIndexClient from './WritingIndexClient';
import { getAllWritingPosts } from '../../lib/writing';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing index.',
};

export default async function WritingPage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
      <WritingIndexClient posts={posts} />
    </div>
  );
}
