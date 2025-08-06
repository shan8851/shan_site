---
title: CryptoCoffee
summary: Introducing crypto coffee. A way to give back in ethereum.
publishedAt: "2023-11-05"
tags: blockchain, solidity, ethereum, learning, crypto
---

Another weekend, another project shipped! This weekend was my first foray into the world of Solidity for a long time and man it feels good to be back! CryptoCoffee is a simple idea, heavily inspired from [buymeacoffe](https://cryptocoffee.vercel.app/), but of course with a crypto twist.

Users can simply connect their wallet, choose a dollar amount and send the equivalent in ETH to the contract. That's it!

## The Contract

As I mentioned the contract is super simple by design. Firstly so I could get it done this weekend and secondly because I am basically starting again with Solidity. You can check out the code [here](https://github.com/shan8851/crypto-coffee-contract).

### tl:dr;

1. A function for users to send ether as a way of donating a virtual coffee
2. A function for me (the contract owner) to withdraw the balance in the contract
3. Exposes a coffee count for me to keep track of the number of donations

Each function has a corresponding even that I can listen for on the frontend. For tooling and deployment in the past I have always reached for hardhat, which is JS based and made it easy for me to interact with. However [Foundry](https://book.getfoundry.sh/)seems to be getting a lot of love in the community so I wanted to give it a go. An added bonus is that tests can be written in Solidity, which gives me more practice.

I didn't get too in depth with Foundry, but the experience was great and it will likely now be my go to.

## The Frontend

I stayed with what I know here - NextJS, Typescript and TailwindCSS. If it ain't broke, don't fix it!

However, in my previous blockchain projects I had always used either ethersjs or web3js, but I went for [wagmi](https://wagmi.sh/) this time around. Wagmi is react hooks for ethereum and makes it super easy to read, write and interact with smart contracts.

I barely touched the surface, but love it so far. Look out for future posts where I will go more in depth into wagmi features.

## Just The Beginning!

It's safe to say this weekend project has been a great success, I got back into writing Solidity, worked with new tools and libraries like wagmi and foundry and managed to deploy a working version on the testnet!

But this is just the start, this is a super basic project, I have some ideas for improvements, but I want to go deeper and write more complex smart contracts and everything that comes with them.
