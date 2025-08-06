import { Metadata } from 'next';
import { baseUrl } from 'app/sitemap';

interface MetadataConfig {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

const defaultMetadata = {
  title: 'Shan8851',
  description: 'Full Stack Web3 Engineer | DeFi Builder | Product-Focused',
  author: 'shan8851',
  image: '/og.png',
  type: 'website' as const,
};

export function createMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
}: MetadataConfig = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${defaultMetadata.title}`
    : defaultMetadata.title;
  
  const fullDescription = description ?? defaultMetadata.description;
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}${defaultMetadata.image}`;
  const fullAuthor = author ?? defaultMetadata.author;

  return {
    title: fullTitle,
    description: fullDescription,
    authors: [{ name: fullAuthor }],
    keywords: [
      'Web3',
      'DeFi',
      'Blockchain',
      'Ethereum',
      'Full Stack',
      'Engineer',
      'Developer',
      'Crypto',
      'Smart Contracts',
      ...keywords,
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      types: {
        'application/rss+xml': `${baseUrl}/rss`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: defaultMetadata.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: type as any,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && {
        authors: [fullAuthor],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: '@shan8851',
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/avatar.png',
      shortcut: '/avatar.png',
      apple: '/avatar.png',
    },
  };
}

export function createBlogMetadata(
  post: {
    title: string;
    summary?: string;
    publishedAt: string;
    image?: string;
    tags?: string;
  },
  slug: string
): Metadata {
  const ogImage = post.image
    ? post.image
    : `${baseUrl}/og?title=${encodeURIComponent(post.title)}`;

  const keywords = post.tags 
    ? post.tags.split(',').map(tag => tag.trim())
    : [];

  return createMetadata({
    title: post.title,
    description: post.summary ?? `Read "${post.title}" on Shan8851's blog`,
    path: `/blog/${slug}`,
    image: ogImage,
    type: 'article',
    publishedTime: post.publishedAt,
    keywords,
  });
}