import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google';

import type { Metadata } from 'next';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  title: 'shan8851.eth - Senior Full Stack Engineer',
  description: 'Senior Full Stack Engineer at Polygon. Building the bridge between blockchain potential and real-world adoption.',
  keywords: 'Web3, DeFi, Blockchain, Full Stack Engineer, Polygon, Cross-chain, Infrastructure',
  authors: [{ name: 'shan8851' }],
  icons: {
    icon: '/avatar.png',
  },
  openGraph: {
    title: 'shan8851.eth',
    description: 'Senior Full Stack Engineer at Polygon. Building the bridge between blockchain potential and real-world adoption.',
    url: baseUrl,
    siteName: 'shan8851.eth',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'shan8851.eth - Senior Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shan8851.eth',
    description: 'Senior Full Stack Engineer at Polygon. Building the bridge between blockchain potential and real-world adoption.',
    creator: '@shan8851',
    images: ['/og.jpg'],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-background text-text antialiased font-sans min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

