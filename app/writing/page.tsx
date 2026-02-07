import type { Metadata } from 'next';

import WritingIndexClient from './WritingIndexClient';
import { getAllWritingPosts } from '../../lib/writing';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Notes index.',
};

export default async function WritingPage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Notes</h1>
      <WritingIndexClient posts={posts} />
    </div>
  );
}
