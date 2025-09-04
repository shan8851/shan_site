import Image from 'next/image';
import {
  TWITTER_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  TELEGRAM_URL,
} from 'app/constants';
import {
  LuMail,
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuSend,
} from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full flex flex-col items-center gap-8 py-12">
        {/* Avatar */}
        <div className="relative">
          <Image
            className="rounded-full w-32 h-32 border-2 border-purple/70 shadow-2xl"
            src="/avatar.png"
            alt="avatar"
            height={128}
            width={128}
          />
          <div className="absolute -bottom-2 -right-2 bg-purple text-background rounded-full p-2">
            <span className="text-xl font-bold">gm</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green via-green to-purple/70 bg-clip-text text-transparent tracking-tight">
            shan8851.eth
          </h1>
          <p className="text-xl font-medium text-text">
            Senior Full Stack Engineer
          </p>
          <p className="text-base text-textSecondary max-w-md mx-auto leading-relaxed">
            Building the bridge between blockchain potential and real-world
            adoption. Currently at Polygon, working on the future of
            interoperability.
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-purple/70">
          <div className="w-2 h-2 bg-purple rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-textSecondary">
            Shipping at Polygon
          </span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
          <a
            href={EMAIL_URL}
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface border border-border/50 hover:border-green/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all hover:scale-105 w-[130px]"
          >
            <LuMail className="text-2xl text-green" />
            <span className="text-sm font-medium text-textSecondary group-hover:text-text">
              Email
            </span>
          </a>

          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface border border-border/50 hover:border-purple/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all hover:scale-105 w-[130px]"
          >
            <FaXTwitter className="text-2xl text-purple" />
            <span className="text-sm font-medium text-textSecondary group-hover:text-text">
              X
            </span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface border border-border/50 hover:border-orange/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all hover:scale-105 w-[130px]"
          >
            <LuLinkedin className="text-2xl text-orange" />
            <span className="text-sm font-medium text-textSecondary group-hover:text-text">
              LinkedIn
            </span>
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface border border-border/50 hover:border-red/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all hover:scale-105 w-[130px]"
          >
            <LuGithub className="text-2xl text-red" />
            <span className="text-sm font-medium text-textSecondary group-hover:text-text">
              GitHub
            </span>
          </a>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface border border-border/50 hover:border-pink/30 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all hover:scale-105 w-[130px]"
          >
            <LuSend className="text-2xl text-pink" />
            <span className="text-sm font-medium text-textSecondary group-hover:text-text">
              Telegram
            </span>
          </a>
        </div>

        {/* Quick Bio */}
        <div className="text-center max-w-lg space-y-2 pt-4">
          <p className="text-sm text-textSecondary leading-relaxed">
            Previously: Aragon | Cielo Finance
          </p>
          <p className="text-xs text-textTertiary">
            DeFi • Infrastructure • Cross-chain • Developer Tools
          </p>
        </div>
      </div>
    </div>
  );
}
