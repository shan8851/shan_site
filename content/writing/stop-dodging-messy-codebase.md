---
title: Stop dodging the messy codebase
summary: The rough codebases everyone avoids are where the real learning and visibility live. A recent dependency upgrade turned into a full cleanup and the team noticed.
date: "2026-03-14"
tags:
  - engineering
  - career
  - refactoring
---

I used to dodge rough codebases. Ticket comes in for a repo everyone knows is a mess, and you quietly hope someone else picks it up. Most people do.

I stopped doing that. And it's been one of the best shifts I've made as an engineer.

## The ticket that started it

Simple brief: swap out a wallet integration in a bridging app. Should've been a few hours. Then I hit the first wall: the new wallet library needed ethers v6, and the codebase was on v5.

Most people would've forced the upgrade and moved on. But when I looked closer, most of the ethers usage could just move to viem. Keep ethers as a peer dep for the wallet lib, strip out the direct dependency, and avoid the same problem next time a library bumps a major version.

That's when the dominoes started.

## What I actually found

Once you start pulling threads in a neglected codebase, you find everything. This one had 2.5k-line components held together with if/else chains. Hundreds of commented-out lines where someone disabled a feature but left all the supporting code in place: components, utils, helpers, all still sitting there.

3 entire bridge integrations that were no longer used. Each with their own utility files, chain configs, the lot. 4 dependencies I could just remove. Old chain configurations for networks that weren't supported anymore.

The tests were worse. Mock-heavy, testing nothing real, most of them already broken. I deleted them all. Sounds aggressive, but broken tests that nobody's fixing aren't a safety net. They're noise that trains the team to ignore red CI.

## How agents helped

Claude was genuinely useful here, not for the cleanup itself but for the prep work. Digging through peer dependency trees, reading docs between ethers v5 and v6 to figure out what was a clean swap vs what needed a workaround, tracing import chains to verify what was actually dead.

I used knip to flag unused exports and dead code, then Claude to verify the traces and check I wasn't about to rip out something that was still referenced 3 levels deep. It cut the discovery phase from hours to minutes. The actual refactoring still needed a human making judgement calls, but the "is this really dead?" question got answered fast.

## The reaction

Team loved it. People specifically called out that the massive components were now smaller and easier to reason about. I shared my plan for fast-follow PRs and other team members started talking about doing the same thing in other repos across the org.

That's the bit that matters most. One cleanup breeds more. When someone demonstrates that it's worth doing, and the team sees the result, it becomes normal instead of heroic.

## Why nobody does this

The thing that surprised me wasn't the state of the code. Rough codebases exist everywhere. What surprised me was how easy some of it was. The ethers v5 to v6 migration would've been trivial even without the viem move. Someone could've done it ages ago.

But nobody did because every person who touched this repo was just trying to finish their ticket and get out. Quick fix, ship it, move on. Each one left the codebase slightly worse than they found it.

That's the pattern worth breaking. Not because you're a hero, but because the alternative is a codebase that gets harder to work in every single sprint until nobody wants to touch it at all.

## The actual advice

Next time you're assigned something in a codebase that makes you wince: don't just do the ticket. Look around. Spend an extra hour understanding what's dead, what's outdated, what's making everyone's life harder than it needs to be.

Sometimes you'll get lucky and the cleanup is trivial. All the impact, fraction of the effort. Other times it's a grind, but you'll learn things about dependency management, tooling, and system design that you won't get from greenfield work.

Either way, your team notices. And the codebase gets a little less shit every time.
