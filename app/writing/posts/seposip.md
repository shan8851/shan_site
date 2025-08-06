---
title: Introducing _sepoSip - A Sepolia Faucet for Ethereum Developers
summary: Sepolia testnet faucet.
publishedAt: "2024-09-20"
tags: Side project, solidity, web3
---

![seposip](/sepo.png)

As developers in the Ethereum ecosystem, we've all faced the minor yet persistent hurdle of obtaining test ETH on various networks. Whether it's for testing smart contracts or experimenting with new dApps, having easy access to testnet funds is crucial.  To help combat this I created [_sepoSip](https://sepo-sip.vercel.app/), a testnet faucet for the Sepolia network designed to streamline this process and foster community collaboration.

## Why _sepoSip?

The Sepolia testnet is the go-to network for Ethereum developers due to its stability and efficiency. However, finding a reliable faucet can sometimes be a challenge. [_sepoSip](https://sepo-sip.vercel.app/)aims to fill this gap by providing a straightforward and user-friendly platform where developers can request test ETH and contribute to the community.

## Key Features

- Request Test ETH: Get 0.05 ETH every 24 hours to keep your development and testing workflow uninterrupted.
- Community Donations: Support the faucet by donating ETH, ensuring that others in the community can benefit as well.
- Faucet Statistics: Stay informed with real-time stats on total donations, number of donors, and more.
- Leaderboard: A nod to our top contributors — recognising those who keep the faucet flowing.
- Wallet Connectivity: Seamless integration with wallets using RainbowKit, making it easy to interact with the faucet.
- Secure Smart Contracts: Built with OpenZeppelin libraries and Foundry, prioritizing security and reliability.

## The Tech Stack

The [_sepoSip](https://sepo-sip.vercel.app/) smart contract was written in Solidity and deployed and tested via Foundry. Leveraging OpenZeppelin's contracts for *Ownable* and *ReentrancyGuard* ensures robust access control and protection against common vulnerabilities. On the frontend we have a simple NextJS application paired with wagmi, viem, tanstack query and tailwind for a clean and responsive UI.

The smart contract code is verified on [Etherscan](https://sepolia.etherscan.io/address/0x9c1bf4facda0312df3a377d14d0c2429df96a044#code) and you can view the full source code on [GitHub](https://github.com/shan8851/Sepo-Sip).

## The Why

[_sepoSip](https://sepo-sip.vercel.app/) was born out of a desire to simplify the process of obtaining test ETH on the Sepolia network. By providing a reliable faucet, we aim to empower developers to focus on building and testing their projects without the added stress of acquiring testnet funds.I hope this faucet not only aids developers in their projects but also encourages a spirit of collaboration and mutual support.

Have questions, suggestions, or just want to chat? Feel free to reach out on [X](https://x.com/shan8851). I'd love to hear from you!
