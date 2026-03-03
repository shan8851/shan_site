---
title: OpenClaw is insane
summary: Obligatory OpenClaw post.
date: "2026-01-29"
updated: "2026-02-15"
tags:
  - ai
  - agents
---

![Openclaw](/writing/openclaw.png)

I had to jump on the ~clawdbot~ ~moltbot~ OpenClaw bandwagon. This thing is crazy.

### TL;DR

The elevator pitch is *the AI that actually does things* and it’s not wrong. Out of the box you get:

- Runs on your machine
- Interact with the bot from almost any chat app
- Browser control
- Persistent memory
- **Full** system access (if you enable it, start sandboxed)

[Go see for yourself.](https://openclaw.ai/showcase)

### My Journey

I’ve been playing for a few weeks now. Started on a VPS, since moved to an old linux machine. Some of the workflows and things I’ve set up:
- A daily briefing with the things I care about
  - Quick crypto price update
  - Recent web search and shares top articles on crypto, ai and OpenClaw itself
  - Local news and headlines plus weather (lol)
  - Any open reminders I have
  - Reminder of things I’ve asked to discuss later with the agent
- Daily notes
  - Pings me every night with a summary of what we’ve done that day
  - Weekly cron to summarise the dailies
  - Monthly cron to summarise the weeklies
  - Quarterly, yearly and you get the idea
- Every evening it runs its own mini retro
  - Evaluates what’s been working well and what it’s struggled with
  - Suggests improvements to `MEMORY.md` (and other alignment files) for me to approve
- Periodic checking of calendar and email

### So what

None of this is mind blowing. It’s safe, boring stuff that speeds me up and adds real value. Yeah I had a play and got the agent to order something from Amazon, call some friends and family for fun. But my actual use case is having the agent *automate the boring stuff* on my behalf.

There’s a lot of hate and a lot of mania around this. Both are probably warranted. I’d recommend playing around in whatever limits are comfortable for you. Most people will find at least one workflow worth automating.

### What’s next?

Iterate. Keep improving my workflows. Particularly interested in doing things onchain with agents.
