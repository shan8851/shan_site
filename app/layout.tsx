import './global.css';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Shell } from './components/Shell';
export const metadata: Metadata = {
  metadataBase: new URL('https://shan8851.com'),
  title: {
    default: 'shan8851.eth',
    template: '%s · shan8851.eth',
  },
  description:
    'Senior full‑stack engineer shipping payments and infrastructure. Minimal vibes, maximal output.',
  keywords:
    'Shan, shan8851, full stack, payments, infrastructure, web3, polygon, stablecoins, engineering',
  authors: [{ name: 'shan8851' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'shan8851.eth',
    description:
      'Senior full‑stack engineer shipping payments and infrastructure. Minimal vibes, maximal output.',
    url: 'https://shan8851.com',
    siteName: 'shan8851.eth',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'shan8851.eth — Senior Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shan8851.eth',
    description:
      'Senior full‑stack engineer shipping payments and infrastructure. Minimal vibes, maximal output.',
    creator: '@shan8851',
    images: ['/twitter-image'],
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">
        <Shell>{children}</Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
