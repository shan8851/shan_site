export default function Now() {
  return (
    <section className=" space-y-8 text-base leading-relaxed text-text">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-green tracking-tighter">Now</h1>

        <div className="flex items-center gap-4 text-sm text-textSecondary">
          <span className="px-3 py-1 rounded-full bg-surface border border-border">
            Last updated:{' '}
            <span className="font-semibold text-orange">Aug 2025</span>
          </span>
          <a
            href="https://nownownow.com/about"
            className="hover:text-purple transition-colors underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutnownownow.com
          </a>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="p-6 rounded-lg border border-border bg-surface/50 space-y-4">
          <h2 className="text-2xl font-semibold text-purple tracking-tighter flex items-center gap-2">
            <span className="text-lg">💼</span> Work & Learning
          </h2>
          <div className="space-y-3 text-text/90">
            <p className="leading-loose">
              Recently joined Polygon as a full stack engineer, working on
              infrastructure and cross-chain solutions. Starting next week and
              excited to dive into building tools that could actually scale Web3
              to millions of users.
            </p>
            <p className="leading-loose">
              Currently brushing up on infrastructure patterns and cross-chain
              protocols - back to that sweet spot of being slightly out of my
              depth.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                DeFi
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                full stack
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                cross chain
              </span>
              <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
                dev tools
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface/50 space-y-4">
          <h2 className="text-2xl font-semibold text-purple tracking-tighter flex items-center gap-2">
            <span className="text-lg">🌱</span> Life & Balance
          </h2>
          <div className="space-y-3 text-text/90">
            <p className="leading-loose">
              Still active with squash and football regularly. Feeling fitter
              than I have in a while, but would like to add more lifting.
              Prioritising health, deep work, and staying present with my
              family.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <span className="text-xl">⚽</span>
                <span className="text-sm text-textSecondary">Football</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <span className="text-xl">🏋️‍♂️</span>
                <span className="text-sm text-textSecondary">Fitness</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <span className="text-xl">📚</span>
                <span className="text-sm text-textSecondary">Learning</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/60 rounded-lg border border-border">
                <span className="text-xl">🧑‍🤝‍🧑</span>
                <span className="text-sm text-textSecondary">Family</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
