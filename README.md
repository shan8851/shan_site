# shan_site

Personal site for [shan8851.com](https://shan8851.com) — part public front door, part proof-of-work archive, part agent-friendly profile surface.

Built with Next.js 16, React 19, TypeScript, Tailwind v4, and markdown-backed content.

## What lives here

The site is deliberately small at the top level:

- `/` — homepage / operator front door
- `/now` — current priorities and active focus
- `/projects` — featured builds, shipped work, and active projects
- `/log` — terse proof-of-work updates
- `/uses` — tools, models, and day-to-day workflow
- `/notes` — short written posts from `content/writing`
- `/chat` — grounded site chat over public site content
- `/agents.json` — small machine-readable profile export

## Content model

Most of the site is driven by plain TypeScript content files plus markdown posts:

- `app/content/operatorFrontDoor.ts` — homepage, now page, projects framing
- `app/content/proofLog.ts` — log entries
- `app/content/uses.ts` — uses page content
- `app/content/profile.ts` — shared profile data
- `content/writing/*.md` — notes / writing posts
- `lib/writing.ts` — markdown parsing, reading-time, heading extraction

The intent is boring maintenance: update content files, ship, move on.

## Site chat

The site chat is intentionally constrained.

- Route: `app/api/chat/route.ts`
- Context builder: `lib/chatContext.ts`
- UI: `app/components/ChatPanel.tsx`

It uses OpenRouter, builds a context bundle from the public site content, rate-limits requests, and is instructed to answer only from that supplied context. If the answer is not on the site, it should say so plainly.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
pnpm dev
pnpm lint
pnpm type-check
pnpm build
```

## Notes

- This repo is content-heavy by design. Keep additions sharp.
- Prefer updating existing content over adding new top-level complexity.
- If something starts feeling clever, it is probably drifting.
