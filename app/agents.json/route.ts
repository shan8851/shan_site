import { NextResponse } from 'next/server';

import { PROFILE } from '../content/profile';

export const runtime = 'edge';

export function GET() {
  // Keep this intentionally small + stable: a quick “agent-friendly” profile export.
  // Source of truth is app/content/profile.ts so UI and JSON stay in sync.
  return NextResponse.json(
    {
      version: 1,
      type: 'shan-profile',
      url: 'https://shan8851.com',
      updatedAt: new Date().toISOString(),
      profile: {
        handle: PROFILE.handle,
        name: PROFILE.name,
        tagline: PROFILE.tagline,
        bio: PROFILE.bio,
        links: PROFILE.links,
        pinned: PROFILE.pinned,
      },
    },
    {
      headers: {
        // Friendly caching: CDN can cache briefly; clients can re-fetch.
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400',
      },
    }
  );
}
