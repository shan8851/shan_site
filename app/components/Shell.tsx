import Link from 'next/link';
import type { ReactNode } from 'react';

import { ThemeToggle } from './ThemeToggle';

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Shan
            </Link>
            <nav className="flex items-center gap-4 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-text">
                Home
              </Link>
              <Link href="/writing" className="transition-colors hover:text-text">
                Writing
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-14 md:py-16">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-6 text-sm text-muted">
          <a
            href="https://x.com/shan8851"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text"
          >
            x
          </a>{' '}
          /{' '}
          <a
            href="https://github.com/shan8851"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text"
          >
            github
          </a>{' '}
          /{' '}
          <a
            href="https://t.me/shan8851"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text"
          >
            telegram
          </a>{' '}
          /{' '}
          <a
            href="mailto:shan8851@proton.me"
            className="transition-colors hover:text-text"
          >
            email
          </a>
        </div>
      </footer>
    </div>
  );
}
