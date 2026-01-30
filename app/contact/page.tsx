import type { Metadata } from 'next';

import { EMAIL_URL, GITHUB_URL, TELEGRAM_URL, TWITTER_URL } from 'app/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach me.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-cyan">/contact</span>
          <span className="text-textTertiary">say hi, be normal</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="text-textSecondary leading-relaxed">
          I’m friendly. I’m also busy. If you send context up front, we’ll both
          live longer.
        </p>
      </header>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5">
        <h2 className="text-lg font-semibold">Best channels</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border/70 bg-background/30 p-4 hover:bg-background/40 transition-colors"
          >
            <div className="text-sm text-text">Telegram</div>
            <div className="mt-1 text-sm text-textSecondary">Fastest for a quick ping.</div>
          </a>
          <a
            href={EMAIL_URL}
            className="rounded-xl border border-border/70 bg-background/30 p-4 hover:bg-background/40 transition-colors"
          >
            <div className="text-sm text-text">Email</div>
            <div className="mt-1 text-sm text-textSecondary">Best for longer context.</div>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border/70 bg-background/30 p-4 hover:bg-background/40 transition-colors"
          >
            <div className="text-sm text-text">GitHub</div>
            <div className="mt-1 text-sm text-textSecondary">Open-source / issues / PRs.</div>
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border/70 bg-background/30 p-4 hover:bg-background/40 transition-colors"
          >
            <div className="text-sm text-text">X</div>
            <div className="mt-1 text-sm text-textSecondary">Occasional posting. Mostly lurking.</div>
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <h2 className="text-lg font-semibold">If you’re pitching something</h2>
        <ul className="mt-3 space-y-2 text-textSecondary">
          <li>• What problem are you solving?</li>
          <li>• What are you asking me for (specifically)?</li>
          <li>• Why is it urgent / why now?</li>
          <li>• Any links. Any numbers. Anything real.</li>
        </ul>
        <p className="mt-3 text-xs text-textTertiary">
          Bonus points for a 5-line message with a clear ask.
        </p>
      </section>
    </div>
  );
}
