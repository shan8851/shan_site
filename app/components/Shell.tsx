import Link from 'next/link';
import type { ReactNode } from 'react';

import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { href: '/now', label: 'now' },
  { href: '/projects', label: 'projects' },
  { href: '/operator', label: 'operator' },
  { href: '/notes', label: 'notes' },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Shan
            </Link>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              {navigationItems.map((navigationItem) => (
                <Link
                  key={navigationItem.href}
                  href={navigationItem.href}
                  className="transition-colors hover:text-text"
                >
                  {navigationItem.label}
                </Link>
              ))}
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 md:py-16">{children}</main>

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
          <a href="mailto:shan8851@proton.me" className="transition-colors hover:text-text">
            email
          </a>
        </div>
      </footer>
    </div>
  );
}
