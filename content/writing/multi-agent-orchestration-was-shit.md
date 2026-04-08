---
title: I tried multi-agent orchestration and it was shit
summary: The honest failure story of building a mission control style multi-agent setup, watching it fall over, and going back to boring workflows that actually work.
date: "2026-04-08"
tags:
  - ai
  - agents
  - productivity
---

# I tried multi-agent orchestration and it was shit

I built a mission control for my AI agents. It had a router, a coordinator, specialist workers, shared state, and a dashboard that showed what each agent was doing in real time. It looked fucking incredible on screen.

It lasted about two weeks before I binned it.

## Why I did it

I'd been running a single agent for a while and it was working fine. But I kept seeing demos. Agent swarms. Orchestrator patterns. "Spawn three researchers, fan out, synthesise." The architecture diagrams were amazing. Five boxes connected by arrows, each one labelled with a responsibility. Software engineering principles applied to AI. Separation of concerns. Single responsibility. It made total sense in theory.

So I built it.

## What I built

The setup was classic over-engineering disguised as ambition:

- A **router agent** that received all messages and decided which specialist to delegate to
- A **research agent** for link reviews and information gathering
- A **planning agent** for daily and weekly scheduling
- A **writing agent** for drafting and editing content
- A **coordinator agent** that managed handoffs between the others and tracked state
- A shared memory layer so they could all read each other's context

Each agent had its own system prompt, its own personality, its own workspace. The coordinator had a Kanban-style task tracker. When I dropped a link in Discord, the router would pick it up, classify it as research, hand it to the research agent, which would do the work, pass the result back to the coordinator, which would post it.

Three agents touching one link. To summarise a GitHub README...

## Where it went wrong

**Context loss between handoffs.** Useful stuff was surfaced, but it went through so many different places that lots of things were malformed, less structured and thorough and a million other things by the time they got back to me.

**Token cost.** Half my spend was agents just talking to each other. Not doing work. Just updating state, confirming receipts, passing messages. The coordinator spent most of its time maintaining the coordination layer.

**Debugging was a nightmare.** More moving parts, more stack to trace through. Anytime something goes wrong with a single agent setup you just check the main logs and the answer is usually starring you in the face. With 5 agents it's like you need to solve some weird puzzle before finding anything useful.

**Config surface was enormous.** Five agents meant five system prompts to maintain, five sets of behavioural rules, five memory contexts to keep aligned. Every time I wanted to change how my agent handled something, I had to figure out which of the five needed the update and whether it broke any of the others.

**Most of the "specialisation" was just a prompt.** My research agent and my writing agent were the same model with different instructions. I hadn't built specialist agents. I'd built one agent wearing many different hats and added infrastructure complexity.

## The moment I gave up

One morning the briefing didn't arrive. The 7 AM cron fired, the router picked it up, classified it as a planning task, delegated to the planning agent, which tried to pull yesterday's notes from the shared memory, which had a sync issue, so it returned an error to the coordinator, which logged the failure and... just stopped. No fallback. No retry. No briefing.

I woke up to nothing. No useful output in the logs and that was that.

My old single-agent setup would've just followed the playbook and delivered the briefing. One agent. One set of instructions. One failure point.

## What I went back to

One agent. Skills for different tasks. Crons for scheduled work. Playbooks for deterministic behaviour. Memory for context.

Same stuff I'd been doing before I got seduced by architecture porn.

The morning briefing? A cron fires at 7 AM, the agent follows a step-by-step playbook, delivers the result, goes back to sleep. One moving part. When it breaks, I know exactly where to look.

Research? I drop a link, the agent loads the research skill, does the work, posts the result. No router. No delegation chain. No context translation between agents.

I wrote about this before from an architecture perspective. This is the personal experience that led to it - the literal process of overcomplicating something, watching it fail, and choosing boring over clever.

## The honest take

Multi-agent orchestration will matter eventually. For teams, for businesses, for genuine parallel workloads that can't share a context window. The research is real and the patterns will mature.

But for personal use? For one person trying to get their daily briefing, triage their email, plan their meals, and track their fitness? Building a distributed system to handle that is like hiring five middle managers to organise your grocery list.

Simple boring systems beat sprawling clever ones. Every time.

I lost two weeks to that experiment. The only thing I learned was that I already had the answer and chose to ignore it because a diagram with five boxes looked better than a diagram with one.
