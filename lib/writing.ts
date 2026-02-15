import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cache } from 'react';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { getIsoDateSortValue } from './noteDates';
import { resolveWritingAuthor } from './writingAuthors';

import type { WritingAuthor } from './writingAuthors';

type RecordValue = Record<string, unknown>;

const isRecord = (value: unknown): value is RecordValue =>
  typeof value === 'object' && value !== null;

function rehypeExternalLinksTargetBlank() {
  return function transformer(tree: unknown) {
    const visit = (node: unknown) => {
      if (!isRecord(node)) return;

      if (node.type === 'element' && node.tagName === 'a') {
        const properties = isRecord(node.properties) ? node.properties : {};
        const href = String(properties.href ?? '');

        // Shan preference: open (almost) everything in a new tab.
        // Keep purely in-page anchors as-is (e.g. "#section").
        const isAnchorOnly = href.startsWith('#');

        if (!isAnchorOnly) {
          const nextProperties: RecordValue = {
            ...properties,
            target: '_blank',
          };

          // Prevent reverse-tabnabbing; also nice for privacy/perf.
          const existingRel = String(properties.rel ?? '').trim();
          const relParts = new Set(
            existingRel
              .split(/\s+/)
              .map((s) => s.trim())
              .filter(Boolean)
          );
          relParts.add('noopener');
          relParts.add('noreferrer');
          nextProperties.rel = Array.from(relParts).join(' ');
          node.properties = nextProperties;
        }
      }

      if (Array.isArray(node.children)) node.children.forEach(visit);
    };

    visit(tree);
  };
}

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing');

export type WritingFrontmatter = {
  title: string;
  date: string; // ISO yyyy-mm-dd recommended
  tags: string[];
  summary: string;
  author: WritingAuthor;
  featured: boolean;
  updated: string | null;
};

export type WritingPostListItem = WritingFrontmatter & {
  slug: string;
  readingTimeText: string;
  readingTimeMinutes: number;
};

export type WritingHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type WritingPost = WritingPostListItem & {
  contentHtml: string;
  headings: WritingHeading[];
};

function fileSlug(filename: string) {
  return filename.replace(/\.mdx?$/, '');
}

function normalizeTags(tags: unknown): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(String).map((t) => t.trim()).filter(Boolean);
  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
}

const HEADING_PATTERN = /<h([2-3])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;

const decodeHtmlEntities = (value: string): string => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

const stripHtmlTags = (value: string): string => value
  .replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const extractPostHeadings = (contentHtml: string): WritingHeading[] => Array
  .from(contentHtml.matchAll(HEADING_PATTERN))
  .map((match) => {
    const [, levelString, id, headingHtml] = match;
    const level = Number(levelString) as 2 | 3;
    const text = decodeHtmlEntities(stripHtmlTags(String(headingHtml)));

    return {
      id,
      text,
      level,
    } satisfies WritingHeading;
  })
  .filter((heading) => heading.text.length > 0);

function assertFrontmatter(data: unknown, slug: string): WritingFrontmatter {
  const metadata = isRecord(data) ? data : {};
  const title = String(metadata.title ?? '').trim();
  const date = String(metadata.date ?? '').trim();
  const summary = String(metadata.summary ?? metadata.description ?? '').trim();
  const tags = normalizeTags(metadata.tags);
  const author = resolveWritingAuthor(metadata.author);
  const featured = Boolean(metadata.featured);
  const updatedRaw = String(metadata.updated ?? '').trim();
  const updated = updatedRaw.length > 0 ? updatedRaw : null;

  if (!title) throw new Error(`Missing frontmatter 'title' in ${slug}.md`);
  if (!date) throw new Error(`Missing frontmatter 'date' in ${slug}.md`);
  if (!summary) throw new Error(`Missing frontmatter 'summary' in ${slug}.md`);

  return { title, date, tags, summary, author, featured, updated };
}

async function readPostFile(slug: string) {
  const filePath = path.join(WRITING_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  return { ...parsed, raw };
}

export const getAllWritingPosts = cache(
  async (): Promise<WritingPostListItem[]> => {
    try {
      const files = await fs.readdir(WRITING_DIR);
      const mdFiles = files.filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
      const posts = await Promise.all(
        mdFiles.map(async (filename) => {
          const slug = fileSlug(filename);
          const { content, data } = await readPostFile(slug);
          const fm = assertFrontmatter(data, slug);
          const rt = readingTime(content);

          return {
            slug,
            ...fm,
            readingTimeText: rt.text,
            readingTimeMinutes: rt.minutes,
          } satisfies WritingPostListItem;
        })
      );

      return posts.sort((a, b) => getIsoDateSortValue(b.date) - getIsoDateSortValue(a.date));
    } catch {
      return [];
    }
  }
);

export const getWritingPost = cache(async (slug: string): Promise<WritingPost> => {
  const { content, data } = await readPostFile(slug);
  const fm = assertFrontmatter(data, slug);
  const rt = readingTime(content);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['no-underline'],
      },
    })
    .use(rehypeExternalLinksTargetBlank)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = String(processed);
  const headings = extractPostHeadings(contentHtml);

  return {
    slug,
    ...fm,
    readingTimeText: rt.text,
    readingTimeMinutes: rt.minutes,
    contentHtml,
    headings,
  };
});
