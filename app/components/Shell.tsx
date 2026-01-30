import type { ReactNode } from 'react';

import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden">
      <div className="site-bg" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1 py-8 md:py-10 pb-28 md:pb-10">
            {children}
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
