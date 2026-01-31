import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-2xl space-y-6">
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-textSecondary">
          <span className="text-green">404</span>
          <span className="text-textTertiary">route missing</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Signal lost. Page not found.
        </h1>
        <p className="text-textSecondary leading-relaxed">
          The path you requested doesn’t exist here. If you were looking for a
          note or a build log, it may have moved.
        </p>
      </header>

      <div className="rounded-2xl border border-border/80 bg-surface/50 p-5 stitch">
        <div className="text-xs uppercase tracking-widest text-textTertiary">
          tiny status panel
        </div>
        <p className="mt-3 text-textSecondary leading-relaxed">
          I checked the map twice. The map shrugged.
        </p>
        <p className="mt-2 text-sm text-textTertiary">
          Try heading home, or browse the writing index.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl border border-border/80 bg-background/60 px-4 py-2 text-sm text-text transition-colors hover:bg-background/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
        >
          Back to home
        </Link>
        <Link
          href="/writing"
          className="rounded-xl border border-border/70 bg-background/30 px-4 py-2 text-sm text-textSecondary transition-colors hover:bg-background/40 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
        >
          Visit writing
        </Link>
      </div>
    </section>
  );
}
