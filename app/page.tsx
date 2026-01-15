import Image from 'next/image';
import {
  TWITTER_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  TELEGRAM_URL,
} from 'app/constants';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Terminal Window */}
      <div className="w-full max-w-2xl bg-surface border border-border rounded-lg overflow-hidden shadow-2xl shadow-green/5">
        {/* Terminal Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red" />
            <div className="w-3 h-3 rounded-full bg-amber" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>
          <span className="flex-1 text-center text-xs text-textTertiary">
            shan@web3:~
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header with avatar */}
          <div className="flex items-start gap-4">
            <Image
              className="rounded border border-green/50 w-16 h-16 md:w-20 md:h-20"
              src="/avatar.png"
              alt="avatar"
              height={80}
              width={80}
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-green">$</span>
                <span className="text-amber">whoami</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-greenMuted">
                shan8851.eth
              </h1>
              <p className="text-sm text-textSecondary">
                Senior Full Stack Engineer
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="text-textTertiary text-xs">
            {'─'.repeat(50)}
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">cat</span>
              <span className="text-text">mission.txt</span>
            </div>
            <p className="text-text pl-4 leading-relaxed">
              On a mission to bring all money on-chain.
              <br />
              Building the future of payments at{' '}
              <span className="text-magenta">Polygon</span>.
            </p>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">status</span>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              <span className="text-green text-sm">Payments on-chain</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">ls</span>
              <span className="text-text">./links</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-cyan group-hover:text-green">github</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  @shan8851
                </span>
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-cyan group-hover:text-green">x</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  @shan8851
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-cyan group-hover:text-green">linkedin</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  /in/asam-shan
                </span>
              </a>
              <a
                href={EMAIL_URL}
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-cyan group-hover:text-green">email</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  ping me
                </span>
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-cyan group-hover:text-green">telegram</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  @shan8851
                </span>
              </a>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">history</span>
              <span className="text-textTertiary">--previous</span>
            </div>
            <div className="pl-4 text-sm text-textSecondary">
              <span className="text-amber">Aragon</span>
              <span className="text-textTertiary"> | </span>
              <span className="text-amber">Cielo Finance</span>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">echo</span>
              <span className="text-text">$INTERESTS</span>
            </div>
            <div className="pl-4 text-xs text-textTertiary">
              [&quot;Payments&quot;, &quot;Stablecoins&quot;, &quot;Infrastructure&quot;, &quot;DeFi&quot;]
            </div>
          </div>

          {/* Prompt */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-green">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
