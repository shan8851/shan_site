import './global.css';

import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Shell } from './components/Shell';
export const metadata: Metadata = {
  metadataBase: new URL('https://shan8851.com'),
  title: 'Shan',
  description: 'payments, onchain systems, and practical AI agent builds.',
  keywords:
    'Shan, shan8851, payments, bridging, staking, ai agents, web3, polygon, engineering',
  authors: [{ name: 'shan8851' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Shan',
    description: 'payments, onchain systems, and practical AI agent builds.',
    url: 'https://shan8851.com',
    siteName: 'Shan',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Shan — payments, onchain systems, and practical AI agent builds.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shan',
    description: 'payments, onchain systems, and practical AI agent builds.',
    creator: '@shan8851',
    images: [
      {
        url: '/twitter-image',
        alt: 'Shan — payments, onchain systems, and practical AI agent builds.',
      },
    ],
  },
};

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmMono.variable} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <Script id="theme-mode-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const themeMode = window.localStorage.getItem('theme-mode');
              if (themeMode === 'dark' || themeMode === 'oled') {
                document.documentElement.setAttribute('data-theme', 'dark');
                return;
              }
              // warm is default; also migrate legacy light -> warm by clearing the theme attr.
              document.documentElement.removeAttribute('data-theme');
              if (themeMode === 'light') {
                window.localStorage.setItem('theme-mode', 'warm');
              }
            } catch {}
          })();`}
        </Script>
        <Shell>{children}</Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
