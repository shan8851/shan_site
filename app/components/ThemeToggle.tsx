'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'oled';

const THEME_MODES: ThemeMode[] = ['light', 'dark', 'oled'];

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'oled';

const applyThemeMode = (themeMode: ThemeMode) => {
  if (themeMode === 'light') {
    document.documentElement.removeAttribute('data-theme');
    return;
  }

  document.documentElement.setAttribute('data-theme', themeMode);
};

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedThemeMode = window.localStorage.getItem('theme-mode');
  return isThemeMode(storedThemeMode) ? storedThemeMode : 'light';
};

export const ThemeToggle = () => {
  const [activeThemeMode, setActiveThemeMode] = useState<ThemeMode>(getInitialThemeMode);

  useEffect(() => {
    applyThemeMode(activeThemeMode);
    window.localStorage.setItem('theme-mode', activeThemeMode);
  }, [activeThemeMode]);

  const updateThemeMode = (themeMode: ThemeMode) => setActiveThemeMode(themeMode);

  return (
    <div className="inline-flex rounded-md border border-border p-0.5">
      {THEME_MODES.map((themeMode) => {
        const isActive = activeThemeMode === themeMode;

        return (
          <button
            key={themeMode}
            type="button"
            onClick={() => updateThemeMode(themeMode)}
            className={
              'rounded px-2 py-1 text-xs uppercase tracking-wide transition-colors ' +
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
