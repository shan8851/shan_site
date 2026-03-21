---
title: One Agent is Enough
summary: Why most people don't need five agents talking to each other. Skills, crons, playbooks, and memory in a single-agent setup that actually works.
date: "2026-03-21"
tags:
  - ai
  - agents
  - productivity
  - openclaw
---

# One Agent is Enough

Everyone's building agent swarms right now. CEO agents delegating to researcher agents coordinating with writer agents managed by scheduler agents. Five permanent processes talking to each other so you can... check your calendar and summarise a link.

I've been running a single AI agent as my daily operating partner for a few months. It handles research, writing, morning briefings, email triage, code review delegation, weekly planning, monitoring, and raw thought capture. One agent. No coordinator. No swarm.

Most people don't need what they think they need.

## The multi-agent pitch

The common setup looks like this: a "researcher" agent for gathering info, a "writer" agent for content, a "coder" agent for implementation, a "scheduler" for ops, and a "coordinator" agent to manage them all.

It sounds great. Specialisation, parallel execution, separation of concerns. Engineering first principles applied to AI. Makes sense.

In practice? Context loss between agents. Coordination overhead that eats tokens. Debugging sessions where you're trying to figure out which agent misunderstood which other agent. 5x the config surface. Most of the "specialisation" is just a system prompt. You've built a distributed system to avoid writing clear instructions for one agent.

Even the legend that is [Andrej Karpathy](https://x.com/karpathy) states that a lot of time when AI agents fail it's a [skill issue](https://x.com/slow_developer/status/2035090249341444521?s=20)

## What actually works instead

I run one agent with four building blocks: skills, crons, playbooks, and memory. Between them, they cover every use case people build separate agents for.

**Skills replace specialist agents.** A skill is a reusable workflow definition. Instead of a "research agent", I have a research skill. It tells my agent how to review a link, what tools to use, what format to output, where to save results. Same agent, different context. The agent picks the right skill based on what I ask it to do.

I have skills for research, writing in my voice, raw note capture, weekly focus reviews, and a few others.

**Crons replace "always-on" agents.** My morning briefing runs at 7 AM via a cron job. It wakes the agent, runs a step-by-step playbook (calendar, tasks, weather, news, priorities), delivers the result, and goes back to sleep. People build a permanent "briefing agent" for this. A cron does it for a fraction of the cost and never drifts.

Same for monitoring. A heartbeat cron runs every hour, checks that channels are connected, crons are firing, nothing's broken. If everything's fine, it replies `HEARTBEAT_OK` and stops. If something's wrong, it alerts me. A checklist on a timer. Boring and reliable.

**Playbooks make crons deterministic.** A cron says when to run. A playbook says exactly what to do. Step-by-step, in order, with fallback rules for when things fail. The agent follows the playbook instead of improvising. This means the briefing has the same structure every morning. If something's off, I edit the playbook. I'm debugging a checklist, not an agent conversation.

**Memory replaces shared state.** One agent, one memory system, no sync problems. Daily notes for transient context, a durable file for long-term preferences and rules, and memory search for recall. No "knowledge base agent" needed. No context translation between agents that each have their own window.

## How it chains together

The building blocks above are nice in isolation. Where it gets good is when they combine.

Throughout the day, I dump raw thoughts and notes via a capture skill. No processing, just append to a file.

At 11:15 PM, a cron runs a synthesis playbook on that day's dumps. It extracts what shipped, what's in progress, any blockers, and suggests a priority for tomorrow. Writes a handoff file.

At 7 AM, the morning briefing cron picks up that handoff file, merges it with calendar, tasks, weather, and news, and delivers a briefing that leads with yesterday's context and today's priority.

That's three building blocks chaining into a daily feedback loop. No coordinator agent managing handoffs. No shared database between specialist agents. Just files on disk and a schedule.

The weekly loop works the same way. Sunday evening, a cron triggers the `weekly focus brief` skill, which reads the whole week's dumps and memory, produces patterns, risks, focus items. 30 minutes later, a separate cron triggers the agent self-improvement skill, which reviews the agent's own performance and proposes fixes. Two reviews, same agent, same evening.

## But what about sub-agents?

I use sub-agents. I spawn a coding agent when I need a PR reviewed or a feature built. It does the work, reports back, and disappears. Delegation to temporary workers, scoped to a single task. While this is technically multiple agents, I don't really see at that way and this is just a way to avoid blocking other work happening as much as anything else.

The distinction matters. A background task that runs for 10 minutes and returns a result is fine. Five permanent agents with their own personalities, memory systems, and communication protocols? That's just over-engineering. It looks impressive in a demo and falls apart when you actually need to debug why your "writer agent" ignored context your "researcher agent" already found.

## A concrete example

Last week I dropped a GitHub repo link in Discord and said "research this." The agent loaded the research skill, pulled the README, checked recent commits, looked at open issues, assessed repo health, and posted a structured review with a recommendation. Took about 90 seconds.

In a multi-agent setup, that's: a router deciding which agent gets the message, the research agent picking it up, doing the work, formatting a response, passing it back to the coordinator, the coordinator posting it to Discord. Same result, 3x the moving parts, 3x the failure surface. Not to mention most people also pair this with some mission control UI and kanban boards...

## When multi-agent actually makes sense

I'm not saying multi-agent is always wrong. There are real cases.

**Genuinely separate domains with different trust boundaries.** I actually run a second agent for family life on WhatsApp. Different workspace, different persona, different rules, different memory. It manages meal planning, family schedules, and partner check-ins. It doesn't share context with my work agent and shouldn't. That's a trust boundary, not an orchestration pattern. Work and family are different domains with different audiences and different stakes.

**Running a business with significant parallel workload.** If you have a team, customers, multiple products, and genuine parallel workstreams that can't share a context window, specialised agents start making sense. But you're building infrastructure at that point, not a personal productivity setup.

**Different users needing different personas.** A support agent and an internal ops agent probably should be separate.

For most individuals and small teams running a personal agent? One is enough.

## The real work

The setup is the work. Writing a good SOUL.md that defines how your agent communicates. Building skills that capture your actual workflows. Writing playbooks that make scheduled jobs deterministic. Curating memory so the agent has the right context without the noise.

None of that requires five agents. It requires one agent with clear instructions.

I've been logging the results week by week at [shan8851.com/log](https://www.shan8851.com/log). I've also open-sourced the setup: real SKILL.md files, real cron configs, real playbooks, and workspace templates at [github.com/shan8851/one-agent-is-enough](https://github.com/shan8851/one-agent-is-enough). Everything in that repo is based on what I actually run daily, not demo config. It has been tweaked slightly for public consumption but 90% of it is what I use everyday. Blind copy pasting other peoples setups usually renders meh results, which is why this is intentionally a starting point to build on, not a complete drop in system.

Stop creating a new agent every week. Start with one, build better rules and really question if you need another whenever you think about creating one.
