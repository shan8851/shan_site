---
title: Introducing ReactifySVG
summary: Toolt to transform SVGs into React components.
publishedAt: "2023-10-27"
tags: Side project, react, open source
---

After converting many and SVG to react components during Cielo's redesign and new icon library I wanted to try and automate the process. After thinking about my next side project for some time it felt like the opportunity was perfect.

So I decided to jump in and develop my own tool - introducing [ReactifySVG](https://www.reactifysvg.xyz/) . The concept is simple, you paste in SVG code and are returned a react component. There is some basic configuration you can add - component name, type of export (default, named) and that is pretty much it. Very much an MVP right now.

However, this is the first side project in a while I will actually use. I think others will find it useful too, but whether I spend time marketing or shouting about the tool is another story.

I hope the journey doesn't stop there, I want to keep iterating on the idea and I have a few early ideas for features I will add.

- Drag and drop functionality
- Live preview box so users can verify what the SVG will look like - this is surprisingly more difficult than I thought
- Extra configurations options like different css support and ofc Typescript

## What's under the hood?

The tech stack is a little overkill for the project if I am honest. I built this with the [T3 stack](https://t3.gg)
. Mainly because I love working with the stack, but it is still quite new to me. Secondly because I may further down the line if all goes well offer some paid features such as batch converting, storing past SVGs etc, so I figured setting up the stack ahead of time for that will be a wise choice.

Right now I am keeping a count of the SVGs transformed on the site in the database and that is about it.

The transformation itself is done on the server via the fantastic [SVGR](https://react-svgr.com/). It is a super useful CLI tool for turning SVG into react components, so essentially ReactifySVG is a web interface for SVGR, making it more accessible to those less comfortable on the command line.

I'd love it if you could try the tool, you can see the code [here](https://github.com/shan8851/ReactifySVG) and please feel free to submit feature requests or think about contributing.

![reactify](/reactify.png)
