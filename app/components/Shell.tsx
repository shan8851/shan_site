import Link from 'next/link';
import type { ReactNode } from 'react';

import { ChatButton } from './ChatButton';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { href: '/now', label: '/now' },
  { href: '/projects', label: '/projects' },
  { href: '/log', label: '/log' },
  { href: '/uses', label: '/uses' },
  { href: '/notes', label: '/notes' },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl tracking-tight transition-colors hover:text-accent">
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
                  className="link-splash-nav"
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
        <div className="mx-auto max-w-3xl space-y-2 px-5 py-6 text-sm text-muted">
          <div>
            <a
              href="https://x.com/shan8851"
              target="_blank"
              rel="noreferrer"
              className="link-splash"
            >
              x
            </a>{' '}
            /{' '}
            <a
              href="https://github.com/shan8851"
              target="_blank"
              rel="noreferrer"
              className="link-splash"
            >
              github
            </a>{' '}
            /{' '}
            <a
              href="https://t.me/shan8851"
              target="_blank"
              rel="noreferrer"
              className="link-splash"
            >
              telegram
            </a>{' '}
            /{' '}
            <a href="mailto:asamshan456@gmail.com" className="link-splash">
              email
            </a>
          </div>
          <p className="text-xs text-muted">
            if you are a robot, check{' '}
            <Link href="/agents" className="link-splash underline underline-offset-4">
              /agents
            </Link>{' '}
            😉
          </p>
        </div>
      </footer>
    </div>
  );
}
