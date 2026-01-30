'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from './nav';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:w-72 lg:w-80 md:shrink-0">
      <div className="sticky top-0 h-dvh p-5">
        <div className="h-full rounded-2xl border border-border/80 bg-surface/60 backdrop-blur supports-[backdrop-filter]:bg-surface/40 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
          <div className="p-5">
            <div className="flex items-start gap-3">
              <Image
                src="/avatar.png"
                alt="Shan"
                width={56}
                height={56}
                className="rounded-xl border border-border/80"
                priority
              />
              <div className="min-w-0">
                <div className="text-sm text-textSecondary">shan8851.eth</div>
                <div className="text-lg font-semibold text-text leading-tight">
                  Shan
                </div>
                <div className="text-xs text-textTertiary mt-1">
                  shan. engineer. builder.
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border/70 bg-background/40 p-3">
              <div className="text-xs text-textTertiary">currently</div>
              <div className="mt-1 text-sm text-text">
                All money on-chain. Tinkering.
              </div>
            </div>

            <nav className="mt-5">
              <div className="text-xs uppercase tracking-widest text-textTertiary mb-2">
                navigation
              </div>
              <ul className="space-y-1">
                {NAV_ITEMS.map(({ href, label, Icon, description }) => {
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={
                          'group flex items-center gap-3 rounded-xl px-3 py-2 border transition-colors ' +
                          (active
                            ? 'bg-background/60 border-border text-text'
                            : 'border-transparent hover:border-border/80 hover:bg-background/40 text-textSecondary')
                        }
                      >
                        <Icon
                          className={
                            'h-4 w-4 transition-colors ' +
                            (active
                              ? 'text-green'
                              : 'text-textTertiary group-hover:text-cyan')
                          }
                        />
                        <div className="min-w-0">
                          <div className="text-sm leading-tight">{label}</div>
                          {description ? (
                            <div className="text-[11px] text-textTertiary leading-tight">
                              {description}
                            </div>
                          ) : null}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-auto border-t border-border/70 p-5">
            <div className="text-xs text-textTertiary">
              Built like a tool, not a brochure.
            </div>
            <div className="text-[11px] text-textTertiary mt-2">
              Robot-friendly export:{' '}
              <Link
                href="/agents.json"
                className="underline decoration-border/60 hover:text-text"
              >
                /agents.json
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
