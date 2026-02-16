'use client';

import { useEffect, useState } from 'react';

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const getReadingProgress = (): number => {
  const rootElement = document.documentElement;
  const scrollableHeight = rootElement.scrollHeight - rootElement.clientHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  return clamp(rootElement.scrollTop / scrollableHeight, 0, 1);
};

export const ReadingProgressRail = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotionPreference = () => {
      setPrefersReducedMotion(mediaQueryList.matches);
    };

    updateReducedMotionPreference();

    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', updateReducedMotionPreference);
      return () => mediaQueryList.removeEventListener('change', updateReducedMotionPreference);
    }

    mediaQueryList.addListener(updateReducedMotionPreference);
    return () => mediaQueryList.removeListener(updateReducedMotionPreference);
  }, []);

  useEffect(() => {
    let frameId: number | null = null;

    const commitReadingProgress = () => {
      frameId = null;
      setReadingProgress(getReadingProgress());
    };

    const queueReadingProgressUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(commitReadingProgress);
    };

    queueReadingProgressUpdate();

    window.addEventListener('scroll', queueReadingProgressUpdate, { passive: true });
    window.addEventListener('resize', queueReadingProgressUpdate);

    return () => {
      window.removeEventListener('scroll', queueReadingProgressUpdate);
      window.removeEventListener('resize', queueReadingProgressUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-0.5 bg-border/40 sm:h-px"
    >
      <div
        className="h-full origin-left bg-text/45 will-change-transform"
        style={{
          transform: `scaleX(${readingProgress})`,
          transition: prefersReducedMotion ? undefined : 'transform 140ms linear',
        }}
      />
    </div>
  );
};
