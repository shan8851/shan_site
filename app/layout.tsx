import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from './components/footer';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

import type { Metadata } from 'next';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  title: 'Shan8851',
  description: 'Full Stack Web3 Engineer | DeFi Builder | Product-Focused',
  icons: {
    icon: '/avatar.png',
  },
  openGraph: {
    title: 'Shan8851',
    description: 'Full Stack Web3 Engineer | DeFi Builder | Product-Focused',
    url: baseUrl,
    siteName: 'Shan8851',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Shan8851 – Full Stack Web3 Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shan8851',
    description: 'Full Stack Web3 Engineer | DeFi Builder | Product-Focused',
    creator: '@shan8851',
    images: [`${baseUrl}/og.png`],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-background text-text antialiased font-sans min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 px-4 sm:px-6 md:px-8 w-full max-w-3xl mx-auto py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="px-4 sm:px-6 md:px-8 w-full max-w-3xl mx-auto">
        <nav className="flex items-center justify-end gap-5 text-md font-medium text-text py-4">
          <NavLink href="/">home</NavLink>
          <NavLink href="/now">/now</NavLink>
          <NavLink href="/cv">cv</NavLink>
          <NavLink href="/writing">writing</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-green  transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
