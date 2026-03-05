---
title: Prompting beat model choice on RoastMaster (until it didn’t)
summary: I tuned Grok and Sonnet on RoastMaster. Prompt constraints made the biggest difference first, then model personality became the deciding factor.
date: "2026-03-04"
tags:
  - ai
  - prompting
  - building
  - roastmaster
---

I built RoastMaster to ship something fun.

It turned into an amazing learning experience.

I started with the usual question: which model gives the best output? After a lot of testing, that was only half the story.

The first wins came from constraints.
The later wins came from model routing.

## Starting point: Grok with loose prompts
My first setup was basically "go hard". I had an extreme prompt. Zero guardrails and the results were chaotic.

Sometimes it produced a killer line. Then it would follow it with a load of random and unconnected metaphors. That mixed with weird crypto-bro energy and pure internet talk.

It was high energy, but useless.

You can't build a shareable product loop on vibes and one lucky punchline.

## What I changed first
I stopped trying to "ask better" and started enforcing shape.

These constraints moved quality the most:

- 1 to 2 visual hooks max
- 3 to 4 lines max
- opener, escalation, closer
- no emojis!
- no disconnected one-liners
- keep one voice throughout
- british humour

That one set of constraints sanded down a lot of nonsense.

Outputs became more coherent and more shareable almost immediately.

## What still failed after constraints
Even with tighter prompts, model defaults still bled through.

Grok at high intensity could still wander into random rage text.
Sonnet could stay too polite unless pushed hard.

So the system got better, but it was still clear each model had a native personality fighting the instructions. For example even when explicitly told to use profanity, sonnet simply ignored.

It became clear model choice mattered too.

## Grok vs Sonnet after the prompt pass
After the guardrails were in place, the behaviour gap was obvious.

### Grok
- higher ceiling for savage roasts
- lands nasty visual punchlines well
- will drop the f-bomb at well (even the c-bomb at times ffs)
- still drifts if rails are weak
- can jump from funny to edge-lord fast

### Sonnet
- much cleaner and more consistent copy
- better conversational flow
- better glaze output by a mile
- tends to be wordy
- intensity 4/5 can read too tame without explicit pressure

So yes, constraints helped both.
But they did not fully erase model behaviour.

## The current architecture
I ended up with a split:

- **Roast:** Grok with heavy guardrails
- **Glaze:** Sonnet with strict brevity and explicit style pressure

This gave the best mix of tone and consistency for how people actually use the app.

I also kept hard checks around output quality:

- reject and redo if glaze leaks roast language
- reject and redo if roast goes off-topic from image details
- strict line count and per-line length caps

The objective is simple: brutal and funny, not random and abusive.

## Successes and failures (so far)
### Successes
- output now reads like one person speaking
- lines reference actual visual details always
- social share examples feel more human
- high-intensity roast finally has teeth without pure gibberish

### Failures
- occasional over-swearing still slips through in roast 5
- Sonnet still tries to write a mini essay if not tightly boxed
- some outputs are technically sharp but not actually funny

That last one is important.
Good writing quality does not automatically equal funny.

## What building taught me that X threads didn’t
Prompting threads are useful for ideas.
They are bad at giving you reality.

I'd spent (wasted) a lot of time on threads and articles like this.

One evening shipping and tuning in a confined app taught me more than weeks of reading generic prompt advice.

If you're trying to get better at this, build a small playground and force tight constraints.

Confined space helps.
You see failure patterns quickly, and you can iterate with real feedback instead of abstract debate.

## Where I’m taking it next
Next pass is focused on two things:

1) stronger intensity compliance for roast 4/5
2) shorter, snappier glaze without losing personality

After that, I want to publish the eval setup and examples.
Not because it's final, because people can copy the process and tune it for their own products.

That part is the real takeaway.

Prompting matters.
Model choice matters.
The loop of building, testing, and tightening beats both when used in isolation.
