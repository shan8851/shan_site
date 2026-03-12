---
title: I built grep for on-chain events
summary: I kept doing the same thing at work. So I built the tool I wanted and put it on the internet.
date: "2026-03-12"
tags:
  - web3
  - building
---

I kept doing the same thing at work. Fetch contract events, filter by block range, decode the logs, check the args. Over and over.

The tools exist. Etherscan has event tabs. Dune lets you write SQL. But for the thing I actually do most (paste a contract, pick a block range, find a specific event), nothing just does that cleanly. Every time it's either too clunky, too slow, or requires me to context-switch into a query language.

So I built the thing I wanted.

## The idea

[`chaingrep`](https://chaingrep.xyz) is basically grep for smart contract events. You give it a contract address, a chain, a block range, and optionally an event name. It fetches the logs, decodes them against the ABI, and gives you a clean table with full decoded args. Export to CSV or JSON when you're done.

No accounts. No SQL. No indexer setup. Just paste and search.

It started as a personal tool. Something I could keep open in a tab at work and use 10 times a day without thinking about it. But once it was working, it felt like the kind of thing other devs would want too.

## How it works

There are two modes.

**Sample mode** works out of the box with no setup. Queries go through a small hosted API that proxies requests to the chain via free-tier RPC endpoints. It's rate-limited (10 queries per 15 minutes, 10K block range cap) but genuinely usable for quick lookups. Most of the time when I'm debugging something at work, this is enough.

**BYOK mode** is for heavier use. You plug in your own RPC URL and everything runs directly from your browser. No requests hit any server. The same query engine that powers the API runs client-side, so the behaviour is identical. Your keys stay in localStorage and never leave the browser. I didn't want to build a backend that holds other people's API keys, so the tool just gets out of the way.

## How it's built

The core query engine is a shared TypeScript package that runs on both server and client. It handles the hard parts of working with `eth_getLogs` across different RPC providers.

**Adaptive pagination.** Every provider has different block range limits per request. Alchemy's free tier only allows 10 blocks (ol). Chainnodes gives you 20K. The engine starts with a conservative chunk size, then grows it when responses are light and shrinks it when providers push back with "too many results" errors. It adjusts on the fly.

**Provider-aware profiles.** The engine detects which provider you're using from the RPC URL hostname and applies provider-specific defaults for chunk sizes, concurrency limits, and backoff timing. Chainnodes gets 2 concurrent workers. Alchemy gets 1 with smaller chunks. Custom RPCs get safe middle-ground defaults.

**ABI resolution.** Before you can decode events, you need the contract's ABI. Chaingrep tries Sourcify first (full match, then partial), falls back to Etherscan V2 if you've added an API key, and lets you paste a manual ABI as a last resort. All client-side.

**Streaming progress.** For sample mode, the API streams progress events back to the browser as chunks complete. You see "fetching chunk 3 of 12" in real time instead of staring at a spinner wondering if anything is happening.

The whole thing is a pnpm monorepo. Vite and React 19 for the frontend, Hono for the API, viem for all the EVM work. Deployed on Cloudflare (Pages for the frontend, Workers for the API) at zero infrastructure cost.

## Getting it live

The original plan was a pure static site with no backend at all. Then the obvious problem: free-tier RPC keys baked into client-side code get extracted and abused immediately. So a thin API proxy went back in, purely to hold the RPC keys server-side and enforce rate limits.

Cloudflare Workers turned out to be a good fit. Hono has first-class Workers support, so the API needed minimal changes to run there. The streaming endpoint works perfectly. And the whole thing runs on the free tier (which is pretty generous for this kind of product).

One thing I didn't expect: Alchemy's free tier only allows `eth_getLogs` queries across 10 blocks at a time. Scanning 100K blocks would take 10,000 individual RPC calls 💀. Chainnodes turned out to be far more generous (20K block range, 30MB response cap), which is what powers sample mode.

## What I'd like to have done

Ideally I would make this more usable out of the box, in terms of less limiting and larger block range. But with RPCs it's just cost and I never intended to have this as a product that charges or whatever. Nothing novel about what was done here, just convenience.

So the middle ground is sharing something and then allowing users to use their own keys or self host.

## Try it

Chaingrep is open source and live at [chaingrep.xyz](https://chaingrep.xyz). It supports Ethereum, Sepolia, Polygon, and Base. Adding a new chain is a config change, not a rewrite.

I'm using it daily at work already. If you spend any time poking at contract events, give it a try. PRs are welcome if you want to hack on it.
