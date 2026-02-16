import { baseUrl } from './site';
import { getAllWritingPosts } from '../lib/writing';

export default async function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = await getAllWritingPosts();

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/now`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    { url: `${baseUrl}/notes`, lastModified },
    ...posts.map((post) => ({
      url: `${baseUrl}/notes/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
