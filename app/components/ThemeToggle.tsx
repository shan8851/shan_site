'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

const THEME_MODES: ThemeMode[] = ['light', 'dark'];

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark';

const applyThemeMode = (themeMode: ThemeMode) => {
  if (themeMode === 'light') {
    document.documentElement.removeAttribute('data-theme');
    return;
  }

  document.documentElement.setAttribute('data-theme', themeMode);
};

export const ThemeToggle = () => {
  // Start with 'light' on both server and client to avoid hydration mismatch
  const [activeThemeMode, setActiveThemeMode] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Read from localStorage only after mount (client-side only)
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    // We intentionally hydrate theme preference from localStorage after mount
    // to avoid SSR/client mismatch.
    const storedThemeMode = window.localStorage.getItem('theme-mode');

    // Migrate legacy 'oled' to 'dark'
    if (storedThemeMode === 'oled') {
      setActiveThemeMode('dark');
    } else if (isThemeMode(storedThemeMode)) {
      setActiveThemeMode(storedThemeMode);
    }

    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyThemeMode(activeThemeMode);
    window.localStorage.setItem('theme-mode', activeThemeMode);
  }, [activeThemeMode, mounted]);

  const updateThemeMode = (themeMode: ThemeMode) => setActiveThemeMode(themeMode);

  return (
    <div className="inline-flex w-fit self-start rounded-md border border-border p-0.5">
      {THEME_MODES.map((themeMode) => {
        const isActive = activeThemeMode === themeMode;

        return (
          <button
            key={themeMode}
            type="button"
            onClick={() => updateThemeMode(themeMode)}
            className={
              'rounded px-2 py-1 text-xs tracking-wide transition-colors ' +
              (isActive
                ? 'bg-text text-background'
                : 'text-muted hover:text-text')
            }
          >
            {themeMode}
          </button>
        );
      })}
    </div>
  );
};
