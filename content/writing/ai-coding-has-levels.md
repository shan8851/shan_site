---
title: AI coding has levels
summary: Vibe coding is one way to use AI. Treating every AI-assisted workflow as the same thing is lazy.
date: "2026-04-27"
tags:
  - ai
  - career
---

I was talking to a mentee recently about a tech test.

The brief explicitly allowed AI. Fair enough. It also said you should be ready to talk about what you used it for, and that the point of the test was still to assess your knowledge.

That kicked off the real question: how much AI use is okay before it becomes "vibe coding"?

His framing was basically AI equals vibe coding. If a model wrote any of the code, that felt like cheating, or at least close enough to be uncomfortable.

I get why people land there. The phrase has become a catch-all for every AI-assisted workflow, which is annoying because it flattens something that has a lot more texture.

## Vibe coding is the loose version

To me, vibe coding is the low-friction version of AI coding.

You write a rough prompt, point the model at the problem, accept a bunch of output, then keep nudging it until the thing vaguely works. There might be some review at the end, but the main loop is "do the thing" and then react to whatever comes back.

Sometimes that's fine. For throwaway scripts, prototypes, experiments, internal tools, or anything where the cost of being wrong is tiny, go for it. There is no prize for hand-crafting some script you will run exactly once.

But that workflow has a ceiling.

The more important the code is, the more the looseness starts to hurt. You get naming that doesn't fit the codebase, patterns from nowhere, weird abstractions, tests that prove very little, and a final diff that technically works but feels like a stranger has been living in your repo.

That is the part people are reacting to when they complain about vibe coding.

The lack of taste and ownership is the problem.

## AI-first engineering is more deliberate

There is a massive difference between outsourcing judgement and using AI inside your judgement loop.

If I'm using AI properly, I'm still doing the engineering.

I'm debating the approach. I'm asking it to compare options. I'm rejecting bad ideas. I'm giving it project constraints. I'm telling it how I want things named, which patterns to follow, what style to avoid, where the existing architecture matters, and what tradeoffs are acceptable.

That sounds slower than just firing off a prompt, but it usually saves time because the output is closer to something I would have written myself.

That last part matters.

If you put enough work into constraints, examples, naming conventions, code style, project instructions, and review, the model can produce code that feels like it belongs. At that point, arguing about whether you typed every character yourself becomes silly.

The better question is: do you understand the solution well enough to own it?

Because that's the line. You are responsible for what you ship, whether you wrote it or not.

If you can explain the tradeoffs, defend the implementation, change it without the model, and spot when the model has done something stupid, then AI was part of your workflow. Which is table stakes nowadays btw.

If you can't explain the code without re-opening the chat, you didn't really build it. You supervised output and hoped for the best. Different thing.

## Tech tests make this awkward

Tech tests are where this gets messy.

If a company says AI is allowed, I would still be careful. Allowed doesn't mean "please outsource the entire exercise to Claude and send us the zip file".

The test is still trying to learn something about you. How you structure code. How you prioritise. How you name things. Whether you test sensibly. Whether you understand the boring edge cases. Whether you can make tradeoffs under time pressure.

AI can help with all of that, but it can also blur the signal if you let it take over.

For a tech test, I think the safest use is:

- use AI to pressure-test your plan
- use it to spot gaps in the requirements
- use it to generate boring scaffolding you fully understand
- use it to help write tests after you define what matters
- use it to review your own solution like a second pair of eyes

I would be much more cautious about letting it design the whole solution from a vague prompt. Even if the company technically allows it, you're creating a problem for yourself in the follow-up conversation.

The moment they ask "why did you build it this way?" you need a better answer than "the model seemed confident".

That answer will absolutely stink the place out.

## Show the thinking

There is another angle here though.

If AI is allowed, then showing a few iterations of your plan can actually be more impressive than pretending the finished solution appeared fully formed in your head.

A short note on how you used AI, where you rejected its suggestions, what tradeoffs you made, and what you changed after review says a lot.

It shows how you reason. It shows how you instruct. It shows what you care about in software. It shows whether you can use the tools without becoming a passenger.

I wouldn't recommend doing this blindly for every company. Some reviewers will love it. Some will say they allow AI and then quietly mark you down for using it too much, because humans are famously consistent and rational...

But if the brief explicitly invites the conversation, there is a case for being bold.

Typing every character by hand is becoming a red flag. Owning the result is (and always has been) the stronger one.

## There are levels to this

This is the bit I think gets lost.

AI-assisted coding covers a stack of behaviours.

There is a spectrum:

- autocomplete and inline suggestions
- asking for syntax or API reminders
- rubber-ducking an approach
- generating small functions from a clear spec
- asking for test cases
- using an agent to make a scoped change
- letting an agent explore, plan, edit, test, and report back
- throwing a vague prompt at a blank repo and hoping vibes carry the day

Those workflows carry different levels of professional signal.

The difference is the amount of judgement you keep in the loop.

The weakest version is prompt and pray. The stronger version is closer to being a tech lead for a very fast junior engineer who has read the entire internet, has no taste by default, and will absolutely invent nonsense if you let it.

Useful, but needs managing.

## The short version

Vibe coding is one mode of AI coding. It is loose, fast, and often useful.

AI-first engineering is what happens when you bring taste, constraints, review, and actual understanding into the loop.

Use the tools. Just don't hide behind them.
