---
title: Mentoring juniors when agents write most of the code
summary: When agents handle implementation, mentoring shifts from teaching syntax to teaching judgement, debugging, and ownership.
date: "2026-03-07"
tags:
  - ai
  - mentoring
  - career
---

I've been thinking about this a lot. If you're a senior or staff engineer right now, the juniors you're mentoring are entering a profession that looks fundamentally different from the one you learned in.

They can generate working code faster than any junior could 3 years ago. The scaffolding, the boilerplate, the "how do I do X in Y framework" stuff. Agents handle it. Which is great. But it also means the traditional mentoring topics (code review feedback on syntax and patterns, pairing on implementations, pointing to docs) covers maybe 30% of what a junior actually needs to grow.

## The old model was all about implementation

Think about how most of us learned. You'd get a ticket, struggle with the implementation, ask for help, get a code review, learn from the feedback. The implementation struggle *was* the learning.

That struggle still exists, but it's compressed. A junior can prompt their way to a working solution in an hour. The question is whether they understand *why* it works, what trade-offs were made, and what breaks when the assumptions change.

If mentoring stays focused on implementation quality ("use this pattern," "rename this variable," "add a test here"), you're coaching a skill that agents do reasonably well. The unique human stuff (the stuff that makes someone a strong engineer over time) is getting less attention.

## What to teach instead

**Problem framing.** Before touching any code or prompt, can they articulate what they're actually solving? Not the ticket description. The real problem. Who's affected, what the constraints are, what success looks like. I've seen juniors jump straight to "the agent built this" without ever questioning whether "this" was the right thing to build.

**Trade-off reasoning.** Every solution involves choices. Speed vs correctness. Simplicity vs flexibility. Short-term hack vs long-term investment. Agents pick *a* solution. They don't weigh the options against your team's context, your deadline, or your system's existing patterns. Teaching juniors to identify and articulate trade-offs is probably the most impactful mentoring you can do right now.

**Debugging and failure analysis.** This is where I see the biggest gap. When agent generated code breaks (and it will), juniors need to diagnose why. Not just fix the symptom and re-prompt. Actually trace the failure, understand the root cause, and learn the underlying system behaviour. This is hard to teach through code review alone. It requires walking through failures together, asking "what would you check next?" and resisting the urge to just give the answer.

**Ownership of outcomes.** The agent wrote the code, but whose name is on the PR? Whose team runs this in production? If something breaks at 3am, an agent doesn't get paged. Teaching juniors that they own the outcome, regardless of who (or what) wrote the implementation, is a cultural lesson as much as a technical one. In other words, check your work.

## Concrete coaching patterns

A few things to do differently:

**Ask them about AI usage and the prompts they use.** There is still some taboo about using AI. It is decreasing, but there is still some, especially with juniors. Let them know it is part of the modern way of doing things, but be clear it is another skill they can improve. Ask them how they work, how they prompt, this will identify their thought process and give you great insight into how well they know (or don't know) the system/problem/requirements.

**Do whole system walkthroughs and architecture discussion.** Historically this wasn't really touched until later in career. Personally I think this was always a mistake. The most important skill has always been knowing how the pieces fit together and communicate with each other. This has never been more true, context is the bottleneck for agents, it can never have full context, so it is our job to know and understand the system to steer the agents when needed.

## The uncomfortable part

This kind of mentoring is slower and harder to measure. You can't point to a PR diff and say "I taught them this." The growth shows up over months: they start asking better questions, catching issues earlier in design, pushing back on requirements that don't make sense.

It also means accepting that your role as a mentor is less about transferring implementation knowledge and more about modelling engineering judgement. How you think about problems, how you weigh risks, how you decide what matters. That's harder to package into a code review comment, but it's the thing that actually builds strong engineers.

The juniors who learn to think clearly about problems, own their outcomes, and debug confidently will thrive regardless of how AI tooling evolves. The ones who only learn to prompt well will plateau the moment the tools change.
