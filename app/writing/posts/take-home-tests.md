---
title: Navigating Take-Home Coding Tests
summary: In this post, we delve into the intricacies of take-home coding assignments and why it's essential to go beyond just ticking boxes. Learn how your choices, big or small, speak volumes about you as a developer.
publishedAt: "2023-11-01"
tags: career, interviews, career advice
---

Recently in one of my dev discord groups we have been discussing a take-home-test one of the members recently did. The company in question did not end up moving ahead with the application and the developer could not really figure out why - for a few reasons - which we will get into. I also noticed a bunch of things that I have seen before, so I figured I would write a short piece that can hopefully help anybody who has an upcoming take home assignment or will do in the future.

## Not everything is how it seems

The first thing I notice is that a lot of developers seems to take any feedback they get from companies as gospel. So you may get something along the lines of

> Everybody loved chatting to you, you were a fantastic cultural fit, but we have decided not go ahead only because of X

Just because they say that the only reason you never progressed was ... that doesn't mean it is the only reason. Feedback these days is also very ChatGPTish and overly generic. In my opinion unless the feedback you receive after a rejection is very specific to you, then take it with a pinch of salt.

For example they could say something along the lines of "We noticed you did, X instead of Y, which shows a little lack of understanding of Z".  This is great, something specific you can work on.

So, that's the first thing, don't just choose to believe whatever narrative makes you feel better. Instead be super critical of your own solution and try figure out how you can improve, rather than just putting the rejection down to variance. This strategy is perfect because even if it was all down to variance you still come away learning and growing  because you are hyper critical of your own approach.

## Every choice you make says something about you

This is true pretty much always, but especially true in things like take home assignments. So decisions that may seem small and trivial to you are all the hiring manager has to go on, so they will make assumptions based on what you say and build, so just keep that in mind. I think the vast majority of us massively underestimate how true this is.

Going back to the developer I mentioned at the beginning of this post, they asked me and others to look over some code and share what they think they could improve, the vast majority of my suggestions were about readability, which I got the impression they didn't think were too important. This in my opinion is the first thing that makes one look junior - not caring about readability, not caring about naming things etc.

Here is an example that I seen in their code:

```jsx
<button onClick={() => { doSomething(); doSomethingElse()}}>some button</button>
```

Code works - Awesome! Well, not really. This reads terribly, and is definitely better like this:
```jsx
const doSomeStuff = () => {
	doSomething();
	doSomethingElse();
}

<button onClick={doSomeStuff}>some button</button>
```


Another thing I noticed in their code was super redundant comments like this:

```jsx
// last index from array
const lastIndex = someArr[someArr.length - 1]

const handlePageChange = () => { // function to handle page change
	// logic for handling page change
}

```

These comments are totally redundant, so just add noise to the component and make it look cluttered and overly complex.

Again these are small details, but say a lot about the type of developer you are and in my opinion both of these examples scream inexperience.

## Going Beyond the Requirements

Another trend I have noticed is that a lot of more inexperienced developers look to tick the boxes in terms of what is required from the test - great - kind of.

They will then get some feedback like "The website you submitted was not responsive" or "We would have like to see some tests"

I have heard many an applicant then say things like, *If they wanted responsive why didn't the ask for it?* or *If I needed to write tests they should have been more specific*. Honestly I think both of these are poor and just excuses.

It's 2023, every site should be responsive, it is not a feature but a must in this day and age. If you need to be told this then it is just a massive red flag that you don't think about user experience or care about the quality of your work - remember - all of you decisions say something about you.

Testing is one that comes up frequently and I see so many people submit take home assignments with no tests. This alone is a huge opportunity for you to jump ahead of so many people by just including a few tests inside your repo you are going to submit. This is what doing that shows about you?

- You care about code quality
- You understand code needs to be tested before being merged to prevent bugs now and to make sure new code in the future does not break the code you have written today

> **bonus:** Writing tests also gives you an opportunity to talk about them. So you can explain why you added tests for one component over another. This shows you understand business needs too. For example an ecom site. The checkout is vital, if the checkout is broken the business loses revenue. So if you have limited time for tests then you would start with the checkout.

Discussing these points demonstrates that you're aware of—and invested in—the business side of things. This is huge - because really as developers our job is way more about the business side of thing than you might think.

So again, these tech tests are not specific for a reason. The company is giving you an opportunity to show that you understand UX, understand business needs and can prioritise your work. The more room for doing your own thing is actually better. It's an opportunity for you to show your understanding of everything.

## Wrapping Up

To sum it up, taking a take-home coding test isn't just about ticking boxes or meeting the bare minimum requirements. It's an audition—a chance for you to strut your stuff, showcasing not only your technical skills but your thought process, your attention to detail, and your understanding of the business and user needs.

Let's stop thinking of technical tests as hurdles to clear and start seeing them as opportunities to do good work. Trust me, the hiring managers are not just looking for the right answers - they're also looking for how you get there.

When you approach your next take-home assignment, remember that every line of code you write, every decision you make, reflects on you. Don't just aim for functionality, aim for excellence. If you bring this level of care and commitment to a simple test, it speaks volumes about what you'd bring to a full-time role.

So, before you hit that 'submit' button, take a step back. Review your code critically—not just for bugs or missing features but for readability and maintainability.

Remember you never get a second chance to make a first impression. Make it count.
