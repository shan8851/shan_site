'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from './nav';

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-screen-sm">
        <nav className="m-3 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur supports-[backdrop-filter]:bg-surface/50 shadow-lg">
          <ul className="grid grid-cols-6">
            {NAV_ITEMS.map(({ href, Icon, shortLabel }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      'flex flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] transition-colors ' +
                      (active
                        ? 'text-text'
                        : 'text-textTertiary hover:text-textSecondary')
                    }
                  >
                    <Icon
                      className={
                        'h-4 w-4 ' +
                        (active ? 'text-green' : 'text-textTertiary')
                      }
                    />
                    <span className="leading-none">{shortLabel ?? ''}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
