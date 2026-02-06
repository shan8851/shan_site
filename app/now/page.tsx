import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I am focused on right now.',
};

const nowItems = [
  'Leading work on payment rails and operational reliability.',
  'Testing repeatable agent workflows for planning, review, and status loops.',
  'Improving personal tooling so routine tasks are mostly automated.',
  'Studying applied AI patterns that hold up in real production teams.',
  'Training football and strength as the non-negotiable baseline.',
];

export default function NowPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Now</h1>
      <ul className="space-y-3 text-muted">
        {nowItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-sm text-muted">Updated February 2026.</p>
    </div>
  );
}
