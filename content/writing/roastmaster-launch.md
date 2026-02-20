---
title: I built RoastMaster this week
summary: I wanted to ship something stupid-fun with real product constraints. RoastMaster is what came out.
date: "2026-02-20"
tags:
  - ai
  - building
  - launch
---

I shipped **RoastMaster**.

Upload a selfie.
Pick **Roast** or **Glaze**.
Get share-ready banter in seconds.

Live: <https://roastmyphoto.app/>

![RoastMaster landing page](/writing/roastmaster-launch-desktop.png)

## Why I built it
I wanted to build something that was:
- fun enough to share
- simple enough to launch quickly
- messy enough to teach me real product lessons
- have some concept of tuning and prompting an AI programmatically

No decks. No fake roadmap. Just build, test, ship.

## The stack
Kept this intentionally lean:
- Next.js (App Router)
- Clerk (auth)
- Stripe (one-time credits)
- Neon (Postgres)
- Upstash Redis (free quota/rate-ish controls)
- OpenRouter + Grok-style prompting for outputs
- Vercel deploy + domains

Nothing exotic.

## The core product loop
I wanted one loop:
1. Upload image
2. Pick mode + intensity
3. Generate output
4. Copy / share to X
5. Buy credits when free quota runs out

If that loop feels smooth, the product works.

## Prompt tuning was the real work
Early versions showed Grok can be truly unhinged. Some top tier roasting, but just word diarrhoea.
Too much degen slang, random AI/crypto content - just a mess.

This was also the main point of this build.

The fix was not softening.
The fix was constraints:
- keep it savage at high intensity
- one clear punchline per line
- short lines
- force focus on the image
- coherent flow across the full block

Brutal + readable every time.

## Launch-day bugs (and what they taught me)
I hit exactly the kind of stuff you only catch in prod:

- Clerk custom domain DNS issues
- Stripe webhook pointed at wrong URL once (fml)
- Large camera uploads hitting Vercel payload limits before server-side compression

I did add compression on the server, but last one was a reminder:
**server-side compression doesn’t help if the request never reaches your server.**

So I added client-side resize/compression before upload. Slightly slower from upload to outcome. But less 'your pic is too big' errors. Acceptable trade-off.

![RoastMaster showcase](/writing/ego-melt.png)

## What I’d do differently next time
Honestly not too much. These little fails and bugs are fine when the intention is moving quickly. But if I wanted to be a little more careful then:

- Not setup stripe products and clerk auth on mobile while eating lunch 😏
- Think about image optimisation and vercel limits from day 1
- More prompt tweaking ahead of development.

## Where this goes next
Near-term:
- keep improving output quality (especially intensity 4/5)
- tighten share loop and creator UX
- improve analytics around conversion + retention

Longer term:
- more styles, better voice presets
- possibly non photo stuff - roast my cv, roast my job application etc
- better anti-abuse controls
- richer output cards

## The takeaway
This is exactly the kind of build I want to keep doing.

Small scope.
Real users.
Real money flow.
Real bugs.
Fast feedback.

That loop compounds.

---

If you test it, send me your output.
If it’s mid, I’ll tune it.
If it’s savage, post it.
