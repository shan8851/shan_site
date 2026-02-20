import Link from 'next/link';

import {
  activeProjects,
  homeIntro,
  northStar,
  rightNowItems,
  rightNowNarrative,
  siteLastUpdated,
  workingStylePoints,
} from './content/operatorFrontDoor';
import { formatIsoDateForDisplay } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

const getProjectLinkLabel = (href: string) =>
  href.includes('github.com')
    ? 'view repo'
    : href.includes('agglayer.dev') || href.includes('roastmyphoto.app') || href.includes('excuse-me.xyz')
      ? 'view live'
      : 'view project';

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const homeNotes = writingPosts.slice(0, 5);
  const homeWork = activeProjects.filter((project) => project.track === 'core').slice(0, 5);

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
        <p className="max-w-3xl text-soft">{rightNowNarrative}</p>

        <ul className="grid gap-3 md:grid-cols-2">
          {rightNowItems.map((item) => (
            <li key={item.title} className="space-y-2 rounded border border-border/70 bg-surface/40 p-3">
              <h3 className="font-semibold tracking-tight">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 transition-colors hover:text-text hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm text-soft">{item.summary}</p>
              <p className="text-sm text-muted">Next: {item.nextMove}</p>
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
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold tracking-tight underline-offset-4 transition-colors hover:text-text hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-semibold tracking-tight">{project.title}</h3>
                )}
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-soft">{project.summary}</p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm underline underline-offset-4 transition-colors hover:text-text"
                >
                  {getProjectLinkLabel(project.href)}
                </a>
              ) : null}
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
                  <h3 className="font-semibold tracking-tight transition-colors group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {formatIsoDateForDisplay(post.date)} · {post.readingTimeText}
                    {post.updated ? ` · updated ${formatIsoDateForDisplay(post.updated)}` : ''}
                  </p>
                  <p className="text-soft">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
