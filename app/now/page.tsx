export default function Now() {
  return (
    <section className="mt-10 space-y-8 text-base leading-relaxed text-text">
      <h1 className="text-4xl font-bold text-green tracking-tighter">Now</h1>

      <p className="text-textSecondary">
        Learn more about now pages at{' '}
        <a
          href="https://nownownow.com/about"
          className="text-green underline underline-offset-4 hover:text-purple transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutnownownow.com
        </a>
        .
      </p>

      <p className="text-sm text-textSecondary">
        last updated:{' '}
        <span className="font-semibold text-orange">Jul 2025</span>
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple tracking-tighter">
          Work & Learning
        </h2>
        <p className="leading-loose">
          I recently joined an early-stage DeFi startup as a Lead Full Stack
          Engineer, building an onchain asset management platform. It’s a
          one-stop shop for decentralized finance, with AI-driven features in
          development. I’m leading end-to-end development, crafting scalable and
          user-focused systems across the stack.
        </p>
        <p className="leading-loose">
          I’m deepening my expertise in backend infrastructure and AI
          integrations for DeFi, with a strong interest in RWA tokenization and
          stablecoin mechanics.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple tracking-tighter">
          Life & Balance
        </h2>
        <p className="leading-loose">
          Still active with squash and football regularly. Feeling fitter than I
          have in a while, but would like to add more lifting. Prioritising
          health, deep work, and staying present with my family.
        </p>
        <div className="text-2xl ">⚽ 🏋️‍♂️ 📚 🧠 🧑‍🤝‍🧑</div>
      </div>
    </section>
  );
}
