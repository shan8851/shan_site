---
title: I shipped FairSide
summary: Weekly football team picks were too much chaos, so I built a balancer that makes fair 5/6/7-a-side teams in seconds.
date: "2026-03-02"
tags:
  - building
  - launch
  - football
---

I shipped **FairSide**.

It builds fair 5v5, 6v6, and 7v7 teams in seconds.
No spreadsheet faff. No captains stacking one side.

Live: <https://www.fairside.app/>

![FairSide launch visual](/writing/fairside-launch-og.png)

## Why I built it
Every weekly kickabout has the same problem:
- too much time picking teams
- arguments about who is overpowered
- goalkeepers forgotten until the end
- same cliques together every week

I wanted something practical:
- fast enough to use pitch-side
- smart enough to account for roles and player level
- flexible enough to handle "these two together" and "split these two"

## What FairSide does
Core loop is simple:
1. Add players (quick mode or detailed ratings)
2. Set game format (5/6/7-a-side)
3. Add optional constraints (together/apart)
4. Generate balanced teams
5. Save and rerun from history next week

It also supports positional balance (including keepers), saved templates, and shareable match pages.

![FairSide tactical visual](/writing/fairside-launch-empty-state.png)

## Opinionated product choices
I deliberately kept the UX sharp:
- no account needed to get started
- one clear action: Start balancing
- advanced controls there when you need them, hidden when you don't

Most tools in this space are either too dumb or too bloated.
FairSide sits in the useful middle.

## Stack
Kept it boring on purpose:
- Next.js
- TypeScript
- Clerk
- Drizzle + Postgres
- Tailwind
- Vercel

No novelty tax. Just reliable parts.

![FairSide pitch](/writing/fairside-launch-pitch-bg.png)

## What’s next
Near term:
- tighter mobile flow for pitch-side use
- better fairness explainability (why this split was picked)
- easier weekly reruns for regular groups

Longer term:
- smarter suggestions from previous games
- optional public leaderboard-style stats per group

## The takeaway
This is the exact kind of product I like shipping.

Specific problem.
Clear user.
Small surface area.
Real weekly usage.

If your Sunday teams are always chaos, give it a go:
<https://www.fairside.app/>
