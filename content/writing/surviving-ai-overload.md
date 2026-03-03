---
title: Surviving the overload
summary: The follow up. How I'm actually dealing with agentic coding burnout.
date: "2026-03-03"
tags:
  - ai
---

A few weeks ago I wrote about [the cognitive overload from agentic coding](/writing/ai-overload). That post was the diagnosis. This is what I'm doing about it.

## Kill the "one more prompt" loop

The hardest thing to fix was the compulsive prompting. Before work. Before bed. In the gap between meetings. It felt productive but it was just accumulating unreviewed output.

So I set a hard rule: when I close the laptop, I close the laptop. No "just one more quick thing" because it's never quick and it's never one. The prompt will still be there tomorrow. The context in your head won't be any worse for sleeping on it.

## Smaller sessions, full understanding

AI lets you produce at a pace that used to be impossible. That's the upside. The downside is shipping code you don't fully understand, and the cost of that only shows up later when something breaks and you're staring at logic you can't explain.

I've started working in shorter, focused blocks. Prompt, review, understand, repeat. Not prompt, prompt, prompt, review later (or never). Every session ends when I can explain what changed and why. If I can't, I'm not done.

Better yet, separate the two completely. Prompt in one sitting, walk away, come back fresh to review. You catch way more when you're not still in build mode. Same reason you wouldn't review your own PR five minutes after opening it.

## Make the agent teach you

One thing that's helped a lot: after a big chunk of generated code, I get the agent to write a summary. Pull out the core decisions, the patterns used, anything non-obvious. It becomes a reference I can actually internalise instead of just skimming a diff and hoping it sticks.

This also catches gaps fast. If the summary mentions a pattern or concept I don't recognise, that's the signal to stop and learn it before moving on.

I've started keeping a running "didn't understand" list too. Every time something comes up in a review that I can't fully explain, I write it down. Not to fix immediately, just to batch into a learning block later. Patterns emerge quick and you start seeing the same gaps repeat.

## Spend time in the system, not just the code

This one's maybe the most important. When AI handles more of the code generation, it's tempting to just live in the prompt loop and forget about the bigger picture. But the system still exists. The architecture, the data flow, the deployment pipeline, the stuff that doesn't fit in a single file.

I'm deliberately spending time reading existing code I didn't write (and didn't prompt). Walking the system. Understanding how pieces connect. It's the kind of work that doesn't feel productive in the moment but pays off every time something breaks in production.

On existing codebases, one of the highest ROI things you can do is write good alignment files (`CLAUDE.md`, `AGENTS.md`, project-level instructions). Codestyle, naming conventions, patterns you use, architectural decisions, things you never want the agent to do. Put the work in upfront and the agent codes like you, not like a stranger parachuting into your repo. It won't eliminate review, but everything it produces will feel familiar instead of foreign. Way less "what is this" moments in the diff.

## The short version

Agentic coding is still the biggest productivity unlock I've found. But raw output isn't the goal. Understanding is. Slow down enough to keep up with what you're building.
