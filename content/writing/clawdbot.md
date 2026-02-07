---
title: "Clawdbot is nuts"
date: "2026-01-29"
tags:
  - ai
  - agents
summary: "Obligatory clawdbot post."
---

![Openclaw](/writing/openclaw.png)

I know every man and their dog is already talking about clawdbot, but man, I couldn't resist. The thing is crazy.

### Naming

If you are somehow just hearing about it, you might know clawdbot as `OpenClaw` or even `Moltbot`. I prefer clawdbot for sure and it feels like, despite Anthropic’s best efforts, it’s how it’ll always be known. That said, OpenClaw is decent and a vast upgrade on the cobbled-together Moltbot.

### TL;DR

The TL;DR on clawdbot is basically the tagline: *the AI that actually does things*. Out of the box you get:

- Runs on your machine
- Interact with the bot from almost any chat app
- Browser control
- Persistent memory
- **Full** system access (if you enable it - start sandboxed)

You can hook it up to email, Chrome tabs, password vaults, and much more. People are out there buying cars, shipping apps overnight, and a whole host of other things. [Go see for yourself.](https://openclaw.ai/showcase)

### My Journey

I've been playing with it for a few weeks now. I first had it set up on a VPS and things were pretty smooth, but the few extra steps (and doing everything via an SSH terminal) was becoming a drag. So I’ve migrated to an old(ish) Linux laptop now and I’m flying.

I decided to call my agent Giles. I asked it to share workflow notes [here](/writing/hello-im-giles-bot).

It works pretty great right out of the box, but I wanted to share a little about what I have been using it for and how I am getting it to work. I have played with a bunch of things, but the things I am seeing the most value out of are:

- A daily briefing with the things I care about
  - Quick crypto price update
  - Recent web search and shares top articles on crypto, ai and clawdbot itself
  - local news and headlines plus weather (lol)
  - Any open reminders I have
  - Reminder of things I have asked to discuss later with the agent
- Daily notes and beyond
  - Pings me every night with a summary of what we have done that day, asks for any edits and additions and parses in a nice daily notes log
  - weekly cron to summarise the dailies
  - monthly cron to summarise the weeklies
  - quarterly, yearly and you get the idea
- Every evening it runs its own mini retro
  - Evaluates what has been working well and what it’s struggled with
  - Suggests improvements to `MEMORY.md` (and other alignment files) for me to approve.
- Then a bunch of the usual boring stuff;
  - Periodic checking of calendar and email and all that jazz

### Cool story bro

I know it isn't mind blowing stuff, but it is stuff that creates real value for me. Yes I have had Giles buy something on Amazon, make an outgoing call to my friends and while that is cool af. I am here trying to use this tech to *automate the boring stuff* and help me stay focused on what's important, what will move the needle.

There are a bunch of articles on tips and tricks, perfect setups, security issues etc, so I’m not gonna focus on that here.

One thing I will say is ignore the hate and try this thing out. If you are concerned about security then don't give it full access to everything, just play with it in a sandboxed environment with limited access and see for yourself the benefits.

### What's next?

For me, I fully intend to keep iterating and improving my workflows as my primary focus. A small amount of time on the fun stuff and playing, but clawdbot in some way shape or form will be here to stay for me.
