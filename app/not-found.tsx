import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-2xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="text-muted">The route you requested does not exist.</p>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/" className="underline underline-offset-4">
          Home
        </Link>
        <Link href="/notes" className="underline underline-offset-4">
          notes
        </Link>
      </div>
    </section>
  );
}
