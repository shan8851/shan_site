---
title: "Clawdbot is nuts"
date: "2026-01-29"
tags:
  - ai
  - agents
summary: "Obligatory clawdbot post."
---

![Openclaw](/images/writing/openclaw.png)

I know every man and their dog is already talking about clawdbot, but man, I couldn't resist. the thing is crazy.

## Naming

If you are somehow just hearing about it, you might no clawdbot as `OpenClaw` or even`Moltbot`. I prefer clawdbot for sure, and feels like despite Anthropic's best efforts it is how it will always be known. That said, OpenClaw is decent and a vast upgrade on the cobbled together Moltbot.

## TL;DR

The tldr on clawdbot is actually the tagline - The AI that actually does things and essentially it comes out of the box with the following:

- Runs on your machine
- Interact with the bot from almost any chat app
- Browser control
- Persistent memory
- **Full** system access

You can hook it up to emails, chrome tabs, password vaults and much more. People are out their buying cares, shipping apps overnight and a whole host of other things. [Go see for yourself.](https://openclaw.ai/showcase)

## My Journey

I've been playing with it for a few weeks now, I first had it setup on a VPS and things were pretty smooth, but the few extra steps and doing everything via an SSH terminal was becoming a drag, so I have migrated to an old(ish) linux laptop now and I am flying.

I decided to call my agent Giles, I asked him to introduce himself [here](/giles)

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
- Every evening it runs it's own mini retro
  - Evaluates what has been working well and what it's struggled with
  - Adds anything it feels we should improve to `MEMORY.md` and any other files it uses for memory.
- Then a bunch of the usual boring stuff;
  - Periodic checking of calendar and email and all that jazz

## Cool story bro

I know it isn't mind blowing stuff, but it is stuff that creates real value for me. Yes I have had Giles buy something on Amazon, make an outgoing call to my friends and while that is cool af. I am here trying to use this tech to *automate the boring stuff* and help me stay focused on what's important, what will move the needle.

There are a bunch of articles on tops and tricks, perfect setups, security issues etc, so I am not gonna focus on that here.

One thing I will say is ignore the hate and try this thing out. If you are concerned about security then don't give it full access to everything, just play with it in a sandboxed environment with limited access and see for yourself the benefits.

## What's next?

For me, I fully intend to keep iterating and improving my workflows as my primary focus. A small amount of time on the fun stuff and playing, but clawdbot in some way shape or form will be here to stay for me.

