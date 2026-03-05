import Link from 'next/link';

import {
  activeProjects,
  homeIntro,
  northStarLead,
  northStarOutsideWork,
  northStarWork,
  rightNowNarrative,
  rightNowSnapshot,
  siteLastUpdated,
  workingStylePoints,
} from './content/operatorFrontDoor';
import { proofEntries } from './content/proofLog';
import { formatIsoDateForDisplay, getIsoDateSortValue } from '../lib/noteDates';
import { getAllWritingPosts } from '../lib/writing';

const getProjectLinkLabel = (href: string) =>
  href.includes('github.com')
    ? 'view repo'
    : href.includes('agglayer.dev') || href.includes('roastmyphoto.app') || href.includes('excuse-me.xyz')
      ? 'view live'
      : 'view project';

export default async function HomePage() {
  const writingPosts = await getAllWritingPosts();
  const homeNotes = writingPosts.slice(0, 3);
  const homeProjectTitleOrder = ['RoastMaster', 'Agglayer UI', 'Agglayer SDK'];
  const homeProjects = homeProjectTitleOrder
    .map((title) => activeProjects.find((project) => project.title === title))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const latestProofEntries = [...proofEntries]
    .sort((entryA, entryB) => getIsoDateSortValue(entryB.date) - getIsoDateSortValue(entryA.date))
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shan</h1>
        <p className="text-2xl font-semibold tracking-tight">engineer. builder. systems+ai.</p>
        <p className="max-w-2xl text-muted">{homeIntro}</p>
        <p className="max-w-2xl text-sm text-muted">Last updated: {siteLastUpdated}</p>
      </section>

      <section className="space-y-3 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight">North star</h2>
        <p className="max-w-2xl text-muted">{northStarLead}</p>
        <p className="max-w-2xl text-muted">
          <span className="font-semibold text-text">At work:</span> {northStarWork}
        </p>
        <p className="max-w-2xl text-muted">
          <span className="font-semibold text-text">Outside work:</span> {northStarOutsideWork}
        </p>
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

        <ul className="list-disc space-y-2 pl-5 text-soft">
          {rightNowSnapshot.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </section>

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Projects</h2>
          <Link href="/projects" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            all projects
          </Link>
        </div>

        <ul className="space-y-4">
          {homeProjects.map((project) => (
            <li key={project.title} className="space-y-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
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

      <section className="space-y-5 border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">Latest workflow log</h2>
          <Link href="/log" className="text-sm text-muted transition-colors hover:text-text hover:underline">
            full log
          </Link>
        </div>

        <ul className="space-y-2">
          {latestProofEntries.map((entry) => (
            <li key={entry.id} className="text-sm text-soft">
              <span className="text-muted">{formatIsoDateForDisplay(entry.date)} — </span>
              {entry.summary}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
