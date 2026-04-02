import { getAllWritingPosts } from '../lib/writing';

import { siteLastUpdated } from './content/siteMeta';
import { baseUrl } from './site';

export default async function sitemap() {
  const lastModified = siteLastUpdated;

  const posts = await getAllWritingPosts();

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/now`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    { url: `${baseUrl}/log`, lastModified },
    { url: `${baseUrl}/uses`, lastModified },
    { url: `${baseUrl}/chat`, lastModified },
    { url: `${baseUrl}/agents`, lastModified },
    { url: `${baseUrl}/notes`, lastModified },
    ...posts.map((post) => ({
      url: `${baseUrl}/notes/${post.slug}`,
      lastModified: post.updated ?? post.date,
    })),
  ];
}
