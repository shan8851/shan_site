import Link from 'next/link';

import {
  activeProjects,
  currentFocusTracks,
  homeIntro,
  northStar,
  siteLastUpdated,
  workingStylePoints,
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
  const homeFocus = currentFocusTracks.slice(0, 3);
  const homeWork = activeProjects.filter((project) => project.track === 'core').slice(0, 4);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl font-semibold tracking-tight">engineer. builder. onchain.</p>
        <p className="max-w-2xl text-muted">{homeIntro}</p>
        <p className="max-w-2xl text-sm text-muted">Last updated: {siteLastUpdated}</p>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight">North star</h2>
        <p className="max-w-2xl text-muted">{northStar}</p>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight">How I work</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {workingStylePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Right now</h2>
          <Link href="/now" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            full now page
          </Link>
        </div>

        <ul className="space-y-4">
          {homeFocus.map((track) => (
            <li key={track.title} className="space-y-1 border-b border-border/60 pb-4">
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
      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Work</h2>
          <Link href="/projects" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            all work
          </Link>
        </div>

        <ul className="space-y-4">
          {homeWork.map((project) => (
            <li key={project.title} className="space-y-1 border-b border-border/60 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted">{project.summary}</p>
            </li>
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
