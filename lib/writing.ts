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

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing');

export type WritingFrontmatter = {
  title: string;
  date: string; // ISO yyyy-mm-dd recommended
  tags: string[];
  summary: string;
};

export type WritingPostListItem = WritingFrontmatter & {
  slug: string;
  readingTimeText: string;
  readingTimeMinutes: number;
};

export type WritingPost = WritingPostListItem & {
  contentHtml: string;
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

function assertFrontmatter(data: any, slug: string): WritingFrontmatter {
  const title = String(data?.title ?? '').trim();
  const date = String(data?.date ?? '').trim();
  const summary = String(data?.summary ?? data?.description ?? '').trim();
  const tags = normalizeTags(data?.tags);

  if (!title) throw new Error(`Missing frontmatter 'title' in ${slug}.md`);
  if (!date) throw new Error(`Missing frontmatter 'date' in ${slug}.md`);
  if (!summary) throw new Error(`Missing frontmatter 'summary' in ${slug}.md`);

  return { title, date, tags, summary };
}

async function readPostFile(slug: string) {
  const filePath = path.join(WRITING_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  return { ...parsed, raw };
}

export const getAllWritingPosts = cache(async (): Promise<WritingPostListItem[]> => {
  let files: string[];
  try {
    files = await fs.readdir(WRITING_DIR);
  } catch {
    return [];
  }

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

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

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
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    ...fm,
    readingTimeText: rt.text,
    readingTimeMinutes: rt.minutes,
    contentHtml: String(processed),
  };
});
