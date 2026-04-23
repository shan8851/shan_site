import type { Metadata } from 'next';
import Link from 'next/link';

import { LogFeed } from '../components/logFeed';
import { logEntries, logLastUpdated, sortLogEntriesDescending } from '../content/proofLog';

export const metadata: Metadata = {
  title: 'Log',
  description: 'Shareable work, project, writing, and ops updates in a simple running log.',
};

const pageSize = 20;

const parsePage = (rawPage: string | undefined, totalPages: number): number => {
  const parsed = Number.parseInt(rawPage ?? '1', 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return 1;
  }

  return Math.min(parsed, totalPages);
};

const pageHref = (page: number): string => (page <= 1 ? '/log' : `/log?page=${page}`);

export default async function LogPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;

  const sortedEntries = sortLogEntriesDescending(logEntries);
  const totalPages = Math.max(1, Math.ceil(sortedEntries.length / pageSize));
  const currentPage = parsePage(searchParams.page, totalPages);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedEntries = sortedEntries.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl tracking-tight">Log</h1>
        <p className="max-w-2xl text-soft">Shareable updates only. Format: date, short text.</p>
        <p className="text-xs text-muted">last updated: {logLastUpdated}</p>
      </header>

      <section className="section-divider space-y-4 pt-8">
        <LogFeed entries={paginatedEntries} variant="full" />

        <div className="flex items-center justify-between pt-2 text-sm">
          {currentPage < totalPages ? (
            <Link href={pageHref(currentPage + 1)} className="link-splash text-muted underline underline-offset-4">
              older entries
            </Link>
          ) : (
            <span />
          )}

          {currentPage > 1 ? (
            <Link href={pageHref(currentPage - 1)} className="link-splash text-muted underline underline-offset-4">
              newer entries
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
