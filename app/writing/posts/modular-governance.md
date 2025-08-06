---
title: Modular Governance is starting to work
summary: Reflections on Aragon’s new governance stack, the shift toward composable decision flows, and what it means for the future of DAOs.
publishedAt: "2025-04-17"
tags: governance, dao, aragon, web3
---

Governance has always been a bottleneck for DAOs. Either it’s too rigid — forcing teams to fit into an outdated, one-size-fits-all model — or it’s custom-built, expensive to maintain, and slow to evolve. Neither is good enough if we want onchain organizations to scale and ship.

At Aragon, we just launched a new modular governance system, and seeing it live in production feels like a real turning point. Instead of picking a single governance model and hoping it holds up, orgs can now compose their own decision flows. Want optimistic execution with timelocks? Security councils with veto rights? Multi-stage approvals for treasury proposals? All doable - no code, no custom contracts, no audits required.

The best part? It’s all abstracted behind a clean UI. You define the stages, assign governing bodies, set thresholds, and deploy - everything onchain, no code. Under the hood it’s powered by Aragon OSx, but we abstract away all the smart contract complexity, allowing users to focus on their business logic without losing access to advanced capabilities.

Building the frontend has been the most interesting challenge I’ve worked on in a while. It’s not just about forms and buttons — it’s about surfacing complex protocol logic in a way that actually empowers people. We have obsessed over striking the balance between flexibility and simplicity, power and usability.

There's still a lot to build, but this feels like an inflection point. Governance that adapts with the org — not against it.

The new app is live on multiple chains, and we’re rolling out support for more all the time. Feedback is always welcome—jump into [Discord](https://discord.gg/aragonorg) and hit is up with your suggestions.
