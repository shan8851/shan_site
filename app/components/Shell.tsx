import Link from 'next/link';
import type { ReactNode } from 'react';

import { ChatButton } from './ChatButton';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { href: '/now', label: '/now' },
  { href: '/projects', label: '/projects' },
  { href: '/labs', label: '/labs' },
  { href: '/log', label: '/log' },
  { href: '/uses', label: '/uses' },
  { href: '/chat', label: '/chat' },
  { href: '/notes', label: '/notes' },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <span aria-hidden className="inline-flex h-5 w-5 text-text/90">
                <svg viewBox="0 0 512 512" className="h-full w-full fill-current" focusable="false">
                  <path d="M105 145L295 238C304 243 304 257 295 262L105 355V290L210 250L105 210V145Z" />
                  <rect x="315" y="223" width="140" height="54" rx="12" />
                </svg>
              </span>
              <span>Shan</span>
            </Link>
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted sm:gap-x-4">
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
      <ChatButton />

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
          <a href="mailto:asamshan456@gmail.com" className="transition-colors hover:text-text">
            email
          </a>
        </div>
      </footer>
    </div>
  );
}
