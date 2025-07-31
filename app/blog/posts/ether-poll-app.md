---
title: EtherPoll
summary: Vote on Ethereum’s spiciest topics.
publishedAt: "2025-05-14"
tags: builder, solidity, learning
---

I was hoping for a quicker turn around for my first project since [going back to scrappy](https://www.shan8851.com/blog/back-to-scrappy), but happy to share I have completed my first project [EtherPoll](https://ether-poll-app.vercel.app/). It's a simple application, where anybody can create a topic for the ethereum community to vote on. No governance here - all signal. Go take a peek - hopefully it is intuitive enough that you don't need an explanation, but here are a couple of images

![etherpoll](/etherpoll1.png)

![etherpoll](/etherpoll2.png)


## The contract

The actual solidity code, which is what I am trying to get better at is pretty minimal, but I wanted something I could just smash out for the first one, but it got me used to writing solidity again without having to look up new things every other line and also working with custom errors, emitting events to help my UI and a bunch of other stuff. The code is [here](https://github.com/shan8851/EtherPoll) for anybody interested.

## The UI

The UI is my bread and butter, NextJS, tailwind and wagmi. I have spun up a bunch of these - so much so that my next project might be a minimal starter app that I will for sure use myself but might ship for others to use if they wish too.

## What did I learn?

Honestly. A bunch! Now fine, the contract is simple, but I did spend time thinking about what I do and don't want to store on the blockchain, what events I need to emit, how I can try save some gas. For instance I upload the actual topic content to IPFS, so that onchain I only need to store a simple string of the IPFS cid. This means I don't need to put a complex json object onchain.

Outside of this I learnt the pitfalls of going 100% onchain. So as it is now Etherpoll does not have a backend of it's own, it is not using a subgraph of any kind. I am directly reading from the blockchain and updating my UI. Why? Well because I wanted to be 100% onchain for now. Of course this has limitations such as:

- As the number of topics grow it will be a hefty RPC call needed to get them
- Makes filtering, searching and other nice stuff on the frontend a little more problematic - in terms of all the heavy lifting on the client

Those are the main things that having a subgraph or a custom indexer would help with. But again, the main learning for me right now is Solidity - I need to keep banging out contracts, so until something is a real project I expect to get users or better yet actually has users and some of these problems become a reality I will likely keep things like this.

## What next?

I have a few ideas (as well as the web3 starter) but nothing concrete yet. Watch this space.
