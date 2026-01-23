import Image from 'next/image';
import Link from 'next/link';
import {
  TWITTER_URL,
  GITHUB_URL,
  EMAIL_URL,
  TELEGRAM_URL,
} from 'app/constants';

const AGGLAYER_UI_URL = 'https://ui.agglayer.dev/';
const ARAGON_GOV_UI_KIT_URL = 'https://github.com/aragon/gov-ui-kit';
const ARAGON_APP_URL = 'https://github.com/aragon/app';
const WEB3PRIVACY_URL = 'https://web3privacy.info/';

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

          {/* Links (moved to footer) */}

          {/* Pages */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">ls</span>
              <span className="text-text">./pages</span>
            </div>
            <div className="pl-4 space-y-2">
              <Link
                href="/uses"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">uses</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  tools & setup
                </span>
              </Link>
              <Link
                href="/now"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">now</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  what I’m up to
                </span>
              </Link>
            </div>
          </div>

          {/* Pinned */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green">$</span>
              <span className="text-amber">ls</span>
              <span className="text-text">./pinned</span>
            </div>
            <div className="grid grid-cols-1 gap-2 pl-4">
              <a
                href={AGGLAYER_UI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">AggLayer UI</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  bridge to any AggLayer chain
                </span>
              </a>
              <a
                href={ARAGON_GOV_UI_KIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">Aragon gov-ui-kit</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  OSS component library for governance UIs
                </span>
              </a>
              <a
                href={ARAGON_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">Aragon app</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  on-chain governance dapp
                </span>
              </a>
              <a
                href={WEB3PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm hover:text-green transition-colors"
              >
                <span className="text-textTertiary">{'>'}</span>
                <span className="text-magenta group-hover:text-green">Web3Privacy Now</span>
                <span className="text-textTertiary group-hover:text-textSecondary">
                  regular contributor
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

          {/* Footer links */}
          <div className="pt-4 border-t border-border/60">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:text-green transition-colors"
              >
                telegram
              </a>
              <span className="text-textTertiary">·</span>
              <a
                href={EMAIL_URL}
                className="text-magenta hover:text-green transition-colors"
              >
                email
              </a>
              <span className="text-textTertiary">·</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:text-green transition-colors"
              >
                github
              </a>
              <span className="text-textTertiary">·</span>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:text-green transition-colors"
              >
                x
              </a>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <span className="text-green">$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
