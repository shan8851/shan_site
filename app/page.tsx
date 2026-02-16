import Link from 'next/link';

import {
  activeProjects,
  currentFocusTracks,
  operatingPrinciples,
  operatorIntro,
  operatorLastUpdated,
} from './content/operatorFrontDoor';
import { formatIsoDateForDisplay } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

const statusClassByTrackStatus = {
  active: 'text-amber-600 dark:text-amber-300',
  shipping: 'text-emerald-700 dark:text-emerald-300',
  tightening: 'text-sky-700 dark:text-sky-300',
} as const;

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const featuredPosts = writingPosts.filter((post) => post.featured).slice(0, 3);
  const latestNonFeaturedPosts = writingPosts.filter((post) => !post.featured).slice(0, 1);
  const homeNotes = [...featuredPosts, ...latestNonFeaturedPosts].slice(0, 4);
  const frontDoorTracks = currentFocusTracks.slice(0, 3);
  const frontDoorProjects = activeProjects.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl font-semibold tracking-tight">engineer. builder. operator.</p>
        <p className="max-w-2xl text-muted">{operatorIntro}</p>
        <p className="max-w-2xl rounded-sm border border-border bg-surface/60 px-2 py-1 text-sm text-muted">
          Start with{' '}
          <Link href="/now" className="font-semibold text-text underline decoration-border underline-offset-4">
            now
          </Link>{' '}
          for current focus, or jump to{' '}
          <Link
            href="/operator"
            className="font-semibold text-text underline decoration-border underline-offset-4"
          >
            operator
          </Link>{' '}
          for defaults and guardrails.
        </p>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Current lanes</h2>
          <p className="text-xs text-muted">updated {operatorLastUpdated}</p>
        </div>

        <ul className="space-y-4">
          {frontDoorTracks.map((track) => (
            <li key={track.title} className="space-y-1 rounded-sm border border-border bg-surface/40 px-3 py-3">
              <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
                <span className={statusClassByTrackStatus[track.status]}>{track.status}</span>
                <span>·</span>
                <span>{track.title}</span>
              </p>
              <p className="text-sm text-muted">{track.objective}</p>
              <p className="text-sm">
                <span className="text-muted">next:</span> {track.nextMove}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted">
          Full working view on{' '}
          <Link href="/now" className="underline underline-offset-4 hover:text-text">
            /now
          </Link>
          .
        </p>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Builds in motion</h2>
          <Link href="/projects" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            all projects
          </Link>
        </div>

        <ul className="space-y-4">
          {frontDoorProjects.map((project) => (
            <li key={project.title} className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted">{project.summary}</p>
              <p className="text-sm">
                <span className="text-muted">next:</span> {project.nextMove}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Operating defaults</h2>
          <Link href="/operator" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            full model
          </Link>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-muted">
          {operatingPrinciples.slice(0, 3).map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Notes</h2>
          <Link href="/notes" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            all
          </Link>
        </div>

        {homeNotes.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {homeNotes.map((post) => (
              <li key={post.slug}>
                <Link href={`/notes/${post.slug}`} className="group block space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold tracking-tight transition-colors group-hover:underline">
                      {post.title}
                    </h3>
                    {post.featured ? (
                      <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                        featured
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted">
                    {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
                    {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
                  </p>
                  <p className="text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
