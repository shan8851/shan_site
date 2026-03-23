import './global.css';

import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import Script from 'next/script';

import { Shell } from './components/Shell';
export const metadata: Metadata = {
  metadataBase: new URL('https://shan8851.com'),
  title: 'Shan',
  description: 'full-stack systems for payments, bridging, and staking, plus practical AI agent orchestration.',
  keywords:
    'Shan, shan8851, full-stack, payments, bridging, staking, reliability, testing, docs, ai agents, orchestration, polygon, engineering',
  authors: [{ name: 'shan8851' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Shan',
    description: 'full-stack systems for payments, bridging, and staking, plus practical AI agent orchestration.',
    url: 'https://shan8851.com',
    siteName: 'Shan',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Shan — full-stack systems for payments, bridging, and staking, plus practical AI orchestration.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shan',
    description: 'full-stack systems for payments, bridging, and staking, plus practical AI agent orchestration.',
    creator: '@shan8851',
    images: [
      {
        url: '/twitter-image',
        alt: 'Shan — full-stack systems for payments, bridging, and staking, plus practical AI orchestration.',
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
        <Script
          defer
          src="https://tux.taild7426e.ts.net:8443/script.js"
          data-website-id="b43ec14e-bca4-4340-acac-679222b62935"
        />
      </body>
    </html>
  );
}
