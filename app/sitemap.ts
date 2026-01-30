import { baseUrl } from './site';
import { getAllWritingPosts } from '../lib/writing';

export default async function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = await getAllWritingPosts();

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/uses`, lastModified },
    { url: `${baseUrl}/now`, lastModified },
    { url: `${baseUrl}/giles`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/writing`, lastModified },
    ...posts.map((post) => ({
      url: `${baseUrl}/writing/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
