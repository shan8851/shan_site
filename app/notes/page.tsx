import type { Metadata } from 'next';
import { Suspense } from 'react';

import WritingIndexClient from './WritingIndexClient';
import { getAllWritingPosts } from '../../lib/writing';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Notes index.',
};

export default async function WritingPage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="max-w-3xl space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Notes</h1>
        <p className="max-w-2xl text-soft">
          Thoughts and musings on anything and everything, mostly around crypto, AI, and engineering.
          Short, direct notes intended to be useful signal — not long essays.
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-muted">Loading notes…</p>}>
        <WritingIndexClient posts={posts} />
      </Suspense>
    </div>
  );
}
